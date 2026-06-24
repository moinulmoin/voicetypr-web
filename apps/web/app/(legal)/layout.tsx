import type { ReactNode } from "react";
import { SiteHeader } from "@/components/marketing/site-header";
import { SiteFooter } from "@/components/marketing/site-footer";
import { Section, Container } from "@/components/marketing/section";

export default function LegalLayout({ children }: { children: ReactNode }) {
  return (
    <main id="main-content" className="min-h-dvh bg-background font-sans text-foreground">
      <SiteHeader />
      <Section>
        <Container className="max-w-3xl">
          <article>{children}</article>
        </Container>
      </Section>
      <SiteFooter />
    </main>
  );
}
