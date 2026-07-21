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
  title: "中3対象・騎手受験事前合宿｜東関東馬事高等学院",
  description:
    "JRA競馬学校・地方競馬教養センターの騎手課程受験を目指す中学3年生のための6泊7日事前対策合宿。騎乗訓練・運動機能検査の模擬テスト・筆記・面接対策から寮での集団生活まで、合宿中の一日のスケジュール、参加者の声、申込方法をご紹介。JRA一次試験不合格の場合は参加費全額返金保証付き。",
};

const outlineRows = [
  {
    label: "対象",
    value:
      "JRA競馬学校・地方競馬教養センターの騎手課程受験を目指す中学3年生",
  },
  {
    label: "開催目的",
    value:
      "騎手課程受験に向けた受験指導とサポート。一次試験（筆記・運動機能検査・面接）から二次試験の騎乗まで、本番への備えを6泊7日で集中的に行います。",
  },
  {
    label: "開催時期",
    value: "毎年夏休み期間に開催（年度ごとの詳細日程はお問い合わせください）",
  },
  { label: "期間", value: "6泊7日" },
  {
    label: "参加費",
    value: "72,000円（宿泊費・騎乗訓練費・食事費を含む）",
  },
  {
    label: "返金保証",
    value:
      "JRA競馬学校 騎手課程の第一次試験が不合格だった場合、参加費は全額返金いたします。",
  },
  {
    label: "保護者の同伴",
    value:
      "初日は騎手受験についての説明を行いますので、保護者の方の同伴をお願いしています。",
  },
  {
    label: "送迎",
    value: "JR東京駅からの送迎があります（お申込み時にご相談ください）。",
  },
];

const programs = [
  {
    no: "01",
    title: "受験に挑む前の心構え",
    tag: "MINDSET",
    desc: "騎手課程受験はどんな試験で、何が問われるのか。合格する人に共通する姿勢とは。まず最初に、受験までの過ごし方と向き合い方を丁寧にお伝えします。合宿の土台となる、いちばん大切な時間です。",
  },
  {
    no: "02",
    title: "運動機能検査の模擬テスト",
    tag: "PHYSICAL",
    desc: "JRA一次試験で実施される運動機能検査の項目に基づいた模擬テストを実施。自分の現在地を数値で把握し、伸ばすべきポイントを指導員が一人ひとりにフィードバックします。",
  },
  {
    no: "03",
    title: "筆記試験（国語・社会）対策",
    tag: "WRITTEN",
    desc: "一次試験の筆記科目である国語・社会について、出題傾向を踏まえた対策学習を行います。「何をどこまで勉強すればいいのか」が分かれば、残りの期間の学習計画も立てやすくなります。",
  },
  {
    no: "04",
    title: "面接指導",
    tag: "INTERVIEW",
    desc: "初めての入試で多くの受験生が不安を感じるのが面接です。受け答えの基本から、騎手を志す気持ちの伝え方まで、実践形式で繰り返し指導。自分の言葉で語れるようになるまでサポートします。",
  },
  {
    no: "05",
    title: "騎乗試験対策",
    tag: "RIDING",
    desc: "二次試験の騎乗試験を見据えた騎乗訓練に加え、厩舎での活動姿勢についても指導します。馬と向き合う日々の所作こそが、騎手への第一歩。本校の馬たちと共に実践的に学びます。",
  },
  {
    no: "06",
    title: "集団生活",
    tag: "DORM LIFE",
    desc: "合宿期間中は本校の学生寮に宿泊し、あいさつ・時間・馬優先という馬の世界の生活リズムを体験します。騎手課程に合格すれば始まる寄宿生活の、いわば予行演習。共に汗を流す仲間の存在が、受験への覚悟を確かなものにしてくれます。",
  },
];

const schedule = [
  { time: "06:00", label: "起床・厩舎作業", note: "馬の世界の朝を体験" },
  { time: "07:30", label: "朝食", note: "寮の食堂で仲間と一緒に" },
  { time: "09:00", label: "騎乗訓練", note: "騎乗試験を見据えた実技" },
  { time: "11:00", label: "体力トレーニング", note: "運動機能検査への備え" },
  { time: "12:30", label: "昼食", note: "午後に向けてしっかりと" },
  { time: "14:00", label: "学科（筆記対策）", note: "国語・社会の対策学習" },
  { time: "16:00", label: "面接練習・振り返り", note: "実践形式で繰り返し" },
  { time: "18:00", label: "夕食", note: "一日がんばった体に栄養を" },
  { time: "19:30", label: "自習・ミーティング", note: "その日の学びを整理" },
  { time: "21:30", label: "就寝", note: "早寝早起きも訓練のうち" },
];

