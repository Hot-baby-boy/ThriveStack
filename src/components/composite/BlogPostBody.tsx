import { type BlogBlock } from "@/lib/blog-data";
import { Reveal } from "@/components/motion/Reveal";

export function BlogPostBody({ blocks }: { blocks: BlogBlock[] }) {
  return (
    <div className="flex flex-col gap-5">
      {blocks.map((block, i) => (
        <Reveal key={i} delay={Math.min(i * 0.015, 0.2)}>
          <BlogBlockRenderer block={block} />
        </Reveal>
      ))}
    </div>
  );
}

function BlogBlockRenderer({ block }: { block: BlogBlock }) {
  switch (block.type) {
    case "h2":
      return (
        <h2
          id={block.id}
          className="mt-6 scroll-mt-28 font-display text-2xl font-extrabold text-white lg:text-[28px]"
        >
          {block.text}
        </h2>
      );
    case "h3":
      return (
        <h3 id={block.id} className="mt-2 scroll-mt-28 font-display text-lg font-bold text-white">
          {block.text}
        </h3>
      );
    case "p":
      return <p className="text-[15.5px] leading-[1.9] text-gray">{block.text}</p>;
    case "ul":
      return (
        <ul className="flex flex-col gap-2.5">
          {block.items.map((item, i) => (
            <li key={i} className="flex items-start gap-3 text-[15px] leading-[1.8] text-gray">
              <span className="mt-2.5 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-teal" />
              {item}
            </li>
          ))}
        </ul>
      );
    case "ol":
      return (
        <ol className="flex flex-col gap-2.5">
          {block.items.map((item, i) => (
            <li key={i} className="flex items-start gap-3 text-[15px] leading-[1.8] text-gray">
              <span className="mt-0.5 flex h-6 w-6 flex-shrink-0 items-center justify-center rounded-full bg-teal/10 font-display text-[12px] font-bold text-teal">
                {i + 1}
              </span>
              {item}
            </li>
          ))}
        </ol>
      );
    case "tip":
      return (
        <div className="rounded-[14px] border border-teal/30 bg-teal/[0.06] p-6">
          <span className="mb-2 block text-[11px] font-semibold uppercase tracking-[2px] text-teal">
            {block.label}
          </span>
          <p className="text-[14.5px] leading-[1.8] text-white">{block.text}</p>
        </div>
      );
    case "example":
      return (
        <div className="rounded-[14px] border border-border-subtle bg-card p-6">
          <span className="mb-2 block text-[11px] font-semibold uppercase tracking-[2px] text-teal">
            {block.label}
          </span>
          <p className="text-[14.5px] leading-[1.8] text-gray">{block.text}</p>
        </div>
      );
    default:
      return null;
  }
}
