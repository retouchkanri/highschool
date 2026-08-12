import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import PageHero from "@/components/PageHero";
import { Section, SectionTitle } from "@/components/Section";
import { FadeUp, ScaleIn, SlideIn, Stagger, StaggerItem } from "@/components/motion";
import CTABand from "@/components/CTABand";
import Accordion, { type QA } from "@/components/Accordion";
import { faqs } from "@/lib/faq";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: "不登校からの高校進学",
  description:
    "小・中学校で不登校を経験した方へ。東関東馬事高等学院（バジガク）の支援方針、在校生約60名の少人数と個別対応・全寮制という環境、学習・メンタル・保護者連携のサポート体制、在校生のストーリー、よくある質問まで。高校からの転入学も随時対応しています。",
};

/* ── 安心して学べる環境：3つの柱 ───────────────────── */
const pillars = [
  {
    en: "SMALL SCHOOL",
    title: "少人数",
    stat: "在校生 約60名",
    desc: "バジガクの在校生は約60名。学年やコースを越えて、スタッフが一人ひとりの顔と名前、その日の表情までを見渡せる規模です。大きな集団の中で埋もれてしまう心配はありません。",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.6} className="h-7 w-7" aria-hidden>
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M15 19.128a9.38 9.38 0 002.625.372 9.337 9.337 0 004.121-.952 4.125 4.125 0 00-7.533-2.493M15 19.128v-.003c0-1.113-.285-2.16-.786-3.07M15 19.128v.106A12.318 12.318 0 018.624 21c-2.331 0-4.512-.645-6.374-1.766l-.001-.109a6.375 6.375 0 0111.964-3.07M12 6.375a3.375 3.375 0 11-6.75 0 3.375 3.375 0 016.75 0zm8.25 2.25a2.625 2.625 0 11-5.25 0 2.625 2.625 0 015.25 0z"
        />
      </svg>
    ),
  },
  {
    en: "PERSONAL",
    title: "個別対応",
    stat: "レベル×性格で組むレッスン",
    desc: "騎乗レッスンは、経験の有無や騎乗レベルだけでなく、その人の性格・適性まで見てクラスと担当講師を編成します。伸び悩んだときは1対1の個人レッスンに切り替えることも。「みんなと同じ」を押しつけない指導が基本です。",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.6} className="h-7 w-7" aria-hidden>
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M20.25 8.511c.884.284 1.5 1.128 1.5 2.097v4.286c0 1.136-.847 2.1-1.98 2.193-.34.027-.68.052-1.02.072v3.091l-3-3c-1.354 0-2.694-.055-4.02-.163a2.115 2.115 0 01-.825-.242m9.345-8.334a2.126 2.126 0 00-.476-.095 48.64 48.64 0 00-8.048 0c-1.131.094-1.976 1.057-1.976 2.192v4.286c0 .837.46 1.58 1.155 1.951m9.345-8.334V6.637c0-1.621-1.152-3.026-2.76-3.235A48.455 48.455 0 0011.25 3c-2.115 0-4.198.137-6.24.402-1.608.209-2.76 1.614-2.76 3.235v6.226c0 1.621 1.152 3.026 2.76 3.235.577.075 1.157.14 1.74.194V21l4.155-4.155"
        />
      </svg>
    ),
  },
  {
    en: "DORMITORY",
    title: "寮生活",
    stat: "全寮制・全室個室",
    desc: "全室個室・男女別棟の学生寮で、365日3食つき。門限21時・消灯22時30分というリズムが、昼夜逆転しがちだった毎日を静かに整え直してくれます。ひとりの時間も、ちゃんと守られます。",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.6} className="h-7 w-7" aria-hidden>
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="m2.25 12 8.954-8.955c.44-.439 1.152-.439 1.591 0L21.75 12M4.5 9.75v10.125c0 .621.504 1.125 1.125 1.125H9.75v-4.875c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21h4.125c.621 0 1.125-.504 1.125-1.125V9.75M8.25 21h8.25"
        />
      </svg>
    ),
  },
];

