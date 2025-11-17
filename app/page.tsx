import Navigation from "@/components/Navigation";
import Hero from "@/components/Hero";
import TrustedBy from "@/components/TrustedBy";
import Expertise from "@/components/Expertise";
import AIWordCloud from "@/components/AIWordCloud";
import FeaturedProjects from "@/components/FeaturedProjects";
import Contact from "@/components/Contact";

export default function Home() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Navigation />
      <Hero />
      <TrustedBy />
      <Expertise />
      <AIWordCloud />
      <FeaturedProjects />
      <Contact />
    </div>
  );
}
