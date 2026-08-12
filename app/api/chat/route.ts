import { NextRequest, NextResponse } from "next/server";
import OpenAI from "openai";
import { faqs as staticFaqs } from "@/lib/faq";
import { findRelevantFaqs, type FaqLike } from "@/lib/faqMatch";
import { getSupabasePublicClient } from "@/lib/supabase";
import { site } from "@/lib/site";

export const runtime = "nodejs";

type ChatMessage = { role: "user" | "assistant"; text: string };

async function getFaqs(): Promise<FaqLike[]> {
  try {
    const supabase = getSupabasePublicClient();
    if (!supabase) return staticFaqs;
    const { data, error } = await supabase
      .from("faqs")
      .select("category, question, answer");
    if (error || !data || data.length === 0) return staticFaqs;
    return data.map((f) => ({ cat: f.category, q: f.question, a: f.answer }));
  } catch {
    return staticFaqs;
  }
}

const FALLBACK_REPLY =
  "申し訳ありません、ただいま自動応答が混み合っています。お急ぎの場合はお電話、またはお問い合わせフォームからご連絡ください。";

export async function POST(request: NextRequest) {
  const body = await request.json().catch(() => null);
  const message = typeof body?.message === "string" ? body.message.trim() : "";
  const history: ChatMessage[] = Array.isArray(body?.history) ? body.history : [];

  if (!message) {
    return NextResponse.json({ error: "メッセージを入力してください。" }, { status: 400 });
  }

  const apiKey = process.env.OPENAI_API_KEY;
  if (!apiKey) {
    return NextResponse.json(
      { reply: FALLBACK_REPLY, fallback: true },
      { status: 200 }
    );
  }

  const faqs = await getFaqs();
  const relevant = findRelevantFaqs(message, faqs, 6);

  const faqContext = relevant
    .map((f, i) => `${i + 1}. [${f.cat}] Q: ${f.q}\nA: ${f.a}`)
    .join("\n\n");

  const systemPrompt = `あなたは「${site.name}（${site.shortName}）」の公式サイトに設置されたAIチャット案内係です。
以下の「参考FAQ」の内容を踏まえて、来訪者（主に中学生・高校生とその保護者）からの質問に、日本語で親しみやすく簡潔に（3〜6文程度）答えてください。

ルール:
- 参考FAQに関連情報があれば、それを根拠に具体的に答える。
- 参考FAQに答えがない場合は、正直に「わからない」旨を伝え、電話（${site.tel}）またはお問い合わせフォーム、よくある質問ページ（/qa）を案内する。
- 学校と無関係な質問（他校の情報、一般的な雑談以外の専門外の相談など）には、丁寧に案内できない旨を伝える。
- 誇張した合格保証や医療・法律的な断定はしない。
- 箇条書きよりも自然な文章を優先する。

【学校情報】
学校名: ${site.name}（${site.shortName}）
所在地: ${site.address}
電話番号: ${site.tel}

【参考FAQ】
${faqContext || "(該当なし)"}`;

  const messages: OpenAI.Chat.ChatCompletionMessageParam[] = [
    { role: "system", content: systemPrompt },
    ...history.slice(-6).map((m) => ({
      role: m.role === "user" ? ("user" as const) : ("assistant" as const),
      content: m.text,
    })),
    { role: "user", content: message },
  ];

  try {
    const client = new OpenAI({ apiKey });
    const completion = await client.chat.completions.create({
      model: process.env.OPENAI_CHAT_MODEL || "gpt-4o-mini",
      messages,
      temperature: 0.4,
      max_tokens: 500,
    });

    const reply = completion.choices[0]?.message?.content?.trim();
    if (!reply) {
      return NextResponse.json({ reply: FALLBACK_REPLY, fallback: true });
    }

    return NextResponse.json({
      reply,
      relatedQuestions: relevant.slice(0, 3).map((f) => f.q),
    });
  } catch (error) {
    console.error("OpenAI chat error:", error);
    return NextResponse.json({ reply: FALLBACK_REPLY, fallback: true });
  }
}
