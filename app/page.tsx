import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { Section, SectionTitle } from "@/components/Section";
import { CurtainImage, FadeUp, ScaleIn, SlideIn, Stagger, StaggerItem } from "@/components/motion";
import Counter from "@/components/Counter";
import Marquee from "@/components/Marquee";
import YouTubeMarquee from "@/components/YouTubeMarquee";
import CTABand from "@/components/CTABand";
import HomeHero from "@/components/home/HomeHero";
import Accordion, { type QA } from "@/components/Accordion";
import { InstagramIcon, XIcon } from "@/components/SocialIcons";
import { site } from "@/lib/site";
import { faqs as staticFaqs } from "@/lib/faq";
import { getSupabasePublicClient, type Post } from "@/lib/supabase";

export const metadata: Metadata = {
  title: "馬の高校・馬の学校｜東関東馬事高等学院｜JRA厩務員・騎手・乗馬を目指せる全寮制の高校学校（馬の学校 比較）",
  description:
    "馬が好き。その気持ちを高校生活に。馬の高校 東関東馬事高等学院は、千葉県にある全寮制の馬の学校です。約120頭の馬と過ごしながら高校卒業資格を取得。未経験から乗馬・馬術を学び、JRA厩務員・騎手・牧場・乗馬クラブなど馬業界への進路を目指せる学校",
  keywords: [
    "馬の高校",
    "馬の学校",
    "乗馬高校",
    "馬術高校",
    "東関東馬事高等学院",
    "バジガク",
    "JRA厩務員",
    "厩務員になるには",
    "JRA競馬学校",
    "騎手になるには",
    "騎手学校",
    "競馬学校",
    "乗馬学校",
    "馬術学校",
    "競走馬",
    "馬の仕事",
    "馬業界",
    "全寮制高校",
    "通信制高校",
    "千葉県",
  ],
};

// Re-fetch news/FAQ data from Supabase periodically so admin edits show up
// without requiring a full site rebuild.
export const revalidate = 60;

const fallbackNews = [
  {
    date: "2026.07.10",
    cat: "入学関連",
    title: "募集要項・学費のご案内を更新しました",
    href: "/boshu",
  },
  {
    date: "2026.07.05",
    cat: "入学関連",
    title: "高校の転校・転入学は随時受付中。一般高校・他の馬の学校からも即対応",
    href: "/qa",
  },
  {
    date: "2026.05.01",
    cat: "入学関連",
    title: "災害等の影響による学費のご相談・救済措置について",
    href: "/boshu",
  },
];

function formatDate(iso: string): string {
  const d = new Date(iso);
  if (Number.isNaN(d.getTime())) return iso;
  return `${d.getFullYear()}.${String(d.getMonth() + 1).padStart(2, "0")}.${String(
    d.getDate()
  ).padStart(2, "0")}`;
}

async function getLatestNews(): Promise<
  { date: string; cat: string; title: string; href: string }[]
> {
  try {
    const supabase = getSupabasePublicClient();
    if (!supabase) return fallbackNews;
    const { data, error } = await supabase
      .from("posts")
      .select("*")
      .eq("is_published", true)
      .order("published_at", { ascending: false })
      .limit(3);
    if (error || !data || data.length === 0) return fallbackNews;
    return (data as Post[]).map((p) => ({
      date: formatDate(p.published_at),
      cat: p.type === "announcement" ? "お知らせ" : "ニュース",
      title: p.title,
      href: "/news",
    }));
  } catch {
    return fallbackNews;
  }
}

async function getFaqData(): Promise<typeof staticFaqs> {
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

const aboutFacts = [
  { en: "FOUNDED", label: "設立", value: "2009年1月" },
  { en: "LOCATION", label: "所在地", value: "千葉県山武市" },
  { en: "DORMITORY", label: "学生寮", value: "全寮制・全室個室" },
  { en: "PARTNER", label: "連携校", value: "中央国際高等学校" },
];

const iconCls = "h-6 w-6";
const whys = [
  {
    title: "馬と過ごす、高校生活3年間",
    desc: "朝から夕方まで馬と過ごし、騎乗や馬の管理を学びながら、好きなことに夢中になれる3年間です。",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" className={iconCls} aria-hidden>
        <rect x="3" y="5" width="18" height="16" rx="2" />
        <path d="M16 3v4M8 3v4M3 11h18M9 16l2 2 4-4" />
      </svg>
    ),
  },
  {
    title: "勉強は最低限、夢は最大限！",
    desc: "高校卒業に必要な学習と馬での勉強を両立。馬と向き合い夢に挑戦する時間を最大限に確保します。",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" className={iconCls} aria-hidden>
        <path d="M12 3l2.7 5.6 6.1.8-4.5 4.2 1.1 6-5.4-2.9-5.4 2.9 1.1-6L3.2 9.4l6.1-.8L12 3z" />
      </svg>
    ),
  },
  {
    title: "約120頭の馬たちが、生きた教材",
    desc: "ポニーや乗用馬、競走馬まで約120頭を管理。多彩な馬との実践から本物の知識と技術を学びます。",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" className={iconCls} aria-hidden>
        <circle cx="12" cy="9" r="5" />
        <path d="M9 13l-2 8 5-3 5 3-2-8" />
      </svg>
    ),
  },
  {
    title: "高校生から資格取得・競技会へ挑戦",
    desc: "乗馬ライセンスや騎乗者資格の取得、馬術競技会への出場など高校生から本格的な挑戦ができます。",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" className={iconCls} aria-hidden>
        <path d="M8 4h8v5a4 4 0 01-8 0V4z" />
        <path d="M8 5H4c0 3 1.5 5 4 5M16 5h4c0 3-1.5 5-4 5M12 13v4M8 21h8M9 17h6" />
      </svg>
    ),
  },
  {
    title: "全国から集まる仲間との寮生活",
    desc: "全国から集まる馬好きの仲間と寮生活。共に学び支え合う3年間を通じ自立心と人間力を育てます。",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" className={iconCls} aria-hidden>
        <path d="M3 11l9-7 9 7" />
        <path d="M5 10v10h14V10" />
        <path d="M10 20v-6h4v6" />
      </svg>
    ),
  },
  {
    title: "教室を飛び出して、本物の現場へ",
    desc: "在学中にJRA厩務員受験をはじめ牧場、乗馬クラブなどでの校外学習も可能。本物を経験できます。",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" className={iconCls} aria-hidden>
        <path d="M12 21s-7-5.5-7-11a7 7 0 0114 0c0 5.5-7 11-7 11z" />
        <circle cx="12" cy="10" r="2.5" />
      </svg>
    ),
  },
];

