import Navigation from "@/components/Navigation";
import Hero from "@/components/Hero";
import TrustedBy from "@/components/TrustedBy";
import TeamExperience from "@/components/TeamExperience";
import Expertise from "@/components/Expertise";
import AIWordCloud from "@/components/AIWordCloud";
import SchoolDostSection from "@/components/SchoolDostSection";
import Contact from "@/components/Contact";

export default function Home() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Navigation />
      <Hero />
      <TrustedBy />
      <Expertise />
      <SchoolDostSection />
      <TeamExperience />
      <AIWordCloud />
      <Contact />
    </div>
  );
}
