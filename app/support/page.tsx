import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import PageHero from "@/components/PageHero";
import { Section, SectionTitle } from "@/components/Section";
import { FadeUp, ScaleIn, SlideIn, Stagger, StaggerItem } from "@/components/motion";
import CTABand from "@/components/CTABand";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: "不登校からの高校進学",
  description:
    "小・中学校で不登校を経験した方へ。東関東馬事高等学院（バジガク）は、過去の出席や成績ではなく「これから」の意欲を評価する入学選考、1日2〜3時間の高校授業、全寮制、担当馬制度など、もう一度歩き出すための環境を用意しています。高校からの転入学も随時対応。",
};

const supports = [
  {
    no: "01",
    title: "選考で見るのは、過去ではなく「これから」",
    desc: "入学選考では、中学校までの出席日数や成績を評価の対象にしません。体験入学・学校見学での様子や出願書類に込められた「やってみたい」という気持ちを総合的に評価します。不登校の経験は、入学の妨げにはなりません。",
    tag: "入学選考",
  },
  {
    no: "02",
    title: "高校の授業は1日2〜3時間。自分のペースで",
    desc: "高卒資格の学習は、連携する広域通信制高校「明蓬館高等学校」のネット授業が中心。1日あたり2〜3時間なので、全日制のような時間割に追われることがありません。「教室で1日6時間」が苦しかった人も、無理なく再スタートできます。",
    tag: "高校授業",
  },
  {
    no: "03",
    title: "全寮制だから、生活リズムを整え直せる",
    desc: "朝は馬が待っているから自然と起きられる。夜は門限と消灯があるから自然と眠れる。全室個室・365日3食つき・スタッフ常駐の学生寮で、昼夜逆転しがちだった生活を、仲間と同じリズムでゆっくり立て直していけます。",
    tag: "寮生活",
  },
  {
    no: "04",
    title: "「馬」という、言葉のいらない相棒がいる",
    desc: "バジガクでは一人ひとりに担当馬がつきます。馬は過去を聞きません。毎日世話をした分だけ、まっすぐに応えてくれます。人と話すのが得意でなくても、まず馬との信頼関係から。そこから少しずつ、人との輪も広がっていきます。",
    tag: "担当馬制度",
  },
  {
    no: "05",
    title: "レベルと性格に合わせた個別レッスン",
    desc: "騎乗レッスンは、経験の有無や騎乗レベル、その人の性格・適性に応じてクラスや担当講師、騎乗馬を分けています。伸び悩んだときは1対1の個人レッスンも。まわりと比べられることなく、自分の歩幅で上達していけます。",
    tag: "個別指導",
  },
  {
    no: "06",
    title: "高校からの転入学にも、すぐ対応",
    desc: "「高校に入ったけれど通えなくなった」という場合も大丈夫。いまの高校を辞めずに籍を置いたまま、見学・面談にお越しいただけます。履修科目や単位を引き継ぎ、最短1ヶ月程度で転入学が可能です。",
    tag: "転入学",
  },
];

const parentPoints = [
  {
    title: "全室個室・男女別棟の学生寮",
    desc: "小学校の教室をリノベーションした個室で、プライベートを確保。男子寮と女子寮は分かれています。",
  },
  {
    title: "夜間はセコムとスタッフ常駐",
    desc: "寮内は夜間セコムによる管理体制。スタッフも常駐し、門限21時・消灯22時30分で規則正しい毎日を支えます。",
  },
  {
    title: "365日3食の食事つき",
    desc: "休日も長期休暇中も、1年を通じて3食を用意。食生活の心配なく、体づくりから整えていけます。",
  },
  {
    title: "個別相談でじっくりご説明",
    desc: "高卒資格のしくみ、担当馬制度、寮生活、卒業後の進路まで、ご本人・保護者様の疑問に個別面談で丁寧にお答えします。",
  },
];

const steps = [
  {
    no: "STEP 01",
    title: "資料請求",
    desc: "まずは学校案内をお手元に。最短3日でお届けします。ページを眺めるだけでも、きっと空気が伝わるはずです。",
    label: "資料請求フォームへ",
    href: site.forms.shiryo,
    external: true,
  },
  {
    no: "STEP 02",
    title: "学校見学・個別相談",
    desc: "JR東京駅から無料送迎。馬たちと校舎を実際に見て、気になることを個別にご相談ください。保護者の方だけの見学もご相談いただけます。",
    label: "学校見学について見る",
    href: "/opencampus",
    external: false,
  },
  {
    no: "STEP 03",
    title: "体験入学",
    desc: "乗馬体験つきの1日体験へ。「ここでならやれそう」と感じられたら、出願へ。選考は随時、約1週間で合否をお知らせします。",
    label: "体験入学に申し込む",
    href: site.forms.taiken,
    external: true,
  },
];

