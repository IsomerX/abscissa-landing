"use client";

const Footer = () => {
    return (
        <footer className="bg-background border-t border-foreground/10 py-12">
            <div className="max-w-7xl mx-auto px-8 flex flex-col md:flex-row justify-between items-center gap-6">
                <div className="text-center md:text-left">
                    <h3 className="text-xl font-bold text-foreground mb-2">Abscissa AI</h3>
                    <p className="text-sm text-foreground/60">
                        Revolutionizing Education Ecosystems
                    </p>
                </div>

                <div className="flex gap-8 text-sm text-foreground/70">
                    <a href="/legal/privacy" className="hover:text-accent transition-colors">
                        Privacy Policy
                    </a>
                    <a href="/legal/terms" className="hover:text-accent transition-colors">
                        Terms of Service
                    </a>
                    <a href="https://schooldost.in/" target="_blank" rel="noopener noreferrer" className="hover:text-accent transition-colors">
                        School Dost
                    </a>
                </div>

                <div className="text-sm text-foreground/40">
                    © {new Date().getFullYear()} Abscissa AI. All rights reserved.
                </div>
            </div>
        </footer>
    );
};

export default Footer;
