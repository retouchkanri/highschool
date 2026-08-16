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
  title: {
    absolute: "馬を学べる高校のコース紹介｜乗馬・JRA厩務員・騎手｜馬の高校　東関東馬事高等学院",
  },
  description:
    "馬を学べる高校・東関東馬事高等学院のコース紹介。未経験から学べる一般高校乗馬コース、JRA厩務員や競走馬の仕事を目指す競走馬厩務員コース、JRA・地方競馬の騎手を目指す騎手受験特別コースを設置。高校卒業資格を取得しながら、馬と過ごす3年間で夢や進路を見つける高校",
  keywords: [
    "馬の高校",
    "馬の学校",
    "馬を学べる高校",
    "乗馬高校",
    "馬術高校",
    "東関東馬事高等学院",
    "バジガク",
    "JRA厩務員",
    "JRA厩務員になるには",
    "騎手になるには",
    "騎手学校",
    "JRA競馬学校",
    "競走馬",
    "競走馬厩務員",
    "乗馬学校",
    "馬術学校",
    "馬の仕事",
    "牧場就職",
    "乗馬クラブ就職",
  ],
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
          入学者の多くは、乗馬未経験からのスタート。一人ひとりの経験や目標に合わせて学ぶため、初めてでも安心です。入学後は自分の「担当馬」を持ち、毎日のお世話や騎乗を通して、馬との信頼関係を育んでいきます。
        </p>
        <p className="mt-4">
          1歳の若馬から養老馬まで、さまざまな馬と出会えるのも本校ならでは。「将来はまだ決まっていない」でも大丈夫。馬と過ごす3年間の中で、好きなこと、得意なこと、そして自分らしい未来を見つけていきます。
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
        馬術大会に何度でも挑戦。
        <br />
        大会出場費用は、学校が全額負担。
      </>
    ),
    body: (
      <>
        <p>
          本校では、日々の騎乗授業で身につけた技術を試す場として、さまざまな馬術大会への出場機会を設けています。エントリー費・登録費・馬の輸送費など、大会出場にかかる諸経費は学校が全額負担。技術の成長に合わせて、積極的に挑戦できます。
        </p>
        <p className="mt-4">
          入学時は未経験だった生徒も、成長に応じて大会出場を目指すことができ、全国高校生馬術選手権大会への出場実績もあります。また、騎乗レベルに応じた乗馬ライセンスの取得も可能です。大会への出場や成績は高校の履修科目として単位認定。馬術への挑戦が、高校卒業の学びにもつながります。
        </p>
      </>
    ),
  },
  {
    no: "03",
    img: "/images/ippan_003_1-2.jpg",
    alt: "引退競走馬のリトレーニングに取り組む生徒",
    title: (
      <>
        引退競走馬に、新しい未来を。
        <br />
        Retouchと連携し「リトレーニング」を学ぶ。
      </>
    ),
    body: (
      <>
        <p>
          本校では、引退馬支援団体Retouchと連携し、数多くの引退競走馬と関わりながら、競走馬から乗用馬へと転用する「リトレーニング」を実践的に学びます。速く走ることを仕事としてきた競走馬に、人との新しい関わり方や乗用馬として必要なことを一つずつ教えていく。生徒自身が日々の手入れや運動、騎乗を重ね、馬とともに成長していきます。
        </p>
        <p className="mt-4">
          リトレーニングした馬と馬術大会への出場を目指すことも。学んだ技術が、引退競走馬の新たな活躍の場と未来をつくる。それも、本校だからこそ経験できる学びです。
        </p>
      </>
    ),
  },
  {
    no: "04",
    img: "/images/ippan_001_3.jpg",
    alt: "馬場での騎乗練習",
    title: (
      <>
        3年間の経験を、そのまま進学・就職へ。
        <br />
        大学進学から、全国の馬業界まで幅広い進路。
      </>
    ),
    body: (
      <>
        <p>
          3年間で馬術大会への出場や競技実績を積み重ね、大学馬術部へのスポーツ推薦進学を目指すこともできます。実際に推薦で大学へ進学し、卒業後も馬術を続けている卒業生がいます。
        </p>
        <p className="mt-4">
          就職を希望する生徒は、在学中に複数の乗馬クラブ・観光牧場・生産牧場・育成牧場などでインターンシップを経験。実際の仕事や職場環境を確かめながら、自分に合った就職先を見つけていきます。高校3年間で積み重ねた「馬の経験」を、大学進学にも、馬業界への就職にもつなげられる。一人ひとりの希望に合わせて、その先の進路までサポートします。
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
    desc: "中央国際高等学校のネット授業を1日2〜3時間。集中して高卒資格への単位を積み重ねます。",
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
    no: "01",
    en: "EXAM PREP",
    title: "一人ひとりに合わせた騎手受験対策",
    desc: "筆記・面接・運動機能検査・騎乗適性など、騎手課程の試験内容に合わせて対策。一人ひとりの得意・不得意を把握し、必要な力を段階的に伸ばしていきます。",
  },
  {
    no: "02",
    en: "DAILY TRAINING",
    title: "毎日の生活が、騎手になるためのトレーニング",
    desc: "毎日の騎乗に加え、フィジカルトレーニングや体重管理も実施。全寮制だからこそ、食事・運動・生活習慣まで含めて、騎手受験に向けた自己管理能力を身につけます。",
  },
  {
    no: "03",
    en: "CHALLENGE",
    title: "1年次から、JRA競馬学校へ挑戦",
    desc: "入学後から受験準備を重ね、1年次の夏にはJRA競馬学校 騎手課程の受験に挑戦。JRAだけでなく、地方競馬の騎手という進路も視野に入れながら、一人ひとりの可能性を広げます。",
  },
];

