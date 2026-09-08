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
    absolute: "馬術・乗馬を続け大学馬術部への進学｜大学馬術の大学スポーツ推薦制度なら",
  },
  description:
    "高校3年間で馬術や馬の専門知識を学びながら、大学・短大・専門学校への進学を目指せます。馬術経験を活かした進学など、一人ひとりの将来をサポートします。日本大学馬術部、東京農業大学馬術部、馬術の強い大学への馬術部推薦。大学の試験は馬術のスポーツ推薦で大学進学へ",
  keywords: [
    "馬術 大学進学",
    "乗馬 大学",
    "馬の高校 進学",
    "馬術推薦",
    "高校 馬術",
    "馬術部",
    "馬術競技",
    "全日本",
    "学生",
    "乗馬",
    "馬術選手",
    "大学進学",
  ],
};

/* ---------------- 進学の3つのルート ---------------- */

const routes = [
  {
    no: "01",
    en: "SPORTS",
    title: "スポーツ推薦で大学馬術部へ",
    sub: "競技実績を、そのまま進学に",
    desc: "3年間で馬術大会への出場と競技実績を積み重ね、大学馬術部へのスポーツ推薦入学を目指せます。実際に推薦で大学へ進学し、いまも大学馬術部で馬漬けの日々を送っている卒業生がいます。",
  },
  {
    no: "02",
    en: "GENERAL",
    title: "一般入試・総合型選抜で進学",
    sub: "「高校3年間の物語」が武器になる",
    desc: "親元を離れ、馬とともに過ごした3年間は、志望理由書や面接でそのまま語れる経験です。動物系・農学系だけでなく、まったく新しい分野への進学も応援します。進路はゆっくり一緒に考えていきましょう。",
  },
  {
    no: "03",
    en: "VOCATIONAL",
    title: "短大・専門学校へ",
    sub: "馬に限らず、幅広い分野へ",
    desc: "動物、看護、福祉、調理、デザイン——高校で馬を学んだからといって、その先も馬の仕事に限る必要はありません。高校卒業資格を取得できるからこそ、進路の選択肢は開かれたままです。",
  },
];

/* ---------------- 進学を支える仕組み ---------------- */

const supports = [
  {
    no: "01",
    tag: "高校卒業資格",
    title: "全日制と同じ高校卒業資格",
    desc: "本校は広域通信制の中央国際高等学校と連携しています。3年間で修得した単位により、全日制高校と同じ「高等学校卒業」の資格が得られます。大学・短大・専門学校の受験資格に、まったく違いはありません。",
  },
  {
    no: "02",
    tag: "授業時間",
    title: "1日2〜3時間の高校授業に集中",
    desc: "1日6時間もの授業を行うのではなく、1日2〜3時間に凝縮。無駄な授業時間を大幅に短縮する分、しっかり集中して取り組めます。余った時間を馬に注げるのが本校の魅力です。",
  },
  {
    no: "03",
    tag: "単位認定",
    title: "テストの点数だけで測らない評価",
    desc: "中間・期末テストの成績よりも、自分が馬について学んできたことを学習成果として評価する独自の単位認定方式。担当馬の紹介新聞、飼料管理レポート、競技会の記録——取り組みそのものが評価されます。",
  },
  {
    no: "04",
    tag: "少人数",
    title: "在校生約60名だから届く進路指導",
    desc: "スタッフが一人ひとりの顔と名前、その日の表情まで見渡せる規模です。「まだ何をやりたいか分からない」という状態からでも、担任が一緒に考えながら進路を固めていけます。",
  },
  {
    no: "05",
    tag: "資格",
    title: "在学中に取得できる資格",
    desc: "乗馬ライセンス（全国乗馬倶楽部振興協会）、騎乗者資格（日本馬術連盟）、家畜商免許など。総合型選抜や推薦入試で提出できる、目に見える実績が手元に残ります。",
  },
  {
    no: "06",
    tag: "社会の授業",
    title: "社会に出てから困らないために",
    desc: "お金、契約、税金、保険、法律、仕事、人との関わり方。進学しても就職しても必要になる社会の仕組みを、学校生活の中で実践的に学ぶ独自の特別授業を行っています。",
  },
];

