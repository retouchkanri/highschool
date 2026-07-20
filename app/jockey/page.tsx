import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import PageHero from "@/components/PageHero";
import { Section, SectionTitle } from "@/components/Section";
import { FadeUp, Stagger, StaggerItem } from "@/components/motion";
import Counter from "@/components/Counter";
import CTABand from "@/components/CTABand";

export const metadata: Metadata = {
  title: "騎手を目指す方へ（騎手受験特別コース）",
  description:
    "JRA競馬学校・地方競馬教養センターの騎手課程合格を目指す「騎手受験特別コース」。開校以来12年間で38名の合格者を輩出。受験対策がそのまま高校の単位になる独自カリキュラムと合格保証制度で、本気の挑戦を支えます。",
};

/** 騎手課程受験の選抜フロー（毎年の概数） */
const funnel = [
  {
    step: "STEP 01",
    label: "騎手課程 受験者",
    prefix: "約",
    value: 150,
    suffix: "名",
    note: "毎年、全国から騎手志望者が受験",
  },
  {
    step: "STEP 02",
    label: "第一次試験 合格",
    prefix: "",
    value: 30,
    suffix: "名",
    note: "身体検査・運動機能検査などの関門",
  },
  {
    step: "STEP 03",
    label: "最終合格",
    prefix: "7〜",
    value: 8,
    suffix: "名",
    note: "合格率わずか約5%の狭き門",
  },
];

/** JRA競馬学校 騎手課程 合格者 */
const jraResults = [
  { name: "服部 寿希", term: "第34期生" },
  { name: "荻野 極", term: "第32期生" },
  { name: "岩田 英利久", term: "第32期生" },
];

/** 地方競馬教養センター 騎手課程 合格者数（期別） */
const narResults = [
  { term: "第90期", count: "1名" },
  { term: "第91期", count: "3名" },
  { term: "第92期", count: "2名" },
  { term: "第93期", count: "5名" },
  { term: "第94期", count: "4名" },
  { term: "第95期", count: "4名" },
  { term: "第96期", count: "2名" },
  { term: "第97期", count: "2名" },
  { term: "第98期", count: "3名" },
  { term: "第99期", count: "3名" },
  { term: "第100期", count: "1名" },
  { term: "第101期", count: "1名" },
  { term: "第102期", count: "2名" },
];

/** 卒業生の女性騎手 */
const femaleJockeys = [
  { name: "木之前 葵 騎手", note: "本校1期生・名古屋競馬で活躍" },
  { name: "佐々木 世麗 騎手", note: "バジガク出身の女性ジョッキー" },
  { name: "深澤 杏花 騎手", note: "バジガク出身の女性ジョッキー" },
];

/** 受験対策9項目 */
const programs: {
  no: string;
  title: string;
  desc: string;
  img?: string;
  alt?: string;
}[] = [
  {
    no: "01",
    title: "出願サポート",
    desc: "試験は出願書類の準備から始まっています。JRA競馬学校・地方競馬教養センターへの出願を、書類の書き方から一つひとつ丁寧にサポート。手続きは生徒自身の手で行い、挑戦の第一歩から自覚を育てます。",
    img: "/images/tokubetsu_002_4.jpg",
    alt: "JRA競馬学校の出願書類",
  },
  {
    no: "02",
    title: "運動機能検査の対策",
    desc: "一次・二次試験で課される運動機能検査に向けて、毎日のトレーニングは欠かせません。走力・柔軟性・体幹まで、体力指導のメニューを積み重ねて本番に備えます。",
    img: "/images/tokubetsu_002_1.jpg",
    alt: "屋外で体力トレーニングに励む生徒たち",
  },
  {
    no: "03",
    title: "筆記試験の対策",
    desc: "国語・社会などの筆記試験は、受験動向を分析したオリジナルワークで対策。勉強が苦手な生徒も、基礎から着実に得点力を積み上げていきます。",
    img: "/images/tokubetsu_002_3.jpg",
    alt: "教室で筆記試験の勉強に取り組む生徒たち",
  },
  {
    no: "04",
    title: "面接の対策",
    desc: "集団面接・個別面接、そして保護者面接まで。本番の形式を想定した実践練習を繰り返し、自分の言葉で騎手への想いを伝えられるように鍛えます。",
    img: "/images/tokubetsu_002_5.jpg",
    alt: "教室で面接指導を受ける生徒たち",
  },
  {
    no: "05",
    title: "乗馬ライセンスの取得",
    desc: "在学中に乗馬ライセンスの取得を目指します。資格という客観的なかたちで騎乗技術を証明できることは、受験でも進路でも大きな力になります。",
  },
  {
    no: "06",
    title: "騎乗適性検査のトレーニング",
    desc: "騎乗適性検査は「姿勢・バランス・リズム」の3方向から徹底指導。バランスボードなどを使った反復練習で、騎手に求められる身体感覚を磨きます。",
    img: "/images/tokubetsu_002_6.jpg",
    alt: "板を使ったバランストレーニングに取り組む生徒たち",
  },
  {
    no: "07",
    title: "馬術競技会への出場",
    desc: "日頃の騎乗訓練の成果を、馬術大会という実戦の舞台で試します。本番の緊張感の中で力を出し切る経験が、受験当日の強さにつながります。出場費用は全額学校負担です。",
    img: "/images/tokubetsu_002_2.jpg",
    alt: "障害を越える騎乗トレーニングをする生徒",
  },
  {
    no: "08",
    title: "寮での体重・食事管理",
    desc: "体重管理は騎手受験の生命線。365日3食付きの全寮制だからこそ、毎日の食事・体重・生活リズムまで、先生と一緒にコントロールしていけます。",
  },
  {
    no: "09",
    title: "メンタルトレーニング",
    desc: "狭き門に挑む3年間を支えるのは、強い心。プレッシャーとの向き合い方や本番への整え方を指導し、その都度必要なサポートを柔軟に行います。",
  },
];

