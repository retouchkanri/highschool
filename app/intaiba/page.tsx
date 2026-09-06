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
    absolute: "引退馬の支援を仕事にするには｜リトレーニング・養老牧場を学ぶ｜馬の高校　東関東馬事高等学院",
  },
  description:
    "引退競走馬のサポートを目指す方へ。東関東馬事高等学院は千葉県八街市の「引退馬の森」、大阪府河内長野市の「引退馬の森 ホースレスト」を運営し、年間60頭もの引退馬を受け入れています。引退馬支援団体Retouchと連携した乗用馬への転用調教（リトレーニング）、養老馬の飼養管理まで、馬のセカンドライフを支える技術を高校3年間で実践的に学べます。",
  keywords: [
    "引退馬",
    "引退競走馬",
    "引退馬支援",
    "リトレーニング",
    "転用調教",
    "養老牧場",
    "養老馬",
    "馬のセカンドライフ",
    "ホースセラピー",
    "引退馬の森",
    "Retouch",
    "馬の高校",
    "馬の学校",
    "東関東馬事高等学院",
    "バジガク",
  ],
};

/* ---------------- 引退馬をめぐる3つの課題 ---------------- */

const issues = [
  {
    no: "01",
    title: "売れ残るサラブレッド",
    desc: "競馬産業が拡大する一方で、生産された馬のすべてが買い手を見つけられるわけではありません。株式会社馬事学院では毎年、セリで他に買い手がつかなかったサラブレッドを購入し、学校の教育馬として新たな役割を与えています。",
  },
  {
    no: "02",
    title: "行き場のない引退競走馬",
    desc: "競走馬としての役目を終えた馬の多くは、その先の行き先が決まっていません。馬事学院では全国から年間60頭もの引退馬を受け入れ、乗用馬への転用調教や養老馬としての受け入れを通じて、セカンドライフの場をつくっています。",
  },
  {
    no: "03",
    title: "馬社会を担う人材の不足",
    desc: "馬を支える現場は、慢性的な人材不足に直面しています。未経験から馬の仕事を目指す若者を育てること自体が、引退馬問題への長期的な答えになる——それが本校の教育の根っこにある考え方です。",
  },
];

/* ---------------- 本校で学べること ---------------- */

const learnings = [
  {
    no: "01",
    tag: "リトレーニング",
    title: "競走馬を、乗用馬に育てなおす",
    desc: "速く走ることだけを教えられてきた馬に、人との新しい関わり方をひとつずつ教えていきます。手入れ、運動、騎乗を積み重ね、誰が乗っても指示どおりに動ける馬へ。生徒自身が馬とともに成長していく学びです。",
  },
  {
    no: "02",
    tag: "連携",
    title: "引退馬支援団体Retouchとの協働",
    desc: "本校は引退馬支援団体Retouchと連携し、数多くの引退競走馬と関わりながら転用調教を実践的に学びます。現場で活動する支援団体と直接つながれることが、そのまま学びの質になります。",
  },
  {
    no: "03",
    tag: "養老馬の管理",
    title: "年老いた馬に寄り添うケア",
    desc: "高齢馬は飼料も運動量も、若い馬とはまったく違います。歯の状態に合わせた飼料の工夫、関節への負担を考えた運動、日々の細やかな観察。「最後まで見届ける」という仕事の意味を、実際の馬から学びます。",
  },
  {
    no: "04",
    tag: "引退馬の森",
    title: "千葉・大阪の2拠点で実地研修",
    desc: "千葉県八街市の「引退馬の森」、大阪府河内長野市の「引退馬の森 ホースレスト」。高校2年生は交代制でこれらの施設に入り、競走馬・引退馬の管理に携わりながら自分の進路と向き合います。",
  },
  {
    no: "05",
    tag: "馬の多様性",
    title: "1歳の若馬から養老馬まで",
    desc: "本校が管理する馬は約120頭。育成馬・競走馬・競技馬・引退馬・養老馬と、あらゆる年代・立場の馬が同じキャンパスにいます。馬の一生を通しで見られる環境は、全国的にも稀です。",
  },
  {
    no: "06",
    tag: "競技",
    title: "育てた馬と、競技会に出る",
    desc: "リトレーニングした馬と馬術競技会への出場を目指すこともできます。学んだ技術が、引退競走馬の新たな活躍の場と未来をつくる。それも、本校だからこそ経験できる学びです。",
  },
];

