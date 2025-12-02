import type { Metadata } from "next";
import Script from "next/script";
import { Providers } from "./providers";
import "./globals.css";

export const metadata: Metadata = {
  title: "Abscissa AI | Revolutionizing Education Ecosystems",
  description: "Transform your institution with School Dost - India's first multilingual AI-powered school ecosystem. Voice-first, adaptive learning, and predictive analytics.",
  keywords: ["School ERP", "AI in Education", "School Dost", "Abscissa AI", "Education Technology", "LMS", "School Management System"],
  icons: {
    icon: "/favicon.svg",
    shortcut: "/favicon.svg",
    apple: "/favicon.svg",
  },
  openGraph: {
    title: "Abscissa AI | Revolutionizing Education Ecosystems",
    description: "Transform your institution with School Dost - India's first multilingual AI-powered school ecosystem.",
    type: "website",
    url: "https://abscissa.ai", // Assuming this is the domain
    siteName: "Abscissa AI",
  },
};

import Footer from "@/components/Footer";

// ... (imports)

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <Providers>{children}</Providers>
        <Footer />
        <Script
          id="apollo-tracker"
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{
            __html: `
              function initApollo(){
                var n=Math.random().toString(36).substring(7),
                o=document.createElement("script");
                o.src="https://assets.apollo.io/micro/website-tracker/tracker.iife.js?nocache="+n,
                o.async=!0,
                o.defer=!0,
                o.onload=function(){window.trackingFunctions.onLoad({appId:"691ade3b1f530500150547dd"})},
                document.head.appendChild(o)
              }
              initApollo();
            `,
          }}
        />
      </body>
    </html>
  );
}
