import { Suspense } from "react";
import GridBackground from "./components/GridBackground";
import { SuccessModal } from "./components/SuccessModal";
import FAQ from "./components/sections/FAQ";
import Features from "./components/sections/Features";
import Footer from "./components/sections/Footer";
import Header from "./components/sections/Header";
import Hero from "./components/sections/Hero";
import HowItWorks from "./components/sections/HowItWorks";
// import Demo from "./components/sections/Demo";
import PricingServer from "./components/sections/PricingServer";
import FounderNote from "./components/sections/FounderNote";
import CTA from "./components/sections/CTA";
// import CompetitorComparison from "./components/sections/CompetitorComparison";
import Testimonials from "./components/sections/Reviews";

export default function HomePage() {
  return (
    <>
      <main id="main-content" className="relative min-h-screen">
        <GridBackground />
        <Header />
        <Hero />
        <HowItWorks />
        {/* <Demo />  */}
        <Features />
        <Testimonials />
        <PricingServer />
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
