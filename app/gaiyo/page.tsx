import type { Metadata } from "next";
import Image from "next/image";
import PageHero from "@/components/PageHero";
import { Section, SectionTitle } from "@/components/Section";
import { FadeUp, ScaleIn, Stagger, StaggerItem } from "@/components/motion";
import CTABand from "@/components/CTABand";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: {
    absolute: "株式会社馬事学院とは｜東関東馬事高等学院（バジガク）学校・会社概要",
  },
  description:
    "株式会社馬事学院が運営する東関東馬事高等学院（バジガク）の学校・会社概要。千葉県山武市のキャンパスで、馬と共に学びながら高校卒業資格の取得を目指します。設立から現在までの沿革、教育理念、学校施設、学生寮、JRA厩務員・騎手など馬業界を目指す教育についてご紹介します。",
  keywords: [
    "株式会社馬事学院",
    "馬事学院",
    "バジガク",
    "東関東馬事高等学院",
    "馬事学院会社概要",
    "東関東馬事高等学院会社概要",
    "馬の学校",
    "馬の高校",
    "乗馬学校",
    "JRA厩務員",
    "騎手",
    "競馬学校",
    "千葉県山武市",
    "全寮制高校",
    "比較",
  ],
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
  {
    label: "設立",
    value: (
      <>
        平成21年（2009年）9月
        <span className="mt-1 block text-xs text-ink-500">
          運営会社：株式会社馬事学院（{site.founded}設立）
        </span>
      </>
    ),
  },
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
    label: "アクセス",
    value: (
      <>
        JR総武本線「日向駅」より徒歩圏内
        <span className="mt-1 block text-xs text-ink-500">
          学校見学の際は、JR東京駅（八重洲中央口）までのお迎えがあります。
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
  {
    label: "生徒数",
    value: (
      <>
        約50名程度
        <span className="mt-1 block text-xs text-ink-500">
          少人数制で一人ひとりの生徒たちに寄り添える高校サポート校です。
        </span>
      </>
    ),
  },
  {
    label: "連携校",
    value: (
      <>
        広域通信制・中央国際高等学校
        <span className="mt-1 block text-xs text-ink-500">
          連携により、馬と暮らしながら高校卒業資格の取得を目指せます
        </span>
      </>
    ),
  },
  { label: "運営", value: "株式会社馬事学院" },
];

