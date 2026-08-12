import Link from "next/link";
import { getSupabaseAdminClient } from "@/lib/supabase";

export const dynamic = "force-dynamic";

async function getCounts() {
  try {
    const admin = getSupabaseAdminClient();
    const [{ count: postCount }, { count: faqCount }] = await Promise.all([
      admin.from("posts").select("*", { count: "exact", head: true }),
      admin.from("faqs").select("*", { count: "exact", head: true }),
    ]);
    return { postCount: postCount ?? 0, faqCount: faqCount ?? 0, error: null as string | null };
  } catch (e) {
    return { postCount: 0, faqCount: 0, error: (e as Error).message };
  }
}

export default async function AdminDashboardHome() {
  const { postCount, faqCount, error } = await getCounts();

  return (
    <div>
      <h1 className="font-serif text-2xl font-bold text-pine-950">
        ダッシュボード
      </h1>
      <p className="mt-2 text-sm text-ink-700">
        お知らせ・ニュースとよくある質問（FAQ）を管理できます。
      </p>

      {error && (
        <div className="mt-6 rounded border border-red-300 bg-red-50 p-4 text-sm text-red-700">
          <p className="font-bold">Supabase に接続できませんでした。</p>
          <p className="mt-1">{error}</p>
          <p className="mt-2 text-xs text-red-600">
            supabase/migrations/0001_init.sql を Supabase の SQL Editor で実行済みか確認してください。
          </p>
        </div>
      )}

      <div className="mt-8 grid gap-6 sm:grid-cols-2">
        <Link
          href="/admin/posts"
          className="block border border-cream-300 bg-white p-6 shadow-soft transition hover:-translate-y-1 hover:shadow-lift"
        >
          <p className="text-[10px] font-bold tracking-[0.3em] text-gold-600">
            POSTS
          </p>
          <p className="mt-2 font-serif text-3xl font-bold text-pine-950">
            {postCount}
          </p>
          <p className="mt-1 text-sm font-bold text-ink-900">
            お知らせ・ニュース管理へ →
          </p>
        </Link>
        <Link
          href="/admin/faqs"
          className="block border border-cream-300 bg-white p-6 shadow-soft transition hover:-translate-y-1 hover:shadow-lift"
        >
          <p className="text-[10px] font-bold tracking-[0.3em] text-gold-600">
            FAQS
          </p>
          <p className="mt-2 font-serif text-3xl font-bold text-pine-950">
            {faqCount}
          </p>
          <p className="mt-1 text-sm font-bold text-ink-900">
            よくある質問（FAQ）管理へ →
          </p>
        </Link>
      </div>
    </div>
  );
}
