import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import PageHero from "@/components/PageHero";
import { Section, SectionTitle } from "@/components/Section";
import { FadeUp, ScaleIn, SlideIn, Stagger, StaggerItem } from "@/components/motion";
import Counter from "@/components/Counter";
import CTABand from "@/components/CTABand";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: "中3対象・騎手受験事前合宿｜東関東馬事高等学院",
  description:
    "JRA競馬学校・地方競馬教養センターの騎手課程受験を目指す中学3年生のための6泊7日事前対策合宿。運動機能検査の模擬テスト、筆記・面接・騎乗試験対策まで。JRA一次試験不合格の場合は参加費全額返金保証付き。",
};

const programs = [
  {
    no: "01",
    title: "受験に挑む前の心構え",
    tag: "MINDSET",
    desc: "騎手課程受験はどんな試験で、何が問われるのか。合格する人に共通する姿勢とは。まず最初に、受験までの過ごし方と向き合い方を丁寧にお伝えします。合宿の土台となる、いちばん大切な時間です。",
  },
  {
    no: "02",
    title: "運動機能検査の模擬テスト",
    tag: "PHYSICAL",
    desc: "JRA一次試験で実施される運動機能検査の項目に基づいた模擬テストを実施。自分の現在地を数値で把握し、伸ばすべきポイントを指導員が一人ひとりにフィードバックします。",
  },
  {
    no: "03",
    title: "筆記試験（国語・社会）対策",
    tag: "WRITTEN",
    desc: "一次試験の筆記科目である国語・社会について、出題傾向を踏まえた対策学習を行います。「何をどこまで勉強すればいいのか」が分かれば、残りの期間の学習計画も立てやすくなります。",
  },
  {
    no: "04",
    title: "面接指導",
    tag: "INTERVIEW",
    desc: "初めての入試で多くの受験生が不安を感じるのが面接です。受け答えの基本から、騎手を志す気持ちの伝え方まで、実践形式で繰り返し指導。自分の言葉で語れるようになるまでサポートします。",
  },
  {
    no: "05",
    title: "騎乗試験対策",
    tag: "RIDING",
    desc: "二次試験の騎乗試験を見据えた騎乗訓練に加え、厩舎での活動姿勢についても指導します。馬と向き合う日々の所作こそが、騎手への第一歩。本校の馬たちと共に実践的に学びます。",
  },
];

const outlineRows = [
  {
    label: "開催時期",
    value: "毎年夏休み期間に開催（年度ごとの詳細日程はお問い合わせください）",
  },
  { label: "期間", value: "6泊7日" },
  {
    label: "参加費",
    value: "72,000円（宿泊費・騎乗訓練費・食事費を含む）",
  },
  {
    label: "返金保証",
    value: "JRA競馬学校 騎手課程の第一次試験が不合格だった場合、参加費は全額返金いたします。",
  },
  {
    label: "保護者の同伴",
    value: "初日は騎手受験についての説明を行いますので、保護者の方の同伴をお願いしています。",
  },
  {
    label: "送迎",
    value: "JR東京駅からの送迎があります（お申込み時にご相談ください）。",
  },
];

const gallery = [
  { img: "/images/taiken-3_002_1.jpg", alt: "騎手受験合宿での騎乗訓練の様子" },
  { img: "/images/taiken-3_002_2.jpg", alt: "馬場で指導を受ける合宿参加者" },
  { img: "/images/taiken-3_002_3.jpg", alt: "騎乗フォームを確認するトレーニング" },
  { img: "/images/taiken-3_002_4.jpg", alt: "厩舎で馬と向き合う参加者" },
  { img: "/images/taiken-3_002_5.jpg", alt: "合宿中の実技指導の様子" },
  { img: "/images/taiken-3_002_6.jpg", alt: "騎手受験に向けて訓練に励む中学生" },
];

