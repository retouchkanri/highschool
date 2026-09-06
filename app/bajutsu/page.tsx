import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import PageHero from "@/components/PageHero";
import { Section, SectionTitle } from "@/components/Section";
import { FadeUp, ScaleIn, SlideIn, Stagger, StaggerItem } from "@/components/motion";
import Counter from "@/components/Counter";
import CTABand from "@/components/CTABand";
import Accordion, { type QA } from "@/components/Accordion";
import { faqs } from "@/lib/faq";

export const metadata: Metadata = {
  title: {
    absolute: "高校生から馬術競技会に出場するには｜馬術部のある高校をお探しの方へ｜馬の高校　東関東馬事高等学院",
  },
  description:
    "馬術競技会への出場を目指す方へ。東関東馬事高等学院では、エントリー費・登録費・馬の輸送費など大会出場にかかる諸経費を学校が全額負担。キャンパスが馬術競技場になる環境で、未経験からでも全国中学生・高校生馬術選手権大会への出場を目指せます。競技実績は高校の単位として認定され、大学馬術部へのスポーツ推薦進学にもつながります。",
  keywords: [
    "馬術競技会",
    "馬術大会",
    "高校馬術",
    "馬術部",
    "馬術部のある高校",
    "全国高校生馬術選手権大会",
    "障害馬術",
    "馬場馬術",
    "乗馬ライセンス",
    "騎乗者資格",
    "馬術選手",
    "大学馬術部",
    "スポーツ推薦",
    "馬の高校",
    "馬の学校",
    "東関東馬事高等学院",
    "バジガク",
  ],
};

/* ---------------- 本校が競技会に強い4つの理由 ---------------- */

const reasons = [
  {
    no: "01",
    title: "出場費用は、学校が全額負担",
    desc: "エントリー費・登録費・馬の輸送費——馬術競技への出場は、本来これらの費用が大きなハードルになります。本校ではこの諸経費を学校が全額負担。「お金がかかるから出られない」がありません。技術レベルに応じて、どんどん出場できます。",
  },
  {
    no: "02",
    title: "キャンパスが、馬術競技場になる",
    desc: "校庭だった場所を整備したメインアリーナで、本校主催の馬術競技イベントを開催しています。移動も宿泊もなく、いつも乗っている馬場で本番の緊張感を経験できる。この「場数」が、外部大会での強さにつながります。",
  },
  {
    no: "03",
    title: "出場歴も入賞成績も、高校の単位に",
    desc: "馬術競技への出場や入賞成績は、「課題研究」などの高校履修科目として単位認定されます。競技に打ち込むことが、そのまま高校卒業の学びになる。競技と勉強を天秤にかける必要がありません。",
  },
  {
    no: "04",
    title: "自分で育てた馬と、競技に出られる",
    desc: "引退競走馬を乗用馬へ転用調教（リトレーニング）し、その馬とともに競技会を目指すこともできます。速く走ることしか知らなかった馬が、自分の指示で障害を跳ぶ。ここでしか味わえない喜びとやりがいです。",
  },
];

/* ---------------- 3年間で身につく力 ---------------- */

const pillars = [
  {
    no: "01",
    en: "DAILY RIDING",
    title: "ほぼ毎日の騎乗授業",
    sub: "1日1回から、多い日には3〜4回",
    desc: "騎乗機会の多さが、そのまま上達の速さになります。習熟度別のレッスン編成で、基礎の姿勢づくりから障害飛越・馬場運動まで段階的に。未経験で入学した生徒も、6か月目以降には大会で活躍できるようになります。",
  },
  {
    no: "02",
    en: "MY HORSE",
    title: "担当馬とのパートナーシップ",
    sub: "乗るだけでなく、育てる",
    desc: "入学すると一人ひとりに担当馬がつきます。手入れ、飼養管理、日々の運動。馬のクセや調子を誰よりも知っているからこそ、本番でも呼吸が合う。競技で結果を出す生徒ほど、馬とじっくり向き合っています。",
  },
  {
    no: "03",
    en: "LICENSE",
    title: "資格取得も高校授業として",
    sub: "乗馬ライセンス・騎乗者資格",
    desc: "全国乗馬倶楽部振興協会の乗馬ライセンス、日本馬術連盟の騎乗者資格を、高校の授業の一環として取得できます。競技会への出場要件を満たしながら、進学・就職でも証明になる資格が手元に残ります。",
  },
];