const stats = [
  { value: 18, suffix: "年目", label: "本校設立からの年", note: "信頼と実績の継続年" },
  { value: 293, suffix: "名", label: "過去の入学生徒数", note: "令和８年現在入学数" },
  { value: 118, suffix: "頭", label: "本校の管理馬の数", note: "当社３施設の在籍馬" },
  { value: 681, suffix: "日", label: "３年間で学べる日", note: "休日除の概算の日数" },
];

const policies = [
  {
    no: "01",
    title: "思いやりと感謝の心を育てる",
    desc: "馬という大切な命と向き合い、仲間と支え合う毎日の中で、思いやりと感謝の気持ちを自然と身につけます。",
  },
  {
    no: "02",
    title: "一人ひとりの個性を伸ばす",
    desc: "生徒それぞれが持つ可能性・個性・特性を最大限に引き伸ばし、情操豊かな人間性を養います。",
  },
  {
    no: "03",
    title: "馬業界を担う人材を育てる",
    desc: "確かな馬学の知識と豊かな技術を身につけ、国内外の馬事の未来を担う有能な人材を育成します。",
  },
];

const dayFlow = [
  {
    time: "06:30～｜当番制",
    title: "馬たちと一緒に、一日が始まる",
    desc: "朝の飼いつけと健康チェック。馬たちに「おはよう」を伝えるところから一日が始まります。",
    img: "/%E9%A6%AC%E3%81%A8%E9%81%8E%E3%81%94%E3%81%99%E9%AB%98%E6%A0%A1%E7%94%9F%E3%81%AE%E4%B8%80%E6%97%A5/01.jpg",
  },
  {
    time: "07:00～",
    title: "起床・朝食",
    desc: "食堂で朝ごはん。しっかり食べて元気に仲間と一緒に、一日の授業準備を始めます。",
    img: "/%E9%A6%AC%E3%81%A8%E9%81%8E%E3%81%94%E3%81%99%E9%AB%98%E6%A0%A1%E7%94%9F%E3%81%AE%E4%B8%80%E6%97%A5/02.jpg",
  },
  {
    time: "08:00～",
    title: "集合・厩舎管理",
    desc: "全体集合のあとは、それぞれの担当馬の様子をチェック。馬と一緒に一日がはじまる。",
    img: "/%E9%A6%AC%E3%81%A8%E9%81%8E%E3%81%94%E3%81%99%E9%AB%98%E6%A0%A1%E7%94%9F%E3%81%AE%E4%B8%80%E6%97%A5/03.jpg",
  },
  {
    time: "09:00～",
    title: "高校授業",
    desc: "高校卒業に必要な学習は1日約2時間半。サポートを受けながら集中して取り組めます。",
    img: "/%E9%A6%AC%E3%81%A8%E9%81%8E%E3%81%94%E3%81%99%E9%AB%98%E6%A0%A1%E7%94%9F%E3%81%AE%E4%B8%80%E6%97%A5/04.jpg",
  },
  {
    time: "11:30～",
    title: "昼食・自由時間",
    desc: "仲間と一緒にランチタイム。食事を楽しみ、おしゃべりしたり、午後に向けてひと休み。",
    img: "/%E9%A6%AC%E3%81%A8%E9%81%8E%E3%81%94%E3%81%99%E9%AB%98%E6%A0%A1%E7%94%9F%E3%81%AE%E4%B8%80%E6%97%A5/05.jpg",
  },
  {
    time: "13:00～",
    title: "大好きな馬との授業",
    desc: "午後はいよいよ馬との時間。騎乗や運動、手入れ等、馬と触れ合いながら実践で習得。",
    img: "/%E9%A6%AC%E3%81%A8%E9%81%8E%E3%81%94%E3%81%99%E9%AB%98%E6%A0%A1%E7%94%9F%E3%81%AE%E4%B8%80%E6%97%A5/06.jpg",
  },
  {
    time: "16:30～",
    title: "集合・馬たちに「また明日」",
    desc: "一日の最後に馬たちの様子を確認。今日も一日一緒に過ごした馬たちを見届け授業終了です。",
    img: "/%E9%A6%AC%E3%81%A8%E9%81%8E%E3%81%94%E3%81%99%E9%AB%98%E6%A0%A1%E7%94%9F%E3%81%AE%E4%B8%80%E6%97%A5/07.jpg",
  },
  {
    time: "放課後～",
    title: "夕食・自由時間",
    desc: "ここからは自分たちの時間。夕食、外出、仲間との時間、寮生活ならではの放課後を…。",
    img: "/%E9%A6%AC%E3%81%A8%E9%81%8E%E3%81%94%E3%81%99%E9%AB%98%E6%A0%A1%E7%94%9F%E3%81%AE%E4%B8%80%E6%97%A5/08.jpg",
  },
];

const courses = [
  {
    img: "/images/top_course_001.jpg",
    icon: "/images/course_icon_green.png",
    title: "一般高校乗馬コース",
    en: "RIDING",
    desc: "未経験からの基礎乗馬、馬術大会への出場、引退馬の乗用馬転用調教まで。馬と共に高卒資格を取得する、バジガクの基本コース。",
    href: "/course#ippan",
  },
  {
    img: "/images/top_course_002.jpg",
    icon: "/images/course_icon_brown.png",
    title: "競走馬厩務員コース",
    en: "GROOM",
    desc: "現役競走馬の飼養・馬匹・調教管理を実践で学び、高校3年次にJRA競馬学校 厩務員課程の受験に挑戦できる2年次からの選択コース。",
    href: "/kyumuin",
  },
  {
    img: "/images/top_course_003.jpg",
    icon: "/images/course_icon_orange-2.png",
    title: "騎手受験特別コース",
    en: "JOCKEY",
    desc: "JRA競馬学校・地方競馬教養センターの騎手課程合格へ。受験対策がそのまま高校単位になる、騎手を本気で目指す人の特別コース。",
    href: "/jockey",
  },
];

