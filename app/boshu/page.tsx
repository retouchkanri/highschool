import type { Metadata } from "next";
import PageHero from "@/components/PageHero";
import { Section, SectionTitle } from "@/components/Section";
import { FadeUp, Stagger, StaggerItem } from "@/components/motion";
import CTABand from "@/components/CTABand";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: "募集要項｜東関東馬事高等学院",
  description:
    "東関東馬事高等学院（バジガク）の令和9年4月生 一般募集要項。応募条件・必要書類・出願期間（令和8年8月22日〜10月28日）・学費・入学手続きまでの流れをご案内します。出願費用は不要、随時選考で約1週間で合否をお知らせします。",
};

const policies = [
  {
    no: "01",
    title: "思いやりと感謝の心を育てる",
    desc: "馬という大きな命と向き合い、寮での団体生活を仲間と重ねる毎日。互いに助け合う経験を通して、相手を思いやる心と、支えてくれる人への感謝の気持ちを持てる人を育てます。",
  },
  {
    no: "02",
    title: "一人ひとりの個性を伸ばす",
    desc: "個性尊重の教育のもと、一人ひとりが秘めている可能性・個性・特性を最大限に引き出します。馬との時間を通じて感受性を磨き、情操豊かな人間性を養います。",
  },
  {
    no: "03",
    title: "馬業界を担う人材を育成する",
    desc: "馬の世界を志す若者に、確かな馬学の知識と豊かな技術を授けます。国内外の馬事の発展に貢献できる、有能なホースマンの育成を目指します。",
  },
];

const conditions = [
  {
    label: "年齢",
    value: "本校入学時点で中学卒業以上、18歳以下の方。",
  },
  {
    label: "健康",
    value: "騎乗や馬の管理を行ううえで支障のない健康状態であること。",
  },
  {
    label: "体重",
    value:
      "騎手受験特別コースを選択される場合のみ45kg以下。その他のコースは65kg以下。",
  },
];

const documents = [
  {
    no: "1",
    label: "入校申込書（様式1）",
    value: "出願フォームからの提出もご利用いただけます。",
  },
  {
    no: "2",
    label: "健康診断書（様式2）",
    value: "入学内定後にご提出いただく場合があります。",
  },
  {
    no: "3",
    label: "住民票",
    value: "発行3ヶ月以内で、家族構成のわかるもの（入学内定後にご提出ください）。",
  },
];

const applicationPoints = [
  {
    en: "PERIOD",
    label: "出願期間",
    main: "令和8年8月22日（土）〜 10月28日（水）",
    note: "令和9年4月生対象。随時募集・随時選考方式です。",
  },
  {
    en: "SCREENING",
    label: "選考・合否通知",
    main: "出願順に随時選考、約1週間で合否通知",
    note: "願書の到着順に審査を行い、合否通知を発送します。",
  },
  {
    en: "FEE",
    label: "出願費用",
    main: "不要",
    note: "出願にあたって費用はいただいておりません。",
  },
  {
    en: "CAPACITY",
    label: "募集定員",
    main: "20名程度",
    note: "定員に達し次第、受付を締め切ります。",
  },
];

const steps = [
  {
    no: "1",
    title: "合格通知（入学手続き案内書）の受け取り",
    desc: "出願からおよそ1週間を目安に、合否の結果を郵送でお知らせします。合格された方には、次の手続きをまとめた入学手続き案内書を同封しています。",
  },
  {
    no: "2",
    title: "入学申込の手続き（入学金の納入）",
    desc: "入学金を納めていただいた時点で、入学申込の手続きが完了となります。納付の目安は合格通知の到着からおおむね2週間程度。定員を満たした場合は、入学金の納付順とさせていただきます。",
  },
  {
    no: "3",
    title: "学費・各種諸経費の納入",
    desc: "学費・入寮費・教育充実費・食堂運営諸経費は、2027年1月中旬頃までのご納付をお願いしています。生活諸経費は2027年3月18日までに4月・5月分をご入金いただき、6月分以降は毎月25日前後の口座引き落としとなります。",
  },
];

