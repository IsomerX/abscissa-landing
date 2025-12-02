"use client";

import { Badge } from "@/components/ui/badge";

const Expertise = () => {
  const expertiseItems = [
    {
      title: "Legacy System Transformation",
      description:
        "We specialize in taking outdated, clunky ERP and LMS systems and transforming them into modern, efficient platforms. Our approach ensures that your historical data is preserved while your operations are revolutionized with cutting-edge technology.",
      image: "/assets/legacy-transformation.png",
      features: [
        "Seamless data migration",
        "Modern UI/UX overhaul",
        "Performance optimization",
        "Legacy code refactoring",
      ],
    },
    {
      title: "AI-Powered Education Ecosystems",
      description:
        "Beyond simple management tools, we build intelligent ecosystems that connect students, teachers, parents, and administrators. Our AI agents automate routine tasks, provide personalized insights, and foster a collaborative learning environment.",
      image: "/assets/conversational-ai.jpg",
      features: [
        "Intelligent automation agents",
        "Personalized learning paths",
        "Real-time analytics & insights",
        "Multilingual support",
      ],
    },
  ];

  return (
    <section id="services" className="py-24 bg-secondary/5">
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
              className={`grid grid-cols-1 lg:grid-cols-2 gap-12 items-center ${index % 2 === 1 ? "lg:grid-flow-dense" : ""
                }`}
            >
              {/* Image */}
              <div
                className={`${index % 2 === 1 ? "lg:col-start-2" : ""
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
