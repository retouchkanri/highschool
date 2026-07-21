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
  title: "JRA厩務員を目指す方へ（競走馬厩務員コース）",
  description:
    "東関東馬事高等学院の競走馬厩務員コース。厩務員の仕事内容から、実技・筆記・面接の受験サポート、現役競走馬約20頭で学ぶ特別カリキュラム、JRA競馬学校 厩務員課程受験までのロードマップ、合格実績（受験33名全員一次通過・最終合格24名）までを詳しくご紹介します。",
};

/* ---------------- 厩務員の仕事内容 ---------------- */

const groomJobs = [
  {
    title: "飼養管理",
    desc: "エサの配合と給餌、そして健康観察。馬の体調の変化は、まず「食べ方」に表れます。",
  },
  {
    title: "馬房管理",
    desc: "馬房の清掃や寝ワラの交換。担当馬が心から安心して休める環境を毎日整えます。",
  },
  {
    title: "手入れ",
    desc: "ブラッシングなどの馬体ケア。触れながら、脚元や体調のわずかな異変にいち早く気づきます。",
  },
  {
    title: "調教補助",
    desc: "調教への送り出しや運動の補助。強い馬づくりを、いちばん近い場所で支えます。",
  },
  {
    title: "レース帯同",
    desc: "レース当日は競馬場まで帯同。パドックでも、ゲートに向かうその瞬間まで担当馬に寄り添います。",
  },
];

/* ---------------- 受験サポート6項目 ---------------- */

const supports = [
  {
    no: "01",
    tag: "実技（騎乗）対策",
    title: "現役競走馬とともに磨く騎乗技術",
    desc: "毎日の騎乗運動管理そのものが、実技試験への何よりの備え。約20頭の現役競走馬とともに、受験で求められる騎乗技術を実践の中で積み上げます。",
  },
  {
    no: "02",
    tag: "学科（筆記）対策",
    title: "筆記試験対策を高校授業に内蔵",
    desc: "現代文・日本史・現代社会などの授業に、厩務員課程受験の筆記試験対策用オリジナルワークを組み込み。日々の高校授業が、そのまま受験勉強になります。",
  },
  {
    no: "03",
    tag: "面接対策",
    title: "自分の言葉で語れる面接練習",
    desc: "「聞く書く話す」や総合的学習の時間で、自己分析・心構え・振り返り記録を積み重ね。面接の場で、馬への想いを自分の言葉で伝える力を育てます。",
  },
  {
    no: "04",
    tag: "現場を知る",
    title: "美浦トレーニングセンター見学",
    desc: "JRAの調教拠点・美浦トレセンを在学中に見学。厩務員が働く現場の空気に触れることで、目指す場所がはっきりとイメージできるようになります。",
  },
  {
    no: "05",
    tag: "プロに学ぶ",
    title: "現役プロによる特別授業",
    desc: "JRAの現役騎手・調教助手・厩務員などを定期的に学校へ招き、第一線のリアルな話を聞ける特別授業を開催しています。",
  },
  {
    no: "06",
    tag: "連携・授業編成",
    title: "合格者輩出牧場との連携",
    desc: "厩務員課程の合格者を多数輩出してきた育成牧場と連携。受験の最新動向を、高校授業の編成そのものに反映しています。",
  },
];

/* ---------------- 特別カリキュラム 3つの柱 ---------------- */

const pillars = [
  {
    no: "01",
    en: "RIDING",
    title: "騎乗訓練",
    sub: "現役競走馬の騎乗運動管理",
    desc: "教材であり相棒は、学校所有の冠名「バジガク」現役競走馬 約20頭。実際にレースへ出走する馬たちの運動管理から調教トレーニングまで、競走馬にまたがる時間を毎日の授業として重ねます。",
  },
  {
    no: "02",
    en: "STABLE WORK",
    title: "厩舎実習",
    sub: "飼養管理・馬匹管理",
    desc: "エサの配合を考える飼養管理、馬体をケアする馬匹管理を、生徒自身が担当馬に対して実践。担当馬は最短でレースの10日前まで生徒の手でコンディションを整え、本番から逆算する厩舎の仕事を体得します。",
  },
  {
    no: "03",
    en: "PHYSICAL",
    title: "フィジカル",
    sub: "体力・体重管理",
    desc: "馬を支える仕事は、まず自分の身体づくりから。体育の授業で騎乗適性を高めるトレーニングと記録を重ね、体力測定や体重測定のデータを授業でグラフ化しながら、プロに必要な自己管理の習慣を育てます。",
  },
];

/* ---------------- 履修科目一例 ---------------- */

