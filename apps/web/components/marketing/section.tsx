import type { ReactNode } from "react";
import { cn } from "@/lib/utils";

/** Page-width wrapper — the canonical marketing container. */
export function Container({
  className,
  children,
}: {
  className?: string;
  children: ReactNode;
}) {
  return <div className={cn("mx-auto w-full max-w-6xl px-6", className)}>{children}</div>;
}

/** Vertical section rhythm — matches the landing's 128px cadence. */
export function Section({
  id,
  className,
  children,
}: {
  id?: string;
  className?: string;
  children: ReactNode;
}) {
  return (
    <section id={id} className={cn("pt-28 md:pt-32", className)}>
      {children}
    </section>
  );
}

/** Section heading + optional sub, in the v2 display style. */
export function SectionHeading({
  title,
  sub,
  align = "center",
  className,
}: {
  title: ReactNode;
  sub?: ReactNode;
  align?: "center" | "left";
  className?: string;
}) {
  return (
    <div className={cn(align === "center" ? "mx-auto max-w-2xl text-center" : "max-w-2xl", className)}>
      <h2 className="text-balance font-sans text-[clamp(2rem,4.4vw,3rem)] font-bold leading-[1.05] tracking-tight text-foreground">
        {title}
      </h2>
      {sub ? (
        <p
          className={cn(
            "mt-3.5 text-balance text-base leading-relaxed text-muted-foreground",
            align === "center" && "mx-auto max-w-xl",
          )}
        >
          {sub}
        </p>
      ) : null}
    </div>
  );
}