export default function BoshuPage() {
  return (
    <>
      <PageHero
        image="/images/DSC_0026-4.jpg"
        en="ADMISSION"
        title="令和9年4月生 一般募集要項"
        lead="馬と共に高校3年間を過ごしたい、あなたへ。応募条件から学費、入学までの流れまで、出願に必要な情報をまとめました。転入学や10月入学をご希望の方も、お気軽にお電話でご相談ください。"
        crumbs={[{ label: "HOME", href: "/" }, { label: "募集要項" }]}
      />

      {/* 教育方針 */}
      <Section className="texture-paper">
        <SectionTitle
          en="EDUCATION POLICY"
          align="center"
          title="バジガクが大切にする、3つの教育方針"
          lead="馬と暮らす3年間で何を学び、どんな人に育ってほしいのか。本校の教育は、この3つの方針を土台としています。"
        />
        <Stagger className="mt-12 grid gap-6 md:grid-cols-3">
          {policies.map((p) => (
            <StaggerItem key={p.no} className="h-full">
              <div className="flex h-full flex-col rounded-3xl bg-white p-8 shadow-soft transition duration-300 hover:-translate-y-1.5 hover:shadow-lift">
                <p className="font-serif text-3xl font-bold text-gold-500">
                  {p.no}
                </p>
                <div className="mt-3 h-[3px] w-10 rule-gold" />
                <h3 className="mt-5 font-serif text-lg font-bold leading-snug text-pine-950">
                  {p.title}
                </h3>
                <p className="mt-4 flex-1 text-[13px] leading-7 text-ink-700">
                  {p.desc}
                </p>
              </div>
            </StaggerItem>
          ))}
        </Stagger>
      </Section>

      {/* 応募条件・必要書類 */}
      <Section className="bg-white">
        <SectionTitle
          en="REQUIREMENTS"
          align="center"
          title="応募条件と必要書類"
          lead="乗馬経験の有無は問いません。馬と真剣に向き合いたい気持ちがあれば、どなたでも挑戦できます。"
        />
        <div className="mt-12 grid gap-10 lg:grid-cols-2">
          <FadeUp>
            <h3 className="flex items-center gap-3 font-serif text-xl font-bold text-pine-950">
              <span className="inline-block h-6 w-1.5 rounded-full bg-gold-500" />
              応募条件
            </h3>
            <div className="mt-5 overflow-x-auto rounded-2xl border border-cream-300 bg-white shadow-soft">
              <table className="w-full min-w-[420px] text-left">
                <tbody>
                  {conditions.map((c, i) => (
                    <tr
                      key={c.label}
                      className={i > 0 ? "border-t border-cream-300" : ""}
                    >
                      <th
                        scope="row"
                        className="w-32 whitespace-nowrap bg-pine-50 px-6 py-5 align-top font-serif text-sm font-bold text-pine-900"
                      >
                        {c.label}
                      </th>
                      <td className="px-6 py-5 text-sm leading-7 text-ink-700">
                        {c.value}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </FadeUp>
          <FadeUp delay={0.1}>
            <h3 className="flex items-center gap-3 font-serif text-xl font-bold text-pine-950">
              <span className="inline-block h-6 w-1.5 rounded-full bg-gold-500" />
              必要書類
            </h3>
            <div className="mt-5 overflow-x-auto rounded-2xl border border-cream-300 bg-white shadow-soft">
              <table className="w-full min-w-[420px] text-left">
                <tbody>
                  {documents.map((d, i) => (
                    <tr
                      key={d.no}
                      className={i > 0 ? "border-t border-cream-300" : ""}
                    >
                      <th
                        scope="row"
                        className="w-52 whitespace-nowrap bg-pine-50 px-6 py-5 align-top font-serif text-sm font-bold text-pine-900"
                      >
                        <span className="mr-2 inline-flex h-6 w-6 items-center justify-center rounded-full bg-pine-800 text-[11px] font-bold text-white">
                          {d.no}
                        </span>
                        {d.label}
                      </th>
                      <td className="px-6 py-5 text-sm leading-7 text-ink-700">
                        {d.value}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            <p className="mt-4 text-xs leading-6 text-ink-500">
              ※ご提出いただいた応募書類は、合否の結果を問わずお返しできません。お預かりした個人情報は厳重に管理いたします。
            </p>
          </FadeUp>
        </div>
      </Section>

      {/* 出願方法・期間 */}
      <Section className="bg-pine-900" id="apply">
        <SectionTitle
          dark
          en="APPLICATION"
          align="center"
          title="出願方法・出願期間"
          lead="令和9年4月生の出願は、届いた順に審査を行う随時選考方式。定員を満たした時点で締め切りとなるため、早めの出願・見学をおすすめします。"
        />
        <Stagger className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {applicationPoints.map((a) => (
            <StaggerItem key={a.en} className="h-full">
              <div className="flex h-full flex-col rounded-2xl bg-white/5 p-6 ring-1 ring-white/10 transition duration-300 hover:-translate-y-1.5 hover:bg-white/10">
                <p className="text-[10px] font-bold tracking-[0.35em] text-gold-400">
                  {a.en}
                </p>
                <p className="mt-2 text-sm font-bold text-white/80">{a.label}</p>
                <p className="mt-3 font-serif text-lg font-bold leading-relaxed text-sun-400">
                  {a.main}
                </p>
                <p className="mt-3 flex-1 text-xs leading-6 text-white/60">
                  {a.note}
                </p>
              </div>
            </StaggerItem>
          ))}
        </Stagger>
        <FadeUp delay={0.15} className="mt-10">
          <div className="rounded-2xl bg-white/5 p-6 ring-1 ring-white/10 md:p-8">
            <div className="flex flex-col gap-5 md:flex-row md:items-center md:justify-between">
              <div>
                <p className="text-[10px] font-bold tracking-[0.35em] text-gold-400">
                  SCHOOL VISIT
                </p>
                <p className="mt-2 font-serif text-lg font-bold text-white">
                  学校見学 開催日
                </p>
                <p className="mt-2 text-xs leading-6 text-white/60">
                  出願前に、キャンパスと馬たちの様子をぜひ一度ご覧ください。
                </p>
              </div>
              <div className="flex flex-wrap gap-3">
                {["8月22日", "9月2日", "10月17日"].map((d) => (
                  <span
                    key={d}
                    className="rounded-full bg-sun-500 px-5 py-2.5 text-sm font-bold text-pine-950"
                  >
                    {d}
                  </span>
                ))}
              </div>
            </div>
            <p className="mt-5 border-t border-white/10 pt-5 text-xs leading-6 text-white/60">
              ※令和8年度中の編入学・転入学は個別相談として柔軟に対応しています。お気軽に
              <a
                href={`tel:${site.tel}`}
                className="mx-1 font-bold tracking-wider text-sun-400 hover:underline"
              >
                {site.tel}
              </a>
              までお電話ください。
            </p>
          </div>
        </FadeUp>
      </Section>

      {/* 学費 */}
      <Section className="texture-paper" id="fees">
        <SectionTitle
          en="TUITION & FEES"
          align="center"
          title="学費の詳細"
          lead="入学金は各コース共通で480,000円（48万円）。授業費はコースにより異なります。納付時期や分割払いのご相談も承っていますので、不安な点は遠慮なくお問い合わせください。"
        />

        <div className="mt-12 grid gap-8 lg:grid-cols-2">
          {/* 一般高校乗馬コース／競走馬厩務員コース */}
          <FadeUp className="h-full">
            <div className="flex h-full flex-col overflow-hidden rounded-3xl bg-white shadow-soft">
              <div className="bg-pine-800 px-7 py-5">
                <p className="text-[10px] font-bold tracking-[0.35em] text-gold-300">
                  COURSE A
                </p>
                <h3 className="mt-1 font-serif text-lg font-bold text-white md:text-xl">
                  一般高校乗馬コース／競走馬厩務員コース
                </h3>
              </div>
              <div className="overflow-x-auto">
                <table className="w-full min-w-[420px] text-left">
                  <tbody>
                    <tr className="border-b border-cream-300">
                      <th
                        scope="row"
                        className="w-44 whitespace-nowrap bg-pine-50 px-6 py-4 font-serif text-sm font-bold text-pine-900"
                      >
                        入学金
                      </th>
                      <td className="px-6 py-4 text-sm text-ink-700">
                        <span className="font-serif text-lg font-bold text-pine-950">
                          480,000円
                        </span>
                        <span className="ml-2 text-xs text-ink-500">
                          （48万円）
                        </span>
                      </td>
                    </tr>
                    <tr className="border-b border-cream-300">
                      <th
                        scope="row"
                        className="whitespace-nowrap bg-pine-50 px-6 py-4 font-serif text-sm font-bold text-pine-900"
                      >
                        授業費（前期）
                      </th>
                      <td className="px-6 py-4 text-sm text-ink-700">
                        <span className="font-serif text-lg font-bold text-pine-950">
                          658,000円
                        </span>
                        <span className="ml-2 text-xs text-ink-500">
                          （1月中旬ごろまで）
                        </span>
                      </td>
                    </tr>
                    <tr className="border-b border-cream-300">
                      <th
                        scope="row"
                        className="whitespace-nowrap bg-pine-50 px-6 py-4 font-serif text-sm font-bold text-pine-900"
                      >
                        授業費（後期）
                      </th>
                      <td className="px-6 py-4 text-sm text-ink-700">
                        <span className="font-serif text-lg font-bold text-pine-950">
                          658,000円
                        </span>
                        <span className="ml-2 text-xs text-ink-500">
                          （7月中旬ごろまで）
                        </span>
                      </td>
                    </tr>
                    <tr>
                      <th
                        scope="row"
                        className="whitespace-nowrap bg-pine-800 px-6 py-4 font-serif text-sm font-bold text-white"
                      >
                        授業費 小計／年
                      </th>
                      <td className="bg-pine-800 px-6 py-4">
                        <span className="font-serif text-xl font-bold text-sun-400">
                          1,316,000円
                        </span>
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
              <div className="flex-1 px-7 py-6">
                <ul className="space-y-2 text-xs leading-6 text-ink-500">
                  <li>
                    ※授業費は銀行振込にてご対応いただきます（前期分は1月中旬ごろ、後期分は7月中旬ごろまで）。
                  </li>
                  <li>
                    ※1年目は一般高校乗馬コースで学び、2年目の10月以降に競走馬厩務員コースへ進むことができます。希望者は高校3年次に、在学したままJRA競馬学校 厩務員課程の受験に挑戦できます。
                  </li>
                </ul>
              </div>
            </div>
          </FadeUp>

          {/* 騎手受験特別コース */}
          <FadeUp delay={0.1} className="h-full">
            <div className="flex h-full flex-col overflow-hidden rounded-3xl bg-white shadow-soft">
              <div className="bg-pine-950 px-7 py-5">
                <div className="flex flex-wrap items-center justify-between gap-3">
                  <div>
                    <p className="text-[10px] font-bold tracking-[0.35em] text-gold-300">
                      COURSE B
                    </p>
                    <h3 className="mt-1 font-serif text-lg font-bold text-white md:text-xl">
                      騎手受験特別コース
                    </h3>
                  </div>
                  <span className="rounded-full bg-sun-500 px-4 py-1.5 text-[11px] font-bold text-pine-950">
                    合格保証つき
                  </span>
                </div>
              </div>
              <div className="overflow-x-auto">
                <table className="w-full min-w-[420px] text-left">
                  <tbody>
                    <tr className="border-b border-cream-300">
                      <th
                        scope="row"
                        className="w-44 whitespace-nowrap bg-pine-50 px-6 py-4 font-serif text-sm font-bold text-pine-900"
                      >
                        入学金
                      </th>
                      <td className="px-6 py-4 text-sm text-ink-700">
                        <span className="font-serif text-lg font-bold text-pine-950">
                          480,000円
                        </span>
                        <span className="ml-2 text-xs text-ink-500">
                          （48万円）
                        </span>
                      </td>
                    </tr>
                    <tr className="border-b border-cream-300">
                      <th
                        scope="row"
                        className="whitespace-nowrap bg-pine-50 px-6 py-4 font-serif text-sm font-bold text-pine-900"
                      >
                        授業費（全期）
                      </th>
                      <td className="px-6 py-4">
                        <span className="font-serif text-lg font-bold text-pine-950">
                          1,690,000円
                        </span>
                      </td>
                    </tr>
                    <tr>
                      <th
                        scope="row"
                        className="whitespace-nowrap bg-pine-800 px-6 py-4 font-serif text-sm font-bold text-white"
                      >
                        授業費 小計／年
                      </th>
                      <td className="bg-pine-800 px-6 py-4">
                        <span className="font-serif text-xl font-bold text-sun-400">
                          1,690,000円
                        </span>
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
              <div className="flex-1 px-7 py-6">
                <div className="rounded-2xl border border-gold-500/40 bg-cream-100 p-5">
                  <p className="text-[10px] font-bold tracking-[0.3em] text-gold-600">
                    GUARANTEE
                  </p>
                  <p className="mt-2 font-serif text-sm font-bold text-pine-950">
                    騎手課程受験 合格保証制度
                  </p>
                  <p className="mt-2 text-xs leading-6 text-ink-700">
                    1年目の8月にJRA競馬学校、1月に地方競馬教養センターの騎手課程を受験できます。万が一いずれも不合格となり、2年目以降も本校で学びを続ける場合は、1年目の授業費1,690,000円を全額返金いたします。
                  </p>
                </div>
              </div>
            </div>
          </FadeUp>
        </div>

        <FadeUp delay={0.15} className="mt-8">
          <div className="rounded-2xl border border-cream-300 bg-white p-6 shadow-soft md:p-8">
            <ul className="space-y-2 text-xs leading-6 text-ink-700 md:text-[13px] md:leading-7">
              <li>
                ※上記とは別途、連携する通信制高校への学費等（3年間あたり約120万円）が必要となります。
              </li>
              <li>
                ※入学金（入学申込金）の納付期限は、合格通知の発送から約2週間です。
              </li>
              <li>
                ※授業費は分割払いでのご契約にも対応しています（本校独自の保証会社による審査があります）。ご希望の方はお気軽にご相談ください。
              </li>
            </ul>
          </div>
        </FadeUp>
      </Section>

      {/* 入学手続きまでの流れ */}
      <Section className="bg-white">
        <SectionTitle
          en="PROCESS"
          align="center"
          title="入学手続きまでの流れ"
          lead="出願から入学まで、手続きは大きく3つのステップ。わからないことがあれば、その都度お電話でサポートします。"
        />
        <div className="mx-auto mt-12 max-w-3xl">
          <Stagger className="relative space-y-8">
            <div
              aria-hidden
              className="absolute bottom-6 left-6 top-6 w-px bg-cream-300 md:left-7"
            />
            {steps.map((s) => (
              <StaggerItem key={s.no} className="relative">
                <div className="flex gap-5 md:gap-7">
                  <div className="relative z-10 flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-pine-800 font-serif text-lg font-bold text-sun-400 shadow-soft md:h-14 md:w-14 md:text-xl">
                    {s.no}
                  </div>
                  <div className="flex-1 rounded-2xl border border-cream-300 bg-cream-100 p-6 transition duration-300 hover:-translate-y-1 hover:shadow-lift md:p-7">
                    <h3 className="font-serif text-base font-bold text-pine-950 md:text-lg">
                      {s.title}
                    </h3>
                    <p className="mt-3 text-[13px] leading-7 text-ink-700">
                      {s.desc}
                    </p>
                  </div>
                </div>
              </StaggerItem>
            ))}
          </Stagger>
          <FadeUp delay={0.2}>
            <p className="mt-8 text-xs leading-6 text-ink-500">
              ※騎手受験特別コースを除き、後期授業費は7月中旬、前期授業費は1月中旬までのご納付をお願いしています。
            </p>
          </FadeUp>
        </div>
      </Section>

      <CTABand />
    </>
  );
}
