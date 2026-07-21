"use client";

import { useEffect, useRef, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import Link from "next/link";
import { faqs } from "@/lib/faq";
import { site } from "@/lib/site";

/** チャットの1メッセージ */
type Msg = {
  id: number;
  role: "user" | "bot";
  text: string;
  cat?: string;
  related?: string[];
  fallback?: boolean;
};

/** 最初に表示するおすすめ質問 */
const starters = [
  "未経験でも大丈夫？",
  "寮の部屋は個室ですか？",
  "門限はありますか？",
  "騎手になるには？",
  "転入学はできますか？",
  "学費や奨学金について",
];

/** 表記ゆれを吸収する同義語辞書（入力に含まれる語 → FAQ側で使われる語） */
const synonyms: Record<string, string[]> = {
  学費: ["奨学金", "教育ローン", "納付", "入学金"],
  お金: ["奨学金", "教育ローン", "納付", "入学金"],
  費用: ["奨学金", "教育ローン", "納付", "入学金"],
  転校: ["転入学"],
  ごはん: ["食事"],
  ご飯: ["食事"],
  食堂: ["食事"],
  スマホ: ["wi-fi", "持ち込め"],
  携帯: ["wi-fi", "持ち込め"],
  部屋: ["個室", "寮"],
  ジョッキー: ["騎手"],
  休み: ["休日", "休暇"],
  初心者: ["未経験"],
};

const THRESHOLD = 0.25;

function normalize(s: string): string {
  return s
    .normalize("NFKC")
    .toLowerCase()
    .replace(/[\s、。・．，！？!?「」『』（）()]/g, "");
}

function bigrams(s: string): Set<string> {
  const grams = new Set<string>();
  for (let i = 0; i < s.length - 1; i++) grams.add(s.slice(i, i + 2));
  return grams;
}

/** FAQ1件に対する質問文の一致度（0〜1強）を返す */
function scoreFaq(rawQuery: string, faq: { q: string; a: string }): number {
  const query = normalize(rawQuery);
  if (!query) return 0;
  const nq = normalize(faq.q);
  const na = normalize(faq.a);

  let score = 0;

  const grams = bigrams(query);
  if (grams.size > 0) {
    let hit = 0;
    grams.forEach((g) => {
      if (nq.includes(g)) hit += 2;
      else if (na.includes(g)) hit += 1;
    });
    score += hit / (grams.size * 2);
  } else if (nq.includes(query) || na.includes(query)) {
    score += 0.5;
  }

  if (query.length >= 2 && (nq.includes(query) || na.includes(query))) {
    score += 0.4;
  }

  let bonus = 0;
  for (const [key, terms] of Object.entries(synonyms)) {
    if (!rawQuery.includes(key)) continue;
    for (const t of terms) {
      if ((nq + na).includes(normalize(t))) bonus += 0.15;
    }
  }
  score += Math.min(bonus, 0.3);

  return score;
}

const sparkle = (
  <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor" aria-hidden>
    <path d="M12 2l2.1 5.9L20 10l-5.9 2.1L12 18l-2.1-5.9L4 10l5.9-2.1L12 2z" />
    <path d="M19 15l1 2.8 2.8 1-2.8 1-1 2.8-1-2.8-2.8-1 2.8-1 1-2.8z" />
  </svg>
);

export default function ChatWidget() {
  const [open, setOpen] = useState(false);
  const [messages, setMessages] = useState<Msg[]>([]);
  const [input, setInput] = useState("");
  const [typing, setTyping] = useState(false);

  const idRef = useRef(0);
  const timerRef = useRef<ReturnType<typeof setTimeout> | null>(null);
  const scrollRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);

  const nextId = () => ++idRef.current;

  // 初回オープン時のあいさつ
  useEffect(() => {
    if (open && messages.length === 0) {
      setMessages([
        {
          id: nextId(),
          role: "bot",
          text: `こんにちは！${site.shortName}のAIチャットです。入学・寮生活・進路のことなど、よくある質問をもとに自動でお答えします。気になることを入力するか、下の質問をタップしてください。`,
          related: starters,
        },
      ]);
    }
  }, [open, messages.length]);

  // 新着メッセージで最下部へスクロール
  useEffect(() => {
    scrollRef.current?.scrollTo({
      top: scrollRef.current.scrollHeight,
      behavior: "smooth",
    });
  }, [messages, typing]);

  useEffect(() => {
    if (open) inputRef.current?.focus();
  }, [open]);

  useEffect(
    () => () => {
      if (timerRef.current) clearTimeout(timerRef.current);
    },
    []
  );

  function buildReply(text: string): Msg {
    if (/ありがとう|助かりました/.test(text)) {
      return {
        id: nextId(),
        role: "bot",
        text: "どういたしまして！ほかにも気になることがあれば、いつでも聞いてくださいね。体験入学・学校見学もお待ちしています。",
        related: starters.slice(0, 3),
      };
    }
    if (/^(こんにちは|こんばんは|おはよう|はじめまして)/.test(text.trim())) {
      return {
        id: nextId(),
        role: "bot",
        text: "こんにちは！ご覧いただきありがとうございます。入学・寮生活・進路のことなど、気になることを何でも聞いてください。",
        related: starters,
      };
    }

    const ranked = faqs
      .map((f) => ({ f, score: scoreFaq(text, f) }))
      .sort((a, b) => b.score - a.score);

    const best = ranked[0];
    if (best && best.score >= THRESHOLD) {
      const related = ranked
        .slice(1, 3)
        .filter((r) => r.score >= THRESHOLD * 0.6)
        .map((r) => r.f.q);
      return {
        id: nextId(),
        role: "bot",
        text: best.f.a,
        cat: best.f.cat,
        related,
      };
    }

    return {
      id: nextId(),
      role: "bot",
      text: "ぴったりの回答が見つかりませんでした…。「寮」「門限」「騎手」など、別の言葉でもう一度試してみてください。お急ぎの場合やくわしいご相談は、こちらからどうぞ。",
      fallback: true,
    };
  }

  function send(raw: string) {
    const text = raw.trim();
    if (!text || typing) return;
    setInput("");
    setMessages((m) => [...m, { id: nextId(), role: "user", text }]);
    setTyping(true);
    timerRef.current = setTimeout(() => {
      setMessages((m) => [...m, buildReply(text)]);
      setTyping(false);
    }, 700);
  }

  return (
    <>
      {/* チャット起動ボタン */}
      <AnimatePresence>
        {!open && (
          <motion.button
            type="button"
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 12 }}
            transition={{ duration: 0.2, ease: "easeOut" }}
            onClick={() => setOpen(true)}
            aria-label="AIチャット相談を開く"
            className="fixed bottom-5 left-5 z-[60] flex h-14 w-14 items-center justify-center rounded-full bg-pine-800 text-white shadow-lift transition hover:bg-pine-700 md:bottom-8 md:left-8"
          >
            <span className="relative flex h-8 w-8 items-center justify-center rounded-full bg-pine-950 text-gold-300">
              {sparkle}
              <span className="absolute -right-0.5 -top-0.5 h-2.5 w-2.5 rounded-full bg-sun-500" />
            </span>
          </motion.button>
        )}
      </AnimatePresence>

      {/* チャットウィンドウ */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, y: 20, scale: 0.98 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.98 }}
            transition={{ duration: 0.22, ease: "easeOut" }}
            role="dialog"
            aria-label="AIチャット相談"
            onKeyDown={(e) => {
              if (e.key === "Escape") setOpen(false);
            }}
            className="fixed bottom-5 left-5 z-[60] flex h-[min(72vh,34rem)] w-[min(92vw,24rem)] flex-col overflow-hidden rounded-2xl border border-cream-300 bg-white shadow-lift md:bottom-8 md:left-8"
          >
            {/* ヘッダー */}
            <div className="flex items-center gap-3 bg-pine-950 px-5 py-4">
              <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-pine-800 text-gold-300">
                {sparkle}
              </span>
              <div className="min-w-0 flex-1">
                <p className="font-serif text-[15px] font-bold leading-tight text-white">
                  {site.shortName} AIチャット相談
                </p>
                <p className="mt-0.5 text-[10px] text-cream-100/70">
                  よくある質問をもとに自動でお答えします
                </p>
              </div>
              <button
                type="button"
                onClick={() => setOpen(false)}
                aria-label="チャットを閉じる"
                className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full text-lg text-cream-100/80 transition hover:bg-pine-800 hover:text-white"
              >
                ×
              </button>
            </div>

            {/* メッセージ一覧 */}
            <div
              ref={scrollRef}
              role="log"
              aria-live="polite"
              className="flex-1 space-y-4 overflow-y-auto bg-cream-50 px-4 py-5"
            >
              {messages.map((m) =>
                m.role === "user" ? (
                  <div key={m.id} className="flex justify-end">
                    <p className="max-w-[85%] rounded-2xl rounded-tr-sm bg-pine-800 px-4 py-3 text-[13px] leading-6 text-white">
                      {m.text}
                    </p>
                  </div>
                ) : (
                  <div key={m.id} className="flex items-start gap-2.5">
                    <span className="mt-1 flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-pine-950 text-gold-300">
                      {sparkle}
                    </span>
                    <div className="min-w-0 max-w-[85%]">
                      <div className="rounded-2xl rounded-tl-sm border border-cream-300 bg-white px-4 py-3 shadow-soft">
                        {m.cat && (
                          <p className="mb-1.5 text-[10px] font-bold tracking-[0.2em] text-gold-600">
                            {m.cat}に関する回答
                          </p>
                        )}
                        <p className="text-[13px] leading-6 text-ink-900">
                          {m.text}
                        </p>
                        {m.fallback && (
                          <div className="mt-3 space-y-2 border-t border-cream-200 pt-3 text-[12px] font-bold">
                            <a
                              href={`tel:${site.tel}`}
                              className="block text-pine-800 underline underline-offset-2 hover:text-pine-700"
                            >
                              お電話で相談する（{site.tel}）
                            </a>
                            <a
                              href={site.forms.contact}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="block text-pine-800 underline underline-offset-2 hover:text-pine-700"
                            >
                              お問い合わせフォームへ →
                            </a>
                            <Link
                              href="/qa"
                              className="block text-pine-800 underline underline-offset-2 hover:text-pine-700"
                            >
                              よくある質問ページを見る →
                            </Link>
                          </div>
                        )}
                      </div>
                      {m.related && m.related.length > 0 && (
                        <div className="mt-2.5">
                          <p className="text-[10px] font-bold text-ink-500">
                            こちらもどうぞ：
                          </p>
                          <div className="mt-1.5 flex flex-wrap gap-1.5">
                            {m.related.map((q) => (
                              <button
                                key={q}
                                type="button"
                                onClick={() => send(q)}
                                className="rounded-full border border-cream-300 bg-white px-3 py-1.5 text-left text-[11px] font-bold text-pine-700 transition hover:border-gold-500 hover:text-pine-800"
                              >
                                {q}
                              </button>
                            ))}
                          </div>
                        </div>
                      )}
                    </div>
                  </div>
                )
              )}

              {/* 入力中インジケーター */}
              {typing && (
                <div className="flex items-start gap-2.5">
                  <span className="mt-1 flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-pine-950 text-gold-300">
                    {sparkle}
                  </span>
                  <div className="flex items-center gap-1.5 rounded-2xl rounded-tl-sm border border-cream-300 bg-white px-4 py-3.5 shadow-soft">
                    {[0, 1, 2].map((i) => (
                      <span
                        key={i}
                        className="h-1.5 w-1.5 animate-bounce rounded-full bg-gold-600"
                        style={{ animationDelay: `${i * 0.15}s` }}
                      />
                    ))}
                  </div>
                </div>
              )}
            </div>

            {/* 入力欄 */}
            <form
              onSubmit={(e) => {
                e.preventDefault();
                send(input);
              }}
              className="flex items-center gap-2 border-t border-cream-300 bg-white p-3"
            >
              <input
                ref={inputRef}
                type="text"
                value={input}
                onChange={(e) => setInput(e.target.value)}
                placeholder="質問を入力してください"
                aria-label="質問を入力"
                className="w-full flex-1 rounded-full border-2 border-cream-300 bg-cream-50 px-4 py-2.5 text-[13px] text-ink-900 outline-none transition placeholder:text-ink-500/60 focus:border-gold-500 focus:bg-white"
              />
              <button
                type="submit"
                disabled={!input.trim() || typing}
                aria-label="送信"
                className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-pine-800 text-white transition hover:bg-pine-700 disabled:opacity-40"
              >
                <svg
                  width="16"
                  height="16"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2.4"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  aria-hidden
                >
                  <path d="M22 2L11 13" />
                  <path d="M22 2l-7 20-4-9-9-4 20-7z" />
                </svg>
              </button>
            </form>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