/* ── 共通カリキュラム ─────────────────────── */

const kyotsuItems = [
  {
    no: "01",
    en: "LICENSE",
    title: "資格取得",
    desc: "乗馬ライセンス（全国乗馬倶楽部振興協会）、騎乗者資格（日本馬術連盟）、家畜商免許など、一人ひとりの騎乗レベルや将来の目標に合わせて、在学中の資格取得に挑戦できます。",
  },
  {
    no: "02",
    en: "FIELD LEARNING",
    title: "実習・校外学習",
    desc: "競馬場や牧場など、学校を飛び出して学ぶ機会も大切な授業のひとつ。実際の馬業界や仕事に触れながら、教室だけでは得られない経験を積み重ねていきます。",
  },
  {
    no: "03",
    en: "INTERNSHIP",
    title: "全国の馬業界でインターンシップ",
    desc: "全国の牧場・乗馬クラブなどとのネットワークを活かし、在学中に複数の現場でインターンシップを経験。実際に働いてみることで、自分に合った仕事や職場を見つけ、進路選択や就職につなげます。",
  },
  {
    no: "04",
    en: "HIGH SCHOOL STUDY",
    title: "馬を学びながら、高校卒業資格を取得",
    desc: "連携する中央国際高等学校の高校授業と、馬に関する専門的な学びを両立。高校卒業に必要な学習を進めながら、3年間、思う存分「馬」に向き合える高校生活を送ります。",
  },
];

const highSchoolClasses = [
  {
    no: "01",
    en: "ONLINE CLASSES",
    title: "毎日2〜3時間のネット授業",
    desc: "高校の授業は、連携する中央国際高等学校のインターネット授業が中心。1日あたり2〜3時間、全日制高校の半分ほどの時間で高校の学びを進め、残りの時間はすべて馬にあてられます。",
  },
  {
    no: "02",
    en: "LEARNING-BASED CREDIT",
    title: "学習成果で単位を認定",
    desc: "評価は定期テストの一発勝負ではなく、日々の学習の積み重ねが基準。理解できるところまで戻って、自分のペースでやり直せるので、勉強が苦手な生徒も無理なく学べます。",
  },
  {
    no: "03",
    en: "TEACHER SUPPORT",
    title: "教員チームによる学習サポート",
    desc: "ネット授業のサポートはもちろん、レポート指導や学習の進め方についての相談も教員チームが担当。卒業までの3年間、一人ひとりの学びにしっかり伴走します。",
  },
  {
    no: "04",
    en: "SCHOOLING",
    title: "年1回のスクーリング",
    desc: "年に1回、連携校の本校（九州）で3泊4日のスクーリングを実施。全国の仲間たちと顔を合わせながら、卒業に必要な学びを積み重ねる特別な機会です。",
  },
];