/* ── 3つの柱に続く、そのほかの「大丈夫」 ─────────────── */
const supports = [
  {
    no: "01",
    title: "選考で見るのは、過去ではなく「これから」",
    desc: "入学選考では、中学校までの出席日数や成績を評価の対象にしません。体験入学・学校見学での様子や出願書類に込められた「やってみたい」という気持ちを総合的に評価します。不登校の経験は、入学の妨げにはなりません。",
    tag: "入学選考",
  },
  {
    no: "02",
    title: "「教室で1日6時間」に、追われない",
    desc: "高卒資格の学習は、連携する広域通信制高校「中央国際高等学校」のネット授業が中心。全日制のような時間割に縛られないので、教室で過ごす長い1日が苦しかった人も、無理のないかたちで再スタートできます。",
    tag: "高校授業",
  },
  {
    no: "03",
    title: "「馬」という、言葉のいらない相棒がいる",
    desc: "バジガクでは一人ひとりに担当馬がつきます。馬は過去を聞きません。毎日世話をした分だけ、まっすぐに応えてくれます。人と話すのが得意でなくても、まず馬との信頼関係から。そこから少しずつ、人との輪も広がっていきます。",
    tag: "担当馬制度",
  },
  {
    no: "04",
    title: "高校からの転入学にも、すぐ対応",
    desc: "「高校に入ったけれど通えなくなった」という場合も大丈夫。いまの高校を辞めずに籍を置いたまま、見学・面談にお越しいただけます。履修科目や単位を引き継ぎ、最短1ヶ月程度で転入学が可能です。",
    tag: "転入学",
  },
];

/* ── 学校生活サポート ───────────────────────────── */
const lifeSupports = [
  {
    en: "STUDY",
    title: "学習支援",
    desc: "高校の勉強は、連携する通信制高校のネット授業で進めます。決まった進度に全員で合わせる必要はなく、つまずいたところまで戻ってやり直せるのが、通信制のいちばんの良さです。",
    points: [
      "高校授業は1日2〜3時間",
      "定期テストではなく、日々の学習成果で単位を認定",
      "進み具合は自分のペースで。学習の計画づくりもスタッフと一緒に",
    ],
  },
  {
    en: "MENTAL",
    title: "メンタルサポート",
    desc: "特別な相談の時間を待つのではなく、毎日の暮らしの中でそっと見守ること。同じ敷地で生活をともにするバジガクだからできる、日常のなかのサポートです。",
    points: [
      "担任と宿直スタッフが、日々の小さな変化に気を配ります",
      "担当馬とのふれあいの時間が、気持ちを整えてくれます",
      "困りごとを、いつでも・誰にでも話せる距離感",
    ],
  },
  {
    en: "FAMILY",
    title: "保護者連携",
    desc: "お子さまの様子を「離れていて見えない」ままにしません。ご家庭と学校が同じ方向を向いて支えられるよう、連絡と対話を重ねていきます。",
    points: [
      "定期的なご連絡で、学校での様子をお伝えします",
      "気になることは、個別面談でじっくりと",
      "ご見学はいつでもご相談ください（保護者様おひとりでも歓迎）",
    ],
  },
];

/* ── 保護者の方へ ───────────────────────────────── */
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

/* ── FAQ ───────────────────────────────────────── */
const faqPicks = [
  "小学校・中学校で不登校でしたが、入学できますか？",
  "いま通っている高校から転入学（転校）はできますか？",
];

const localFaqs: QA[] = [
  {
    q: "勉強がずっと遅れています。授業についていけますか？",
    a: "大丈夫です。高校の学習は連携する通信制高校のネット授業が中心で、1日あたり2〜3時間。全員で同じ進度に合わせる授業ではないため、理解できるところまで戻って、自分のペースでやり直せます。単位も定期テストの点数ではなく日々の学習成果で認定されるので、こつこつ積み重ねていくタイプの人にこそ向いているしくみです。不安な教科は、入学後にスタッフへ気軽に相談してください。",
  },
  {
    q: "人と話すのが苦手で、集団生活が不安です。",
    a: "無理に輪へ入ることを求めません。寮は全室個室でひとりの時間をきちんと確保でき、在校生は約60名の少人数です。まずは担当馬との関係づくりから始めてください。毎日の世話や作業の時間をともにするうちに、自然と会話が生まれていきます。夜間は宿直スタッフがいますので、困ったときに頼れる大人がそばにいる環境です。",
  },
  {
    q: "体調に波があり、欠席がちでも高校を卒業できますか？",
    a: "高校卒業資格は通信制のしくみで取得するため、全日制のように毎日の出席が卒業の条件になるわけではありません。日々の学習成果の積み重ねや、年1回のスクーリング（連携校の九州本校で3泊4日）など、所定の要件を満たしていくことで単位を修得します。体調に波がある場合も、無理のない学習の進め方を一緒に考えますので、まずは現在の状況をご相談ください。",
  },
];

