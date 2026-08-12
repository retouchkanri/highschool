/**
 * Lightweight, dependency-free FAQ relevance scoring.
 * Used to pick a handful of the most relevant FAQ entries to feed to the
 * OpenAI chat model as context (a simple form of retrieval-augmented chat).
 */

export type FaqLike = { cat: string; q: string; a: string };

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

function scoreFaq(rawQuery: string, faq: FaqLike): number {
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

/** Returns the top `limit` FAQ entries most relevant to `query`. */
export function findRelevantFaqs(
  query: string,
  faqs: FaqLike[],
  limit = 6
): FaqLike[] {
  return faqs
    .map((f) => ({ f, score: scoreFaq(query, f) }))
    .sort((a, b) => b.score - a.score)
    .slice(0, limit)
    .map((r) => r.f);
}
