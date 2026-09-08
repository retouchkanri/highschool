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
    absolute: "JRA厩務員になるには｜高校からJRA競馬学校を目指す｜東関東馬事高等学院",
  },
  description:
    "高校3年生で現役合格多数！JRA厩務員になるには？高校在学中からJRA競馬学校厩務員課程を目指せる東関東馬事高等学院。乗馬未経験から騎乗・競走馬管理・筆記・面接まで実践的に学びます。厩務員になるには、東関東馬事高等学院がお薦めの学校。JRA競馬学校の厩務員課程合格者多数。",
  keywords: [
    "JRA厩務員",
    "JRA厩務員になるには",
    "厩務員 高校",
    "厩務員 学校",
    "JRA競馬学校",
    "競走馬 厩務員",
    "合格率",
    "女性",
    "合格",
    "中学生",
    "高校生",
  ],
};

/* ---------------- 受験で問われるポイント ---------------- */

const groomJobs = [
  {
    title: "筆記試験（国語・社会）",
    desc: "受験でまず最初に問われる筆記問題。これは本校独自で過去問題を分析し出題傾向を予測し、勉強が苦手な生徒でも問題ありません。独自のワークを完全にマスターすることで、この筆記試験対策は万全です。",
  },
  {
    title: "「競馬一般」筆記対策",
    desc: "これは、競走馬に関わる中での当たり前の専門知識。しかし、知っているか知らない差が合格・不合格を左右します。馬を扱ううえで、日常から専門用語の理解、競馬の常識をしっかりマスターしていきます。",
  },
  {
    title: "騎乗試験、これ重要です！",
    desc: "一番難関と言われる騎乗試験。しかし、本校の生徒からすれば日常の訓練により、一番得意とする所。「上手に乗る！綺麗に乗る！」ことが求められているだけでなく、自己分析をしっかりできる能力が大切。",
  },
  {
    title: "面接もしっかりサポート！",
    desc: "なぜ、厩務員？といった明確な志望動機。中学卒業からJRA厩務員に向けて親元を離れて、取り組んできたここでの高校生活。自分が厩務員として活躍するための覚悟をしっかりぶつけてみましょう。",
  },
];

/* ---------------- 受験サポート6項目 ---------------- */

const supports = [
  {
    no: "01",
    tag: "実技（騎乗）対策",
    title: "試験で求められる「基本馬術」を徹底！",
    desc: "試験で大切なのは、安定した基本馬術です。日々の騎乗授業を通じて、正しい姿勢・バランス・リズムを繰り返し磨き、試験本番で求められる確かな騎乗技術を身につけます。",
  },
  {
    no: "02",
    tag: "学科（筆記）対策",
    title: "毎日の授業そのものが、受験の対策に",
    desc: "国語・社会は過去の出題傾向をもとにしっかり対策。さらに「競馬一般科目」も通常授業と連動して学びます。試験に必要となる幅広い知識を授業の中で着実に身につけます。",
  },
  {
    no: "03",
    tag: "面接対策",
    title: "自分の言葉で、想いをしっかり伝える",
    desc: "日頃から「聞く・書く・話す」を繰り返し、自己分析や振り返りを重ねます。「なぜJRA厩務員を目指すのか」を、常に本番を想定した実践的な面接の対応力を養っています。",
  },
  {
    no: "04",
    tag: "現場を知る",
    title: "現役競走馬と、本物の現場から学べる",
    desc: "在学中から現役競走馬の管理に携わり、さらに全国の牧場で実習を経験します。競走馬の扱いや管理、仕事の流れを実際の現場で学び、JRA厩務員として働く将来を描きます。",
  },
  {
    no: "05",
    tag: "試験に挑戦",
    title: "高校在学中に、最大2回のJRA試験へ",
    desc: "高校3年次には、前期・後期の最大2回、JRA厩務員試験に挑戦できます。中学卒業後、未経験から入学し、高校3年生でも、多くの合格者を送り出している結果が証明です。",
  },
  {
    no: "06",
    tag: "卒業後も再挑戦",
    title: "不合格でも、夢をそこで終わらせない",
    desc: "在学中に合格へ届かなかった場合も、受験に協力いただける牧場と連携。卒業後も競馬の現場で経験を積みながら再受験できる環境を整え、JRA厩務員になる夢実現まで支援。",
  },
];

