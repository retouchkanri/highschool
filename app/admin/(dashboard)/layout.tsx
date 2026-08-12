import type { Metadata } from "next";
import Link from "next/link";
import AdminLogoutButton from "@/components/admin/AdminLogoutButton";

export const metadata: Metadata = {
  title: "管理画面",
  robots: { index: false, follow: false },
};

const navItems = [
  { href: "/admin", label: "ダッシュボード" },
  { href: "/admin/posts", label: "お知らせ・ニュース管理" },
  { href: "/admin/faqs", label: "よくある質問（FAQ）管理" },
];

export default function AdminDashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="min-h-screen bg-cream-100">
      <header className="border-b border-cream-300 bg-pine-950">
        <div className="mx-auto flex max-w-6xl flex-wrap items-center justify-between gap-4 px-6 py-4">
          <div className="flex flex-wrap items-center gap-1">
            <Link
              href="/admin"
              className="mr-3 font-serif text-sm font-bold tracking-wide text-white"
            >
              バジガク 管理画面
            </Link>
            <nav className="flex flex-wrap items-center gap-1">
              {navItems.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className="rounded-full px-3.5 py-1.5 text-xs font-bold text-white/80 transition hover:bg-white/10 hover:text-white"
                >
                  {item.label}
                </Link>
              ))}
            </nav>
          </div>
          <div className="flex items-center gap-3">
            <Link
              href="/"
              target="_blank"
              className="text-xs font-bold text-white/60 underline-offset-2 hover:text-white hover:underline"
            >
              サイトを見る ↗
            </Link>
            <AdminLogoutButton />
          </div>
        </div>
      </header>
      <main className="mx-auto max-w-6xl px-6 py-10">{children}</main>
    </div>
  );
}
