"use client";

import { useRouter } from "next/navigation";
import { useState } from "react";

export default function AdminLogoutButton() {
  const router = useRouter();
  const [loading, setLoading] = useState(false);

  async function handleLogout() {
    setLoading(true);
    await fetch("/api/admin/logout", { method: "POST" });
    router.push("/admin/login");
    router.refresh();
  }

  return (
    <button
      type="button"
      onClick={handleLogout}
      disabled={loading}
      className="rounded-full border border-white/25 px-4 py-1.5 text-xs font-bold text-white/85 transition hover:border-sun-400 hover:text-sun-400 disabled:opacity-50"
    >
      {loading ? "ログアウト中…" : "ログアウト"}
    </button>
  );
}
