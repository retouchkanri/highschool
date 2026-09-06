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
    absolute: "競走馬の牧場で働くには｜生産牧場・育成牧場への就職を目指す｜馬の高校　東関東馬事高等学院",
  },
  description:
    "競走馬の生産牧場・育成牧場で働くには？東関東馬事高等学院では、冠名「バジガク」の現役競走馬を教材に、飼養管理・馬匹管理・騎乗運動管理の3つの管理を毎日実践。北海道をはじめ全国の牧場でのインターンシップを重ね、高校卒業と同時に競走馬の牧場スタッフを目指せます。",
  keywords: [
    "競走馬牧場",
    "生産牧場",
    "育成牧場",
    "牧場就職",
    "牧場スタッフ",
    "競走馬育成",
    "サラブレッド生産",
    "北海道牧場",
    "馬の仕事",
    "競馬の仕事",
    "馬の高校",
    "馬の学校",
    "東関東馬事高等学院",
    "バジガク",
  ],
};

/* ---------------- 牧場の3つのフィールド ---------------- */

const fields = [
  {
    no: "01",
    en: "BREEDING",
    title: "生産牧場",
    sub: "サラブレッドの命が生まれる現場",
    desc: "繁殖牝馬の管理から出産、当歳・1歳馬の育成まで。夜通しの分娩当番、母子の観察、放牧地での馴致——「競走馬になる前の馬」と向き合う仕事です。セリに向けた馬づくりも大切な役目になります。",
    img: "/images/top_future_004.jpg",
    alt: "放牧地で過ごす繁殖牝馬と当歳馬",
  },
  {
    no: "02",
    en: "TRAINING",
    title: "育成牧場",
    sub: "競走馬としての土台をつくる現場",
    desc: "1歳の秋から2歳にかけて、馬に人を乗せることを教え、走るための身体をつくっていきます。騎乗による調教が仕事の中心。ここで育てた馬が、やがて競馬場のゲートに入っていきます。",
    img: "/images/top_future_005.jpg",
    alt: "育成牧場での騎乗調教",
  },
  {
    no: "03",
    en: "REST & AFTERCARE",
    title: "外厩・休養牧場",
    sub: "競走馬を送り出し、迎え入れる現場",
    desc: "レースを終えた馬の休養、故障明けのリハビリ、トレセンへ送り出す前の仕上げ。近年その役割は年々大きくなっており、馬の状態を読み取る観察力が何より求められる分野です。",
    img: "/images/top_future_007.jpg",
    alt: "休養馬の管理に取り組む生徒",
  },
];

/* ---------------- 本校の6つの強み ---------------- */

const supports = [
  {
    no: "01",
    tag: "現役競走馬",
    title: "冠名「バジガク」の競走馬が教材",
    desc: "本校は地方競馬の馬主免許を持ち、冠名「バジガク」の現役競走馬を自校で管理しています。写真や動画ではなく、実際にレースへ出走する馬を相手に、牧場と同じ管理業務を毎日積み重ねられます。",
  },
  {
    no: "02",
    tag: "担当馬制度",
    title: "1頭を任される、という経験",
    desc: "入学すると一人ひとりに担当馬がつきます。飼料を考え、馬体を確認し、運動をつける。「言われたことをやる」から「自分で考えて判断する」へ。牧場が求めるのは、まさにこの力です。",
  },
  {
    no: "03",
    tag: "インターンシップ",
    title: "北海道をはじめ、全国の牧場へ",
    desc: "2年次以降、競走馬実践カリキュラムを修了した生徒から全国の牧場での実地研修が始まります。生産・育成・外厩と、性格の異なる現場を在学中に複数経験し、自分に合う仕事を確かめられます。",
  },
  {
    no: "04",
    tag: "求人ネットワーク",
    title: "全国350件超の馬関連求人",
    desc: "平成21年の設立以来積み重ねてきた馬業界とのつながりが、そのまま進路の選択肢になります。「牧場で働きたい」という希望に対して、地域・規模・仕事内容まで含めて一緒に選んでいけます。",
  },
  {
    no: "05",
    tag: "座学",
    title: "馬体・飼料・繁殖を体系的に",
    desc: "馬の身体のつくり、飼料の栄養設計、病気やクセ、繁殖のサイクル。現場で「なぜそうするのか」を説明できる知識を、高校の履修科目として体系的に学びます。レポートは単位認定の対象です。",
  },
  {
    no: "06",
    tag: "資格",
    title: "在学中に取得できる関連資格",
    desc: "乗馬ライセンス（全国乗馬倶楽部振興協会）、騎乗者資格（日本馬術連盟）に加え、馬の売買に必要な家畜商免許も在学中に取得可能。高卒資格・関連資格・実務経験を携えて現場に出られます。",
  },
];

