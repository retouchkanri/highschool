import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import PageHero from "@/components/PageHero";
import { Section, SectionTitle } from "@/components/Section";
import { FadeUp, ScaleIn, SlideIn, Stagger, StaggerItem } from "@/components/motion";
import CTABand from "@/components/CTABand";

export const metadata: Metadata = {
  title: "コース紹介",
  description:
    "東関東馬事高等学院の3つのコースをご紹介。入学時は「一般高校乗馬コース」か「騎手受験特別コース」を選択し、2年次以降は「競走馬厩務員コース」にも進めます。高卒資格を取得しながら、馬を思いきり学べるカリキュラムです。",
};

const courses = [
  {
    img: "/images/top_course_001.jpg",
    icon: "/images/course_icon_green.png",
    en: "RIDING",
    title: "一般高校乗馬コース",
    timing: "入学時から選択",
    desc: "騎手志望でない方の、入学時のスタート地点となるコース。未経験でも担当馬と一緒にゆっくり基礎乗馬から始め、馬術大会への出場や引退競走馬の乗用馬転用調教まで経験できます。",
    href: "#ippan",
    cta: "このページで詳しく見る",
  },
  {
    img: "/images/top_course_002.jpg",
    icon: "/images/course_icon_brown.png",
    en: "GROOM",
    title: "競走馬厩務員コース",
    timing: "2年次以降に選択",
    desc: "1年次で身につけた乗馬の基礎を足がかりに、現役競走馬の騎乗訓練や飼養管理を実践のなかで学ぶコース。希望者は高校3年次にJRA競馬学校 厩務員課程の受験に挑戦できます。",
    href: "/kyumuin",
    cta: "詳しく見る",
  },
  {
    img: "/images/top_course_003.jpg",
    icon: "/images/course_icon_orange-2.png",
    en: "JOCKEY",
    title: "騎手受験特別コース",
    timing: "入学時から選択",
    desc: "JRA競馬学校・地方競馬教養センターの騎手課程合格を目指す特別コース。1年目の夏にはJRA競馬学校 騎手課程の受験に挑みます。受験対策がそのまま高校の単位に。",
    href: "/jockey",
    cta: "詳しく見る",
  },
];

const ippanFeatures = [
  {
    no: "01",
    img: "/images/ippan_001_1.jpg",
    alt: "担当馬と触れ合う生徒",
    title: (
      <>
        まったくの未経験でも大丈夫。
        <br />
        「担当馬」と一緒に、自分のペースで。
      </>
    ),
    body: (
      <>
        <p>
          入学直後の生徒は、そのほとんどが乗馬の経験ゼロ。カリキュラムはひとりひとりのペースと技術に合わせて組み立てるため、心配はいりません。入学後は生徒それぞれに「担当馬」が決まり、毎日のお世話と騎乗を重ねるうちに、自然と心の距離が縮まっていきます。
        </p>
        <p className="mt-4">
          キャンパスには1歳の若馬から養老馬まで、たくさんの馬たちが暮らしています。騎乗レベルに応じた乗馬ライセンスの取得も可能。「卒業後に何をやりたいか、まだ決めていない」——そんな人こそ大歓迎です。馬と暮らす日々の中で、じっくり自分の進む道を描いていきましょう。
        </p>
      </>
    ),
  },
  {
    no: "02",
    img: "/images/ippan_002_1.jpg",
    alt: "馬術大会に出場する生徒と馬",
    title: (
      <>
        キャンパスが馬術競技場に。
        <br />
        大会出場の費用は、学校が全額負担。
      </>
    ),
    body: (
      <>
        <p>
          馬術競技の経験を数多く積めることも、本校ならではの魅力。通常、馬術大会への出場にはエントリー費・登録費・馬の輸送費など大きな費用がかかりますが、本校では競技会出場にかかる諸経費を学校が全額負担。技術の伸びに合わせて、何度でも挑戦できます。
        </p>
        <p className="mt-4">
          入学時は未経験だった生徒も、半年を過ぎる頃にはさまざまな馬術大会の舞台に立てるようになります。全国高校生馬術選手権大会への出場実績も。大会への出場歴や入賞成績は高校の履修科目として単位認定され、日々の頑張りがそのまま卒業への学びに変わります。
        </p>
      </>
    ),
  },
  {
    no: "03",
    img: "/images/ippan_001_3.jpg",
    alt: "馬場での騎乗練習",
    title: (
      <>
        競技実績を積み重ねて、
        <br />
        大学へのスポーツ推薦進学も。
      </>
    ),
    body: (
      <>
        <p>
          3年間で思う存分、馬術大会に出場して実績を積めば、大学馬術部へのスポーツ推薦入学という道も開けます。実際にこの道を選んで進学した卒業生もいて、大学の馬術部でいまも馬中心の毎日を過ごしています。
        </p>
        <p className="mt-4">
          馬術の競技経験は、馬業界への就職はもちろん、進学の場面でも大きな強みになります。高校3年間の「馬に打ち込んだ時間」を、そのまま次のステージへつなげられるのがこのコースです。
        </p>
      </>
    ),
  },
  {
    no: "04",
    img: "/images/ippan_003_1-2.jpg",
    alt: "引退競走馬の転用調教に取り組む生徒",
    title: (
      <>
        引退した競走馬を、乗用馬へ。
        <br />
        馬の未来を救う「転用調教」を学ぶ。
      </>
    ),
    body: (
      <>
        <p>
          現役時代を「速く走ること」に捧げてきた競走馬は、引退した翌日から初心者を乗せて穏やかに歩けるわけではありません。乗り手を選ばず合図に応え、障害の飛越までこなせる乗用馬へと教育し直す——それが「転用調教」の技術です。
        </p>
        <p className="mt-4">
          この技術は就職で強みになるだけではありません。転用調教を担える人が増えるほど、引退後の行き先が見つからない馬を1頭でも多く救えるようになります。3年間の中で、生徒自身が転用調教した馬とともに馬術競技会に出場し、入賞を目指す。その喜びとやりがいは、何ものにも代えがたい経験です。
        </p>
      </>
    ),
  },
];

