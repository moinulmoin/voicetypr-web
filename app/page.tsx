import { Suspense } from "react";
import GridBackground from "./components/GridBackground";
import { SuccessModal } from "./components/SuccessModal";
import FAQ from "./components/sections/FAQ";
import Features from "./components/sections/Features";
import Footer from "./components/sections/Footer";
import Header from "./components/sections/Header";
import Hero from "./components/sections/Hero";
import Pricing from "./components/sections/Pricing";
import Reviews from "./components/sections/Reviews";

export default function HomePage() {
  return (
    <>
      <div className="relative min-h-screen">
        <GridBackground />
        <Header />
        <Hero />
        <Features />
        <Reviews />
        <Pricing />
        <FAQ />
        <Footer />
      </div>
      <Suspense>
        <SuccessModal />
      </Suspense>
    </>
  );
}