export default function CampPage() {
  return (
    <>
      <PageHero
        image="/images/taiken-3_001_1.jpg"
        en="JOCKEY CAMP"
        title="JRA競馬学校 騎手課程受験・6泊7日事前対策合宿"
        lead="合格をつかむ受験生と、あと一歩届かない受験生。その差を分けるのは、本番までの準備です。初めての受験に挑む中学3年生の「不安」を「自信」に変える、バジガクの特別合宿です。"
        crumbs={[{ label: "HOME", href: "/" }, { label: "中3対象・騎手受験事前合宿" }]}
      />

      {/* 対象と目的 */}
      <Section className="bg-white">
        <div className="grid items-center gap-12 lg:grid-cols-2">
          <div>
            <SectionTitle
              en="FOR WHOM"
              title={
                <>
                  初めての受験の不安を、
                  <br />
                  自信に変えるために。
                </>
              }
            />
            <FadeUp delay={0.15}>
              <p className="mt-8 text-sm leading-8 text-ink-700 md:text-[15px]">
                この合宿は、中学3年生でJRA競馬学校または地方競馬教養センターの騎手課程受験を目指す方を対象に、受験指導とサポートを行うことを目的としています。JRA競馬学校の騎手課程は、毎年約150名の受験者に対して最終合格は7〜8名という狭き門。地方競馬の騎手課程も、入学前の騎乗経験が大きく問われる難関です。
              </p>
              <p className="mt-4 text-sm leading-8 text-ink-700 md:text-[15px]">
                しかも中学3年生にとっては、騎手試験が人生で初めての「入試」になることがほとんど。運動機能検査や騎乗試験という特殊な試験を前に、不安を抱えたまま本番を迎えてしまう受験生は少なくありません。だからこそ、本番前のこの6泊7日があります。一次試験で問われる「筆記試験・運動機能検査・面接」を軸に、不安をひとつずつ自信に変えて、胸を張って受験会場へ向かえるように。バジガクが全力でサポートします。
              </p>
            </FadeUp>
          </div>
          <div className="relative">
            <ScaleIn className="relative z-10 overflow-hidden shadow-lift">
              <Image
                src="/images/tokubetsu_002_1.jpg"
                alt="騎手を目指してトレーニングに励む生徒"
                width={1200}
                height={800}
                className="h-full w-full object-cover"
              />
            </ScaleIn>
            <SlideIn
              direction={-1}
              delay={0.25}
              className="relative z-20 -mt-16 ml-auto w-2/3 overflow-hidden border-4 border-white shadow-lift md:-mt-24"
            >
              <Image
                src="/images/tokubetsu_002_2.jpg"
                alt="馬場での騎乗訓練の様子"
                width={800}
                height={560}
                className="h-full w-full object-cover"
              />
            </SlideIn>
            <div
              aria-hidden
              className="absolute -right-10 -top-10 -z-0 h-48 w-48 rounded-full bg-gold-300/30 blur-2xl"
            />
          </div>
        </div>
      </Section>

      {/* 実施内容 */}
      <Section className="texture-paper">
        <SectionTitle
          en="PROGRAM"
          align="center"
          title="6泊7日で取り組む、5つの受験対策"
          lead="JRA一次試験で問われる「筆記試験・運動機能検査・面接」から、二次試験の騎乗試験まで。合宿の7日間で、騎手課程受験の全体像をつかみます。"
        />
        <Stagger className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {programs.map((p) => (
            <StaggerItem key={p.no} className="h-full">
              <div className="flex h-full flex-col bg-white p-7 shadow-soft transition duration-300 hover:-translate-y-1.5 hover:shadow-lift">
                <div className="flex items-baseline justify-between">
                  <span className="font-serif text-3xl font-bold text-gold-500">
                    {p.no}
                  </span>
                  <span className="text-[10px] font-bold tracking-[0.3em] text-gold-600">
                    {p.tag}
                  </span>
                </div>
                <h3 className="mt-4 font-serif text-lg font-bold text-pine-950">
                  {p.title}
                </h3>
                <div className="mt-4 h-[2px] w-10 rule-gold" />
                <p className="mt-4 flex-1 text-[13px] leading-7 text-ink-700">
                  {p.desc}
                </p>
              </div>
            </StaggerItem>
          ))}
        </Stagger>
      </Section>

      {/* 開催概要 */}
      <Section className="bg-white">
        <div className="grid gap-12 lg:grid-cols-[320px_1fr]">
          <div>
            <SectionTitle
              en="OUTLINE"
              title="開催概要"
              lead="毎年、夏休み期間に開催しています。年度ごとの日程・お申込み方法は、お気軽にお問い合わせください。"
            />
            <FadeUp delay={0.2}>
              <div className="mt-8 bg-pine-900 p-7 text-white shadow-soft">
                <p className="text-[10px] font-bold tracking-[0.35em] text-gold-400">
                  GUARANTEE
                </p>
                <p className="mt-3 font-serif text-xl font-bold leading-snug text-sun-400">
                  JRA一次試験
                  <br />
                  不合格なら全額返金
                </p>
                <p className="mt-3 text-xs leading-6 text-white/80">
                  この合宿は「合格してもらうため」の合宿です。JRA競馬学校 騎手課程の第一次試験が不合格だった場合、参加費72,000円は全額返金いたします。
                </p>
              </div>
            </FadeUp>
          </div>
          <Stagger className="space-y-3">
            {outlineRows.map((row) => (
              <StaggerItem key={row.label}>
                <div className="flex flex-col gap-2 border border-cream-300 bg-cream-100 px-6 py-5 md:flex-row md:items-start md:gap-8">
                  <span className="w-32 shrink-0 text-sm font-bold text-pine-800">
                    {row.label}
                  </span>
                  <span className="flex-1 text-sm leading-7 text-ink-700">
                    {row.value}
                  </span>
                </div>
              </StaggerItem>
            ))}
          </Stagger>
        </div>
      </Section>

      {/* 応募資格 */}
      <Section className="texture-paper">
        <SectionTitle
          en="REQUIREMENTS"
          align="center"
          title="応募資格"
          lead="本気で騎手を目指す方に、確かな指導を届けるための参加条件です。"
        />
        <Stagger className="mx-auto mt-12 grid max-w-4xl gap-6 md:grid-cols-2">
          {[
            {
              no: "1",
              title: "騎手説明会への参加",
              desc: "本校の学校見学＆オープンキャンパスで開催している「騎手説明会」に参加された方が対象です。まだの方は、まず学校見学へお越しください。",
            },
            {
              no: "2",
              title: "騎手課程への出願予定",
              desc: "中学3年生で、JRA競馬学校 騎手課程に出願している方、または出願を予定している方が対象です。地方競馬教養センターの受験を目指す方もご相談ください。",
            },
          ].map((r) => (
            <StaggerItem key={r.no} className="h-full">
              <div className="flex h-full gap-5 bg-white p-7 shadow-soft">
                <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-pine-800 font-serif text-lg font-bold text-white">
                  {r.no}
                </span>
                <div>
                  <h3 className="font-serif text-lg font-bold text-pine-950">
                    {r.title}
                  </h3>
                  <p className="mt-3 text-[13px] leading-7 text-ink-700">
                    {r.desc}
                  </p>
                </div>
              </div>
            </StaggerItem>
          ))}
        </Stagger>
        <FadeUp delay={0.2}>
          <div className="mx-auto mt-6 max-w-4xl border-2 border-gold-500/40 bg-white px-6 py-5">
            <p className="text-sm leading-7 text-ink-700">
              <span className="font-bold text-pine-800">高校1年生の方へ：</span>
              高校1年生での参加をご希望の場合は、直接、本校事務局（
              <a
                href={`tel:${site.tel}`}
                className="font-bold tracking-wider text-pine-800 hover:underline"
              >
                {site.tel}
              </a>
              ）までご相談ください。
            </p>
          </div>
        </FadeUp>
      </Section>

      {/* 合格実績 + ギャラリー */}
      <section className="relative overflow-hidden bg-pine-950 py-16 md:py-24">
        <div className="mx-auto max-w-7xl px-6">
          <div className="grid items-center gap-12 lg:grid-cols-[1fr_auto]">
            <SectionTitle
              dark
              en="RESULTS"
              title="12年間で38名。合格実績が、指導の証です。"
              lead="バジガクはこれまで、JRA・地方競馬あわせて38名の騎手課程合格者を送り出してきました。JRAの荻野極騎手をはじめ、木之前葵騎手・佐々木世麗騎手・深澤杏花騎手ら女性騎手も輩出。その受験指導のノウハウを、この合宿に注ぎ込みます。"
            />
            <FadeUp delay={0.15} className="text-center lg:pr-8">
              <p className="font-serif text-6xl font-bold text-sun-400 md:text-7xl">
                <Counter to={38} suffix="名" />
              </p>
              <p className="mt-2 text-sm font-bold text-white">騎手課程 合格者数</p>
              <p className="mt-1 text-[11px] text-white/60">開校以来12年間の実績</p>
            </FadeUp>
          </div>
          <Stagger gap={0.06} className="mt-12 grid grid-cols-2 gap-4 md:grid-cols-3">
            {gallery.map((g) => (
              <StaggerItem key={g.img}>
                <div className="group relative h-40 overflow-hidden shadow-soft md:h-56">
                  <Image
                    src={g.img}
                    alt={g.alt}
                    fill
                    sizes="(max-width: 768px) 50vw, 33vw"
                    className="object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                </div>
              </StaggerItem>
            ))}
          </Stagger>
          <FadeUp delay={0.1} className="mt-10 text-center">
            <Link
              href="/jockey"
              className="inline-flex items-center gap-3 rounded-full border-2 border-white/40 px-7 py-3.5 text-sm font-bold text-white transition hover:border-sun-400 hover:text-sun-400"
            >
              騎手受験特別コースについて詳しく見る
              <span aria-hidden>→</span>
            </Link>
          </FadeUp>
        </div>
      </section>

      {/* 申込CTA */}
      <Section className="bg-white">
        <div className="mx-auto max-w-3xl text-center">
          <SectionTitle
            en="ENTRY"
            align="center"
            title="騎手への第一歩は、この夏から。"
            lead="騎手受験事前合宿へのお申込み・ご質問は、お問い合わせフォームまたはお電話で受け付けています。「参加を迷っている」「条件を満たしているか分からない」という段階のご相談も大歓迎です。"
          />
          <FadeUp delay={0.2}>
            <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
              <a
                href={site.forms.contact}
                target="_blank"
                rel="noopener noreferrer"
                className="group inline-flex items-center gap-3 rounded-full bg-sun-500 px-9 py-4 text-sm font-bold text-pine-950 shadow-soft transition hover:shadow-lift"
              >
                合宿について問い合わせる
                <span className="transition-transform duration-300 group-hover:translate-x-1.5">
                  →
                </span>
              </a>
              <a
                href={`tel:${site.tel}`}
                className="inline-flex items-center gap-3 rounded-full border-2 border-pine-800 px-9 py-4 text-sm font-bold text-pine-800 transition hover:bg-pine-50"
              >
                TEL {site.tel}
              </a>
            </div>
            <p className="mt-6 text-xs leading-6 text-ink-500">
              初めての方は、まず学校見学＆オープンキャンパスの「騎手説明会」へのご参加をおすすめしています。
            </p>
          </FadeUp>
        </div>
      </Section>

      <CTABand />
    </>
  );
}