/* ---------------- 3つの管理 ---------------- */

const pillars = [
  {
    no: "01",
    en: "FEEDING",
    title: "飼養管理",
    sub: "その馬に必要な一日を、自分で組み立てる",
    desc: "担当馬の体重・体調・運動量から、必要な飼料と量を毎日考えます。牧草・配合飼料・サプリメントの組み合わせを記録し、変化を追う。牧場の朝がここから始まることを、身体で覚えていきます。",
  },
  {
    no: "02",
    en: "HORSE CARE",
    title: "馬匹管理",
    sub: "小さな異変に、いちばん早く気づく人になる",
    desc: "馬体の触診、脚元のチェック、蹄の手入れ、装蹄師や獣医との連携。牧場でもっとも頼りにされるのは「昨日と違う」に気づける人です。毎日同じ馬を見続けることでしか身につかない目を養います。",
  },
  {
    no: "03",
    en: "EXERCISE",
    title: "騎乗運動管理",
    sub: "基本馬術から、競走馬のモンキー騎乗まで",
    desc: "習熟度に応じて1日1回から多い日には3〜4回の騎乗機会。基本馬術で正しい姿勢とバランスを固め、そのうえで競走馬を扱うためのモンキー騎乗へ。育成牧場で通用する騎乗技術を3年かけて磨きます。",
  },
];

/* ---------------- 牧場就職までのロードマップ ---------------- */

const roadmap = [
  {
    no: "01",
    period: "1年次・4月〜",
    label: "入学",
    title: "未経験から、馬と暮らす毎日へ",
    desc: "入学生の多くは乗馬未経験。まずはおとなしい馬とのパートナーシップづくりから始め、担当馬のお世話と基礎乗馬を通じて、馬を扱う基本を身につけます。",
  },
  {
    no: "02",
    period: "1年次後半〜2年次",
    label: "基礎",
    title: "馬を「管理する」側の視点を持つ",
    desc: "飼料設計、馬体の見方、病気とケガ、繁殖のサイクル。講義で知識を固めながら、担当馬の管理を毎日実践。乗馬の応用技術とあわせて、牧場で働くための土台を築きます。",
  },
  {
    no: "03",
    period: "2年次・10月〜",
    label: "コース選択",
    title: "競走馬厩務員コースを選択",
    desc: "2年次9月頃の進路指導を経て、10月以降に競走馬厩務員コースへ。冠名「バジガク」の現役競走馬を担当し、飼養・馬匹・騎乗運動の3つの管理を実践で積み重ねます。",
  },
  {
    no: "04",
    period: "2〜3年次",
    label: "インターン",
    title: "北海道・全国の牧場で働いてみる",
    desc: "生産牧場、育成牧場、トレセン近郊の外厩。在学中に3か所以上の現場を経験し、一部は有償での実習になります。「働くことを学び、学びながら働く」時間です。",
  },
  {
    no: "05",
    period: "3年次・10月〜",
    label: "就職活動",
    title: "現場との相性を確かめて、決める",
    desc: "2週間程度の職場体験を通じて、就職先とのマッチングを図ります。求人票の条件だけでなく、実際に働いてみた実感で選べるのが本校の進路指導です。",
  },
];

/* ---------------- 実績 ---------------- */

const resultStats = [
  { value: 118, suffix: "頭", label: "本校で管理する馬匹の数" },
  { value: 350, suffix: "件超", label: "馬関連の求人ネットワーク" },
  { value: 8, suffix: "施設", label: "本校の職場実習連携施設" },
  { value: 73, suffix: "%", label: "未経験・初心者の入学率", note: "※令和3年以降実績" },
];

const employers = [
  "ノーザンファーム",
  "社台ファーム",
  "ビッグレッドファーム",
  "大山ヒルズ",
  "追分ファーム",
  "坂東牧場",
  "白井牧場",
  "宇治田原優駿ステーブル",
  "グリーンウッドパーク",
];

/* ---------------- FAQ ---------------- */

const pick = (q: string): QA[] => {
  const hit = faqs.find((f) => f.q === q);
  return hit ? [{ q: hit.q, a: hit.a }] : [];
};