/* ---------------- 特別カリキュラム 3つの柱 ---------------- */

const pillars = [
  {
    no: "01",
    en: "RIDING",
    title: "騎乗訓練",
    sub: "基本馬術から競走騎乗まで",
    desc: "本校では習熟度に応じて、1日1回から多い日には3〜4回の騎乗機会を設けています。基本馬術からモンキー騎乗まで、3年間の積み重ねによって、競走馬を扱うための確かな騎乗技術を身につけます。",
  },
  {
    no: "02",
    en: "STABLE WORK",
    title: "厩舎実習",
    sub: "担当馬制度で「自分で考える」管理力を",
    desc: "担当馬の飼料を考える飼養管理、馬体の状態を確認する馬匹管理を毎日実践。基本を確実にこなす力から、馬の変化に気づき、自分で考え判断・行動できる、現場で求められる応用力まで養います。",
  },
  {
    no: "03",
    en: "PHYSICAL",
    title: "フィジカル",
    sub: "体力・体重を自分で管理する力を",
    desc: "競走馬を支える仕事だからこそ、自分自身の身体管理も大切です。日々のトレーニングに加え、体力・体重を継続的に記録。データを授業でも活用しながら、プロとして必要な体力と自己管理力を養います。",
  },
];

/* ---------------- JRA受験までのロードマップ ---------------- */

const roadmap = [
  {
    no: "01",
    period: "1年次・4月〜",
    label: "入学",
    title: "未経験から、基礎乗馬をゼロから",
    desc: "入学する生徒の多くは乗馬未経験。まずはおとなしい馬とのパートナーシップづくりから始め、正しい騎乗姿勢と馬の扱い方を、ひとつずつ確実に身につけます。",
  },
  {
    no: "02",
    period: "1年次後半〜2年次",
    label: "基礎訓練",
    title: "競走馬を扱うための土台づくり",
    desc: "馬の身体のこと、飼料、病気やクセ——講義でしっかり知識を固めながら、担当馬の管理を実践。乗馬の応用技術とあわせて、競走馬へ進むための土台を築きます。",
  },
  {
    no: "03",
    period: "2年次・10月〜",
    label: "コース選択",
    title: "競走馬厩務員コースを選択",
    desc: "2年次9月頃の進路指導を経て、10月以降に競走馬厩務員コースへ。冠名「バジガク」の現役競走馬を担当し、飼養・馬匹・騎乗運動の3つの管理を毎日の実践で積み重ねます。",
  },
  {
    no: "04",
    period: "2〜3年次",
    label: "実習",
    title: "トレセン近郊・北海道でのインターン",
    desc: "JRAトレーニングセンター近郊の競走馬育成施設や北海道の牧場へ、職場研修に出向きます。JRAで出走する競走馬に直接関わりながら、現場で通用する力を確かめます。",
  },
  {
    no: "05",
    period: "3年次",
    label: "受験",
    title: "JRA競馬学校 厩務員課程に挑戦",
    desc: "高校3年次の前期・後期、あわせて2回の受験チャンス。前期で合格すれば厩務員課程に在籍しながら高校卒業資格を取得、後期合格なら卒業と同時に厩務員課程へ進みます。",
  },
];

/* ---------------- JRA厩務員 合格実績 ---------------- */

const resultStats = [
  { value: 118, suffix: "頭", label: "本校で管理する馬匹の数" },
  { value: 8, suffix: "施設", label: "本校の職場実習連携施設" },
  { value: 72, suffix: "名", label: "JRA厩務員の合格者数", note: "※平成28年度以降" },
  { value: 73, suffix: "%", label: "未経験・初心者の入学率", note: "※令和3年以降実績" },
];

const yearlyResults = [
  { year: "令和8年度", applied: 5, enrolled: 2, after: 2 },
  { year: "令和7年度", applied: 7, enrolled: 5, after: 3 },
  { year: "令和6年度", applied: 4, enrolled: 2, after: 1 },
  { year: "令和5年度", applied: 5, enrolled: 5, after: 3 },
  { year: "令和4年度", applied: 6, enrolled: 6, after: 3 },
  { year: "令和3年度", applied: 5, enrolled: 2, after: 3 },
  { year: "令和2年度", applied: 8, enrolled: 6, after: 2 },
  { year: "平成31年度", applied: 6, enrolled: 5, after: 4 },
  { year: "平成30年度", applied: 6, enrolled: 3, after: 4 },
  { year: "平成29年度", applied: 3, enrolled: 3, after: 3 },
  { year: "平成28年度", applied: 1, enrolled: 1, after: 4 },
];

