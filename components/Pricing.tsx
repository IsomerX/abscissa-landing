"use client";

import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Check } from "lucide-react";

const Pricing = () => {
    const plans = [
        {
            name: "Silver",
            price: "₹60",
            description: "Core Essentials",
            features: [
                "Timetable & Attendance",
                "Student Records",
                "Report Card Generation",
                "Basic AI Learning Assistant",
                "Assignments & Homework",
                "In-app Notifications",
                "Fee Tracking & Management"
            ]
        },
        {
            name: "Gold",
            price: "₹85",
            description: "Advanced AI & Automation",
            popular: true,
            features: [
                "Everything in Silver",
                "Bilingual AI Assistant (Hindi + English)",
                "AI Voice Attendance",
                "OCR for Handwritten Notes",
                "Live Classes & Video Conferencing",
                "Real-time Bus Tracking",
                "Predictive Analytics"
            ]
        },
        {
            name: "Platinum",
            price: "₹100",
            description: "Premium Complete Ecosystem",
            features: [
                "Everything in Gold",
                "20+ Languages AI Support",
                "AI Career Guidance",
                "Navigation Mascot",
                "Gallery Face Recognition",
                "Library & Inventory Management",
                "Multi-School Management"
            ]
        }
    ];

    return (
        <section className="py-24 bg-secondary/5">
            <div className="max-w-7xl mx-auto px-8">
                <div className="text-center mb-16">
                    <Badge variant="outline" className="mb-4 border-accent/30 text-accent">
                        Pricing
                    </Badge>
                    <h2 className="text-4xl md:text-5xl font-medium mb-6 text-foreground">
                        Simple, Transparent <span className="font-serif italic text-accent">Pricing</span>
                    </h2>
                    <p className="text-xl text-foreground/70 max-w-3xl mx-auto">
                        Choose the plan that fits your institution's needs. Price per student/month.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {plans.map((plan, index) => (
                        <div
                            key={index}
                            className={`relative p-8 rounded-2xl border ${plan.popular ? 'border-accent bg-accent/5 shadow-lg' : 'border-foreground/10 bg-background'} transition-all duration-300 hover:border-accent/50`}
                        >
                            {plan.popular && (
                                <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-accent text-white px-4 py-1 rounded-full text-sm font-medium">
                                    Most Popular
                                </div>
                            )}

                            <div className="mb-8">
                                <h3 className="text-2xl font-semibold mb-2">{plan.name}</h3>
                                <p className="text-foreground/60 mb-4">{plan.description}</p>
                                <div className="flex items-baseline gap-1">
                                    <span className="text-2xl font-bold">Contact Us</span>
                                    {/* <span className="text-foreground/60">/student/month</span> */}
                                </div>
                            </div>

                            <div className="space-y-4 mb-8">
                                {plan.features.map((feature, i) => (
                                    <div key={i} className="flex items-start gap-3">
                                        <Check className="w-5 h-5 text-accent mt-0.5 flex-shrink-0" />
                                        <span className="text-foreground/80 text-sm">{feature}</span>
                                    </div>
                                ))}
                            </div>

                            <Button className={`w-full rounded-full ${plan.popular ? '' : 'variant-outline'}`} variant={plan.popular ? "default" : "outline"} asChild>
                                <a href="#contact">Contact Us</a>
                            </Button>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Pricing;
