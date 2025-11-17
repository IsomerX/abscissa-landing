import Navigation from "@/components/Navigation";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ArrowRight, CheckCircle2 } from "lucide-react";

export default function OCRSolution() {
  const stats = [
    {
      value: "99.7%",
      label: "Field accuracy",
      description: "Across invoices, forms, IDs.",
    },
    {
      value: "65%",
      label: "Cost reduction",
      description: "Versus manual keying in 90 days.",
    },
    {
      value: "12x",
      label: "Throughput",
      description: "Same team. Bigger pipe.",
    },
    {
      value: "<30s",
      label: "Doc processing",
      description: "Whether it be 10, 100 or 1,000 pages. Our pace doesn't budge.",
    },
  ];

  const deploymentOptions = [
    {
      title: "Cloud API",
      description: "Multi-region endpoints. Auto-scaling.",
      icon: "☁️",
    },
    {
      title: "Web portal",
      description: "Browser-based. Batch processing.",
      icon: "🌐",
    },
    {
      title: "Private cloud",
      description: "Dedicated instance. Your infrastructure.",
      icon: "🔒",
    },
  ];

  const timeline = [
    {
      week: "Week 0: readiness",
      description: "Security review. Success metrics locked.",
    },
    {
      week: "Week 1: integration",
      description: "API drop-in. Sample sets synced.",
    },
    {
      week: "Week 2: go-live",
      description: "Shadow then full cutover.",
    },
  ];

  const comparisons = [
    {
      legacy: {
        title: "Legacy OCR: brittle templates",
        description: "Breaks on layout drift. Retraining purgatory. Hidden costs.",
      },
      voriq: {
        title: "Voriq: layout-aware vision",
        description: "Self-healing parsers. Few-shot adaptation. Zero downtime.",
      },
    },
    {
      legacy: {
        title: "Legacy: slow queues",
        description: "Batch windows. SLAs missed. Ops fire-fighting.",
      },
      voriq: {
        title: "Voriq: streaming pipeline",
        description: "Event-driven. Autoscale. Predictable latency.",
      },
    },
  ];

  const architectureSteps = ["Ingest", "Pre-process", "Vision Encoder", "Parse & Extract"];

  return (
    <div className="min-h-screen bg-background text-foreground">
      <Navigation />

      {/* Hero Section */}
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
        <div className="absolute inset-0 bg-gradient-to-br from-accent/10 via-background/50 to-background/50" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_120%,rgba(120,119,198,0.1),rgba(0,0,0,0))]" />

        <div className="relative z-10 max-w-6xl mx-auto px-8 text-center animate-fade-in pt-32">
          <Badge
            variant="outline"
            className="mb-8 border-accent/30 bg-background/50 backdrop-blur-sm px-6 py-3 text-base"
          >
            <span className="text-accent">Enterprise OCR Solution</span>
          </Badge>

          <h1 className="text-6xl md:text-7xl lg:text-8xl font-medium mb-8 leading-tight tracking-tight">
            Voriq AI - OCR that{" "}
            <span className="font-serif italic text-accent block mt-2" style={{ fontFamily: "'Source Serif 4', serif" }}>
              actually delivers
            </span>
          </h1>

          <p className="text-xl md:text-2xl text-foreground/70 mb-16 max-w-3xl mx-auto leading-relaxed">
            Fast. Accurate. Enterprise-grade. Not a demo.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Button size="lg" className="rounded-full px-10 py-7 text-lg group">
              Start pilot
              <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </Button>
            <Button
              size="lg"
              variant="secondary"
              className="rounded-full px-10 py-7 text-lg"
            >
              Meet the founders
            </Button>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-32 bg-background">
        <div className="max-w-7xl mx-auto px-8">
          <div className="text-center mb-20">
            <h2 className="text-5xl md:text-6xl font-medium mb-6">
              Numbers that{" "}
              <span className="font-serif italic text-accent" style={{ fontFamily: "'Source Serif 4', serif" }}>
                move the board
              </span>
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-5xl mx-auto">
            {/* Stat 1 - 99.7% */}
            <div className="relative group animate-fade-in">
              <div className="relative p-10 rounded-2xl bg-secondary/10 border border-border hover:border-accent/50 transition-all duration-500 hover:scale-[1.02]">
                <div className="flex items-start justify-between mb-6">
                  <div className="w-12 h-12 rounded-lg bg-accent/10 flex items-center justify-center">
                    <svg className="w-6 h-6 text-accent" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  </div>
                </div>
                <div className="text-7xl font-bold text-accent mb-4">{stats[0].value}</div>
                <div className="text-2xl font-medium text-foreground mb-3">{stats[0].label}</div>
                <div className="text-base text-foreground/60 leading-relaxed">
                  {stats[0].description}
                </div>
              </div>
            </div>

            {/* Stat 2 - 65% */}
            <div className="relative group animate-fade-in" style={{ animationDelay: '0.1s' }}>
              <div className="relative p-10 rounded-2xl bg-secondary/10 border border-border hover:border-accent/50 transition-all duration-500 hover:scale-[1.02]">
                <div className="flex items-start justify-between mb-6">
                  <div className="w-12 h-12 rounded-lg bg-accent/10 flex items-center justify-center">
                    <svg className="w-6 h-6 text-accent" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
                    </svg>
                  </div>
                </div>
                <div className="text-7xl font-bold text-accent mb-4">{stats[1].value}</div>
                <div className="text-2xl font-medium text-foreground mb-3">{stats[1].label}</div>
                <div className="text-base text-foreground/60 leading-relaxed">
                  {stats[1].description}
                </div>
              </div>
            </div>

            {/* Stat 3 - 12x */}
            <div className="relative group animate-fade-in" style={{ animationDelay: '0.2s' }}>
              <div className="relative p-10 rounded-2xl bg-secondary/10 border border-border hover:border-accent/50 transition-all duration-500 hover:scale-[1.02]">
                <div className="flex items-start justify-between mb-6">
                  <div className="w-12 h-12 rounded-lg bg-accent/10 flex items-center justify-center">
                    <svg className="w-6 h-6 text-accent" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                    </svg>
                  </div>
                </div>
                <div className="text-7xl font-bold text-accent mb-4">{stats[2].value}</div>
                <div className="text-2xl font-medium text-foreground mb-3">{stats[2].label}</div>
                <div className="text-base text-foreground/60 leading-relaxed">
                  {stats[2].description}
                </div>
              </div>
            </div>

            {/* Stat 4 - <30s */}
            <div className="relative group animate-fade-in" style={{ animationDelay: '0.3s' }}>
              <div className="relative p-10 rounded-2xl bg-secondary/10 border border-border hover:border-accent/50 transition-all duration-500 hover:scale-[1.02]">
                <div className="flex items-start justify-between mb-6">
                  <div className="w-12 h-12 rounded-lg bg-accent/10 flex items-center justify-center">
                    <svg className="w-6 h-6 text-accent" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  </div>
                </div>
                <div className="text-7xl font-bold text-accent mb-4">{stats[3].value}</div>
                <div className="text-2xl font-medium text-foreground mb-3">{stats[3].label}</div>
                <div className="text-base text-foreground/60 leading-relaxed">
                  {stats[3].description}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Deployment Section */}
      <section className="py-32 bg-background">
        <div className="max-w-7xl mx-auto px-8">
          <div className="text-center mb-20">
            <h2 className="text-5xl md:text-6xl font-medium mb-6">
              Deployment that{" "}
              <span className="font-serif italic text-accent" style={{ fontFamily: "'Source Serif 4', serif" }}>
                respects reality
              </span>
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-20">
            {deploymentOptions.map((option, index) => (
              <div
                key={index}
                className="group relative p-8 rounded-2xl bg-secondary/10 border border-border hover:border-accent/50 transition-all duration-500 hover:scale-105"
              >
                <div className="text-5xl mb-6">{option.icon}</div>
                <h3 className="text-2xl font-medium text-foreground mb-4">{option.title}</h3>
                <p className="text-foreground/70 leading-relaxed">{option.description}</p>
              </div>
            ))}
          </div>

          {/* Timeline */}
          <div className="relative">
            <div className="absolute top-1/2 left-0 right-0 h-px bg-accent/20 -translate-y-1/2 hidden lg:block" />

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 relative">
              {timeline.map((item, index) => (
                <div key={index} className="relative">
                  <div className="bg-background border-2 border-accent/30 rounded-2xl p-8 hover:border-accent transition-all duration-300">
                    <div className="w-12 h-12 rounded-full bg-accent/20 border-2 border-accent flex items-center justify-center mb-6 mx-auto">
                      <span className="text-accent font-bold">{index + 1}</span>
                    </div>
                    <h3 className="text-xl font-medium text-foreground mb-3 text-center">
                      {item.week}
                    </h3>
                    <p className="text-foreground/70 text-center leading-relaxed">
                      {item.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Problem/Solution Comparison */}
      <section className="py-32 bg-secondary/5">
        <div className="max-w-7xl mx-auto px-8">
          <div className="text-center mb-20">
            <h2 className="text-5xl md:text-6xl font-medium mb-6">
              What's broken.{" "}
              <span className="font-serif italic text-accent" style={{ fontFamily: "'Source Serif 4', serif" }}>
                What we fixed.
              </span>
            </h2>
          </div>

          <div className="space-y-8">
            {comparisons.map((comparison, index) => (
              <div
                key={index}
                className="grid grid-cols-1 lg:grid-cols-2 gap-6"
              >
                {/* Legacy */}
                <div className="relative p-8 rounded-2xl bg-destructive/5 border border-destructive/20">
                  <h3 className="text-2xl font-medium text-foreground mb-4">
                    {comparison.legacy.title}
                  </h3>
                  <p className="text-foreground/60 leading-relaxed">
                    {comparison.legacy.description}
                  </p>
                </div>

                {/* Voriq */}
                <div className="relative p-8 rounded-2xl bg-accent/5 border border-accent/30 hover:border-accent/50 transition-all duration-300">
                  <div className="flex items-start gap-3 mb-4">
                    <CheckCircle2 className="w-6 h-6 text-accent flex-shrink-0 mt-1" />
                    <h3 className="text-2xl font-medium text-foreground">
                      {comparison.voriq.title}
                    </h3>
                  </div>
                  <p className="text-foreground/70 leading-relaxed">
                    {comparison.voriq.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Architecture Section */}
      <section className="py-32 bg-background">
        <div className="max-w-7xl mx-auto px-8">
          <div className="text-center mb-20">
            <h2 className="text-5xl md:text-6xl font-medium mb-6">
              Architecture at a{" "}
              <span className="font-serif italic text-accent" style={{ fontFamily: "'Source Serif 4', serif" }}>
                glance
              </span>
            </h2>
            <p className="text-xl text-foreground/70 max-w-3xl mx-auto">
              Battle-tested in messy reality. Not toy datasets.
            </p>
          </div>

          <div className="relative max-w-5xl mx-auto">
            <div className="flex flex-col lg:flex-row items-center gap-4">
              {architectureSteps.map((step, index) => (
                <div key={index} className="flex items-center w-full">
                  <div className="group relative flex-1">
                    <div className="relative p-6 rounded-xl bg-gradient-to-r from-accent/10 to-accent/5 border border-accent/30 hover:border-accent transition-all duration-300 hover:scale-105">
                      <div className="text-xl font-medium text-foreground text-center">
                        {step}
                      </div>
                    </div>
                  </div>

                  {index < architectureSteps.length - 1 && (
                    <ArrowRight className="w-8 h-8 text-accent/50 mx-2 flex-shrink-0 hidden lg:block" />
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-32 bg-gradient-to-br from-accent/10 via-background to-background relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(120,119,198,0.1),rgba(0,0,0,0))]" />

        <div className="max-w-5xl mx-auto px-8 text-center relative z-10">
          <h2 className="text-5xl md:text-6xl lg:text-7xl font-medium mb-8 leading-tight">
            Choose{" "}
            <span className="font-serif italic text-accent" style={{ fontFamily: "'Source Serif 4', serif" }}>
              speed.
            </span>{" "}
            Not drift.
          </h2>

          <p className="text-2xl text-foreground/70 mb-12 max-w-3xl mx-auto">
            Ship outcomes in weeks. Build a moat in months.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Button size="lg" className="rounded-full px-10 py-7 text-lg group">
              Start pilot
              <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </Button>
            <Button
              size="lg"
              variant="secondary"
              className="rounded-full px-10 py-7 text-lg"
              asChild
            >
              <a href="#contact">Meet the founders</a>
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}
