import type { Metadata } from "next";
import { Section, SectionTitle } from "@/components/Section";
import { FadeUp } from "@/components/motion";
import PageHero from "@/components/PageHero";
import CTABand from "@/components/CTABand";
import ContactForm from "@/components/contact/ContactForm";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: {
    absolute: "お問い合わせ｜入学・学校見学・学費のご相談｜東関東馬事高等学院",
  },
  description:
    "馬の高校・東関東馬事高等学院へのお問い合わせはこちらから。入学・転入学、学校見学、学費・奨学金、寮生活など、気になることをお気軽にご相談ください。24時間受付、担当者より折り返しご連絡いたします。",
  keywords: [
    "馬の高校 お問い合わせ",
    "東関東馬事高等学院 お問い合わせ",
    "バジガク お問い合わせ",
    "馬の学校 相談",
    "入学相談",
    "学校見学",
    "転入学",
  ],
};

export default function ContactPage() {
  return (
    <>
      <PageHero
        image="/images/DSC_0028.jpg"
        en="CONTACT"
        title="お問い合わせ"
        lead="入学・転入学、学校見学、学費のことなど、お気軽にお問い合わせください。担当者より折り返しご連絡いたします。"
        crumbs={[{ label: "HOME", href: "/" }, { label: "お問い合わせ" }]}
      />

      <Section className="texture-paper">
        <div className="grid gap-12 lg:grid-cols-[1fr_1.3fr] lg:gap-16">
          <div>
            <SectionTitle
              en="GET IN TOUCH"
              title="お問い合わせフォーム"
              lead="24時間受付。内容を確認のうえ、スタッフより折り返しご連絡します。お急ぎの場合はお電話にてご連絡ください。"
            />
            <dl className="mt-8 divide-y divide-cream-200 border border-cream-300 bg-cream-50 shadow-soft">
              <div className="flex gap-6 px-6 py-4">
                <dt className="w-20 shrink-0 text-xs font-bold tracking-[0.2em] text-pine-800">
                  TEL
                </dt>
                <dd className="text-sm leading-7 text-ink-700">
                  <a
                    href={`tel:${site.tel}`}
                    className="font-bold tracking-wider text-pine-800 transition hover:text-gold-600"
                  >
                    {site.tel}
                  </a>
                </dd>
              </div>
              <div className="flex gap-6 px-6 py-4">
                <dt className="w-20 shrink-0 text-xs font-bold tracking-[0.2em] text-pine-800">
                  FAX
                </dt>
                <dd className="text-sm leading-7 text-ink-700">{site.fax}</dd>
              </div>
              <div className="flex gap-6 px-6 py-4">
                <dt className="w-20 shrink-0 text-xs font-bold tracking-[0.2em] text-pine-800">
                  所在地
                </dt>
                <dd className="text-sm leading-7 text-ink-700">{site.address}</dd>
              </div>
            </dl>
          </div>

          <FadeUp delay={0.1}>
            <ContactForm />
          </FadeUp>
        </div>
      </Section>

      <CTABand />
    </>
  );
}
