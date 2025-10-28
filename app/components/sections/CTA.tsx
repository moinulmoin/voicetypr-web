import { Button } from "@/components/ui/button";
import { Download } from "lucide-react";
import Link from "next/link";
import { CTAScrollButton } from "./CTAScrollButton";

export default function CTA() {
  return (
    <section className="relative py-20">
      <div className="max-w-4xl mx-auto px-4 text-center">
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4">
          Ready to write without typing?
        </h2>
        <p className="text-lg sm:text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
          Start the 3-day trial in under two minutes. Love it? Unlock a lifetime license.
        </p>
        <div className="flex gap-4 flex-wrap justify-center">
          <Button asChild size="lg">
            <Link href="/download" data-umami-event="cta-download-click">
              <Download />
              Start free 3-day trial
            </Link>
          </Button>
          <CTAScrollButton />
        </div>
      </div>
    </section>
  );
}
