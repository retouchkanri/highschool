import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import PageHero from "@/components/PageHero";
import { Section, SectionTitle } from "@/components/Section";
import { FadeUp, ScaleIn, SlideIn, Stagger, StaggerItem } from "@/components/motion";
import Accordion, { type QA } from "@/components/Accordion";
import CTABand from "@/components/CTABand";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: {
    absolute: "馬の高校のオープンキャンパス・学校見学｜東京駅発｜東関東馬事高等学院",
  },
  description:
    "関西・関東からの入学生徒も多く、馬の高校を実際に体験してみませんか。乗馬体験、施設見学、学校説明、寮生活や進路相談など、東関東馬事高等学院の学校生活を体験できるオープンキャンパスをご案内します。（大阪府、愛知県、東京都、関西、関東）寮がある馬の高校ランキング。",
  keywords: [
    "馬の高校 オープンキャンパス",
    "馬の学校 見学",
    "乗馬体験 高校",
    "馬の高校 体験入学",
    "体験入学",
    "入試",
    "募集要項",
    "資料請求",
    "比較",
  ],
};

const features = [
  {
    no: "01",
    title: "「本物の学校生活」を体感",
    desc: "馬たちの息づかい、生徒たちの表情、厩舎や馬場、寮での暮らし。ホームページだけでは分からない、ありのままのバジガクを実際に、見て、触れて、確かめてください。",
  },
  {
    no: "02",
    title: "保護者の方も、ぜひご一緒に。",
    desc: "高校3年間を安心して過ごすためには、ご本人だけでなく、ご家族が学校を知ることも大切です。授業や学費、寮生活、進路、就職など、保護者の皆様にも知ってもらいたい。",
  },
  {
    no: "03",
    title: "ＪＲ東京駅までのお迎え",
    desc: "遠方からでも参加しやすいよう、JR東京駅（八重洲中央口）までのお迎え。帰りはJR八街駅までお送りし、特急しおさい号を利用し直通でＪＲ東京方面へお帰り頂けます。",
  },
];

type TimelineItem = {
  time?: string;
  title: string;
  desc?: string;
  details?: string[];
  img?: { src: string; alt: string };
};

const timeline: TimelineItem[] = [
  {
    time: "12:30",
    title: "JR東京駅 八重洲中央口に集合",
    desc: "八重洲中央口で集合し、キャンパスのある千葉県山武市へ出発します。道中も、気になることがあればどんどん質問してください。",
  },
  {
    time: "13:50",
    title: "学校に到着",
    desc: "お車などで直接来場される方は、13時40分を目安にお越しください。（千葉県山武市雨坪10番地）",
  },
  {
    time: "14:00",
    title: "施設見学・馬とご対面",
    desc: "東関東馬事高等学院のキャンパスと学生寮を見学して頂き、厩舎ではバジガクに所属するたくさんの馬たちとご対面です。",
    img: {
      src: "/images/taiken-1_002_1.jpg",
      alt: "オープンキャンパスで馬と対面する参加者",
    },
  },
  {
    time: "14:30～",
    title: "乗馬体験・馬のお手入れ体験",
    desc: "在校生と騎乗馬の紹介のあと、経験レベルに合わせた乗馬体験にチャレンジして頂けます。（まったくの初心者・未経験者でも問題ありません）などのお手入れで馬とのスキンシップも楽しめます。在校生への質問タイムでは、リアルな学校生活を気軽に聞いてみてください。",
    img: {
      src: "/images/taiken-1_002_3-1.jpg",
      alt: "乗馬体験に挑戦する参加者",
    },
  },
  {
    time: "16:00～",
    title: "入学説明・学校内容・授業内容",
    desc: "入学前に知っておきたいことを、本校の教室で時間をかけて丁寧にご説明します。",
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
    time: "17:50",
    title: "質問会・個別相談ののち終了",
    desc: "1日を過ごして生まれた疑問や不安に、スタッフが個別にお答えします。お車で来場されている方は、現地解散となります。",
  },
  {
    title: "ＪＲ千葉・東京方面への電車利用の方は",
    desc: "JR八街駅までお送りします。JR八街駅から特急しおさい号に乗車し、直通でＪＲ千葉駅・ＪＲ東京駅に向かえます。（ＪＲ東京駅到着19時29分）※地下ホームに到着するため、新幹線のりばまでは、少し距離があり時間がかかります。新幹線等の予約をされる場合は、２０時発以降のＪＲ東京駅発の予約がお薦めです。",
  },
];

