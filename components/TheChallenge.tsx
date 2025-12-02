"use client";

import { Badge } from "@/components/ui/badge";
import { XCircle } from "lucide-react";

const TheChallenge = () => {
    const challenges = [
        {
            title: "Communication Fragmentation",
            description: "Critical updates lost across multiple WhatsApp groups and platforms."
        },
        {
            title: "Administrative Burden",
            description: "Teachers spending hours on manual tasks instead of teaching."
        },
        {
            title: "Language Barriers",
            description: "Non-English speaking parents excluded from their child's education."
        },
        {
            title: "Reactive Decisions",
            description: "Lack of predictive insights forcing reactive rather than proactive management."
        },
        {
            title: "No Personalization",
            description: "Generic learning support that fails to address individual student needs."
        },
        {
            title: "Safety Gaps",
            description: "Lack of real-time monitoring for critical services like transportation."
        }
    ];

    return (
        <section id="mission" className="py-24 bg-background">
            <div className="max-w-7xl mx-auto px-8">
                <div className="text-center mb-16">
                    <Badge variant="outline" className="mb-4 border-destructive/30 text-destructive">
                        The Innovation Gap
                    </Badge>
                    <h2 className="text-4xl md:text-5xl font-medium mb-6 text-foreground">
                        Why Traditional Systems <span className="font-serif italic text-destructive">Fail</span>
                    </h2>
                    <p className="text-xl text-foreground/70 max-w-3xl mx-auto">
                        While other industries embrace AI, education is held back by outdated tools from 2015.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {challenges.map((challenge, index) => (
                        <div key={index} className="p-8 rounded-2xl border border-foreground/10 bg-secondary/5 hover:bg-secondary/10 transition-colors">
                            <div className="flex items-start gap-4">
                                <XCircle className="w-6 h-6 text-destructive mt-1 flex-shrink-0" />
                                <div>
                                    <h3 className="text-xl font-semibold mb-2">{challenge.title}</h3>
                                    <p className="text-foreground/70 leading-relaxed">
                                        {challenge.description}
                                    </p>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default TheChallenge;
