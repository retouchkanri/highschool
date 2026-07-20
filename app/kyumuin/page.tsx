import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import PageHero from "@/components/PageHero";
import { Section, SectionTitle } from "@/components/Section";
import { FadeUp, ScaleIn, SlideIn, Stagger, StaggerItem } from "@/components/motion";
import Counter from "@/components/Counter";
import CTABand from "@/components/CTABand";

export const metadata: Metadata = {
  title: "JRA厩務員を目指す方へ（競走馬厩務員コース）",
  description:
    "東関東馬事高等学院の競走馬厩務員コース。学校所有の冠名「バジガク」現役競走馬約20頭を担当し、飼養管理・馬匹管理・騎乗運動管理を実践で学習。高校3年次にJRA競馬学校 厩務員課程の受験に挑戦できます。",
};

/* ---------------- コース概要のポイント ---------------- */

const overviewPoints = [
  {
    title: "2年次から選択できるコース",
    desc: "入学後にじっくり馬と向き合ってから、2年次の10月以降に選択。基礎を固めたうえで競走馬の専門学習へ進めます。",
  },
  {
    title: "冠名「バジガク」の現役競走馬 約20頭",
    desc: "学校が所有する現役競走馬が、先生であり相棒。実際にレースへ出走する馬たちを、生徒自身が担当します。",
  },
  {
    title: "飼養・馬匹・騎乗運動の3つの管理",
    desc: "エサの調合を考える飼養管理、馬体をケアする馬匹管理、調教トレーニングにあたる騎乗運動管理。厩務員の実務そのものを高校授業で学びます。",
  },
  {
    title: "レース10日前まで生徒が管理",
    desc: "担当馬は最短でレースの10日前まで生徒たちの手でコンディションを整えます。本番から逆算する、本物の緊張感がここにあります。",
  },
  {
    title: "北海道・トレセン近郊へのインターン",
    desc: "在学中に北海道やJRAトレーニングセンター近郊の育成施設へ職場研修に出向き、JRAで出走する競走馬に直接関わる機会もあります。",
  },
];

/* ---------------- 成長ステップ ---------------- */