const farmFaqs: QA[] = [
  {
    q: "乗馬未経験でも、競走馬の牧場に就職できますか？",
    a: "できます。バジガクの入学生の6〜7割は乗馬未経験・初心者からのスタートです。牧場が新人に求めるのは、いきなりの騎乗技術よりも「馬を怖がらずに扱えること」「毎日の作業を丁寧に続けられること」。本校では1年次に基礎乗馬と担当馬のお世話でその土台をつくり、2年次以降に現役競走馬の管理へ進みます。高校3年間で実務経験を積んだうえで現場に出られるのは、大きな強みになります。",
  },
  {
    q: "女子でも牧場で働けますか？",
    a: "はい。生産・育成の現場では多くの女性スタッフが活躍しており、本校の卒業生にも牧場で働く女子がいます。とくに育成牧場の騎乗調教は体重が軽いほうが有利な面もあり、性別が壁になる仕事ではありません。寮は男女別棟・全室個室で、実習先の受け入れ体制についても学校が事前に確認したうえで送り出しています。",
  },
  {
    q: "生産牧場と育成牧場、どちらを選べばいいですか？",
    a: "在学中に両方を経験してから決められます。生産は繁殖・分娩・当歳馬の管理が中心で、育成は騎乗調教が中心。求められる適性も生活のリズムも異なります。本校では2年次以降のインターンシップで性格の異なる現場を複数まわり、「自分がどちらの仕事にやりがいを感じるか」を確かめたうえで進路を選びます。入学時に決めておく必要はまったくありません。",
  },
  ...pick("在学中に牧場などでの研修はありますか？"),
  ...pick("一般高校乗馬コースと競走馬厩務員コースは、いつ選択するのですか？"),
  ...pick("卒業後はどんな馬の仕事に就けますか？"),
];