/* ---------------- 引退馬の森 ---------------- */

const forests = [
  {
    no: "01",
    en: "CHIBA",
    title: "引退馬の森",
    place: "千葉県八街市",
    year: "平成30年3月 設立",
    desc: "引退した馬たちのセカンドライフを支える拠点として設立。競走馬の管理も行っており、高校2年生や専門課程の生徒が交代制で入り、競走馬管理と引退馬のケアを実践しています。木馬を使ったバランストレーニングなど、乗り手側の訓練の場にもなっています。",
  },
  {
    no: "02",
    en: "OSAKA",
    title: "引退馬の森 ホースレスト",
    place: "大阪府河内長野市",
    year: "令和2年7月 設立",
    desc: "関西エリアの拠点として設立された、引退馬のための施設。千葉と大阪の2拠点体制により、より多くの馬を受け入れられる体制を整えています。関西遠征や研修の受け入れ先にもなっています。",
  },
];

/* ---------------- 進路 ---------------- */

const careers = [
  {
    title: "養老牧場・引退馬を扱う牧場",
    desc: "引退馬・養老馬に寄り添い、その一生を最後まで支える仕事。飼養管理の知識と、馬の小さな変化に気づく観察力が求められます。",
    img: "/images/top_future_008.jpg",
    alt: "厩舎で引退馬とふれあう様子",
  },
  {
    title: "乗馬クラブ・観光牧場",
    desc: "リトレーニングを終えた元競走馬の多くは、乗馬クラブや観光牧場で第二の人生を送ります。馬をつくる技術は、そのまま就職の武器になります。",
    img: "/images/top_future_007.jpg",
    alt: "乗馬クラブで馬に騎乗する様子",
  },
  {
    title: "リトレーニング・ホースセラピー",
    desc: "転用調教の技術者は、まだ全国的に不足しています。この技術者が増えることは、行き場のない馬を1頭でも多く救うことに直結します。",
    img: "/images/ippan_003_1-2.jpg",
    alt: "引退競走馬と向き合う生徒",
  },
];

/* ---------------- FAQ ---------------- */

const pick = (q: string): QA[] => {
  const hit = faqs.find((f) => f.q === q);
  return hit ? [{ q: hit.q, a: hit.a }] : [];
};

const intaibaFaqs: QA[] = [
  {
    q: "乗馬未経験でも、引退馬に関わる仕事を目指せますか？",
    a: "目指せます。バジガクの入学生の6〜7割は乗馬未経験・初心者からのスタートです。引退馬のケアで何より大切なのは、馬を丁寧に扱い、毎日の変化に気づけること。1年次は担当馬のお世話と基礎乗馬でその土台をつくり、2年次以降にリトレーニングや引退馬の森での実習へと進んでいきます。",
  },
  {
    q: "リトレーニング（転用調教）は誰でも学べますか？",
    a: "一般高校乗馬コースの学びの柱のひとつとして、騎乗レベルに応じて段階的に取り組みます。まずは基礎乗馬で自分の騎乗を安定させることが前提になるため、1年次は基本馬術が中心です。そのうえで、引退馬支援団体Retouchと連携しながら、実際の引退競走馬を相手に転用調教を実践していきます。",
  },
  {
    q: "引退馬の森での実習には、誰でも参加できますか？",
    a: "高校2年生や専門課程2年生以上の生徒が、交代制で引退馬の森の施設に入り、競走馬・引退馬の管理に携わっています。学校生活の中で実際にさまざまな現場を経験できることが本校の特徴で、この実習が自分の進路と向き合う機会にもなっています。参加時期は年度や習熟度により調整します。",
  },
  {
    q: "引退馬に関わる仕事で、生活していけますか？",
    a: "養老牧場や引退馬を扱う牧場、乗馬クラブ、観光牧場など、就職先は着実に広がっています。本校には全国350件超の馬関連求人ネットワークがあり、在学中のインターンシップで現場との相性を確かめたうえで就職先を選べます。加えて、転用調教の技術を持つ人材はまだ全国的に不足しており、この技術は就職で大きな強みになります。",
  },
  ...pick("在学中に牧場などでの研修はありますか？"),
  ...pick("卒業後はどんな馬の仕事に就けますか？"),
];