const openDays = [
  { month: "8", day: "22", dow: "土" },
  { month: "9", day: "2", dow: "水" },
  { month: "10", day: "17", dow: "土" },
];

type ParentPoint = {
  no: string;
  title: string;
  questions?: string[];
  paragraphs: string[];
};

const parentPoints: ParentPoint[] = [
  {
    no: "01",
    title: "バジガクでの生活「自分にも、できるだろうか？」",
    questions: [
      "本当に今の自分でも、そのスタートラインに立てるだろうか？",
      "家族を離れ、地元を離れ、寮生活を続けていけるのだろうか？",
      "毎日の騎乗や馬との生活に、本当になじめるだろうか？",
    ],
    paragraphs: [
      "実際に、学校の雰囲気を確かめ、そして在校生の生の声を参考に「自分のこれからの3年間」を想像してみてください。もちろん、最初からできる人はいません。「ここなら挑戦できそう」と思えるかどうかです。",
    ],
  },
  {
    no: "02",
    title: "「自分が求めている姿」本当にあるのか？",
    questions: [
      "ホームページや資料の内容と実際の内容は同じだろうか？",
      "生徒たちは実際、どんな形で馬たちと関わっているの？",
      "先生と生徒との距離感はどんな感じ？",
      "どんな生徒たち（先輩たち）がここで学んでいるのか？",
      "卒業すれば、どんなところに進路を進めることができるのか？",
      "自分が思い描く高校生活がここで送れるのか？",
    ],
    paragraphs: [
      "その答えは、ホームページやパンフレットにはありません。ご自身の目で必ず確かめてください。これからの3年間は単に高校生活を過ごすだけでなく、皆さん一人ひとりが社会人としてデビューするまでの貴重な3年間です。学校選びは、卒業後の進路や自分の社会デビューに直結しています。是非、ご自分の目で確かめてください。",
    ],
  },
];

type ParentService = {
  no: string;
  en: string;
  title: string;
  paragraphs: string[];
};

const parentServices: ParentService[] = [
  {
    no: "01",
    en: "INDIVIDUAL CONSULTATION",
    title: "気になること、個別にご相談できます！",
    paragraphs: [
      "ご希望の方には、スタッフによる個別相談を実施しています。寮生活、安全管理、授業、進路、人間関係など、3年間大切なお子様をお預けする学校だからこそ、ご本人はもちろん、ご家族が抱える不安や疑問にも、一つひとつ丁寧にお答えします。",
      "これまでの学校生活や現在の状況、将来についてのお悩みなども含め、どんなことでも遠慮なくお話しください。一組ずつ個別にお話を伺いながら、その方に合った学校生活や進路について一緒に考えていきます。",
    ],
  },
  {
    no: "02",
    en: "TUITION",
    title: "学費について、すべてご説明します！",
    paragraphs: [
      "入学金・授業費などの費用の内訳から、納入時期、分割払いについてまで、わかりやすくご説明します。3年間通う学校だからこそ、費用について曖昧なまま入学を決めていただくことはありません。すべて明確に詳細をお知らせいたします。",
      "「3年間でどのくらい必要なのか」「いつまでに、何を支払うのか」「分割払いは利用できるのか」「他に必要な費用はないのだろうか」など、具体的なお話を行い安心してお子様をお預けいただける馬の学校です。",
    ],
  },
  {
    no: "03",
    en: "DORMITORY & MEALS",
    title: "3年間、暮らす場所だからこそ・・・",
    paragraphs: [
      "学校見学では、生徒たちが実際に生活する学生寮や食堂もご覧いただけます。学生寮は全室個室・男女別棟。さらに、365日・1日3食の食事を用意し、門限21時・消灯22時30分という規則正しい生活リズムのもとで学校生活を送ります。",
      "夜間のセキュリティや宿直スタッフによる管理など、親元を離れて生活する生徒たちが安心して3年間を過ごせる環境づくりにも取り組んでいます。毎日を過ごす部屋、食事をする場所、仲間たちとの生活環境です。",
    ],
  },
];

