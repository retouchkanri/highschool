import type { Metadata } from "next";
import type { ReactNode } from "react";
import Link from "next/link";
import PageHero from "@/components/PageHero";
import { Section, SectionTitle } from "@/components/Section";
import { FadeUp, Stagger, StaggerItem } from "@/components/motion";
import CTABand from "@/components/CTABand";
import Accordion from "@/components/Accordion";
import { faqs } from "@/lib/faq";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: "募集要項",
  description:
    "東関東馬事高等学院（バジガク）の令和9年4月生 一般募集要項。資料請求から入学までの6ステップ、応募資格・必要書類・出願期間（令和8年8月22日〜10月28日）、学費の詳細と分納などの学費サポート、よくある質問までをまとめてご案内します。出願費用は不要、随時選考で約1週間で合否をお知らせします。",
};

/* ── 入学までの流れ（6ステップ） ───────────────────── */
const flowSteps: {
  no: string;
  title: string;
  desc: string;
  link: { label: string; href: string; external?: boolean };
}[] = [
  {
    no: "01",
    title: "資料請求",
    desc: "学校案内・募集要項の冊子を無料でお届けします。写真やデータを眺めながら、バジガクでの3年間を思い描いてみてください。",
    link: { label: "資料請求フォームへ", href: site.forms.shiryo, external: true },
  },
  {
    no: "02",
    title: "学校見学・オープンキャンパス",
    desc: "校舎・厩舎・学生寮と、馬たちの暮らしをその目で確かめていただきます。JR東京駅からの無料送迎つき、完全予約制です。",
    link: { label: "学校見学の詳細へ", href: "/opencampus" },
  },
  {
    no: "03",
    title: "出願",
    desc: "入校申込書（願書）を郵送、またはWebの出願フォームからご提出ください。出願にあたって費用は一切かかりません。",
    link: { label: "募集要項を確認する", href: "#boshu" },
  },
  {
    no: "04",
    title: "選考（書類・面談）",
    desc: "願書の到着順に随時選考します。学力試験はありません。書類の内容と、見学・面談での意欲を大切に拝見します。",
    link: { label: "選考方法を確認する", href: "#boshu" },
  },
  {
    no: "05",
    title: "合格通知（約1週間）",
    desc: "出願からおよそ1週間を目安に、合否の結果を郵送でお知らせします。合格された方には入学手続き案内書を同封します。",
    link: { label: "合格後の手続きへ", href: "#tetsuzuki" },
  },
  {
    no: "06",
    title: "入学手続き",
    desc: "入学金を納めていただいた時点でお申し込みが確定します。学費等の納付を済ませ、4月の入学式で馬たちが待っています。",
    link: { label: "手続きの詳細へ", href: "#tetsuzuki" },
  },
];

/* ── 募集要項（定義テーブル） ─────────────────────── */
const boshuRows: { label: string; value: ReactNode }[] = [
  {
    label: "募集対象",
    value:
      "令和9年4月に入学される新入生。一般高校乗馬コースまたは騎手受験特別コースを入学時に選択します（競走馬厩務員コースは2年次10月以降の選択となります）。",
  },
  {
    label: "募集人数",
    value: "20名程度（定員に達し次第、受付を締め切ります）。",
  },
  {
    label: "出願資格",
    value: (
      <ul className="list-disc space-y-1.5 pl-5">
        <li>本校入学時点で中学卒業以上、18歳以下の方。</li>
        <li>騎乗や馬の管理を行ううえで支障のない健康状態であること。</li>
        <li>
          体重は、騎手受験特別コースを希望される場合のみ45kg以下。その他のコースは65kg以下。
        </li>
      </ul>
    ),
  },
  {
    label: "出願期間",
    value: "令和8年8月22日（土）〜 10月28日（水）",
  },
  {
    label: "選考方法",
    value:
      "出願順に随時選考します。学力試験は行わず、書類の内容と見学・面談での様子を総合的に評価します。",
  },
  {
    label: "合否通知",
    value: "出願からおよそ1週間を目安に、郵送でお知らせします。",
  },
  {
    label: "出願費用",
    value: "不要（受験料・選考料はいただいておりません）。",
  },
  {
    label: "必要書類",
    value: (
      <ul className="list-disc space-y-1.5 pl-5">
        <li>入校申込書（様式1）── Webの出願フォームからの提出も可能です。</li>
        <li>健康診断書（様式2）── 入学内定後のご提出で構いません。</li>
        <li>
          住民票 ── 発行3ヶ月以内・家族構成のわかるもの。入学内定後にご提出ください。
        </li>
      </ul>
    ),
  },
  {
    label: "出願の前提",
    value:
      "体験入学または学校見学へのご参加が出願の前提となります。まずは資料請求のうえ、お気軽にお越しください。",
  },
];

