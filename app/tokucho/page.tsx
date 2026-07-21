import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import PageHero from "@/components/PageHero";
import { Section, SectionTitle } from "@/components/Section";
import { FadeUp, ScaleIn, SlideIn, Stagger, StaggerItem } from "@/components/motion";
import Counter from "@/components/Counter";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: "本校の特徴",
  description:
    "馬の高校 東関東馬事高等学院（バジガク）の特徴。選ばれる理由、入学する生徒のタイプ、騎乗授業・馬のお世話・資格取得などの学び、卒業後の進路・就職実績、在校生・卒業生の声、数字で見るバジガクまで。馬と人が共に育つ「共育」の高校生活をご紹介します。",
};

const iconCls = "h-6 w-6";

const whys = [
  {
    no: "01",
    en: "PRACTICE",
    img: "/images/tokucho_002_1.jpg",
    title: "実践中心の「馬が真ん中」の教育",
    desc: "騎乗授業はほぼ毎日。朝の飼付から夕方の見回りまで、教科書ではなく本物の馬から学ぶ3年間です。育成馬・競走馬・引退馬・競技馬——多彩な馬たちが、いちばんの先生です。",
  },
  {
    no: "02",
    en: "SMALL CLASS",
    img: "/images/tokucho_003_1.jpg",
    title: "少人数だから、一人ひとりに届く指導",
    desc: "在校生は約60名。騎乗レベル別の班編成に加え、伸び悩むときは1対1の個人レッスンも行います。スタッフ全員が、生徒一人ひとりの顔と成長をしっかり見ている学校です。",
  },
  {
    no: "03",
    en: "REAL FIELD",
    img: "/images/tokucho_008_1.jpg",
    title: "「本物の現場」で積む業界経験",
    desc: "学校所有の現役競走馬は約20頭。競馬場や牧場・乗馬クラブでの研修といった校外学習も高校の単位につながり、在学中から馬業界のリアルを肌で学べます。",
  },
  {
    no: "04",
    en: "BEGINNER",
    img: "/images/DSC_0073.jpg",
    title: "未経験者がほとんど。安心のスタート",
    desc: "入学者の多くは、乗馬まったく未経験からのスタートです。基礎の基礎から段階的に学べるカリキュラムと、何度でも寄り添う指導で、3年後には見違える騎乗技術が身につきます。",
  },
  {
    no: "05",
    en: "LICENSE",
    img: "/images/tokucho_004_1.jpg",
    title: "資格・ライセンスを高校授業で取得",
    desc: "乗馬ライセンスや騎乗者資格、さらに家畜商免許まで、将来につながる資格取得を授業の一環として目指せます。評価は定期テストではなく、日々の学習成果による単位認定です。",
  },
  {
    no: "06",
    en: "CAREER",
    img: "/images/kyumuin_001_1.jpg",
    title: "卒業後まで見据えた進路サポート",
    desc: "350件超の馬関連求人と職場実習、JRA競馬学校・地方競馬教養センターの受験対策まで。「馬と生きる」進路の実現を、入学初日から卒業のその先まで全力で支えます。",
  },
];

const studentTypes = [
  {
    title: "馬が大好きな人",
    desc: "とにかく馬が好き。その「好き」が、いちばん強い入学理由です。",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" className={iconCls} aria-hidden>
        <path d="M12 20s-7-4.6-9-9a5 5 0 019-3 5 5 0 019 3c-2 4.4-9 9-9 9z" />
      </svg>
    ),
  },
  {
    title: "乗馬未経験の人",
    desc: "経験ゼロで大丈夫。入学者の多くが未経験からのスタートです。",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" className={iconCls} aria-hidden>
        <path d="M12 21V11" />
        <path d="M12 11c0-4 2.5-7 7-7 0 4.5-3 7-7 7z" />
        <path d="M12 14c0-3-2-5.5-5.5-5.5 0 3.5 2.5 5.5 5.5 5.5z" />
      </svg>
    ),
  },
  {
    title: "新しい挑戦をしたい人",
    desc: "転入学や不登校からの再スタートも歓迎。環境を変えて輝く生徒がたくさんいます。",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" className={iconCls} aria-hidden>
        <path d="M5 21V4" />
        <path d="M5 4h11l-2 4 2 4H5" />
      </svg>
    ),
  },
  {
    title: "馬の仕事を目指す人",
    desc: "騎手・厩務員・牧場スタッフ。夢への最短ルートがここにあります。",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" className={iconCls} aria-hidden>
        <circle cx="12" cy="12" r="9" />
        <circle cx="12" cy="12" r="4.5" />
        <circle cx="12" cy="12" r="1" fill="currentColor" />
      </svg>
    ),
  },
  {
    title: "体験から学びたい人",
    desc: "机の上より、体で覚えるタイプ。頑張りがそのまま成績になります。",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" className={iconCls} aria-hidden>
        <path d="M7 11V6a2 2 0 014 0v5" />
        <path d="M11 11V4.5a2 2 0 014 0V11" />
        <path d="M15 11V6a2 2 0 014 0v7a7 7 0 01-7 7h-1a7 7 0 01-7-7v-3a2 2 0 014 0v1" />
      </svg>
    ),
  },
];

