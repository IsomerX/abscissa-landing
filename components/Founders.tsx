"use client";

import Image from "next/image";
import { Badge } from "@/components/ui/badge";

const Founders = () => {
    const founders = [
        {
            name: "Sanya Jolly",
            role: "Founder & CEO",
            bio: "Visionary leader transforming EdTech. Combines business acumen with technical expertise to build tools that adapt to students.",
            image: "/assets/placeholder-founder.jpg" // Placeholder
        },
        {
            name: "Raghav Mandhana",
            role: "Co-Founder & CIO",
            bio: "Tech architect bridging schools and the future. Expert in scalable architecture ensuring seamless AI infrastructure.",
            image: "/assets/placeholder-founder.jpg" // Placeholder
        },
        {
            name: "Dhruv Bakshi",
            role: "Co-Founder & CTO",
            bio: "AI pioneer driving innovation. Redefining classrooms as hubs of possibility with deep expertise in AI and full-stack dev.",
            image: "/assets/placeholder-founder.jpg" // Placeholder
        }
    ];

    return (
        <section className="py-24 bg-background">
            <div className="max-w-7xl mx-auto px-8">
                <div className="text-center mb-16">
                    <Badge variant="outline" className="mb-4 border-accent/30 text-accent">
                        Leadership
                    </Badge>
                    <h2 className="text-4xl md:text-5xl font-medium mb-6 text-foreground">
                        Meet the <span className="font-serif italic text-accent">Innovators</span>
                    </h2>
                    <p className="text-xl text-foreground/70 max-w-3xl mx-auto">
                        Built by a passionate team of entrepreneurs and technologists committed to transforming Indian education.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
                    {founders.map((founder, index) => (
                        <div key={index} className="text-center group">
                            <div className="relative w-48 h-48 mx-auto mb-6 rounded-full overflow-hidden border-4 border-secondary/20 group-hover:border-accent/50 transition-colors duration-300">
                                <div className="absolute inset-0 bg-secondary/20 animate-pulse" /> {/* Placeholder for image */}
                                {/* <Image src={founder.image} alt={founder.name} fill className="object-cover" /> */}
                            </div>
                            <h3 className="text-2xl font-semibold mb-2">{founder.name}</h3>
                            <p className="text-accent font-medium mb-4">{founder.role}</p>
                            <p className="text-foreground/70 leading-relaxed max-w-sm mx-auto">
                                {founder.bio}
                            </p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Founders;
