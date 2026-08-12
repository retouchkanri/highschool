"use client";

import { useEffect, useState } from "react";
import type { Post, PostType } from "@/lib/supabase";

type FormState = {
  id: string | null;
  type: PostType;
  title: string;
  body: string;
  is_published: boolean;
  published_at: string;
};

function toDatetimeLocal(iso: string): string {
  const d = new Date(iso);
  const pad = (n: number) => String(n).padStart(2, "0");
  return `${d.getFullYear()}-${pad(d.getMonth() + 1)}-${pad(d.getDate())}T${pad(
    d.getHours()
  )}:${pad(d.getMinutes())}`;
}

function emptyForm(): FormState {
  return {
    id: null,
    type: "news",
    title: "",
    body: "",
    is_published: true,
    published_at: toDatetimeLocal(new Date().toISOString()),
  };
}

export default function AdminPostsPage() {
  const [posts, setPosts] = useState<Post[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [form, setForm] = useState<FormState>(emptyForm());
  const [saving, setSaving] = useState(false);
  const [filter, setFilter] = useState<"all" | PostType>("all");

  async function load() {
    setLoading(true);
    setError(null);
    try {
      const res = await fetch("/api/admin/posts");
      const data = await res.json();
      if (!res.ok) throw new Error(data.error ?? "読み込みに失敗しました。");
      setPosts(data.posts);
    } catch (e) {
      setError((e as Error).message);
    } finally {
      setLoading(false);
    }
  }

  useEffect(() => {
    load();
  }, []);

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setSaving(true);
    setError(null);
    try {
      const isEdit = Boolean(form.id);
      const res = await fetch(
        isEdit ? `/api/admin/posts/${form.id}` : "/api/admin/posts",
        {
          method: isEdit ? "PATCH" : "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({
            type: form.type,
            title: form.title,
            body: form.body,
            is_published: form.is_published,
            published_at: new Date(form.published_at).toISOString(),
          }),
        }
      );
      const data = await res.json();
      if (!res.ok) throw new Error(data.error ?? "保存に失敗しました。");
      setForm(emptyForm());
      await load();
    } catch (e) {
      setError((e as Error).message);
    } finally {
      setSaving(false);
    }
  }

  async function handleDelete(id: string) {
    if (!confirm("この投稿を削除しますか？")) return;
    setError(null);
    try {
      const res = await fetch(`/api/admin/posts/${id}`, { method: "DELETE" });
      const data = await res.json();
      if (!res.ok) throw new Error(data.error ?? "削除に失敗しました。");
      await load();
    } catch (e) {
      setError((e as Error).message);
    }
  }

  function startEdit(post: Post) {
    setForm({
      id: post.id,
      type: post.type,
      title: post.title,
      body: post.body,
      is_published: post.is_published,
      published_at: toDatetimeLocal(post.published_at),
    });
    window.scrollTo({ top: 0, behavior: "smooth" });
  }

  const visiblePosts = posts.filter((p) => filter === "all" || p.type === filter);

  return (
    <div>
      <h1 className="font-serif text-2xl font-bold text-pine-950">
        お知らせ・ニュース管理
      </h1>
      <p className="mt-2 text-sm text-ink-700">
        ここで公開した投稿は、トップページの「お知らせ」欄と /news ページに表示されます。
      </p>

      {error && (
        <p className="mt-4 rounded border border-red-300 bg-red-50 px-4 py-2.5 text-sm font-bold text-red-700">
          {error}
        </p>
      )}

      <form
        onSubmit={handleSubmit}
        className="mt-6 space-y-4 border border-cream-300 bg-white p-6 shadow-soft"
      >
        <p className="text-sm font-bold text-pine-950">
          {form.id ? "投稿を編集" : "新しい投稿を追加"}
        </p>
        <div className="grid gap-4 sm:grid-cols-[140px_1fr]">
          <div>
            <label className="mb-1 block text-xs font-bold text-ink-700">
              種類
            </label>
            <select
              value={form.type}
              onChange={(e) =>
                setForm((f) => ({ ...f, type: e.target.value as PostType }))
              }
              className="w-full rounded border border-cream-300 px-3 py-2 text-sm outline-none focus:border-gold-500"
            >
              <option value="news">ニュース</option>
              <option value="announcement">お知らせ</option>
            </select>
          </div>
          <div>
            <label className="mb-1 block text-xs font-bold text-ink-700">
              タイトル
            </label>
            <input
              required
              value={form.title}
              onChange={(e) => setForm((f) => ({ ...f, title: e.target.value }))}
              className="w-full rounded border border-cream-300 px-3 py-2 text-sm outline-none focus:border-gold-500"
            />
          </div>
        </div>
        <div>
          <label className="mb-1 block text-xs font-bold text-ink-700">
            本文
          </label>
          <textarea
            required
            rows={5}
            value={form.body}
            onChange={(e) => setForm((f) => ({ ...f, body: e.target.value }))}
            className="w-full rounded border border-cream-300 px-3 py-2 text-sm outline-none focus:border-gold-500"
          />
        </div>
        <div className="flex flex-wrap items-center gap-6">
          <div>
            <label className="mb-1 block text-xs font-bold text-ink-700">
              公開日時
            </label>
            <input
              type="datetime-local"
              value={form.published_at}
              onChange={(e) =>
                setForm((f) => ({ ...f, published_at: e.target.value }))
              }
              className="rounded border border-cream-300 px-3 py-2 text-sm outline-none focus:border-gold-500"
            />
          </div>
          <label className="flex items-center gap-2 pt-5 text-sm font-bold text-ink-700">
            <input
              type="checkbox"
              checked={form.is_published}
              onChange={(e) =>
                setForm((f) => ({ ...f, is_published: e.target.checked }))
              }
              className="h-4 w-4"
            />
            公開する
          </label>
        </div>
        <div className="flex gap-3">
          <button
            type="submit"
            disabled={saving}
            className="rounded-full bg-pine-800 px-6 py-2.5 text-sm font-bold text-white transition hover:bg-pine-700 disabled:opacity-50"
          >
            {saving ? "保存中…" : form.id ? "更新する" : "追加する"}
          </button>
          {form.id && (
            <button
              type="button"
              onClick={() => setForm(emptyForm())}
              className="rounded-full border border-cream-300 px-6 py-2.5 text-sm font-bold text-ink-700 transition hover:bg-cream-100"
            >
              キャンセル
            </button>
          )}
        </div>
      </form>

      <div className="mt-8 flex gap-2">
        {(["all", "news", "announcement"] as const).map((f) => (
          <button
            key={f}
            type="button"
            onClick={() => setFilter(f)}
            className={`rounded-full px-4 py-1.5 text-xs font-bold transition ${
              filter === f
                ? "bg-pine-800 text-white"
                : "border border-cream-300 bg-white text-ink-700 hover:bg-cream-100"
            }`}
          >
            {f === "all" ? "すべて" : f === "news" ? "ニュース" : "お知らせ"}
          </button>
        ))}
      </div>

      <div className="mt-4">
        {loading ? (
          <p className="text-sm text-ink-500">読み込み中…</p>
        ) : visiblePosts.length === 0 ? (
          <p className="text-sm text-ink-500">投稿がありません。</p>
        ) : (
          <div className="space-y-3">
            {visiblePosts.map((post) => (
              <div
                key={post.id}
                className="flex items-start justify-between gap-4 border border-cream-300 bg-white p-4 shadow-soft"
              >
                <div className="min-w-0 flex-1">
                  <div className="flex flex-wrap items-center gap-2">
                    <span
                      className={`rounded-full px-2.5 py-0.5 text-[10px] font-bold ${
                        post.type === "announcement"
                          ? "bg-gold-100 text-gold-700"
                          : "bg-pine-50 text-pine-700"
                      }`}
                    >
                      {post.type === "announcement" ? "お知らせ" : "ニュース"}
                    </span>
                    {!post.is_published && (
                      <span className="rounded-full bg-ink-100 px-2.5 py-0.5 text-[10px] font-bold text-ink-500">
                        非公開
                      </span>
                    )}
                    <time className="text-[11px] text-ink-500">
                      {toDatetimeLocal(post.published_at).replace("T", " ")}
                    </time>
                  </div>
                  <p className="mt-1.5 text-sm font-bold text-pine-950">
                    {post.title}
                  </p>
                  <p className="mt-1 line-clamp-2 text-xs leading-5 text-ink-700">
                    {post.body}
                  </p>
                </div>
                <div className="flex shrink-0 gap-2">
                  <button
                    type="button"
                    onClick={() => startEdit(post)}
                    className="rounded-full border border-cream-300 px-3.5 py-1.5 text-xs font-bold text-pine-800 transition hover:bg-cream-100"
                  >
                    編集
                  </button>
                  <button
                    type="button"
                    onClick={() => handleDelete(post.id)}
                    className="rounded-full border border-red-200 px-3.5 py-1.5 text-xs font-bold text-red-600 transition hover:bg-red-50"
                  >
                    削除
                  </button>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
