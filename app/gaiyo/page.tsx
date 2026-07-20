import type { Metadata } from "next";
import Image from "next/image";
import PageHero from "@/components/PageHero";
import { Section, SectionTitle } from "@/components/Section";
import { FadeUp, Stagger, StaggerItem } from "@/components/motion";
import CTABand from "@/components/CTABand";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: "学校概要",
  description:
    "馬の高校 東関東馬事高等学院（バジガク）の学校概要。名称・所在地などの基本情報、3つの教育方針、平成21年の設立から小学校跡地への移転までの沿革、リノベーションされたキャンパスをご紹介します。",
};

const profileRows: { label: string; value: React.ReactNode }[] = [
  {
    label: "名称",
    value: (
      <>
        馬の高校 東関東馬事高等学院
        <span className="mt-1 block text-xs text-ink-500">
          学校長：{site.principal}
        </span>
      </>
    ),
  },
  { label: "設立", value: site.founded },
  {
    label: "所在地",
    value: (
      <>
        〒289-1213 千葉県山武市雨坪10番地
        <span className="mt-1 block text-xs text-ink-500">
          旧・日向小学校をリノベーションしたキャンパスです
        </span>
      </>
    ),
  },
  {
    label: "TEL",
    value: (
      <a
        href={`tel:${site.tel}`}
        className="font-bold tracking-wider text-pine-800 transition hover:text-gold-600"
      >
        {site.tel}
      </a>
    ),
  },
  { label: "FAX", value: site.fax },
  { label: "運営", value: "株式会社馬事学院" },
];

const policies = [
  {
    no: "01",
    en: "HEART",
    title: "思いやりと感謝の心を育てる",
    desc: "馬という大切な命と向き合い、仲間と支え合う団体生活を送る毎日。互いに助け合う気持ち、相手を思いやる心、そして感謝の気持ちを、日々の暮らしの中で自然と身につけていきます。",
  },
  {
    no: "02",
    en: "INDIVIDUALITY",
    title: "一人ひとりの個性を伸ばす",
    desc: "個性を尊重する教育のもと、生徒一人ひとりが持っている可能性・個性・特性を最大限に引き伸ばし、情操豊かな人間性を養います。得意なことを見つけ、自信に変えていく3年間です。",
  },
  {
    no: "03",
    en: "PROFESSION",
    title: "馬業界を担う人材を育てる",
    desc: "馬業界を志す若者たちに、確かな馬学の知識と豊かな技術を。国内外における馬事の発展を目指し、その未来を担っていける有能な人材の育成を図ります。",
  },
];

type HistoryItem = {
  date: string;
  year: string;
  title: string;
  desc?: string;
  highlight?: boolean;
};

const history: HistoryItem[] = [
  {
    date: "平成21年 9月",
    year: "2009",
    title: "東関東馬事高等学院・東関東馬事職業訓練を設立",
    desc: "馬と共に学ぶ学校づくりが、千葉の地でスタート。",
  },
  {
    date: "平成21年12月",
    year: "2009",
    title: "広域通信制「明蓬館高等学校」と連携",
    desc: "馬の学びと高校卒業資格の取得を両立できる体制が整う。",
  },
  {
    date: "平成22年 1月",
    year: "2010",
    title: "東関東ジュニアホースクラブを設立",
    desc: "スポーツ少年団として、子どもたちにも馬との出会いを届ける。",
  },
  {
    date: "平成24年 4月",
    year: "2012",
    title: "「東関東馬事専門学院」へと名称を改める",
    desc: "東関東馬事職業訓練から改名し、新たな体制へ。",
  },
  {
    date: "平成26年 7月",
    year: "2014",
    title: "株式会社馬事学院が地方競馬馬主免許を取得",
    desc: "兵庫・神奈川・東京・石川・千葉の各馬主会に加盟。",
  },
  {
    date: "平成26年12月",
    year: "2014",
    title: "学校管理馬が地方競馬のレースに出走",
    desc: "初戦はエテガンテ号が3着と健闘。",
  },
  {
    date: "平成28年 4月",
    year: "2016",
    title: "在学中のJRA競馬学校 厩務員課程受験がスタート",
    desc: "以来、現役合格者を続々と輩出している。",
  },
  {
    date: "平成30年 3月",
    year: "2018",
    title: "千葉県八街市に「引退馬の森」を設立",
    desc: "引退した馬たちのセカンドライフを支える取り組みへ。",
  },
  {
    date: "令和2年 7月",
    year: "2020",
    title: "大阪府河内長野市に「引退馬の森 ホースレスト」を設立",
  },
  {
    date: "令和4年 4月",
    year: "2022",
    title: "山武市雨坪・小学校跡地のリノベーションを開始",
    desc: "旧・日向小学校が「馬の高校」へと生まれ変わっていく。",
  },
  {
    date: "令和5年 4月",
    year: "2023",
    title: "新キャンパスへの移転が完了",
    desc: "現在の校舎で、バジガクの新しい歴史が始まる。",
    highlight: true,
  },
];

