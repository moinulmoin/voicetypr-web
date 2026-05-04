import { Suspense } from "react";
import { SuccessModal } from "./components/SuccessModal";
import CTA from "./components/sections/CTA";
import Demo from "./components/sections/Demo";
import Compare from "./components/sections/Compare";
import FAQ from "./components/sections/FAQ";
import Features from "./components/sections/Features";
import Footer from "./components/sections/Footer";
import FounderNote from "./components/sections/FounderNote";
import Header from "./components/sections/Header";
import Hero from "./components/sections/Hero";
import HowItWorks from "./components/sections/HowItWorks";
import Infographics from "./components/sections/Infographics";
import Outcomes from "./components/sections/Outcomes";
import Pricing from "./components/sections/Pricing";
import Testimonials from "./components/sections/Reviews";

export default function HomePage() {
  return (
    <>
      <main id="main-content" className="landing-editorial relative min-h-screen">
        <Header />
        <Hero />
        <Demo />
        <Outcomes />
        <Infographics />
        <Features />
        <HowItWorks />
        <Compare />
        <Pricing />
        <Testimonials />
        <FounderNote />
        <FAQ />
        <CTA />
        <Footer />
      </main>
      <Suspense>
        <SuccessModal />
      </Suspense>
    </>
  );
}
