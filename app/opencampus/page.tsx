import type { Metadata } from "next";
import Image from "next/image";
import PageHero from "@/components/PageHero";
import { Section, SectionTitle } from "@/components/Section";
import { FadeUp, ScaleIn, SlideIn, Stagger, StaggerItem } from "@/components/motion";
import CTABand from "@/components/CTABand";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: "学校見学・オープンキャンパス",
  description:
    "馬の高校・東関東馬事高等学院（バジガク）の学校見学＆オープンキャンパスのご案内。JR東京駅八重洲中央口から無料送迎、施設見学・入学説明・乗馬体験までまるごと1日。夏休みには4泊5日のバジガク体験合宿も開催します。",
};

const features = [
  {
    no: "01",
    title: "「本物の空気」を体感",
    desc: "ホームページやパンフレットだけでは伝わらないのが、学校の空気です。馬たちの息づかい、生徒たちの表情、キャンパスの環境——実際に歩いて、触れて、確かめてください。",
  },
  {
    no: "02",
    title: "保護者の方もご一緒に",
    desc: "高校3年間は、社会に出る準備をするとても大切な時間。学校のこと、寮生活のこと、進路のこと。ご本人だけでなく、保護者の皆様もご家族そろってのご参加を歓迎しています。",
  },
  {
    no: "03",
    title: "JR東京駅から無料送迎",
    desc: "遠方からでも気軽にご参加いただけるよう、JR東京駅（八重洲中央口）までお迎えに上がります。帰りはJR八街駅までお送りし、特急しおさい号で東京駅まで戻れます。",
  },
];

type TimelineItem = {
  time: string;
  title: string;
  desc?: string;
  details?: string[];
  img?: { src: string; alt: string };
};

const timeline: TimelineItem[] = [
  {
    time: "11:30",
    title: "JR東京駅 八重洲中央口に集合",
    desc: "無料送迎の車でキャンパスのある千葉県山武市へ出発します。道中も、気になることがあればどんどん質問してください。",
  },
  {
    time: "13:00",
    title: "学校に到着",
    desc: "お車などで直接来場される方は、13時を目安にお越しください。",
  },
  {
    time: "13:10",
    title: "施設見学・馬とご対面",
    desc: "小学校跡地をリノベーションしたキャンパスと学生寮、馬場をご案内。「引退馬の森」も見学し、バジガクの馬たちと初対面です。",
    img: {
      src: "/images/taiken-1_002_1.jpg",
      alt: "オープンキャンパスで馬と対面する参加者",
    },
  },
  {
    time: "13:30",
    title: "入学説明・学校内容・授業内容",
    desc: "入学前に知っておきたいことを、時間をかけて丁寧にご説明します。",
    details: [
      "高校卒業のしくみ（通信制高校との連携）",
      "担当馬制度と、日々の馬の管理・お世話",
      "寮での生活（食事・買い物・休日の過ごし方）",
      "卒業後の就職・進学サポート",
      "馬術競技会への出場やインターン研修の機会",
      "他の馬の学校と比べたバジガクの特徴",
      "ご本人・保護者の方からの質問タイム",
    ],
    img: {
      src: "/images/taiken-1_002_2-1.jpg",
      alt: "入学説明会のようす",
    },
  },
  {
    time: "15:30",
    title: "乗馬体験・馬のお手入れ体験",
    desc: "在校生と騎乗馬の紹介のあと、経験レベルに合わせた乗馬体験にチャレンジ。ブラッシングなどのお手入れで馬とのスキンシップも楽しめます。在校生への質問タイムでは、リアルな学校生活を気軽に聞いてみてください。",
    img: {
      src: "/images/taiken-1_002_3-1.jpg",
      alt: "乗馬体験に挑戦する参加者",
    },
  },
  {
    time: "18:00",
    title: "質問会・個別相談ののち終了",
    desc: "1日を過ごして生まれた疑問や不安に、スタッフが個別にお答えします。",
  },
  {
    time: "18:25",
    title: "JR八街駅までお送りします",
    desc: "JR八街駅から特急しおさい号に乗車すれば、19時29分にJR東京駅へ到着。日帰りでゆっくりご参加いただけます。",
  },
];