/** 高等学校履修科目と学習成果物・課題内容（令和3年度の一例） */
const curriculum = [
  { subject: "国語総合", work: "騎手課程受験の筆記試験対策用オリジナルワーク" },
  { subject: "社会と情報", work: "運動機能検査の体力測定・体重測定グラフの作成など" },
  { subject: "世界史B", work: "騎手課程受験の筆記試験対策用オリジナルワーク" },
  { subject: "総合的学習", work: "騎手受験に向けた学校生活・心構え・自己分析・振り返り記録" },
  { subject: "地理B", work: "騎手課程受験の筆記試験対策用オリジナルワーク" },
  { subject: "就業体験A", work: "競馬場見学・職場見学・現役騎手との対談レポート" },
  { subject: "現代社会", work: "騎手課程受験の筆記試験対策用オリジナルワーク" },
  { subject: "課題研究A", work: "自分が担当する馬の報告書・馬匹管理レポート" },
  { subject: "体育", work: "騎乗適性検査（騎乗試験）に向けた騎乗記録・検定取得・競技歴" },
  { subject: "聞く書く話す", work: "騎手課程受験の面接に向けたトレーニングレポート" },
];

/** 進路のセーフティネット（フロー） */
const pathFlow = [
  {
    step: "高校1年〜3年",
    title: "騎手受験特別コースで挑戦",
    desc: "受験対策の授業がそのまま高校の単位に。3年間を通じてJRA・地方競馬の騎手課程受験に挑み続けられます。",
  },
  {
    step: "進路変更するときは",
    title: "修得単位をそのまま引き継ぎ",
    desc: "騎手以外の道を選んだ場合も、修得済みの単位を引き継いで一般高校乗馬コースや競走馬厩務員コースへスムーズに移れます。学びは止まりません。",
  },
  {
    step: "その先へ",
    title: "高校卒業資格を手に次のステージへ",
    desc: "3年間在籍すれば高校卒業資格を取得。厩務員・牧場・乗馬クラブへの就職から進学まで、どの進路でも歩みを続けられます。",
  },
];

