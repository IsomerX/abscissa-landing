"use client";

import { Badge } from "@/components/ui/badge";
import { TrendingUp, Users, Clock, Award, Zap, ShieldCheck } from "lucide-react";

const MeasurableImpact = () => {
    const impacts = [
        {
            icon: <TrendingUp className="w-8 h-8 text-green-500" />,
            area: "Fee Recovery",
            solution: "Smart reminders + defaulter prediction",
            outcome: "Increased timely collections"
        },
        {
            icon: <Users className="w-8 h-8 text-blue-500" />,
            area: "Parent Engagement",
            solution: "Bilingual voice assistant",
            outcome: "Higher satisfaction & referrals"
        },
        {
            icon: <Clock className="w-8 h-8 text-orange-500" />,
            area: "Teacher Productivity",
            solution: "Reports & lesson prep automation",
            outcome: "Reduced admin time"
        },
        {
            icon: <Award className="w-8 h-8 text-purple-500" />,
            area: "Academic Quality",
            solution: "Adaptive learning + AI tutor",
            outcome: "Improved results & rankings"
        },
        {
            icon: <Zap className="w-8 h-8 text-yellow-500" />,
            area: "Operational Efficiency",
            solution: "Automated analytics + alerts",
            outcome: "Reduced manual workload"
        },
        {
            icon: <ShieldCheck className="w-8 h-8 text-red-500" />,
            area: "School Reputation",
            solution: "AI-powered smart school branding",
            outcome: "Increased admissions & retention"
        }
    ];

    return (
        <section className="py-24 bg-secondary/5">
            <div className="max-w-7xl mx-auto px-8">
                <div className="text-center mb-16">
                    <Badge variant="outline" className="mb-4 border-accent/30 text-accent">
                        ROI
                    </Badge>
                    <h2 className="text-4xl md:text-5xl font-medium mb-6 text-foreground">
                        Measurable <span className="font-serif italic text-accent">Business Value</span>
                    </h2>
                    <p className="text-xl text-foreground/70 max-w-3xl mx-auto">
                        School Dost delivers tangible, quantifiable improvements across critical dimensions.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {impacts.map((item, index) => (
                        <div key={index} className="bg-background p-8 rounded-2xl border border-foreground/5 shadow-sm hover:shadow-md transition-shadow">
                            <div className="mb-6 bg-secondary/10 w-16 h-16 rounded-full flex items-center justify-center">
                                {item.icon}
                            </div>
                            <h3 className="text-xl font-semibold mb-2">{item.area}</h3>
                            <div className="space-y-2">
                                <p className="text-sm text-foreground/60">
                                    <span className="font-medium text-foreground/80">Solution:</span> {item.solution}
                                </p>
                                <p className="text-sm text-foreground/60">
                                    <span className="font-medium text-foreground/80">Outcome:</span> {item.outcome}
                                </p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default MeasurableImpact;