const timeline = [
  { time: "06:30", label: "起床・朝の飼付" },
  { time: "07:30", label: "厩舎作業" },
  { time: "09:00", label: "騎乗授業" },
  { time: "12:00", label: "昼食" },
  { time: "13:00", label: "高校授業" },
  { time: "15:00", label: "午後の騎乗・調教" },
  { time: "17:00", label: "夕方の飼付・見回り" },
  { time: "19:00", label: "寮で自由時間" },
];

const learnings = [
  {
    en: "RIDING",
    img: "/images/tokucho_002_2.jpg",
    title: "騎乗授業",
    desc: "ほぼ毎日騎乗し、部班運動から障害飛越、コース走行まで段階的にレベルアップ。大会遠征の費用は学校が全額負担します。",
  },
  {
    en: "HORSE CARE",
    img: "/images/DSC9265.jpg",
    title: "馬のお世話・飼養管理",
    desc: "担当馬制度のもと、飼付・手入れ・馬房清掃を毎日担当。「命を預かる」仕事の基本を、日々の積み重ねで身につけます。",
  },
  {
    en: "CLASSROOM",
    img: "/images/shisetsu_005_1.jpg",
    title: "高校授業（座学）",
    desc: "連携する明蓬館高等学校の授業は1日2〜3時間に凝縮。集中して学んで高校卒業資格を取得し、残りの時間は思う存分馬へ。",
  },
  {
    en: "FIELDWORK",
    img: "/images/tokucho_008_2.jpg",
    title: "実習・研修（校外学習）",
    desc: "競馬場・牧場・乗馬クラブなど本物の現場での研修が高校の単位に。年に一度は九州・明蓬館本校へのスクーリングも。",
  },
  {
    en: "LICENSE",
    img: "/images/tokucho_004_2.jpg",
    title: "資格取得サポート",
    desc: "乗馬ライセンス・騎乗者資格・家畜商免許など、将来に直結する資格の取得を高校授業の一環としてサポートします。",
  },
  {
    en: "DORMITORY",
    img: "/images/shisetsu_003_1.jpg",
    title: "全寮制の学校生活",
    desc: "全室個室の学生寮で、同じ夢を持つ仲間と暮らす3年間。食事は365日3食、夜間は宿直スタッフが見守るので安心です。",
  },
];

const careerSteps = [
  { en: "STEP 01", title: "入学", desc: "未経験歓迎。馬と暮らす毎日へ" },
  { en: "STEP 02", title: "実践の3年間", desc: "騎乗・馬学・高校授業・資格取得" },
  { en: "STEP 03", title: "実習・受験対策", desc: "職場実習と進路指導で仕上げる" },
  { en: "GOAL", title: "馬業界へ", desc: "騎手・厩務員・牧場・乗馬クラブ" },
];

const supports = [
  {
    en: "JOB NETWORK",
    title: "全国350件超の求人ネットワーク",
    desc: "全国の牧場・乗馬クラブ・競馬関係団体から届く350件超の求人情報を進路指導に活用。希望に合う就職先をじっくり選べます。",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" className={iconCls} aria-hidden>
        <rect x="3" y="7" width="18" height="13" rx="2" />
        <path d="M9 7V5a2 2 0 012-2h2a2 2 0 012 2v2M3 12h18" />
      </svg>
    ),
  },
  {
    en: "EXAM SUPPORT",
    title: "JRA・地方競馬の受験対策",
    desc: "JRA競馬学校 騎手課程・厩務員課程、地方競馬教養センターの受験対策が高校授業そのもの。体重管理や体力づくりまで伴走します。",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" className={iconCls} aria-hidden>
        <path d="M4 19.5A2.5 2.5 0 016.5 17H20V3H6.5A2.5 2.5 0 004 5.5v14z" />
        <path d="M4 19.5A2.5 2.5 0 006.5 22H20v-5" />
      </svg>
    ),
  },
  {
    en: "INTERNSHIP",
    title: "職場実習から内定へ",
    desc: "在学中の職場実習・インターンシップで現場との相性を確かめてから就職へ。実習先でそのまま内定をいただくケースも多数あります。",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" className={iconCls} aria-hidden>
        <path d="M3 21h18" />
        <path d="M5 21V7l7-4 7 4v14" />
        <path d="M9 21v-4h6v4M9 12h.01M15 12h.01M12 9h.01" />
      </svg>
    ),
  },
];