const campPrograms = [
  {
    title: "馬のお世話",
    desc: "エサやり・ブラッシング・馬房の手入れなど、生徒たちの毎日を体験",
  },
  {
    title: "乗馬レッスン",
    desc: "経験に合わせた騎乗レッスン。まったくの未経験でも大丈夫",
  },
  {
    title: "野外騎乗",
    desc: "キャンパスを飛び出して、自然の中を馬と歩く特別な時間",
  },
  {
    title: "競馬場見学",
    desc: "競走馬や騎手・厩務員の仕事の現場を、自分の目で確かめる",
  },
];

const campGallery = [
  { src: "/images/taiken-2_002_1.jpg", alt: "体験合宿で馬のお世話をする参加者" },
  { src: "/images/taiken-2_002_2.jpg", alt: "体験合宿の乗馬レッスン" },
  { src: "/images/taiken-2_002_3.jpg", alt: "馬とふれあう体験合宿の参加者" },
  { src: "/images/taiken-2_002_4.jpg", alt: "野外騎乗に出かける参加者たち" },
  { src: "/images/taiken-2_002_5.jpg", alt: "合宿中の騎乗練習のようす" },
  { src: "/images/taiken-2_002_6.jpg", alt: "馬装を学ぶ参加者" },
  { src: "/images/taiken-2_002_7.jpg", alt: "仲間と過ごす合宿の時間" },
  { src: "/images/taiken-2_002_8.jpg", alt: "馬とのスキンシップ" },
  { src: "/images/taiken-2_002_9.jpg", alt: "体験合宿の集合写真" },
];