/* ---------------- 履修科目の一例 ---------------- */

const subjects = [
  { subject: "倫理", detail: "馬と人間の関わり（人は馬を育て、馬は人を育てる）" },
  { subject: "現代文", detail: "担当する馬の紹介新聞を作成" },
  { subject: "体育", detail: "基本馬術、応用（障害・馬場）" },
  { subject: "就業体験", detail: "乗馬クラブ・牧場へのインターンシップ記録" },
  { subject: "課題研究", detail: "馬術競技会への出場、入賞成績記録" },
  { subject: "生物基礎", detail: "馬の飼料管理レポート、生体記録" },
];

/* ---------------- 進学までのロードマップ ---------------- */

const roadmap = [
  {
    no: "01",
    period: "1年次",
    label: "入学",
    title: "まだ決めていなくても、大丈夫",
    desc: "「動物が好き」「馬が好き」。でも卒業後に何をやりたいかは分からない——そんな状態での入学を歓迎しています。1年次はゆっくり馬との生活に慣れながら、自分の興味の輪郭を探す時間です。",
  },
  {
    no: "02",
    period: "1年次後半〜2年次",
    label: "経験を広げる",
    title: "馬術大会、資格、インターンへ",
    desc: "馬術競技会への出場、乗馬ライセンスや騎乗者資格の取得、乗馬クラブ・牧場での就業体験。「やってみた経験」の数がそのまま、進路を選ぶときの判断材料になります。",
  },
  {
    no: "03",
    period: "2年次・9月頃",
    label: "進路指導",
    title: "担任と、進む方向を話し合う",
    desc: "2年次9月頃を目安に、担任と進路の方向を確認します。進学か、就職か。馬に関わり続けるか、新しい分野へ進むか。ここまでの経験をもとに、一緒に整理していきます。",
  },
  {
    no: "04",
    period: "2〜3年次",
    label: "受験準備",
    title: "推薦・総合型選抜・一般入試に向けて",
    desc: "スポーツ推薦を目指すなら競技実績の積み上げを。総合型選抜や一般入試なら、志望理由書と学科の準備を。少人数だからこそ、一人ひとりの受験方式に合わせた指導ができます。",
  },
  {
    no: "05",
    period: "3年次",
    label: "進学・卒業",
    title: "3年間が、確かな自信になる",
    desc: "親元を離れ、馬と仲間と先生とともに過ごした3年間は、必ず大きな自信になります。どの進路に進むとしても、ここでの経験は社会を生きていく礎になるはずです。",
  },
];

/* ---------------- 進学実績 ---------------- */

const universities = [
  "日本大学",
  "専修大学",
  "福井工業大学",
  "東京農業大学",
];

const resultStats = [
  { value: 3, suffix: "年", label: "全日制と同じ高校卒業資格", note: "※中央国際高等学校との連携" },
  { value: 60, suffix: "名", label: "在校生（少人数だから届く指導）" },
  { value: 3, suffix: "時間", label: "1日の高校授業", note: "※1日2〜3時間に凝縮" },
  { value: 73, suffix: "%", label: "未経験・初心者の入学率", note: "※令和3年以降実績" },
];

/* ---------------- FAQ ---------------- */

const pick = (q: string): QA[] => {
  const hit = faqs.find((f) => f.q === q);
  return hit ? [{ q: hit.q, a: hit.a }] : [];
};

