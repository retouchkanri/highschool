import type { Metadata } from "next";
import Link from "next/link";
import { Section, SectionTitle } from "@/components/Section";
import { FadeUp, Stagger, StaggerItem } from "@/components/motion";
import PageHero from "@/components/PageHero";
import CTABand from "@/components/CTABand";
import FaqExplorer, { type FaqItem } from "@/components/qa/FaqExplorer";
import { site } from "@/lib/site";
import { faqs as staticFaqs } from "@/lib/faq";
import { getSupabasePublicClient } from "@/lib/supabase";

export const metadata: Metadata = {
  title: {
    absolute: "馬の高校・馬の学校 よくある質問｜学費・寮・乗馬未経験・進路について",
  },
  description:
    "馬の高校への入学を検討する中学生・保護者の疑問に回答。乗馬未経験、学費、寮生活、授業、馬の管理、JRA厩務員・騎手・牧場就職などについて詳しくご紹介します。",
  keywords: [
    "馬の高校 FAQ",
    "馬の学校",
    "馬の高校 学費",
    "馬の高校 寮",
    "乗馬未経験",
    "馬の仕事",
    "馬の高校",
    "高校",
    "乗馬",
    "引退馬",
    "仕事",
    "千葉県",
    "全寮制",
  ],
};

// Re-fetch FAQs from Supabase periodically so admin edits show up without a rebuild.
export const revalidate = 60;

async function getFaqs(): Promise<FaqItem[]> {
  try {
    const supabase = getSupabasePublicClient();
    if (!supabase) return staticFaqs;
    const { data, error } = await supabase
      .from("faqs")
      .select("category, question, answer")
      .order("category", { ascending: true })
      .order("sort_order", { ascending: true });
    if (error || !data || data.length === 0) return staticFaqs;
    return data.map((f) => ({ cat: f.category, q: f.question, a: f.answer }));
  } catch {
    return staticFaqs;
  }
}

export default async function QaPage() {
  const faqs = await getFaqs();
  return (
    <>
      <PageHero
        image="/images/DSC_0028.jpg"
        en="AI Q&A"
        title="AIよくある質問 Q&A"
        lead="「未経験でも大丈夫？」「寮の暮らしは？」——入学前の疑問や不安に、検索スタイルでスピーディーにお答えします。"
        crumbs={[{ label: "HOME", href: "/" }, { label: "AIよくある質問 Q&A" }]}
      />

      {/* FAQ EXPLORER */}
      <Section className="texture-paper">
        <SectionTitle
          en="FAQ SEARCH"
          align="center"
          title="知りたいことを、検索してみよう。"
          lead="入学募集から寮生活、卒業後の進路まで、これまで多く寄せられた質問をまとめました。気になる言葉を入力するか、カテゴリを選ぶと、該当するQ&Aがリアルタイムに絞り込まれます。"
        />
        <FadeUp delay={0.15} className="mt-12">
          <FaqExplorer faqs={faqs} />
        </FadeUp>
      </Section>

      {/* CONTACT */}
      <Section className="bg-white">
        <SectionTitle
          en="STILL HAVE QUESTIONS?"
          align="center"
          title="解決しない場合は、お気軽に。"
          lead="Q&Aに載っていない疑問や、あなたの状況に合わせた個別のご相談も大歓迎です。入学・転入学のこと、寮生活のこと、学費のこと——どんな小さなことでも、スタッフが丁寧にお答えします。"
        />
        <Stagger className="mx-auto mt-12 grid max-w-4xl gap-6 md:grid-cols-2">
          <StaggerItem className="h-full">
            <div className="flex h-full flex-col items-center bg-cream-100 p-8 text-center shadow-soft transition duration-300 hover:-translate-y-1.5 hover:shadow-lift">
              <p className="text-[10px] font-bold tracking-[0.35em] text-gold-600">
                TEL
              </p>
              <h3 className="mt-2 font-serif text-lg font-bold text-pine-950">
                お電話でのご相談
              </h3>
              <p className="mt-3 flex-1 text-[13px] leading-7 text-ink-700">
                体験入学・入学相談はお気軽に。転入学のご相談も随時受け付けています。
              </p>
              <a
                href={`tel:${site.tel}`}
                className="mt-5 inline-flex items-center gap-2 rounded-full bg-pine-800 px-8 py-3.5 font-serif text-lg font-bold tracking-wider text-white shadow-soft transition hover:bg-pine-700 hover:shadow-lift"
              >
                {site.tel}
              </a>
            </div>
          </StaggerItem>
          <StaggerItem className="h-full">
            <div className="flex h-full flex-col items-center bg-cream-100 p-8 text-center shadow-soft transition duration-300 hover:-translate-y-1.5 hover:shadow-lift">
              <p className="text-[10px] font-bold tracking-[0.35em] text-gold-600">
                FORM
              </p>
              <h3 className="mt-2 font-serif text-lg font-bold text-pine-950">
                お問い合わせフォーム
              </h3>
              <p className="mt-3 flex-1 text-[13px] leading-7 text-ink-700">
                24時間受付。ご質問の内容を確認のうえ、スタッフより折り返しご連絡します。
              </p>
              <Link
                href={site.forms.contact}
                className="group mt-5 inline-flex items-center gap-3 rounded-full bg-sun-500 px-8 py-3.5 text-sm font-bold text-pine-950 shadow-soft transition hover:shadow-lift"
              >
                フォームから相談する
                <span className="transition-transform duration-300 group-hover:translate-x-1.5">
                  →
                </span>
              </Link>
            </div>
          </StaggerItem>
        </Stagger>
      </Section>

      <CTABand />
    </>
  );
}
