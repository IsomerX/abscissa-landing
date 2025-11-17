"use client";

import { Badge } from "@/components/ui/badge";

const FeaturedProjects = () => {
  const projects = [
    {
      title: "Global Fintech Fest 2025",
      description:
        "Deployed an AI-powered chatbot at the world's largest fintech festival, handling queries from thousands of attendees in real-time. Built a robust natural language query system providing instant information on sessions, speakers, schedules, and exhibitors.",
      image: "/assets/fintech-project.jpg",
      stats: [
        { label: "Photos Processed", value: "40K+" },
        { label: "Real-time Queries", value: "1000s" },
        { label: "World's Largest", value: "Fintech Fest" },
      ],
      highlights: [
        "AI-powered photo search to find individual attendees",
        "Real-time query handling during peak hours",
        "Advanced facial recognition and indexing",
      ],
    },
    {
      title: "Homeland Group Real Estate",
      description:
        "Partnered with Homeland Group, a major real estate firm in India, to build an intelligent data query chatbot that empowers their sales and operations teams with instant access to property information, pricing, availability, and customer data.",
      image: "/assets/real-estate-project.jpg",
      stats: [
        { label: "Response Time", value: "<2s" },
        { label: "Data Sources", value: "Multiple CRMs" },
        { label: "Team Impact", value: "Hours Saved" },
      ],
      highlights: [
        "Instant property details and pricing access",
        "Seamless CRM integration",
        "Real-time inventory status updates",
      ],
    },
  ];

  return (
    <section id="projects" className="bg-background py-32">
      <div className="max-w-7xl mx-auto px-8">
        <div className="text-center mb-20">
          <h2 className="text-5xl md:text-6xl font-medium mb-6 text-foreground">
            Featured <span className="font-serif italic text-accent" style={{ fontFamily: "'Source Serif 4', serif" }}>Projects</span>
          </h2>
          <p className="text-xl text-foreground/70 max-w-3xl mx-auto">
            Mission-critical AI solutions across diverse sectors
          </p>
        </div>

        <div className="space-y-32">
          {projects.map((project, index) => (
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
                    src={project.image}
                    alt={project.title}
                    className="w-full h-[400px] object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-background/80 to-transparent" />
                </div>
              </div>

              {/* Content */}
              <div className={index % 2 === 1 ? "lg:col-start-1 lg:row-start-1" : ""}>
                <Badge variant="outline" className="mb-4 border-accent/30 text-accent">
                  Case Study
                </Badge>
                <h3 className="text-3xl md:text-4xl font-medium mb-4 text-foreground">
                  {project.title}
                </h3>
                <p className="text-lg text-foreground/70 mb-8 leading-relaxed">
                  {project.description}
                </p>

                {/* Stats */}
                <div className="grid grid-cols-3 gap-6 mb-8 pb-8 border-b border-border">
                  {project.stats.map((stat, statIndex) => (
                    <div key={statIndex}>
                      <div className="text-2xl font-medium text-accent mb-1">
                        {stat.value}
                      </div>
                      <div className="text-sm text-foreground/60">
                        {stat.label}
                      </div>
                    </div>
                  ))}
                </div>

                {/* Highlights */}
                <div className="space-y-3">
                  {project.highlights.map((highlight, highlightIndex) => (
                    <div
                      key={highlightIndex}
                      className="flex items-start gap-3"
                    >
                      <div className="w-1.5 h-1.5 rounded-full bg-accent mt-2" />
                      <p className="text-foreground/80">{highlight}</p>
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

export default FeaturedProjects;
