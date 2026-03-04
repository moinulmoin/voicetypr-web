"use client";

import { buttonVariants } from "@/components/ui/button";
import Link from "next/link";

export function CTAScrollButton() {
  return (
    <Link
      href="/#pricing"
      data-umami-event="cta-pricing-click"
      className={buttonVariants({ variant: "outline", size: "lg" })}
    >
      Buy lifetime license
    </Link>
  );
}
