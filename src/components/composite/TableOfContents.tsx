import { type BlogBlock } from "@/lib/blog-data";

export function TableOfContents({ blocks }: { blocks: BlogBlock[] }) {
  const headings = blocks.filter(
    (b): b is Extract<BlogBlock, { type: "h2" }> => b.type === "h2",
  );

  if (headings.length === 0) return null;

  return (
    <div className="rounded-[14px] border border-border-subtle bg-card p-6">
      <span className="mb-4 block text-[11px] font-semibold uppercase tracking-[2px] text-teal">
        Table of Contents
      </span>
      <ol className="flex flex-col gap-2.5">
        {headings.map((h, i) => (
          <li key={h.id}>
            <a
              href={`#${h.id}`}
              className="flex items-start gap-3 text-[13.5px] text-gray transition-colors hover:text-white"
            >
              <span className="font-display font-bold text-teal">{i + 1}.</span>
              {h.text}
            </a>
          </li>
        ))}
      </ol>
    </div>
  );
}