const careerSteps = [
  { en: "STEP 01", title: "入学", desc: "未経験でも大丈夫。馬と暮らす毎日へ" },
  { en: "STEP 02", title: "3年間の学び", desc: "騎乗・馬学・高校授業・資格取得" },
  { en: "STEP 03", title: "卒業", desc: "高校卒業資格＋現場で通用する実践力" },
  { en: "GOAL", title: "馬業界へ", desc: "騎手・厩務員・牧場・乗馬クラブなど" },
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

const facilities = [
  { img: "/%E6%96%BD%E8%A8%AD%E3%83%BB%E7%92%B0%E5%A2%83/%E9%A6%AC%E5%A0%B4.jpg", title: "馬場", desc: "馬と過ごす毎日の中心になるメインエリア", featured: true },
  { img: "/%E6%96%BD%E8%A8%AD%E3%83%BB%E7%92%B0%E5%A2%83/%E5%8E%A9%E8%88%8E.jpg", title: "厩舎", desc: "生徒と馬がすぐそばで学び合う実践空間" },
  { img: "/%E6%96%BD%E8%A8%AD%E3%83%BB%E7%92%B0%E5%A2%83/%E6%95%99%E5%AE%A4.jpg", title: "教室", desc: "高校授業もキャンパス内で集中して学べる" },
  { img: "/%E6%96%BD%E8%A8%AD%E3%83%BB%E7%92%B0%E5%A2%83/%E5%AD%A6%E7%94%9F%E5%AF%AE%EF%BC%88%E5%85%A8%E5%AE%A4%E5%80%8B%E5%AE%A4%EF%BC%89.jpg", title: "学生寮（全室個室）", desc: "安心して暮らせる全寮制の生活空間" },
  { img: "/%E6%96%BD%E8%A8%AD%E3%83%BB%E7%92%B0%E5%A2%83/%E9%A3%9F%E5%A0%82.jpg", title: "食堂", desc: "365日3食、仲間と食卓を囲むあたたかな場所" },
  { img: "/%E6%96%BD%E8%A8%AD%E3%83%BB%E7%92%B0%E5%A2%83/%E4%BD%93%E8%82%B2%E9%A4%A8.jpg", title: "体育館", desc: "天候を気にせず身体を動かせる校内施設" },
];

const staff = [
  {
    role: "騎乗指導スタッフ",
    en: "RIDING INSTRUCTOR",
    desc: "経験や適性に応じたレベル別レッスンを編成。伸び悩む生徒には1対1の個人指導、大会前にはコース走行の特訓も行います。",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" className={iconCls} aria-hidden>
        <path d="M5 21V4" />
        <path d="M5 4h11l-2 4 2 4H5" />
      </svg>
    ),
  },
  {
    role: "厩舎・馬匹管理スタッフ",
    en: "STABLE MANAGEMENT",
    desc: "馬の体調・飼料・調教管理のプロが、担当馬制度を通じて飼養管理の基本から実践までをじっくり指導します。",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" className={iconCls} aria-hidden>
        <path d="M12 20s-7-4.6-9-9a5 5 0 019-3 5 5 0 019 3c-2 4.4-9 9-9 9z" />
      </svg>
    ),
  },
  {
    role: "進路・寮生活サポート",
    en: "CAREER & DORM SUPPORT",
    desc: "JRA・地方競馬の受験対策から牧場・乗馬クラブへの就職まで進路指導を徹底。宿直スタッフが寮生活も見守ります。",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" className={iconCls} aria-hidden>
        <circle cx="12" cy="12" r="9" />
        <path d="M15.5 8.5l-2 5-5 2 2-5 5-2z" />
      </svg>
    ),
  },
];

const channels = [
  { img: "/images/ch-01_001_1-4.jpg", no: "01", title: "バジガクオリジナルCM", desc: "新校舎ではじまる東関東馬事高等学院" },
  { img: "/images/ch-02_001_1.jpg", no: "02", title: "テレビ東京「THE名門校」", desc: "馬に青春をかける高校生たちの挑戦" },
  { img: "/images/ch-03_001_1.jpg", no: "03", title: "NHK「目撃にっぽん」", desc: "バジガクモミジと踏み出す一歩" },
  { img: "/images/ch-04_001_1.jpg", no: "04", title: "NHK Eテレ「ジューダイ」", desc: "馬に恋した学生たちが見る夢" },
  { img: "/images/ch-05_001_1.jpg", no: "05", title: "TOKYO MX「未来企業」", desc: "馬業界の課題に向き合う挑戦" },
  { img: "/images/ch-06_001_1.jpg", no: "06", title: "フィッシャーズ来場！", desc: "本物のウマでリアル騎馬戦" },
  { img: "/images/ch-07_001_1.jpg", no: "07", title: "TBSドキュメンタリー「90分」", desc: "厩務員「金のたまご」を育てる" },
];

const marqueeImages = [
  "/images/DSC_0047-2.jpg",
  "/images/tokucho_002_1.jpg",
  "/images/shisetsu_001_1.jpg",
  "/images/taiken-2_002_4.jpg",
  "/images/tokucho_005_1.jpg",
  "/images/DSC_0073.jpg",
  "/images/tokucho_008_1.jpg",
  "/images/taiken-3_002_2.jpg",
];

