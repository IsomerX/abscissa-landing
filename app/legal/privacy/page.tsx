import { Badge } from "@/components/ui/badge";
import Navigation from "@/components/Navigation";

export default function PrivacyPolicy() {
    return (
        <div className="min-h-screen bg-background text-foreground">
            <Navigation />
            <div className="py-32 px-8">
                <div className="max-w-4xl mx-auto">
                    <div className="mb-12">
                        <Badge variant="outline" className="mb-4 border-accent/30 text-accent">
                            Legal
                        </Badge>
                        <h1 className="text-4xl md:text-5xl font-medium mb-6">Privacy Policy</h1>
                        <p className="text-foreground/60">Last Updated: December 2025</p>
                    </div>

                    <div className="space-y-12 text-foreground/80 leading-relaxed">
                        <section>
                            <h2 className="text-2xl font-semibold text-foreground mb-4">1. Introduction</h2>
                            <p>
                                Welcome to School Dost ("we," "our," or "us"). We are committed to protecting the privacy and security of the data entrusted to us by schools, parents, students, and teachers. This Privacy Policy explains how we collect, use, and safeguard your information when you use our AI-powered school ecosystem.
                            </p>
                        </section>

                        <section>
                            <h2 className="text-2xl font-semibold text-foreground mb-4">2. Information We Collect</h2>
                            <ul className="list-disc pl-6 space-y-2">
                                <li><strong>Student Data:</strong> Academic records, attendance, assignments, and learning progress.</li>
                                <li><strong>Parent/Guardian Data:</strong> Contact information, communication history, and payment details.</li>
                                <li><strong>Voice & Interaction Data:</strong> Voice commands and chat interactions with our AI assistant (for processing and improvement purposes).</li>
                                <li><strong>Device Information:</strong> IP address, browser type, and usage patterns.</li>
                            </ul>
                        </section>

                        <section>
                            <h2 className="text-2xl font-semibold text-foreground mb-4">3. How We Use Your Information</h2>
                            <p>We use the collected data to:</p>
                            <ul className="list-disc pl-6 space-y-2 mt-2">
                                <li>Provide and improve the School Dost platform and AI features.</li>
                                <li>Personalize learning experiences for students.</li>
                                <li>Facilitate communication between schools and parents.</li>
                                <li>Process fee payments and generate invoices.</li>
                                <li>Ensure the security and integrity of our ecosystem.</li>
                            </ul>
                        </section>

                        <section>
                            <h2 className="text-2xl font-semibold text-foreground mb-4">4. AI & Data Processing</h2>
                            <p>
                                Our platform utilizes advanced Artificial Intelligence (AI) to provide features like voice assistance, adaptive learning, and predictive analytics. Data processed by our AI models is handled with strict confidentiality and is not sold to third parties. Voice data may be processed to improve recognition accuracy but is anonymized where possible.
                            </p>
                        </section>

                        <section>
                            <h2 className="text-2xl font-semibold text-foreground mb-4">5. Data Security</h2>
                            <p>
                                We implement industry-standard security measures, including encryption, access controls, and regular security audits, to protect your data from unauthorized access, disclosure, or misuse.
                            </p>
                        </section>

                        <section>
                            <h2 className="text-2xl font-semibold text-foreground mb-4">6. Contact Us</h2>
                            <p>
                                If you have any questions about this Privacy Policy, please contact us at: <a href="mailto:contact@abscissa.ai" className="text-accent hover:underline">contact@abscissa.ai</a>
                            </p>
                        </section>
                    </div>
                </div>
            </div>
        </div>
    );
}
