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
  title: "コース紹介",
  description:
    "東関東馬事高等学院の3コースを徹底紹介。一般高校乗馬・競走馬厩務員・騎手受験特別の比較表、一般高校乗馬コースの詳しい学び、厩務員・騎手コースの概要、全コース共通のカリキュラムとコース選択の流れまで。3コースとも明蓬館高等学校との連携で高校卒業資格を取得できます。",
};

/* ── コース比較テーブル ───────────────────── */

const compareCourses = [
  {
    icon: "/images/course_icon_green.png",
    en: "RIDING",
    title: "一般高校乗馬コース",
    anchor: "#ippan",
  },
  {
    icon: "/images/course_icon_brown.png",
    en: "GROOM",
    title: "競走馬厩務員コース",
    anchor: "#kyumuin",
  },
  {
    icon: "/images/course_icon_orange-2.png",
    en: "JOCKEY",
    title: "騎手受験特別コース",
    anchor: "#jockey",
  },
];

const compareRows = [
  {
    label: "こんな人に",
    cells: [
      "「馬とじっくり向き合いたい」「未経験から始めたい」「進路はこれから考えたい」という方",
      "「競走馬の仕事に就きたい」「JRA厩務員や牧場スタッフを目指したい」という方",
      "「在学中に騎手課程の合格を本気でつかみたい」という方（出願は体重45kg以下）",
    ],
  },
  {
    label: "選択できる時期",
    cells: [
      "入学時に選択",
      "2年次10月以降に選択（1年次は一般高校乗馬コースで基礎づくり）",
      "入学時に選択",
    ],
  },
  {
    label: "学びの中心",
    cells: [
      "基礎〜応用馬術、馬術大会への出場、引退競走馬の乗用馬への転用調教",
      "飼養・馬匹・騎乗運動の「3つの管理」と、現役競走馬の騎乗訓練",
      "騎手課程の受験対策（筆記・面接・運動機能検査・騎乗適性）と毎日のトレーニング",
    ],
  },
  {
    label: "目指せる主な進路",
    cells: [
      "乗馬クラブ・観光牧場・養老牧場、大学馬術部へのスポーツ推薦進学、一般就職",
      "JRA厩務員、生産牧場・育成牧場のスタッフ",
      "JRA騎手、NAR地方競馬騎手",
    ],
  },
  {
    label: "関連資格・受験",
    cells: [
      "乗馬ライセンス／騎乗者資格／家畜商免許",
      "3年次にJRA競馬学校 厩務員課程を受験（希望者）",
      "1年次の夏にJRA競馬学校 騎手課程を受験（地方競馬教養センターへの挑戦も）",
    ],
  },
];

/* ── 一般高校乗馬コース ───────────────────── */

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

const ippanDay = [
  {
    slot: "朝",
    title: "飼付と手入れ",
    desc: "担当馬の朝ごはんとブラッシングから一日が始まります。馬体のチェックも大切な日課。",
  },
  {
    slot: "午前",
    title: "騎乗レッスン",
    desc: "レベル別の少人数レッスン。基礎の反復から障害の練習まで、講師がじっくり伴走します。",
  },
  {
    slot: "昼すぎ",
    title: "高校授業",
    desc: "明蓬館高等学校のネット授業を1日2〜3時間。集中して高卒資格への単位を積み重ねます。",
  },
  {
    slot: "午後",
    title: "騎乗・大会練習",
    desc: "2回目の騎乗や大会前のコース練習。引退競走馬の転用調教に取り組む日もあります。",
  },
  {
    slot: "夕方",
    title: "馬のお世話",
    desc: "夕方の飼付と馬房の手入れ。「また明日ね」のあいさつで、馬との一日を締めくくります。",
  },
];

const ippanSkills = [
  "基礎〜応用馬術（馬場・障害）",
  "馬の手入れ・馬装",
  "飼養管理の基礎知識",
  "引退競走馬の転用調教の基礎",
  "馬術大会の出場経験",
  "乗馬ライセンス・騎乗者資格",
];

/* ── 競走馬厩務員コース（概要） ─────────────── */

