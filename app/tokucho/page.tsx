import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import PageHero from "@/components/PageHero";
import { Section, SectionTitle } from "@/components/Section";
import { FadeUp, ScaleIn, SlideIn, Stagger, StaggerItem } from "@/components/motion";
import CTABand from "@/components/CTABand";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: "本校の特徴",
  description:
    "馬の高校 東関東馬事高等学院（バジガク）の8つの特徴。3年間馬と過ごす高校生活、ほぼ毎日の騎乗授業、学習成果による単位認定、高校授業での資格取得、全寮制など、馬と人が共に育つ「共育」環境をご紹介します。",
};

const features = [
  {
    no: "01",
    en: "HORSE LIFE",
    img: "/images/tokucho_001_1.jpg",
    title: "3年間、馬と共に過ごす高校生活",
    desc: "授業の舞台は、広い空とみどりに囲まれたキャンパス。朝から夕方まで馬が中心の毎日を3年間送れます。馬に少し興味があった人は夢中になり、もともと大好きだった人にとっては、かけがえのない存在へと変わっていきます。",
  },
  {
    no: "02",
    en: "RIDING",
    img: "/images/tokucho_002_1.jpg",
    title: "ほぼ毎日騎乗できる高校乗馬",
    desc: "毎日の学びの真ん中には、いつも馬がいます。騎乗授業はほぼ毎日あり、育成馬・競走馬・引退馬・訓練馬・競技馬・養老馬と、多彩な馬たちに囲まれながら、騎乗技術をぐんぐん伸ばしていけます。",
  },
  {
    no: "03",
    en: "EVALUATION",
    img: "/images/tokucho_003_1.jpg",
    title: "定期テストではなく、学習成果で単位認定",
    desc: "中間・期末テストの点数で評価する従来型ではなく、馬について学び取り組んできたこと——オリジナル作品などの学習成果そのものを評価する、独自の単位認定方式を採用しています。日々の頑張りがそのまま成績になります。",
  },
  {
    no: "04",
    en: "LICENSE",
    img: "/images/tokucho_004_1.jpg",
    title: "資格・ライセンスを高校授業で取得",
    desc: "全国乗馬倶楽部振興協会認定の乗馬ライセンス、日本馬術連盟認定の騎乗者資格、さらに馬などを扱う家畜商免許まで。高校授業の一環として、将来につながる資格取得を目指せます。",
  },
  {
    no: "05",
    en: "SCHOOLING",
    img: "/images/tokucho_005_1.jpg",
    title: "九州・明蓬館本校への3泊4日スクーリング",
    desc: "年に一度、連携する明蓬館高等学校の本校がある九州へ、3泊4日のスクーリングに出かけます。まるで修学旅行のような「生涯学習」の授業を通じて、仲間との絆を深め、人としての魅力を磨きます。",
  },
  {
    no: "06",
    en: "COMPETITION",
    img: "/images/tokucho_006_1.jpg",
    title: "馬術大会への遠征費用は学校が全額負担",
    desc: "騎乗レベルに応じてコース走行会を数多く設け、外部の馬術大会にも挑戦できます。出場にかかる諸経費は学校が全額負担。費用を気にせず、大会経験を思い切り積み重ねられます。",
  },
  {
    no: "07",
    en: "DORMITORY",
    img: "/images/tokucho_007_1.jpg",
    title: "全寮制。仲間と過ごす大切な3年間",
    desc: "高校生から親元を離れ、同じ夢を持つ仲間と暮らす全寮制。馬と仲間と共に過ごす3年間の寮生活が、人をひとまわりもふたまわりも大きくし、これからの人生を支える確かな礎になります。",
  },
  {
    no: "08",
    en: "FIELDWORK",
    img: "/images/tokucho_008_1.jpg",
    title: "競馬場・牧場での校外学習が単位に",
    desc: "競馬場や外部の乗馬クラブ・牧場などでの研修といった校外学習も、高校の単位認定につながります。本物の現場でのさまざまな体験が、生徒の感受性と意欲を育てます。",
  },
];

export default function TokuchoPage() {
  return (
    <>
      <PageHero
        image="/images/tokucho_001_1.jpg"
        en="FEATURES"
        title="本校の特徴"
        lead="馬と共に暮らし、馬と共に学ぶ。バジガクだからできる高校生活の魅力を、8つの特徴でご紹介します。"
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
            <ScaleIn className="relative z-10 overflow-hidden rounded-3xl shadow-lift">
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
              className="relative z-20 -mt-14 ml-auto w-2/3 overflow-hidden rounded-3xl border-4 border-white shadow-lift md:-mt-20"
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

      {/* 8 FEATURES */}
      <Section className="texture-paper">
        <SectionTitle
          en="8 FEATURES"
          align="center"
          title="バジガクの8つの特徴"
          lead="馬と過ごす毎日を、そのまま高校の学びに。東関東馬事高等学院ならではの8つの特徴をご覧ください。"
        />
        <Stagger className="mt-14 grid gap-6 md:grid-cols-2 md:gap-8">
          {features.map((f) => (
            <StaggerItem key={f.no} className="h-full">
              <article className="group flex h-full flex-col overflow-hidden rounded-3xl bg-white shadow-soft transition duration-300 hover:-translate-y-1.5 hover:shadow-lift">
                <div className="relative h-52 overflow-hidden md:h-64">
                  <Image
                    src={f.img}
                    alt={f.title}
                    fill
                    sizes="(max-width: 768px) 100vw, 50vw"
                    className="object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  <div
                    aria-hidden
                    className="absolute inset-0 bg-gradient-to-t from-pine-950/70 via-pine-950/10 to-transparent"
                  />
                  <div className="absolute bottom-4 left-6 flex items-end gap-3">
                    <span
                      aria-hidden
                      className="font-serif text-6xl font-bold leading-none tracking-tight text-white drop-shadow-md md:text-7xl"
                    >
                      {f.no}
                    </span>
                    <span className="mb-1.5 border-l-2 border-gold-400 pl-3 text-[10px] font-bold tracking-[0.3em] text-gold-300">
                      FEATURE
                      <br />
                      {f.en}
                    </span>
                  </div>
                </div>
                <div className="flex flex-1 flex-col p-7 md:p-8">
                  <h3 className="font-serif text-lg font-bold leading-relaxed text-pine-950 md:text-xl">
                    {f.title}
                  </h3>
                  <div className="mt-4 h-[2px] w-10 rule-gold" />
                  <p className="mt-4 flex-1 text-[13px] leading-7 text-ink-700 md:text-sm md:leading-8">
                    {f.desc}
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
            コース紹介を見る
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
                <blockquote className="mt-8 rounded-2xl border-l-4 border-gold-500 bg-white/5 px-7 py-6">
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
              <div className="overflow-hidden rounded-3xl border-4 border-white/10 shadow-lift">
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

      <CTABand />
    </>
  );
}