const shingakuFaqs: QA[] = [
  {
    q: "通信制高校の卒業でも、大学は受験できますか？",
    a: "できます。本校は広域通信制の中央国際高等学校と連携しており、3年間で修得した単位により全日制高校と同じ「高等学校卒業」の資格が得られます。大学・短大・専門学校の受験資格において、全日制の卒業生とまったく差はありません。実際に本校からは日本大学・専修大学・福井工業大学・東京農業大学などへの進学実績があります。",
  },
  {
    q: "馬術の実績で、大学にスポーツ推薦入学できますか？",
    a: "可能です。3年間で馬術大会に出場し競技実績を積み重ねたのち、大学馬術部へのスポーツ推薦入学を目指せます。本校では大会出場にかかるエントリー費・登録費・馬の輸送費などの諸経費を学校が全額負担しているため、費用を気にせず出場歴を重ねられます。実際に推薦で大学へ進学し、いまも大学馬術部で馬術を続けている卒業生がいます。",
  },
  {
    q: "卒業後に馬と関係のない進路へ進んでも大丈夫ですか？",
    a: "まったく問題ありません。本校での3年間を経て、必ず馬の仕事しか選べないわけではありません。この3年間で高校卒業資格を取得できるので、馬に限らず新しい道に進んでいただいて大丈夫です。親元を離れて馬や仲間、先生たちと過ごした3年間は必ず大きな自信になり、自己アピールとしても十分に通用します。新しい分野へのチャレンジも応援します。",
  },
  {
    q: "進学に向けた学科の勉強はできますか？",
    a: "本校の高校授業は1日2〜3時間に凝縮されており、その分しっかり集中して取り組めます。在校生は約60名の少人数制で、担任が一人ひとりの状況を把握したうえで指導します。進学を目指す生徒には受験方式に合わせた準備を一緒に進めていきますので、進学希望であることは早めに担任へお伝えください。",
  },
  {
    q: "進路がまだ決まっていなくても入学できますか？",
    a: "もちろんです。「動物が好き」「馬が好き」、でも卒業後に何をやりたいかはまだ分からない——そんな方も大歓迎です。1年次はゆっくり馬との生活、騎乗訓練、馬の管理を通じて過ごし、その中で何をやりたいのかを決めていけば大丈夫です。さまざまな経験を通じて、一緒に考えていきましょう。選択肢も可能性も無限大です。",
  },
  ...pick("中央国際高等学校の授業は1日どれくらいですか？"),
  ...pick("連携する中央国際高等学校の入学手続きはどうなりますか？"),
];