const steps = [
  {
    no: "01",
    grade: "1年次",
    title: "未経験から、基礎乗馬を確実に",
    desc: "入学する生徒の多くは乗馬未経験。まずは大人しい馬とのパートナーシップから始め、正しい騎乗姿勢と馬の扱い方を土台から身につけます。",
  },
  {
    no: "02",
    grade: "2年次",
    title: "コースを選択し、現役競走馬の担当へ",
    desc: "2年次10月以降に競走馬厩務員コースを選択。冠名「バジガク」の現役競走馬を担当し、飼養管理・馬匹管理・騎乗運動管理を毎日の実践で積み重ねます。",
  },
  {
    no: "03",
    grade: "3年次",
    title: "競走馬の調教、そしてJRA競馬学校受験へ",
    desc: "現役競走馬を乗りこなし、育成から調教まで一貫して担える技術へ。高校3年次には、JRA競馬学校 厩務員課程の受験に挑戦できます。",
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

/* ---------------- 就職サポート6項目 ---------------- */

const supports = [
  {
    no: "01",
    title: "美浦トレーニングセンター見学",
    desc: "JRAの調教拠点・美浦トレセンを実際に見学。厩務員が働く現場の空気を、在学中に肌で感じます。",
  },
  {
    no: "02",
    title: "トレセン近郊での職場研修",
    desc: "JRAトレセン近郊の競走馬育成施設でインターンシップを実施。現場の仕事を経験しながら学びます。",
  },
  {
    no: "03",
    title: "厩務員課程の受験サポート",
    desc: "JRA競馬学校「厩務員課程」の受験を、出願から試験対策まで学校が一貫してサポートします。",
  },
  {
    no: "04",
    title: "合格者輩出の育成牧場と連携",
    desc: "厩務員課程の合格者を多数輩出してきた育成牧場と連携。合格に近づく実践経験を積めます。",
  },
  {
    no: "05",
    title: "現役プロによる特別授業",
    desc: "JRAの現役騎手・調教助手・厩務員などを定期的に招き、第一線のリアルを学ぶ特別授業を開催。",
  },
  {
    no: "06",
    title: "受験動向を反映した授業編成",
    desc: "JRA厩務員の仕事と厩務員課程受験の最新動向を軸に、高校授業そのものを編成しています。",
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

export default function KyumuinPage() {
  return (
    <>
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

      {/* (2) コース概要 */}
      <Section className="bg-white">
        <div className="grid items-start gap-12 lg:grid-cols-2">
          <div>
            <SectionTitle
              en="COURSE OVERVIEW"
              title={
                <>
                  現役競走馬が、
                  <br />
                  先生であり相棒になる。
                </>
              }
              lead="競走馬厩務員コースの教材は、教科書だけではありません。学校所有の冠名「バジガク」現役競走馬 約20頭。デビューからレース本番までを支える厩務員の仕事を、毎日の高校生活の中で実践しながら学びます。"
            />
            <Stagger className="mt-10 space-y-4">
              {overviewPoints.map((p) => (
                <StaggerItem key={p.title}>
                  <div className="border border-cream-300 bg-cream-100 p-5 transition duration-300 hover:-translate-y-1 hover:shadow-soft">
                    <h3 className="flex items-start gap-3 text-sm font-bold text-pine-950 md:text-[15px]">
                      <span className="mt-0.5 inline-block h-4 w-1 shrink-0 rounded-full bg-gold-500" />
                      {p.title}
                    </h3>
                    <p className="mt-2 pl-4 text-[13px] leading-7 text-ink-700">
                      {p.desc}
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
                alt="学校所有の現役競走馬を管理する生徒たち"
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
                alt="競走馬の騎乗運動管理に取り組む生徒"
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

      {/* (3) 成長ステップ */}
      <Section className="texture-paper">
        <SectionTitle
          en="3 YEARS STEP"
          align="center"
          title="未経験から3年間で、競走馬の調教まで。"
          lead="バジガクに入学する生徒の多くは、乗馬未経験からのスタート。だからこそ、段階を踏んで確実に。3年間で「馬を育成し、調教できる技術」まで積み上げていきます。"
        />
        <Stagger className="mt-14 grid gap-6 md:grid-cols-3">
          {steps.map((s) => (
            <StaggerItem key={s.no} className="h-full">
              <div className="relative flex h-full flex-col bg-white p-8 pt-10 shadow-soft transition duration-300 hover:-translate-y-1.5 hover:shadow-lift">
                <span className="absolute -top-5 left-8 flex h-11 w-11 items-center justify-center rounded-full bg-pine-800 font-serif text-sm font-bold text-gold-300 shadow-soft">
                  {s.no}
                </span>
                <p className="text-[11px] font-bold tracking-[0.3em] text-gold-600">
                  STEP {s.no}｜{s.grade}
                </p>
                <h3 className="mt-3 font-serif text-lg font-bold leading-snug text-pine-950">
                  {s.title}
                </h3>
                <p className="mt-4 flex-1 text-[13px] leading-7 text-ink-700">
                  {s.desc}
                </p>
              </div>
            </StaggerItem>
          ))}
        </Stagger>
        <FadeUp delay={0.15} className="mt-12">
          <div className="overflow-hidden shadow-soft">
            <Image
              src="/images/kyumuin_002_1.jpg"
              alt="競馬場で学校所有馬を応援する生徒たち"
              width={1600}
              height={700}
              className="h-56 w-full object-cover md:h-80"
            />
          </div>
          <p className="mt-3 text-center text-xs text-ink-500">
            育てた「バジガク」の馬たちがレースに出走。生徒たちも競馬場で担当馬を見守り、応援します。
          </p>
        </FadeUp>
      </Section>

      {/* (4) JRA厩務員 合格実績 */}
      <section className="relative overflow-hidden bg-pine-900 py-16 md:py-24">
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
        </div>
      </section>

      {/* (5) 就職サポート */}
      <Section className="bg-white">
        <SectionTitle
          en="SUPPORT"
          align="center"
          title="JRA厩務員への就職を支える6つのサポート"
          lead="日本の競馬業界と強いネットワークを持つバジガクだからこそ。見学・研修・受験対策・授業編成まで、合格から逆算した支援体制を整えています。"
        />
        <Stagger className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {supports.map((s) => (
            <StaggerItem key={s.no} className="h-full">
              <div className="flex h-full flex-col border border-cream-300 bg-cream-100 p-7 shadow-soft transition duration-300 hover:-translate-y-1.5 hover:shadow-lift">
                <p className="font-serif text-2xl font-bold text-gold-500">{s.no}</p>
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
            高校3年次に、JRA競馬学校「厩務員課程」の受験が可能。
            <br className="hidden md:block" />
            地方競馬の厩務員や育成・生産牧場への就職を目指す生徒にも有利なカリキュラムです。
          </p>
        </FadeUp>
      </Section>

      {/* (6) 充実のインターンシップ */}
      <Section className="bg-cream-100">
        <div className="grid items-center gap-12 lg:grid-cols-2">
          <ScaleIn className="order-2 overflow-hidden shadow-lift lg:order-1">
            <Image
              src="/images/kyumuin_003_1.jpg"
              alt="牧場でのインターンシップに取り組む生徒"
              width={1200}
              height={800}
              className="h-full w-full object-cover"
            />
          </ScaleIn>
          <div className="order-1 lg:order-2">
            <SectionTitle
              en="INTERNSHIP"
              title="就職を見据えた、豊富なインターンシップ"
              lead="2年次以降、学校の定める競走馬実践カリキュラムを修了した生徒から順に、全国各地の牧場での実地研修が始まります。"
            />
            <FadeUp delay={0.15}>
              <p className="mt-6 text-sm leading-8 text-ink-700 md:text-[15px]">
                生産牧場・育成牧場・乗馬クラブ・養老牧場——研修先は、バジガクが持つ全国350件超の馬関連求人ネットワークの中から、一人ひとりの希望に合わせて選べます。
              </p>
              <p className="mt-4 text-sm leading-8 text-ink-700 md:text-[15px]">
                しかも、経験できるのは1か所だけではありません。在学中に約3か所以上の牧場を経験できるから、技術も知識も視野も大きく広がり、自分に合った就職先をじっくり見極められます。これはバジガクならではの大きなメリットです。
              </p>
              <div className="mt-8 grid grid-cols-2 gap-4">
                <div className="bg-white p-6 text-center shadow-soft">
                  <p className="font-serif text-3xl font-bold text-pine-800 md:text-4xl">
                    <Counter to={350} suffix="件超" />
                  </p>
                  <p className="mt-2 text-xs font-bold text-ink-700">
                    全国の馬関連求人情報
                  </p>
                </div>
                <div className="bg-white p-6 text-center shadow-soft">
                  <p className="font-serif text-3xl font-bold text-pine-800 md:text-4xl">
                    約<Counter to={3} suffix="か所" />
                    <span className="text-lg">以上</span>
                  </p>
                  <p className="mt-2 text-xs font-bold text-ink-700">
                    在学中に経験できる牧場数
                  </p>
                </div>
              </div>
            </FadeUp>
          </div>
        </div>
      </Section>

      {/* (7) 履修科目例 */}
      <Section className="bg-white">
        <SectionTitle
          en="CURRICULUM"
          align="center"
          title="履修科目の一例"
          lead="高校の授業そのものが、厩務員課程受験と馬のプロへの準備につながる。バジガクならではの科目編成です。"
        />
        <FadeUp delay={0.1} className="mt-12">
          <div className="overflow-x-auto border border-cream-300 shadow-soft">
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

      {/* (8) CTA */}
      <CTABand />
    </>
  );
}