const voices = [
  {
    name: "蒼真さん",
    attr: "中学3年生・合宿参加者",
    img: "/images/taiken-3_002_2.jpg",
    alt: "騎乗訓練に取り組む合宿参加者",
    text: "運動機能検査の模擬テストで、いまの自分に足りないものが数字ではっきり分かりました。帰ってから何を練習すればいいのか迷わなくなったのが、いちばんの収穫です。消灯前に仲間と将来の話をした時間も、忘れられません。",
  },
  {
    name: "由紀さん",
    attr: "合宿に参加した中3男子の保護者",
    img: "/images/taiken-3_002_4.jpg",
    alt: "厩舎で馬と向き合う合宿参加者",
    text: "初日の保護者向け説明で、騎手受験の仕組みから受験までの過ごし方まで丁寧に教えていただき、親としての心構えができました。7日ぶりに迎えに行ったとき、日に焼けた息子の顔つきが変わっていたことに驚いています。",
  },
  {
    name: "悠斗さん",
    attr: "在校生・過去の合宿参加から入学",
    img: "/images/taiken-3_002_6.jpg",
    alt: "騎手を目指して訓練に励む生徒",
    text: "中3の夏にこの合宿へ参加して、「ここで学びたい」と入学を決めました。朝の厩舎作業も、馬優先の生活リズムも、いま騎手受験特別コースで送っている毎日の原点です。迷っているなら、まず一度体験してみてほしいです。",
  },
];

const steps = [
  {
    no: "01",
    title: "騎手説明会に参加する",
    desc: "学校見学＆オープンキャンパスで開催している「騎手説明会」にご参加ください。騎手受験の仕組みや合宿の内容を、実際のキャンパスでご説明します。",
  },
  {
    no: "02",
    title: "フォームまたはお電話でお申込み",
    desc: "お問い合わせフォームかお電話で「騎手受験事前合宿に参加したい」とお伝えください。参加を迷っている段階のご相談も歓迎です。",
  },
  {
    no: "03",
    title: "詳細日程・持ち物のご案内",
    desc: "お申込み後、事務局からその年度の開催日程・集合場所・当日の持ち物などをご案内します。ご不明な点は、いつでもお気軽にご相談ください。",
  },
];

const gallery = [
  { img: "/images/taiken-3_002_1.jpg", alt: "騎手受験合宿での騎乗訓練の様子" },
  { img: "/images/taiken-3_002_2.jpg", alt: "馬場で指導を受ける合宿参加者" },
  { img: "/images/taiken-3_002_3.jpg", alt: "騎乗フォームを確認するトレーニング" },
  { img: "/images/taiken-3_002_4.jpg", alt: "厩舎で馬と向き合う参加者" },
  { img: "/images/taiken-3_002_5.jpg", alt: "合宿中の実技指導の様子" },
  { img: "/images/taiken-3_002_6.jpg", alt: "騎手受験に向けて訓練に励む中学生" },
];