/* ---------------- 出場できる主な大会 ---------------- */

const events = [
  {
    tag: "校内",
    title: "本校主催の馬術競技イベント",
    desc: "キャンパスのメインアリーナが競技場に。学年やレベルを越えて出場でき、初めての「試合」の場になります。",
  },
  {
    tag: "外部",
    title: "各地の馬術競技会への遠征",
    desc: "騎乗レベルに応じて、外部競技会に出場します。関東だけでなく、関西方面への遠征も行っています。",
  },
  {
    tag: "全国",
    title: "全国中学生・高校生馬術選手権大会",
    desc: "高校生馬術の全国舞台。本校からも出場実績があり、全日本ジュニア選手権大会には5年連続で出場しています。",
  },
  {
    tag: "走行会",
    title: "コース走行会",
    desc: "本番前に実戦形式でコースを走る機会を多く設けています。試合の組み立て方を、身体で覚えていきます。",
  },
];

/* ---------------- 競技会までのロードマップ ---------------- */

const roadmap = [
  {
    no: "01",
    period: "1年次・4月〜",
    label: "入学",
    title: "未経験から、まずは馬と仲良くなる",
    desc: "入学生の多くは乗馬未経験。おとなしい馬とのパートナーシップづくりから始め、正しい騎乗姿勢と馬の扱い方をひとつずつ確実に身につけます。",
  },
  {
    no: "02",
    period: "1年次・秋頃〜",
    label: "初出場",
    title: "校内競技イベントで、はじめての試合",
    desc: "半年ほどで、多くの生徒が最初の競技会を経験します。まずは通いなれた本校の馬場で、緊張感のある本番を体験するところから。",
  },
  {
    no: "03",
    period: "1年次後半〜2年次",
    label: "基礎から応用へ",
    title: "障害飛越・馬場運動へと進む",
    desc: "基本馬術を固めながら、障害・馬場の応用技術へ。あわせて乗馬ライセンスや騎乗者資格の取得にも挑戦し、出場できる大会の幅を広げていきます。",
  },
  {
    no: "04",
    period: "2〜3年次",
    label: "外部大会",
    title: "遠征、そして全国大会へ",
    desc: "騎乗レベルに応じて外部競技会に遠征。出場歴と入賞成績を積み重ね、全国中学生・高校生馬術選手権大会などの全国舞台を目指します。",
  },
  {
    no: "05",
    period: "3年次",
    label: "進路",
    title: "競技実績を、その先の進路へ",
    desc: "3年間の競技実績は、大学馬術部へのスポーツ推薦進学や、乗馬クラブ・観光牧場への就職で強い武器になります。実際に推薦で大学へ進み、いまも馬術を続けている卒業生がいます。",
  },
];

/* ---------------- 実績 ---------------- */

const resultStats = [
  {
    value: 0,
    suffix: "円",
    label: "馬術競技会 出場諸経費の自己負担",
    note: "※エントリー費・登録費・輸送費は学校負担",
  },
  { value: 5, suffix: "年連続", label: "全日本ジュニア選手権大会 出場" },
  { value: 118, suffix: "頭", label: "本校で管理する馬匹の数" },
  { value: 73, suffix: "%", label: "未経験・初心者の入学率", note: "※令和3年以降実績" },
];

/* ---------------- FAQ ---------------- */

