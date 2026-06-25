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