export default function OpenCampusPage() {
  return (
    <>
      <PageHero
        image="/images/taiken-1_001_1.jpg"
        en="OPEN CAMPUS"
        title="学校見学・オープンキャンパス"
        lead="パンフレットだけでは伝わらない、馬と暮らす高校のリアル。JR東京駅から無料送迎で、施設見学から乗馬体験までまるごと1日、バジガクを体感できます。"
        crumbs={[{ label: "HOME", href: "/" }, { label: "学校見学・オープンキャンパス" }]}
      />

      {/* ABOUT OPEN CAMPUS */}
      <Section className="bg-white">
        <div className="grid items-center gap-12 lg:grid-cols-2">
          <div>
            <SectionTitle
              en="WHAT'S OPEN CAMPUS"
              title={
                <>
                  その目で見て、その手で触れて、
                  <br />
                  進路を決めてほしい。
                </>
              }
            />
            <FadeUp delay={0.15}>
              <p className="mt-8 text-sm leading-8 text-ink-700 md:text-[15px]">
                高校選びは、人生の中でもとても大切な選択のひとつ。だからこそバジガクは、生徒と馬たちが暮らす等身大のキャンパスを自分の目で確かめられる学校見学＆オープンキャンパスを、定期的に開いています。
              </p>
              <p className="mt-4 text-sm leading-8 text-ink-700 md:text-[15px]">
                授業のこと、卒業後の進路、寮での暮らし、そして馬たちとの毎日。疑問や不安は、当日その場でスタッフに直接ぶつけてください。
              </p>
            </FadeUp>
          </div>
          <div className="relative">
            <ScaleIn className="relative z-10 overflow-hidden shadow-lift">
              <Image
                src="/images/taiken-1_003_1.jpg"
                alt="オープンキャンパスで馬とふれあう参加者"
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
                src="/images/taiken-1_002_1-1.jpg"
                alt="キャンパスを見学する参加者"
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
        <Stagger className="mt-16 grid gap-6 md:grid-cols-3">
          {features.map((f) => (
            <StaggerItem key={f.no} className="h-full">
              <div className="flex h-full flex-col border border-cream-300 bg-cream-100 p-7 shadow-soft transition duration-300 hover:-translate-y-1.5 hover:shadow-lift">
                <p className="font-serif text-xs font-bold tracking-[0.35em] text-gold-600">
                  POINT {f.no}
                </p>
                <h3 className="mt-3 font-serif text-lg font-bold text-pine-950">
                  {f.title}
                </h3>
                <p className="mt-4 flex-1 text-[13px] leading-7 text-ink-700">
                  {f.desc}
                </p>
              </div>
            </StaggerItem>
          ))}
        </Stagger>
      </Section>

      {/* TIMELINE */}
      <Section className="texture-paper">
        <SectionTitle
          en="SCHEDULE"
          align="center"
          title="オープンキャンパス 1日の流れ"
          lead="東京駅集合から乗馬体験、帰りの送迎まで。参加当日のスケジュールをご紹介します。"
        />
        <div className="mx-auto mt-14 max-w-4xl">
          <ol className="relative space-y-12 border-l-2 border-gold-400/60 pl-8 md:space-y-14 md:pl-12">
            {timeline.map((t) => (
              <li key={t.time} className="relative">
                <span
                  aria-hidden
                  className="absolute -left-[41px] top-1.5 h-4 w-4 rounded-full border-4 border-gold-500 bg-white shadow-soft md:-left-[57px]"
                />
                <FadeUp>
                  <div className="grid items-start gap-6 md:grid-cols-[1fr_auto]">
                    <div>
                      <div className="flex flex-wrap items-center gap-3">
                        <span className="rounded-full bg-pine-800 px-4 py-1.5 font-serif text-sm font-bold tracking-wider text-white">
                          {t.time}
                        </span>
                        <h3 className="font-serif text-lg font-bold text-pine-950 md:text-xl">
                          {t.title}
                        </h3>
                      </div>
                      {t.desc && (
                        <p className="mt-4 text-sm leading-8 text-ink-700 md:text-[15px]">
                          {t.desc}
                        </p>
                      )}
                      {t.details && (
                        <ul className="mt-4 grid gap-2 border border-cream-300 bg-white p-6 sm:grid-cols-2">
                          {t.details.map((d) => (
                            <li
                              key={d}
                              className="flex items-start gap-2.5 text-[13px] leading-6 text-ink-700"
                            >
                              <span
                                aria-hidden
                                className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-gold-500"
                              />
                              {d}
                            </li>
                          ))}
                        </ul>
                      )}
                    </div>
                    {t.img && (
                      <div className="relative h-44 w-full overflow-hidden shadow-soft md:h-40 md:w-60">
                        <Image
                          src={t.img.src}
                          alt={t.img.alt}
                          fill
                          sizes="(max-width: 768px) 100vw, 240px"
                          className="object-cover"
                        />
                      </div>
                    )}
                  </div>
                </FadeUp>
              </li>
            ))}
          </ol>
        </div>
      </Section>

      {/* SUMMER CAMP */}
      <Section id="camp" className="bg-pine-950">
        <SectionTitle
          dark
          en="SUMMER CAMP"
          align="center"
          title={
            <>
              夏休み・4泊5日
              <br className="md:hidden" />
              バジガク体験合宿
            </>
          }
          lead="1日だけでは物足りない。そんなあなたには、夏休みに開催する宿泊型の体験合宿がおすすめです。馬のお世話から野外騎乗、競馬場見学まで、バジガクの学校生活をまるごと4泊5日で体験できます。"
        />
        <div className="mt-14 grid gap-8 lg:grid-cols-[1.1fr_1fr]">
          <FadeUp>
            <div className="flex h-full flex-col bg-white p-8 shadow-lift md:p-10">
              <p className="text-[11px] font-bold tracking-[0.4em] text-gold-600">
                OUTLINE
              </p>
              <h3 className="mt-3 font-serif text-xl font-bold text-pine-950 md:text-2xl">
                開催概要
              </h3>
              <dl className="mt-6 space-y-5 text-sm">
                <div className="flex flex-col gap-1 border-b border-cream-300 pb-5 sm:flex-row sm:gap-6">
                  <dt className="w-24 shrink-0 font-bold text-pine-800">日程</dt>
                  <dd className="leading-7 text-ink-700">
                    夏休み期間の4泊5日（最新の開催日・申込期限は申込フォームでご確認ください）
                  </dd>
                </div>
                <div className="flex flex-col gap-1 border-b border-cream-300 pb-5 sm:flex-row sm:gap-6">
                  <dt className="w-24 shrink-0 font-bold text-pine-800">参加費</dt>
                  <dd className="leading-7 text-ink-700">
                    <span className="font-serif text-2xl font-bold text-pine-950">
                      16,000
                    </span>
                    <span className="ml-1 font-bold text-pine-950">円（税込）</span>
                    <span className="mt-1 block text-xs text-ink-500">
                      乗馬費用・宿泊費・食事代を含みます
                    </span>
                  </dd>
                </div>
                <div className="flex flex-col gap-1 border-b border-cream-300 pb-5 sm:flex-row sm:gap-6">
                  <dt className="w-24 shrink-0 font-bold text-pine-800">対象</dt>
                  <dd className="leading-7 text-ink-700">
                    本校への入学をご検討中の方、およびすでに合格内定を受けている方
                  </dd>
                </div>
                <div className="flex flex-col gap-1 sm:flex-row sm:gap-6">
                  <dt className="w-24 shrink-0 font-bold text-pine-800">経験</dt>
                  <dd className="leading-7 text-ink-700">
                    乗馬経験は不問。まったくの未経験の方も気軽にご参加いただけます
                  </dd>
                </div>
              </dl>
            </div>
          </FadeUp>
          <Stagger className="grid content-start gap-5 sm:grid-cols-2">
            {campPrograms.map((p) => (
              <StaggerItem key={p.title} className="h-full">
                <div className="flex h-full flex-col border border-white/10 bg-pine-900 p-6 transition duration-300 hover:-translate-y-1.5 hover:shadow-lift">
                  <h4 className="font-serif text-base font-bold text-sun-400 md:text-lg">
                    {p.title}
                  </h4>
                  <p className="mt-3 text-[13px] leading-6 text-white/80">
                    {p.desc}
                  </p>
                </div>
              </StaggerItem>
            ))}
            <StaggerItem className="sm:col-span-2">
              <p className="border border-gold-400/40 bg-pine-900/60 p-5 text-xs leading-6 text-white/70">
                ※ 実際の授業の雰囲気も体験しながら、学校生活を過ごすように入学をご検討いただけます。お申し込みまでに、学校見学・オープンキャンパスへのご参加をお願いしています。
              </p>
            </StaggerItem>
          </Stagger>
        </div>
        <Stagger gap={0.06} className="mt-12 grid grid-cols-2 gap-4 md:grid-cols-3">
          {campGallery.map((g) => (
            <StaggerItem key={g.src}>
              <div className="group relative h-40 overflow-hidden md:h-52">
                <Image
                  src={g.src}
                  alt={g.alt}
                  fill
                  sizes="(max-width: 768px) 50vw, 33vw"
                  className="object-cover transition-transform duration-700 group-hover:scale-110"
                />
              </div>
            </StaggerItem>
          ))}
        </Stagger>
      </Section>

      {/* APPLY */}
      <Section className="bg-white">
        <div className="mx-auto max-w-3xl text-center">
          <SectionTitle
            en="ENTRY"
            align="center"
            title="お申込み・お問い合わせ"
            lead="学校見学・オープンキャンパス、体験合宿へのお申込みは、Webフォームからどうぞ。ご不明な点はお電話でもお気軽にご相談ください。"
          />
          <FadeUp delay={0.15}>
            <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
              <a
                href={site.forms.taiken}
                target="_blank"
                rel="noopener noreferrer"
                className="group inline-flex w-full items-center justify-center gap-3 rounded-full bg-sun-500 px-10 py-4 text-sm font-bold text-pine-950 shadow-soft transition hover:shadow-lift sm:w-auto"
              >
                参加申込みフォームへ
                <span className="transition-transform duration-300 group-hover:translate-x-1.5">
                  →
                </span>
              </a>
              <a
                href={`tel:${site.tel}`}
                className="inline-flex w-full items-center justify-center gap-3 rounded-full border-2 border-pine-800 px-10 py-4 text-sm font-bold text-pine-800 transition hover:bg-pine-50 sm:w-auto"
              >
                <span className="text-[11px] tracking-[0.2em]">TEL</span>
                <span className="font-serif text-base tracking-wider">
                  {site.tel}
                </span>
              </a>
            </div>
            <p className="mt-6 text-xs leading-6 text-ink-500">
              お申込み後、日程などの詳細を事務局よりご連絡いたします。
            </p>
          </FadeUp>
        </div>
      </Section>

      <CTABand />
    </>
  );
}
