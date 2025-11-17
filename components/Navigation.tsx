"use client";

import { Button } from "@/components/ui/button";
import { useState, useEffect } from "react";

const Navigation = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 px-8 py-2 transition-all duration-300 ${isScrolled ? "bg-gray-200 shadow-md" : "bg-transparent"
        }`}
    >
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        <a href="/" className="flex items-center gap-2">
          <img
            src="/logo.svg"
            alt="VORIQ AI"
            className={`h-6 w-auto transition-all duration-300 ${isScrolled ? "brightness-0" : "brightness-0 invert"}`}
          />
          {/* <span className={`text-xl font-semibold transition-colors duration-300 ${isScrolled ? "text-black" : "text-foreground" */}
          {/*   }`}>VORIQ AI</span> */}
        </a>

        <div className="hidden md:flex items-center gap-8">
          <a href="/#expertise" className={`transition-colors duration-300 ${isScrolled ? "text-black/70 hover:text-black" : "text-foreground/80 hover:text-foreground"
            }`}>
            Expertise
          </a>
          <a href="/solutions/ocr" className={`transition-colors duration-300 ${isScrolled ? "text-black/70 hover:text-black" : "text-foreground/80 hover:text-foreground"
            }`}>
            Solutions
          </a>
          <a href="/#projects" className={`transition-colors duration-300 ${isScrolled ? "text-black/70 hover:text-black" : "text-foreground/80 hover:text-foreground"
            }`}>
            Projects
          </a>
          <a href="/#contact" className={`transition-colors duration-300 ${isScrolled ? "text-black/70 hover:text-black" : "text-foreground/80 hover:text-foreground"
            }`}>
            Contact
          </a>
        </div>

        <Button variant="secondary" size="default" className="rounded-full">
          Get started
        </Button>
      </div>
    </nav>
  );
};

export default Navigation;
