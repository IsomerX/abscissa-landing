"use client";

import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ArrowRight, CheckCircle2, Globe, Brain, Users } from "lucide-react";

const SchoolDostSection = () => {
    return (
        <section id="schooldost" className="py-24 bg-secondary/30">
            <div className="max-w-7xl mx-auto px-8">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
                    <div className="space-y-8">
                        <Badge variant="outline" className="border-accent/30 text-accent">
                            Flagship Product
                        </Badge>

                        <h2 className="text-4xl md:text-5xl font-medium leading-tight">
                            Meet <span className="font-serif italic text-accent">School Dost</span>
                        </h2>

                        <p className="text-xl text-foreground/80 leading-relaxed">
                            India's First Multilingual AI-Powered School Ecosystem. We're not just digitizing schools—we're transforming how educational institutions operate, communicate, and deliver learning outcomes.
                        </p>

                        <div className="space-y-4">
                            <div className="flex items-start gap-3">
                                <Brain className="w-6 h-6 text-accent mt-1" />
                                <div>
                                    <h3 className="font-semibold text-lg">Voice-First Multilingual AI</h3>
                                    <p className="text-foreground/70">True bilingual support (Hindi + English) allowing parents to interact via voice or chat. Breaking language barriers for millions.</p>
                                </div>
                            </div>

                            <div className="flex items-start gap-3">
                                <Globe className="w-6 h-6 text-accent mt-1" />
                                <div>
                                    <h3 className="font-semibold text-lg">Adaptive AI Learning Companion</h3>
                                    <p className="text-foreground/70">Personalized tutoring across all subjects (CBSE/ICSE) that adapts to each student's learning pace and style.</p>
                                </div>
                            </div>

                            <div className="flex items-start gap-3">
                                <Users className="w-6 h-6 text-accent mt-1" />
                                <div>
                                    <h3 className="font-semibold text-lg">Teacher Productivity Revolution</h3>
                                    <p className="text-foreground/70">Voice attendance in 15 seconds, OCR for handwritten notes, and auto-generated reports to reclaim teaching time.</p>
                                </div>
                            </div>
                        </div>

                        <div className="pt-4">
                            <Button size="lg" className="rounded-full gap-2" asChild>
                                <a href="https://schooldost.in/" target="_blank" rel="noopener noreferrer">
                                    Visit School Dost Website <ArrowRight className="w-4 h-4" />
                                </a>
                            </Button>
                        </div>
                    </div>

                    <div className="relative">
                        {/* Product image */}
                        <div className="relative rounded-2xl overflow-hidden shadow-2xl border border-white/10 group">
                            <div className="absolute inset-0 bg-gradient-to-br from-accent/20 to-secondary/50 mix-blend-overlay z-10" />
                            <img
                                src="/assets/school-dost-dashboard.png"
                                alt="School Dost Dashboard"
                                className="w-full h-auto object-cover transform transition-transform duration-700 group-hover:scale-105"
                            />

                            {/* Decorative elements */}
                            <div className="absolute -top-12 -right-12 w-64 h-64 bg-accent/20 rounded-full blur-3xl group-hover:bg-accent/30 transition-colors duration-500 z-0" />
                            <div className="absolute -bottom-12 -left-12 w-64 h-64 bg-blue-500/20 rounded-full blur-3xl group-hover:bg-blue-500/30 transition-colors duration-500 z-0" />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default SchoolDostSection;
