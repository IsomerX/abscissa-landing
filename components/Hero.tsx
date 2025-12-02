"use client";

import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Sparkles } from "lucide-react";

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background video */}
      <video
        autoPlay
        loop
        muted
        playsInline
        className="absolute inset-0 w-full h-full object-cover z-0 opacity-60"
      >
        <source src="/bg_video.mp4" type="video/mp4" />
      </video>

      {/* Overlay for better text contrast */}
      <div className="absolute inset-0 bg-background/40 z-0" />

      <div className="relative z-10 max-w-5xl mx-auto px-8 text-center animate-fade-in">
        <Badge
          variant="outline"
          className="mb-8 border-foreground/20 bg-background/50 backdrop-blur-sm px-4 py-2 text-sm"
        >
          <Sparkles className="w-4 h-4 mr-2" />
          Revolutionizing Education Ecosystems
        </Badge>

        <h1 className="text-5xl md:text-6xl lg:text-7xl font-medium mb-6 leading-tight tracking-tight">
          Transforming Broken Systems into{" "}
          <span className="font-serif italic text-accent" style={{ fontFamily: "'Source Serif 4', serif" }}>
            Intelligent
          </span>{" "}
          Ecosystems
        </h1>

        <p className="text-lg md:text-xl text-foreground/70 mb-12 max-w-3xl mx-auto leading-relaxed">
          We take old, broken ERP and LMS systems and give them a revolution. Experience the future of education with AI-powered solutions.
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <Button size="lg" className="rounded-full px-8 py-6 text-lg" asChild>
            <a href="https://schooldost.in/" target="_blank" rel="noopener noreferrer">Discover School Dost</a>
          </Button>
          <Button
            size="lg"
            variant="secondary"
            className="rounded-full px-8 py-6 text-lg"
            asChild
          >
            <a href="#mission">Our Mission</a>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Hero;