export default function IntaibaPage() {
  return (
    <>
      {/* (1) Hero */}
      <PageHero
        image="/images/intaiba_001_1.jpg"
        en="RETIRED HORSES"
        title="引退馬のサポートを目指す方へ"
        lead="競馬という役目を終えた馬に、次の居場所をつくる。バジガクは千葉と大阪に「引退馬の森」を持ち、年間60頭もの引退馬を受け入れています。その現場が、そのまま授業になります。"
        crumbs={[
          { label: "HOME", href: "/" },
          { label: "進路・サポート" },
          { label: "引退馬のサポートを目指す方へ" },
        ]}
      />

      {/* (2) 引退馬問題とは */}
      <Section id="about" className="bg-white">
        <div className="grid items-start gap-12 lg:grid-cols-2">
          <div>
            <SectionTitle
              en="THE ISSUE"
              title={
                <>
                  馬から人へ、人から馬へ。
                  <br />
                  引退馬を救うということ。
                </>
              }
              lead="競馬産業が右肩上がりに伸びる裏側で、馬の社会は3つの課題を抱えています。売れ残るサラブレッド、行き場のない引退競走馬、そして馬社会を担う人材の不足。株式会社馬事学院はこの3つに正面から取り組み、その活動はTOKYO MX「未来企業」でも紹介されました。バジガクの学びは、その現場と地続きにあります。"
            />
            <Stagger className="mt-10 space-y-4">
              {issues.map((i) => (
                <StaggerItem key={i.no}>
                  <div className="border border-cream-300 bg-cream-100 p-5 transition duration-300 hover:-translate-y-1 hover:shadow-soft">
                    <h3 className="flex items-start gap-3 text-sm font-bold text-pine-950 md:text-[15px]">
                      <span className="mt-0.5 inline-block h-4 w-1 shrink-0 rounded-full bg-gold-500" />
                      {i.title}
                    </h3>
                    <p className="mt-2 pl-4 text-[13px] leading-7 text-ink-700">
                      {i.desc}
                    </p>
                  </div>
                </StaggerItem>
              ))}
            </Stagger>
          </div>
          <div className="relative lg:sticky lg:top-28">
            <ScaleIn className="relative z-10 overflow-hidden shadow-lift">
              <Image
                src="/images/intaiba_002_1.jpg"
                alt="放牧地で馬たちと過ごす生徒たち"
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
                src="/images/ippan_001_2.jpg"
                alt="馬の手入れをする生徒"
                width={800}
                height={560}
                className="h-full w-full object-cover"
              />
            </SlideIn>
            <div
              aria-hidden
              className="absolute -left-10 -top-10 -z-0 h-44 w-44 rounded-full bg-gold-300/30 blur-2xl"
            />
            <FadeUp delay={0.3} className="relative z-20 mt-8">
              <div className="border-l-4 border-gold-500 bg-cream-100 p-5">
                <p className="text-xs font-bold tracking-[0.25em] text-gold-600">
                  OUR ANSWER
                </p>
                <h3 className="mt-2 text-sm font-bold text-pine-950 md:text-[15px]">
                  技術者が増えれば、救える馬が増える
                </h3>
                <p className="mt-2 text-[13px] leading-7 text-ink-700">
                  引退競走馬をすぐに一般の方が乗れるわけではありません。乗用馬へ調教しなおす技術を持つ人が増えることで、競走馬引退後、行き場のない馬を1頭でも多く救うことができるようになります。
                </p>
              </div>
            </FadeUp>
          </div>
        </div>
      </Section>

      {/* (3) 引退馬の森 */}
      <Section id="forest" className="texture-paper">
        <SectionTitle
          en="RETIRED HORSE FOREST"
          align="center"
          title="千葉と大阪に、「引退馬の森」があります"
          lead="本校を運営する株式会社馬事学院は、引退した馬たちのセカンドライフを支える拠点を2か所に設けています。授業で学んだことを、実際の引退馬を相手に確かめられる場所です。"
        />
        <Stagger className="mt-12 grid gap-6 md:grid-cols-2">
          {forests.map((f) => (
            <StaggerItem key={f.no} className="h-full">
              <div className="relative flex h-full flex-col bg-white p-8 pt-10 shadow-soft transition duration-300 hover:-translate-y-1.5 hover:shadow-lift">
                <span className="absolute -top-5 left-8 flex h-11 w-11 items-center justify-center rounded-full bg-pine-800 font-serif text-sm font-bold text-gold-300 shadow-soft">
                  {f.no}
                </span>
                <p className="text-[11px] font-bold tracking-[0.3em] text-gold-600">
                  {f.en}
                </p>
                <h3 className="mt-3 font-serif text-xl font-bold leading-snug text-pine-950">
                  {f.title}
                </h3>
                <p className="mt-1 text-xs font-bold text-pine-700">
                  {f.place}｜{f.year}
                </p>
                <p className="mt-4 flex-1 text-[13px] leading-7 text-ink-700">
                  {f.desc}
                </p>
              </div>
            </StaggerItem>
          ))}
        </Stagger>
        <FadeUp delay={0.15} className="mt-12">
          <div className="grid gap-6 md:grid-cols-3">
            <div className="bg-white p-6 text-center shadow-soft">
              <p className="font-serif text-3xl font-bold text-pine-800 md:text-4xl">
                <Counter to={60} suffix="頭" />
              </p>
              <p className="mt-2 text-xs font-bold text-ink-700">
                全国から受け入れる引退馬（年間）
              </p>
            </div>
            <div className="bg-white p-6 text-center shadow-soft">
              <p className="font-serif text-3xl font-bold text-pine-800 md:text-4xl">
                <Counter to={118} suffix="頭" />
              </p>
              <p className="mt-2 text-xs font-bold text-ink-700">
                本校で管理する馬匹の数
              </p>
            </div>
            <div className="bg-white p-6 text-center shadow-soft">
              <p className="font-serif text-3xl font-bold text-pine-800 md:text-4xl">
                2か所
              </p>
              <p className="mt-2 text-xs font-bold text-ink-700">
                引退馬の森（千葉県八街市・大阪府河内長野市）
              </p>
            </div>
          </div>
          <p className="mt-4 text-center text-[11px] leading-6 text-ink-500">
            ※上記は、株式会社馬事学院全体（東関東馬事高等学院・東関東馬事専門学院）の実績を掲載しています。
          </p>
        </FadeUp>
      </Section>

      {/* (4) 本校で学べること */}
      <Section id="learn" className="bg-white">
        <SectionTitle
          en="WHAT YOU LEARN"
          align="center"
          title="引退馬を支えるために、学べること"
          lead="引退馬のサポートは、優しさだけでは務まりません。馬を乗用馬に育てなおす技術、高齢馬の身体を理解する知識、そして毎日続ける体力。バジガクではその全部を実際の馬から学びます。"
        />
        <Stagger className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {learnings.map((l) => (
            <StaggerItem key={l.no} className="h-full">
              <div className="flex h-full flex-col border border-cream-300 bg-white p-7 shadow-soft transition duration-300 hover:-translate-y-1.5 hover:shadow-lift">
                <div className="flex items-center justify-between">
                  <p className="font-serif text-2xl font-bold text-gold-500">{l.no}</p>
                  <span className="rounded-full bg-pine-50 px-3 py-1 text-[11px] font-bold text-pine-800">
                    {l.tag}
                  </span>
                </div>
                <h3 className="mt-3 font-serif text-base font-bold leading-snug text-pine-950 md:text-lg">
                  {l.title}
                </h3>
                <p className="mt-3 flex-1 text-[13px] leading-7 text-ink-700">
                  {l.desc}
                </p>
              </div>
            </StaggerItem>
          ))}
        </Stagger>
      </Section>

      {/* (5) リトレーニング */}
      <Section id="retraining" className="bg-cream-100">
        <div className="grid items-center gap-12 lg:grid-cols-2">
          <FadeUp>
            <div className="relative">
              <div
                aria-hidden
                className="absolute -bottom-4 -right-4 h-full w-full border-2 border-gold-500/40"
              />
              <div className="relative aspect-[4/3] overflow-hidden shadow-soft">
                <Image
                  src="/images/DSC9265.jpg"
                  alt="馬場で馬と向き合う生徒たち"
                  fill
                  sizes="(max-width: 1024px) 100vw, 50vw"
                  className="object-cover"
                />
              </div>
            </div>
          </FadeUp>
          <FadeUp delay={0.15}>
            <p className="text-[11px] font-bold tracking-[0.4em] text-gold-600">
              RETRAINING
            </p>
            <p className="mt-3 font-serif text-xl font-bold leading-relaxed text-pine-950 md:text-2xl">
              「速く走る」しか知らない馬に、
              <br />
              新しい生き方を教える。
            </p>
            <div className="rule-gold mt-5 h-[2px] w-16" aria-hidden />
            <p className="mt-6 text-sm leading-8 text-ink-700 md:text-[15px]">
              競走馬として育てられた馬は、引退してもすぐに一般の方を乗せることはできません。どんな人が乗ってもきちんと指示どおりに動き、障害物を飛べる乗用馬へと調教しなおす——それが「転用調教（リトレーニング）」です。
            </p>
            <p className="mt-4 text-sm leading-8 text-ink-700 md:text-[15px]">
              生徒自身が日々の手入れや運動、騎乗を重ねながら、一つずつ教えていきます。時間はかかりますが、馬が変わっていく手応えは何にも代えがたいものです。リトレーニングした馬と馬術競技会に出場し、入賞を目指すこともできます。
            </p>
            <p className="mt-4 text-sm leading-8 text-ink-700 md:text-[15px]">
              こうした技術を持っていることは就職に有利なだけでなく、技術者が増えることそのものが、行き場のない馬を救う力になります。
            </p>
            <div className="mt-8 flex flex-wrap justify-center gap-4 md:justify-start">
              <Link
                href="/bajutsu"
                className="group inline-flex items-center gap-3 rounded-full bg-pine-800 px-7 py-3.5 text-sm font-bold text-white shadow-soft transition hover:bg-pine-700 hover:shadow-lift"
              >
                馬術競技会への挑戦を見る
                <span className="transition-transform duration-300 group-hover:translate-x-1.5">→</span>
              </Link>
              <Link
                href="/course"
                className="group inline-flex items-center gap-3 rounded-full border-2 border-pine-800 px-7 py-3.5 text-sm font-bold text-pine-800 transition hover:bg-pine-800 hover:text-white"
              >
                一般高校乗馬コースを見る
                <span className="transition-transform duration-300 group-hover:translate-x-1.5">→</span>
              </Link>
            </div>
          </FadeUp>
        </div>
      </Section>

      {/* (6) 進路 */}
      <section id="career" className="relative overflow-hidden bg-pine-900 py-16 md:py-24">
        <div
          aria-hidden
          className="absolute inset-0 bg-cover bg-center opacity-10"
          style={{ backgroundImage: "url(/images/intaiba_002_1.jpg)" }}
        />
        <div className="relative mx-auto max-w-7xl px-6">
          <SectionTitle
            dark
            align="center"
            en="CAREER"
            title="引退馬に関わる、卒業後の進路"
            lead="馬のセカンドライフを支える現場は、少しずつ広がっています。3年間で身につけた技術と経験を、そのまま仕事にしていく道があります。"
          />
          <Stagger className="mt-12 grid gap-6 md:grid-cols-3">
            {careers.map((c) => (
              <StaggerItem key={c.title} className="h-full">
                <div className="flex h-full flex-col overflow-hidden bg-white shadow-soft transition duration-300 hover:-translate-y-1.5 hover:shadow-lift">
                  <div className="relative h-48 overflow-hidden">
                    <Image
                      src={c.img}
                      alt={c.alt}
                      fill
                      sizes="(max-width: 768px) 100vw, 33vw"
                      className="object-cover transition-transform duration-700 hover:scale-110"
                    />
                  </div>
                  <div className="flex flex-1 flex-col p-7">
                    <h3 className="font-serif text-lg font-bold text-pine-950">
                      {c.title}
                    </h3>
                    <p className="mt-3 flex-1 text-[13px] leading-7 text-ink-700">
                      {c.desc}
                    </p>
                  </div>
                </div>
              </StaggerItem>
            ))}
          </Stagger>
          <FadeUp delay={0.2} className="mt-12 text-center">
            <p className="mx-auto max-w-3xl text-sm leading-8 text-white/80">
              本校には全国350件超の馬関連求人ネットワークがあります。在学中のインターンシップで現場との相性を確かめたうえで、自分に合った就職先を選べます。
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
          title="引退馬に関心のある方から、よくあるご質問"
          lead="未経験からの挑戦、リトレーニングの学び方、実習のこと。引退馬のサポートを目指す方から特に多くいただくご質問にお答えします。"
        />
        <FadeUp delay={0.1} className="mx-auto mt-12 max-w-3xl">
          <Accordion items={intaibaFaqs} />
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