const subjects = [
  { subject: "倫理", content: "馬と人間の関わりを考える（人は馬を育て、馬は人を育てる）" },
  { subject: "現代文B", content: "担当する馬の紹介新聞づくり" },
  { subject: "体育", content: "基本馬術、応用馬術（障害・馬場）" },
  { subject: "就業体験", content: "乗馬クラブでのインターンシップ記録" },
  { subject: "課題研究", content: "馬術競技会への出場、入賞成績の記録" },
  { subject: "生物基礎", content: "馬の飼料管理レポート、生体記録" },
];

const paths = [
  {
    en: "HORSE CAREERS",
    title: "馬の仕事へ",
    desc: "騎手・厩務員として競馬の第一線へ。生産牧場・育成牧場・乗馬クラブ・観光牧場・養老牧場・ホースセラピーなど、馬と生きる進路は全国に広がっています。",
  },
  {
    en: "HIGHER EDUCATION",
    title: "進学へ",
    desc: "高校卒業資格を取得できるので、大学・短大・専門学校への進学も可能。馬術の競技実績を活かした大学馬術部へのスポーツ推薦という道もあります。",
  },
  {
    en: "GENERAL CAREERS",
    title: "一般就職へ",
    desc: "卒業後に馬以外の道を選んでもいい。親元を離れて馬や仲間と過ごした3年間は、どの分野へ進んでも揺らがない自信と土台を与えてくれます。",
  },
];

function FlowArrow() {
  return (
    <div
      aria-hidden
      className="flex items-center justify-center text-2xl font-bold text-gold-500 lg:px-1"
    >
      <span className="rotate-90 lg:rotate-0">→</span>
    </div>
  );
}