const events = [
  {
    img: "/images/taiken-1_001_1.jpg",
    title: "学校見学＆オープンキャンパス",
    desc: "施設見学・入学説明・乗馬体験までまるごと1日。",
    href: "/opencampus",
    tag: "定期開催",
    meta: [
      { label: "開催日", value: "定期開催（完全予約制）" },
      { label: "集合", value: "JR東京駅より無料送迎あり" },
      { label: "会場", value: "本校キャンパス（千葉県山武市）" },
    ],
  },
  {
    img: "/images/taiken-2_001_1.jpg",
    title: "夏休み4泊5日バジガク体験合宿",
    desc: "実際に学校での宿泊型体験授業に参加できます",
    href: "/opencampus#camp",
    tag: "夏季限定",
    meta: [
      { label: "期間", value: "夏休み期間・4泊5日" },
      { label: "会場", value: "本校キャンパス（千葉県山武市）" },
    ],
  },
  {
    img: "/images/taiken-3_001_1.jpg",
    title: "中3対象・騎手受験事前合宿",
    desc: "JRA競馬学校 騎手課程受験に向けた特別対策合宿。",
    href: "/camp",
    tag: "中学3年生対象",
    meta: [
      { label: "期間", value: "6泊7日" },
      { label: "対象", value: "騎手を目指す中学3年生" },
    ],
  },
];

const faqPicks = [
  "乗馬の未経験者でも合格できますか？",
  "学生寮の部屋は個室ですか？相部屋ですか？",
  "騎乗時間は1日にどれくらいありますか？",
  "中央国際高等学校の授業は1日どれくらいですか？",
  "小学校・中学校で不登校でしたが、入学できますか？",
  "卒業後はどんな馬の仕事に就けますか？",
];