export default function BokujoPage() {
  return (
    <>
      {/* (1) Hero */}
      <PageHero
        image="/images/bokujo_001_1.jpg"
        en="FARM CAREER"
        title="競走馬の牧場を目指す方へ"
        lead="サラブレッドが生まれ、育ち、競馬場へ向かうまで。そのすべてが牧場の仕事です。バジガクは現役競走馬を教材に、高校3年間で「牧場で通用する実務」を身につけます。"
        crumbs={[
          { label: "HOME", href: "/" },
          { label: "進路・サポート" },
          { label: "競走馬の牧場を目指す方へ" },
        ]}
      />

      {/* (2) 牧場の仕事とは */}
      <Section id="about" className="bg-white">
        <div className="grid items-start gap-12 lg:grid-cols-2">
          <div>
            <SectionTitle
              en="WHAT IS A FARM JOB"
              title={
                <>
                  競馬の主役をつくるのは、
                  <br />
                  牧場で働く人たちです。
                </>
              }
              lead="ターフを走る1頭の競走馬の背後には、その馬を産ませ、育て、送り出してきた牧場の人たちがいます。生産牧場での出産と馴致、育成牧場での騎乗調教、外厩での休養とリハビリ——競走馬の一生のほとんどは、実は牧場で過ごされています。派手さはなくても、競馬というスポーツの土台をつくる仕事です。"
            />
            <FadeUp delay={0.15} className="mt-10 space-y-4">
              <div className="border-l-4 border-gold-500 bg-cream-100 p-5">
                <p className="text-xs font-bold tracking-[0.25em] text-gold-600">
                  POINT 1
                </p>
                <h3 className="mt-2 text-sm font-bold text-pine-950 md:text-[15px]">
                  高校3年間が、そのまま実務経験になる
                </h3>
                <p className="mt-2 text-[13px] leading-7 text-ink-700">
                  本校は約120頭の馬を管理し、そのうち冠名「バジガク」の現役競走馬を自校で保有しています。牧場と同じ業務を高校生のうちから毎日繰り返せる環境は、全国的にも例がありません。
                </p>
              </div>
              <div className="border-l-4 border-pine-800 bg-cream-100 p-5">
                <p className="text-xs font-bold tracking-[0.25em] text-pine-700">
                  POINT 2
                </p>
                <h3 className="mt-2 text-sm font-bold text-pine-950 md:text-[15px]">
                  現場を知ってから、就職先を決められる
                </h3>
                <p className="mt-2 text-[13px] leading-7 text-ink-700">
                  在学中に3か所以上の牧場・競馬関連施設で実地研修を経験します。求人票を見て決めるのではなく、実際に働いてみた実感で進路を選べるのが本校の進路指導です。
                </p>
              </div>
              <p className="text-[11px] leading-6 text-ink-500">
                ※インターンシップ先・実施時期は、年度や一人ひとりの習熟度により変わる場合があります。
              </p>
            </FadeUp>
          </div>
          <div className="relative lg:sticky lg:top-28">
            <ScaleIn className="relative z-10 overflow-hidden shadow-lift">
              <Image
                src="/images/kyumuin_001_1.jpg"
                alt="担当する競走馬と過ごす生徒たち"
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
                alt="担当馬の飼養管理に取り組む生徒"
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

      {/* (3) 3つのフィールド */}
      <Section id="fields" className="texture-paper">
        <SectionTitle
          en="THREE FIELDS"
          align="center"
          title="ひとくちに「牧場」と言っても、仕事は3つに分かれます"
          lead="どの現場を目指すかで、身につけるべき技術も生活のリズムも変わります。バジガクではこの3つすべてに触れたうえで、自分の進む道を選んでいきます。"
        />
        <Stagger className="mt-12 grid gap-6 md:grid-cols-3">
          {fields.map((f) => (
            <StaggerItem key={f.no} className="h-full">
              <div className="flex h-full flex-col overflow-hidden bg-white shadow-soft transition duration-300 hover:-translate-y-1.5 hover:shadow-lift">
                <div className="relative h-48 overflow-hidden">
                  <Image
                    src={f.img}
                    alt={f.alt}
                    fill
                    sizes="(max-width: 768px) 100vw, 33vw"
                    className="object-cover transition-transform duration-700 hover:scale-110"
                  />
                  <span className="absolute left-4 top-4 rounded-full bg-pine-950/85 px-3.5 py-1.5 font-serif text-xs font-bold tracking-[0.2em] text-gold-300 backdrop-blur-sm">
                    {f.no}
                  </span>
                </div>
                <div className="flex flex-1 flex-col p-7">
                  <p className="text-[11px] font-bold tracking-[0.3em] text-gold-600">
                    {f.en}
                  </p>
                  <h3 className="mt-2 font-serif text-xl font-bold text-pine-950">
                    {f.title}
                  </h3>
                  <p className="mt-1 text-xs font-bold text-pine-700">{f.sub}</p>
                  <p className="mt-4 flex-1 text-[13px] leading-7 text-ink-700">
                    {f.desc}
                  </p>
                </div>
              </div>
            </StaggerItem>
          ))}
        </Stagger>
      </Section>

      {/* (4) 本校の6つの強み */}
      <Section id="support" className="bg-white">
        <SectionTitle
          en="SUPPORT"
          align="center"
          title="牧場就職に向けた、6つのサポート"
          lead="牧場が新人に求めるのは、馬を扱える手と、毎日を続けられる体力、そして自分で考える力です。バジガクは高校生活そのものを、その訓練として組み立てています。"
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
            牧場で身につけた管理能力と騎乗技術は、そのままJRA厩務員試験や地方競馬の厩務員を目指すうえでも活きる力です。牧場に就職してから厩務員を目指す卒業生も少なくありません。
          </p>
        </FadeUp>
      </Section>

      {/* (5) 3つの管理 */}
      <Section id="curriculum" className="bg-cream-100">
        <SectionTitle
          en="THREE MANAGEMENTS"
          align="center"
          title={
            <>
              毎日繰り返す、3つの管理
              <span className="mt-3 block font-serif text-base font-bold leading-snug text-pine-800 md:text-xl">
                飼養管理・馬匹管理・騎乗運動管理。
              </span>
            </>
          }
          lead="牧場の仕事は、この3つの管理の積み重ねでできています。バジガクではこれを座学ではなく、担当馬を相手にした毎日の実践として学びます。"
        />
        <Stagger className="mt-12 grid gap-6 md:grid-cols-3">
          {pillars.map((p) => (
            <StaggerItem key={p.no} className="h-full">
              <div className="relative flex h-full flex-col bg-white p-8 pt-10 shadow-soft transition duration-300 hover:-translate-y-1.5 hover:shadow-lift">
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
              src="/images/DSC_0047-2.jpg"
              alt="馬場で騎乗訓練に励む生徒たち"
              width={1600}
              height={700}
              className="h-56 w-full object-cover md:h-80"
            />
          </div>
          <p className="mt-3 text-center text-xs text-ink-500">
            習熟度に応じて1日1回から多い日には3〜4回。騎乗機会の多さが、そのまま牧場での実践力につながります。
          </p>
        </FadeUp>
      </Section>

      {/* (6) ロードマップ */}
      <Section id="roadmap" className="bg-white">
        <SectionTitle
          en="ROADMAP"
          align="center"
          title="牧場就職までのロードマップ"
          lead="乗馬未経験の入学から、牧場への就職まで。3年間で積み上げる5つのステップをご紹介します。"
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
            ※スケジュールは年度や一人ひとりの習熟度により変わる場合があります。
          </p>
        </div>
        <FadeUp delay={0.1} className="mt-16">
          <div className="grid items-center gap-10 bg-cream-100 p-6 shadow-soft md:p-10 lg:grid-cols-2">
            <div className="overflow-hidden">
              <Image
                src="/images/kyumuin_003_1.jpg"
                alt="牧場での職場研修を終えた生徒たち"
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
                豊富なインターンシップ
              </h3>
              <p className="mt-3 text-sm font-bold leading-7 text-pine-800">
                現場を知るから、自分に合った牧場が見えてくる。
              </p>
              <p className="mt-5 text-sm leading-8 text-ink-700">
                2年次以降、競走馬実践カリキュラムを修了した生徒から、全国の牧場で実地研修を開始します。研修先は、バジガクが持つ全国の馬関連ネットワークから、一人ひとりの目標に合わせて選択。一部は有償での実習となっており、「働くことを学び、学びながら働く」経験を積めるのも特長です。
              </p>
              <div className="mt-7 grid grid-cols-2 gap-4">
                <div className="bg-white p-5 text-center">
                  <p className="font-serif text-3xl font-bold text-pine-800 md:text-4xl">
                    <Counter to={3} suffix="か所以上" />
                  </p>
                  <p className="mt-2 text-xs font-bold text-ink-700">
                    在学中に経験する牧場・競馬関連施設
                  </p>
                </div>
                <div className="bg-white p-5 text-center">
                  <p className="font-serif text-3xl font-bold text-pine-800 md:text-4xl">
                    北海道〜全国
                  </p>
                  <p className="mt-2 text-xs font-bold text-ink-700">
                    希望する進路に合わせた実地研修
                  </p>
                </div>
              </div>
              <p className="mt-4 text-[11px] leading-6 text-ink-500">
                ※上記は、株式会社馬事学院全体（東関東馬事高等学院・東関東馬事専門学院）の実績を掲載しています。
              </p>
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

      {/* (7) 実績・就職先 */}
      <section id="results" className="relative overflow-hidden bg-pine-900 py-16 md:py-24">
        <div
          aria-hidden
          className="absolute inset-0 bg-cover bg-center opacity-10"
          style={{ backgroundImage: "url(/images/kyumuin_002_1.jpg)" }}
        />
        <div className="relative mx-auto max-w-7xl px-6">
          <SectionTitle
            dark
            align="center"
            en="RESULTS"
            title="牧場への就職実績"
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
              EMPLOYERS
            </p>
            <h3 className="mt-2 text-center font-serif text-2xl font-bold text-white md:text-3xl">
              主な牧場就職先
            </h3>
            <p className="mx-auto mt-4 max-w-3xl text-center text-sm leading-7 text-white/80">
              卒業生は、全国の生産牧場・育成牧場・外厩へと進んでいます。以下はその一部です。
            </p>
            <Stagger className="mx-auto mt-8 grid max-w-4xl grid-cols-2 gap-3 md:grid-cols-3">
              {employers.map((e) => (
                <StaggerItem key={e}>
                  <div className="border border-white/15 bg-white/5 px-4 py-4 text-center text-[13px] font-bold text-white transition duration-300 hover:border-gold-400/60 hover:bg-white/10">
                    {e}
                  </div>
                </StaggerItem>
              ))}
            </Stagger>
            <p className="mt-6 text-center text-[11px] leading-6 text-white/55">
              ※上記は、株式会社馬事学院全体（東関東馬事高等学院・東関東馬事専門学院）の実績を掲載しています。ほかにも各地の乗馬クラブ・観光牧場・養老牧場などへの就職実績があります。
            </p>
          </FadeUp>
          <FadeUp delay={0.2} className="mt-10 text-center">
            <Link
              href="/tokucho#career"
              className="inline-flex items-center gap-2 text-sm font-bold text-gold-300 transition hover:text-gold-400"
            >
              卒業後の進路について詳しく見る
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
          title="牧場志望の方から、よくあるご質問"
          lead="未経験からの挑戦、生産と育成の違い、インターンシップのこと。牧場を目指す方から特に多くいただくご質問にお答えします。"
        />
        <FadeUp delay={0.1} className="mx-auto mt-12 max-w-3xl">
          <Accordion items={farmFaqs} />
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