const faqItems: QA[] = [
  ...faqPicks.flatMap((q) => {
    const hit = faqs.find((f) => f.q === q);
    return hit ? [{ q: hit.q, a: hit.a }] : [];
  }),
  ...localFaqs,
];

/* ── 一歩目の踏み出し方 ─────────────────────────── */
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

      {/* 本校の支援方針 */}
      <Section id="policy" className="bg-white">
        <div className="grid items-center gap-12 lg:grid-cols-2">
          <div>
            <SectionTitle
              en="OUR POLICY"
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
            <ScaleIn className="relative z-10 overflow-hidden shadow-lift">
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
              className="relative z-20 -mt-16 ml-auto w-2/3 overflow-hidden border-4 border-white shadow-lift md:-mt-24"
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

      {/* 安心して学べる環境 */}
      <Section id="environment" className="texture-paper">
        <SectionTitle
          en="ENVIRONMENT"
          align="center"
          title={
            <>
              安心して学べる環境を支える、
              <br className="md:hidden" />
              3つの土台。
            </>
          }
          lead="「またやり直せるだろうか」という不安に、しくみで応えます。バジガクの毎日は、この3つの土台の上に成り立っています。"
        />
        <Stagger className="mt-12 grid gap-6 md:grid-cols-3">
          {pillars.map((p) => (
            <StaggerItem key={p.title} className="h-full">
              <div className="group flex h-full flex-col items-center bg-white p-8 text-center shadow-soft transition duration-300 hover:-translate-y-1.5 hover:shadow-lift">
                <div className="flex h-16 w-16 items-center justify-center rounded-full bg-pine-50 text-pine-700 transition duration-300 group-hover:bg-pine-800 group-hover:text-gold-300">
                  {p.icon}
                </div>
                <p className="mt-5 text-[10px] font-bold tracking-[0.35em] text-gold-600">
                  {p.en}
                </p>
                <h3 className="mt-2 font-serif text-2xl font-bold text-pine-950">
                  {p.title}
                </h3>
                <p className="mt-2 rounded-full bg-cream-100 px-4 py-1 text-[11px] font-bold text-pine-700">
                  {p.stat}
                </p>
                <div className="mt-4 h-[2px] w-10 rule-gold" />
                <p className="mt-4 flex-1 text-[13px] leading-7 text-ink-700">
                  {p.desc}
                </p>
              </div>
            </StaggerItem>
          ))}
        </Stagger>

        <FadeUp delay={0.1} className="mt-16 text-center">
          <p className="text-[11px] font-bold tracking-[0.35em] text-gold-600">
            AND MORE
          </p>
          <h3 className="mt-3 font-serif text-xl font-bold text-pine-950 md:text-2xl">
            ほかにも、こんな「大丈夫」がそろっています。
          </h3>
        </FadeUp>
        <Stagger className="mt-10 grid gap-6 md:grid-cols-2">
          {supports.map((s) => (
            <StaggerItem key={s.no} className="h-full">
              <div className="group flex h-full flex-col bg-white p-8 shadow-soft transition duration-300 hover:-translate-y-1.5 hover:shadow-lift">
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

      {/* 学校生活サポート */}
      <Section id="school-life" className="bg-cream-100">
        <SectionTitle
          en="SCHOOL LIFE SUPPORT"
          align="center"
          title={
            <>
              入学してからの毎日を支える、
              <br className="md:hidden" />
              3つのサポート。
            </>
          }
          lead="入り口だけを整えて、あとは本人任せ——にはしません。学習・こころ・ご家庭とのつながり。3つの面から、日々の学校生活を支えます。"
        />
        <Stagger className="mt-12 grid gap-6 md:grid-cols-3">
          {lifeSupports.map((l) => (
            <StaggerItem key={l.title} className="h-full">
              <div className="flex h-full flex-col bg-white p-8 shadow-soft transition duration-300 hover:-translate-y-1.5 hover:shadow-lift">
                <p className="text-[10px] font-bold tracking-[0.35em] text-gold-600">
                  {l.en}
                </p>
                <h3 className="mt-2 font-serif text-xl font-bold text-pine-950">
                  {l.title}
                </h3>
                <div className="mt-4 h-[2px] w-10 rule-gold" />
                <p className="mt-4 text-[13px] leading-7 text-ink-700">{l.desc}</p>
                <ul className="mt-5 flex-1 space-y-3 border-t border-cream-200 pt-5">
                  {l.points.map((pt) => (
                    <li key={pt} className="flex gap-2.5 text-[13px] leading-6 text-ink-700">
                      <span aria-hidden className="mt-[9px] h-1.5 w-1.5 shrink-0 rounded-full bg-gold-500" />
                      {pt}
                    </li>
                  ))}
                </ul>
              </div>
            </StaggerItem>
          ))}
        </Stagger>
        <FadeUp delay={0.1} className="mt-10 text-center">
          <p className="text-xs leading-6 text-ink-500">
            ※医療・カウンセリング等の専門的なケアを行う機関ではありません。通院や服薬など配慮が必要な場合は、出願前に個別相談でお聞かせください。
          </p>
        </FadeUp>
      </Section>

      {/* 在校生ストーリー */}
      <Section id="story" className="bg-white">
        <SectionTitle
          en="STUDENT STORY"
          align="center"
          title={
            <>
              教室には行けなかった僕が、
              <br className="md:hidden" />
              厩舎には毎朝行ける。
            </>
          }
          lead="中学で不登校を経験し、いまバジガクで暮らす在校生のストーリーを紹介します。"
        />
        <div className="mt-14 grid items-start gap-12 lg:grid-cols-12">
          <div className="relative lg:col-span-5">
            <ScaleIn className="relative z-10 overflow-hidden shadow-lift">
              <Image
                src="/images/tokucho_001_3.jpg"
                alt="担当馬の世話をする在校生"
                width={1000}
                height={700}
                className="h-full w-full object-cover"
              />
            </ScaleIn>
            <SlideIn
              direction={1}
              delay={0.25}
              className="relative z-20 -mt-14 mr-auto w-2/3 overflow-hidden border-4 border-white shadow-lift md:-mt-20"
            >
              <Image
                src="/images/DSC9265.jpg"
                alt="馬場でのレッスン風景"
                width={800}
                height={560}
                className="h-full w-full object-cover"
              />
            </SlideIn>
            <div
              aria-hidden
              className="absolute -right-8 -bottom-8 -z-0 h-40 w-40 rounded-full bg-gold-300/30 blur-2xl"
            />
          </div>
          <div className="lg:col-span-7">
            <FadeUp>
              <p className="inline-flex items-center gap-3 rounded-full bg-pine-50 px-5 py-2 text-xs font-bold text-pine-800">
                悠真さん・2年
                <span className="font-normal text-ink-500">中学2年から不登校を経験</span>
              </p>
            </FadeUp>
            <FadeUp delay={0.1}>
              <p className="mt-6 text-sm leading-8 text-ink-700 md:text-[15px]">
                中学2年の秋から、悠真さんは学校へ行けなくなりました。理由をうまく言葉にできないまま、家で過ごす時間だけが長くなっていったといいます。そんな日々のなかで唯一続いていたのが、競馬中継を観ること。画面の向こうを走る馬の姿だけが、心を動かしてくれる存在でした。
              </p>
              <p className="mt-4 text-sm leading-8 text-ink-700 md:text-[15px]">
                「馬のそばで暮らせる高校があるらしい」。ご家族が見つけたバジガクへ、半信半疑のまま見学に来たのが中学3年の夏。校舎に着いて最初に感じたのは緊張ではなく、干し草と土のにおいだったそうです。その日のうちに「ここなら」と決められたわけではありません。それでも帰り道、気づけば「もう一回来てみたい」と口にしていました。
              </p>
              <p className="mt-4 text-sm leading-8 text-ink-700 md:text-[15px]">
                入学後の毎日は、担当馬を中心に回りはじめます。朝、自分を待っている馬がいるから起きられる。世話をすれば、そのぶんだけ懐いてくれる。夜は消灯があるから自然と眠る。「頑張って生活を直した、という感覚はないんです。馬に合わせていたら、いつの間にか直っていました」。
              </p>
            </FadeUp>
            <FadeUp delay={0.2}>
              <blockquote className="mt-8 border-l-4 border-gold-500 bg-cream-50 px-6 py-6 md:px-8">
                <p className="font-serif text-lg font-bold leading-relaxed text-pine-950 md:text-xl">
                  「馬は、僕が休んでいた2年間のことを何も聞かない。ただ、今日の僕を見てくれるんです」
                </p>
              </blockquote>
            </FadeUp>
            <FadeUp delay={0.25}>
              <p className="mt-6 text-sm leading-8 text-ink-700 md:text-[15px]">
                2年生になったいまは、馬術大会への出場を目標に練習を重ねながら、卒業後は牧場で働くことを考えはじめています。教室に行けなかった日々は消えません。でもそれは、いまの悠真さんを縛るものでもありません。
              </p>
              <p className="mt-6 text-xs leading-6 text-ink-500">
                ※掲載にあたり、個人が特定されないよう名前を仮名とし、内容の一部を変えて紹介しています。
              </p>
            </FadeUp>
          </div>
        </div>
      </Section>

      {/* 保護者の方へ */}
      <section id="parents" className="relative overflow-hidden bg-pine-900 py-16 md:py-24">
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
                    <div className="h-full border border-white/10 bg-white/5 p-5 backdrop-blur-sm">
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
              <ScaleIn className="overflow-hidden shadow-lift">
                <Image
                  src="/images/shisetsu_001_1.jpg"
                  alt="小学校をリノベーションした校舎と学生寮"
                  width={1200}
                  height={800}
                  className="h-full w-full object-cover"
                />
              </ScaleIn>
              <div className="grid grid-cols-2 gap-5">
                <ScaleIn delay={0.15} className="overflow-hidden shadow-lift">
                  <Image
                    src="/images/shisetsu_005_1.jpg"
                    alt="学生寮の個室"
                    width={600}
                    height={420}
                    className="h-full w-full object-cover"
                  />
                </ScaleIn>
                <ScaleIn delay={0.25} className="overflow-hidden shadow-lift">
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

      {/* よくある質問 */}
      <Section id="faq" className="texture-paper">
        <SectionTitle
          en="FAQ"
          align="center"
          title="不安なことには、先にお答えします。"
          lead="不登校や転入学に関して、特に多くいただくご質問をまとめました。ここにない疑問は、個別相談で何でもお聞きください。"
        />
        <FadeUp className="mx-auto mt-12 max-w-4xl">
          <Accordion items={faqItems} />
        </FadeUp>
        <FadeUp delay={0.15} className="mt-10 text-center">
          <Link
            href="/qa"
            className="inline-flex items-center gap-2 rounded-full border-2 border-pine-800 px-8 py-3 text-sm font-bold text-pine-800 transition hover:bg-pine-800 hover:text-white"
          >
            よくある質問をすべて見る
            <span aria-hidden>→</span>
          </Link>
        </FadeUp>
      </Section>

      {/* 一歩目の踏み出し方 */}
      <Section id="first-step" className="bg-cream-100">
        <SectionTitle
          en="FIRST STEP"
          align="center"
          title="一歩目は、小さくていい。"
          lead="いきなり「入学」を決める必要はありません。資料を眺めることから、少しずつ。あなたのペースで進んでください。"
        />
        <Stagger className="mt-12 grid gap-6 md:grid-cols-3">
          {steps.map((st) => (
            <StaggerItem key={st.no} className="h-full">
              <div className="relative flex h-full flex-col bg-white p-8 shadow-soft transition duration-300 hover:-translate-y-1.5 hover:shadow-lift">
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
            ※出願に費用はかかりません。選考は出願順に随時行い、約1週間で合否をお知らせします（日程・内容は変更になる場合があります）。
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
