import type { Metadata } from "next";
import Link from "next/link";
import { PageHeader } from "@/components/sections/PageHeader";
import { FinalCTA } from "@/components/sections/FinalCTA";
import { Reveal } from "@/components/motion/Reveal";
import { blogPosts } from "@/lib/blog-data";

export const metadata: Metadata = {
  title: "Blog | Trivestack",
  description:
    "Practical, no-fluff guides on brand identity, website design, product design, AI, digital marketing, lead generation, and social media growth.",
};

function formatDate(iso: string) {
  return new Date(iso).toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });
}

export default function BlogPage() {
  return (
    <>
      <PageHeader
        label="Blog"
        title="Ideas worth building on."
        description="Practical guides on brand, product, AI, and growth, written for people running a real business, not chasing buzzwords."
      />

      <section className="bg-black py-20">
        <div className="mx-auto max-w-[1280px] px-6 lg:px-12">
          <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
            {blogPosts.map((post, i) => (
              <Reveal key={post.slug} delay={i * 0.04}>
                <Link
                  href={`/blog/${post.slug}`}
                  className="glow-hover relative flex h-full flex-col overflow-hidden rounded-[16px] border border-border-subtle bg-card p-7"
                >
                  <span className="absolute inset-y-0 left-0 w-[3px] bg-teal" />
                  <span className="text-[11px] font-semibold uppercase tracking-[2px] text-teal">
                    {post.category}
                  </span>
                  <h2 className="mt-3 font-display text-xl font-bold text-white">
                    {post.title}
                  </h2>
                  <p className="mt-3 flex-1 text-[14px] leading-[1.75] text-gray-2">
                    {post.dek}
                  </p>
                  <div className="mt-6 flex items-center gap-3 text-xs text-gray-2">
                    <span>{formatDate(post.publishDate)}</span>
                    <span>&middot;</span>
                    <span>{post.readTime}</span>
                  </div>
                </Link>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <FinalCTA />
    </>
  );
}