type CampusPhoto = {
  img: string;
  title: string;
  desc: string;
  wide?: boolean;
};

const campusPhotos: CampusPhoto[] = [
  {
    img: "/images/shisetsu_002_1.jpg",
    title: "校舎外観",
    desc: "旧・日向小学校の面影を残す学び舎",
    wide: true,
  },
  {
    img: "/images/shisetsu_003_1.jpg",
    title: "ラウンジ",
    desc: "ソファでくつろげる共有スペース",
  },
  {
    img: "/images/shisetsu_004_1.jpg",
    title: "食堂",
    desc: "365日3食、仲間と食卓を囲む",
  },
  {
    img: "/images/shisetsu_005_1.jpg",
    title: "教室",
    desc: "高校授業もキャンパス内で",
  },
  {
    img: "/images/shisetsu_007_1.jpg",
    title: "体育館",
    desc: "天候を気にせず身体を動かせる",
  },
  {
    img: "/images/shisetsu_012_1.jpg",
    title: "講義室",
    desc: "座学で馬の知識をじっくり深める",
  },
];

export default function GaiyoPage() {
  return (
    <>
      <PageHero
        image="/images/shisetsu_001_1.jpg"
        en="ABOUT"
        title="学校概要"
        lead="馬の高校「バジガク」こと東関東馬事高等学院の基本情報・教育方針・沿革をご紹介します。舞台は、小学校跡地をリノベーションした千葉県山武市のキャンパスです。"
        crumbs={[{ label: "HOME", href: "/" }, { label: "学校概要" }]}
      />

      {/* SCHOOL PROFILE */}
      <Section className="texture-paper">
        <div className="grid gap-12 lg:grid-cols-[minmax(0,1fr)_minmax(0,1.25fr)] lg:gap-16">
          <div>
            <SectionTitle
              en="SCHOOL PROFILE"
              title={
                <>
                  馬と共に、
                  <br />
                  高校3年間を過ごす学校。
                </>
              }
            />
            <FadeUp delay={0.15}>
              <p className="mt-8 text-sm leading-8 text-ink-700 md:text-[15px]">
                東関東馬事高等学院は、株式会社馬事学院が運営する「馬の学校」です。広域通信制高校・明蓬館高等学校との連携により、馬に囲まれた毎日を送りながら高校卒業資格の取得を目指せます。
              </p>
              <p className="mt-4 text-sm leading-8 text-ink-700 md:text-[15px]">
                騎手・厩務員をはじめ馬業界を志す生徒たちが、全国からこの千葉県山武市のキャンパスに集まっています。
              </p>
            </FadeUp>
          </div>
          <FadeUp delay={0.1}>
            <div className="overflow-x-auto rounded-3xl border border-cream-300 bg-white shadow-soft">
              <table className="w-full min-w-[440px] border-collapse text-left">
                <tbody>
                  {profileRows.map((row) => (
                    <tr
                      key={row.label}
                      className="border-b border-cream-200 last:border-b-0"
                    >
                      <th
                        scope="row"
                        className="w-32 whitespace-nowrap bg-pine-50/70 px-6 py-5 align-top text-xs font-bold tracking-[0.25em] text-pine-800"
                      >
                        {row.label}
                      </th>
                      <td className="px-6 py-5 text-sm leading-7 text-ink-700 md:text-[15px]">
                        {row.value}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </FadeUp>
        </div>
      </Section>

      {/* PHILOSOPHY */}
      <Section className="relative overflow-hidden bg-pine-900">
        <div
          aria-hidden
          className="absolute inset-0 bg-cover bg-center opacity-10"
          style={{ backgroundImage: "url(/images/DSC_0073.jpg)" }}
        />
        <div className="relative">
          <SectionTitle
            dark
            align="center"
            en="PHILOSOPHY"
            title="教育方針"
            lead="バジガクが大切にしているのは、馬の技術だけではありません。命と向き合う毎日を通して、社会で生きていく力そのものを育てます。"
          />
          <Stagger className="mt-12 grid gap-6 md:grid-cols-3">
            {policies.map((p) => (
              <StaggerItem key={p.no} className="h-full">
                <div className="flex h-full flex-col rounded-3xl border border-white/10 bg-white/5 p-8 backdrop-blur-sm transition duration-300 hover:-translate-y-1.5 hover:border-gold-400/40">
                  <div className="flex items-baseline gap-4">
                    <span className="font-serif text-4xl font-bold text-gold-400">
                      {p.no}
                    </span>
                    <span className="text-[10px] font-bold tracking-[0.35em] text-gold-400/80">
                      {p.en}
                    </span>
                  </div>
                  <h3 className="mt-5 font-serif text-lg font-bold leading-relaxed text-white">
                    {p.title}
                  </h3>
                  <div className="mt-4 h-[2px] w-10 bg-gold-500/70" />
                  <p className="mt-5 flex-1 text-[13px] leading-7 text-white/80">
                    {p.desc}
                  </p>
                </div>
              </StaggerItem>
            ))}
          </Stagger>
        </div>
      </Section>

      {/* HISTORY TIMELINE */}
      <Section className="texture-paper">
        <SectionTitle
          en="HISTORY"
          align="center"
          title="沿革 — バジガクのあゆみ"
          lead="平成21年の設立から、小学校跡地の新キャンパスへの移転まで。馬と共に一歩ずつ歩んできた、バジガクのこれまでです。"
        />
        <div className="relative mx-auto mt-14 max-w-3xl pl-8 md:pl-0">
          <div
            aria-hidden
            className="absolute left-[9px] top-2 h-[calc(100%-1rem)] w-[2px] rounded-full bg-gradient-to-b from-gold-400 via-gold-500/50 to-gold-500/15 md:left-[159px]"
          />
          <Stagger gap={0.08} className="space-y-7">
            {history.map((h) => (
              <StaggerItem
                key={`${h.date}-${h.title}`}
                className="relative md:grid md:grid-cols-[132px_1fr] md:gap-14"
              >
                <span
                  aria-hidden
                  className={`absolute -left-[30px] top-1.5 h-4 w-4 rounded-full border-[3px] bg-white shadow-soft md:left-[152px] ${
                    h.highlight ? "border-sun-500" : "border-gold-500"
                  }`}
                />
                <div className="md:pt-0.5 md:text-right">
                  <p className="font-serif text-sm font-bold text-pine-950 md:text-[15px]">
                    {h.date}
                  </p>
                  <p className="mt-0.5 text-[11px] tracking-[0.2em] text-ink-500">
                    {h.year}
                  </p>
                </div>
                <div
                  className={`mt-3 rounded-2xl border bg-white p-5 shadow-soft transition duration-300 hover:-translate-y-1 hover:shadow-lift md:mt-0 md:p-6 ${
                    h.highlight ? "border-gold-500/60" : "border-cream-300"
                  }`}
                >
                  {h.highlight && (
                    <span className="mb-2 inline-block rounded-full bg-sun-500 px-3 py-1 text-[10px] font-bold text-pine-950">
                      現在のキャンパスへ
                    </span>
                  )}
                  <h3 className="text-sm font-bold leading-6 text-pine-950 md:text-[15px]">
                    {h.title}
                  </h3>
                  {h.desc && (
                    <p className="mt-1.5 text-[13px] leading-6 text-ink-700">
                      {h.desc}
                    </p>
                  )}
                </div>
              </StaggerItem>
            ))}
          </Stagger>
        </div>
      </Section>

      {/* CAMPUS */}
      <Section className="bg-white">
        <SectionTitle
          en="CAMPUS"
          align="center"
          title="小学校跡地が、「馬の高校」に生まれ変わった。"
          lead="令和5年、バジガクは旧・日向小学校をリノベーションした新キャンパスへ移転しました。校庭だった場所には馬場が広がり、校舎は生徒たちの学びと暮らしの場へ。どこか懐かしく、ここにしかない学び舎です。"
        />
        <Stagger
          gap={0.07}
          className="mt-12 grid gap-4 md:auto-rows-[230px] md:grid-cols-3"
        >
          {campusPhotos.map((c) => (
            <StaggerItem
              key={c.img}
              className={c.wide ? "md:col-span-2 md:row-span-2" : ""}
            >
              <div className="group relative h-56 overflow-hidden rounded-3xl shadow-soft md:h-full">
                <Image
                  src={c.img}
                  alt={`${c.title}：${c.desc}`}
                  fill
                  sizes={
                    c.wide
                      ? "(max-width: 768px) 100vw, 66vw"
                      : "(max-width: 768px) 100vw, 33vw"
                  }
                  className="object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-pine-950/85 via-pine-950/20 to-transparent" />
                <div className="absolute inset-x-0 bottom-0 p-5">
                  <p className="font-serif text-base font-bold text-white md:text-lg">
                    {c.title}
                  </p>
                  <p className="mt-1 text-[11px] leading-5 text-white/80">
                    {c.desc}
                  </p>
                </div>
              </div>
            </StaggerItem>
          ))}
        </Stagger>
        <FadeUp delay={0.15}>
          <p className="mx-auto mt-10 max-w-2xl text-center text-sm leading-8 text-ink-700">
            キャンパスや学生寮の様子は、学校見学・オープンキャンパスで実際にご覧いただけます。JR東京駅からの無料送迎もありますので、お気軽にお越しください。
          </p>
        </FadeUp>
      </Section>

      <CTABand />
    </>
  );
}