export default function CampPage() {
  return (
    <>
      <PageHero
        image="/images/taiken-3_001_1.jpg"
        en="JOCKEY CAMP"
        title="JRA競馬学校 騎手課程受験・6泊7日事前対策合宿"
        lead="合格をつかむ受験生と、あと一歩届かない受験生。その差を分けるのは、本番までの準備です。初めての受験に挑む中学3年生の「不安」を「自信」に変える、バジガクの特別合宿です。"
        crumbs={[{ label: "HOME", href: "/" }, { label: "中3対象・騎手受験事前合宿" }]}
      />

      {/* 合宿概要 */}
      <Section id="outline" className="bg-white">
        <div className="grid items-center gap-12 lg:grid-cols-2">
          <div>
            <SectionTitle
              en="OUTLINE"
              title={
                <>
                  初めての受験の不安を、
                  <br />
                  自信に変えるために。
                </>
              }
            />
            <FadeUp delay={0.15}>
              <p className="mt-8 text-sm leading-8 text-ink-700 md:text-[15px]">
                この合宿は、中学3年生でJRA競馬学校または地方競馬教養センターの騎手課程受験を目指す方を対象に、受験指導とサポートを行うことを目的としています。JRA競馬学校の騎手課程は、毎年約150名の受験者に対して最終合格は7〜8名という狭き門。地方競馬の騎手課程も、入学前の騎乗経験が大きく問われる難関です。
              </p>
              <p className="mt-4 text-sm leading-8 text-ink-700 md:text-[15px]">
                しかも中学3年生にとっては、騎手試験が人生で初めての「入試」になることがほとんど。運動機能検査や騎乗試験という特殊な試験を前に、不安を抱えたまま本番を迎えてしまう受験生は少なくありません。だからこそ、本番前のこの6泊7日があります。一次試験で問われる「筆記試験・運動機能検査・面接」を軸に、不安をひとつずつ自信に変えて、胸を張って受験会場へ向かえるように。バジガクが全力でサポートします。
              </p>
            </FadeUp>
          </div>
          <div className="relative">
            <ScaleIn className="relative z-10 overflow-hidden shadow-lift">
              <Image
                src="/images/tokubetsu_002_1.jpg"
                alt="騎手を目指してトレーニングに励む生徒"
                width={1200}
                height={800}
                className="h-full w-full object-cover"
              />
            </ScaleIn>
            <SlideIn
              direction={-1}
              delay={0.25}
              className="relative z-20 -mt-16 ml-auto w-2/3 overflow-hidden border-4 border-white shadow-lift md:-mt-24"
            >
              <Image
                src="/images/tokubetsu_002_2.jpg"
                alt="馬場での騎乗訓練の様子"
                width={800}
                height={560}
                className="h-full w-full object-cover"
              />
            </SlideIn>
            <div
              aria-hidden
              className="absolute -right-10 -top-10 -z-0 h-48 w-48 rounded-full bg-gold-300/30 blur-2xl"
            />
          </div>
        </div>

        {/* 開催概要 */}
        <div className="mt-16 grid gap-12 md:mt-20 lg:grid-cols-[320px_1fr] lg:gap-16">
          <div>
            <FadeUp>
              <p className="text-[11px] font-bold tracking-[0.35em] text-gold-600">
                SUMMARY
              </p>
              <h3 className="mt-3 font-serif text-2xl font-bold text-pine-950 md:text-3xl">
                開催概要
              </h3>
              <div className="mt-4 h-[2px] w-12 rule-gold" />
              <p className="mt-5 text-sm leading-8 text-ink-700">
                毎年、夏休み期間に開催しています。年度ごとの日程やお申込み方法は、お気軽にお問い合わせください。
              </p>
            </FadeUp>
            <FadeUp delay={0.2}>
              <div className="mt-8 bg-pine-900 p-7 text-white shadow-soft">
                <p className="text-[10px] font-bold tracking-[0.35em] text-gold-400">
                  GUARANTEE
                </p>
                <p className="mt-3 font-serif text-xl font-bold leading-snug text-sun-400">
                  JRA一次試験
                  <br />
                  不合格なら全額返金
                </p>
                <p className="mt-3 text-xs leading-6 text-white/80">
                  この合宿は「合格してもらうため」の合宿です。JRA競馬学校 騎手課程の第一次試験が不合格だった場合、参加費72,000円は全額返金いたします。
                </p>
              </div>
            </FadeUp>
          </div>
          <div>
            <Stagger className="space-y-3">
              {outlineRows.map((row) => (
                <StaggerItem key={row.label}>
                  <div className="flex flex-col gap-2 border border-cream-300 bg-cream-100 px-6 py-5 md:flex-row md:items-start md:gap-8">
                    <span className="w-32 shrink-0 text-sm font-bold text-pine-800">
                      {row.label}
                    </span>
                    <span className="flex-1 text-sm leading-7 text-ink-700">
                      {row.value}
                    </span>
                  </div>
                </StaggerItem>
              ))}
            </Stagger>
            <FadeUp delay={0.1}>
              <p className="mt-4 text-xs leading-6 text-ink-500">
                ※開催日程・参加費などは年度により変更となる場合があります。最新の情報はお問い合わせください。
              </p>
            </FadeUp>
          </div>
        </div>
      </Section>

      {/* 合宿プログラム */}
      <Section id="program" className="texture-paper">
        <SectionTitle
          en="PROGRAM"
          align="center"
          title="6泊7日で取り組む、6つのプログラム"
          lead="一次試験で問われる「筆記・運動機能検査（フィジカル）・面接」の対策から、二次試験を見据えた騎乗の実技、そして寮での集団生活まで。7日間で騎手課程受験の全体像を、頭とからだの両方でつかみます。"
        />
        <Stagger className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {programs.map((p) => (
            <StaggerItem key={p.no} className="h-full">
              <div className="flex h-full flex-col bg-white p-7 shadow-soft transition duration-300 hover:-translate-y-1.5 hover:shadow-lift">
                <div className="flex items-baseline justify-between">
                  <span className="font-serif text-3xl font-bold text-gold-500">
                    {p.no}
                  </span>
                  <span className="text-[10px] font-bold tracking-[0.3em] text-gold-600">
                    {p.tag}
                  </span>
                </div>
                <h3 className="mt-4 font-serif text-lg font-bold text-pine-950">
                  {p.title}
                </h3>
                <div className="mt-4 h-[2px] w-10 rule-gold" />
                <p className="mt-4 flex-1 text-[13px] leading-7 text-ink-700">
                  {p.desc}
                </p>
              </div>
            </StaggerItem>
          ))}
        </Stagger>
      </Section>

      {/* 一日のスケジュール */}
      <Section id="schedule" className="bg-white">
        <SectionTitle
          en="DAILY SCHEDULE"
          align="center"
          title="合宿中の一日のスケジュール"
          lead="朝は馬の世話から始まり、夜は仲間と一日の学びを振り返る。騎手課程の生活を先取りする、合宿中のとある一日をご紹介します。"
        />
        <FadeUp delay={0.1}>
          <ol className="mx-auto mt-14 grid max-w-6xl grid-cols-2 gap-y-10 lg:grid-cols-5">
            {schedule.map((s) => (
              <li
                key={s.time}
                className="relative border-t-2 border-gold-400/50 px-5 pb-2 pt-7"
              >
                <span
                  aria-hidden
                  className="absolute left-5 top-0 h-3.5 w-3.5 -translate-y-1/2 rounded-full border-[3px] border-gold-500 bg-white shadow-soft"
                />
                <p className="font-serif text-xl font-bold tracking-wider text-pine-900">
                  {s.time}
                </p>
                <p className="mt-2 text-sm font-bold leading-6 text-pine-950">
                  {s.label}
                </p>
                <p className="mt-1.5 text-[11px] leading-5 text-ink-500">
                  {s.note}
                </p>
              </li>
            ))}
          </ol>
        </FadeUp>
        <FadeUp delay={0.15}>
          <p className="mt-10 text-center text-xs leading-6 text-ink-500">
            ※スケジュールは一例です。天候・日程により変わります。
          </p>
        </FadeUp>
      </Section>

      {/* 参加者の声 */}
      <Section id="voices" className="bg-cream-100">
        <SectionTitle
          en="VOICES"
          align="center"
          title="参加者の声"
          lead="合宿を経験した参加者と保護者、そして合宿をきっかけに本校へ入学した在校生。3人の声をご紹介します。"
        />
        <Stagger className="mx-auto mt-12 grid max-w-5xl gap-6 md:grid-cols-3">
          {voices.map((v) => (
            <StaggerItem key={v.name} className="h-full">
              <div className="flex h-full flex-col bg-white shadow-soft transition duration-300 hover:-translate-y-1.5 hover:shadow-lift">
                <div className="relative h-44 overflow-hidden">
                  <Image
                    src={v.img}
                    alt={v.alt}
                    fill
                    sizes="(max-width: 768px) 100vw, 33vw"
                    className="object-cover"
                  />
                </div>
                <div className="flex flex-1 flex-col p-7">
                  <span
                    aria-hidden
                    className="font-serif text-4xl font-bold leading-none text-gold-400"
                  >
                    “
                  </span>
                  <p className="mt-2 flex-1 text-[13px] leading-7 text-ink-700">
                    {v.text}
                  </p>
                  <div className="mt-5 border-t border-cream-300 pt-4">
                    <p className="text-sm font-bold text-pine-950">{v.name}</p>
                    <p className="mt-1 text-[11px] text-ink-500">{v.attr}</p>
                  </div>
                </div>
              </div>
            </StaggerItem>
          ))}
        </Stagger>
        <FadeUp delay={0.1}>
          <p className="mt-8 text-center text-xs leading-6 text-ink-500">
            ※プライバシー保護のため、お名前は下のお名前のみ掲載しています。
          </p>
        </FadeUp>
      </Section>

      {/* 申込方法・開催日程 */}
      <Section id="entry" className="texture-paper">
        <SectionTitle
          en="HOW TO ENTRY"
          align="center"
          title="申込方法・応募資格"
          lead="本気で騎手を目指す方に確かな指導を届けるため、参加には2つの条件があります。条件を満たしている方は、3つのステップでお申込みいただけます。"
        />

        {/* 応募資格 */}
        <Stagger className="mx-auto mt-12 grid max-w-4xl gap-6 md:grid-cols-2">
          {[
            {
              no: "1",
              title: "騎手説明会への参加",
              desc: "本校の学校見学＆オープンキャンパスで開催している「騎手説明会」に参加された方が対象です。まだの方は、まず学校見学へお越しください。",
            },
            {
              no: "2",
              title: "騎手課程への出願予定",
              desc: "中学3年生で、JRA競馬学校 騎手課程に出願している方、または出願を予定している方が対象です。地方競馬教養センターの受験を目指す方もご相談ください。",
            },
          ].map((r) => (
            <StaggerItem key={r.no} className="h-full">
              <div className="flex h-full gap-5 bg-white p-7 shadow-soft">
                <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-pine-800 font-serif text-lg font-bold text-white">
                  {r.no}
                </span>
                <div>
                  <h3 className="font-serif text-lg font-bold text-pine-950">
                    {r.title}
                  </h3>
                  <p className="mt-3 text-[13px] leading-7 text-ink-700">
                    {r.desc}
                  </p>
                </div>
              </div>
            </StaggerItem>
          ))}
        </Stagger>

        {/* 申込ステップ */}
        <FadeUp delay={0.1}>
          <h3 className="mt-16 text-center font-serif text-2xl font-bold text-pine-950 md:text-3xl">
            お申込みの流れ
          </h3>
          <div className="mx-auto mt-4 h-[2px] w-12 rule-gold" />
        </FadeUp>
        <Stagger className="mx-auto mt-10 grid max-w-5xl gap-6 md:grid-cols-3">
          {steps.map((s, i) => (
            <StaggerItem key={s.no} className="h-full">
              <div className="relative flex h-full flex-col bg-white p-7 shadow-soft">
                {i < steps.length - 1 && (
                  <span
                    aria-hidden
                    className="absolute -right-[26px] top-1/2 z-10 hidden -translate-y-1/2 text-2xl font-bold text-gold-500 md:block"
                  >
                    →
                  </span>
                )}
                <p className="text-[10px] font-bold tracking-[0.35em] text-gold-600">
                  STEP <span className="font-serif text-2xl tracking-normal text-gold-500">{s.no}</span>
                </p>
                <h4 className="mt-3 font-serif text-lg font-bold text-pine-950">
                  {s.title}
                </h4>
                <p className="mt-3 flex-1 text-[13px] leading-7 text-ink-700">
                  {s.desc}
                </p>
                {s.no === "01" && (
                  <Link
                    href="/opencampus"
                    className="mt-4 inline-flex items-center gap-2 text-xs font-bold text-pine-800 underline decoration-gold-400 underline-offset-4 transition hover:text-gold-600"
                  >
                    学校見学＆オープンキャンパスを見る
                    <span aria-hidden>→</span>
                  </Link>
                )}
                {s.no === "02" && (
                  <div className="mt-4 flex flex-col gap-2">
                    <a
                      href={site.forms.contact}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 text-xs font-bold text-pine-800 underline decoration-gold-400 underline-offset-4 transition hover:text-gold-600"
                    >
                      お問い合わせフォームはこちら
                      <span aria-hidden>→</span>
                    </a>
                    <a
                      href={`tel:${site.tel}`}
                      className="inline-flex items-center gap-2 text-xs font-bold text-pine-800 underline decoration-gold-400 underline-offset-4 transition hover:text-gold-600"
                    >
                      TEL {site.tel}
                    </a>
                  </div>
                )}
              </div>
            </StaggerItem>
          ))}
        </Stagger>
        <FadeUp delay={0.1}>
          <p className="mx-auto mt-6 max-w-5xl text-xs leading-6 text-ink-500">
            ※開催日程は年度により異なります。お申込み・ご相談はお早めにどうぞ。
          </p>
        </FadeUp>

        {/* 高1向け */}
        <FadeUp delay={0.2}>
          <div className="mx-auto mt-10 max-w-4xl border-2 border-gold-500/40 bg-white px-6 py-5">
            <p className="text-sm leading-7 text-ink-700">
              <span className="font-bold text-pine-800">高校1年生の方へ：</span>
              高校1年生での参加をご希望の場合は、直接、本校事務局（
              <a
                href={`tel:${site.tel}`}
                className="font-bold tracking-wider text-pine-800 hover:underline"
              >
                {site.tel}
              </a>
              ）までご相談ください。
            </p>
          </div>
        </FadeUp>
      </Section>

      {/* 合格実績 + ギャラリー */}
      <section id="results" className="relative overflow-hidden bg-pine-950 py-16 md:py-24">
        <div className="mx-auto max-w-7xl px-6">
          <div className="grid items-center gap-12 lg:grid-cols-[1fr_auto]">
            <SectionTitle
              dark
              en="RESULTS"
              title="12年間で38名。合格実績が、指導の証です。"
              lead="バジガクはこれまで、JRA・地方競馬あわせて38名の騎手課程合格者を送り出してきました。JRAの荻野極騎手をはじめ、木之前葵騎手・佐々木世麗騎手・深澤杏花騎手ら女性騎手も輩出。その受験指導のノウハウを、この合宿に注ぎ込みます。"
            />
            <FadeUp delay={0.15} className="text-center lg:pr-8">
              <p className="font-serif text-6xl font-bold text-sun-400 md:text-7xl">
                <Counter to={38} suffix="名" />
              </p>
              <p className="mt-2 text-sm font-bold text-white">騎手課程 合格者数</p>
              <p className="mt-1 text-[11px] text-white/60">開校以来12年間の実績</p>
            </FadeUp>
          </div>
          <Stagger gap={0.06} className="mt-12 grid grid-cols-2 gap-4 md:grid-cols-3">
            {gallery.map((g) => (
              <StaggerItem key={g.img}>
                <div className="group relative h-40 overflow-hidden shadow-soft md:h-56">
                  <Image
                    src={g.img}
                    alt={g.alt}
                    fill
                    sizes="(max-width: 768px) 50vw, 33vw"
                    className="object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                </div>
              </StaggerItem>
            ))}
          </Stagger>
          <FadeUp delay={0.1} className="mt-10 text-center">
            <Link
              href="/jockey"
              className="inline-flex items-center gap-3 rounded-full border-2 border-white/40 px-7 py-3.5 text-sm font-bold text-white transition hover:border-sun-400 hover:text-sun-400"
            >
              騎手受験特別コースについて詳しく見る
              <span aria-hidden>→</span>
            </Link>
          </FadeUp>
        </div>
      </section>

      {/* 申込CTA */}
      <Section id="contact" className="bg-white">
        <div className="mx-auto max-w-3xl text-center">
          <SectionTitle
            en="ENTRY"
            align="center"
            title="騎手への第一歩は、この夏から。"
            lead="騎手受験事前合宿へのお申込み・ご質問は、お問い合わせフォームまたはお電話で受け付けています。「参加を迷っている」「条件を満たしているか分からない」という段階のご相談も大歓迎です。"
          />
          <FadeUp delay={0.2}>
            <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
              <a
                href={site.forms.contact}
                target="_blank"
                rel="noopener noreferrer"
                className="group inline-flex items-center gap-3 rounded-full bg-sun-500 px-9 py-4 text-sm font-bold text-pine-950 shadow-soft transition hover:shadow-lift"
              >
                合宿について問い合わせる
                <span className="transition-transform duration-300 group-hover:translate-x-1.5">
                  →
                </span>
              </a>
              <a
                href={`tel:${site.tel}`}
                className="inline-flex items-center gap-3 rounded-full border-2 border-pine-800 px-9 py-4 text-sm font-bold text-pine-800 transition hover:bg-pine-50"
              >
                TEL {site.tel}
              </a>
            </div>
            <p className="mt-6 text-xs leading-6 text-ink-500">
              初めての方は、まず学校見学＆オープンキャンパスの「騎手説明会」へのご参加をおすすめしています。
            </p>
          </FadeUp>
        </div>
      </Section>

      <CTABand />
    </>
  );
}