/* ---------------- FAQ ---------------- */

const pick = (q: string): QA[] => {
  const hit = faqs.find((f) => f.q === q);
  return hit ? [{ q: hit.q, a: hit.a }] : [];
};

const groomFaqs: QA[] = [
  {
    q: "乗馬未経験でも厩務員を目指せますか？",
    a: "はい、目指せます。バジガクの入学生の6〜7割は乗馬未経験・初心者からのスタートで、1年次は基礎乗馬からじっくり積み上げていきます。JRA競馬学校の厩務員課程には騎乗経験などの応募要件があるため、高校3年間のうちに現役競走馬と毎日向き合い、実践経験を重ねられる本校の環境は、未経験の方にこそ大きな味方になります。※応募要件の詳細は、JRA競馬学校の最新の募集要項をご確認ください。",
  },
  {
    q: "女子でも厩務員を目指せますか？",
    a: "もちろんです。本校は性別を問わず「馬の仕事に就きたい」という生徒を受け入れており、寮は男女別棟・全室個室で安心して生活できます。厩務員の仕事は力仕事のイメージがありますが、その本質は馬との信頼関係と丁寧なケアの積み重ね。授業もインターンシップも男女の区別なく取り組めますので、女子生徒も安心して競走馬の道に挑戦できます。",
  },
  ...pick("一般高校乗馬コースと競走馬厩務員コースは、いつ選択するのですか？"),
  ...pick("在学中にJRAの厩務員試験を受けられますか？"),
  ...pick("在学中に牧場などでの研修はありますか？"),
  {
    q: "JRA競馬学校に合格できなかった場合は、どうなりますか？",
    a: "受験のチャンスは高校3年次の前期・後期の2回あります。万一どちらも合格に届かなかった場合も、地方競馬の厩務員や生産・育成牧場のスタッフなど、競走馬を支える進路はしっかりと開かれています。本校には全国350件超の馬関連求人ネットワークがあり、在学中のインターンシップで現場との相性を確かめたうえで就職先を選べます。卒業後に牧場で経験を積みながら、厩務員課程への再挑戦を目指す道もあります。",
  },
  ...pick("卒業後はどんな馬の仕事に就けますか？"),
];