const openCampusFaqs: QA[] = [
  {
    q: "参加には予約が必要ですか？",
    a: `はい、学校見学・オープンキャンパスは完全予約制です。参加申込みフォームまたはお電話（${site.tel}）からご予約ください。日程のご相談やご不明な点も、お電話でお気軽にどうぞ。`,
  },
  {
    q: "当日の持ち物を教えてください。",
    a: "筆記用具・飲み物・汗ふき用のタオル程度で大丈夫です。ヘルメットやプロテクターなど、乗馬体験に必要な用具はすべて学校でご用意しますので、特別な準備はいりません。※詳しい持ち物は、ご予約時にあらためてご案内します。",
  },
  {
    q: "どんな服装で参加すればよいですか？",
    a: "動きやすい服装でお越しください。乗馬体験がありますので、長ズボンと運動靴（スニーカー）がおすすめです。スカートやサンダル・ヒールのある靴はお避けください。学校の制服でのご参加も可能ですが、その場合は着替え用の長ズボンをお持ちいただくと安心です。",
  },
  {
    q: "保護者だけでも見学できますか？",
    a: "はい、ご相談いただけます。ご本人が部活動や学校行事などで同行できない場合は、保護者様のみのご見学にも個別に対応しています。寮や食事、学費のことなど、気になる点を直接お確かめください。",
  },
  {
    q: "雨の日でも開催されますか？",
    a: "原則として雨天でも開催します。天候によっては、屋内での説明・見学を中心に、プログラムの内容を一部変更する場合があります。※荒天が予想される場合の対応は、ご予約時または前日までにご案内します。",
  },
  {
    q: "車で直接行ってもよいですか？",
    a: `はい、お車でのご来場も可能です。その場合は13時ごろを目安に、直接学校（${site.address}）へお越しください。駐車場所などの詳細は、ご予約時にご案内します。`,
  },
];