const pick = (q: string): QA[] => {
  const hit = faqs.find((f) => f.q === q);
  return hit ? [{ q: hit.q, a: hit.a }] : [];
};

const bajutsuFaqs: QA[] = [
  {
    q: "乗馬未経験でも、馬術競技会に出場できますか？",
    a: "できます。バジガクの入学生の6〜7割は乗馬未経験・初心者からのスタートで、多くの生徒が入学から半年ほどで最初の競技会を経験しています。まずは本校キャンパスで開催する馬術競技イベントから始め、技術の伸びに合わせて外部の大会へ。未経験で入学した生徒が全国大会の舞台に立った例もあります。",
  },
  {
    q: "馬術競技への出場費用は、どれくらいかかりますか？",
    a: "エントリー費・登録費・馬の輸送費など、大会出場にかかる諸経費は学校が全額負担します。一般的に馬術競技は費用面のハードルが高い競技ですが、本校では費用を理由に出場をあきらめる必要がありません。技術レベルに応じて、何度でも挑戦できます。",
  },
  {
    q: "自分の馬を持っていなくても大丈夫ですか？",
    a: "大丈夫です。本校は約120頭の馬を管理しており、入学すると一人ひとりに担当馬がつきます。競技に出るときも、日頃から自分が世話をして乗っている馬とペアを組みます。馬の購入・預託にかかる費用は不要です。",
  },
  {
    q: "馬術競技の成績は、高校の成績になりますか？",
    a: "なります。本校では中間・期末テストによる評価よりも、日々の取り組みと学習成果を重視した独自の単位認定方式を採っています。馬術競技会への出場歴や入賞成績は「課題研究」などの履修科目として単位認定の対象です。競技に打ち込むことが、そのまま高校卒業に必要な学びになります。",
  },
  {
    q: "馬術の実績で大学に進学できますか？",
    a: "可能です。3年間で競技実績を積み重ね、大学馬術部へのスポーツ推薦進学を目指せます。実際に推薦で大学へ進学し、卒業後も馬術を続けている卒業生がいます。日本大学・専修大学・福井工業大学・東京農業大学などへの進学実績があります。",
  },
  ...pick("騎乗時間は1日にどれくらいありますか？"),
  ...pick("騎乗レベルに応じたクラス分け・レッスン分けはありますか？"),
];