export default function KyumuinPage() {
  return (
    <>
      {/* (1) Hero */}
      <PageHero
        image="/g10.JPG"
        en="GROOM COURSE"
        title="在学中にJRA厩務員を目指すために"
        lead="本校では高校3年次に2回のJRA競馬学校の厩務員受験に挑戦。合格者多数の実績。JRA厩務員への最年少、最短コースです。"
        crumbs={[
          { label: "HOME", href: "/" },
          { label: "コース紹介", href: "/course" },
          { label: "JRA厩務員を目指す方へ" },
        ]}
      />

      {/* (2) 厩務員とは */}
      <Section id="about" className="bg-white">
        <div className="grid items-start gap-12 lg:grid-cols-2">
          <div>
            <SectionTitle
              en="WHAT IS A GROOM"
              title={
                <>
                  JRA厩務員になるには
                  <br />
                  本校が最短で合格実績多数の証明
                </>
              }
              lead="JRA厩務員とは、現役競走馬の一番近くでプロとして競走馬であり馬主の貴重な財産を守るお仕事です。そのため、美浦トレセン・栗東トレセンの厩舎に所属し調教師の指示のもと、万全な競走馬の管理を担うプロの仕事。本校では、未経験から2年半年での合格者を輩出。JRA厩務員になるには、本校の合格実績が証明しています。"
            />
            <Stagger className="mt-10 space-y-4">
              {groomJobs.map((j) => (
                <StaggerItem key={j.title}>
                  <div className="border border-cream-300 bg-cream-100 p-5 transition duration-300 hover:-translate-y-1 hover:shadow-soft">
                    <h3 className="flex items-start gap-3 text-sm font-bold text-pine-950 md:text-[15px]">
                      <span className="mt-0.5 inline-block h-4 w-1 shrink-0 rounded-full bg-gold-500" />
                      {j.title}
                    </h3>
                    <p className="mt-2 pl-4 text-[13px] leading-7 text-ink-700">
                      {j.desc}
                    </p>
                  </div>
                </StaggerItem>
              ))}
            </Stagger>
          </div>
          <div className="relative lg:sticky lg:top-28">
            <ScaleIn className="relative z-10 overflow-hidden shadow-lift">
              <Image
                src="/images/kyumuin_001_2.jpg"
                alt="担当馬の管理に取り組む生徒たち"
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
                src="/images/kyumuin_001_3.jpg"
                alt="競走馬の騎乗運動管理を行う生徒"
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
                  CAREER PATH 1
                </p>
                <h3 className="mt-2 text-sm font-bold text-pine-950 md:text-[15px]">
                  JRA厩務員合格への道
                </h3>
                <p className="mt-2 text-[13px] leading-7 text-ink-700">
                  今、JRAや厩務員の雇用者である調教師が求める人材とは？の本質を理解し、それにそう教育を徹底的に行う本校の強み。男女とも高校3年次に合格しています。
                </p>
              </div>
              <div className="border-l-4 border-pine-800 bg-cream-100 p-5">
                <p className="text-xs font-bold tracking-[0.25em] text-pine-700">
                  CAREER PATH 2
                </p>
                <h3 className="mt-2 text-sm font-bold text-pine-950 md:text-[15px]">
                  広がるもうひとつの道
                </h3>
                <p className="mt-2 text-[13px] leading-7 text-ink-700">
                  万が一の不合格時にも牧場との連携で卒業後も継続してJRA厩務員受験が可能に。さらに地方競馬の厩務員、牧場への就職も引っ張りだこです。
                </p>
              </div>
              <p className="text-[11px] leading-6 text-ink-500">
                ※JRA競馬学校の厩務員課程の募集要項が変更する場合もあります。必ずその年度の募集要項をご参照ください。
              </p>
            </FadeUp>
          </div>
        </div>
      </Section>

      {/* (3) 本校の受験サポート */}
      <Section id="support" className="texture-paper">
        <SectionTitle
          en="SUPPORT"
          align="center"
          title="本校の受験サポート"
          lead="厩務員課程の受験は、実技（騎乗）・学科（筆記）・面接の総合力が問われます。バジガクでは高校生活そのものを受験対策として編成し、合格から逆算した6つのサポートで一人ひとりの挑戦を支えます。"
        />
        <Stagger className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {supports.map((s) => (
            <StaggerItem key={s.no} className="h-full">
              <div className="flex h-full flex-col border border-cream-300 bg-white p-7 shadow-soft transition duration-300 hover:-translate-y-1.5 hover:shadow-lift">
                <div className="flex items-center justify-between">
                  <p className="font-serif text-2xl font-bold text-gold-500">{s.no}</p>
                  <span className="rounded-full bg-pine-50 px-3 py-1 text-[11px] font-bold text-pine-800">
                    {s.tag}
                  </span>
                </div>
                <h3 className="mt-3 font-serif text-base font-bold leading-snug text-pine-950 md:text-lg">
                  {s.title}
                </h3>
                <p className="mt-3 flex-1 text-[13px] leading-7 text-ink-700">
                  {s.desc}
                </p>
              </div>
            </StaggerItem>
          ))}
        </Stagger>
        <FadeUp delay={0.1} className="mt-10">
          <p className="mx-auto max-w-3xl bg-pine-50 px-6 py-5 text-center text-sm font-bold leading-7 text-pine-800">
            JRA競馬学校 厩務員課程を目指す生徒は、高校3年次に前期・後期の2回、受験に挑戦できます。ここで身につける知識・騎乗技術・馬の管理能力は、JRAだけでなく、地方競馬の厩務員や育成・生産牧場など、幅広い馬の仕事を目指すうえでも活かせる力となります。本気でJRA厩務員を目指すなら東関東馬事高等学院を選択してください。
          </p>
        </FadeUp>
      </Section>

      {/* (4) 特別カリキュラム */}
      <Section id="curriculum" className="bg-white">
        <SectionTitle
          en="SPECIAL CURRICULUM"
          align="center"
          title={
            <>
              JRA競馬学校 厩務員課程への挑戦
              <span className="mt-3 block font-serif text-base font-bold leading-snug text-pine-800 md:text-xl">
                高校3年次の前期・後期、最大2回の受験機会。
              </span>
            </>
          }
          lead="競走馬の厩務員を目指すために必要なのは、一つの技術だけではありません。本校では、試験で求められる基本馬術と、競走馬を扱うためのモンキー騎乗による競走騎乗訓練の両方を実践。未経験からでも、3年間の毎日の積み重ねによって、現場で通用する本物の実力を身につけます。"
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
              src="/images/kyumuin_002_1.jpg"
              alt="競馬場で担当馬のレースを見守る生徒たち"
              width={1600}
              height={700}
              className="h-56 w-full object-cover md:h-80"
            />
          </div>
          <p className="mt-3 text-center text-xs text-ink-500">
            東関東馬事高等学院では、最年少である高校3年生（17歳～）の合格者多数
          </p>
        </FadeUp>
      </Section>

      {/* (5) JRA受験までのロードマップ */}
      <Section id="roadmap" className="bg-cream-100">
        <SectionTitle
          en="ROADMAP"
          align="center"
          title="JRA受験までのロードマップ"
          lead="乗馬未経験の入学から、JRA競馬学校 厩務員課程の受験まで。3年間で駆け上がる5つのステップを、段階を踏んで確実に積み上げていきます。"
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
                  <span className="absolute left-0 top-0 flex h-11 w-11 items-center justify-center rounded-full bg-pine-800 font-serif text-sm font-bold text-gold-300 shadow-soft ring-4 ring-cream-100">
                    {s.no}
                  </span>
                  <div className="bg-white p-6 shadow-soft transition duration-300 hover:-translate-y-1 hover:shadow-lift md:p-7">
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
        <FadeUp delay={0.1} className="mt-16">
          <div className="grid items-center gap-10 bg-white p-6 shadow-soft md:p-10 lg:grid-cols-2">
            <div className="overflow-hidden">
              <Image
                src="/images/kyumuin_003_1.jpg"
                alt="牧場での職場研修に励む生徒"
                width={1200}
                height={800}
                className="h-full w-full object-cover"
              />
            </div>
            <div>
              <p className="text-[11px] font-bold tracking-[0.35em] text-gold-600">
                INTERNSHIP
              </p>
              <h3 className="mt-2 font-serif text-2xl font-bold leading-snug text-pine-950">
                豊富なインターンシップ
              </h3>
              <p className="mt-3 text-sm font-bold leading-7 text-pine-800">
                現場を知るから、自分に合った進路が見えてくる。
              </p>
              <p className="mt-5 text-sm leading-8 text-ink-700">
                2年次以降、競走馬実践カリキュラムを修了した生徒から、全国の牧場で実地研修を開始します。研修先は、バジガクが持つ全国の馬関連ネットワークから、一人ひとりの目標に合わせて選択。在学中に複数の現場を経験し、技術を磨きながら、自分に合った進路を見極めます。
              </p>
              <div className="mt-7 grid grid-cols-2 gap-4">
                <div className="bg-cream-100 p-5 text-center">
                  <p className="font-serif text-3xl font-bold text-pine-800 md:text-4xl">
                    <Counter to={3} suffix="か所以上" />
                  </p>
                  <p className="mt-2 text-xs font-bold text-ink-700">
                    在学中に経験する牧場・競馬関連施設
                  </p>
                </div>
                <div className="bg-cream-100 p-5 text-center">
                  <p className="font-serif text-3xl font-bold text-pine-800 md:text-4xl">
                    全国各地
                  </p>
                  <p className="mt-2 text-xs font-bold text-ink-700">
                    希望する進路に合わせた実地研修
                  </p>
                </div>
              </div>
              <p className="mt-4 text-[11px] leading-6 text-ink-500">
                ※上記は、株式会社馬事学院全体（東関東馬事高等学院・東関東馬事専門学院）の実績を掲載しています。
              </p>
            </div>
          </div>
          <div className="mt-10 text-center">
            <Link
              href="/boshu"
              className="group inline-flex items-center gap-3 rounded-full bg-pine-800 px-8 py-4 text-sm font-bold text-white shadow-soft transition hover:bg-pine-700 hover:shadow-lift"
            >
              募集要項・学費を見る
              <span className="transition-transform duration-300 group-hover:translate-x-1.5">→</span>
            </Link>
          </div>
        </FadeUp>
      </Section>

      {/* (6) JRA厩務員 合格実績 */}
      <section id="results" className="relative overflow-hidden bg-pine-900 py-16 md:py-24">
        <div
          aria-hidden
          className="absolute inset-0 bg-cover bg-center opacity-10"
          style={{ backgroundImage: "url(/images/kyumuin_001_1.jpg)" }}
        />
        <div className="relative mx-auto max-w-7xl px-6">
          <SectionTitle
            dark
            align="center"
            en="RESULTS"
            title="JRA競馬学校 厩務員課程 合格実績"
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
              RECORDS
            </p>
            <h3 className="mt-2 text-center font-serif text-2xl font-bold text-white md:text-3xl">
              年度別 JRA厩務員課程 合格実績
            </h3>
            <p className="mx-auto mt-4 max-w-3xl text-center text-sm leading-7 text-white/80">
              平成28年度以降、在学中の受験・合格実績を年度別にご紹介します。※は本校を卒業後、牧場等に就職してから受験・合格した人数です。
            </p>
            <div className="mt-8 overflow-x-auto border border-cream-300 bg-white shadow-soft">
              <table className="w-full min-w-[640px] text-left text-sm">
                <thead>
                  <tr className="bg-pine-800 text-[12px] tracking-wider text-white">
                    <th className="px-5 py-4 font-bold">年度</th>
                    <th className="px-5 py-4 text-right font-bold">受験者数</th>
                    <th className="px-5 py-4 text-right font-bold">合格者数（在学中）</th>
                    <th className="px-5 py-4 text-right font-bold">※卒業後の合格者数</th>
                  </tr>
                </thead>
                <tbody>
                  {yearlyResults.map((r, i) => (
                    <tr
                      key={r.year}
                      className={`border-t border-cream-300 ${
                        i % 2 === 1 ? "bg-cream-100" : "bg-white"
                      }`}
                    >
                      <td className="px-5 py-3.5 font-bold text-pine-950">{r.year}</td>
                      <td className="px-5 py-3.5 text-right text-ink-700">{r.applied}名</td>
                      <td className="px-5 py-3.5 text-right font-bold text-gold-600">
                        {r.enrolled}名
                        {r.enrolled === r.applied ? "（全員合格）" : ""}
                      </td>
                      <td className="px-5 py-3.5 text-right text-ink-700">{r.after}名</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            <p className="mt-4 text-center text-[11px] leading-6 text-white/55">
              ※上記は、株式会社馬事学院全体（東関東馬事高等学院・東関東馬事専門学院）の実績を掲載しています。
            </p>
          </FadeUp>
          <FadeUp delay={0.2} className="mt-10 text-center">
            <p className="mx-auto max-w-3xl text-sm leading-8 text-white/80">
              万一、合格に届かなかった場合も——卒業生たちは育成牧場や地方競馬の厩務員など、競走馬を支える仕事へと進んでいます。
            </p>
            <Link
              href="/tokucho#career"
              className="mt-4 inline-flex items-center gap-2 text-sm font-bold text-gold-300 transition hover:text-gold-400"
            >
              卒業後の進路について詳しく見る
              <span aria-hidden>→</span>
            </Link>
          </FadeUp>
        </div>
      </section>

      {/* (7) FAQ */}
      <Section id="faq" className="texture-paper">
        <SectionTitle
          en="FAQ"
          align="center"
          title="厩務員志望の方から、よくあるご質問"
          lead="未経験からの挑戦、コース選択のタイミング、受験後の進路のこと。厩務員を目指す方から特に多くいただくご質問にお答えします。"
        />
        <FadeUp delay={0.1} className="mx-auto mt-12 max-w-3xl">
          <Accordion items={groomFaqs} />
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

      {/* (8) CTA */}
      <CTABand />
    </>
  );
}
