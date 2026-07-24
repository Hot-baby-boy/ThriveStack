import { Hero } from "@/components/sections/Hero";
import { TrustBar } from "@/components/sections/TrustBar";
import { FeaturedServices } from "@/components/sections/FeaturedServices";
import { SelectedWork } from "@/components/sections/SelectedWork";
import { Testimonials } from "@/components/sections/Testimonials";
import { Process } from "@/components/sections/Process";
import { IndustriesStrip } from "@/components/sections/IndustriesStrip";
import { AISpotlight } from "@/components/sections/AISpotlight";
import { WhyThriveStack } from "@/components/sections/WhyThriveStack";
import { UpworkTrustSection } from "@/components/sections/UpworkTrustSection";
import { FinalCTA } from "@/components/sections/FinalCTA";

export default function Home() {
  return (
    <>
      <Hero />
      <TrustBar />
      <FeaturedServices />
      <SelectedWork />
      <Testimonials />
      <Process />
      <IndustriesStrip />
      <AISpotlight />
      <WhyThriveStack />
      <UpworkTrustSection />
      <FinalCTA />
    </>
  );
}