/* ── 合格後の入学手続き（3ステップ） ─────────────── */
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

/* ── 奨学金・学費サポート ─────────────────────────── */
const supports = [
  {
    en: "INSTALLMENT",
    title: "分納・分割払い制度",
    desc: "授業費は分割払いでのご契約にも対応しています。本校が独自に連携する保証会社の審査を経てご利用いただく制度で、本校へ直接分割で納付いただくものとは異なります。まとまった納付がむずかしい場合も、あきらめる前にご相談ください。",
  },
  {
    en: "FLEXIBLE",
    title: "納付時期の柔軟なご相談",
    desc: "教育ローンの審査待ちなど、ご事情により納付が期限に間に合わない場合は、事前にご連絡いただければ納付期限の調整など柔軟に対応いたします。まずは事務局までお気軽にお声がけください。",
  },
  {
    en: "RELIEF",
    title: "災害等による学費のご相談・救済措置",
    desc: "災害などの影響で家計が急変した場合には、学費に関するご相談や救済措置を個別に検討しています。ご家庭の状況をうかがいながら、学びを続けられる道を一緒に探します。",
  },
  {
    en: "SUBSIDY",
    title: "高等学校等就学支援金",
    desc: "連携する広域通信制・明蓬館高等学校の学費部分については、高等学校等就学支援金の制度対象となる場合があります。対象条件や手続きの詳細は、事務局とお住まいの自治体にご確認ください。",
  },
];

/* ── よくある質問（出願・学費・転入学） ───────────── */
const faqPicks = [
  "誰でも入学できますか？入学の条件はありますか？",
  "乗馬の未経験者でも合格できますか？",
  "中学校の成績が良くないのですが、合否に影響しますか？",
  "いま通っている高校から転入学（転校）はできますか？",
  "願書の提出時期と合格発表のタイミングを教えてください。",
  "合格通知が届いた後の流れを教えてください。",
  "納付金の入金が遅れてしまった場合はどうなりますか？",
];