export default function CoursePage() {
  return (
    <>
      <PageHero
        image="/images/course_001_1-2.jpg"
        en="COURSES"
        title="コース紹介"
        lead="高校卒業資格を取得しながら、思いきり馬を学ぶ。バジガクの3つのコースと、その選び方をご紹介します。"
        crumbs={[{ label: "HOME", href: "/" }, { label: "コース紹介" }]}
      />

      {/* HOW TO CHOOSE */}
      <Section className="texture-paper">
        <SectionTitle
          en="HOW TO CHOOSE"
          align="center"
          title="コースの選び方は、とてもシンプル。"
          lead="バジガクが大切にしているのは、コースという枠組みよりも、ひとりひとりの目標や状況に合わせた学びの設計。同じコースでも「ゆっくり馬と触れ合いたい」「全日本クラスの馬術大会で活躍したい」など、思い描く姿はさまざまです。担任がその想いを日頃から丁寧にくみ取り、毎日の授業に反映していきます。入口の選択は、たった2つです。"
        />
        <Stagger className="mt-14 grid items-stretch gap-4 lg:grid-cols-[1fr_auto_1fr_auto_1fr] lg:gap-2">
          {/* STEP 1 */}
          <StaggerItem className="h-full">
            <div className="flex h-full flex-col rounded-3xl border border-cream-300 bg-white p-7 shadow-soft">
              <p className="text-[10px] font-bold tracking-[0.35em] text-gold-600">
                STEP 01
              </p>
              <h3 className="mt-2 font-serif text-lg font-bold text-pine-950">
                入学時に、2つから選ぶ
              </h3>
              <p className="mt-3 text-[13px] leading-6 text-ink-700">
                在学中に騎手（JRA・地方競馬）を目指す方は「騎手受験特別コース」、それ以外の方は「一般高校乗馬コース」からのスタートです。
              </p>
              <div className="mt-5 space-y-3">
                <div className="flex items-center gap-3 rounded-2xl bg-pine-50 px-4 py-3">
                  <Image
                    src="/images/course_icon_green.png"
                    alt=""
                    width={32}
                    height={32}
                    className="h-8 w-8 object-contain"
                  />
                  <div>
                    <p className="text-[13px] font-bold text-pine-950">
                      一般高校乗馬コース
                    </p>
                    <p className="text-[11px] text-ink-500">
                      馬に親しむことから、焦らず騎乗を始める
                    </p>
                  </div>
                </div>
                <div className="flex items-center gap-3 rounded-2xl bg-cream-100 px-4 py-3">
                  <Image
                    src="/images/course_icon_orange-2.png"
                    alt=""
                    width={32}
                    height={32}
                    className="h-8 w-8 object-contain"
                  />
                  <div>
                    <p className="text-[13px] font-bold text-pine-950">
                      騎手受験特別コース
                    </p>
                    <p className="text-[11px] text-ink-500">
                      1年目の夏、JRA競馬学校 騎手課程受験に挑戦
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </StaggerItem>

          <FlowArrow />

          {/* STEP 2 */}
          <StaggerItem className="h-full">
            <div className="flex h-full flex-col rounded-3xl border border-cream-300 bg-white p-7 shadow-soft">
              <p className="text-[10px] font-bold tracking-[0.35em] text-gold-600">
                STEP 02
              </p>
              <h3 className="mt-2 font-serif text-lg font-bold text-pine-950">
                2年次以降、道を広げる
              </h3>
              <p className="mt-3 text-[13px] leading-6 text-ink-700">
                騎乗レベルや目標に応じて、競走馬に関わる道へチャレンジしたい方は「競走馬厩務員コース」を選択できます。もちろん、乗馬コースを続けて馬術を深めるのも王道です。
              </p>
              <div className="mt-5 space-y-3">
                <div className="flex items-center gap-3 rounded-2xl bg-cream-100 px-4 py-3">
                  <Image
                    src="/images/course_icon_brown.png"
                    alt=""
                    width={32}
                    height={32}
                    className="h-8 w-8 object-contain"
                  />
                  <div>
                    <p className="text-[13px] font-bold text-pine-950">
                      競走馬厩務員コース
                    </p>
                    <p className="text-[11px] text-ink-500">
                      1年次で磨いた乗馬を土台に、競走馬の騎乗訓練へ
                    </p>
                  </div>
                </div>
                <div className="flex items-center gap-3 rounded-2xl bg-pine-50 px-4 py-3">
                  <Image
                    src="/images/course_icon_green.png"
                    alt=""
                    width={32}
                    height={32}
                    className="h-8 w-8 object-contain"
                  />
                  <div>
                    <p className="text-[13px] font-bold text-pine-950">
                      一般高校乗馬コースを継続
                    </p>
                    <p className="text-[11px] text-ink-500">
                      馬術大会への挑戦や、引退馬の転用調教へ
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </StaggerItem>

          <FlowArrow />

          {/* STEP 3 */}
          <StaggerItem className="h-full">
            <div className="flex h-full flex-col rounded-3xl border border-cream-300 bg-white p-7 shadow-soft">
              <p className="text-[10px] font-bold tracking-[0.35em] text-gold-600">
                STEP 03
              </p>
              <h3 className="mt-2 font-serif text-lg font-bold text-pine-950">
                3年次、挑戦と進路決定
              </h3>
              <p className="mt-3 text-[13px] leading-6 text-ink-700">
                競走馬厩務員コースの希望者は、3年次にJRA競馬学校 厩務員課程の受験に挑めます。もちろん、牧場・乗馬クラブへの就職や、進学・一般就職を目指す生徒も。
              </p>
              <ul className="mt-5 space-y-2.5">
                {[
                  "JRA競馬学校 厩務員課程を受験",
                  "牧場・乗馬クラブなど馬業界へ就職",
                  "大学・短大・専門学校へ進学／一般就職",
                ].map((item) => (
                  <li
                    key={item}
                    className="flex items-start gap-2.5 text-[13px] font-medium leading-6 text-ink-900"
                  >
                    <span
                      aria-hidden
                      className="mt-2 h-2 w-2 shrink-0 rounded-full bg-gold-500"
                    />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </StaggerItem>
        </Stagger>
        <FadeUp delay={0.15}>
          <p className="mx-auto mt-10 max-w-3xl text-center text-sm leading-8 text-ink-700 md:text-[15px]">
            将来の答えを、入学の時点で用意しておく必要はありません。馬のいる毎日に一歩ずつなじみながら、自分の進みたい道を時間をかけて探していく——バジガクは、そんな3年間の過ごし方を大切にしています。
          </p>
        </FadeUp>
      </Section>

      {/* 3 COURSES */}
      <Section className="bg-pine-900">
        <SectionTitle
          dark
          en="3 COURSES"
          align="center"
          title="「馬」を通じて、「やりたいこと」が高校授業に。"
          lead="どのコースでも、広域通信制高校・明蓬館高等学校との連携により高校卒業資格を取得できます。高校授業は1日2〜3時間、残りの時間は思いきり馬の学習へ。"
        />
        <Stagger className="mt-12 grid gap-6 md:grid-cols-3">
          {courses.map((c) => (
            <StaggerItem key={c.title} className="h-full">
              <Link
                href={c.href}
                className="group flex h-full flex-col overflow-hidden rounded-3xl bg-white shadow-soft transition duration-300 hover:-translate-y-2 hover:shadow-lift"
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
                  <span className="absolute bottom-4 left-4 rounded-full bg-sun-500 px-3.5 py-1 text-[10px] font-bold text-pine-950">
                    {c.timing}
                  </span>
                </div>
                <div className="flex flex-1 flex-col p-7">
                  <div className="flex items-center gap-3">
                    <Image
                      src={c.icon}
                      alt=""
                      width={40}
                      height={40}
                      className="h-10 w-10 object-contain"
                    />
                    <h3 className="font-serif text-lg font-bold text-pine-950">
                      {c.title}
                    </h3>
                  </div>
                  <p className="mt-4 flex-1 text-[13px] leading-7 text-ink-700">
                    {c.desc}
                  </p>
                  <span className="mt-5 inline-flex items-center gap-2 text-xs font-bold text-gold-600">
                    {c.cta}
                    <span className="transition-transform duration-300 group-hover:translate-x-1.5">
                      →
                    </span>
                  </span>
                </div>
              </Link>
            </StaggerItem>
          ))}
        </Stagger>
      </Section>

      {/* IPPAN COURSE DETAIL */}
      <Section id="ippan" className="scroll-mt-20 bg-cream-100">
        <div className="mx-auto max-w-3xl text-center">
          <SectionTitle
            en="GENERAL RIDING COURSE"
            align="center"
            title="一般高校乗馬コース"
            lead="朝も放課後も、いつもそばに馬がいる。そんな濃密な高校3年間は、ここでしか味わえません。初めて馬に触れる人から馬術経験者まで、それぞれの持ち味をぐんと伸ばしていくコースです。"
          />
          <FadeUp delay={0.15}>
            <div className="mt-8 flex flex-wrap justify-center gap-2">
              {[
                "乗馬インストラクター",
                "馬術選手",
                "乗馬指導員",
                "観光牧場",
                "ホースセラピー",
                "大学・短大・専門学校進学",
                "一般企業",
              ].map((tag) => (
                <span
                  key={tag}
                  className="rounded-full border border-gold-500/50 bg-white px-4 py-1.5 text-[11px] font-bold text-pine-800"
                >
                  {tag}
                </span>
              ))}
            </div>
            <p className="mt-3 text-[11px] text-ink-500">目指せる進路の一例</p>
          </FadeUp>
        </div>

        {/* photo strip */}
        <Stagger className="mt-14 grid gap-4 md:grid-cols-3">
          {[
            {
              img: "/images/ippan_001_1.jpg",
              cap: "入学したらひとりに1頭、「担当馬」がつきます",
            },
            {
              img: "/images/ippan_001_2.jpg",
              cap: "毎日たっぷり、馬と過ごす時間があります",
            },
            {
              img: "/images/ippan_001_3.jpg",
              cap: "1歳の若馬から養老馬まで、多彩な馬たちと",
            },
          ].map((p) => (
            <StaggerItem key={p.img}>
              <figure className="overflow-hidden rounded-2xl bg-white shadow-soft">
                <div className="relative h-52 overflow-hidden md:h-56">
                  <Image
                    src={p.img}
                    alt={p.cap}
                    fill
                    sizes="(max-width: 768px) 100vw, 33vw"
                    className="object-cover transition-transform duration-700 hover:scale-105"
                  />
                </div>
                <figcaption className="px-5 py-4 text-[12px] font-medium leading-5 text-ink-700">
                  {p.cap}
                </figcaption>
              </figure>
            </StaggerItem>
          ))}
        </Stagger>

        {/* features */}
        <div className="mt-20 space-y-16 md:space-y-24">
          {ippanFeatures.map((f, i) => (
            <div
              key={f.no}
              className="grid items-center gap-10 lg:grid-cols-2 lg:gap-16"
            >
              <SlideIn
                direction={i % 2 === 0 ? -1 : 1}
                className={i % 2 === 0 ? "" : "lg:order-2"}
              >
                <div className="relative overflow-hidden rounded-3xl shadow-lift">
                  <Image
                    src={f.img}
                    alt={f.alt}
                    width={1200}
                    height={800}
                    className="h-72 w-full object-cover md:h-96"
                  />
                  <span className="absolute left-5 top-5 flex h-12 w-12 items-center justify-center rounded-full bg-pine-950/85 font-serif text-sm font-bold text-gold-300 backdrop-blur-sm">
                    {f.no}
                  </span>
                </div>
              </SlideIn>
              <FadeUp
                delay={0.1}
                className={i % 2 === 0 ? "" : "lg:order-1"}
              >
                <p className="text-[11px] font-bold tracking-[0.4em] text-gold-600">
                  FEATURE {f.no}
                </p>
                <h3 className="mt-3 font-serif text-xl font-bold leading-relaxed text-pine-950 md:text-2xl">
                  {f.title}
                </h3>
                <div className="mt-3 h-[3px] w-16 rule-gold" />
                <div className="mt-6 text-sm leading-8 text-ink-700 md:text-[15px]">
                  {f.body}
                </div>
              </FadeUp>
            </div>
          ))}
        </div>

        {/* curriculum table */}
        <div className="mt-20 md:mt-24">
          <div className="grid gap-10 lg:grid-cols-[320px_1fr] lg:gap-16">
            <div>
              <SectionTitle
                en="CURRICULUM"
                title="履修科目の一例"
                lead="3年間を通じて、馬術大会への出場、乗馬ライセンスの取得、乗用馬転用調教、インターンシップなどの経験が高校の学びとつながります。「馬と過ごす時間」が、そのまま卒業への単位になるのです。"
              />
            </div>
            <FadeUp delay={0.1}>
              <div className="overflow-x-auto rounded-3xl bg-white shadow-soft">
                <table className="w-full min-w-[480px] border-collapse text-left">
                  <thead>
                    <tr className="bg-pine-800 text-white">
                      <th className="whitespace-nowrap px-6 py-4 text-xs font-bold tracking-widest md:text-sm">
                        履修科目
                      </th>
                      <th className="px-6 py-4 text-xs font-bold tracking-widest md:text-sm">
                        馬に関する学習内容
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    {subjects.map((s, i) => (
                      <tr
                        key={s.subject}
                        className={i % 2 === 0 ? "bg-white" : "bg-cream-100/60"}
                      >
                        <th className="whitespace-nowrap border-t border-cream-300 px-6 py-4 font-serif text-sm font-bold text-pine-950">
                          {s.subject}
                        </th>
                        <td className="border-t border-cream-300 px-6 py-4 text-[13px] leading-6 text-ink-700 md:text-sm">
                          {s.content}
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
              <p className="mt-4 text-[11px] leading-5 text-ink-500">
                ※あくまで一例です。ひとりひとりの目標・技術レベルに応じて学習プランを提案します。
              </p>
            </FadeUp>
          </div>
        </div>
      </Section>

      {/* MANY PATHS */}
      <Section className="bg-white">
        <SectionTitle
          en="YOUR FUTURE"
          align="center"
          title="進路は、ひとつじゃない。"
          lead="バジガクの3年間を経たからといって、馬の仕事しか選べないわけではありません。高校卒業資格を取得できるからこそ、馬の道も、進学も、一般就職も——選択肢と可能性は無限大です。"
        />
        <Stagger className="mt-12 grid gap-6 md:grid-cols-3">
          {paths.map((p) => (
            <StaggerItem key={p.title} className="h-full">
              <div className="flex h-full flex-col rounded-3xl border border-cream-300 bg-cream-100 p-8 shadow-soft transition duration-300 hover:-translate-y-1.5 hover:shadow-lift">
                <p className="text-[10px] font-bold tracking-[0.35em] text-gold-600">
                  {p.en}
                </p>
                <h3 className="mt-3 font-serif text-xl font-bold text-pine-950">
                  {p.title}
                </h3>
                <div className="mt-4 h-[3px] w-10 rule-gold" />
                <p className="mt-5 flex-1 text-[13px] leading-7 text-ink-700">
                  {p.desc}
                </p>
              </div>
            </StaggerItem>
          ))}
        </Stagger>
        <div className="mt-16 grid items-center gap-10 lg:grid-cols-2">
          <ScaleIn className="overflow-hidden rounded-3xl shadow-lift">
            <Image
              src="/images/ippan_002_1.jpg"
              alt="仲間と馬と過ごすバジガクの高校生活"
              width={1200}
              height={800}
              className="h-72 w-full object-cover md:h-80"
            />
          </ScaleIn>
          <FadeUp delay={0.1}>
            <h3 className="font-serif text-xl font-bold leading-relaxed text-pine-950 md:text-2xl">
              将来のことは、
              <br />
              馬と過ごしながら決めればいい。
            </h3>
            <div className="mt-4 h-[3px] w-16 rule-gold" />
            <p className="mt-6 text-sm leading-8 text-ink-700 md:text-[15px]">
              家族のもとを離れ、馬と仲間と先生に囲まれて過ごす3年間は、どんな進路を選んでも揺るぎない自信を育ててくれます。新しい分野への挑戦も全力で後押しします。進路選びは焦らなくて大丈夫。一緒にじっくり考えていきましょう。
            </p>
            <div className="mt-8 flex flex-wrap gap-4">
              <Link
                href="/boshu"
                className="group inline-flex items-center gap-3 rounded-full bg-pine-800 px-7 py-3.5 text-sm font-bold text-white shadow-soft transition hover:bg-pine-700 hover:shadow-lift"
              >
                募集要項を見る
                <span className="transition-transform duration-300 group-hover:translate-x-1.5">
                  →
                </span>
              </Link>
              <Link
                href="/tokucho"
                className="inline-flex items-center gap-3 rounded-full border-2 border-pine-800 px-7 py-3.5 text-sm font-bold text-pine-800 transition hover:bg-pine-50"
              >
                本校の特徴を見る
              </Link>
            </div>
          </FadeUp>
        </div>
      </Section>

      <CTABand />
    </>
  );
}
