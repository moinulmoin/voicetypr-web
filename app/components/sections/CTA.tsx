"use client";

import { Button } from "@/components/ui/button";
import { Download } from "lucide-react";
import Link from "next/link";

export default function CTA() {
  return (
    <section className="relative py-20">
      <div className="max-w-4xl mx-auto px-4 text-center">
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4">
          Ready to get started?
        </h2>
        <p className="text-lg sm:text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
          Download and Get lifetime license
        </p>
        <div className="flex gap-4 flex-wrap justify-center">
          <Button asChild>
            <Link href="/download" data-umami-event="cta-download-click">
              <Download />
              Download Free
            </Link>
          </Button>
          <Button
            variant="outline"
            onClick={() => document.getElementById("pricing")?.scrollIntoView({ behavior: "smooth" })}
            data-umami-event="cta-pricing-click"
          >
            Get lifetime license
          </Button>
        </div>
      </div>
    </section>
  );
}