export default function JockeyPage() {
  return (
    <>
      <PageHero
        image="/images/tokubetsu_001_1.jpg"
        en="JOCKEY COURSE"
        title="JRA騎手・地方競馬騎手を本気で目指す"
        lead="難関といわれる騎手課程受験に、高校3年間まるごと挑む「騎手受験特別コース」。開校以来12年間で38名の合格者を送り出してきたバジガクが、あなたの本気に全力で応えます。"
        crumbs={[
          { label: "HOME", href: "/" },
          { label: "進路・サポート" },
          { label: "騎手を目指す方へ" },
        ]}
      />

      {/* (2) 騎手課程受験の現実 */}
      <Section className="bg-white">
        <SectionTitle
          en="THE REALITY"
          align="center"
          title="騎手課程受験は、まぎれもない難関。"
          lead="騎手になるには、JRA競馬学校または地方競馬教養センターの騎手課程に合格し、専門教育を経て騎手免許試験に合格する必要があります。その入口となる騎手課程受験は、毎年こんな数字の世界です。"
        />

        <FadeUp className="mt-12">
          <div className="relative overflow-hidden bg-pine-900 px-6 py-10 md:px-12 md:py-14">
            <div
              aria-hidden
              className="absolute inset-0 bg-cover bg-center opacity-10"
              style={{ backgroundImage: "url(/images/tokubetsu_002_2.jpg)" }}
            />
            <Stagger className="relative grid gap-10 md:grid-cols-3 md:gap-0 md:divide-x md:divide-white/10">
              {funnel.map((f) => (
                <StaggerItem key={f.step} className="px-2 text-center md:px-8">
                  <p className="text-[10px] font-bold tracking-[0.35em] text-gold-400">
                    {f.step}
                  </p>
                  <p className="mt-3 text-sm font-bold text-white">{f.label}</p>
                  <p className="mt-3 font-serif font-bold text-sun-400">
                    {f.prefix && (
                      <span className="text-2xl md:text-3xl">{f.prefix}</span>
                    )}
                    <Counter to={f.value} className="text-5xl md:text-6xl" />
                    <span className="text-2xl md:text-3xl">{f.suffix}</span>
                  </p>
                  <p className="mt-3 text-[11px] leading-5 text-white/60">
                    {f.note}
                  </p>
                </StaggerItem>
              ))}
            </Stagger>
          </div>
        </FadeUp>

        <div className="mt-14 grid gap-10 lg:grid-cols-2 lg:items-center">
          <FadeUp>
            <div className="border-l-4 border-gold-500 bg-cream-100 p-8 md:p-10">
              <p className="font-serif text-2xl font-bold leading-relaxed text-pine-950 md:text-3xl">
                それでも——
                <br />
                挑戦しなければ、可能性は0%。
              </p>
              <p className="mt-5 text-sm leading-8 text-ink-700 md:text-[15px]">
                どれだけ狭き門でも、受験しない限り合格の可能性はゼロのまま。「どうせ挑むなら、悔いが残らないほど全力で」。その覚悟を持つ人にこそ、バジガクは徹底した受験指導で応えたいと考えています。
              </p>
            </div>
          </FadeUp>
          <FadeUp delay={0.15}>
            <p className="text-sm leading-8 text-ink-700 md:text-[15px]">
              指導の中心に立つのは、これまで数多くの合格者を送り出してきた講師陣。過去の受験動向を分析し尽くし、出願から最終試験まで一切妥協のない対策を積み上げます。全力を尽くした上での結果には、はっきりと向き合う——そこまで本気の指導だからこそ、多くの騎手生が合格をつかんできました。
            </p>
            <p className="mt-4 text-sm leading-8 text-ink-700 md:text-[15px]">
              中学3年生のうちから準備を始めたい方には、騎手受験に特化した事前合宿もご用意しています。
            </p>
            <div className="mt-6 flex flex-wrap gap-4">
              <Link
                href="/camp"
                className="group inline-flex items-center gap-3 rounded-full bg-pine-800 px-7 py-3.5 text-sm font-bold text-white shadow-soft transition hover:bg-pine-700 hover:shadow-lift"
              >
                中3対象・騎手受験事前合宿
                <span className="transition-transform duration-300 group-hover:translate-x-1.5">
                  →
                </span>
              </Link>
            </div>
          </FadeUp>
        </div>
      </Section>

      {/* (3) 合格実績 */}
      <Section className="texture-paper">
        <SectionTitle
          en="RESULTS"
          align="center"
          title="開校以来12年間で、38名が騎手課程に合格。"
          lead="数字は、本気の証明です。JRA競馬学校から地方競馬教養センターまで、バジガクの騎手生たちは毎年のように難関を突破してきました。"
        />

        <FadeUp className="mt-12 text-center">
          <p className="text-[11px] font-bold tracking-[0.4em] text-gold-600">
            TOTAL
          </p>
          <p className="mt-2 font-serif font-bold text-pine-800">
            <Counter to={38} className="text-7xl md:text-8xl" />
            <span className="text-3xl md:text-4xl">名</span>
          </p>
          <p className="mt-3 text-sm text-ink-500">
            騎手課程合格者数（開校以来12年間）
          </p>
        </FadeUp>

        <Stagger className="mt-12 grid gap-6 lg:grid-cols-3">
          <StaggerItem className="h-full">
            <div className="flex h-full flex-col bg-pine-950 p-8 shadow-soft">
              <p className="text-[10px] font-bold tracking-[0.35em] text-gold-400">
                JRA
              </p>
              <h3 className="mt-2 font-serif text-xl font-bold text-white">
                JRA競馬学校 合格者
              </h3>
              <ul className="mt-6 flex-1 space-y-4">
                {jraResults.map((j) => (
                  <li
                    key={j.name}
                    className="flex items-baseline justify-between gap-4 border-b border-white/10 pb-4"
                  >
                    <span className="font-serif text-lg font-bold text-white">
                      {j.name}
                    </span>
                    <span className="shrink-0 text-xs font-bold text-gold-300">
                      {j.term}
                    </span>
                  </li>
                ))}
              </ul>
              <p className="mt-6 text-[11px] leading-5 text-white/60">
                中央競馬の舞台へ。バジガクからJRAジョッキーが誕生しています。
              </p>
            </div>
          </StaggerItem>

          <StaggerItem className="h-full">
            <div className="flex h-full flex-col bg-white p-8 shadow-soft">
              <p className="text-[10px] font-bold tracking-[0.35em] text-gold-600">
                NAR
              </p>
              <h3 className="mt-2 font-serif text-xl font-bold text-pine-950">
                地方競馬教養センター 合格者
              </h3>
              <div className="mt-6 grid flex-1 grid-cols-3 gap-2">
                {narResults.map((n) => (
                  <div
                    key={n.term}
                    className="border border-cream-300 bg-cream-100 px-2 py-3 text-center"
                  >
                    <p className="text-[10px] font-bold text-ink-500">
                      {n.term}
                    </p>
                    <p className="mt-1 font-serif text-base font-bold text-pine-800">
                      {n.count}
                    </p>
                  </div>
                ))}
              </div>
              <p className="mt-6 text-[11px] leading-5 text-ink-500">
                第90期から第102期まで、途切れることなく合格者を輩出し続けています。
              </p>
            </div>
          </StaggerItem>

          <StaggerItem className="h-full">
            <div className="flex h-full flex-col border-2 border-gold-500/40 bg-white p-8 shadow-soft">
              <p className="text-[10px] font-bold tracking-[0.35em] text-gold-600">
                FEMALE JOCKEYS
              </p>
              <h3 className="mt-2 font-serif text-xl font-bold text-pine-950">
                女性騎手も誕生
              </h3>
              <ul className="mt-6 flex-1 space-y-4">
                {femaleJockeys.map((f) => (
                  <li key={f.name} className="border-b border-cream-300 pb-4">
                    <p className="font-serif text-lg font-bold text-pine-950">
                      {f.name}
                    </p>
                    <p className="mt-1 text-xs text-ink-500">{f.note}</p>
                  </li>
                ))}
              </ul>
              <p className="mt-6 text-[11px] leading-5 text-ink-500">
                女性ジョッキーの活躍が広がる今、バジガクから続く先輩たちがいます。
              </p>
            </div>
          </StaggerItem>
        </Stagger>

        <FadeUp className="mt-8">
          <p className="text-center text-[11px] text-ink-500">
            ※上記は、運営会社が手がける東関東ジョッキークラブと東関東馬事高等学院を合わせた合格実績です。
          </p>
        </FadeUp>
      </Section>

      {/* (4) 受験対策9項目 */}
      <section className="bg-pine-950 py-16 md:py-24">
        <div className="mx-auto max-w-7xl px-6">
          <SectionTitle
            dark
            en="9 PROGRAMS"
            align="center"
            title="合格から逆算した、9つの受験対策"
            lead="出願書類の一枚から本番当日のメンタルまで。騎手課程受験に必要なすべてを、9つの柱で徹底的にサポートします。"
          />
          <Stagger className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {programs.map((p) => (
              <StaggerItem key={p.no} className="h-full">
                {p.img ? (
                  <div className="flex h-full flex-col overflow-hidden bg-white shadow-soft transition duration-300 hover:-translate-y-1.5 hover:shadow-lift">
                    <div className="relative h-44 overflow-hidden">
                      <Image
                        src={p.img}
                        alt={p.alt ?? p.title}
                        fill
                        sizes="(max-width: 768px) 100vw, 33vw"
                        className="object-cover transition-transform duration-700 hover:scale-110"
                      />
                      <span className="absolute left-4 top-4 rounded-full bg-pine-950/85 px-3.5 py-1.5 font-serif text-xs font-bold tracking-[0.2em] text-gold-300 backdrop-blur-sm">
                        {p.no}
                      </span>
                    </div>
                    <div className="flex flex-1 flex-col p-6">
                      <h3 className="font-serif text-lg font-bold text-pine-950">
                        {p.title}
                      </h3>
                      <p className="mt-3 flex-1 text-[13px] leading-7 text-ink-700">
                        {p.desc}
                      </p>
                    </div>
                  </div>
                ) : (
                  <div className="flex h-full flex-col border border-gold-500/30 bg-pine-900 p-6 transition duration-300 hover:-translate-y-1.5 hover:shadow-lift">
                    <span className="font-serif text-3xl font-bold text-gold-400">
                      {p.no}
                    </span>
                    <h3 className="mt-3 font-serif text-lg font-bold text-white">
                      {p.title}
                    </h3>
                    <p className="mt-3 flex-1 text-[13px] leading-7 text-white/75">
                      {p.desc}
                    </p>
                  </div>
                )}
              </StaggerItem>
            ))}
          </Stagger>
        </div>
      </section>

      {/* (5) 受験対策＝高校の単位 */}
      <Section className="texture-paper">
        <SectionTitle
          en="CURRICULUM"
          title={
            <>
              受験対策が、そのまま
              <br className="hidden md:block" />
              高校の単位になる。
            </>
          }
          lead="バジガクの大きな特徴は、騎手受験対策そのものを高校の授業カリキュラムとして編成していること。トレーニングも騎乗も面接練習も、そのほとんどが高校卒業資格の単位修得につながります。「騎手受験に本気で取り組みたい。でも高校にも進学したい」——その両方を、あきらめる必要はありません。"
        />

        <Stagger className="mt-10 grid gap-4 md:grid-cols-3">
          {[
            {
              title: "受験勉強＝高校の勉強",
              desc: "筆記対策のワークや騎乗記録が、そのまま履修科目の学習成果物に。",
            },
            {
              title: "受験だけに集中できる",
              desc: "単位のための別勉強に追われず、3年間を騎手受験に注ぎ込めます。",
            },
            {
              title: "進路変更しても単位は有効",
              desc: "修得した単位は高校卒業に必要な単位。どの進路でも無駄になりません。",
            },
          ].map((b) => (
            <StaggerItem key={b.title} className="h-full">
              <div className="h-full border border-cream-300 bg-white p-6 shadow-soft">
                <p className="font-serif text-base font-bold text-pine-950">
                  {b.title}
                </p>
                <p className="mt-2 text-[13px] leading-6 text-ink-700">
                  {b.desc}
                </p>
              </div>
            </StaggerItem>
          ))}
        </Stagger>

        <FadeUp className="mt-12">
          <div className="overflow-hidden bg-white shadow-soft">
            <div className="overflow-x-auto">
              <table className="w-full min-w-[640px] text-left text-sm">
                <thead>
                  <tr className="bg-pine-800 text-white">
                    <th className="whitespace-nowrap px-6 py-4 font-serif text-sm font-bold">
                      高等学校 履修科目
                    </th>
                    <th className="px-6 py-4 font-serif text-sm font-bold">
                      学習成果物・課題内容
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {curriculum.map((c, i) => (
                    <tr
                      key={c.subject}
                      className={i % 2 === 0 ? "bg-white" : "bg-cream-100"}
                    >
                      <th className="whitespace-nowrap border-t border-cream-300 px-6 py-4 text-left font-bold text-pine-950">
                        {c.subject}
                      </th>
                      <td className="border-t border-cream-300 px-6 py-4 leading-7 text-ink-700">
                        {c.work}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
          <p className="mt-4 text-[11px] text-ink-500">
            ※令和3年度の履修科目の一例です。年度により内容は変わることがあります。
          </p>
        </FadeUp>
      </Section>

      {/* (6) 合格保証制度 */}
      <Section className="bg-white">
        <FadeUp>
          <div className="relative overflow-hidden border-2 border-gold-500 bg-pine-950 px-6 py-12 text-center md:px-12 md:py-16">
            <div
              aria-hidden
              className="absolute -left-16 -top-16 h-64 w-64 rounded-full bg-gold-500/15 blur-3xl"
            />
            <div
              aria-hidden
              className="absolute -bottom-16 -right-16 h-64 w-64 rounded-full bg-sun-500/10 blur-3xl"
            />
            <div className="relative">
              <p className="text-[11px] font-bold tracking-[0.4em] text-gold-400">
                GUARANTEE
              </p>
              <h2 className="mt-3 font-serif text-2xl font-bold text-white md:text-4xl">
                本気の指導だから、つけられる。
                <br />
                「合格保証制度」
              </h2>
              <p className="mx-auto mt-6 max-w-2xl text-sm leading-8 text-white/80 md:text-[15px]">
                1年目の騎手課程受験で不合格となり、2年目も本校で受験への挑戦を続ける場合——
              </p>
              <p className="mt-6 font-serif font-bold text-sun-400">
                <span className="text-lg md:text-2xl">1年目の授業費</span>
                <span className="mx-2 text-4xl md:text-6xl">1,690,000円</span>
                <span className="text-lg md:text-2xl">を全額返金</span>
              </p>
              <div className="mx-auto mt-10 grid max-w-3xl gap-3 md:grid-cols-3">
                {[
                  { step: "1年目", text: "騎手課程受験に挑戦し、不合格" },
                  { step: "2年目", text: "本校で受験への挑戦を継続" },
                  { step: "そのとき", text: "1年目授業費を全額返金" },
                ].map((s) => (
                  <div
                    key={s.step}
                    className="border border-white/15 bg-white/5 px-4 py-5"
                  >
                    <p className="text-[10px] font-bold tracking-[0.3em] text-gold-300">
                      {s.step}
                    </p>
                    <p className="mt-2 text-xs font-bold leading-5 text-white">
                      {s.text}
                    </p>
                  </div>
                ))}
              </div>
              <p className="mx-auto mt-8 max-w-2xl text-[11px] leading-5 text-white/60">
                ※騎手受験特別コース（授業費 全期1,690,000円）が対象です。出願には体重45kg以下などの条件があります。詳しくは募集要項をご確認ください。
              </p>
              <div className="mt-8">
                <Link
                  href="/boshu"
                  className="group inline-flex items-center gap-3 rounded-full bg-sun-500 px-8 py-4 text-sm font-bold text-pine-950 shadow-soft transition hover:shadow-lift"
                >
                  募集要項・学費を見る
                  <span className="transition-transform duration-300 group-hover:translate-x-1.5">
                    →
                  </span>
                </Link>
              </div>
            </div>
          </div>
        </FadeUp>
      </Section>

      {/* (7) 進路変更しても安心 */}
      <Section className="texture-paper">
        <div className="grid gap-12 lg:grid-cols-2 lg:items-center">
          <div>
            <SectionTitle
              en="SAFETY NET"
              title={
                <>
                  進路が変わっても、
                  <br />
                  単位はそのまま引き継げる。
                </>
              }
            />
            <FadeUp delay={0.15}>
              <p className="mt-8 text-sm leading-8 text-ink-700 md:text-[15px]">
                挑戦の途中で「騎手ではない道に進みたい」と思ったら？　バジガクなら心配いりません。騎手受験対策で修得してきた単位は高校卒業に必要な単位そのもの。そのまま引き継いで一般高校乗馬コースや競走馬厩務員コースへ移り、学びを止めることなく高校卒業を目指せます。
              </p>
              <p className="mt-4 text-sm leading-8 text-ink-700 md:text-[15px]">
                「もしも」の不安を先生たちが引き受けるから、生徒は安心して騎手受験だけに集中できる。それがこのコースの設計思想です。
              </p>
              <p className="mt-4 text-sm leading-8 text-ink-700 md:text-[15px]">
                そして合格の先には、先輩たちが待っています。本校は冠名「バジガク」の現役競走馬 約20頭を所有し、1期生の木之前葵騎手をはじめ卒業生ジョッキーたちが騎乗。人も馬も、卒業後まで一緒に競馬の世界を駆けていきます。
              </p>
            </FadeUp>
          </div>
          <Stagger className="space-y-3">
            {pathFlow.map((p, i) => (
              <StaggerItem key={p.title}>
                <div className="relative border border-cream-300 bg-white p-6 shadow-soft">
                  <p className="text-[10px] font-bold tracking-[0.3em] text-gold-600">
                    {p.step}
                  </p>
                  <p className="mt-2 font-serif text-lg font-bold text-pine-950">
                    {p.title}
                  </p>
                  <p className="mt-2 text-[13px] leading-6 text-ink-700">
                    {p.desc}
                  </p>
                </div>
                {i < pathFlow.length - 1 && (
                  <p
                    aria-hidden
                    className="py-1 text-center text-lg font-bold text-gold-500"
                  >
                    ↓
                  </p>
                )}
              </StaggerItem>
            ))}
          </Stagger>
        </div>
      </Section>

      <CTABand />
    </>
  );
}
