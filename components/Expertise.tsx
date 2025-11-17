"use client";

import { Badge } from "@/components/ui/badge";

const Expertise = () => {
  const expertiseItems = [
    {
      title: "Data Intelligence & Query Tools",
      description:
        "Natural language interfaces that make complex data instantly accessible to every team member. We build intelligent data query tools that let anyone in your organisation ask questions about complex datasets—no technical knowledge required. Our systems understand natural language, retrieve accurate information, and present insights in seconds.",
      image: "/assets/data-intelligence.jpg",
      features: [
        "Natural language understanding",
        "Intelligent data retrieval with SOTA RAG models",
        "Instant, accurate responses",
        "No technical knowledge required",
      ],
    },
    {
      title: "Conversational AI",
      description:
        "Customer-facing chatbots and support systems that understand context and deliver results. From appointment scheduling to complex queries, our conversational AI solutions handle routine tasks autonomously while providing seamless escalation when needed. Available 24/7, they improve customer satisfaction while reducing operational overhead.",
      image: "/assets/conversational-ai.jpg",
      features: [
        "Context-aware conversations",
        "24/7 availability",
        "Seamless escalation",
        "Autonomous task handling",
      ],
    },
  ];

  return (
    <section id="expertise" className="bg-background py-32">
      <div className="max-w-7xl mx-auto px-8">
        <div className="text-center mb-20">
          <h2 className="text-5xl md:text-6xl font-medium mb-6 text-foreground">
            Our Core <span className="font-serif italic text-accent" style={{ fontFamily: "'Source Serif 4', serif" }}>Expertise</span>
          </h2>
          <p className="text-xl text-foreground/70 max-w-3xl mx-auto">
            Bespoke AI solutions tailored to your business needs
          </p>
        </div>

        <div className="space-y-32">
          {expertiseItems.map((item, index) => (
            <div
              key={index}
              className={`grid grid-cols-1 lg:grid-cols-2 gap-12 items-center ${
                index % 2 === 1 ? "lg:grid-flow-dense" : ""
              }`}
            >
              {/* Image */}
              <div
                className={`${
                  index % 2 === 1 ? "lg:col-start-2" : ""
                } relative group`}
              >
                <div className="relative overflow-hidden rounded-2xl">
                  <img
                    src={item.image}
                    alt={item.title}
                    className="w-full h-[400px] object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-background/80 to-transparent" />
                </div>
              </div>

              {/* Content */}
              <div className={index % 2 === 1 ? "lg:col-start-1 lg:row-start-1" : ""}>
                <Badge variant="outline" className="mb-4 border-accent/30 text-accent">
                  Core Service
                </Badge>
                <h3 className="text-3xl md:text-4xl font-medium mb-4 text-foreground">
                  {item.title}
                </h3>
                <p className="text-lg text-foreground/70 mb-8 leading-relaxed">
                  {item.description}
                </p>

                {/* Features */}
                <div className="space-y-3">
                  {item.features.map((feature, featureIndex) => (
                    <div
                      key={featureIndex}
                      className="flex items-start gap-3"
                    >
                      <div className="w-1.5 h-1.5 rounded-full bg-accent mt-2" />
                      <p className="text-foreground/80">{feature}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Expertise;
