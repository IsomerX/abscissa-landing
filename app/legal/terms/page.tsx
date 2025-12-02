import { Badge } from "@/components/ui/badge";
import Navigation from "@/components/Navigation";

export default function TermsOfService() {
    return (
        <div className="min-h-screen bg-background text-foreground">
            <Navigation />
            <div className="py-32 px-8">
                <div className="max-w-4xl mx-auto">
                    <div className="mb-12">
                        <Badge variant="outline" className="mb-4 border-accent/30 text-accent">
                            Legal
                        </Badge>
                        <h1 className="text-4xl md:text-5xl font-medium mb-6">Terms of Service</h1>
                        <p className="text-foreground/60">Last Updated: December 2025</p>
                    </div>

                    <div className="space-y-12 text-foreground/80 leading-relaxed">
                        <section>
                            <h2 className="text-2xl font-semibold text-foreground mb-4">1. Acceptance of Terms</h2>
                            <p>
                                By accessing or using the School Dost platform, you agree to be bound by these Terms of Service. If you do not agree to these terms, please do not use our services.
                            </p>
                        </section>

                        <section>
                            <h2 className="text-2xl font-semibold text-foreground mb-4">2. Use of Services</h2>
                            <p>
                                School Dost provides an AI-powered school management ecosystem. You agree to use the platform only for lawful purposes and in accordance with these terms. You are responsible for maintaining the confidentiality of your account credentials.
                            </p>
                        </section>

                        <section>
                            <h2 className="text-2xl font-semibold text-foreground mb-4">3. AI Credits & Usage</h2>
                            <p>
                                Certain features of School Dost, such as the Voice Assistant, consume AI Credits.
                            </p>
                            <ul className="list-disc pl-6 space-y-2 mt-2">
                                <li><strong>1 Credit</strong> = 1 voice interaction or 1 chat message.</li>
                                <li>Base credits are included in your plan (Silver, Gold, Platinum).</li>
                                <li>Additional credits can be purchased as needed.</li>
                                <li>Unused credits do not roll over to the next month unless specified.</li>
                            </ul>
                        </section>

                        <section>
                            <h2 className="text-2xl font-semibold text-foreground mb-4">4. Subscription & Payments</h2>
                            <p>
                                Schools subscribe to one of our plans (Silver, Gold, Platinum). Fees are billed monthly or annually as per the agreement. Failure to pay may result in suspension of services.
                            </p>
                        </section>

                        <section>
                            <h2 className="text-2xl font-semibold text-foreground mb-4">5. Intellectual Property</h2>
                            <p>
                                The School Dost platform, including its code, design, and AI models, is the property of Abscissa AI. You are granted a limited, non-exclusive license to use the platform for your institution's operations.
                            </p>
                        </section>

                        <section>
                            <h2 className="text-2xl font-semibold text-foreground mb-4">6. Limitation of Liability</h2>
                            <p>
                                School Dost is provided "as is." We are not liable for any indirect, incidental, or consequential damages arising from your use of the platform, including data loss or service interruptions.
                            </p>
                        </section>

                        <section>
                            <h2 className="text-2xl font-semibold text-foreground mb-4">7. Contact Us</h2>
                            <p>
                                For any legal inquiries, please contact us at: <a href="mailto:contact@abscissa.ai" className="text-accent hover:underline">contact@abscissa.ai</a>
                            </p>
                        </section>
                    </div>
                </div>
            </div>
        </div>
    );
}