export default function SupportPage() {
  return (
    <>
      <PageHero
        image="/images/DSC_0073.jpg"
        en="SUPPORT"
        title="学校に行けなかった君へ。馬がいる場所から、もう一度。"
        lead="教室に足が向かなかった日々があっても、大丈夫。バジガクには、あなたと同じ経験をして、いま馬と一緒に高校生活を送っている仲間がいます。"
        crumbs={[{ label: "HOME", href: "/" }, { label: "不登校からの高校進学" }]}
      />

      {/* 導入メッセージ */}
      <Section className="bg-white">
        <div className="grid items-center gap-12 lg:grid-cols-2">
          <div>
            <SectionTitle
              en="MESSAGE"
              title={
                <>
                  不登校は「終わり」じゃない。
                  <br />
                  ここから始まる人が、たくさんいる。
                </>
              }
            />
            <FadeUp delay={0.15}>
              <p className="mt-8 text-sm leading-8 text-ink-700 md:text-[15px]">
                小学校や中学校で、学校に行けない時期があった——。バジガクには、そんな経験を経て入学してくる生徒が少なくありません。理由は人それぞれ。でも共通しているのは、「馬が好き」「馬と関わる毎日を送ってみたい」という気持ちを胸に、自分で一歩を踏み出したことです。
              </p>
              <p className="mt-4 text-sm leading-8 text-ink-700 md:text-[15px]">
                だから本校の入学選考は、過去の出席日数や成績を問いません。見ているのは、これからに向かう意欲だけ。そして入学後も、通信制のしくみ・全寮制の生活・担当馬との毎日という環境全体で、あなたの再スタートを支えます。
              </p>
              <p className="mt-4 text-sm leading-8 text-ink-700 md:text-[15px]">
                うまく話せなくても、自信がなくても、かまいません。馬のそばには、教室とはちがう時間が流れています。
              </p>
            </FadeUp>
          </div>
          <div className="relative">
            <ScaleIn className="relative z-10 overflow-hidden rounded-3xl shadow-lift">
              <Image
                src="/images/DSC_0026-4.jpg"
                alt="馬とふれあいながら過ごす生徒"
                width={1200}
                height={800}
                className="h-full w-full object-cover"
              />
            </ScaleIn>
            <SlideIn
              direction={-1}
              delay={0.25}
              className="relative z-20 -mt-16 ml-auto w-2/3 overflow-hidden rounded-3xl border-4 border-white shadow-lift md:-mt-24"
            >
              <Image
                src="/images/20220529_064457.jpg"
                alt="朝のキャンパスで馬の世話をする様子"
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

      {/* 支援・環境 6項目 */}
      <Section className="texture-paper">
        <SectionTitle
          en="SUPPORT SYSTEM"
          align="center"
          title={
            <>
              バジガクに用意されている、
              <br className="md:hidden" />
              6つの「大丈夫」。
            </>
          }
          lead="がんばるのは、あなた一人ではありません。入学選考から毎日の授業、寮での暮らしまで、再スタートを支えるしくみを整えています。"
        />
        <Stagger className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {supports.map((s) => (
            <StaggerItem key={s.no} className="h-full">
              <div className="group flex h-full flex-col rounded-3xl bg-white p-8 shadow-soft transition duration-300 hover:-translate-y-1.5 hover:shadow-lift">
                <div className="flex items-center justify-between">
                  <span className="font-serif text-3xl font-bold text-gold-500">
                    {s.no}
                  </span>
                  <span className="rounded-full bg-pine-50 px-3 py-1 text-[10px] font-bold text-pine-700">
                    {s.tag}
                  </span>
                </div>
                <h3 className="mt-4 font-serif text-lg font-bold leading-snug text-pine-950">
                  {s.title}
                </h3>
                <div className="mt-4 h-[2px] w-10 rule-gold" />
                <p className="mt-4 flex-1 text-[13px] leading-7 text-ink-700">
                  {s.desc}
                </p>
              </div>
            </StaggerItem>
          ))}
        </Stagger>
        <FadeUp delay={0.1} className="mt-10 text-center">
          <p className="text-xs leading-6 text-ink-500">
            転入学のご相談は、資料請求のうえ事務局（TEL {site.tel}）まで。在籍校を退学せず、籍を置いたままでのご相談を歓迎しています。
          </p>
        </FadeUp>
      </Section>

      {/* 保護者の方へ */}
      <section className="relative overflow-hidden bg-pine-900 py-16 md:py-24">
        <div
          aria-hidden
          className="absolute inset-0 bg-cover bg-center opacity-10"
          style={{ backgroundImage: "url(/images/DSC_2533.jpg)" }}
        />
        <div className="relative mx-auto max-w-7xl px-6">
          <div className="grid items-center gap-12 lg:grid-cols-2">
            <div>
              <SectionTitle
                dark
                en="FOR PARENTS"
                title={
                  <>
                    保護者の方へ。
                    <br />
                    まずは、見に来てください。
                  </>
                }
                lead="お子さまを親元から離すことに、不安のない保護者様はいらっしゃいません。だからこそバジガクは、入学前の学校見学と個別相談を大切にしています。寮のお部屋も、食堂も、馬たちと過ごす生徒の表情も、実際にご覧いただいたうえでご判断ください。"
              />
              <Stagger className="mt-10 grid gap-4 sm:grid-cols-2">
                {parentPoints.map((p) => (
                  <StaggerItem key={p.title}>
                    <div className="h-full rounded-2xl border border-white/10 bg-white/5 p-5 backdrop-blur-sm">
                      <h3 className="text-sm font-bold text-white">{p.title}</h3>
                      <p className="mt-2 text-xs leading-6 text-white/70">
                        {p.desc}
                      </p>
                    </div>
                  </StaggerItem>
                ))}
              </Stagger>
              <FadeUp delay={0.2}>
                <p className="mt-8 text-xs leading-6 text-white/60">
                  ご相談・お問い合わせ：{site.name} 事務局
                  <a
                    href={`tel:${site.tel}`}
                    className="mx-1 font-bold tracking-wider text-sun-400 hover:underline"
                  >
                    TEL {site.tel}
                  </a>
                  （{site.address}）
                </p>
              </FadeUp>
            </div>
            <div className="space-y-5">
              <ScaleIn className="overflow-hidden rounded-3xl shadow-lift">
                <Image
                  src="/images/shisetsu_001_1.jpg"
                  alt="小学校をリノベーションした校舎と学生寮"
                  width={1200}
                  height={800}
                  className="h-full w-full object-cover"
                />
              </ScaleIn>
              <div className="grid grid-cols-2 gap-5">
                <ScaleIn delay={0.15} className="overflow-hidden rounded-2xl shadow-lift">
                  <Image
                    src="/images/shisetsu_005_1.jpg"
                    alt="学生寮の個室"
                    width={600}
                    height={420}
                    className="h-full w-full object-cover"
                  />
                </ScaleIn>
                <ScaleIn delay={0.25} className="overflow-hidden rounded-2xl shadow-lift">
                  <Image
                    src="/images/shisetsu_006_1.jpg"
                    alt="食堂での食事の様子"
                    width={600}
                    height={420}
                    className="h-full w-full object-cover"
                  />
                </ScaleIn>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 一歩目の踏み出し方 */}
      <Section className="bg-cream-100">
        <SectionTitle
          en="FIRST STEP"
          align="center"
          title="一歩目は、小さくていい。"
          lead="いきなり「入学」を決める必要はありません。資料を眺めることから、少しずつ。あなたのペースで進んでください。"
        />
        <Stagger className="mt-12 grid gap-6 md:grid-cols-3">
          {steps.map((st) => (
            <StaggerItem key={st.no} className="h-full">
              <div className="relative flex h-full flex-col rounded-3xl bg-white p-8 shadow-soft transition duration-300 hover:-translate-y-1.5 hover:shadow-lift">
                <p className="text-[11px] font-bold tracking-[0.35em] text-gold-600">
                  {st.no}
                </p>
                <h3 className="mt-3 font-serif text-xl font-bold text-pine-950">
                  {st.title}
                </h3>
                <p className="mt-4 flex-1 text-[13px] leading-7 text-ink-700">
                  {st.desc}
                </p>
                {st.external ? (
                  <a
                    href={st.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group mt-6 inline-flex items-center gap-2 text-xs font-bold text-pine-800"
                  >
                    {st.label}
                    <span className="transition-transform duration-300 group-hover:translate-x-1.5">
                      →
                    </span>
                  </a>
                ) : (
                  <Link
                    href={st.href}
                    className="group mt-6 inline-flex items-center gap-2 text-xs font-bold text-pine-800"
                  >
                    {st.label}
                    <span className="transition-transform duration-300 group-hover:translate-x-1.5">
                      →
                    </span>
                  </Link>
                )}
              </div>
            </StaggerItem>
          ))}
        </Stagger>
        <FadeUp delay={0.15} className="mt-10 text-center">
          <p className="text-xs leading-6 text-ink-500">
            出願に費用はかかりません。選考は出願順に随時行い、約1週間で合否をお知らせします。
            <br className="hidden md:block" />
            くわしくは
            <Link href="/boshu" className="mx-1 font-bold text-pine-800 underline decoration-gold-500 underline-offset-4 hover:text-pine-600">
              募集要項
            </Link>
            と
            <Link href="/qa" className="mx-1 font-bold text-pine-800 underline decoration-gold-500 underline-offset-4 hover:text-pine-600">
              よくある質問
            </Link>
            をご覧ください。
          </p>
        </FadeUp>
      </Section>

      <CTABand />
    </>
  );
}
