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
import Outcomes from "./components/sections/Outcomes";
import Pricing from "./components/sections/Pricing";
import Testimonials from "./components/sections/Reviews";
import ProofTracksSection from "./components/ProofTracksSection";
import RelatedGuidesSection from "./components/RelatedGuidesSection";
import { homepageDiscoveryLinks, homepageProofTracks } from "@/lib/seo-discovery";

export default function HomePage() {
  return (
    <>
      <main id="main-content" className="landing-editorial relative min-h-screen">
        <Header />
        <Hero />
        <Demo />
        <Outcomes />
        <RelatedGuidesSection
          eyebrow="start from what you need"
          title="Voice typing for Windows, hand pain, focus, and long prompts"
          description="Use VoiceTypr when typing is the bottleneck. Dictate into Windows apps, reduce keyboard load on hard typing days, or talk long prompts into the AI tools you already use."
          links={homepageDiscoveryLinks}
          dataTrackPrefix="home-discovery"
        />
        <HowItWorks />
        <Features />
        <Compare />
        <ProofTracksSection
          eyebrow="before you download"
          title="Make sure it fits the way you actually type"
          description="Windows users need a real desktop workflow. People with typing pain or focus friction need fewer keystrokes in the apps they already use. VoiceTypr is built around both."
          tracks={homepageProofTracks}
          dataTrackPrefix="home-proof"
        />
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