export default function BajutsuPage() {
  return (
    <>
      {/* (1) Hero */}
      <PageHero
        image="/images/bajutsu_001_1.jpg"
        en="EQUESTRIAN"
        title="馬術競技会出場を目指す方へ"
        lead="エントリー費も、登録費も、馬の輸送費も、すべて学校が負担します。「費用がかかるから出られない」のない環境で、未経験からでも全国の舞台を目指せます。"
        crumbs={[
          { label: "HOME", href: "/" },
          { label: "進路・サポート" },
          { label: "馬術競技会出場を目指す方へ" },
        ]}
      />

      {/* (2) 本校の強み */}
      <Section id="about" className="bg-white">
        <div className="grid items-start gap-12 lg:grid-cols-2">
          <div>
            <SectionTitle
              en="OUR STRENGTH"
              title={
                <>
                  時に、キャンパスが
                  <br />
                  馬術競技場になります。
                </>
              }
              lead="馬術は、続けるほどに費用がかかる競技です。エントリー費、登録費、馬の輸送費。そして何より、乗る馬と練習する場所。本校はそのすべてを校内に持ち、費用は学校が負担します。だから生徒は「どう乗るか」だけに集中できます。未経験で入学した生徒も、6か月目以降には数多くの馬術大会で活躍できるようになります。"
            />
            <Stagger className="mt-10 space-y-4">
              {reasons.map((r) => (
                <StaggerItem key={r.no}>
                  <div className="border border-cream-300 bg-cream-100 p-5 transition duration-300 hover:-translate-y-1 hover:shadow-soft">
                    <h3 className="flex items-start gap-3 text-sm font-bold text-pine-950 md:text-[15px]">
                      <span className="mt-0.5 inline-block h-4 w-1 shrink-0 rounded-full bg-gold-500" />
                      {r.title}
                    </h3>
                    <p className="mt-2 pl-4 text-[13px] leading-7 text-ink-700">
                      {r.desc}
                    </p>
                  </div>
                </StaggerItem>
              ))}
            </Stagger>
          </div>
          <div className="relative lg:sticky lg:top-28">
            <ScaleIn className="relative z-10 overflow-hidden shadow-lift">
              <Image
                src="/images/ippan_002_1.jpg"
                alt="馬術大会で障害を飛越する生徒と馬"
                width={1200}
                height={800}
                className="h-full w-full object-cover"
              />
            </ScaleIn>
            <SlideIn
              direction={-1}
              delay={0.25}
              className="relative z-20 -mt-14 ml-auto w-2/3 overflow-hidden border-4 border-white shadow-lift md:-mt-20"
            >
              <Image
                src="/images/bajutsu_002_1.jpg"
                alt="馬術競技会の入賞者に贈られるロゼット"
                width={800}
                height={560}
                className="h-full w-full object-cover"
              />
            </SlideIn>
            <div
              aria-hidden
              className="absolute -left-10 -top-10 -z-0 h-44 w-44 rounded-full bg-gold-300/30 blur-2xl"
            />
            <FadeUp delay={0.3} className="relative z-20 mt-8 space-y-4">
              <div className="border-l-4 border-gold-500 bg-cream-100 p-5">
                <p className="text-xs font-bold tracking-[0.25em] text-gold-600">
                  POINT 1
                </p>
                <h3 className="mt-2 text-sm font-bold text-pine-950 md:text-[15px]">
                  出場に関する一切の諸経費が不要
                </h3>
                <p className="mt-2 text-[13px] leading-7 text-ink-700">
                  エントリー費、登録費、馬の輸送費。競技会出場に関わる諸経費は、すべて学校が負担します。技術レベルに応じて、どんどん出場が可能です。
                </p>
              </div>
              <div className="border-l-4 border-pine-800 bg-cream-100 p-5">
                <p className="text-xs font-bold tracking-[0.25em] text-pine-700">
                  POINT 2
                </p>
                <h3 className="mt-2 text-sm font-bold text-pine-950 md:text-[15px]">
                  この経験が、進路選択の強みになる
                </h3>
                <p className="mt-2 text-[13px] leading-7 text-ink-700">
                  競技実績は大学馬術部へのスポーツ推薦進学や、乗馬クラブ・観光牧場への就職で確かな武器になります。
                </p>
              </div>
            </FadeUp>
          </div>
        </div>
      </Section>

      {/* (3) 出場できる大会 */}
      <Section id="events" className="texture-paper">
        <SectionTitle
          en="COMPETITIONS"
          align="center"
          title="校内の走行会から、全国大会まで"
          lead="いきなり大きな大会に出るわけではありません。校内イベントで試合の感覚をつかみ、外部大会で場数を踏み、その先に全国の舞台があります。段階を踏んで挑戦できるのが本校の環境です。"
        />
        <Stagger className="mt-12 grid gap-6 md:grid-cols-2">
          {events.map((e) => (
            <StaggerItem key={e.title} className="h-full">
              <div className="flex h-full flex-col border border-cream-300 bg-white p-7 shadow-soft transition duration-300 hover:-translate-y-1.5 hover:shadow-lift">
                <span className="self-start rounded-full bg-pine-50 px-3 py-1 text-[11px] font-bold text-pine-800">
                  {e.tag}
                </span>
                <h3 className="mt-3 font-serif text-lg font-bold leading-snug text-pine-950">
                  {e.title}
                </h3>
                <p className="mt-3 flex-1 text-[13px] leading-7 text-ink-700">
                  {e.desc}
                </p>
              </div>
            </StaggerItem>
          ))}
        </Stagger>
        <FadeUp delay={0.1} className="mt-10">
          <p className="mx-auto max-w-3xl bg-pine-50 px-6 py-5 text-center text-sm font-bold leading-7 text-pine-800">
            全国高校生馬術選手権大会への出場実績があり、全日本ジュニア選手権大会には5年連続で出場しています。未経験で入学した生徒たちも、6か月目以降は数多くの馬術大会で活躍できるようになります。
          </p>
        </FadeUp>
      </Section>

      {/* (4) 3年間で身につく力 */}
      <Section id="curriculum" className="bg-white">
        <SectionTitle
          en="CURRICULUM"
          align="center"
          title={
            <>
              競技で勝つための3年間
              <span className="mt-3 block font-serif text-base font-bold leading-snug text-pine-800 md:text-xl">
                騎乗量・担当馬・資格。この3つが、結果をつくります。
              </span>
            </>
          }
          lead="馬術は、乗った時間がそのまま実力になる競技です。バジガクの1日は騎乗と馬の管理が中心。週に数回のクラブ活動では届かない量を、毎日の授業として積み重ねます。"
        />
        <Stagger className="mt-12 grid gap-6 md:grid-cols-3">
          {pillars.map((p) => (
            <StaggerItem key={p.no} className="h-full">
              <div className="relative flex h-full flex-col bg-cream-100 p-8 pt-10 shadow-soft transition duration-300 hover:-translate-y-1.5 hover:shadow-lift">
                <span className="absolute -top-5 left-8 flex h-11 w-11 items-center justify-center rounded-full bg-pine-800 font-serif text-sm font-bold text-gold-300 shadow-soft">
                  {p.no}
                </span>
                <p className="text-[11px] font-bold tracking-[0.3em] text-gold-600">
                  {p.en}
                </p>
                <h3 className="mt-3 font-serif text-xl font-bold leading-snug text-pine-950">
                  {p.title}
                </h3>
                <p className="mt-1 text-xs font-bold text-pine-700">{p.sub}</p>
                <p className="mt-4 flex-1 text-[13px] leading-7 text-ink-700">
                  {p.desc}
                </p>
              </div>
            </StaggerItem>
          ))}
        </Stagger>
        <FadeUp delay={0.15} className="mt-14">
          <div className="overflow-hidden shadow-soft">
            <Image
              src="/images/bajutsu_003_1.jpg"
              alt="騎乗授業で担当馬とともに練習する生徒"
              width={1600}
              height={700}
              className="h-56 w-full object-cover md:h-80"
            />
          </div>
          <p className="mt-3 text-center text-xs text-ink-500">
            騎乗レベルに応じたクラス編成。同じコースでも、一人ひとりの目標に合わせて練習を組み立てます。
          </p>
        </FadeUp>
      </Section>

      {/* (5) リトレーニング */}
      <Section id="retraining" className="bg-cream-100">
        <div className="grid items-center gap-12 lg:grid-cols-2">
          <FadeUp>
            <div className="relative">
              <div
                aria-hidden
                className="absolute -bottom-4 -right-4 h-full w-full border-2 border-gold-500/40"
              />
              <div className="relative aspect-[4/3] overflow-hidden shadow-soft">
                <Image
                  src="/images/ippan_003_1-2.jpg"
                  alt="引退競走馬のリトレーニングに取り組む生徒"
                  fill
                  sizes="(max-width: 1024px) 100vw, 50vw"
                  className="object-cover"
                />
              </div>
            </div>
          </FadeUp>
          <FadeUp delay={0.15}>
            <p className="text-[11px] font-bold tracking-[0.4em] text-gold-600">
              RETRAINING
            </p>
            <p className="mt-3 font-serif text-xl font-bold leading-relaxed text-pine-950 md:text-2xl">
              自分が育てた元競走馬と、
              <br />
              競技場に立つ。
            </p>
            <div className="rule-gold mt-5 h-[2px] w-16" aria-hidden />
            <p className="mt-6 text-sm leading-8 text-ink-700 md:text-[15px]">
              速く走ることだけを教えられてきた競走馬は、引退してもすぐには一般の人を乗せられません。誰が乗っても指示どおりに動き、障害を跳べる乗用馬へ——その調教しなおしが「転用調教（リトレーニング）」です。
            </p>
            <p className="mt-4 text-sm leading-8 text-ink-700 md:text-[15px]">
              本校では引退馬支援団体Retouchと連携し、数多くの引退競走馬とともにこの技術を実践的に学びます。自分の手で乗用馬に育てた馬と馬術競技会に出場し、入賞を目指す。ほかでは経験できない、この学校ならではの挑戦です。
            </p>
            <div className="mt-8 flex flex-wrap justify-center gap-4 md:justify-start">
              <Link
                href="/intaiba"
                className="group inline-flex items-center gap-3 rounded-full bg-pine-800 px-7 py-3.5 text-sm font-bold text-white shadow-soft transition hover:bg-pine-700 hover:shadow-lift"
              >
                引退馬のサポートについて
                <span className="transition-transform duration-300 group-hover:translate-x-1.5">→</span>
              </Link>
              <Link
                href="/course"
                className="group inline-flex items-center gap-3 rounded-full border-2 border-pine-800 px-7 py-3.5 text-sm font-bold text-pine-800 transition hover:bg-pine-800 hover:text-white"
              >
                一般高校乗馬コースを見る
                <span className="transition-transform duration-300 group-hover:translate-x-1.5">→</span>
              </Link>
            </div>
          </FadeUp>
        </div>
      </Section>

      {/* (6) ロードマップ */}
      <Section id="roadmap" className="bg-white">
        <SectionTitle
          en="ROADMAP"
          align="center"
          title="はじめての一歩から、全国の舞台まで"
          lead="乗馬未経験の入学から、競技実績を進路につなげるまで。3年間で駆け上がる5つのステップです。"
        />
        <div className="relative mx-auto mt-14 max-w-3xl">
          <span
            aria-hidden
            className="absolute bottom-5 left-[21px] top-5 w-px bg-gold-400/60"
          />
          <Stagger className="space-y-8">
            {roadmap.map((s) => (
              <StaggerItem key={s.no}>
                <div className="relative pl-16">
                  <span className="absolute left-0 top-0 flex h-11 w-11 items-center justify-center rounded-full bg-pine-800 font-serif text-sm font-bold text-gold-300 shadow-soft ring-4 ring-white">
                    {s.no}
                  </span>
                  <div className="bg-cream-100 p-6 shadow-soft transition duration-300 hover:-translate-y-1 hover:shadow-lift md:p-7">
                    <p className="text-[11px] font-bold tracking-[0.3em] text-gold-600">
                      STEP {s.no}｜{s.period}｜{s.label}
                    </p>
                    <h3 className="mt-2 font-serif text-lg font-bold leading-snug text-pine-950">
                      {s.title}
                    </h3>
                    <p className="mt-3 text-[13px] leading-7 text-ink-700">{s.desc}</p>
                  </div>
                </div>
              </StaggerItem>
            ))}
          </Stagger>
          <p className="mt-6 text-center text-[11px] leading-6 text-ink-500">
            ※スケジュールは年度や一人ひとりの習熟度により変わる場合があります。
          </p>
        </div>
      </Section>

      {/* (7) 実績 */}
      <section id="results" className="relative overflow-hidden bg-pine-900 py-16 md:py-24">
        <div
          aria-hidden
          className="absolute inset-0 bg-cover bg-center opacity-10"
          style={{ backgroundImage: "url(/images/ippan_002_1.jpg)" }}
        />
        <div className="relative mx-auto max-w-7xl px-6">
          <SectionTitle
            dark
            align="center"
            en="RESULTS"
            title="馬術競技の実績と環境"
          />
          <Stagger className="mt-12 grid grid-cols-2 gap-8 md:grid-cols-4">
            {resultStats.map((s) => (
              <StaggerItem key={s.label} className="text-center">
                <p className="font-serif text-4xl font-bold text-sun-400 md:text-5xl">
                  <Counter to={s.value} />
                  <span className="text-2xl text-white md:text-3xl">{s.suffix}</span>
                </p>
                <div className="mx-auto mt-3 h-[2px] w-10 bg-gold-400" />
                <p className="mt-3 text-sm font-bold text-white">{s.label}</p>
                {s.note && <p className="mt-1 text-[11px] text-white/60">{s.note}</p>}
              </StaggerItem>
            ))}
          </Stagger>
          <FadeUp delay={0.15} className="mt-16">
            <p className="text-center text-[11px] font-bold tracking-[0.35em] text-gold-300">
              CREDIT
            </p>
            <h3 className="mt-2 text-center font-serif text-2xl font-bold text-white md:text-3xl">
              馬術への挑戦が、高校の単位になる
            </h3>
            <p className="mx-auto mt-4 max-w-3xl text-center text-sm leading-7 text-white/80">
              本校では、中間・期末テストの点数よりも、日々の取り組みと学習成果を重視した独自の単位認定方式を採っています。馬術に注いだ時間が、そのまま高校卒業の学びとして評価されます。
            </p>
            <Stagger className="mx-auto mt-8 grid max-w-4xl gap-4 md:grid-cols-3">
              {[
                { subject: "体育", detail: "基本馬術、応用（障害・馬場）" },
                { subject: "課題研究", detail: "馬術競技会への出場、入賞成績記録" },
                { subject: "就業体験", detail: "乗馬クラブへのインターンシップ記録" },
              ].map((c) => (
                <StaggerItem key={c.subject}>
                  <div className="h-full border border-white/15 bg-white/5 p-6 transition duration-300 hover:border-gold-400/60 hover:bg-white/10">
                    <p className="font-serif text-lg font-bold text-gold-300">
                      {c.subject}
                    </p>
                    <p className="mt-2 text-[13px] leading-7 text-white/80">
                      {c.detail}
                    </p>
                  </div>
                </StaggerItem>
              ))}
            </Stagger>
            <p className="mt-6 text-center text-[11px] leading-6 text-white/55">
              ※履修科目は一例です。単位認定の内容は年度により変わる場合があります。
            </p>
          </FadeUp>
          <FadeUp delay={0.2} className="mt-10 text-center">
            <Link
              href="/shingaku"
              className="inline-flex items-center gap-2 text-sm font-bold text-gold-300 transition hover:text-gold-400"
            >
              大学・短大・専門学校への進学について見る
              <span aria-hidden>→</span>
            </Link>
          </FadeUp>
        </div>
      </section>

      {/* (8) FAQ */}
      <Section id="faq" className="texture-paper">
        <SectionTitle
          en="FAQ"
          align="center"
          title="馬術志望の方から、よくあるご質問"
          lead="未経験からの挑戦、費用のこと、単位認定のこと。馬術競技を目指す方から特に多くいただくご質問にお答えします。"
        />
        <FadeUp delay={0.1} className="mx-auto mt-12 max-w-3xl">
          <Accordion items={bajutsuFaqs} />
          <div className="mt-10 text-center">
            <Link
              href="/qa"
              className="group inline-flex items-center gap-3 rounded-full border-2 border-pine-800 px-8 py-4 text-sm font-bold text-pine-800 transition hover:bg-pine-800 hover:text-white"
            >
              よくある質問をすべて見る
              <span className="transition-transform duration-300 group-hover:translate-x-1.5">→</span>
            </Link>
          </div>
        </FadeUp>
      </Section>

      {/* (9) CTA */}
      <CTABand />
    </>
  );
}