const lifeSkills = [
  {
    no: "01",
    en: "MONEY",
    title: "お金を「使う・貯める・守る・育てる」",
    desc: "給与の見方から、貯蓄、金利・利息、金融、投資、不動産まで。社会人になって必要になる「お金の基本」を学び、自分で考えて判断する力を身につけます。",
  },
  {
    no: "02",
    en: "BUSINESS",
    title: "「働く側」から「経営する側」まで考える",
    desc: "労働者・経営者・投資家、それぞれの立場や役割を学習。牧場や乗馬クラブなどを題材にした「バーチャル経営」にも挑戦し、売上・経費・利益・給与など、仕事と経営の仕組みを学びます。",
  },
  {
    no: "03",
    en: "LAW & COMPLIANCE",
    title: "知らなかったでは済まされない、法律の基本",
    desc: "民法・刑法・コンプライアンスなど、社会生活に関わる法律の基礎を学びます。契約・解約、未成年者の契約、トラブルや犯罪に関する基本的な仕組みなど、社会人として自分自身を守るための知識を身につけます。",
  },
  {
    no: "04",
    en: "CONTRACT",
    title: "契約書を「読んで考える」力",
    desc: "就職、賃貸、自動車、携帯電話、ローンなど、社会に出ればさまざまな契約と関わります。契約・解約・解除の違いや、実印・認印・押印・捺印・割印など、社会生活で必要になる基本を学びます。",
  },
  {
    no: "05",
    en: "TAX & SOCIAL INSURANCE",
    title: "「給料から、なぜ引かれる？」を理解する",
    desc: "所得税・消費税・自動車税などの税金から、健康保険・年金などの社会保険まで。給与明細を題材に、「働いたら、実際にいくら手元に残るのか」を自分で理解できる力を育てます。",
  },
  {
    no: "06",
    en: "INSURANCE & RISK",
    title: "もしもの時、自分を守る知識",
    desc: "生命保険・損害保険・自動車保険・車両保険・賠償責任など、身近な保険の役割を学習。「何となく加入する」のではなく、必要性や補償内容を自分で考えられる基礎知識を身につけます。",
  },
  {
    no: "07",
    en: "SOCIAL RESPONSIBILITY",
    title: "社会のルールと、自分を守る判断力",
    desc: "法令遵守、SNSの使い方、反社会的勢力との関係など、社会人として知っておくべきルールやリスクについて学びます。正しい知識を持ち、「していいこと・いけないこと」を自分で判断できる力を養います。",
  },
  {
    no: "08",
    en: "MANNERS & HUMANITY",
    title: "最後に大切なのは、「人として」の力。",
    desc: "挨拶、言葉遣い、礼儀、時間を守ること、感謝すること、約束を守ること。そして、周囲の人から「この人と一緒に働きたい」「この人なら応援したい」と思ってもらえる人になること。馬との生活や全寮制での共同生活を通して、一般常識・マナー・道徳・協調性・責任感を育て、社会から信頼される人材を目指します。",
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
              どのコースを選んでも、中央国際高等学校との連携により
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
            lead="馬と高校生活を楽しみながら、自分らしい進路を見つけていく3年間。馬とともに過ごし、毎日、馬たちとたっぷりの時間を過ごせるコースです。"
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
              一日は、馬に始まり、馬に終わります。騎乗・馬の管理・高校授業・実践学習など、馬を中心とした5つの学びを、一人ひとりの成長や目標に合わせて組み合わせます。
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
              lead="現役競走馬とともに、プロの「馬の仕事」を実践で学ぶコースです。1年次は「一般高校乗馬コース」において、基礎・基本を学び、2年次より、この「競走馬厩務員コース」にて、競走馬の飼養管理から騎乗・調教までを実践。JRA厩務員をはじめ、生産牧場・育成牧場など、競走馬に関わる仕事を目指します。"
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
            lead={
              <>
                「騎手になりたい。」その夢に、本気で挑める学習環境。最短で本校の1年次にJRA・地方競馬の騎手を目指せるよう、入学時から騎手受験を見据え、騎乗技術はもちろん、体力・学力・面接・体重管理まで、一人ひとりに合わせた徹底した受験対策を行います。
                <br />
                <br />
                入学後、最初の大きな目標となるのが、1年次のJRA競馬学校
                騎手課程への挑戦。学校生活そのものを、騎手になるための成長につなげていきます。
              </>
            }
          />

          <FadeUp delay={0.1} className="mx-auto mt-12 max-w-md text-center">
            <div className="flex items-baseline justify-center gap-1">
              <Counter
                to={38}
                className="font-serif text-6xl font-bold text-white md:text-7xl"
              />
              <span className="font-serif text-2xl font-bold text-gold-400">
                名
              </span>
            </div>
            <p className="mt-2 text-sm font-bold text-white">騎手課程 合格実績</p>
            <p className="mt-1 text-[11px] text-white/60">
              ※実績はJRA・地方競馬合算
            </p>
          </FadeUp>

          <Stagger className="mt-12 grid gap-6 md:grid-cols-3">
            {jockeyPoints.map((p) => (
              <StaggerItem key={p.title} className="h-full">
                <div className="flex h-full flex-col border border-white/10 bg-white/5 p-7 backdrop-blur-sm">
                  <p className="text-[10px] font-bold tracking-[0.35em] text-gold-400">
                    {p.no}｜{p.en}
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
            <div className="mx-auto mt-14 max-w-4xl">
              <p className="text-center text-sm leading-8 text-white/80 md:text-[15px]">
                一人で挑ませない。学校全体で夢を支える。騎乗技術、受験勉強、体力づくり、体重管理。騎手になるために必要なことは、一つではありません。担任・騎乗講師・寮スタッフが連携し、日々の学校生活から受験当日まで一人ひとりをサポート。「騎手になりたい」という夢に、学校全体で向き合います。
              </p>
              <div className="mt-6 flex flex-wrap justify-center gap-4">
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
              <p className="mt-4 text-center text-[11px] leading-5 text-white/60">
                ※出願には体重45kg以下などの条件があります。詳しくは募集要項・専用ページをご確認ください。
              </p>
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
          lead="選ぶコースや目指す進路は違っても、学びの土台は同じです。資格取得、校外実習、インターンシップ、高校授業、そして社会に出るための学びまで。3年間を通して、将来につながる力を身につけます。"
        />
        <Stagger className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-4">
          {kyotsuItems.map((item) => (
            <StaggerItem key={item.no} className="h-full">
              <div className="flex h-full flex-col bg-white p-7 shadow-soft transition duration-300 hover:-translate-y-1.5 hover:shadow-lift">
                <span className="text-[10px] font-bold tracking-[0.25em] text-gold-600">
                  {item.no}｜{item.en}
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

        {/* 本校の高校授業について */}
        <div className="mt-20 md:mt-24">
          <SectionTitle
            en="HIGH SCHOOL STUDY"
            align="center"
            title="本校で行う高校授業について"
            lead="高校卒業に必要な学習は、連携する中央国際高等学校のしくみで進めます。全日制のような重い時間割ではなく、馬にたっぷり向き合えるように設計された学びのスタイルです。"
          />
          <Stagger className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-4">
            {highSchoolClasses.map((c) => (
              <StaggerItem key={c.no} className="h-full">
                <div className="flex h-full flex-col bg-white p-7 shadow-soft transition duration-300 hover:-translate-y-1.5 hover:shadow-lift">
                  <span className="text-[10px] font-bold tracking-[0.25em] text-gold-600">
                    {c.no}｜{c.en}
                  </span>
                  <h3 className="mt-3 font-serif text-lg font-bold text-pine-950">
                    {c.title}
                  </h3>
                  <div className="mt-3 h-[3px] w-10 rule-gold" />
                  <p className="mt-4 flex-1 text-[13px] leading-6 text-ink-700">
                    {c.desc}
                  </p>
                </div>
              </StaggerItem>
            ))}
          </Stagger>
        </div>
      </Section>

      {/* LIFE & SOCIAL SKILLS */}
      <section className="relative overflow-hidden bg-pine-950 py-16 md:py-24">
        <div
          aria-hidden
          className="absolute inset-0 bg-cover bg-center opacity-10"
          style={{ backgroundImage: "url(/images/DSC_0028.jpg)" }}
        />
        <div className="relative mx-auto max-w-7xl px-6">
          <SectionTitle
            dark
            en="LIFE & SOCIAL SKILLS"
            align="center"
            title={
              <>
                馬の技術だけではない。
                <br />
                「社会で生きる力」まで学ぶ。
              </>
            }
            lead="高校を卒業すれば、その先には大学進学、就職、そして一人の社会人としての生活が待っています。本校が育てたいのは、「馬に乗れる人」だけではありません。お金、契約、税金、保険、法律、仕事、人との関わり方——。社会に出てから「知らなかった」で困らないために、学校生活の中で社会の仕組みを実践的に学ぶ、独自の特別授業を行います。"
          />

          <Stagger className="mt-14 grid gap-5 md:grid-cols-2 lg:grid-cols-4">
            {lifeSkills.map((s) => (
              <StaggerItem key={s.no} className="h-full">
                <div className="flex h-full flex-col border border-white/10 bg-white/5 p-6 backdrop-blur-sm transition duration-300 hover:border-gold-400/40">
                  <p className="text-[10px] font-bold tracking-[0.3em] text-gold-400">
                    {s.no}｜{s.en}
                  </p>
                  <h3 className="mt-3 font-serif text-base font-bold leading-snug text-white">
                    {s.title}
                  </h3>
                  <div className="mt-3 h-[2px] w-8 rule-gold" />
                  <p className="mt-4 flex-1 text-[13px] leading-6 text-white/75">
                    {s.desc}
                  </p>
                </div>
              </StaggerItem>
            ))}
          </Stagger>

          <FadeUp delay={0.15}>
            <div className="mx-auto mt-16 max-w-3xl text-center">
              <p className="text-sm font-bold leading-8 text-white md:text-base">
                馬から学び、社会を学ぶ。
                <br />
                馬の技術は、将来の武器に。
                <br />
                社会の知識は、自分を守る力に。
                <br />
                人としての魅力は、一生の財産に。
              </p>
              <p className="mt-6 text-sm leading-8 text-white/75">
                本校の3年間は、高校を卒業するためだけの3年間ではありません。
                <br />
                卒業後、自分で考え、自分で選び、自分の人生を歩んでいくための3年間です。
              </p>
            </div>
          </FadeUp>
        </div>
      </section>

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
