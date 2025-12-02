"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Badge } from "@/components/ui/badge";
import { useToast } from "@/hooks/use-toast";
import { sendContactEmail } from "@/app/actions/send-email";

const Contact = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { toast } = useToast();

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);

    const form = e.currentTarget;
    const formData = new FormData(form);

    try {
      const result = await sendContactEmail(formData);

      if (!result.success) {
        throw new Error(result.error);
      }

      toast({
        title: "Message sent!",
        description: "We'll get back to you as soon as possible.",
      });
      form.reset();
    } catch (error) {
      console.log(error);
      toast({
        title: "Error",
        description: error instanceof Error ? error.message : "Failed to send message. Please try again.",
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="contact" className="bg-background py-32">
      <div className="max-w-7xl mx-auto px-8">
        <div className="max-w-3xl mx-auto">
          <div className="text-center mb-12">
            <Badge variant="outline" className="mb-4 border-accent/30 text-accent">
              Get in Touch
            </Badge>
            <h2 className="text-5xl md:text-6xl font-medium mb-6 text-foreground">
              Join the Education{" "}
              <span className="font-serif italic text-accent" style={{ fontFamily: "'Source Serif 4', serif" }}>
                Revolution
              </span>
            </h2>
            <p className="text-xl text-foreground/70">
              Ready to transform your school's ecosystem? Schedule a consultation with our team.
            </p>
          </div>

          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="space-y-2">
                <label htmlFor="name" className="text-sm font-medium text-foreground">
                  Name
                </label>
                <Input
                  id="name"
                  name="name"
                  placeholder="John Doe"
                  required
                  className="bg-background/50 border-foreground/20"
                />
              </div>
              <div className="space-y-2">
                <label htmlFor="email" className="text-sm font-medium text-foreground">
                  Email
                </label>
                <Input
                  id="email"
                  name="email"
                  type="email"
                  placeholder="john@school.edu"
                  required
                  className="bg-background/50 border-foreground/20"
                />
              </div>
            </div>

            <div className="space-y-2">
              <label htmlFor="company" className="text-sm font-medium text-foreground">
                Institution / Organization
              </label>
              <Input
                id="company"
                name="company"
                placeholder="Your School or Institution"
                className="bg-background/50 border-foreground/20"
              />
            </div>

            <div className="space-y-2">
              <label htmlFor="message" className="text-sm font-medium text-foreground">
                Message
              </label>
              <Textarea
                id="message"
                name="message"
                placeholder="Tell us about your current challenges..."
                required
                rows={6}
                className="bg-background/50 border-foreground/20 resize-none"
              />
            </div>

            <Button
              type="submit"
              size="lg"
              className="w-full rounded-full"
              disabled={isSubmitting}
            >
              {isSubmitting ? "Sending..." : "Send Message"}
            </Button>
          </form>

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