const goals: { label: string; text: string }[] = [
  {
    label: "心を育てる",
    text: "言葉の通じない馬と向き合う毎日を通して、相手を思いやる気持ちと、支えてくれる人への感謝を自然と身につけます。",
  },
  {
    label: "歩幅を大切にする",
    text: "成長のスピードも得意分野も、一人ひとり違って当たり前。その子の歩幅に寄り添う指導で、持ち味をのびのびと伸ばします。",
  },
  {
    label: "プロへの土台を築く",
    text: "馬の知識・騎乗技術・現場での実践力をバランスよく積み上げ、馬業界で長く活躍できる専門性を育てます。",
  },
  {
    label: "社会で生きる力を養う",
    text: "全寮制の共同生活のなかで、挨拶や礼儀、時間や約束を守る習慣など、どんな進路にも通じる社会性を磨きます。",
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
    title: "広域通信制「中央国際高等学校」と連携",
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

type FacilityArea = {
  no: string;
  en: string;
  title: string;
  desc: string;
  spots: string[];
  main: { src: string; alt: string };
  subs: { src: string; alt: string }[];
};

const facilityAreas: FacilityArea[] = [
  {
    no: "01",
    en: "SCHOOL BUILDING",
    title: "校舎",
    desc: "旧・日向小学校の校舎は、面影を残しながら「馬の高校」の学び舎へと生まれ変わりました。中央国際高等学校と連携した高校授業や馬の座学は、教室・講義室で。授業の合間にはラウンジでひと休みし、食堂では365日3食のあたたかいごはんが生徒たちを待っています。放課後には体育館も開放され、体力づくりや息抜きの場になっています。",
    spots: [
      "教室・講義室 — 高校授業と馬の座学の舞台",
      "ラウンジ — 授業の合間や放課後のひと休みに",
      "食堂 — 365日3食を提供",
      "体育館 — 放課後の開放でリフレッシュ",
    ],
    main: { src: "/images/shisetsu_002_1.jpg", alt: "リノベーションされた校舎の外観" },
    subs: [
      { src: "/images/shisetsu_012_1.jpg", alt: "座学が行われる講義室" },
      { src: "/images/shisetsu_003_1.jpg", alt: "生徒がくつろぐラウンジ" },
    ],
  },
  {
    no: "02",
    en: "ARENA & STABLE",
    title: "馬場・厩舎",
    desc: "かつて子どもたちが駆けまわった校庭は、いまは馬たちが駆けるメインアリーナに。教室の窓から馬場が見える、この学校ならではの風景が広がります。すぐそばの厩舎では馬たちが暮らし、生徒たちは担当馬制度のもと、朝晩のお世話を通して一頭一頭と深い信頼関係を築いていきます。",
    spots: [
      "メインアリーナ — 校庭だった場所が騎乗レッスンの舞台に",
      "厩舎 — 馬たちの住まい。毎日のお世話もここから",
      "担当馬制度 — 一人ひとりに担当馬がいる暮らし",
    ],
    main: { src: "/images/DSC_0028.jpg", alt: "校庭跡につくられたメインアリーナ" },
    subs: [
      { src: "/images/shisetsu_002_2.jpg", alt: "馬場から望むキャンパス" },
      { src: "/images/shisetsu_009_1.jpg", alt: "馬場・厩舎エリアのようす" },
    ],
  },
  {
    no: "03",
    en: "DORMITORY",
    title: "学生寮",
    desc: "学生寮は全室個室で、男子寮と女子寮は棟が分かれています。居室は元・教室をリノベーションしたもので、自分らしくレイアウトして暮らせます。夜間はセコムによる管理に加えて宿直スタッフも在籍し、初めての寮生活も安心して始められます。",
    spots: [
      "全室個室 — 元・教室をリノベーションした自分だけの部屋",
      "男女別棟 — 寮同士の行き来はできません",
      "夜間はセコム＋宿直スタッフの二重の見守り",
    ],
    main: { src: "/images/shisetsu_013_2.jpg", alt: "学生寮の個室" },
    subs: [
      { src: "/images/shisetsu_013_3.jpg", alt: "個室のレイアウト例" },
      { src: "/images/shisetsu_011_1.jpg", alt: "学生寮のようす" },
    ],
  },
];

type StaffRow = {
  en: string;
  role: string;
  name?: string;
  paragraphs: string[];
  quote?: string;
  closing?: string[];
  link?: { href: string; label: string };
};

const staffRows: StaffRow[] = [
  {
    en: "PRINCIPAL",
    role: "学校長",
    name: "野口 佳槻",
    paragraphs: [
      "自らも小学時代より乗馬をはじめ、小・中・高と馬とともに青春時代を歩む。大学時代には、名門「日本大学 馬術部」に所属。全日本学生や数々の馬術大会で活躍。卒業後は、引退競走馬を支え、乗馬クラブなどを経営。平成21年の設立以来、現在の「馬の学校」づくりの先頭に立ち続けてきた学校長。",
      "高校卒業に必要な学習は効率よく取り組み、馬と向き合い、経験する時間はできるだけ多く。教室の中だけではなく、馬と過ごす毎日そのものを学びに変えていく——バジガクならではの教育の考え方が、この言葉に込められています。",
    ],
    quote: "「勉強は最低限！夢は最大限！」",
    link: { href: "/tokucho", label: "学校長が語るバジガクの特長を見る" },
  },
  {
    en: "TEACHERS",
    role: "教員（職員）",
    paragraphs: [
      "本校と連携する中央国際高等学校の高校授業を支えるのが、教員チームです。1日2〜3時間を基本とした高校学習のサポートをはじめ、レポート指導や学習成果の確認などを担当。一人ひとりの学習状況に寄り添いながら、高校卒業までの3年間をしっかりと支えます。",
      "通信制高校の教材を提供し、各自の自主学習だけに任せるのではなく、日々の学校生活の中に高校授業に取り組む時間を設けていることも、本校の大きな特長です。分からないところがあれば教員に相談しながら、一つひとつ学習を進めることができます。",
      "馬の専門的な勉強や実習にしっかり取り組みながら、高校卒業に必要な学習にも安心して取り組める。「馬の学び」と「高校の学び」を両立できる環境を整えています。",
    ],
  },
  {
    en: "INSTRUCTORS",
    role: "インストラクター",
    paragraphs: [
      "騎乗指導や馬匹管理、馬に関する専門的な授業を担当するのは、馬の現場を知り尽くしたプロのインストラクター陣です。馬への接し方や日々の手入れから、騎乗技術、競走馬の管理まで。一人ひとりの経験や目標に合わせ、実践を重ねながら丁寧に指導します。",
      "そして、バジガクが大切にしているのが、「馬業界のプロ」と「今の若い世代」をつなぐことです。馬産業の現場には、長年の経験によって培われてきた技術や考え方があります。一方で、時代とともに若者の価値観や学び方、コミュニケーションのあり方も変化しています。",
      "本校には、馬業界で長く経験を積んできたベテランスタッフに加え、かつてバジガクで学び、卒業後にスタッフとして戻ってきた若い世代も活躍しています。自分たち自身がバジガクで高校生活や寮生活を経験してきたからこそ、生徒たちと近い目線で悩みや不安に寄り添い、学校生活を支えることができます。",
      "昔から馬の世界で大切にされてきた技術や姿勢は、しっかりと受け継ぐ。その一方で、今の世代に合った考え方や伝え方を柔軟に取り入れる。世代の異なるスタッフがお互いの強みを生かしながら、生徒一人ひとりを支えていることも、バジガクならではの教育環境です。",
      "さらに全寮制だからこそ、騎乗や馬の授業だけではなく、寮生活や日々の悩み、将来の進路についても担当スタッフがサポート。学校・馬・寮生活を切り離すことなく、生徒の成長をチーム全体で見守ります。",
    ],
    closing: [
      "教員から学ぶ「高校の学び」と、馬のプロから学ぶ「現場の学び」。",
      "そして、世代を超えて支える「人の力」。",
      "そのすべてがあることが、バジガクの大きな特長です。",
    ],
  },
];

const accessRows: { label: string; value: React.ReactNode }[] = [
  {
    label: "電車",
    value: (
      <>
        JR総武本線「日向駅」下車、キャンパスまで徒歩圏内です。
        <span className="mt-1 block text-xs text-ink-500">
          千葉方面・東京方面のどちらからもJR線でアクセスできます
        </span>
      </>
    ),
  },
  {
    label: "お車",
    value: (
      <>
        圏央道・千葉東金道路方面からお越しいただけます。
        <span className="mt-1 block text-xs text-ink-500">
          ※カーナビは「千葉県山武市雨坪10番地」の住所指定を推奨します
        </span>
      </>
    ),
  },
  {
    label: "見学時",
    value: (
      <>
        JR東京駅（八重洲中央口）までのお迎えがあります。
        <span className="mt-1 block text-xs text-ink-500">
          帰路はJR八街駅までお送りしますので、日帰りでもゆっくりご覧いただけます
        </span>
      </>
    ),
  },
];

export default function GaiyoPage() {
  return (
    <>
      <PageHero
        image="/images/shisetsu_001_1.jpg"
        en="ABOUT"
        title="学校概要"
        lead="馬の高校「バジガク」こと東関東馬事高等学院の基本情報と沿革をご紹介します。舞台は、小学校跡地をリノベーションした千葉県山武市のキャンパスです。"
        crumbs={[{ label: "HOME", href: "/" }, { label: "学校概要" }]}
      />

      {/* SCHOOL PROFILE */}
      <Section id="profile" className="texture-paper">
        <div className="grid items-start gap-10 lg:grid-cols-[minmax(0,0.85fr)_minmax(0,1.15fr)] lg:gap-14">
          <FadeUp>
            <figure>
              <div className="overflow-hidden border border-cream-300 bg-white shadow-soft">
                <Image
                  src="/g11.JPG"
                  alt="東関東馬事高等学院 学校長 野口佳槻"
                  width={800}
                  height={1000}
                  className="h-auto w-full object-cover"
                />
              </div>
              <figcaption className="mt-4 text-center text-sm tracking-wide text-ink-700">
                東関東馬事高等学院　学校長　野口　佳槻
              </figcaption>
            </figure>
          </FadeUp>
          <div>
            <SectionTitle
              en="SCHOOL PROFILE"
              title={
                <>
                  全寮制だからこそ学べる、
                  <br />
                  馬と自然の中での高校生活
                </>
              }
            />
            <FadeUp delay={0.15}>
              <p className="mt-8 text-sm leading-8 text-ink-700 md:text-[15px]">
                東関東馬事高等学院は、緑豊かな自然の中で、馬と共に学び、生活する全寮制の高校です。ここには、馬に関わる仕事を目指す生徒はもちろん、「動物が好き」「自然の中で学びたい」「新しい環境で自分を変えたい」など、さまざまな目的や目標を持った生徒たちが全国から集まっています。
              </p>
              <p className="mt-4 text-sm leading-8 text-ink-700 md:text-[15px]">
                馬や自然と向き合う毎日は、教室の中だけでは得ることのできない、たくさんの気づきや学びを与えてくれます。
              </p>
              <ul className="mt-6 space-y-2 text-sm leading-8 text-ink-700 md:text-[15px]">
                <li>馬の気持ちを考えること。</li>
                <li>仲間と協力すること。</li>
                <li>自分の役割に責任を持つこと。</li>
                <li>
                  うまくいかないときにも、自分で考え、もう一度挑戦すること。
                </li>
              </ul>
              <p className="mt-6 text-sm leading-8 text-ink-700 md:text-[15px]">
                そうした日々の積み重ねを通じて、新しい価値観や自分自身の可能性に出会えることも、本校ならではの学びです。
              </p>
            </FadeUp>
          </div>
        </div>
      </Section>

      {/* SCHOOL DATA */}
      <Section id="data" className="bg-white">
        <FadeUp>
          <div className="overflow-x-auto border border-cream-300 bg-white shadow-soft">
            <table className="w-full min-w-[440px] border-collapse text-left">
              <tbody>
                {profileRows.map((row) => (
                  <tr
                    key={row.label}
                    className="border-b border-cream-200 last:border-b-0"
                  >
                    <th
                      scope="row"
                      className="w-32 whitespace-nowrap bg-pine-50/70 px-6 py-5 align-top text-xs font-bold tracking-[0.25em] text-pine-800 md:w-40"
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
      </Section>

      {/* PHILOSOPHY */}
      <Section id="rinen" className="bg-white">
        <div className="grid gap-12 lg:grid-cols-[minmax(0,1.2fr)_minmax(0,1fr)] lg:items-start lg:gap-16">
          <div>
            <SectionTitle
              en="PHILOSOPHY"
              title={
                <>
                  馬と人が、
                  <br />
                  互いに育て合う学校。
                </>
              }
            />
            <FadeUp delay={0.1}>
              <div className="mt-10 space-y-10">
                <div>
                  <p className="text-[11px] font-bold tracking-[0.35em] text-gold-600">
                    MISSION ── 建学の精神
                  </p>
                  <h3 className="mt-3 font-serif text-lg font-bold text-pine-950 md:text-xl">
                    「共育」— 人が馬を育て、馬が人を育てる。
                  </h3>
                  <p className="mt-4 text-sm leading-8 text-ink-700 md:text-[15px]">
                    バジガクが学びの真ん中に置いているのは、「共育」という考え方です。人が馬を育てるのと同じだけ、馬もまた人を育ててくれる。言葉の通じない相手の気持ちをくみ取り、命を預かる責任を引き受ける毎日そのものが、教科書では学べない何よりの授業だと私たちは考えています。
                  </p>
                </div>
                <div>
                  <p className="text-[11px] font-bold tracking-[0.35em] text-gold-600">
                    VISION ── めざす姿
                  </p>
                  <h3 className="mt-3 font-serif text-lg font-bold text-pine-950 md:text-xl">
                    馬業界の担い手と、命に向き合える人間性。
                  </h3>
                  <p className="mt-4 text-sm leading-8 text-ink-700 md:text-[15px]">
                    私たちがめざすのは、馬業界の未来を担う確かな人材を送り出すこと。そしてもうひとつ、どんな道に進んでも通用する、命と真剣に向き合える豊かな人間性を育てることです。馬と暮らす高校3年間で、技術とともに人としての土台を築いていきます。
                  </p>
                </div>
              </div>
            </FadeUp>
          </div>
          <ScaleIn className="overflow-hidden shadow-lift lg:mt-16">
            <Image
              src="/images/1-39-680x415.jpg"
              alt="馬と心を通わせる生徒"
              width={680}
              height={415}
              className="h-full w-full object-cover"
            />
          </ScaleIn>
        </div>
        <FadeUp>
          <div className="mt-14 border border-cream-300 bg-cream-50 p-8 md:p-10">
            <p className="text-[11px] font-bold tracking-[0.4em] text-gold-600">
              GOALS
            </p>
            <h3 className="mt-3 font-serif text-xl font-bold text-pine-950 md:text-2xl">
              教育目標
            </h3>
            <ol className="mt-8 grid gap-6 md:grid-cols-2 md:gap-x-10">
              {goals.map((g, i) => (
                <li key={g.label} className="flex items-start gap-4">
                  <span className="font-serif text-2xl font-bold leading-none text-gold-500">
                    0{i + 1}
                  </span>
                  <div>
                    <p className="text-sm font-bold text-pine-950 md:text-[15px]">
                      {g.label}
                    </p>
                    <p className="mt-1.5 text-[13px] leading-7 text-ink-700">
                      {g.text}
                    </p>
                  </div>
                </li>
              ))}
            </ol>
          </div>
        </FadeUp>
      </Section>

      {/* HISTORY TIMELINE */}
      <Section id="history" className="texture-paper">
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
                  className={`mt-3 border bg-white p-5 shadow-soft transition duration-300 hover:-translate-y-1 hover:shadow-lift md:mt-0 md:p-6 ${
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

      {/* FACILITIES */}
      <Section id="facilities" className="bg-cream-100">
        <SectionTitle
          en="CAMPUS TOUR"
          align="center"
          title={
            <>
              教室から馬場まで、
              <br className="md:hidden" />
              歩いてまわるキャンパス案内。
            </>
          }
          lead="校舎・馬場と厩舎・学生寮——学びと暮らしのすべてが、ひとつのキャンパスに集まっています。エリアごとに、バジガクの日常の舞台をご紹介します。"
        />
        <div className="mt-4">
          {facilityAreas.map((area, i) => (
            <FadeUp key={area.no}>
              <div className="mt-16 grid gap-10 lg:grid-cols-2 lg:items-center lg:gap-14">
                <div className={i % 2 === 1 ? "lg:order-2" : ""}>
                  <p className="font-serif text-xs font-bold tracking-[0.35em] text-gold-600">
                    AREA {area.no} ── {area.en}
                  </p>
                  <h3 className="mt-3 font-serif text-2xl font-bold text-pine-950 md:text-3xl">
                    {area.title}
                  </h3>
                  <div aria-hidden className="rule-gold mt-5 h-[2px] w-16" />
                  <p className="mt-6 text-sm leading-8 text-ink-700 md:text-[15px]">
                    {area.desc}
                  </p>
                  <ul className="mt-6 space-y-2.5">
                    {area.spots.map((s) => (
                      <li
                        key={s}
                        className="flex items-start gap-2.5 text-[13px] leading-6 text-ink-700"
                      >
                        <span
                          aria-hidden
                          className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-gold-500"
                        />
                        {s}
                      </li>
                    ))}
                  </ul>
                </div>
                <div className={i % 2 === 1 ? "lg:order-1" : ""}>
                  <div className="relative h-60 overflow-hidden shadow-lift md:h-72">
                    <Image
                      src={area.main.src}
                      alt={area.main.alt}
                      fill
                      sizes="(max-width: 1024px) 100vw, 50vw"
                      className="object-cover transition-transform duration-700 hover:scale-105"
                    />
                  </div>
                  <div className="mt-4 grid grid-cols-2 gap-4">
                    {area.subs.map((img) => (
                      <div
                        key={img.src}
                        className="relative h-32 overflow-hidden shadow-soft md:h-40"
                      >
                        <Image
                          src={img.src}
                          alt={img.alt}
                          fill
                          sizes="(max-width: 1024px) 50vw, 25vw"
                          className="object-cover transition-transform duration-700 hover:scale-105"
                        />
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </FadeUp>
          ))}
        </div>
        <FadeUp>
          <div className="mx-auto mt-16 max-w-3xl border border-gold-500/40 bg-white p-8 text-center shadow-soft">
            <p className="text-sm leading-7 text-ink-700">
              ※ キャンパス・施設の見学は<strong className="text-pine-950">完全予約制</strong>です。学校見学・オープンキャンパスの日程にあわせて、スタッフがゆっくりご案内します。
            </p>
            <a
              href="/opencampus"
              className="group mt-6 inline-flex items-center justify-center gap-3 rounded-full bg-pine-800 px-10 py-4 text-sm font-bold text-white shadow-soft transition hover:shadow-lift"
            >
              学校見学・オープンキャンパスの詳細へ
              <span className="transition-transform duration-300 group-hover:translate-x-1.5">
                →
              </span>
            </a>
          </div>
        </FadeUp>
      </Section>

      {/* STAFF */}
      <Section id="staff" className="bg-white">
        <SectionTitle
          en="FACULTY"
          align="center"
          title={
            <>
              学ぶ生徒たちと
              <br />
              それを支えてくれる馬たちの存在
            </>
          }
        />
        <FadeUp delay={0.1}>
          <div className="mt-8 max-w-3xl space-y-4 text-sm leading-8 text-ink-700 md:text-[15px]">
            <p>
              本校では、全国から集まったさまざまな考え方や個性を持つ仲間たちと生活を共にします。その中で、探究する力、知識を身につける力、自ら考えて行動する力、コミュニケーション力、信念を持つ力、心を開く力、思いやり、挑戦する力、心身のバランス、そして自分自身を振り返る力を育んでいきます。
            </p>
            <p>
              馬の世話も、学校生活も、寮生活も、すべてが学びの時間です。私たちが大切にしているのは、単に馬の技術や知識を身につけることだけではありません。
            </p>
            <p>
              自分で考え、自分で行動し、仲間を思いやり、失敗してもまた挑戦できる人へ。馬と自然、そして仲間との全寮制生活を通じて心と身体の調和を図り、社会の一員としてより良い人間関係を築きながら、これからの人生を自分らしく歩んでいくための「生きる力」を育てること。それが、東関東馬事高等学院が目指す教育です。
            </p>
          </div>
        </FadeUp>
        <Stagger className="mt-12 border-t border-cream-300">
          {staffRows.map((s) => (
            <StaggerItem key={s.en}>
              <div className="grid gap-4 border-b border-cream-300 py-9 md:grid-cols-[240px_1fr] md:gap-10 md:py-10">
                <div>
                  <p className="text-[11px] font-bold tracking-[0.35em] text-gold-600">
                    {s.en}
                  </p>
                  <h3 className="mt-2 font-serif text-xl font-bold text-pine-950">
                    {s.role}
                  </h3>
                  {s.name && (
                    <p className="mt-2 font-serif text-base font-bold tracking-wider text-pine-800">
                      {s.name}
                    </p>
                  )}
                </div>
                <div className="space-y-4 text-sm leading-8 text-ink-700 md:text-[15px]">
                  {s.paragraphs.map((p, i) => (
                    <div key={i}>
                      {i === 1 && s.quote && (
                        <p className="mb-4 border-l-2 border-gold-500 pl-4 font-serif text-base font-bold text-pine-950 md:text-lg">
                          {s.quote}
                        </p>
                      )}
                      <p>{p}</p>
                    </div>
                  ))}
                  {s.closing && (
                    <div className="space-y-2 pt-2">
                      {s.closing.map((line) => (
                        <p key={line} className="font-medium text-pine-900">
                          {line}
                        </p>
                      ))}
                    </div>
                  )}
                  {s.link && (
                    <a
                      href={s.link.href}
                      className="group mt-1 inline-flex items-center gap-2 text-sm font-bold text-pine-800 transition hover:text-gold-600"
                    >
                      {s.link.label}
                      <span className="transition-transform duration-300 group-hover:translate-x-1">
                        →
                      </span>
                    </a>
                  )}
                </div>
              </div>
            </StaggerItem>
          ))}
        </Stagger>
      </Section>

      {/* ACCESS */}
      <Section id="access" className="texture-paper">
        <SectionTitle
          en="ACCESS"
          align="center"
          title="キャンパスへの行き方"
          lead="キャンパスがあるのは、千葉県山武市。最寄りのJR日向駅から歩ける距離で、学校見学の際にはJR東京駅（八重洲中央口）までのお迎えがあります。"
        />
        <div className="mt-14 grid gap-8 lg:grid-cols-[1.15fr_1fr]">
          <FadeUp>
            <div className="h-full overflow-hidden border border-cream-300 bg-white shadow-soft">
              <iframe
                src="https://www.google.com/maps?q=35.630227,140.357186(%E6%9D%B1%E9%96%A2%E6%9D%B1%E9%A6%AC%E4%BA%8B%E9%AB%98%E7%AD%89%E5%AD%A6%E9%99%A2+%E5%8D%83%E8%91%89%E7%9C%8C%E5%B1%B1%E6%AD%A6%E5%B8%82%E9%9B%A8%E5%9D%AA10%E7%95%AA%E5%9C%B0)&hl=ja&z=17&output=embed"
                title="東関東馬事高等学院の地図（千葉県山武市雨坪10番地）"
                loading="lazy"
                className="h-80 w-full border-0 lg:h-full lg:min-h-[420px]"
              />
            </div>
          </FadeUp>
          <FadeUp delay={0.1}>
            <div className="border border-cream-300 bg-white p-7 shadow-soft md:p-8">
              <p className="text-[11px] font-bold tracking-[0.4em] text-gold-600">
                DIRECTIONS
              </p>
              <h3 className="mt-3 font-serif text-lg font-bold text-pine-950 md:text-xl">
                交通案内
              </h3>
              <p className="mt-4 text-[13px] leading-6 text-ink-700">
                {site.address}
              </p>
              <div className="mt-6 overflow-x-auto">
                <table className="w-full border-collapse text-left">
                  <tbody>
                    {accessRows.map((row) => (
                      <tr
                        key={row.label}
                        className="border-b border-cream-200 last:border-b-0"
                      >
                        <th
                          scope="row"
                          className="w-24 whitespace-nowrap bg-pine-50/70 px-4 py-5 align-top text-xs font-bold tracking-[0.25em] text-pine-800"
                        >
                          {row.label}
                        </th>
                        <td className="px-4 py-5 text-sm leading-7 text-ink-700">
                          {row.value}
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
              <p className="mt-5 text-xs leading-6 text-ink-500">
                ※
                送迎の集合時間・実施日は開催回により異なります。最新の見学日程は
                <a
                  href="/opencampus"
                  className="mx-1 font-bold text-pine-800 underline decoration-gold-500 underline-offset-4 transition hover:text-gold-600"
                >
                  学校見学・オープンキャンパス
                </a>
                のページでご確認ください。
              </p>
            </div>
          </FadeUp>
        </div>
      </Section>

      <CTABand />
    </>
  );
}
