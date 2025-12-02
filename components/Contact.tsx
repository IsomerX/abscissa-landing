"use client";

import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";

const Contact = () => {
  return (
    <section id="contact" className="bg-background py-32">
      <div className="max-w-7xl mx-auto px-8">
        <div className="max-w-3xl mx-auto text-center">
          <div className="mb-12">
            <Badge variant="outline" className="mb-4 border-accent/30 text-accent">
              Get in Touch
            </Badge>
            <h2 className="text-5xl md:text-6xl font-medium mb-6 text-foreground">
              Join the Education{" "}
              <span className="font-serif italic text-accent" style={{ fontFamily: "'Source Serif 4', serif" }}>
                Revolution
              </span>
            </h2>
            <p className="text-xl text-foreground/70 mb-12">
              Ready to transform your school's ecosystem? Schedule a consultation with our team.
            </p>

            <Button size="lg" className="rounded-full text-lg px-8 py-6" asChild>
              <a href="https://calendly.com/sanyajolly7/ai-school-revolution" target="_blank" rel="noopener noreferrer">
                Schedule a Consultation
              </a>
            </Button>
          </div>

          <div className="mt-12 text-center">
            <p className="text-foreground/60 mb-2">Or email us directly at</p>
            <a
              href="mailto:contact@abscissa.ai"
              className="text-xl font-medium text-accent hover:underline"
            >
              contact@abscissa.ai
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
