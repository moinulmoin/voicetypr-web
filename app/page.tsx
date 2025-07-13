import Header from "./components/sections/Header";
import Hero from "./components/sections/Hero";
import Features from "./components/sections/Features";
import Reviews from "./components/sections/Reviews";
import Pricing from "./components/sections/Pricing";
import FAQ from "./components/sections/FAQ";
import Footer from "./components/sections/Footer";
import GridBackground from "./components/GridBackground";

export default function Page() {
  return (
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
  );
}