export default function ShingakuPage() {
  return (
    <>
      {/* (1) Hero */}
      <PageHero
        image="/images/shingaku_001_1.jpg"
        en="HIGHER EDUCATION"
        title="短大・専門学校・大学進学へ"
        lead="馬の高校を選んでも、その先の進路が狭まることはありません。全日制と同じ高校卒業資格を取得できるから、大学・短大・専門学校への道は開かれたままです。"
        crumbs={[
          { label: "HOME", href: "/" },
          { label: "進路・サポート" },
          { label: "短大・専門学校・大学進学へ" },
        ]}
      />

      {/* (2) 進学について */}
      <Section id="about" className="bg-white">
        <div className="grid items-start gap-12 lg:grid-cols-2">
          <div>
            <SectionTitle
              en="OPEN FUTURE"
              title={
                <>
                  馬を学んだ3年間は、
                  <br />
                  どんな進路にもつながる。
                </>
              }
              lead="本校での3年間を経て、必ず馬の仕事しか選択肢がないわけではありません。この3年間で高校の卒業資格も取得できるので、馬の仕事に限らず新たな道に進んでもいいのです。ここで馬や仲間や先生たちと共に、親元を離れて過ごした3年間は必ず大きな自信になっていますし、十分自己アピールとして通用します。どの進路に進むとしても、必ずここでの3年間が社会を生きていく上での礎になるでしょう。"
            />
            <FadeUp delay={0.15} className="mt-10 space-y-4">
              <div className="border-l-4 border-gold-500 bg-cream-100 p-5">
                <p className="text-xs font-bold tracking-[0.25em] text-gold-600">
                  POINT 1
                </p>
                <h3 className="mt-2 text-sm font-bold text-pine-950 md:text-[15px]">
                  全日制と同じ「高等学校卒業」の資格
                </h3>
                <p className="mt-2 text-[13px] leading-7 text-ink-700">
                  広域通信制・中央国際高等学校との連携により、3年間で修得した単位で高校卒業資格が得られます。大学・短大・専門学校の受験資格に、全日制との差はありません。
                </p>
              </div>
              <div className="border-l-4 border-pine-800 bg-cream-100 p-5">
                <p className="text-xs font-bold tracking-[0.25em] text-pine-700">
                  POINT 2
                </p>
                <h3 className="mt-2 text-sm font-bold text-pine-950 md:text-[15px]">
                  「何をやるか決めてない」でも大丈夫
                </h3>
                <p className="mt-2 text-[13px] leading-7 text-ink-700">
                  1年次はゆっくり馬との生活に慣れながら、何をやりたいのかを探す時間です。さまざまな経験を通じて、進路は一緒に考えていきましょう。選択肢も可能性も無限大です。
                </p>
              </div>
            </FadeUp>
          </div>
          <div className="relative lg:sticky lg:top-28">
            <ScaleIn className="relative z-10 overflow-hidden shadow-lift">
              <Image
                src="/images/shingaku_002_1.jpg"
                alt="馬について学んだ成果をまとめた生徒のレポートと進路ノート"
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
                src="/images/kyumuin_003_1.jpg"
                alt="進路が決まり合格通知を手にする生徒たち"
                width={800}
                height={560}
                className="h-full w-full object-cover"
              />
            </SlideIn>
            <div
              aria-hidden
              className="absolute -left-10 -top-10 -z-0 h-44 w-44 rounded-full bg-gold-300/30 blur-2xl"
            />
          </div>
        </div>
      </Section>

      {/* (3) 3つのルート */}
      <Section id="routes" className="texture-paper">
        <SectionTitle
          en="THREE ROUTES"
          align="center"
          title="進学の道は、ひとつではありません"
          lead="馬術の競技実績を活かす道、3年間の経験を言葉にして挑む道、まったく新しい分野へ進む道。一人ひとりの目標に合わせて、進み方を選べます。"
        />
        <Stagger className="mt-12 grid gap-6 md:grid-cols-3">
          {routes.map((r) => (
            <StaggerItem key={r.no} className="h-full">
              <div className="relative flex h-full flex-col bg-white p-8 pt-10 shadow-soft transition duration-300 hover:-translate-y-1.5 hover:shadow-lift">
                <span className="absolute -top-5 left-8 flex h-11 w-11 items-center justify-center rounded-full bg-pine-800 font-serif text-sm font-bold text-gold-300 shadow-soft">
                  {r.no}
                </span>
                <p className="text-[11px] font-bold tracking-[0.3em] text-gold-600">
                  {r.en}
                </p>
                <h3 className="mt-3 font-serif text-xl font-bold leading-snug text-pine-950">
                  {r.title}
                </h3>
                <p className="mt-1 text-xs font-bold text-pine-700">{r.sub}</p>
                <p className="mt-4 flex-1 text-[13px] leading-7 text-ink-700">
                  {r.desc}
                </p>
              </div>
            </StaggerItem>
          ))}
        </Stagger>
        <FadeUp delay={0.1} className="mt-10">
          <p className="mx-auto max-w-3xl bg-pine-50 px-6 py-5 text-center text-sm font-bold leading-7 text-pine-800">
            進学だけでなく、一般企業への就職という道もあります。高校生活では存分に馬を学び、卒業後は一般職や専門学校・大学進学を目指す生徒たちも在籍しています。自分の将来を「今」決断する必要はありません。
          </p>
        </FadeUp>
      </Section>

      {/* (4) 進学を支える仕組み */}
      <Section id="support" className="bg-white">
        <SectionTitle
          en="SUPPORT"
          align="center"
          title="進学を支える、6つの仕組み"
          lead="馬に打ち込みながら進学も目指せるのは、授業のかたちそのものが違うから。バジガクの学習環境をご紹介します。"
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
      </Section>

      {/* (5) 履修科目の一例 */}
      <Section id="subjects" className="bg-cream-100">
        <SectionTitle
          en="SUBJECTS"
          align="center"
          title={
            <>
              馬で学んだことが、高校の単位になる
              <span className="mt-3 block font-serif text-base font-bold leading-snug text-pine-800 md:text-xl">
                「勉強は最低限！夢は最大限！」
              </span>
            </>
          }
          lead="本校では、中間テスト・期末テストの成績よりも、自分が馬について学んできたことを学習成果として評価する独自の単位認定方式を取り入れています。履修科目の一例をご紹介します。"
        />
        <div className="mt-12 overflow-x-auto border border-cream-300 bg-white shadow-soft">
          <table className="w-full min-w-[560px] text-left text-sm">
            <thead>
              <tr className="bg-pine-800 text-[12px] tracking-wider text-white">
                <th className="w-40 px-5 py-4 font-bold">履修科目</th>
                <th className="px-5 py-4 font-bold">学習成果の一例</th>
              </tr>
            </thead>
            <tbody>
              {subjects.map((s, i) => (
                <tr
                  key={s.subject}
                  className={`border-t border-cream-300 ${
                    i % 2 === 1 ? "bg-cream-100" : "bg-white"
                  }`}
                >
                  <td className="px-5 py-4 font-bold text-pine-950">{s.subject}</td>
                  <td className="px-5 py-4 text-ink-700">{s.detail}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <p className="mt-4 text-center text-[11px] leading-6 text-ink-500">
          ※履修科目は一例です。単位認定の内容は年度により変わる場合があります。
        </p>
        <FadeUp delay={0.15} className="mt-14">
          <div className="overflow-hidden shadow-soft">
            <Image
              src="/images/DSC_0047-2.jpg"
              alt="馬場での騎乗授業に取り組む生徒たち"
              width={1600}
              height={700}
              className="h-56 w-full object-cover md:h-80"
            />
          </div>
          <p className="mt-3 text-center text-xs text-ink-500">
            1日2〜3時間の高校授業に集中し、残りの時間は思う存分「馬」に。それがバジガクの学び方です。
          </p>
        </FadeUp>
      </Section>

      {/* (6) ロードマップ */}
      <Section id="roadmap" className="bg-white">
        <SectionTitle
          en="ROADMAP"
          align="center"
          title="進学までのロードマップ"
          lead="「まだ決めていない」からのスタートでも大丈夫。3年間で少しずつ、自分の進む道を見つけていきます。"
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
            ※スケジュールは年度や一人ひとりの状況により変わる場合があります。
          </p>
        </div>
      </Section>

      {/* (7) 進学実績 */}
      <section id="results" className="relative overflow-hidden bg-pine-900 py-16 md:py-24">
        <div
          aria-hidden
          className="absolute inset-0 bg-cover bg-center opacity-10"
          style={{ backgroundImage: "url(/images/shingaku_001_1.jpg)" }}
        />
        <div className="relative mx-auto max-w-7xl px-6">
          <SectionTitle
            dark
            align="center"
            en="RESULTS"
            title="進学の環境と実績"
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
              UNIVERSITIES
            </p>
            <h3 className="mt-2 text-center font-serif text-2xl font-bold text-white md:text-3xl">
              主な大学進学実績
            </h3>
            <p className="mx-auto mt-4 max-w-3xl text-center text-sm leading-7 text-white/80">
              馬術大会での実績を活かし、大学へ進学した卒業生がいます。以下はその一部です。
            </p>
            <Stagger className="mx-auto mt-8 grid max-w-3xl grid-cols-2 gap-3 md:grid-cols-4">
              {universities.map((u) => (
                <StaggerItem key={u}>
                  <div className="border border-white/15 bg-white/5 px-4 py-4 text-center text-[13px] font-bold text-white transition duration-300 hover:border-gold-400/60 hover:bg-white/10">
                    {u}
                  </div>
                </StaggerItem>
              ))}
            </Stagger>
            <p className="mt-6 text-center text-[11px] leading-6 text-white/55">
              ※上記は、株式会社馬事学院全体（東関東馬事高等学院・東関東馬事専門学院）の実績を掲載しています。ほかに短大・専門学校への進学、一般企業への就職実績もあります。
            </p>
          </FadeUp>
          <FadeUp delay={0.2} className="mt-10 text-center">
            <Link
              href="/bajutsu"
              className="inline-flex items-center gap-2 text-sm font-bold text-gold-300 transition hover:text-gold-400"
            >
              馬術競技会への挑戦について見る
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
          title="進学をお考えの方から、よくあるご質問"
          lead="高校卒業資格のこと、スポーツ推薦のこと、進路が決まっていない場合のこと。進学を考えている方から特に多くいただくご質問にお答えします。"
        />
        <FadeUp delay={0.1} className="mx-auto mt-12 max-w-3xl">
          <Accordion items={shingakuFaqs} />
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