const futures = [
  { img: "/images/top_future_001-1.jpg", title: "JRA騎手", desc: "高校1年次に騎手課程受験へ挑戦" },
  { img: "/images/top_future_002.jpg", title: "NAR 地方競馬騎手", desc: "高い合格実績を誇る受験指導" },
  { img: "/images/top_future_003.jpg", title: "JRA厩務員", desc: "高校3年次に競馬学校受験が可能" },
  { img: "/images/top_future_004.jpg", title: "生産牧場", desc: "在学中に北海道で馬生産を経験" },
  { img: "/images/top_future_005.jpg", title: "育成牧場", desc: "育てた馬が競馬場を駆け抜ける" },
  { img: "/images/top_future_006.jpg", title: "乗馬クラブ", desc: "乗馬・馬術の舞台で活躍する" },
  { img: "/images/top_future_007.jpg", title: "観光牧場", desc: "馬の魅力を多くの人へ届ける" },
  { img: "/images/top_future_008.jpg", title: "養老牧場", desc: "引退馬・養老馬に寄り添う仕事" },
];

const achievements = [
  "騎手課程（JRA・地方競馬）合格者 38名を輩出",
  "JRA競馬学校 厩務員課程にも合格者を輩出",
  "卒業生が全国の牧場・乗馬クラブ・競馬の現場で活躍中",
];

const graduateVoices = [
  {
    name: "拓海",
    meta: "競走馬厩務員コース卒業／JRA厩務員",
    img: "/images/top_future_003.jpg",
    quote:
      "在学中から現役競走馬の管理を任せてもらえたことが、いまの仕事の土台になっています。競馬学校の受験対策も、特別なことではなく学校の授業そのものでした。憧れだったトレセンで働く毎日は、バジガクの延長線上にあります。",
  },
  {
    name: "彩花",
    meta: "一般高校乗馬コース卒業／乗馬クラブスタッフ",
    img: "/images/top_future_006.jpg",
    quote:
      "未経験で入学した私が、いまはお客様に乗馬を教える立場になりました。3年間で身についたのは技術だけではなく、馬と人への向き合い方。担当馬が教えてくれたことを、今度は私がお客様と馬たちに伝えています。",
  },
];

const studentVoices = [
  {
    name: "陽菜",
    meta: "一般高校乗馬コース・1年",
    avatar: "/images/voice-avatar-mk.png",
    quote:
      "入学して3か月で、馬のいない生活が想像できなくなりました。朝は正直眠いけれど、担当馬が待っていると思うと自然に起きられます。",
  },
  {
    name: "蓮",
    meta: "競走馬厩務員コース・2年",
    avatar: "/images/voice-avatar-rt.png",
    quote:
      "中学ではあまり学校に行けなかった僕が、ここでは毎日馬場にいます。頑張った分がそのまま成績になる仕組みが、自分には合っていました。",
  },
  {
    name: "芽衣",
    meta: "騎手受験特別コース・3年",
    avatar: "/images/voice-avatar-sa.png",
    quote:
      "同じ夢を持つ仲間がすぐ隣にいる環境は、想像以上に心強いです。大会遠征も学校が支えてくれるので、挑戦を諦めない3年間になりました。",
  },
];

const stats = [
  { value: 100, suffix: "%", label: "進路決定率", note: "馬業界への就職希望者・例年実績" },
  { value: 18, suffix: "年目", label: "開校からの歩み", note: "2009年1月開校" },
  { value: 60, suffix: "名", label: "在校する高校生", note: "全国から集まる仲間たち" },
  { value: 20, suffix: "頭", label: "学校所有の現役競走馬", note: "冠名「バジガク」で出走" },
  { value: 350, suffix: "件超", label: "馬関連の求人情報", note: "全国の牧場・乗馬クラブ" },
  { value: 38, suffix: "名", label: "騎手課程 合格者数", note: "JRA・地方競馬（開校以来）" },
];