const boshuFaqs = faqPicks.flatMap((q) => {
  const hit = faqs.find((f) => f.q === q);
  return hit ? [{ q: hit.q, a: hit.a }] : [];
});

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

      {/* 入学までの流れ */}
      <Section className="texture-paper" id="flow">
        <SectionTitle
          en="ROAD TO BAJIGAKU"
          align="center"
          title="入学までの流れ"
          lead="資料請求から入学まで、大きく6つのステップ。本校では、体験入学または学校見学へのご参加が出願の前提となっています。まずは一度、馬たちに会いに来てください。"
        />
        <Stagger className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {flowSteps.map((s) => (
            <StaggerItem key={s.no} className="h-full">
              <div className="flex h-full flex-col bg-white p-7 shadow-soft transition duration-300 hover:-translate-y-1.5 hover:shadow-lift">
                <div className="flex items-baseline gap-3">
                  <p className="font-serif text-3xl font-bold text-gold-500">
                    {s.no}
                  </p>
                  <p className="text-[10px] font-bold tracking-[0.3em] text-ink-500">
                    STEP
                  </p>
                </div>
                <div className="mt-3 h-[3px] w-10 rule-gold" />
                <h3 className="mt-5 font-serif text-lg font-bold leading-snug text-pine-950">
                  {s.title}
                </h3>
                <p className="mt-4 flex-1 text-[13px] leading-7 text-ink-700">
                  {s.desc}
                </p>
                <div className="mt-5">
                  {s.link.external ? (
                    <a
                      href={s.link.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 text-xs font-bold text-pine-700 transition hover:text-gold-600"
                    >
                      {s.link.label}
                      <span aria-hidden>→</span>
                    </a>
                  ) : s.link.href.startsWith("#") ? (
                    <a
                      href={s.link.href}
                      className="inline-flex items-center gap-2 text-xs font-bold text-pine-700 transition hover:text-gold-600"
                    >
                      {s.link.label}
                      <span aria-hidden>→</span>
                    </a>
                  ) : (
                    <Link
                      href={s.link.href}
                      className="inline-flex items-center gap-2 text-xs font-bold text-pine-700 transition hover:text-gold-600"
                    >
                      {s.link.label}
                      <span aria-hidden>→</span>
                    </Link>
                  )}
                </div>
              </div>
            </StaggerItem>
          ))}
        </Stagger>
        <FadeUp delay={0.15} className="mt-8">
          <div className="border border-gold-500/40 bg-white p-6 shadow-soft md:p-7">
            <p className="text-[10px] font-bold tracking-[0.3em] text-gold-600">
              IMPORTANT
            </p>
            <p className="mt-2 text-[13px] leading-7 text-ink-700">
              出願には、体験入学または学校見学へのご参加が前提となります。実際の環境と馬たちを知ったうえで進路を決めていただきたい、という本校の想いによるものです。日程が合わない場合は、個別見学のご相談も承ります。
            </p>
          </div>
        </FadeUp>
      </Section>

      {/* 募集要項 */}
      <Section className="bg-white" id="boshu">
        <SectionTitle
          en="APPLICATION GUIDELINES"
          align="center"
          title="令和9年4月生 募集要項"
          lead="乗馬経験の有無は問いません。願書の到着順に審査を行う随時選考方式のため、定員を満たした時点で受付終了となります。早めの見学・出願をおすすめします。"
        />
        <FadeUp className="mx-auto mt-12 max-w-4xl">
          <div className="overflow-x-auto border border-cream-300 bg-white shadow-soft">
            <table className="w-full min-w-[560px] text-left">
              <tbody>
                {boshuRows.map((r, i) => (
                  <tr
                    key={r.label}
                    className={i > 0 ? "border-t border-cream-300" : ""}
                  >
                    <th
                      scope="row"
                      className="w-36 whitespace-nowrap bg-pine-50 px-6 py-5 align-top font-serif text-sm font-bold text-pine-900"
                    >
                      {r.label}
                    </th>
                    <td className="px-6 py-5 text-sm leading-7 text-ink-700">
                      {r.value}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p className="mt-4 text-xs leading-6 text-ink-500">
            ※ご提出いただいた応募書類は、合否の結果を問わずお返しできません。お預かりした個人情報は厳重に管理いたします。
            <br />
            ※出願期間・選考方法は変更となる場合があります。最新の情報は資料請求またはお電話でご確認ください。
          </p>
        </FadeUp>

        {/* 学校見学 開催日 */}
        <FadeUp delay={0.1} className="mx-auto mt-10 max-w-4xl">
          <div className="bg-pine-900 p-6 md:p-8">
            <div className="flex flex-col gap-5 md:flex-row md:items-center md:justify-between">
              <div>
                <p className="text-[10px] font-bold tracking-[0.35em] text-gold-400">
                  SCHOOL VISIT
                </p>
                <p className="mt-2 font-serif text-lg font-bold text-white">
                  学校見学 開催日
                </p>
                <p className="mt-2 text-xs leading-6 text-white/60">
                  完全予約制。JR東京駅からの無料送迎つきで、キャンパスと馬たちの日常をご覧いただけます。
                </p>
              </div>
              <div className="flex flex-wrap items-center gap-3">
                {["8月22日", "9月2日", "10月17日"].map((d) => (
                  <span
                    key={d}
                    className="rounded-full bg-sun-500 px-5 py-2.5 text-sm font-bold text-pine-950"
                  >
                    {d}
                  </span>
                ))}
                <Link
                  href="/opencampus"
                  className="rounded-full border-2 border-white/40 px-5 py-2 text-sm font-bold text-white transition hover:border-sun-400 hover:text-sun-400"
                >
                  詳細を見る
                </Link>
              </div>
            </div>
            <p className="mt-5 border-t border-white/10 pt-5 text-xs leading-6 text-white/60">
              ※開催日は令和8年度の公表日です。※令和8年度中の編入学・転入学は個別相談として柔軟に対応しています。お気軽に
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
      <Section className="texture-paper" id="gakuhi">
        <SectionTitle
          en="TUITION & FEES"
          align="center"
          title="学費の詳細"
          lead="入学金は各コース共通で480,000円（48万円）。授業費はコースにより異なり、別途、連携する通信制高校の学費と寮生活の諸経費が必要です。納付時期や分割払いのご相談も承っていますので、不安な点は遠慮なくお問い合わせください。"
        />

        <div className="mt-12 grid gap-8 lg:grid-cols-2">
          {/* 一般高校乗馬コース／競走馬厩務員コース */}
          <FadeUp className="h-full">
            <div className="flex h-full flex-col overflow-hidden bg-white shadow-soft">
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
            <div className="flex h-full flex-col overflow-hidden bg-white shadow-soft">
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
                <div className="border border-gold-500/40 bg-cream-100 p-5">
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
          <div className="border border-cream-300 bg-white p-6 shadow-soft md:p-8">
            <ul className="space-y-2 text-xs leading-6 text-ink-700 md:text-[13px] md:leading-7">
              <li>
                ※上記とは別途、連携する通信制高校への学費等（3年間あたり約120万円）が必要となります。
              </li>
              <li>
                ※入寮費・教育充実費・食堂運営諸経費・生活諸経費など、寮生活にかかる費用も別途必要です。納付時期は下記「合格後の入学手続き」をご覧ください。
              </li>
              <li>
                ※入学金（入学申込金）の納付期限は、合格通知の発送から約2週間です。
              </li>
              <li>
                ※授業費は分割払いでのご契約にも対応しています（本校が独自に連携する保証会社との契約によるもので、審査があります。本校への直接の分割納付とは異なります）。ご希望の方はお気軽にご相談ください。
              </li>
            </ul>
          </div>
        </FadeUp>
      </Section>

      {/* 合格後の入学手続き */}
      <Section className="bg-white" id="tetsuzuki">
        <SectionTitle
          en="AFTER PASSING"
          align="center"
          title="合格後の入学手続き"
          lead="合格通知を受け取ってから入学までの手続きは、大きく3つのステップ。わからないことがあれば、その都度お電話でサポートします。"
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
                  <div className="flex-1 border border-cream-300 bg-cream-100 p-6 transition duration-300 hover:-translate-y-1 hover:shadow-lift md:p-7">
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
              ※騎手受験特別コースを除き、前期授業費は1月中旬、後期授業費は7月中旬までのご納付をお願いしています。※納付時期・金額は変更となる場合があります。詳細は合格通知に同封する入学手続き案内書でご確認ください。
            </p>
          </FadeUp>
        </div>
      </Section>

      {/* 奨学金・学費サポート */}
      <Section className="bg-pine-900" id="support">
        <SectionTitle
          dark
          en="FINANCIAL SUPPORT"
          align="center"
          title="奨学金・学費サポート"
          lead="「学費のことが気がかりで、一歩を踏み出せない」──そんなご家庭の声に、本校は制度とご相談の両面でお応えしています。まずは事情をお聞かせください。"
        />
        <Stagger className="mt-12 grid gap-5 sm:grid-cols-2">
          {supports.map((s) => (
            <StaggerItem key={s.en} className="h-full">
              <div className="flex h-full flex-col bg-white/5 p-7 ring-1 ring-white/10 transition duration-300 hover:-translate-y-1.5 hover:bg-white/10">
                <p className="text-[10px] font-bold tracking-[0.35em] text-gold-400">
                  {s.en}
                </p>
                <h3 className="mt-3 font-serif text-lg font-bold leading-snug text-white">
                  {s.title}
                </h3>
                <div className="mt-4 h-[3px] w-10 rule-gold" />
                <p className="mt-4 flex-1 text-[13px] leading-7 text-white/70">
                  {s.desc}
                </p>
              </div>
            </StaggerItem>
          ))}
        </Stagger>
        <FadeUp delay={0.15} className="mt-8">
          <p className="text-xs leading-6 text-white/60">
            ※各制度の内容・対象条件は変更となる場合があります。高等学校等就学支援金の対象範囲や申請方法など、最新の情報は本校事務局（
            <a
              href={`tel:${site.tel}`}
              className="mx-1 font-bold tracking-wider text-sun-400 hover:underline"
            >
              {site.tel}
            </a>
            ）およびお住まいの自治体にご確認ください。
          </p>
        </FadeUp>
      </Section>

      {/* よくある質問 */}
      <Section className="bg-white" id="faq">
        <SectionTitle
          en="FAQ"
          align="center"
          title="出願・学費のよくある質問"
          lead="出願を考えはじめたご家庭からよく寄せられる質問をまとめました。ここにない疑問は、Q&Aページやお電話でお気軽にどうぞ。"
        />
        <FadeUp className="mx-auto mt-12 max-w-3xl">
          <Accordion items={boshuFaqs} />
        </FadeUp>
        <FadeUp delay={0.1} className="mt-10 text-center">
          <Link
            href="/qa"
            className="inline-flex items-center gap-2 rounded-full border-2 border-pine-800 px-8 py-3.5 text-sm font-bold text-pine-800 transition hover:bg-pine-800 hover:text-white"
          >
            よくある質問をすべて見る
            <span aria-hidden>→</span>
          </Link>
        </FadeUp>
      </Section>

      {/* ダウンロード・資料 */}
      <Section className="texture-paper" id="download">
        <SectionTitle
          en="DOCUMENTS"
          align="center"
          title="募集要項・願書のご請求"
          lead="出願に必要な書類一式は、資料請求フォームから無料でお取り寄せいただけます。冊子を手に取って、ご家族でゆっくりご検討ください。"
        />
        <Stagger className="mx-auto mt-12 grid max-w-4xl gap-6 md:grid-cols-2">
          <StaggerItem className="h-full">
            <div className="flex h-full flex-col bg-white p-8 shadow-soft transition duration-300 hover:-translate-y-1.5 hover:shadow-lift">
              <p className="text-[10px] font-bold tracking-[0.35em] text-gold-600">
                BROCHURE
              </p>
              <h3 className="mt-3 font-serif text-xl font-bold text-pine-950">
                募集要項・学校案内（冊子）
              </h3>
              <div className="mt-4 h-[3px] w-10 rule-gold" />
              <p className="mt-5 flex-1 text-[13px] leading-7 text-ink-700">
                コース紹介・学費・寮生活・進路実績など、本校の3年間がひと目でわかる冊子です。資料請求フォームからお申し込みいただくと、無料で郵送いたします。
              </p>
              <a
                href={site.forms.shiryo}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-7 inline-flex items-center justify-center gap-2 rounded-full bg-pine-800 px-8 py-3.5 text-sm font-bold text-white transition hover:bg-pine-700"
              >
                資料請求フォームへ
                <span aria-hidden>→</span>
              </a>
            </div>
          </StaggerItem>
          <StaggerItem className="h-full">
            <div className="flex h-full flex-col bg-white p-8 shadow-soft transition duration-300 hover:-translate-y-1.5 hover:shadow-lift">
              <p className="text-[10px] font-bold tracking-[0.35em] text-gold-600">
                APPLICATION FORM
              </p>
              <h3 className="mt-3 font-serif text-xl font-bold text-pine-950">
                願書（入校申込書）
              </h3>
              <div className="mt-4 h-[3px] w-10 rule-gold" />
              <p className="mt-5 flex-1 text-[13px] leading-7 text-ink-700">
                願書は学校案内の冊子に同封してお届けしています。まだお手元にない方は、資料請求フォームからご請求ください。なお、出願はWebの出願フォームからのご提出も可能です。
              </p>
              <a
                href={site.forms.shiryo}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-7 inline-flex items-center justify-center gap-2 rounded-full border-2 border-pine-800 px-8 py-3 text-sm font-bold text-pine-800 transition hover:bg-pine-800 hover:text-white"
              >
                願書を請求する（資料請求）
                <span aria-hidden>→</span>
              </a>
            </div>
          </StaggerItem>
        </Stagger>
        <FadeUp delay={0.15} className="mx-auto mt-8 max-w-4xl">
          <p className="text-xs leading-6 text-ink-500">
            ※資料はすべて無料です。※Web出願をご希望の方や、書類の記入についてご不明な点がある方は、事務局（
            <a
              href={`tel:${site.tel}`}
              className="mx-1 font-bold tracking-wider text-pine-800 hover:underline"
            >
              {site.tel}
            </a>
            ）までお気軽にお問い合わせください。
          </p>
        </FadeUp>
      </Section>

      <CTABand />
    </>
  );
}
