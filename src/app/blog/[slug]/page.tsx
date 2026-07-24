import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { PageHeader } from "@/components/sections/PageHeader";
import { Reveal } from "@/components/motion/Reveal";
import { SectionLabel } from "@/components/primitives/SectionLabel";
import { Button } from "@/components/primitives/Button";
import { FAQAccordion } from "@/components/composite/FAQAccordion";
import { TableOfContents } from "@/components/composite/TableOfContents";
import { BlogPostBody } from "@/components/composite/BlogPostBody";
import { blogPosts } from "@/lib/blog-data";

export function generateStaticParams() {
  return blogPosts.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const post = blogPosts.find((p) => p.slug === slug);
  if (!post) return {};
  return {
    title: post.seoTitle,
    description: post.metaDescription,
    keywords: [post.focusKeyword],
  };
}

function formatDate(iso: string) {
  return new Date(iso).toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });
}

export default async function BlogPostPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const post = blogPosts.find((p) => p.slug === slug);
  if (!post) notFound();

  return (
    <>
      <PageHeader label={post.category} title={post.title} description={post.dek} />

      <section className="border-b border-border-subtle bg-black pb-4">
        <div className="mx-auto max-w-[700px] px-6 lg:px-0">
          <div className="flex items-center gap-3 text-xs text-gray-2">
            <span>{formatDate(post.publishDate)}</span>
            <span>&middot;</span>
            <span>{post.readTime}</span>
          </div>
        </div>
      </section>

      <section className="border-b border-border-subtle bg-black py-16">
        <div className="mx-auto max-w-[700px] px-6 lg:px-0">
          <Reveal>
            <div className="flex flex-col gap-5">
              {post.intro.map((paragraph, i) => (
                <p key={i} className="text-[16px] leading-[1.9] text-gray">
                  {paragraph}
                </p>
              ))}
            </div>
          </Reveal>

          <div className="mt-10">
            <Reveal>
              <TableOfContents blocks={post.body} />
            </Reveal>
          </div>

          <div className="mt-10">
            <BlogPostBody blocks={post.body} />
          </div>

          <Reveal delay={0.1}>
            <div className="mt-10 rounded-[16px] border border-teal/30 bg-teal/[0.06] p-7">
              <SectionLabel>Key Takeaways</SectionLabel>
              <ul className="mt-3 flex flex-col gap-2.5">
                {post.keyTakeaways.map((item, i) => (
                  <li key={i} className="flex items-start gap-3 text-[14.5px] leading-[1.8] text-white">
                    <span className="mt-0.5 flex-shrink-0 text-teal">&#10003;</span>
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </Reveal>

          <div className="mt-14">
            <Reveal>
              <SectionLabel>Frequently Asked Questions</SectionLabel>
            </Reveal>
            <div className="mt-4">
              <FAQAccordion items={post.faq} />
            </div>
          </div>

          <Reveal delay={0.1}>
            <div className="mt-10 flex flex-col gap-4">
              {post.conclusion.map((paragraph, i) => (
                <p key={i} className="text-[15.5px] leading-[1.9] text-gray">
                  {paragraph}
                </p>
              ))}
            </div>
          </Reveal>
        </div>
      </section>

      <section className="bg-black py-20 text-center">
        <div className="mx-auto max-w-[560px] px-6">
          <Reveal>
            <h2 className="font-display text-2xl font-extrabold text-white lg:text-3xl">
              Ready to put this into practice?
            </h2>
            <p className="mt-4 text-[15px] leading-[1.8] text-gray-2">
              We help businesses turn ideas like these into real, measurable work.
            </p>
            <div className="mt-8">
              <Button
                href={
                  post.ctaService
                    ? `/start-a-project?service=${post.ctaService}`
                    : "/start-a-project"
                }
                variant="primary"
              >
                Start a Project
              </Button>
            </div>
          </Reveal>
        </div>
      </section>
    </>
  );
}
