import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { Section, SectionTitle } from "@/components/Section";
import { FadeUp, ScaleIn, SlideIn, Stagger, StaggerItem } from "@/components/motion";
import Counter from "@/components/Counter";
import Marquee from "@/components/Marquee";
import YouTubeMarquee from "@/components/YouTubeMarquee";
import CTABand from "@/components/CTABand";
import HomeHero from "@/components/home/HomeHero";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: "◆馬の学校【高校】東関東馬事高等学院（公式）／千葉県山武市・八街市",
};

const news = [
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

const stats = [
  { value: 38, suffix: "名", label: "騎手課程 合格者数", note: "開校以来12年間の実績" },
  { value: 60, suffix: "名", label: "在校する高校生", note: "全国から集まる仲間たち" },
  { value: 20, suffix: "頭", label: "学校所有の現役競走馬", note: "冠名「バジガク」で出走" },
  { value: 350, suffix: "件超", label: "馬関連の求人情報", note: "全国の牧場・乗馬クラブ" },
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

export default function HomePage() {
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
              <div className="mt-8 flex flex-wrap gap-4">
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
          title="生徒たちの未来（目指せる進路）"
          lead="騎手や厩務員として競馬の第一線へ。牧場や乗馬クラブで馬と生きる。もちろん進学や一般就職も。バジガクからの進路は無限大です。"
        />
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

      {/* YOUTUBE */}
      <section className="overflow-hidden bg-pine-950 py-16 md:py-24">
        <div className="mx-auto max-w-7xl px-6">
          <div className="flex flex-col items-start justify-between gap-6 md:flex-row md:items-end">
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
            className="inline-flex items-center gap-2 rounded-full border-2 border-pine-800 px-6 py-3 text-sm font-bold text-pine-800 transition hover:bg-pine-800 hover:text-white"
          >
            Instagram
          </a>
          <a
            href={site.sns.twitter}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 rounded-full border-2 border-pine-800 px-6 py-3 text-sm font-bold text-pine-800 transition hover:bg-pine-800 hover:text-white"
          >
            X（Twitter）
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
          {[
            {
              img: "/images/taiken-1_001_1.jpg",
              title: "学校見学＆オープンキャンパス",
              desc: "JR東京駅から無料送迎。施設見学・入学説明・乗馬体験までまるごと1日。",
              href: "/opencampus",
              tag: "毎月開催",
            },
            {
              img: "/images/taiken-2_001_1.jpg",
              title: "夏休み4泊5日バジガク体験合宿",
              desc: "馬のお世話から野外騎乗まで、リアルな学校生活を宿泊で体験。",
              href: "/opencampus#camp",
              tag: "夏季限定",
            },
            {
              img: "/images/taiken-3_001_1.jpg",
              title: "中3対象・騎手受験事前合宿",
              desc: "JRA競馬学校 騎手課程受験に向けた6泊7日の特別対策合宿。",
              href: "/camp",
              tag: "中学3年生対象",
            },
          ].map((e) => (
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
                  <p className="mt-3 flex-1 text-[13px] leading-6 text-ink-700">
                    {e.desc}
                  </p>
                  <span className="mt-4 inline-flex items-center gap-2 text-xs font-bold text-gold-600">
                    詳しく見る
                    <span className="transition-transform duration-300 group-hover:translate-x-1.5">→</span>
                  </span>
                </div>
              </Link>
            </StaggerItem>
          ))}
        </Stagger>
      </Section>

      <CTABand />
    </>
  );
}