const kyumuinSteps = [
  {
    no: "01",
    en: "CURRICULUM",
    title: "「3つの管理」を実践で学ぶ",
    desc: "飼養管理（エサと健康）・馬匹管理（手入れと馬房）・騎乗運動管理（調教騎乗）。学校所有の現役競走馬「バジガク」たち約20頭とともに、厩務員の仕事をまるごと実践で身につけます。",
  },
  {
    no: "02",
    en: "TRAINING",
    title: "トレセン近郊・北海道での実習",
    desc: "トレーニングセンター近郊での実習や、北海道の牧場での研修も。競走馬の現場の空気を肌で感じながら、教室では身につかない実践力と、現場ならではの判断力を磨いていきます。",
  },
  {
    no: "03",
    en: "CHALLENGE",
    title: "3年次、JRA競馬学校へ挑戦",
    desc: "2年次10月にコースを選択し、実践経験を重ねたうえで、希望者は3年次にJRA競馬学校 厩務員課程を受験。日々の積み重ねが、そのまま受験への最短ルートになります。",
  },
];

/* ── 騎手受験特別コース（概要） ─────────────── */

const jockeyPoints = [
  {
    en: "EXAM PREP",
    title: "受験対策",
    desc: "筆記・面接・運動機能検査・騎乗適性。騎手課程の試験項目をひとつひとつ分解し、一人ひとりの得意と弱点に合わせて対策を積み上げていきます。",
  },
  {
    en: "DAILY TRAINING",
    title: "毎日のトレーニング",
    desc: "毎日の騎乗にくわえ、フィジカルトレーニングと体重管理を徹底。生活まるごと「受験当日」に照準を合わせられるのは、全寮制のこの学校だからこそ。",
  },
  {
    en: "RESULTS",
    title: "積み重ねてきた実績",
    desc: "開校以来12年間で、騎手課程合格38名。数字の裏には、一人ひとりの挑戦の物語があります。次の1名は、あなたかもしれません。",
  },
];

/* ── 共通カリキュラム ─────────────────────── */

