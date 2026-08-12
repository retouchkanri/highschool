"use client";

import { useEffect, useState } from "react";
import type { Faq } from "@/lib/supabase";
import { faqCategories } from "@/lib/faq";

type FormState = {
  id: string | null;
  category: string;
  question: string;
  answer: string;
  sort_order: number;
};

const emptyForm: FormState = {
  id: null,
  category: faqCategories[0],
  question: "",
  answer: "",
  sort_order: 0,
};

export default function AdminFaqsPage() {
  const [faqs, setFaqs] = useState<Faq[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [form, setForm] = useState<FormState>(emptyForm);
  const [saving, setSaving] = useState(false);

  async function load() {
    setLoading(true);
    setError(null);
    try {
      const res = await fetch("/api/admin/faqs");
      const data = await res.json();
      if (!res.ok) throw new Error(data.error ?? "読み込みに失敗しました。");
      setFaqs(data.faqs);
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
        isEdit ? `/api/admin/faqs/${form.id}` : "/api/admin/faqs",
        {
          method: isEdit ? "PATCH" : "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({
            category: form.category,
            question: form.question,
            answer: form.answer,
            sort_order: form.sort_order,
          }),
        }
      );
      const data = await res.json();
      if (!res.ok) throw new Error(data.error ?? "保存に失敗しました。");
      setForm(emptyForm);
      await load();
    } catch (e) {
      setError((e as Error).message);
    } finally {
      setSaving(false);
    }
  }

  async function handleDelete(id: string) {
    if (!confirm("この質問を削除しますか？")) return;
    setError(null);
    try {
      const res = await fetch(`/api/admin/faqs/${id}`, { method: "DELETE" });
      const data = await res.json();
      if (!res.ok) throw new Error(data.error ?? "削除に失敗しました。");
      await load();
    } catch (e) {
      setError((e as Error).message);
    }
  }

  function startEdit(faq: Faq) {
    setForm({
      id: faq.id,
      category: faq.category,
      question: faq.question,
      answer: faq.answer,
      sort_order: faq.sort_order,
    });
    window.scrollTo({ top: 0, behavior: "smooth" });
  }

  return (
    <div>
      <h1 className="font-serif text-2xl font-bold text-pine-950">
        よくある質問（FAQ）管理
      </h1>
      <p className="mt-2 text-sm text-ink-700">
        ここで追加・編集・削除した内容は、Q&amp;Aページと AI チャットの両方に反映されます。
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
          {form.id ? "質問を編集" : "新しい質問を追加"}
        </p>
        <div className="grid gap-4 sm:grid-cols-[180px_1fr_100px]">
          <div>
            <label className="mb-1 block text-xs font-bold text-ink-700">
              カテゴリ
            </label>
            <select
              value={form.category}
              onChange={(e) => setForm((f) => ({ ...f, category: e.target.value }))}
              className="w-full rounded border border-cream-300 px-3 py-2 text-sm outline-none focus:border-gold-500"
            >
              {faqCategories.map((c) => (
                <option key={c} value={c}>
                  {c}
                </option>
              ))}
            </select>
          </div>
          <div>
            <label className="mb-1 block text-xs font-bold text-ink-700">
              質問
            </label>
            <input
              required
              value={form.question}
              onChange={(e) => setForm((f) => ({ ...f, question: e.target.value }))}
              className="w-full rounded border border-cream-300 px-3 py-2 text-sm outline-none focus:border-gold-500"
            />
          </div>
          <div>
            <label className="mb-1 block text-xs font-bold text-ink-700">
              並び順
            </label>
            <input
              type="number"
              value={form.sort_order}
              onChange={(e) =>
                setForm((f) => ({ ...f, sort_order: Number(e.target.value) }))
              }
              className="w-full rounded border border-cream-300 px-3 py-2 text-sm outline-none focus:border-gold-500"
            />
          </div>
        </div>
        <div>
          <label className="mb-1 block text-xs font-bold text-ink-700">
            回答
          </label>
          <textarea
            required
            rows={4}
            value={form.answer}
            onChange={(e) => setForm((f) => ({ ...f, answer: e.target.value }))}
            className="w-full rounded border border-cream-300 px-3 py-2 text-sm outline-none focus:border-gold-500"
          />
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
              onClick={() => setForm(emptyForm)}
              className="rounded-full border border-cream-300 px-6 py-2.5 text-sm font-bold text-ink-700 transition hover:bg-cream-100"
            >
              キャンセル
            </button>
          )}
        </div>
      </form>

      <div className="mt-8">
        {loading ? (
          <p className="text-sm text-ink-500">読み込み中…</p>
        ) : faqs.length === 0 ? (
          <p className="text-sm text-ink-500">まだ質問が登録されていません。</p>
        ) : (
          <div className="space-y-3">
            {faqs.map((faq) => (
              <div
                key={faq.id}
                className="flex items-start justify-between gap-4 border border-cream-300 bg-white p-4 shadow-soft"
              >
                <div className="min-w-0 flex-1">
                  <span className="inline-block rounded-full bg-pine-50 px-2.5 py-0.5 text-[10px] font-bold text-pine-700">
                    {faq.category}
                  </span>
                  <p className="mt-1.5 text-sm font-bold text-pine-950">
                    {faq.question}
                  </p>
                  <p className="mt-1 line-clamp-2 text-xs leading-5 text-ink-700">
                    {faq.answer}
                  </p>
                </div>
                <div className="flex shrink-0 gap-2">
                  <button
                    type="button"
                    onClick={() => startEdit(faq)}
                    className="rounded-full border border-cream-300 px-3.5 py-1.5 text-xs font-bold text-pine-800 transition hover:bg-cream-100"
                  >
                    編集
                  </button>
                  <button
                    type="button"
                    onClick={() => handleDelete(faq.id)}
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
