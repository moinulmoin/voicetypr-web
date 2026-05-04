import type { ComponentPropsWithoutRef } from "react";
import Link from "next/link";

/**
 * Editorial-styled MDX overrides. Keep typography close to the homepage system:
 * Instrument Serif headlines, Geist body, italic <em> in headings picks up the
 * accent color from .landing-editorial automatically.
 */
export const mdxComponents = {
  h1: (props: ComponentPropsWithoutRef<"h1">) => (
    <h1
      className="font-serif text-[clamp(40px,4.6vw,64px)] leading-[1.02] tracking-[-0.02em] mt-12 mb-5"
      {...props}
    />
  ),
  h2: (props: ComponentPropsWithoutRef<"h2">) => (
    <h2
      className="font-serif text-[clamp(28px,2.8vw,40px)] leading-[1.1] tracking-[-0.01em] mt-14 mb-4"
      {...props}
    />
  ),
  h3: (props: ComponentPropsWithoutRef<"h3">) => (
    <h3
      className="font-serif text-[22px] md:text-[24px] leading-[1.2] mt-10 mb-3"
      {...props}
    />
  ),
  p: (props: ComponentPropsWithoutRef<"p">) => (
    <p
      className="text-[17px] leading-[1.7] text-editorial-ink-2 my-5 max-w-[680px]"
      {...props}
    />
  ),
  a: ({ href = "", ...rest }: ComponentPropsWithoutRef<"a">) => {
    const isExternal = /^https?:\/\//.test(href);
    if (isExternal) {
      return (
        <a
          href={href}
          target="_blank"
          rel="noreferrer"
          className="text-editorial-accent underline-offset-2 hover:underline"
          {...rest}
        />
      );
    }
    return (
      <Link
        href={href}
        className="text-editorial-accent underline-offset-2 hover:underline"
        {...rest}
      />
    );
  },
  ul: (props: ComponentPropsWithoutRef<"ul">) => (
    <ul
      className="my-5 max-w-[680px] list-disc pl-6 marker:text-editorial-ink-3 space-y-2 text-[17px] leading-[1.7] text-editorial-ink-2"
      {...props}
    />
  ),
  ol: (props: ComponentPropsWithoutRef<"ol">) => (
    <ol
      className="my-5 max-w-[680px] list-decimal pl-6 marker:text-editorial-ink-3 marker:font-mono space-y-2 text-[17px] leading-[1.7] text-editorial-ink-2"
      {...props}
    />
  ),
  li: (props: ComponentPropsWithoutRef<"li">) => (
    <li className="pl-1" {...props} />
  ),
  blockquote: (props: ComponentPropsWithoutRef<"blockquote">) => (
    <blockquote
      className="my-7 max-w-[680px] border-l-2 border-editorial-accent pl-5 font-serif text-[20px] italic text-editorial-ink"
      {...props}
    />
  ),
  hr: () => (
    <hr className="my-10 max-w-[680px] border-editorial-line" />
  ),
  strong: (props: ComponentPropsWithoutRef<"strong">) => (
    <strong className="text-editorial-ink font-medium" {...props} />
  ),
  em: (props: ComponentPropsWithoutRef<"em">) => (
    <em className="italic" {...props} />
  ),
  code: ({ className, ...rest }: ComponentPropsWithoutRef<"code">) => {
    // rehype-pretty-code emits `data-language` etc. on highlighted blocks.
    // For inline code, the className is undefined → use editorial inline style.
    const isBlock = className?.includes("language-");
    if (isBlock) return <code className={className} {...rest} />;
    return (
      <code
        className="font-mono text-[14px] bg-editorial-surface-2 border border-editorial-line rounded px-1.5 py-0.5 text-editorial-ink"
        {...rest}
      />
    );
  },
  pre: (props: ComponentPropsWithoutRef<"pre">) => (
    <pre
      className="my-7 max-w-[820px] overflow-x-auto rounded-2xl border border-editorial-line bg-editorial-surface-2 p-5 text-[14px] leading-[1.6] [&_code]:!bg-transparent [&_code]:!p-0 [&_code]:!border-0"
      {...props}
    />
  ),
  img: ({ src = "", alt = "", ...rest }: ComponentPropsWithoutRef<"img">) => (
    // eslint-disable-next-line @next/next/no-img-element
    <img
      src={src}
      alt={alt}
      className="my-7 max-w-full rounded-2xl border border-editorial-line"
      loading="lazy"
      {...rest}
    />
  ),
  table: (props: ComponentPropsWithoutRef<"table">) => (
    <div className="my-7 max-w-full overflow-x-auto rounded-2xl border border-editorial-line bg-editorial-surface">
      <table className="w-full text-[14.5px]" {...props} />
    </div>
  ),
  thead: (props: ComponentPropsWithoutRef<"thead">) => (
    <thead className="border-b border-editorial-line bg-editorial-surface-2" {...props} />
  ),
  th: (props: ComponentPropsWithoutRef<"th">) => (
    <th className="px-4 py-3 text-left font-mono uppercase tracking-[0.14em] text-[10px] text-editorial-ink-3" {...props} />
  ),
  td: (props: ComponentPropsWithoutRef<"td">) => (
    <td className="px-4 py-3 align-top text-editorial-ink-2 border-t border-editorial-line/60" {...props} />
  ),
};
