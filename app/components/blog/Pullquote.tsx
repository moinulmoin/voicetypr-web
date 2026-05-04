import type { ReactNode } from "react";

type PullquoteProps = {
  children: ReactNode;
  attribution?: string;
};

/**
 * Inline pull-quote. Use sparingly — once or twice per article — to mark a
 * line worth reading slowly. Picks up the same italic-em treatment as the
 * homepage editorial layer.
 */
export function Pullquote({ children, attribution }: PullquoteProps) {
  return (
    <figure className="my-12 max-w-[760px] mx-auto">
      <blockquote className="font-serif text-[clamp(26px,3.2vw,38px)] leading-[1.18] tracking-[-0.005em] text-editorial-ink italic relative">
        <span
          aria-hidden
          className="absolute -left-3 -top-2 font-serif text-[60px] leading-none text-editorial-accent select-none not-italic"
        >
          &ldquo;
        </span>
        <span className="block pl-4">{children}</span>
      </blockquote>
      {attribution ? (
        <figcaption className="mt-4 pl-4 font-mono uppercase tracking-[0.14em] text-[10px] text-editorial-ink-3">
          {attribution}
        </figcaption>
      ) : null}
    </figure>
  );
}
