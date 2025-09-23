import { Suspense } from "react";
import GridBackground from "./components/GridBackground";
import { SuccessModal } from "./components/SuccessModal";
import FAQ from "./components/sections/FAQ";
import Features from "./components/sections/Features";
import Footer from "./components/sections/Footer";
import Header from "./components/sections/Header";
import Hero from "./components/sections/Hero";
import HowItWorks from "./components/sections/HowItWorks";
import Pricing from "./components/sections/Pricing";
import FounderNote from "./components/sections/FounderNote";
// import CompetitorComparison from "./components/sections/CompetitorComparison";
import Testimonials from "./components/sections/Reviews";

export default function HomePage() {
  return (
    <>
      <div className="relative min-h-screen">
        <GridBackground />
        <Header />
        <Hero />
        <Features />
        <HowItWorks />
        <Testimonials />
        <Pricing />
        <FounderNote />
        <FAQ />
        <Footer />
      </div>
      <Suspense>
        <SuccessModal />
      </Suspense>
    </>
  );
}