export default function OpenCampusPage() {
  return (
    <>
      <PageHero
        image="/images/taiken-1_001_1.jpg"
        en="OPEN CAMPUS"
        title="学校見学・オープンキャンパス"
        lead="パンフレットだけでは伝わらない、馬と暮らす高校のリアル。JR東京駅までのお迎えで施設見学から乗馬体験まで丸ごと1日、バジガクの中身を体感できます。"
        crumbs={[{ label: "HOME", href: "/" }, { label: "学校見学・オープンキャンパス" }]}
      />

      {/* ABOUT OPEN CAMPUS */}
      <Section id="about" className="bg-white">
        <div className="grid items-center gap-12 lg:grid-cols-2">
          <div>
            <SectionTitle
              en="WHAT'S OPEN CAMPUS"
              title={
                <>
                  その目で見て、その手で触れて
                  <br />
                  「ここで学びたい」を感じる・・・
                </>
              }
            />
            <FadeUp delay={0.15}>
              <p className="mt-8 text-sm leading-8 text-ink-700 md:text-[15px]">
                高校選びは、これからの3年間を決める大切な選択です。だからこそ本校では、ホームページやパンフレットだけで決めるのではなく、実際の学校を見て、馬と触れ、生徒たちの姿を見てから考えてほしいと思っています。
              </p>
              <p className="mt-4 text-sm leading-8 text-ink-700 md:text-[15px]">
                授業、騎乗、寮生活、卒業後の進路、そして馬たちとの毎日。気になることや不安なことは、スタッフに何でも聞いてください。「自分にもできそう」から、「ここでやってみたい」へ。その気持ちを確かめるのが、バジガクの学校見学＆オープンキャンパスです。
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
      <Section id="schedule" className="texture-paper">
        <SectionTitle
          en="PROGRAM"
          align="center"
          title="当日のプログラム・1日の流れ"
          lead="東京駅集合から校舎・寮の見学、乗馬体験、帰りの送迎まで。参加当日のタイムスケジュールをご紹介します。"
        />
        <div className="mx-auto mt-14 max-w-4xl">
          <ol className="relative space-y-12 border-l-2 border-gold-400/60 pl-8 md:space-y-14 md:pl-12">
            {timeline.map((t, i) => (
              <li key={t.time ?? t.title ?? i} className="relative">
                <span
                  aria-hidden
                  className="absolute -left-[41px] top-1.5 h-4 w-4 rounded-full border-4 border-gold-500 bg-white shadow-soft md:-left-[57px]"
                />
                <FadeUp>
                  <div className="grid items-start gap-6 md:grid-cols-[1fr_auto]">
                    <div>
                      <div className="flex flex-wrap items-center gap-3">
                        {t.time && (
                          <span className="rounded-full bg-pine-800 px-4 py-1.5 font-serif text-sm font-bold tracking-wider text-white">
                            {t.time}
                          </span>
                        )}
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

      {/* UPCOMING DATES */}
      <Section id="dates" className="bg-white">
        <SectionTitle
          en="UPCOMING DATES"
          align="center"
          title="令和8年度 開催スケジュール"
          lead="次回の学校見学＆オープンキャンパスの開催日です。いずれも完全予約制・JR東京駅からの無料送迎付き。まずはご都合のよい日をお選びください。"
        />
        <Stagger className="mx-auto mt-14 grid max-w-5xl gap-6 md:grid-cols-3">
          {openDays.map((d) => (
            <StaggerItem key={`${d.month}-${d.day}`} className="h-full">
              <div className="flex h-full flex-col items-center border border-cream-300 bg-cream-100 p-8 text-center shadow-soft transition duration-300 hover:-translate-y-1.5 hover:shadow-lift">
                <p className="text-[11px] font-bold tracking-[0.35em] text-gold-600">
                  令和8年度
                </p>
                <p className="mt-3 font-serif font-bold leading-none text-pine-950">
                  <span className="text-4xl md:text-5xl">{d.month}</span>
                  <span className="mx-0.5 text-xl text-gold-600">/</span>
                  <span className="text-4xl md:text-5xl">{d.day}</span>
                  <span className="ml-2 inline-flex h-8 w-8 items-center justify-center rounded-full bg-pine-800 align-middle text-sm text-white">
                    {d.dow}
                  </span>
                </p>
                <h3 className="mt-5 font-serif text-base font-bold text-pine-950">
                  学校見学＆オープンキャンパス
                </h3>
                <div className="mt-4 flex flex-wrap justify-center gap-2">
                  <span className="rounded-full border border-gold-500/60 bg-white px-3 py-1 text-[11px] font-bold text-gold-600">
                    完全予約制
                  </span>
                  <span className="rounded-full border border-gold-500/60 bg-white px-3 py-1 text-[11px] font-bold text-gold-600">
                    東京駅無料送迎
                  </span>
                </div>
                <p className="mt-4 text-xs leading-6 text-ink-500">
                  12:30 JR東京駅集合／13:40 現地集合
                </p>
              </div>
            </StaggerItem>
          ))}
        </Stagger>
        <FadeUp>
          <p className="mt-10 text-center text-xs leading-6 text-ink-500">
            ※日程は変更となる場合があります。最新の開催日はお申込みフォームまたはお電話でご確認ください。
          </p>
        </FadeUp>
      </Section>

      {/* FOR PARENTS */}
      <Section id="parents" className="bg-cream-100">
        <div className="grid gap-12 lg:grid-cols-[1fr_1.15fr] lg:items-start">
          <div>
            <SectionTitle
              en="FOR PARENTS"
              title={
                <>
                  ご本人と保護者様に「納得の３年間」
                  <br />
                  をしっかり選んで頂くために・・・
                </>
              }
            />
            <FadeUp delay={0.15}>
              <p className="mt-8 text-sm leading-8 text-ink-700 md:text-[15px]">
                全寮制の「馬の学校選び」は、本当に大切な瞬間です。パンフレットやホームページだけでなく、実際に足を運んで、在学している生徒の様子や声、学習環境の雰囲気や様子、馬との生活・学生寮・施設の中身までありのままの学校をご覧頂くことを大切に考えています。
              </p>
              <p className="mt-4 text-sm leading-8 text-ink-700 md:text-[15px]">
                中学3年生から社会人としてデビューするまでの大切な3年間を過ごす環境は、生徒たちにとって、どう社会に旅立つかの最後の教育機会でもあります。満足よりも「納得」。そこをご本人のみならず保護者と一緒にお確かめください。
              </p>
            </FadeUp>
            <ScaleIn className="mt-8 max-w-sm overflow-hidden shadow-lift md:mt-10">
              <Image
                src="/g9.JPG"
                alt="見学でご案内するキャンパスの様子"
                width={800}
                height={600}
                className="h-44 w-full object-cover md:h-52"
              />
            </ScaleIn>
          </div>
          <div>
            <FadeUp>
              <p className="font-serif text-lg font-bold text-pine-950 md:text-xl">
                見学の日に、確かめてほしい「2つのこと」。
              </p>
            </FadeUp>
            <Stagger className="mt-6 grid content-start gap-6">
            {parentPoints.map((p) => (
              <StaggerItem key={p.no}>
                <div className="bg-white p-7 shadow-soft transition duration-300 hover:-translate-y-1 hover:shadow-lift md:p-8">
                  <div className="flex items-baseline gap-4">
                    <span className="font-serif text-xs font-bold tracking-[0.3em] text-gold-600">
                      {p.no}
                    </span>
                    <h3 className="font-serif text-lg font-bold text-pine-950 md:text-xl">
                      {p.title}
                    </h3>
                  </div>
                  {p.questions && (
                    <ul className="mt-4 space-y-2">
                      {p.questions.map((q) => (
                        <li
                          key={q}
                          className="flex items-start gap-2.5 text-[13px] leading-7 text-ink-700 md:text-sm md:leading-8"
                        >
                          <span
                            aria-hidden
                            className="mt-2.5 h-1.5 w-1.5 shrink-0 rounded-full bg-gold-500"
                          />
                          {q}
                        </li>
                      ))}
                    </ul>
                  )}
                  {p.paragraphs.map((para) => (
                    <p
                      key={para}
                      className="mt-4 text-[13px] leading-7 text-ink-700 md:text-sm md:leading-8"
                    >
                      {para}
                    </p>
                  ))}
                </div>
              </StaggerItem>
            ))}
          </Stagger>
          </div>
        </div>
        <FadeUp>
          <p className="mt-14 font-serif text-lg font-bold text-pine-950 md:text-xl">
            本校は、ありのままの学校の姿をご覧いただきます。
          </p>
        </FadeUp>
        <Stagger className="mt-6 grid gap-6 md:grid-cols-3">
          {parentServices.map((s) => (
            <StaggerItem key={s.no} className="h-full">
              <div className="flex h-full flex-col bg-white p-7 shadow-soft transition duration-300 hover:-translate-y-1 hover:shadow-lift md:p-8">
                <div className="flex items-baseline gap-3">
                  <span className="font-serif text-xs font-bold tracking-[0.3em] text-gold-600">
                    {s.no}
                  </span>
                  <span className="text-[10px] font-bold tracking-[0.25em] text-ink-500">
                    {s.en}
                  </span>
                </div>
                <h3 className="mt-4 font-serif text-base font-bold text-pine-950 md:text-lg">
                  {s.title}
                </h3>
                {s.paragraphs.map((para) => (
                  <p
                    key={para}
                    className="mt-3 text-[13px] leading-7 text-ink-700 md:text-sm md:leading-8"
                  >
                    {para}
                  </p>
                ))}
              </div>
            </StaggerItem>
          ))}
        </Stagger>
      </Section>

      {/* FAQ */}
      <Section id="faq" className="texture-paper">
        <SectionTitle
          en="FAQ"
          align="center"
          title="見学に関するよくある質問"
          lead="学校見学・オープンキャンパスについて、よくお寄せいただくご質問をまとめました。このほかのご質問は、お電話・フォームからお気軽にどうぞ。"
        />
        <div className="mx-auto mt-14 max-w-4xl">
          <FadeUp>
            <Accordion items={openCampusFaqs} />
          </FadeUp>
          <FadeUp delay={0.1}>
            <p className="mt-10 text-center">
              <Link
                href="/qa"
                className="inline-flex items-center gap-2 text-sm font-bold text-pine-800 underline decoration-gold-400 decoration-2 underline-offset-4 transition hover:gap-3"
              >
                入学・授業・寮生活のQ&Aはこちら
                <span aria-hidden>→</span>
              </Link>
            </p>
          </FadeUp>
        </div>
      </Section>

      {/* APPLY */}
      <Section id="entry" className="bg-white">
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
