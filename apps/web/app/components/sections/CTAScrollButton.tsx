"use client";

import { buttonVariants } from "@/components/ui/button";

export function CTAScrollButton() {
  return (
    <a
      href="/#pricing"
      data-umami-event="cta-pricing-click"
      className={buttonVariants({ variant: "outline", size: "lg" })}
    >
      Buy lifetime license
    </a>
  );
}
