import type { ReactNode } from "react";

type PullquoteProps = {
  children: ReactNode;
  attribution?: string;
};

/**
 * Minimal pull-quote. Sans-serif, restrained sizing, subtle background.
 */
export function Pullquote({ children, attribution }: PullquoteProps) {
  return (
    <figure className="my-10 max-w-[680px]">
      <blockquote className="text-[20px] md:text-[22px] leading-[1.4] tracking-[-0.01em] text-editorial-ink italic bg-editorial-surface-2 rounded-lg px-6 py-5">
        {children}
      </blockquote>
      {attribution ? (
        <figcaption className="mt-3 text-[13px] text-editorial-ink-3">
          {attribution}
        </figcaption>
      ) : null}
    </figure>
  );
}
