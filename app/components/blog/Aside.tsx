import type { ReactNode } from "react";

type AsideProps = {
  children: ReactNode;
  /** Short tag rendered in the eyebrow. Defaults to "Aside". */
  label?: string;
  variant?: "note" | "warn";
};

/**
 * Inline callout. Use for footnote-like asides ("If you're on Intel Mac, …")
 * or one-paragraph context that doesn't belong in the main flow.
 */
export function Aside({
  children,
  label = "Aside",
  variant = "note",
}: AsideProps) {
  const accent =
    variant === "warn"
      ? "border-l-[#a25c2a]"
      : "border-l-editorial-accent";
  return (
    <aside
      className={`my-7 max-w-[760px] rounded-r-2xl border-l-4 ${accent} bg-editorial-surface-2 px-5 py-4`}
    >
      <div className="font-mono uppercase tracking-[0.14em] text-[10px] text-editorial-ink-3 mb-1.5">
        {label}
      </div>
      <div className="text-[15.5px] leading-[1.65] text-editorial-ink-2 [&>p]:my-0 [&>p+p]:mt-3">
        {children}
      </div>
    </aside>
  );
}
