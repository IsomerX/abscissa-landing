"use client";

const TrustedBy = () => {
  const clients = [
    "Global Fintech Fest",
    "Homeland Group",
    "Healthcare Clinics",
    "Enterprise Clients"
  ];

  return (
    <section className="relative py-20 px-8">
      <div className="max-w-6xl mx-auto text-center">
        <p className="text-foreground/60 mb-12 text-lg">
          Trusted by industry leaders across sectors
        </p>
        
        <div className="flex flex-wrap items-center justify-center gap-12 md:gap-16 opacity-40">
          {clients.map((client, index) => (
            <div 
              key={index}
              className="text-xl font-medium text-foreground/80 hover:text-foreground transition-colors"
            >
              {client}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TrustedBy;
