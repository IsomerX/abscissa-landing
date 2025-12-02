"use client";

import Image from "next/image";

const TeamExperience = () => {
  // All companies - ordered by prominence
  const companies = [
    { name: "Y Combinator", logo: "/company-icons/yc.png", width: 100, height: 100 },
    { name: "Turing", logo: "/company-icons/turing.png", width: 140, height: 56 },
    { name: "Lovable", logo: "/company-icons/lovable.jpeg", width: 160, height: 56 },
    { name: "Create", logo: "/company-icons/create.jpeg", width: 140, height: 56 },
    { name: "IgniteTech", logo: "/company-icons/ignitetech.png", width: 140, height: 56 },
    { name: "Homeland", logo: "/company-icons/homeland.png", width: 120, height: 56 },
    { name: "FCC", logo: "/company-icons/fcc.jpeg", width: 100, height: 56 },
    { name: "NAB", logo: "/company-icons/nab.jpeg", width: 100, height: 56 },
    { name: "I Am AI", logo: "/company-icons/iamai.png", width: 120, height: 56 },
    { name: "Creatr", logo: "/company-icons/creatr.png", width: 120, height: 56 },
  ];

  return (
    <section className="relative py-24 px-8 bg-background">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-medium mb-4 text-foreground">
            Battle-Tested <span className="font-serif italic text-accent" style={{ fontFamily: "'Source Serif 4', serif" }}>Experience</span>
          </h2>
          <p className="text-lg text-foreground/70 max-w-3xl mx-auto">
            We didn&apos;t read about AI at scale in whitepapers. We shipped it in production environments before &quot;agent&quot; became a buzzword.
          </p>
        </div>

        {/* Company Logos Grid - Center Aligned */}
        <div className="flex flex-wrap justify-center items-center gap-16 max-w-6xl mx-auto">
          {companies.map((company, index) => (
            <div
              key={index}
              className="flex items-center justify-center h-28 w-[180px]"
            >
              <div className="relative opacity-70 hover:opacity-100 transition-all duration-300 hover:scale-105 filter brightness-110">
                <Image
                  src={company.logo}
                  alt={company.name}
                  width={company.width}
                  height={company.height}
                  className="object-contain max-h-20"
                />
              </div>
            </div>
          ))}
        </div>

        {/* Stats Section */}
        <div className="mt-24 grid grid-cols-1 md:grid-cols-2 gap-12 max-w-5xl mx-auto">
          <div className="text-center p-8 border border-foreground/10 rounded-2xl">
            <div className="text-5xl md:text-6xl font-bold text-foreground mb-4">50+</div>
            <h3 className="text-xl font-medium text-foreground mb-2">Institutions Transformed</h3>
            <p className="text-foreground/60">
              Schools and universities modernized with our ecosystem
            </p>
          </div>
          <div className="text-center p-8 border border-foreground/10 rounded-2xl">
            <div className="text-5xl md:text-6xl font-bold text-foreground mb-4">100k+</div>
            <h3 className="text-xl font-medium text-foreground mb-2">Students Impacted</h3>
            <p className="text-foreground/60">
              Empowering the next generation with AI-driven learning
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TeamExperience;
