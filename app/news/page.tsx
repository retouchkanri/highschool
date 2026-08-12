import type { Metadata } from "next";
import { Section, SectionTitle } from "@/components/Section";
import { Stagger, StaggerItem } from "@/components/motion";
import PageHero from "@/components/PageHero";
import CTABand from "@/components/CTABand";
import { getSupabasePublicClient, type Post } from "@/lib/supabase";

export const metadata: Metadata = {
  title: "お知らせ・ニュース",
  description:
    "東関東馬事高等学院（バジガク）からのお知らせ・ニュース一覧です。募集要項の更新や学校からの重要なお知らせをご覧いただけます。",
};

// Re-fetch posts from Supabase periodically so admin edits show up without a rebuild.
export const revalidate = 60;

async function getPosts(): Promise<Post[]> {
  try {
    const supabase = getSupabasePublicClient();
    if (!supabase) return [];
    const { data, error } = await supabase
      .from("posts")
      .select("*")
      .eq("is_published", true)
      .order("published_at", { ascending: false });
    if (error || !data) return [];
    return data as Post[];
  } catch {
    return [];
  }
}

function formatDate(iso: string): string {
  const d = new Date(iso);
  if (Number.isNaN(d.getTime())) return iso;
  return `${d.getFullYear()}.${String(d.getMonth() + 1).padStart(2, "0")}.${String(
    d.getDate()
  ).padStart(2, "0")}`;
}

export default async function NewsPage() {
  const posts = await getPosts();

  return (
    <>
      <PageHero
        image="/images/DSC_0028.jpg"
        en="NEWS"
        title="お知らせ・ニュース"
        lead="東関東馬事高等学院からの最新のお知らせ・ニュースをお届けします。"
        crumbs={[{ label: "HOME", href: "/" }, { label: "お知らせ・ニュース" }]}
      />

      <Section className="texture-paper">
        <SectionTitle en="NEWS & ANNOUNCEMENTS" align="center" title="お知らせ一覧" />

        {posts.length === 0 ? (
          <div className="mx-auto mt-12 max-w-2xl border border-cream-300 bg-white p-10 text-center shadow-soft">
            <p className="text-sm leading-7 text-ink-700">
              現在、公開中のお知らせはありません。
            </p>
          </div>
        ) : (
          <Stagger className="mx-auto mt-12 max-w-4xl space-y-3">
            {posts.map((p) => (
              <StaggerItem key={p.id}>
                <article className="flex flex-col gap-2 border border-cream-300 bg-white px-6 py-5 shadow-soft md:flex-row md:items-start md:gap-6">
                  <time className="shrink-0 text-xs font-bold tracking-wider text-ink-500 md:pt-0.5">
                    {formatDate(p.published_at)}
                  </time>
                  <span
                    className={`w-fit shrink-0 rounded-full px-3 py-1 text-[10px] font-bold ${
                      p.type === "announcement"
                        ? "bg-gold-100 text-gold-700"
                        : "bg-pine-50 text-pine-700"
                    }`}
                  >
                    {p.type === "announcement" ? "お知らせ" : "ニュース"}
                  </span>
                  <div className="flex-1">
                    <h3 className="text-sm font-bold leading-6 text-ink-900 md:text-[15px]">
                      {p.title}
                    </h3>
                    <p className="mt-2 whitespace-pre-line text-[13px] leading-7 text-ink-700">
                      {p.body}
                    </p>
                  </div>
                </article>
              </StaggerItem>
            ))}
          </Stagger>
        )}
      </Section>

      <CTABand />
    </>
  );
}
