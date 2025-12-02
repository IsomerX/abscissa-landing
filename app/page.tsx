import Navigation from "@/components/Navigation";
import Hero from "@/components/Hero";
import TrustedBy from "@/components/TrustedBy";
import TheChallenge from "@/components/TheChallenge";
import SchoolDostSection from "@/components/SchoolDostSection";
import MeasurableImpact from "@/components/MeasurableImpact";
import Pricing from "@/components/Pricing";
import Founders from "@/components/Founders";
import Expertise from "@/components/Expertise";
import AIWordCloud from "@/components/AIWordCloud";
import Contact from "@/components/Contact";

export default function Home() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Navigation />
      <Hero />
      <TrustedBy />
      <TheChallenge />
      <SchoolDostSection />
      <MeasurableImpact />
      <Pricing />
      <Expertise />
      <Founders />
      <AIWordCloud />
      <Contact />
    </div>
  );
}