export default async function HomePage() {
  const [news, faqs] = await Promise.all([getLatestNews(), getFaqData()]);
  const faqPreview: QA[] = faqPicks.flatMap((q) => {
    const hit = faqs.find((f) => f.q === q);
    return hit ? [{ q: hit.q, a: hit.a }] : [];
  });

  return (
    <>
      <HomeHero />

      {/* NEWS */}
      <Section className="texture-paper">
        <div className="grid gap-10 lg:grid-cols-[280px_1fr]">
          <SectionTitle en="NEWS" title="お知らせ" />
          <Stagger className="space-y-3">
            {news.map((n) => (
              <StaggerItem key={n.title}>
                <Link
                  href={n.href}
                  className="group flex flex-col gap-2 border border-cream-300 bg-white px-6 py-5 shadow-soft transition duration-300 hover:-translate-y-1 hover:shadow-lift md:flex-row md:items-center md:gap-6"
                >
                  <time className="text-xs font-bold tracking-wider text-ink-500">
                    {n.date}
                  </time>
                  <span className="w-fit rounded-full bg-pine-50 px-3 py-1 text-[10px] font-bold text-pine-700">
                    {n.cat}
                  </span>
                  <span className="flex-1 text-sm font-medium text-ink-900 transition group-hover:text-pine-700">
                    {n.title}
                  </span>
                  <span className="hidden text-gold-500 transition-transform duration-300 group-hover:translate-x-1.5 md:block">
                    →
                  </span>
                </Link>
              </StaggerItem>
            ))}
          </Stagger>
        </div>
      </Section>

      {/* ABOUT */}
      <Section className="relative overflow-hidden bg-white">
        <div className="grid items-center gap-12 lg:grid-cols-2">
          <div>
            <SectionTitle
              en="ABOUT BAJIGAKU"
              title={
                <>
                  馬と過ごせる広大なキャンパスが、
                  <br />
                  学習の舞台。
                </>
              }
            />
            <FadeUp delay={0.15}>
              <p className="mt-8 text-sm leading-8 text-ink-700 md:text-[15px]">
                東関東馬事高等学院の舞台は、千葉県山武市の小学校跡地をリノベーションしたキャンパス。校庭だった場所に馬場が広がり、教室は学生寮に生まれ変わりました。育成馬・競走馬・競技馬・引退馬——たくさんの馬たちに囲まれて、朝から夕方まで「馬が中心」の高校生活を送ります。
              </p>
              <p className="mt-4 text-sm leading-8 text-ink-700 md:text-[15px]">
                馬と向き合う毎日は、楽しさや喜びだけでなく、命を預かる責任や難しさも教えてくれます。仲間と切磋琢磨しながら、あいさつ・礼儀・思いやりといった社会に出るための土台を育み、自信を持って羽ばたいていく。それがバジガクの3年間です。
              </p>
              <dl className="mt-8 grid grid-cols-2 gap-3 sm:grid-cols-4">
                {aboutFacts.map((f) => (
                  <div
                    key={f.en}
                    className="border border-cream-300 bg-cream-50 px-4 py-3.5"
                  >
                    <dt className="text-[9px] font-bold tracking-[0.25em] text-gold-600">
                      {f.en}
                      <span className="mt-0.5 block text-[10px] tracking-normal text-ink-500">
                        {f.label}
                      </span>
                    </dt>
                    <dd className="mt-1 font-serif text-[13px] font-bold leading-5 text-pine-950">
                      {f.value}
                    </dd>
                  </div>
                ))}
              </dl>
              <div className="mt-8 flex flex-wrap justify-center gap-4 md:justify-start">
                <Link
                  href="/tokucho"
                  className="group inline-flex items-center gap-3 rounded-full bg-pine-800 px-7 py-3.5 text-sm font-bold text-white shadow-soft transition hover:bg-pine-700 hover:shadow-lift"
                >
                  本校の特徴を見る
                  <span className="transition-transform duration-300 group-hover:translate-x-1.5">→</span>
                </Link>
                <Link
                  href="/gaiyo"
                  className="inline-flex items-center gap-3 rounded-full border-2 border-pine-800 px-7 py-3.5 text-sm font-bold text-pine-800 transition hover:bg-pine-50"
                >
                  学校概要
                </Link>
              </div>
            </FadeUp>
          </div>
          <div className="relative">
            <ScaleIn className="relative z-10 overflow-hidden shadow-lift">
              <Image
                src="/images/DSC_0047-2.jpg"
                alt="馬場で騎乗する生徒たち"
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
                src="/images/tokucho_001_1.jpg"
                alt="馬と触れ合う生徒"
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

      {/* WHY BAJIGAKU */}
      <Section className="texture-paper">
        <SectionTitle
          en="WHY BAJIGAKU"
          align="center"
          title="バジガクが選ばれる理由"
          lead="「青春を、馬と一緒に。」大好きな馬と過ごす毎日が特別な高校生活になる。"
        />
        <Stagger className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {whys.map((w) => (
            <StaggerItem key={w.title} className="h-full">
              <div className="group flex h-full flex-col bg-white p-7 shadow-soft transition duration-300 hover:-translate-y-1.5 hover:shadow-lift">
                <span className="flex h-14 w-14 items-center justify-center rounded-full bg-pine-50 text-pine-800 transition duration-300 group-hover:bg-pine-800 group-hover:text-sun-400">
                  {w.icon}
                </span>
                <h3 className="mt-5 font-serif text-base font-bold leading-relaxed text-pine-950 md:text-lg">
                  {w.title}
                </h3>
                <div className="mt-3 h-[2px] w-10 rule-gold" />
                <p className="mt-4 flex-1 text-[13px] leading-7 text-ink-700">
                  {w.desc}
                </p>
              </div>
            </StaggerItem>
          ))}
        </Stagger>
        <FadeUp delay={0.1} className="mt-12 text-center">
          <Link
            href="/tokucho"
            className="group inline-flex items-center gap-3 rounded-full bg-pine-800 px-8 py-4 text-sm font-bold text-white shadow-soft transition hover:bg-pine-700 hover:shadow-lift"
          >
            本校の特徴をくわしく見る
            <span className="transition-transform duration-300 group-hover:translate-x-1.5">→</span>
          </Link>
        </FadeUp>
      </Section>

      {/* STATS */}
      <section className="relative overflow-hidden bg-pine-900 py-16 md:py-20">
        <div
          aria-hidden
          className="absolute inset-0 bg-cover bg-center opacity-15"
          style={{ backgroundImage: "url(/images/DSC_2533.jpg)" }}
        />
        <div className="relative mx-auto max-w-7xl px-6">
          <Stagger className="grid grid-cols-2 gap-8 md:grid-cols-4">
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
        </div>
      </section>

      {/* PHILOSOPHY */}
      <Section className="relative overflow-hidden bg-white">
        <div className="grid items-center gap-12 lg:grid-cols-2">
          <div className="relative order-last lg:order-first">
            <CurtainImage className="relative z-10 overflow-hidden shadow-lift">
              <Image
                src="/images/tokucho_001_2.jpg"
                alt="緑豊かなキャンパスで馬と過ごす生徒たち"
                width={1200}
                height={800}
                className="h-full w-full object-cover"
              />
            </CurtainImage>
            <SlideIn
              delay={0.25}
              className="relative z-20 -mt-14 mr-auto w-2/3 overflow-hidden border-4 border-white shadow-lift md:-mt-20"
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
              className="absolute -left-10 -bottom-10 -z-0 h-48 w-48 rounded-full bg-gold-300/30 blur-2xl"
            />
          </div>
          <div>
            <SectionTitle
              en="OUR PHILOSOPHY"
              title={
                <>
                  「馬と人」「人と馬」が
                  <br />
                  共に育つ、共育の学校。
                </>
              }
            />
            <FadeUp delay={0.15}>
              <p className="mt-8 text-sm leading-8 text-ink-700 md:text-[15px]">
                馬たちが安心して暮らせる環境と、生徒たちが充実した高校生活を送れる環境。そのどちらも大切にした学びの場こそがバジガクです。私たちはこれを、馬と人が互いに育て合う「共育」と呼んでいます。
              </p>
              <div className="mt-8 space-y-5">
                {policies.map((p) => (
                  <div key={p.no} className="flex gap-5 border-l-2 border-gold-500 pl-5">
                    <span className="font-serif text-2xl font-bold leading-none text-gold-500">
                      {p.no}
                    </span>
                    <div>
                      <h3 className="font-serif text-[15px] font-bold text-pine-950 md:text-base">
                        {p.title}
                      </h3>
                      <p className="mt-1.5 text-[13px] leading-6 text-ink-700">
                        {p.desc}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
              <div className="mt-9 flex justify-center md:justify-start">
                <Link
                  href="/gaiyo"
                  className="group inline-flex items-center gap-3 rounded-full border-2 border-pine-800 px-7 py-3.5 text-sm font-bold text-pine-800 transition hover:bg-pine-50"
                >
                  学校概要・沿革を見る
                  <span className="transition-transform duration-300 group-hover:translate-x-1.5">→</span>
                </Link>
              </div>
            </FadeUp>
          </div>
        </div>
      </Section>

      {/* DAILY LIFE */}
      <Section className="bg-cream-100">
        <SectionTitle
          en="DAILY LIFE"
          align="center"
          title="馬と過ごす、高校生の1日"
          lead="朝から夕方まで、青春のそばにはいつも馬がいる。勉強する時間も、馬と向き合う時間も、仲間と笑う時間も。「馬が好き」を毎日の真ん中に置いた、バジガクならではの高校生活です。"
        />
        <Stagger gap={0.06} className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {dayFlow.map((d, i) => (
            <StaggerItem key={d.time} className="h-full">
              <div className="group relative flex h-full flex-col overflow-hidden bg-white shadow-soft transition duration-300 hover:-translate-y-1.5 hover:shadow-lift">
                <div className="relative h-36 overflow-hidden">
                  <Image
                    src={d.img}
                    alt={d.title}
                    fill
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                    className="object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  <span className="absolute left-0 top-0 max-w-[90%] bg-pine-950/85 px-2.5 py-1.5 font-serif text-[11px] font-bold leading-snug tracking-wider text-sun-400 backdrop-blur-sm sm:text-xs">
                    {d.time}
                  </span>
                </div>
                <div className="flex flex-1 flex-col p-5">
                  <div className="flex items-start gap-2.5">
                    <span className="mt-0.5 shrink-0 text-[10px] font-bold tracking-[0.2em] text-gold-600">
                      {String(i + 1).padStart(2, "0")}
                    </span>
                    <h3 className="font-serif text-[15px] font-bold leading-snug text-pine-950">
                      {d.title}
                    </h3>
                  </div>
                  <p className="mt-2.5 flex-1 text-xs leading-6 text-ink-700">
                    {d.desc}
                  </p>
                </div>
                {i < dayFlow.length - 1 && (
                  <span
                    aria-hidden
                    className="absolute -right-4 top-1/2 z-10 hidden -translate-y-1/2 text-lg font-bold text-gold-500 lg:block"
                  >
                    →
                  </span>
                )}
              </div>
            </StaggerItem>
          ))}
        </Stagger>
        <FadeUp delay={0.1}>
          <p className="mt-8 text-center text-[11px] text-ink-500">
            ※スケジュールは一例です。季節・学年・授業内容・個別スケジュール等により変更となる場合があります。
          </p>
        </FadeUp>
      </Section>

      {/* COURSES */}
      <Section className="texture-paper">
        <SectionTitle
          en="COURSES"
          align="center"
          title="「馬」を通じて、「やりたいこと」が高校授業に。"
          lead="高卒資格を取得しながら学べる3つのコース。入学時は「一般高校乗馬コース」か「騎手受験特別コース」を選択し、2年次からは「競走馬厩務員コース」にも進めます。"
        />
        <Stagger className="mt-12 grid gap-6 md:grid-cols-3">
          {courses.map((c) => (
            <StaggerItem key={c.title} className="h-full">
              <Link
                href={c.href}
                className="group flex h-full flex-col overflow-hidden bg-white shadow-soft transition duration-300 hover:-translate-y-2 hover:shadow-lift"
              >
                <div className="relative h-52 overflow-hidden">
                  <Image
                    src={c.img}
                    alt={c.title}
                    fill
                    sizes="(max-width: 768px) 100vw, 33vw"
                    className="object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  <span className="absolute left-4 top-4 rounded-full bg-pine-950/80 px-4 py-1.5 font-serif text-[10px] font-bold tracking-[0.3em] text-gold-300 backdrop-blur-sm">
                    {c.en}
                  </span>
                </div>
                <div className="flex flex-1 flex-col p-7">
                  <div className="flex items-center gap-3">
                    <Image src={c.icon} alt="" width={40} height={40} className="h-10 w-10 object-contain" />
                    <h3 className="font-serif text-lg font-bold text-pine-950">
                      {c.title}
                    </h3>
                  </div>
                  <p className="mt-4 flex-1 text-[13px] leading-7 text-ink-700">
                    {c.desc}
                  </p>
                  <span className="mt-5 inline-flex items-center gap-2 text-xs font-bold text-gold-600">
                    詳しく見る
                    <span className="transition-transform duration-300 group-hover:translate-x-1.5">→</span>
                  </span>
                </div>
              </Link>
            </StaggerItem>
          ))}
        </Stagger>
      </Section>

      {/* FUTURE */}
      <Section className="bg-white">
        <SectionTitle
          en="FUTURE"
          align="center"
          title={
            <>
              生徒たちの未来
              <br className="md:hidden" />
              （目指せる進路）
            </>
          }
          lead={
            <>
              騎手や厩務員として競馬の第一線へ。牧場や乗馬クラブで馬と生きる。
              <br />
              もちろん進学や一般就職も。バジガクからの進路は無限大です。
            </>
          }
        />
        <FadeUp delay={0.1} className="mt-10">
          <div className="flex flex-col items-stretch gap-2 md:flex-row md:items-center md:justify-center md:gap-3">
            {careerSteps.map((s, i) => (
              <div key={s.en} className="contents">
                <div
                  className={`flex-1 border p-4 text-center md:max-w-[240px] ${
                    i === careerSteps.length - 1
                      ? "border-gold-500 bg-pine-900"
                      : "border-cream-300 bg-cream-50"
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
        <Stagger gap={0.06} className="mt-12 grid grid-cols-2 gap-4 md:grid-cols-4">
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
      </Section>

      {/* FACILITIES */}
      <section className="relative overflow-hidden bg-pine-900 py-16 md:py-24">
        <div
          aria-hidden
          className="absolute inset-0 opacity-[0.06]"
          style={{
            backgroundImage: "url(/images/right_el-1.png)",
            backgroundRepeat: "no-repeat",
            backgroundPosition: "right -80px top -40px",
            backgroundSize: "420px",
          }}
        />
        <div className="relative mx-auto max-w-7xl px-6">
          <SectionTitle
            dark
            en="CAMPUS & FACILITIES"
            align="center"
            title="小学校跡地が、「馬の高校」に生まれ変わった。"
            lead="千葉県山武市のご協力により、小学校跡地の利活用として「馬の学校　東関東馬事高等学院」が誕生！校庭だった場所には馬場が広がり、校舎は教室・食堂・全室個室の学生寮へ。馬と人が同じ敷地で暮らす、ここにしかない特別な馬の学校キャンパスです。"
          />
          <Stagger className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {facilities.map((f) => (
              <StaggerItem
                key={f.title}
                className={f.featured ? "sm:col-span-2 sm:row-span-2 lg:col-span-2" : undefined}
              >
                <div
                  className={`group relative overflow-hidden shadow-soft ${
                    f.featured ? "h-64 md:h-[31rem]" : "h-52 md:h-60"
                  }`}
                >
                  <Image
                    src={f.img}
                    alt={`${f.title}：${f.desc}`}
                    fill
                    sizes={
                      f.featured
                        ? "(max-width: 640px) 100vw, (max-width: 1024px) 100vw, 66vw"
                        : "(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                    }
                    className="object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  <div
                    className={`absolute inset-0 bg-gradient-to-t ${
                      f.featured ? "from-pine-950/90 via-pine-950/25 to-transparent" : "from-pine-950/85 via-pine-950/20 to-transparent"
                    }`}
                  />
                  <div className={`absolute inset-x-0 bottom-0 ${f.featured ? "p-6 md:p-7" : "p-5"}`}>
                    <p className={`font-serif font-bold text-white ${f.featured ? "text-xl md:text-2xl" : "text-base md:text-lg"}`}>
                      {f.title}
                    </p>
                    <p className={`mt-1 leading-5 text-white/80 ${f.featured ? "text-sm md:text-[15px]" : "text-[11px]"}`}>
                      {f.desc}
                    </p>
                  </div>
                </div>
              </StaggerItem>
            ))}
          </Stagger>
          <FadeUp delay={0.1} className="mt-12 text-center">
            <Link
              href="/opencampus"
              className="group inline-flex items-center gap-3 rounded-full bg-sun-500 px-8 py-4 text-sm font-bold text-pine-950 shadow-soft transition hover:shadow-lift"
            >
              キャンパスを実際に見学する
              <span className="transition-transform duration-300 group-hover:translate-x-1.5">→</span>
            </Link>
          </FadeUp>
        </div>
      </section>


      {/* TEACHERS & STAFF */}
      <Section className="texture-paper">
        <SectionTitle
          en="TEACHERS & STAFF"
          align="center"
          title="生徒と馬に、本気で向き合う指導陣。"
          lead="「みんな一緒」が正解ではない。一人ひとりの「個」を尊重し、それぞれの成長、それぞれの未来に向き合いながら、大切な3年間に共にサポートしていきます。"
        />
        <FadeUp delay={0.1} className="mt-12">
          <div className="relative overflow-hidden bg-pine-900 p-8 shadow-lift md:p-12">
            <div
              aria-hidden
              className="absolute inset-0 bg-cover bg-center opacity-10"
              style={{ backgroundImage: "url(/images/DSC_2533.jpg)" }}
            />
            <div className="relative flex flex-col items-center justify-between gap-8 text-center md:flex-row md:items-center md:text-left">
              <div>
                <p className="text-[10px] font-bold tracking-[0.35em] text-gold-400">
                  PRINCIPAL MESSAGE
                </p>
                <p className="mt-4 font-serif text-2xl font-bold text-sun-400 md:text-3xl">
                  「勉強は最低限！夢は最大限！」
                </p>
                <p className="mt-4 max-w-2xl text-sm leading-8 text-white/85">
                  高校授業は1日2〜3時間に凝縮し、残った時間を思う存分「馬」に費やす。それが東関東馬事高等学院ならではの学び方です。
                </p>
                <p className="mt-5 text-sm text-white/85">
                  東関東馬事高等学院 学校長
                  <span className="ml-3 font-serif text-lg font-bold text-white">
                    {site.principal}
                  </span>
                </p>
              </div>
              <Link
                href="/tokucho"
                className="group inline-flex shrink-0 items-center gap-3 rounded-full border-2 border-white/70 px-7 py-3.5 text-sm font-bold text-white transition hover:bg-white/10"
              >
                メッセージ全文を読む
                <span className="transition-transform duration-300 group-hover:translate-x-1.5">→</span>
              </Link>
            </div>
          </div>
        </FadeUp>
        <Stagger className="mt-8 grid gap-6 md:grid-cols-3">
          {staff.map((s) => (
            <StaggerItem key={s.role} className="h-full">
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
                      {s.role}
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
      </Section>

      {/* YOUTUBE */}
      <section className="overflow-hidden bg-pine-950 py-16 md:py-24">
        <div className="mx-auto max-w-7xl px-6">
          <div className="flex flex-col items-center justify-between gap-6 md:flex-row md:items-end">
            <SectionTitle
              dark
              en="YOUTUBE CHANNEL"
              title={
                <>
                  メディアでも話題。
                  <br className="md:hidden" />
                  「バジガク」の今を映像で。
                </>
              }
              lead="テレビ番組の特集から人気YouTuberの来場まで。バジガクのリアルな学校生活は、公式YouTubeチャンネルでご覧いただけます。"
            />
            <FadeUp delay={0.2}>
              <a
                href={site.sns.youtube}
                target="_blank"
                rel="noopener noreferrer"
                className="group inline-flex shrink-0 items-center gap-3 rounded-full bg-sun-500 px-7 py-3.5 text-sm font-bold text-pine-950 shadow-soft transition hover:shadow-lift"
              >
                チャンネルを見る
                <span className="transition-transform duration-300 group-hover:translate-x-1.5">→</span>
              </a>
            </FadeUp>
          </div>
        </div>
        <FadeUp delay={0.1} className="mt-12 pb-6">
          <YouTubeMarquee channels={channels} youtubeUrl={site.sns.youtube} />
        </FadeUp>
      </section>

      {/* CAMPUS LIFE MARQUEE + SNS */}
      <section className="bg-cream-100 py-16 md:py-24">
        <div className="mx-auto max-w-7xl px-6">
          <SectionTitle
            en="CAMPUS LIFE"
            align="center"
            title="馬がいる、それだけで特別な毎日。"
            lead="公式Instagram・X（Twitter）では、生徒と馬たちの日常を発信中です。"
          />
        </div>
        <FadeUp className="mt-12">
          <Marquee images={marqueeImages} />
        </FadeUp>
        <div className="mx-auto mt-10 flex max-w-7xl flex-wrap justify-center gap-4 px-6">
          <a
            href={site.sns.instagram}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Instagram"
            className="flex h-12 w-12 items-center justify-center rounded-full border-2 border-pine-800 text-pine-800 transition hover:bg-pine-800 hover:text-white"
          >
            <InstagramIcon className="h-5 w-5" />
          </a>
          <a
            href={site.sns.twitter}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="X (Twitter)"
            className="flex h-12 w-12 items-center justify-center rounded-full border-2 border-pine-800 text-pine-800 transition hover:bg-pine-800 hover:text-white"
          >
            <XIcon className="h-5 w-5" />
          </a>
        </div>
      </section>

      {/* EVENTS BANNERS */}
      <Section className="bg-white">
        <SectionTitle
          en="EVENTS"
          align="center"
          title="まずは体験からはじめよう。"
        />
        <Stagger className="mt-12 grid gap-6 md:grid-cols-3">
          {events.map((e) => (
            <StaggerItem key={e.title} className="h-full">
              <Link
                href={e.href}
                className="group flex h-full flex-col overflow-hidden bg-cream-100 shadow-soft transition duration-300 hover:-translate-y-2 hover:shadow-lift"
              >
                <div className="relative h-48 overflow-hidden">
                  <Image
                    src={e.img}
                    alt={e.title}
                    fill
                    sizes="(max-width: 768px) 100vw, 33vw"
                    className="object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  <span className="absolute left-4 top-4 rounded-full bg-sun-500 px-3.5 py-1 text-[10px] font-bold text-pine-950">
                    {e.tag}
                  </span>
                </div>
                <div className="flex flex-1 flex-col p-6">
                  <h3 className="font-serif text-base font-bold text-pine-950 md:text-lg">
                    {e.title}
                  </h3>
                  <p className="mt-3 text-[13px] leading-6 text-ink-700">
                    {e.desc}
                  </p>
                  <dl className="mt-4 flex-1 space-y-1.5 border-t border-cream-300 pt-4">
                    {e.meta.map((m) => (
                      <div key={m.label} className="flex gap-3 text-[11px] leading-5">
                        <dt className="w-12 shrink-0 font-bold text-pine-700">
                          {m.label}
                        </dt>
                        <dd className="text-ink-700">{m.value}</dd>
                      </div>
                    ))}
                  </dl>
                  <span className="mt-4 inline-flex items-center gap-2 text-xs font-bold text-gold-600">
                    詳細・お申込み
                    <span className="transition-transform duration-300 group-hover:translate-x-1.5">→</span>
                  </span>
                </div>
              </Link>
            </StaggerItem>
          ))}
        </Stagger>
      </Section>

      {/* FAQ PREVIEW */}
      <Section className="texture-paper">
        <SectionTitle
          en="FAQ"
          align="center"
          title="よくある質問"
          lead="「未経験でも大丈夫？」「寮は個室？」——入学前に多く寄せられる質問にお答えします。もっと詳しく知りたい方は、AI検索つきのQ&Aページへ。"
        />
        <FadeUp delay={0.1} className="mx-auto mt-12 max-w-4xl">
          <Accordion items={faqPreview} />
        </FadeUp>
        <FadeUp delay={0.15} className="mt-12 text-center">
          <Link
            href="/qa"
            className="group inline-flex items-center gap-3 rounded-full bg-pine-800 px-8 py-4 text-sm font-bold text-white shadow-soft transition hover:bg-pine-700 hover:shadow-lift"
          >
            すべてのQ&Aを見る（AI検索つき）
            <span className="transition-transform duration-300 group-hover:translate-x-1.5">→</span>
          </Link>
        </FadeUp>
      </Section>

      {/* ACCESS & CONTACT */}
      <Section className="bg-white">
        <div className="grid gap-12 lg:grid-cols-2 lg:gap-16">
          <div>
            <SectionTitle
              en="ACCESS & CONTACT"
              title={
                <>
                  お問い合わせ・
                  <br className="md:hidden" />
                  アクセス
                </>
              }
              lead="まずは、資料をご請求のうえ、学校見学＆オープンキャンパスにご参加ください。本校では開催日にJR東京駅までのお迎えがございます。（帰路はJR八街駅より特急しおさい号でJR東京駅まで直通運行です。）"
            />
            <FadeUp delay={0.15}>
              <dl className="mt-8 divide-y divide-cream-200 border border-cream-300 bg-cream-50 shadow-soft">
                <div className="flex gap-6 px-6 py-4">
                  <dt className="w-24 shrink-0 text-xs font-bold tracking-[0.2em] text-pine-800">
                    所在地
                  </dt>
                  <dd className="text-sm leading-7 text-ink-700">{site.address}</dd>
                </div>
                <div className="flex gap-6 px-6 py-4">
                  <dt className="w-24 shrink-0 text-xs font-bold tracking-[0.2em] text-pine-800">
                    TEL／FAX
                  </dt>
                  <dd className="text-sm leading-7 text-ink-700">
                    TEL{" "}
                    <a
                      href={`tel:${site.tel}`}
                      className="font-bold tracking-wider text-pine-800 transition hover:text-gold-600"
                    >
                      {site.tel}
                    </a>
                    ／FAX {site.fax}
                  </dd>
                </div>
                <div className="flex gap-6 px-6 py-4">
                  <dt className="w-24 shrink-0 text-xs font-bold tracking-[0.2em] text-pine-800">
                    アクセス
                  </dt>
                  <dd className="text-sm leading-7 text-ink-700">
                    JR総武本線「日向（ひゅうが）駅」より徒歩8分程度。学校見学開催時は、バスにてJR東京駅12時30分（八重洲中央口横断歩道を渡ったところ）のお迎えがあります。
                  </dd>
                </div>
                <div className="flex gap-6 px-6 py-4">
                  <dt className="w-24 shrink-0 text-xs font-bold tracking-[0.2em] text-pine-800">
                    受付
                  </dt>
                  <dd className="text-sm leading-7 text-ink-700">
                    お問い合わせフォームは24時間受付。見学は完全予約制です。
                  </dd>
                </div>
              </dl>
              <div className="mt-8 flex flex-wrap justify-center gap-4 md:justify-start">
                <Link
                  href={site.forms.contact}
                  className="group inline-flex items-center gap-3 rounded-full bg-pine-800 px-7 py-3.5 text-sm font-bold text-white shadow-soft transition hover:bg-pine-700 hover:shadow-lift"
                >
                  お問い合わせフォーム
                  <span className="transition-transform duration-300 group-hover:translate-x-1.5">→</span>
                </Link>
                <a
                  href={`tel:${site.tel}`}
                  className="inline-flex items-center gap-3 rounded-full border-2 border-pine-800 px-7 py-3.5 text-sm font-bold text-pine-800 transition hover:bg-pine-50"
                >
                  電話で相談する
                </a>
              </div>
            </FadeUp>
          </div>
          <FadeUp delay={0.2} className="min-h-[320px]">
            <div className="h-full min-h-[320px] overflow-hidden border border-cream-300 shadow-soft lg:min-h-[420px]">
              <iframe
                title="東関東馬事高等学院（千葉県山武市雨坪10番地）の地図"
                src="https://www.google.com/maps?q=35.630227,140.357186(%E6%9D%B1%E9%96%A2%E6%9D%B1%E9%A6%AC%E4%BA%8B%E9%AB%98%E7%AD%89%E5%AD%A6%E9%99%A2+%E5%8D%83%E8%91%89%E7%9C%8C%E5%B1%B1%E6%AD%A6%E5%B8%82%E9%9B%A8%E5%9D%AA10%E7%95%AA%E5%9C%B0)&hl=ja&z=17&output=embed"
                className="h-full w-full border-0"
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                allowFullScreen
              />
            </div>
          </FadeUp>
        </div>
      </Section>

      <CTABand />
    </>
  );
}
