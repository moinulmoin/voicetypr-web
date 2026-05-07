import type { ReactNode } from "react";
import Header from "@/app/components/sections/Header";
import Footer from "@/app/components/sections/Footer";

export default function LegalLayout({ children }: { children: ReactNode }) {
  return (
    <main
      id="main-content"
      className="landing-editorial relative min-h-screen"
    >
      <Header />
      <article className="ed-section ed-section-hero pt-[120px] md:pt-[140px] pb-12">
        <div className="ed-container max-w-[760px]">{children}</div>
      </article>
      <Footer />
    </main>
  );
}