export default function TokuchoPage() {
  return (
    <>
      <PageHero
        image="/images/tokucho_001_1.jpg"
        en="FEATURES"
        title="本校の特徴"
        lead="馬と共に暮らし、馬と共に学ぶ。入口から出口まで——バジガクだからできる高校生活のすべてをご紹介します。"
        crumbs={[{ label: "HOME", href: "/" }, { label: "本校の特徴" }]}
      />

      {/* INTRO */}
      <Section className="relative overflow-hidden bg-white">
        <div className="grid items-center gap-12 lg:grid-cols-2">
          <div>
            <SectionTitle
              en="OUR PHILOSOPHY"
              title={
                <>
                  「馬と人」「人と馬」が
                  <br />
                  共に育つ、共育の環境。
                </>
              }
            />
            <FadeUp delay={0.15}>
              <p className="mt-8 text-sm leading-8 text-ink-700 md:text-[15px]">
                馬たちが安心して暮らせる環境と、生徒たちが充実した高校生活を送れる環境。そのどちらも大切にした学習環境こそが、馬の学校 東関東馬事高等学院の魅力です。私たちはこれを、馬と人が互いに育て合う「共育」と呼んでいます。
              </p>
              <p className="mt-4 text-sm leading-8 text-ink-700 md:text-[15px]">
                豊かなみどりに抱かれたキャンパスで、心ゆくまで馬たちと触れ合いながら、自分の中に眠る「新たな可能性」と次々に出会っていく——。馬が好き。そんなあなたにぴったりの高校です。
              </p>
            </FadeUp>
          </div>
          <div className="relative">
            <ScaleIn className="relative z-10 overflow-hidden shadow-lift">
              <Image
                src="/images/tokucho_001_2.jpg"
                alt="緑豊かなキャンパスで馬と過ごす生徒たち"
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
                src="/images/tokucho_001_3.jpg"
                alt="馬と心を通わせる生徒"
                width={800}
                height={560}
                className="h-full w-full object-cover"
              />
            </SlideIn>
            <div
              aria-hidden
              className="absolute -left-10 -top-10 -z-0 h-48 w-48 rounded-full bg-gold-300/30 blur-2xl"
            />
          </div>
        </div>
      </Section>

      {/* WHY CHOSEN */}
      <Section id="why" className="texture-paper">
        <SectionTitle
          en="WHY BAJIGAKU"
          align="center"
          title="本校が選ばれる理由"
          lead="実践中心の馬教育、少人数指導、本物の業界経験、未経験でも安心の環境、そして手厚い進路サポート。全国から生徒が集まる6つの理由をご紹介します。"
        />
        <Stagger className="mt-14 grid gap-6 md:grid-cols-2 lg:grid-cols-3 md:gap-7">
          {whys.map((w) => (
            <StaggerItem key={w.no} className="h-full">
              <article className="group flex h-full flex-col overflow-hidden bg-white shadow-soft transition duration-300 hover:-translate-y-1.5 hover:shadow-lift">
                <div className="relative h-48 overflow-hidden md:h-52">
                  <Image
                    src={w.img}
                    alt={w.title}
                    fill
                    sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                    className="object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  <div
                    aria-hidden
                    className="absolute inset-0 bg-gradient-to-t from-pine-950/70 via-pine-950/10 to-transparent"
                  />
                  <div className="absolute bottom-4 left-6 flex items-end gap-3">
                    <span
                      aria-hidden
                      className="font-serif text-5xl font-bold leading-none tracking-tight text-white drop-shadow-md md:text-6xl"
                    >
                      {w.no}
                    </span>
                    <span className="mb-1 border-l-2 border-gold-400 pl-3 text-[10px] font-bold tracking-[0.3em] text-gold-300">
                      REASON
                      <br />
                      {w.en}
                    </span>
                  </div>
                </div>
                <div className="flex flex-1 flex-col p-7">
                  <h3 className="font-serif text-lg font-bold leading-relaxed text-pine-950">
                    {w.title}
                  </h3>
                  <div className="mt-4 h-[2px] w-10 rule-gold" />
                  <p className="mt-4 flex-1 text-[13px] leading-7 text-ink-700">
                    {w.desc}
                  </p>
                </div>
              </article>
            </StaggerItem>
          ))}
        </Stagger>
      </Section>

      {/* WHO ENROLLS (ENTRY) */}
      <Section id="students" className="bg-white">
        <SectionTitle
          en="STUDENTS"
          align="center"
          title="どんな生徒が入学しているの？"
          lead="バジガクに集まるのは、こんな生徒たちです。ひとつでも当てはまったら、きっとこの学校が合っています。"
        />
        <Stagger gap={0.06} className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-5">
          {studentTypes.map((s, i) => (
            <StaggerItem key={s.title} className="h-full">
              <div className="group flex h-full flex-col items-center border border-cream-300 bg-cream-50 p-6 text-center transition duration-300 hover:-translate-y-1.5 hover:border-gold-400 hover:shadow-lift">
                <span className="text-[10px] font-bold tracking-[0.3em] text-gold-600">
                  TYPE {String(i + 1).padStart(2, "0")}
                </span>
                <span className="mt-4 flex h-14 w-14 items-center justify-center rounded-full bg-pine-50 text-pine-800 transition duration-300 group-hover:bg-pine-800 group-hover:text-sun-400">
                  {s.icon}
                </span>
                <h3 className="mt-4 font-serif text-[15px] font-bold leading-relaxed text-pine-950">
                  {s.title}
                </h3>
                <p className="mt-3 text-xs leading-6 text-ink-700">{s.desc}</p>
              </div>
            </StaggerItem>
          ))}
        </Stagger>
        <FadeUp delay={0.1} className="mt-10 text-center">
          <p className="text-sm leading-7 text-ink-700">
            転入学・編入学も随時受付中。不登校を経験した生徒も、馬との毎日から新しい一歩を踏み出しています。
          </p>
          <Link
            href="/support"
            className="mt-4 inline-flex items-center gap-2 text-xs font-bold text-gold-600 transition hover:text-gold-500"
          >
            不登校からの高校進学について
            <span aria-hidden>→</span>
          </Link>
        </FadeUp>
      </Section>

      {/* LEARNING (MIDDLE) */}
      <Section id="learning" className="bg-cream-100">
        <SectionTitle
          en="LEARNING"
          align="center"
          title="本校での学び"
          lead="騎乗、馬のお世話、高校授業、実習、資格取得、そして寮生活。馬が真ん中にある、バジガクの学びの中身をご紹介します。"
        />

        {/* Day timeline */}
        <FadeUp delay={0.1} className="mt-12">
          <div className="bg-white p-6 shadow-soft md:p-8">
            <p className="text-center text-[11px] font-bold tracking-[0.3em] text-gold-600">
              A DAY AT BAJIGAKU
            </p>
            <p className="mt-2 text-center font-serif text-lg font-bold text-pine-950">
              バジガク生の1日（一例）
            </p>
            <div className="mt-8 overflow-x-auto pb-2">
              <ol className="flex min-w-max items-start">
                {timeline.map((t, i) => (
                  <li
                    key={t.time}
                    className="relative flex w-[110px] flex-col items-center px-1 md:w-[130px]"
                  >
                    {i < timeline.length - 1 && (
                      <span
                        aria-hidden
                        className="absolute left-1/2 top-2 h-[2px] w-full bg-gold-400/50"
                      />
                    )}
                    <span className="relative z-10 h-[18px] w-[18px] rounded-full border-[3px] border-gold-500 bg-white" />
                    <span className="mt-3 font-serif text-sm font-bold text-pine-950">
                      {t.time}
                    </span>
                    <span className="mt-1 text-center text-[11px] leading-4 text-ink-700">
                      {t.label}
                    </span>
                  </li>
                ))}
              </ol>
            </div>
            <p className="mt-4 text-center text-[11px] text-ink-500">
              ※スケジュールは一例です。時期・学年・コースにより変わります。
            </p>
          </div>
        </FadeUp>

        {/* Learning cards */}
        <Stagger className="mt-10 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {learnings.map((l) => (
            <StaggerItem key={l.title} className="h-full">
              <article className="group flex h-full flex-col overflow-hidden bg-white shadow-soft transition duration-300 hover:-translate-y-1.5 hover:shadow-lift">
                <div className="relative h-44 overflow-hidden md:h-48">
                  <Image
                    src={l.img}
                    alt={l.title}
                    fill
                    sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                    className="object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  <span className="absolute left-4 top-4 rounded-full bg-pine-950/80 px-3.5 py-1.5 text-[10px] font-bold tracking-[0.25em] text-gold-300 backdrop-blur-sm">
                    {l.en}
                  </span>
                </div>
                <div className="flex flex-1 flex-col p-6">
                  <h3 className="font-serif text-base font-bold text-pine-950 md:text-lg">
                    {l.title}
                  </h3>
                  <div className="mt-3 h-[2px] w-10 rule-gold" />
                  <p className="mt-3 flex-1 text-[13px] leading-7 text-ink-700">
                    {l.desc}
                  </p>
                </div>
              </article>
            </StaggerItem>
          ))}
        </Stagger>
        <FadeUp delay={0.1} className="mt-12 text-center">
          <Link
            href="/course"
            className="group inline-flex items-center gap-3 rounded-full bg-pine-800 px-8 py-4 text-sm font-bold text-white shadow-soft transition hover:bg-pine-700 hover:shadow-lift"
          >
            3つのコースをくわしく見る
            <span className="transition-transform duration-300 group-hover:translate-x-1.5">→</span>
          </Link>
        </FadeUp>
      </Section>

      {/* PRINCIPAL MESSAGE */}
      <section className="relative overflow-hidden bg-pine-950 py-16 md:py-24">
        <div
          aria-hidden
          className="absolute inset-0 bg-cover bg-center opacity-10"
          style={{ backgroundImage: "url(/images/DSC_2533.jpg)" }}
        />
        <div className="relative mx-auto max-w-7xl px-6">
          <div className="grid items-center gap-12 lg:grid-cols-[1fr_400px]">
            <div>
              <SectionTitle
                dark
                en="MESSAGE"
                title="入学をご検討の皆さまへ"
              />
              <FadeUp delay={0.15}>
                <p className="mt-8 text-sm leading-8 text-white/85 md:text-[15px]">
                  学校長の野口です。バジガクの高校授業は、1日6時間びっしり座学……ではありません。授業は1日2〜3時間に凝縮し、年間を通じても全日制高校より授業時間を大幅にスリム化。その2〜3時間にしっかり集中して学び、残った時間を思う存分「馬」に費やす。それが東関東馬事高等学院ならではの学び方です。
                </p>
                <p className="mt-4 text-sm leading-8 text-white/85 md:text-[15px]">
                  広域通信制高校・明蓬館高等学校との連携により、「学校だったら当たり前」「高校だったら常識」という従来の枠にとらわれず、皆さんが最も学びやすいカリキュラムを編成しています。
                </p>
                <blockquote className="mt-8 border-l-4 border-gold-500 bg-white/5 px-7 py-6">
                  <p className="font-serif text-xl font-bold text-sun-400 md:text-2xl">
                    「勉強は最低限！夢は最大限！」
                  </p>
                  <p className="mt-3 text-sm leading-7 text-white/75">
                    このテーマを掲げて、バジガクはこれからも毎年進化し続けます。
                  </p>
                </blockquote>
                <p className="mt-8 text-right text-sm text-white/85">
                  東関東馬事高等学院 学校長
                  <span className="ml-3 font-serif text-lg font-bold text-white">
                    {site.principal}
                  </span>
                </p>
              </FadeUp>
            </div>
            <SlideIn delay={0.2} className="relative">
              <div className="overflow-hidden border-4 border-white/10 shadow-lift">
                <Image
                  src="/images/DSC_0026-4.jpg"
                  alt="生徒と馬が向き合うバジガクの日常"
                  width={900}
                  height={1100}
                  className="h-full w-full object-cover"
                />
              </div>
              <div
                aria-hidden
                className="absolute -bottom-8 -right-8 -z-0 h-40 w-40 rounded-full bg-gold-400/20 blur-2xl"
              />
            </SlideIn>
          </div>
        </div>
      </section>

      {/* CAREER (EXIT) */}
      <Section id="career" className="texture-paper">
        <SectionTitle
          en="CAREER"
          align="center"
          title="卒業後の進路・就職実績"
          lead="高校卒業資格と、現場で通用する実践力。その両方を手にした卒業生たちが、馬業界の第一線で活躍しています。"
        />

        {/* Career flow */}
        <FadeUp delay={0.1} className="mt-12">
          <div className="flex flex-col items-stretch gap-2 md:flex-row md:items-center md:justify-center md:gap-3">
            {careerSteps.map((s, i) => (
              <div key={s.en} className="contents">
                <div
                  className={`flex-1 border p-4 text-center md:max-w-[240px] ${
                    i === careerSteps.length - 1
                      ? "border-gold-500 bg-pine-900"
                      : "border-cream-300 bg-white"
                  }`}
                >
                  <p
                    className={`text-[9px] font-bold tracking-[0.3em] ${
                      i === careerSteps.length - 1 ? "text-gold-400" : "text-gold-600"
                    }`}
                  >
                    {s.en}
                  </p>
                  <p
                    className={`mt-1 font-serif text-base font-bold ${
                      i === careerSteps.length - 1 ? "text-sun-400" : "text-pine-950"
                    }`}
                  >
                    {s.title}
                  </p>
                  <p
                    className={`mt-1 text-[10px] leading-4 ${
                      i === careerSteps.length - 1 ? "text-white/75" : "text-ink-500"
                    }`}
                  >
                    {s.desc}
                  </p>
                </div>
                {i < careerSteps.length - 1 && (
                  <span
                    aria-hidden
                    className="self-center text-lg font-bold text-gold-500 rotate-90 md:rotate-0"
                  >
                    →
                  </span>
                )}
              </div>
            ))}
          </div>
        </FadeUp>

        {/* Support system */}
        <Stagger className="mt-12 grid gap-6 md:grid-cols-3">
          {supports.map((s) => (
            <StaggerItem key={s.title} className="h-full">
              <div className="flex h-full flex-col bg-white p-7 shadow-soft transition duration-300 hover:-translate-y-1.5 hover:shadow-lift">
                <div className="flex items-center gap-4">
                  <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-pine-50 text-pine-800">
                    {s.icon}
                  </span>
                  <div>
                    <p className="text-[9px] font-bold tracking-[0.25em] text-gold-600">
                      {s.en}
                    </p>
                    <h3 className="mt-1 font-serif text-[15px] font-bold text-pine-950 md:text-base">
                      {s.title}
                    </h3>
                  </div>
                </div>
                <p className="mt-5 flex-1 text-[13px] leading-7 text-ink-700">
                  {s.desc}
                </p>
              </div>
            </StaggerItem>
          ))}
        </Stagger>

        {/* Achievements */}
        <FadeUp delay={0.1} className="mt-10">
          <div className="border-l-4 border-gold-500 bg-white px-7 py-6 shadow-soft md:px-9 md:py-7">
            <p className="text-[10px] font-bold tracking-[0.35em] text-gold-600">
              ACHIEVEMENTS
            </p>
            <p className="mt-2 font-serif text-lg font-bold text-pine-950 md:text-xl">
              卒業生・修了生の主な実績
            </p>
            <ul className="mt-4 grid gap-2.5 md:grid-cols-3">
              {achievements.map((a) => (
                <li key={a} className="flex items-start gap-2.5 text-[13px] leading-6 text-ink-700">
                  <span aria-hidden className="mt-1.5 h-2 w-2 shrink-0 rotate-45 bg-gold-500" />
                  {a}
                </li>
              ))}
            </ul>
          </div>
        </FadeUp>

        {/* Major employers / paths */}
        <FadeUp delay={0.1} className="mt-14 text-center">
          <p className="font-serif text-xl font-bold text-pine-950 md:text-2xl">
            主な就職先・目指せる進路
          </p>
        </FadeUp>
        <Stagger gap={0.06} className="mt-8 grid grid-cols-2 gap-4 md:grid-cols-4">
          {futures.map((f) => (
            <StaggerItem key={f.title}>
              <div className="group relative h-44 overflow-hidden shadow-soft md:h-56">
                <Image
                  src={f.img}
                  alt={f.title}
                  fill
                  sizes="(max-width: 768px) 50vw, 25vw"
                  className="object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-pine-950/90 via-pine-950/30 to-transparent" />
                <div className="absolute inset-x-0 bottom-0 p-4">
                  <p className="font-serif text-base font-bold text-white md:text-lg">
                    {f.title}
                  </p>
                  <p className="mt-1 text-[10px] leading-4 text-white/75 md:text-[11px]">
                    {f.desc}
                  </p>
                </div>
              </div>
            </StaggerItem>
          ))}
        </Stagger>
        <FadeUp delay={0.1} className="mt-12 text-center">
          <div className="flex flex-wrap justify-center gap-4">
            <Link
              href="/kyumuin"
              className="group inline-flex items-center gap-3 rounded-full bg-pine-800 px-7 py-3.5 text-sm font-bold text-white shadow-soft transition hover:bg-pine-700 hover:shadow-lift"
            >
              JRA厩務員を目指す方へ
              <span className="transition-transform duration-300 group-hover:translate-x-1.5">→</span>
            </Link>
            <Link
              href="/jockey"
              className="group inline-flex items-center gap-3 rounded-full border-2 border-pine-800 px-7 py-3.5 text-sm font-bold text-pine-800 transition hover:bg-pine-50"
            >
              騎手を目指す方へ
              <span className="transition-transform duration-300 group-hover:translate-x-1.5">→</span>
            </Link>
          </div>
        </FadeUp>
      </Section>

      {/* VOICES */}
      <Section id="voices" className="bg-white">
        <SectionTitle
          en="VOICES"
          align="center"
          title="卒業生・在校生の声"
          lead="未経験からのスタート、寮での暮らし、夢への挑戦、そして馬と生きる仕事へ。バジガクの毎日を、先輩たちの言葉でお届けします。"
        />

        {/* Graduates */}
        <Stagger className="mt-12 grid gap-6 md:grid-cols-2">
          {graduateVoices.map((v) => (
            <StaggerItem key={v.name} className="h-full">
              <figure className="flex h-full flex-col overflow-hidden bg-cream-50 shadow-soft transition duration-300 hover:-translate-y-1.5 hover:shadow-lift">
                <div className="relative h-52 overflow-hidden md:h-60">
                  <Image
                    src={v.img}
                    alt={`卒業生 ${v.name}さんの現在の職場`}
                    fill
                    sizes="(max-width: 768px) 100vw, 50vw"
                    className="object-cover"
                  />
                  <span className="absolute left-4 top-4 rounded-full bg-gold-500 px-3.5 py-1 text-[10px] font-bold text-pine-950">
                    卒業生
                  </span>
                </div>
                <div className="flex flex-1 flex-col p-7">
                  <blockquote className="flex-1 text-[13px] leading-7 text-ink-700 md:text-sm md:leading-8">
                    {v.quote}
                  </blockquote>
                  <figcaption className="mt-6 border-t border-cream-300 pt-5">
                    <span className="block font-serif text-sm font-bold text-pine-950">
                      {v.name}さん
                    </span>
                    <span className="mt-0.5 block text-[11px] text-ink-500">
                      {v.meta}
                    </span>
                  </figcaption>
                </div>
              </figure>
            </StaggerItem>
          ))}
        </Stagger>

        {/* Current students */}
        <Stagger className="mt-6 grid gap-6 md:grid-cols-3">
          {studentVoices.map((v) => (
            <StaggerItem key={v.name} className="h-full">
              <figure className="flex h-full flex-col bg-cream-50 p-7 shadow-soft transition duration-300 hover:-translate-y-1.5 hover:shadow-lift">
                <span className="w-fit rounded-full bg-pine-50 px-3.5 py-1 text-[10px] font-bold text-pine-700">
                  在校生
                </span>
                <blockquote className="mt-4 flex-1 text-[13px] leading-7 text-ink-700">
                  {v.quote}
                </blockquote>
                <figcaption className="mt-6 flex items-center gap-4 border-t border-cream-300 pt-5">
                  <span className="relative h-14 w-14 shrink-0 overflow-hidden rounded-full">
                    <Image
                      src={v.avatar}
                      alt=""
                      fill
                      sizes="56px"
                      className="object-cover"
                    />
                  </span>
                  <span>
                    <span className="block font-serif text-sm font-bold text-pine-950">
                      {v.name}さん
                    </span>
                    <span className="mt-0.5 block text-[11px] text-ink-500">
                      {v.meta}
                    </span>
                  </span>
                </figcaption>
              </figure>
            </StaggerItem>
          ))}
        </Stagger>
      </Section>

      {/* BAJIGAKU IN NUMBERS */}
      <section id="numbers" className="relative overflow-hidden bg-pine-900 py-16 md:py-24">
        <div
          aria-hidden
          className="absolute inset-0 bg-cover bg-center opacity-15"
          style={{ backgroundImage: "url(/images/DSC_2533.jpg)" }}
        />
        <div className="relative mx-auto max-w-7xl px-6">
          <SectionTitle
            dark
            en="BAJIGAKU IN NUMBERS"
            align="center"
            title="数字で見るバジガク"
          />
          <Stagger className="mt-12 grid grid-cols-2 gap-x-6 gap-y-10 md:grid-cols-3">
            {stats.map((s) => (
              <StaggerItem key={s.label} className="text-center">
                <p className="font-serif text-4xl font-bold text-sun-400 md:text-5xl">
                  <Counter to={s.value} suffix={s.suffix} />
                </p>
                <p className="mt-2 text-sm font-bold text-white">{s.label}</p>
                <p className="mt-1 text-[11px] text-white/60">{s.note}</p>
              </StaggerItem>
            ))}
          </Stagger>
          <FadeUp delay={0.1}>
            <p className="mt-10 text-center text-[11px] text-white/50">
              ※在校生数・求人件数・合格実績などは時期により変動します。
            </p>
          </FadeUp>
        </div>
      </section>

      {/* BIG CTA */}
      <section className="relative overflow-hidden py-20 md:py-28">
        <div
          aria-hidden
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: "url(/images/DSC_0047-2.jpg)" }}
        />
        <div
          aria-hidden
          className="absolute inset-0 bg-gradient-to-b from-pine-950/85 via-pine-950/75 to-pine-950/90"
        />
        <div className="relative mx-auto max-w-7xl px-6">
          <FadeUp className="text-center">
            <p className="text-[11px] font-bold tracking-[0.4em] text-gold-400">
              GET STARTED
            </p>
            <h2 className="mt-4 font-serif text-2xl font-bold leading-snug text-white md:text-4xl">
              気になったら、
              <br className="md:hidden" />
              まずは資料とオープンキャンパスへ。
            </h2>
            <p className="mx-auto mt-6 max-w-2xl text-sm leading-8 text-white/85 md:text-[15px]">
              バジガクの空気は、来て、見て、馬に触れてみるのがいちばん伝わります。資料請求は1分程度で完了。オープンキャンパスは定期開催、JR東京駅からの無料送迎つきです。
            </p>
          </FadeUp>
          <Stagger className="mx-auto mt-12 grid max-w-4xl gap-5 md:grid-cols-2">
            <StaggerItem>
              <a
                href={site.forms.shiryo}
                target="_blank"
                rel="noopener noreferrer"
                className="group block h-full bg-sun-500 p-8 text-pine-950 shadow-lift transition-transform duration-300 hover:-translate-y-1.5 md:p-9"
              >
                <p className="text-[10px] font-bold tracking-[0.35em] opacity-70">
                  PAMPHLET
                </p>
                <p className="mt-3 font-serif text-xl font-bold md:text-2xl">
                  学校案内・資料請求（無料）
                </p>
                <p className="mt-3 text-xs leading-6 opacity-80 md:text-[13px]">
                  学校案内や募集要項を最短3日でお届け。入力は1分程度で完了します。
                </p>
                <span className="mt-6 inline-flex items-center gap-2 text-sm font-bold">
                  資料を請求する
                  <span className="transition-transform duration-300 group-hover:translate-x-1.5">→</span>
                </span>
              </a>
            </StaggerItem>
            <StaggerItem>
              <Link
                href="/opencampus"
                className="group block h-full bg-white p-8 text-pine-950 shadow-lift transition-transform duration-300 hover:-translate-y-1.5 md:p-9"
              >
                <p className="text-[10px] font-bold tracking-[0.35em] text-gold-600">
                  OPEN CAMPUS
                </p>
                <p className="mt-3 font-serif text-xl font-bold md:text-2xl">
                  学校見学・オープンキャンパス
                </p>
                <p className="mt-3 text-xs leading-6 text-ink-700 md:text-[13px]">
                  施設見学から乗馬体験までまるごと1日。定期開催・完全予約制です。
                </p>
                <span className="mt-6 inline-flex items-center gap-2 text-sm font-bold text-gold-600">
                  見学を予約する
                  <span className="transition-transform duration-300 group-hover:translate-x-1.5">→</span>
                </span>
              </Link>
            </StaggerItem>
          </Stagger>
          <FadeUp delay={0.15}>
            <p className="mt-10 text-center text-sm leading-7 text-white/75">
              お電話でのご相談は
              <a
                href={`tel:${site.tel}`}
                className="mx-2 font-bold tracking-wider text-sun-400 hover:underline"
              >
                {site.tel}
              </a>
              まで。
              <a
                href={site.forms.contact}
                target="_blank"
                rel="noopener noreferrer"
                className="ml-2 underline decoration-white/40 underline-offset-4 transition hover:text-white"
              >
                お問い合わせフォーム
              </a>
              は24時間受付です。
            </p>
          </FadeUp>
        </div>
      </section>
    </>
  );
}
