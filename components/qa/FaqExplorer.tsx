"use client";

import { useMemo, useState } from "react";
import Accordion, { type QA } from "@/components/Accordion";
import { faqs, faqCategories } from "@/lib/faq";

const tabs = ["すべて", ...faqCategories] as const;

const catEn: Record<string, string> = {
  入学募集: "ADMISSION",
  入学手続: "PROCEDURE",
  授業内容: "LESSONS",
  学校生活: "CAMPUS LIFE",
  就職進路: "CAREER",
};

const suggestions = ["未経験", "不登校", "転入学", "門限", "騎手"];

/**
 * AI検索風のFAQエクスプローラー。
 * キーワード入力によるリアルタイム絞り込み + カテゴリタブ + アコーディオン表示。
 */
export default function FaqExplorer() {
  const [query, setQuery] = useState("");
  const [activeCat, setActiveCat] = useState<string>("すべて");

  const filtered = useMemo(() => {
    const q = query.trim().toLowerCase();
    return faqs.filter((f) => {
      if (activeCat !== "すべて" && f.cat !== activeCat) return false;
      if (!q) return true;
      return (f.q + f.a).toLowerCase().includes(q);
    });
  }, [query, activeCat]);

  const groups = useMemo(
    () =>
      faqCategories
        .map((cat) => ({
          cat,
          items: filtered
            .filter((f) => f.cat === cat)
            .map<QA>(({ q, a }) => ({ q, a })),
        }))
        .filter((g) => g.items.length > 0),
    [filtered]
  );

  return (
    <div>
      {/* AIサーチ風の検索ボックス */}
      <div className="mx-auto max-w-3xl rounded-3xl border border-cream-300 bg-white p-6 shadow-soft md:p-8">
        <div className="flex items-center gap-2">
          <span className="inline-flex items-center gap-1.5 rounded-full bg-pine-950 px-3 py-1 text-[10px] font-bold tracking-[0.25em] text-gold-300">
            <svg
              width="12"
              height="12"
              viewBox="0 0 24 24"
              fill="currentColor"
              aria-hidden
            >
              <path d="M12 2l2.1 5.9L20 10l-5.9 2.1L12 18l-2.1-5.9L4 10l5.9-2.1L12 2z" />
              <path d="M19 15l1 2.8 2.8 1-2.8 1-1 2.8-1-2.8-2.8-1 2.8-1 1-2.8z" />
            </svg>
            AI Q&amp;A SEARCH
          </span>
          <span className="text-[11px] text-ink-500">
            気になる言葉を入力すると、答えが絞り込まれます
          </span>
        </div>

        <label className="mt-4 flex items-center gap-3 rounded-full border-2 border-cream-300 bg-cream-50 px-5 py-3.5 transition focus-within:border-gold-500 focus-within:bg-white md:px-6">
          <svg
            width="18"
            height="18"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2.4"
            strokeLinecap="round"
            className="shrink-0 text-gold-600"
            aria-hidden
          >
            <circle cx="11" cy="11" r="7" />
            <path d="M20 20l-3.6-3.6" />
          </svg>
          <input
            type="search"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="質問を入力してください（例: 未経験でも大丈夫？）"
            aria-label="質問を検索"
            className="w-full bg-transparent text-sm text-ink-900 outline-none placeholder:text-ink-500/60 md:text-[15px]"
          />
          {query && (
            <button
              type="button"
              onClick={() => setQuery("")}
              className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-cream-200 text-xs font-bold text-ink-500 transition hover:bg-cream-300"
              aria-label="入力をクリア"
            >
              ×
            </button>
          )}
        </label>

        <div className="mt-4 flex flex-wrap items-center gap-2">
          <span className="text-[11px] font-bold text-ink-500">
            よく検索される言葉：
          </span>
          {suggestions.map((s) => (
            <button
              key={s}
              type="button"
              onClick={() => setQuery(s)}
              className="rounded-full border border-cream-300 bg-cream-50 px-3 py-1 text-[11px] font-bold text-pine-700 transition hover:border-gold-500 hover:bg-white"
            >
              {s}
            </button>
          ))}
        </div>
      </div>

      {/* カテゴリタブ */}
      <div
        className="mt-10 flex flex-wrap justify-center gap-2 md:gap-3"
        role="tablist"
        aria-label="質問カテゴリ"
      >
        {tabs.map((tab) => {
          const active = activeCat === tab;
          return (
            <button
              key={tab}
              type="button"
              role="tab"
              aria-selected={active}
              onClick={() => setActiveCat(tab)}
              className={`rounded-full px-5 py-2.5 text-xs font-bold transition duration-300 md:text-sm ${
                active
                  ? "bg-pine-800 text-white shadow-soft"
                  : "border border-cream-300 bg-white text-ink-700 hover:border-gold-500 hover:text-pine-800"
              }`}
            >
              {tab}
            </button>
          );
        })}
      </div>

      {/* ヒット件数 */}
      <p aria-live="polite" className="mt-8 text-center text-xs text-ink-500">
        全{faqs.length}問中{" "}
        <span className="font-serif text-lg font-bold text-gold-600">
          {filtered.length}
        </span>{" "}
        件の回答が見つかりました
      </p>

      {/* 結果表示 */}
      {groups.length > 0 ? (
        <div className="mt-8 space-y-12">
          {groups.map((g) => (
            <div key={g.cat}>
              <div className="mb-4 flex items-baseline gap-3">
                <span className="text-[10px] font-bold tracking-[0.35em] text-gold-600">
                  {catEn[g.cat]}
                </span>
                <h3 className="font-serif text-lg font-bold text-pine-950 md:text-xl">
                  {g.cat}に関するQ&amp;A
                </h3>
                <span className="text-[11px] text-ink-500">
                  {g.items.length}件
                </span>
              </div>
              <Accordion items={g.items} />
            </div>
          ))}
        </div>
      ) : (
        <div className="mx-auto mt-8 max-w-2xl rounded-3xl border border-cream-300 bg-white p-10 text-center shadow-soft">
          <p className="font-serif text-lg font-bold text-pine-950">
            該当するQ&amp;Aが見つかりませんでした。
          </p>
          <p className="mt-3 text-sm leading-7 text-ink-700">
            別の言葉で検索してみるか、カテゴリを「すべて」に切り替えてみてください。
            <br />
            お急ぎの場合は、このページ下部のお電話・お問い合わせフォームからお気軽にどうぞ。
          </p>
          <button
            type="button"
            onClick={() => {
              setQuery("");
              setActiveCat("すべて");
            }}
            className="mt-6 inline-flex items-center gap-2 rounded-full border-2 border-pine-800 px-6 py-3 text-sm font-bold text-pine-800 transition hover:bg-pine-50"
          >
            検索条件をリセットする
          </button>
        </div>
      )}
    </div>
  );
}