const kyotsuItems = [
  {
    no: "01",
    title: "資格取得",
    desc: "乗馬ライセンス（全国乗馬倶楽部振興協会）、騎乗者資格（日本馬術連盟）、家畜商免許。騎乗レベルや目標に合わせて、在学中に挑戦できます。",
  },
  {
    no: "02",
    title: "実習・校外学習",
    desc: "競馬場や牧場への見学・実習も、大切な授業のひとつ。校外での体験がそのまま高校の単位につながる、バジガクならではの学び方です。",
  },
  {
    no: "03",
    title: "インターンシップ",
    desc: "馬関連の求人350件超のネットワークを生かし、在学中に約3か所以上の牧場インターンを経験。就職を決める前に「現場」を知ることができます。",
  },
  {
    no: "04",
    title: "高校授業",
    desc: "明蓬館高等学校の授業は1日2〜3時間。定期テストではなく学習成果で単位認定され、年1回の九州本校スクーリング（3泊4日）で卒業へ近づきます。",
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
        lead="乗馬も、競走馬も、騎手への夢も。「馬が好き」の先に、3つの道。高校卒業資格を取りながら、夢中をまっすぐ究められるコースをご案内します。"
        crumbs={[{ label: "HOME", href: "/" }, { label: "コース紹介" }]}
      />

      {/* コース比較 */}
      <Section id="hikaku" className="scroll-mt-20 texture-paper">
        <SectionTitle
          en="COURSE COMPARISON"
          align="center"
          title="3つのコースを、ひと目で。"
          lead="バジガクのコースは3つ。入学時に選ぶのは「一般高校乗馬」か「騎手受験特別」の2つで、「競走馬厩務員」は2年次から選択できます。まずは違いをざっくりつかんで、気になるコースへ読み進めてください。"
        />
        <FadeUp delay={0.1} className="mt-12">
          <div className="overflow-x-auto bg-white shadow-soft">
            <table className="w-full min-w-[860px] border-collapse text-left">
              <thead>
                <tr className="bg-pine-800 text-white">
                  <th scope="col" className="w-36 px-5 py-5 align-bottom">
                    <span className="text-[10px] font-bold tracking-[0.3em] text-gold-300">
                      COMPARE
                    </span>
                  </th>
                  {compareCourses.map((c) => (
                    <th key={c.title} scope="col" className="px-5 py-5 align-top">
                      <div className="flex items-center gap-3">
                        <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-white">
                          <Image
                            src={c.icon}
                            alt=""
                            width={30}
                            height={30}
                            className="h-[30px] w-[30px] object-contain"
                          />
                        </span>
                        <span>
                          <span className="block text-[10px] font-bold tracking-[0.3em] text-gold-300">
                            {c.en}
                          </span>
                          <span className="mt-1 block font-serif text-sm font-bold md:text-[15px]">
                            {c.title}
                          </span>
                        </span>
                      </div>
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {compareRows.map((row, i) => (
                  <tr
                    key={row.label}
                    className={i % 2 === 0 ? "bg-white" : "bg-cream-100/60"}
                  >
                    <th
                      scope="row"
                      className="whitespace-nowrap border-t border-cream-300 px-5 py-5 align-top font-serif text-sm font-bold text-pine-950"
                    >
                      {row.label}
                    </th>
                    {row.cells.map((cell, j) => (
                      <td
                        key={j}
                        className="border-t border-cream-300 px-5 py-5 align-top text-[13px] leading-6 text-ink-700"
                      >
                        {cell}
                      </td>
                    ))}
                  </tr>
                ))}
                <tr className="bg-white">
                  <th scope="row" className="border-t border-cream-300 px-5 py-5" />
                  {compareCourses.map((c) => (
                    <td key={c.title} className="border-t border-cream-300 px-5 py-5">
                      <Link
                        href={c.anchor}
                        className="group inline-flex items-center gap-2 text-xs font-bold text-gold-600"
                      >
                        このページで詳しく見る
                        <span className="transition-transform duration-300 group-hover:translate-y-1">
                          ↓
                        </span>
                      </Link>
                    </td>
                  ))}
                </tr>
              </tbody>
            </table>
          </div>
        </FadeUp>
        <FadeUp delay={0.15}>
          <div className="mx-auto mt-8 flex max-w-3xl flex-col items-center gap-3 border border-gold-500/40 bg-white px-6 py-6 text-center shadow-soft md:flex-row md:gap-5 md:text-left">
            <span className="shrink-0 rounded-full bg-pine-800 px-4 py-1.5 text-[11px] font-bold tracking-widest text-gold-300">
              3コース共通
            </span>
            <p className="text-[13px] leading-6 text-ink-700 md:text-sm">
              どのコースを選んでも、広域通信制・明蓬館高等学校との連携により
              <span className="font-bold text-pine-950">高校卒業資格</span>
              を取得できます。高校授業は1日2〜3時間だから、残りの時間はまるごと馬の学びへ。
            </p>
          </div>
        </FadeUp>
      </Section>

      {/* 一般高校乗馬コース */}
      <Section id="ippan" className="scroll-mt-20 bg-cream-100">
        <div className="mx-auto max-w-3xl text-center">
          <SectionTitle
            en="GENERAL RIDING COURSE"
            align="center"
            title="一般高校乗馬コース"
            lead="朝も放課後も、いつもそばに馬がいる。そんな濃密な高校3年間は、ここでしか味わえません。初めて馬に触れる人から馬術経験者まで、それぞれの持ち味をぐんと伸ばしていくコースです。"
          />
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
              <figure className="overflow-hidden bg-white shadow-soft">
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
                <div className="relative overflow-hidden shadow-lift">
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

        {/* 一日の学び */}
        <div className="mt-20 md:mt-24">
          <FadeUp className="text-center">
            <p className="text-[11px] font-bold tracking-[0.4em] text-gold-600">
              DAILY LEARNING
            </p>
            <h3 className="mt-3 font-serif text-xl font-bold text-pine-950 md:text-2xl">
              一般高校乗馬コースの「一日の学び」
            </h3>
            <div className="mx-auto mt-4 h-[3px] w-16 rule-gold" />
            <p className="mx-auto mt-5 max-w-2xl text-sm leading-7 text-ink-700">
              このコースの一日は、馬に始まり、馬に終わります。騎乗と高校授業、そしてお世話。5つの学びのかたまりを、季節と成長に合わせて組み合わせていきます。
            </p>
          </FadeUp>
          <Stagger className="mt-10 grid gap-3 sm:grid-cols-2 lg:grid-cols-5">
            {ippanDay.map((d, i) => (
              <StaggerItem key={d.title} className="h-full">
                <div className="flex h-full flex-col border-t-[3px] border-gold-500 bg-white p-5 shadow-soft">
                  <div className="flex items-baseline justify-between">
                    <span className="font-serif text-sm font-bold text-gold-600">
                      {d.slot}
                    </span>
                    <span className="text-[10px] font-bold tracking-[0.25em] text-ink-500">
                      {String(i + 1).padStart(2, "0")}
                    </span>
                  </div>
                  <h4 className="mt-2 font-serif text-[15px] font-bold text-pine-950">
                    {d.title}
                  </h4>
                  <p className="mt-2 flex-1 text-[12px] leading-5 text-ink-700">
                    {d.desc}
                  </p>
                </div>
              </StaggerItem>
            ))}
          </Stagger>
          <FadeUp delay={0.1}>
            <p className="mt-4 text-center text-[11px] text-ink-500">
              ※学びの流れは一例です。学年・時期・目標により変わります。
            </p>
          </FadeUp>
        </div>

        {/* 身につくスキル */}
        <FadeUp delay={0.1} className="mt-14 text-center">
          <p className="text-[11px] font-bold tracking-[0.4em] text-gold-600">SKILLS</p>
          <h3 className="mt-3 font-serif text-lg font-bold text-pine-950 md:text-xl">
            3年間で身につくスキル
          </h3>
          <div className="mt-6 flex flex-wrap justify-center gap-2">
            {ippanSkills.map((tag) => (
              <span
                key={tag}
                className="rounded-full border border-gold-500/50 bg-white px-4 py-1.5 text-[11px] font-bold text-pine-800"
              >
                {tag}
              </span>
            ))}
          </div>
          <p className="mt-3 text-[11px] text-ink-500">
            ※身につくスキルの一例です。目標に応じて学習プランを設計します。
          </p>
        </FadeUp>
      </Section>

      {/* 競走馬厩務員コース（概要） */}
      <Section id="kyumuin" className="scroll-mt-20 bg-white">
        <div className="grid items-center gap-10 lg:grid-cols-2 lg:gap-16">
          <div>
            <SectionTitle
              en="RACEHORSE GROOM COURSE"
              title="競走馬厩務員コース"
              lead="現役競走馬とともに、プロの「馬の仕事」を実践で学ぶコース。1年次に乗馬の基礎をしっかり固めたうえで、2年次10月以降に選択します。ここでは概要をご紹介——詳しいカリキュラムは専用ページでどうぞ。"
            />
            <FadeUp delay={0.1}>
              <div className="mt-8 flex items-center gap-6 border-l-[3px] border-gold-500 bg-cream-100 px-6 py-5">
                <div>
                  <Counter
                    to={24}
                    suffix="名"
                    className="font-serif text-4xl font-bold text-pine-950"
                  />
                  <p className="mt-1 text-[11px] font-bold text-ink-700">
                    JRA競馬学校 厩務員課程 最終合格
                  </p>
                </div>
                <p className="text-[12px] leading-5 text-ink-700">
                  平成29〜令和3年度は受験33名が
                  <span className="font-bold text-pine-950">全員一次通過</span>
                  、うち24名が最終合格しています。
                </p>
              </div>
              <p className="mt-3 text-[11px] text-ink-500">
                ※実績は公表時点（平成29〜令和3年度）のものです。
              </p>
            </FadeUp>
          </div>
          <ScaleIn className="overflow-hidden shadow-lift">
            <Image
              src="/images/kyumuin_002_1.jpg"
              alt="現役競走馬の騎乗訓練に取り組む生徒"
              width={1200}
              height={800}
              className="h-72 w-full object-cover md:h-96"
            />
          </ScaleIn>
        </div>

        <Stagger className="mt-14 grid gap-6 md:grid-cols-3">
          {kyumuinSteps.map((s) => (
            <StaggerItem key={s.no} className="h-full">
              <div className="flex h-full flex-col border border-cream-300 bg-cream-100 p-7 shadow-soft transition duration-300 hover:-translate-y-1.5 hover:shadow-lift">
                <div className="flex items-baseline gap-3">
                  <span className="font-serif text-2xl font-bold text-gold-500">
                    {s.no}
                  </span>
                  <span className="text-[10px] font-bold tracking-[0.3em] text-gold-600">
                    {s.en}
                  </span>
                </div>
                <h3 className="mt-3 font-serif text-lg font-bold text-pine-950">
                  {s.title}
                </h3>
                <p className="mt-4 flex-1 text-[13px] leading-7 text-ink-700">
                  {s.desc}
                </p>
              </div>
            </StaggerItem>
          ))}
        </Stagger>

        <FadeUp delay={0.15} className="mt-12 text-center">
          <Link
            href="/kyumuin"
            className="group inline-flex items-center gap-3 rounded-full bg-pine-800 px-9 py-4 text-sm font-bold text-white shadow-soft transition hover:bg-pine-700 hover:shadow-lift md:text-base"
          >
            競走馬厩務員コースを詳しく見る
            <span className="transition-transform duration-300 group-hover:translate-x-1.5">
              →
            </span>
          </Link>
        </FadeUp>
      </Section>

      {/* 騎手受験特別コース（概要） */}
      <section
        id="jockey"
        className="relative scroll-mt-20 overflow-hidden bg-pine-950 py-16 md:py-24"
      >
        <div
          aria-hidden
          className="absolute inset-0 bg-cover bg-center opacity-10"
          style={{ backgroundImage: "url(/images/tokubetsu_001_1.jpg)" }}
        />
        <div className="relative mx-auto max-w-7xl px-6">
          <SectionTitle
            dark
            en="JOCKEY COURSE"
            align="center"
            title="騎手受験特別コース"
            lead="「騎手になりたい」——その一心に、学校まるごとで応えるコース。入学時に選択し、1年目の夏にはJRA競馬学校 騎手課程の受験に挑みます。"
          />
          <Stagger className="mt-12 grid gap-6 md:grid-cols-3">
            {jockeyPoints.map((p) => (
              <StaggerItem key={p.title} className="h-full">
                <div className="flex h-full flex-col border border-white/10 bg-white/5 p-7 backdrop-blur-sm">
                  <p className="text-[10px] font-bold tracking-[0.35em] text-gold-400">
                    {p.en}
                  </p>
                  <h3 className="mt-3 font-serif text-lg font-bold text-white">
                    {p.title}
                  </h3>
                  <div className="mt-4 h-[3px] w-10 rule-gold" />
                  <p className="mt-5 flex-1 text-[13px] leading-7 text-white/80">
                    {p.desc}
                  </p>
                </div>
              </StaggerItem>
            ))}
          </Stagger>

          <FadeUp delay={0.15}>
            <div className="mx-auto mt-14 grid max-w-4xl items-center gap-8 md:grid-cols-[auto_1fr]">
              <div className="text-center md:border-r md:border-white/15 md:pr-10">
                <p className="text-[11px] font-bold tracking-[0.3em] text-gold-400">
                  JOCKEY EXAM RESULTS
                </p>
                <div className="mt-2 flex items-baseline justify-center gap-1">
                  <Counter
                    to={38}
                    className="font-serif text-6xl font-bold text-white"
                  />
                  <span className="font-serif text-2xl font-bold text-gold-400">
                    名
                  </span>
                </div>
                <p className="mt-2 text-xs font-bold text-white/80">
                  騎手課程合格（開校以来12年間）
                </p>
              </div>
              <div>
                <p className="text-sm leading-8 text-white/80">
                  受験も、トレーニングも、体重管理も。ひとりで抱えるには大きすぎる挑戦を、担任・講師・寮のスタッフみんなで支えます。中学3年生を対象にした騎手受験事前合宿もご用意しています。
                </p>
                <div className="mt-6 flex flex-wrap gap-4">
                  <Link
                    href="/jockey"
                    className="group inline-flex items-center gap-3 rounded-full bg-sun-500 px-7 py-3.5 text-sm font-bold text-pine-950 shadow-soft transition hover:bg-sun-400 hover:shadow-lift"
                  >
                    騎手受験特別コースを詳しく見る
                    <span className="transition-transform duration-300 group-hover:translate-x-1.5">
                      →
                    </span>
                  </Link>
                  <Link
                    href="/camp"
                    className="inline-flex items-center gap-3 rounded-full border-2 border-white/70 px-7 py-3.5 text-sm font-bold text-white transition hover:bg-white/10"
                  >
                    騎手受験事前合宿（中3対象）
                  </Link>
                </div>
                <p className="mt-4 text-[11px] leading-5 text-white/60">
                  ※出願には体重45kg以下などの条件があります。詳しくは募集要項・専用ページをご確認ください。
                </p>
              </div>
            </div>
          </FadeUp>
        </div>
      </section>

      {/* 共通カリキュラム */}
      <Section id="kyotsu" className="scroll-mt-20 texture-paper">
        <SectionTitle
          en="COMMON CURRICULUM"
          align="center"
          title="どのコースでも、共通で学べること。"
          lead="コースの違いはあっても、バジガクの土台はひとつ。資格も、実習も、インターンも、高校授業も——3年間の学びを支える共通のカリキュラムです。"
        />
        <Stagger className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-4">
          {kyotsuItems.map((item) => (
            <StaggerItem key={item.no} className="h-full">
              <div className="flex h-full flex-col bg-white p-7 shadow-soft transition duration-300 hover:-translate-y-1.5 hover:shadow-lift">
                <span className="font-serif text-3xl font-bold text-gold-500">
                  {item.no}
                </span>
                <h3 className="mt-3 font-serif text-lg font-bold text-pine-950">
                  {item.title}
                </h3>
                <div className="mt-3 h-[3px] w-10 rule-gold" />
                <p className="mt-4 flex-1 text-[13px] leading-6 text-ink-700">
                  {item.desc}
                </p>
              </div>
            </StaggerItem>
          ))}
        </Stagger>

        {/* curriculum table */}
        <div className="mt-20 md:mt-24">
          <div className="grid gap-10 lg:grid-cols-[320px_1fr] lg:gap-16">
            <div>
              <SectionTitle
                en="CURRICULUM"
                title="履修科目と馬の学び（一例）"
                lead="「馬と過ごす時間」は、遊びではなく学びそのもの。大会への出場も、ライセンス取得も、インターンシップも、履修科目の学習成果として単位認定されます。"
              />
            </div>
            <FadeUp delay={0.1}>
              <div className="overflow-x-auto bg-white shadow-soft">
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

      {/* コース選択の流れ */}
      <Section id="flow" className="scroll-mt-20 bg-white">
        <SectionTitle
          en="HOW TO CHOOSE"
          align="center"
          title="コース選択の流れ"
          lead="入口の選択は、たった2つ。あとは馬と過ごしながら、担任と一緒に少しずつ道を決めていけば大丈夫です。"
        />
        <Stagger className="mt-14 grid items-stretch gap-4 lg:grid-cols-[1fr_auto_1fr_auto_1fr] lg:gap-2">
          {/* STEP 1 */}
          <StaggerItem className="h-full">
            <div className="flex h-full flex-col border border-cream-300 bg-white p-7 shadow-soft">
              <p className="text-[10px] font-bold tracking-[0.35em] text-gold-600">
                STEP 01
              </p>
              <h3 className="mt-2 font-serif text-lg font-bold text-pine-950">
                入学時に、2つから選ぶ
              </h3>
              <p className="mt-3 text-[13px] leading-6 text-ink-700">
                在学中に騎手（JRA・地方競馬）を目指すなら「騎手受験特別コース」、それ以外の方は「一般高校乗馬コース」からのスタートです。
              </p>
              <div className="mt-5 space-y-3">
                <div className="flex items-center gap-3 bg-pine-50 px-4 py-3">
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
                <div className="flex items-center gap-3 bg-cream-100 px-4 py-3">
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
            <div className="flex h-full flex-col border border-cream-300 bg-white p-7 shadow-soft">
              <p className="text-[10px] font-bold tracking-[0.35em] text-gold-600">
                STEP 02
              </p>
              <h3 className="mt-2 font-serif text-lg font-bold text-pine-950">
                2年次以降、道を広げる
              </h3>
              <p className="mt-3 text-[13px] leading-6 text-ink-700">
                競走馬に関わりたくなったら、2年次10月以降に「競走馬厩務員コース」へ。乗馬コースを続けて馬術を深めるのも、もちろん王道です。
              </p>
              <div className="mt-5 space-y-3">
                <div className="flex items-center gap-3 bg-cream-100 px-4 py-3">
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
                <div className="flex items-center gap-3 bg-pine-50 px-4 py-3">
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
            <div className="flex h-full flex-col border border-cream-300 bg-white p-7 shadow-soft">
              <p className="text-[10px] font-bold tracking-[0.35em] text-gold-600">
                STEP 03
              </p>
              <h3 className="mt-2 font-serif text-lg font-bold text-pine-950">
                3年次、挑戦と進路決定
              </h3>
              <p className="mt-3 text-[13px] leading-6 text-ink-700">
                競走馬厩務員コースの希望者は、3年次にJRA競馬学校 厩務員課程の受験へ。牧場・乗馬クラブへの就職や、進学・一般就職を選ぶ生徒もいます。
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

        {/* closing */}
        <div className="mt-20 grid items-center gap-10 lg:grid-cols-2">
          <ScaleIn className="overflow-hidden shadow-lift">
            <Image
              src="/images/ippan_002_1.jpg"
              alt="仲間と馬と過ごすバジガクの高校生活"
              width={1200}
              height={800}
              className="h-64 w-full object-cover md:h-72"
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
              入学の時点で、将来の答えを用意しておく必要はありません。馬と仲間と先生に囲まれた3年間が、進みたい道を少しずつ照らしてくれます。進路選びは焦らず、一緒に考えていきましょう。
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

      {/* 資料請求・オープンキャンパス slim banner */}
      <section id="shiryo" className="scroll-mt-20 bg-cream-100 py-10 md:py-12">
        <div className="mx-auto max-w-7xl px-6">
          <FadeUp>
            <div className="flex flex-col items-center justify-between gap-6 border border-gold-500/40 bg-white px-7 py-7 shadow-soft md:flex-row md:px-10">
              <div className="text-center md:text-left">
                <p className="text-[10px] font-bold tracking-[0.35em] text-gold-600">
                  NEXT STEP
                </p>
                <p className="mt-2 font-serif text-lg font-bold text-pine-950 md:text-xl">
                  まずは、バジガクの空気にふれてみませんか。
                </p>
                <p className="mt-1 text-[12px] text-ink-700">
                  資料請求は無料。オープンキャンパスでは、馬たちが待っています。
                </p>
              </div>
              <div className="flex flex-wrap justify-center gap-3">
                <a
                  href={site.forms.shiryo}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group inline-flex items-center gap-2 rounded-full bg-sun-500 px-6 py-3 text-sm font-bold text-pine-950 shadow-soft transition hover:bg-sun-400 hover:shadow-lift"
                >
                  無料で資料請求
                  <span className="transition-transform duration-300 group-hover:translate-x-1">
                    →
                  </span>
                </a>
                <Link
                  href="/opencampus"
                  className="inline-flex items-center gap-2 rounded-full border-2 border-pine-800 px-6 py-3 text-sm font-bold text-pine-800 transition hover:bg-pine-50"
                >
                  オープンキャンパスを見る
                </Link>
              </div>
            </div>
          </FadeUp>
        </div>
      </section>

      <CTABand />
    </>
  );
}
