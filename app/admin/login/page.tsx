"use client";

import { Suspense, useState } from "react";
import { useRouter, useSearchParams } from "next/navigation";
import Image from "next/image";
import { site } from "@/lib/site";

function LoginForm() {
  const router = useRouter();
  const searchParams = useSearchParams();
  const next = searchParams.get("next") || "/admin";

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setLoading(true);
    setError(null);
    try {
      const res = await fetch("/api/admin/login", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email, password }),
      });
      const data = await res.json();
      if (!res.ok) {
        setError(data.error ?? "ログインに失敗しました。");
        setLoading(false);
        return;
      }
      router.push(next);
      router.refresh();
    } catch {
      setError("通信エラーが発生しました。時間をおいて再度お試しください。");
      setLoading(false);
    }
  }

  return (
    <div className="flex min-h-screen items-center justify-center bg-pine-950 px-6 py-16">
      <div className="w-full max-w-sm">
        <div className="mb-8 flex flex-col items-center text-center">
          <Image
            src="/images/logo.png"
            alt={site.name}
            width={220}
            height={44}
            className="h-9 w-auto"
          />
          <p className="mt-6 text-[10px] font-bold tracking-[0.4em] text-gold-400">
            ADMIN
          </p>
          <h1 className="mt-2 font-serif text-xl font-bold text-white">
            管理画面ログイン
          </h1>
        </div>

        <form
          onSubmit={handleSubmit}
          className="space-y-4 border border-white/10 bg-pine-900/60 p-7 shadow-lift backdrop-blur"
        >
          {error && (
            <p className="rounded border border-red-400/40 bg-red-500/10 px-3 py-2 text-xs font-bold text-red-200">
              {error}
            </p>
          )}
          <div>
            <label className="mb-1.5 block text-[11px] font-bold tracking-wide text-white/70">
              メールアドレス
            </label>
            <input
              type="email"
              required
              autoComplete="username"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full rounded border border-white/20 bg-white/5 px-4 py-2.5 text-sm text-white outline-none transition placeholder:text-white/30 focus:border-gold-500 focus:bg-white/10"
              placeholder="admin@example.com"
            />
          </div>
          <div>
            <label className="mb-1.5 block text-[11px] font-bold tracking-wide text-white/70">
              パスワード
            </label>
            <input
              type="password"
              required
              autoComplete="current-password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full rounded border border-white/20 bg-white/5 px-4 py-2.5 text-sm text-white outline-none transition placeholder:text-white/30 focus:border-gold-500 focus:bg-white/10"
              placeholder="••••••••"
            />
          </div>
          <button
            type="submit"
            disabled={loading}
            className="w-full rounded-full bg-sun-500 py-3 text-sm font-bold text-pine-950 shadow-soft transition hover:shadow-lift disabled:opacity-50"
          >
            {loading ? "ログイン中…" : "ログイン"}
          </button>
        </form>
      </div>
    </div>
  );
}

export default function AdminLoginPage() {
  return (
    <Suspense fallback={null}>
      <LoginForm />
    </Suspense>
  );
}