const curriculum = [
  { subject: "現代文B", content: "厩務員課程受験の筆記試験対策用オリジナルワーク" },
  { subject: "社会と情報", content: "運動機能検査の体力測定、体重測定グラフの作成 など" },
  { subject: "日本史B", content: "厩務員課程受験の筆記試験対策用オリジナルワーク" },
  { subject: "総合的学習", content: "受験に向けた学校生活、心構え、自己分析、振り返り記録" },
  { subject: "地理B", content: "国内にあるJRA競馬場・地方競馬場の所在地とその特徴" },
  { subject: "就業体験A", content: "競馬場見学、職場見学、現役騎手との対談レポート" },
  { subject: "現代社会", content: "騎手課程受験の筆記試験対策用オリジナルワーク" },
  { subject: "課題研究A", content: "自分が担当する馬の報告書、馬匹管理レポート" },
  { subject: "体育", content: "騎乗適性検査（騎乗試験）に向けた騎乗記録と検定取得、競技歴" },
  { subject: "聞く書く話す", content: "受験の面接に向けたトレーニングレポート" },
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

const results = [
  { year: "令和3年度", term: "後期", applied: 5, first: 5, passed: 4 },
  { year: "令和3年度", term: "前期", applied: 5, first: 5, passed: 3 },
  { year: "令和2年度", term: "後期", applied: 4, first: 4, passed: 2 },
  { year: "令和2年度", term: "前期", applied: 4, first: 4, passed: 4 },
  { year: "令和元年度", term: "後期", applied: 2, first: 2, passed: 1 },
  { year: "令和元年度", term: "前期", applied: 4, first: 4, passed: 4 },
  { year: "平成30年度", term: "後期", applied: 2, first: 2, passed: 1 },
  { year: "平成30年度", term: "前期", applied: 4, first: 4, passed: 2 },
  { year: "平成29年度", term: "後期", applied: 2, first: 2, passed: 2 },
  { year: "平成29年度", term: "前期", applied: 1, first: 1, passed: 1 },
];

const totalApplied = results.reduce((sum, r) => sum + r.applied, 0); // 33
const totalFirst = results.reduce((sum, r) => sum + r.first, 0); // 33
const totalPassed = results.reduce((sum, r) => sum + r.passed, 0); // 24

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
        image="/images/kyumuin_001_1.jpg"
        en="GROOM COURSE"
        title="在学中にJRA競馬学校 厩務員課程を目指す"
        lead="現役競走馬の飼養・馬匹・調教管理を高校授業で実践し、高校3年次にJRA競馬学校 厩務員課程の受験に挑戦。競走馬厩務員コースは、JRA厩務員への最短ルートです。"
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
                  厩務員とは——
                  <br />
                  馬の毎日を支える専門職。
                </>
              }
              lead="競走馬のいちばん近くで、その馬の生活すべてに責任を持つ。それが厩務員の仕事です。トレーニングセンターの厩舎に所属し、一人が数頭の担当馬を受け持って、朝の飼い付けからレースの帯同まで寄り添います。華やかな舞台の裏側で、馬体のわずかな変化に最初に気づけるのは、毎日そばにいる厩務員だけ。競馬というスポーツを根っこから支える、誇りある専門職です。"
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
                  JRA厩務員への道
                </h3>
                <p className="mt-2 text-[13px] leading-7 text-ink-700">
                  JRA競馬学校「厩務員課程」を修了し、JRAトレーニングセンターの厩舎に所属するのが王道ルート。本校では高校3年次に、在学中の受験に挑戦できます。
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
                  地方競馬の厩務員として、あるいは生産・育成牧場のスタッフとして競走馬を育てる道も。どの道に進んでも「馬の毎日を支える」専門性がそのまま生きます。
                </p>
              </div>
              <p className="text-[11px] leading-6 text-ink-500">
                ※JRA競馬学校 厩務員課程の応募には、騎乗経験や年齢などの要件が定められています。最新の募集要項を必ずご確認ください。
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
            受験のチャンスは高校3年次の前期・後期の2回。
            <br className="hidden md:block" />
            地方競馬の厩務員や育成・生産牧場を目指す生徒にも、そのまま生きるサポート体制です。
          </p>
        </FadeUp>
      </Section>

      {/* (4) 特別カリキュラム */}
      <Section id="curriculum" className="bg-white">
        <SectionTitle
          en="SPECIAL CURRICULUM"
          align="center"
          title="現役競走馬約20頭と学ぶ、特別カリキュラム"
          lead="競走馬厩務員コースの教材は、教科書だけではありません。学校所有の冠名「バジガク」現役競走馬たち。デビューからレース本番までを支える厩務員の実務を、3つの柱で毎日の高校授業に落とし込んでいます。"
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
            手をかけて育てた「バジガク」の馬たちがレースに出走。生徒たちも競馬場へ足を運び、担当馬の走りを見届けます。
          </p>
        </FadeUp>
        <FadeUp delay={0.1} className="mt-16">
          <p className="text-center text-[11px] font-bold tracking-[0.35em] text-gold-600">
            SUBJECTS
          </p>
          <h3 className="mt-2 text-center font-serif text-2xl font-bold text-pine-950 md:text-3xl">
            履修科目の一例
          </h3>
          <p className="mx-auto mt-4 max-w-2xl text-center text-sm leading-7 text-ink-700">
            高校の授業そのものが、厩務員課程の受験準備につながる。バジガクならではの科目編成です。
          </p>
          <div className="mt-8 overflow-x-auto border border-cream-300 shadow-soft">
            <table className="w-full min-w-[560px] text-left text-sm">
              <thead>
                <tr className="bg-pine-800 text-[12px] tracking-wider text-white">
                  <th className="w-44 px-5 py-4 font-bold">科目</th>
                  <th className="px-5 py-4 font-bold">学習内容（例）</th>
                </tr>
              </thead>
              <tbody>
                {curriculum.map((c, i) => (
                  <tr
                    key={c.subject}
                    className={`border-t border-cream-300 ${
                      i % 2 === 1 ? "bg-cream-100" : "bg-white"
                    }`}
                  >
                    <td className="px-5 py-3.5 font-bold text-pine-950">{c.subject}</td>
                    <td className="px-5 py-3.5 leading-7 text-ink-700">{c.content}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p className="mt-4 text-center text-[11px] leading-6 text-ink-500">
            ※履修科目・学習内容は一例です。年度により変更となる場合があります。
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
                ロードマップを支える、
                <br />
                豊富なインターンシップ
              </h3>
              <p className="mt-5 text-sm leading-8 text-ink-700">
                2年次以降、学校の定める競走馬実践カリキュラムを修了した生徒から順に、全国の牧場での実地研修が始まります。研修先は、バジガクが持つ全国の馬関連求人ネットワークの中から、一人ひとりの希望に合わせて選択。在学中に複数の現場を経験できるから、技術も視野も広がり、自分に合った進路をじっくり見極められます。
              </p>
              <div className="mt-7 grid grid-cols-2 gap-4">
                <div className="bg-cream-100 p-5 text-center">
                  <p className="font-serif text-3xl font-bold text-pine-800 md:text-4xl">
                    <Counter to={350} suffix="件超" />
                  </p>
                  <p className="mt-2 text-xs font-bold text-ink-700">
                    全国の馬関連求人情報
                  </p>
                </div>
                <div className="bg-cream-100 p-5 text-center">
                  <p className="font-serif text-3xl font-bold text-pine-800 md:text-4xl">
                    約<Counter to={3} suffix="か所" />
                    <span className="text-lg">以上</span>
                  </p>
                  <p className="mt-2 text-xs font-bold text-ink-700">
                    在学中に経験できる牧場数
                  </p>
                </div>
              </div>
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
            lead="平成29年度から令和3年度までの5年間、受験者は全員が一次試験を通過。高校在学中の現役合格者も続々と誕生しています。"
          />
          <Stagger className="mt-12 grid grid-cols-1 gap-6 sm:grid-cols-3">
            {[
              { value: totalApplied, label: "受験者数（累計）", note: "平成29年度〜令和3年度" },
              { value: totalFirst, label: "一次試験通過（累計）", note: "受験者全員が一次を通過" },
              { value: totalPassed, label: "最終合格（累計）", note: "高校在学中の現役合格も多数" },
            ].map((s) => (
              <StaggerItem key={s.label} className="text-center">
                <div className="border border-white/10 bg-white/5 p-8 backdrop-blur-sm">
                  <p className="font-serif text-5xl font-bold text-sun-400">
                    <Counter to={s.value} suffix="名" />
                  </p>
                  <p className="mt-3 text-sm font-bold text-white">{s.label}</p>
                  <p className="mt-1 text-[11px] text-white/60">{s.note}</p>
                </div>
              </StaggerItem>
            ))}
          </Stagger>
          <FadeUp delay={0.15} className="mt-12">
            <div className="overflow-x-auto border border-white/10">
              <table className="w-full min-w-[560px] text-left text-sm text-white/85">
                <thead>
                  <tr className="bg-white/10 text-[12px] tracking-wider text-gold-300">
                    <th className="px-5 py-4 font-bold">年度</th>
                    <th className="px-5 py-4 font-bold">期</th>
                    <th className="px-5 py-4 text-right font-bold">受験者数</th>
                    <th className="px-5 py-4 text-right font-bold">一次試験通過</th>
                    <th className="px-5 py-4 text-right font-bold">最終合格</th>
                  </tr>
                </thead>
                <tbody>
                  {results.map((r) => (
                    <tr
                      key={`${r.year}-${r.term}`}
                      className="border-t border-white/10 transition hover:bg-white/5"
                    >
                      <td className="px-5 py-3.5 font-bold text-white">{r.year}</td>
                      <td className="px-5 py-3.5">{r.term}</td>
                      <td className="px-5 py-3.5 text-right">{r.applied}名</td>
                      <td className="px-5 py-3.5 text-right">{r.first}名</td>
                      <td className="px-5 py-3.5 text-right font-bold text-sun-400">
                        {r.passed}名
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            <p className="mt-4 text-center text-[11px] leading-6 text-white/55">
              ※東関東馬事専門学院・東関東馬事高等学院の在校生・卒業生の合格実績です。
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
