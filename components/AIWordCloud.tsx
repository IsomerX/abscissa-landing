"use client";

import { Badge } from "@/components/ui/badge";

const AIWordCloud = () => {
  const buzzwords = [
    // Row 1
    ["Natural Language Processing", "Machine Learning", "Large Language Models", "Deep Learning", "Neural Networks"],
    // Row 2
    ["GPT-4", "Claude", "RAG Systems", "Vector Databases", "Embeddings", "Fine-tuning"],
    // Row 3
    ["Conversational AI", "Chatbots", "Semantic Search", "Context Understanding", "AI Agents"],
    // Row 4
    ["Computer Vision", "Facial Recognition", "Data Analytics", "Real-time Processing", "API Integration"],
    // Row 5
    ["Enterprise AI", "Scalable Solutions", "Cloud Infrastructure", "Production Ready", "Custom Models"],
    // Row 6
    ["Automation", "Intelligent Systems", "AI-Powered", "Innovation", "Transformative Technology"],
  ];

  return (
    <section className="py-32 bg-secondary/10">
      <div className="max-w-7xl mx-auto px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-medium mb-6 text-foreground">
            Our <span className="font-serif italic text-accent" style={{ fontFamily: "'Source Serif 4', serif" }}>Technology</span> Stack
          </h2>
          <p className="text-lg text-foreground/70 max-w-2xl mx-auto">
            Powered by cutting-edge AI technologies and frameworks
          </p>
        </div>

        <div className="relative">
          {/* Fade overlays on both sides */}
          <div className="absolute left-0 top-0 bottom-0 w-32 bg-gradient-to-r from-secondary/10 to-transparent z-10 pointer-events-none" />
          <div className="absolute right-0 top-0 bottom-0 w-32 bg-gradient-to-l from-secondary/10 to-transparent z-10 pointer-events-none" />

          <div className="space-y-4">
            {buzzwords.map((row, rowIndex) => (
              <div
                key={rowIndex}
                className="flex flex-wrap justify-center gap-3 animate-fade-in"
                style={{ animationDelay: `${rowIndex * 0.1}s` }}
              >
                {row.map((word, wordIndex) => (
                  <Badge
                    key={wordIndex}
                    variant="secondary"
                    className="px-6 py-2.5 text-sm font-medium bg-secondary/50 hover:bg-secondary/80 hover:text-accent transition-all duration-300 cursor-default border border-border/50 hover:border-accent/50"
                  >
                    {word}
                  </Badge>
                ))}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default AIWordCloud;
