import type { Metadata } from "next";
import { Inter, JetBrains_Mono, Outfit } from "next/font/google";
import "./globals.css";

const inter = Inter({ variable: "--font-inter", subsets: ["latin"] });
const jetbrainsMono = JetBrains_Mono({ variable: "--font-jetbrains", subsets: ["latin"] });
const outfit = Outfit({ variable: "--font-outfit", subsets: ["latin"] });

export const metadata: Metadata = {
  metadataBase: new URL("https://scaffolde.ai"),
  title: {
    default: "Scaffolde — AI infrastructure for agents that actually do work",
    template: "%s — Scaffolde",
  },
  description:
    "Scaffolde is a personal AI capability factory for agents, memory, workflows, skills, surfaces, verification, and improvement loops.",
  alternates: { canonical: "/" },
  openGraph: {
    title: "Scaffolde — AI infrastructure for agents that actually do work",
    description:
      "A proof-driven operating manual for building and running useful AI agents with memory, workflows, verification, and improvement loops.",
    url: "https://scaffolde.ai",
    siteName: "Scaffolde",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Scaffolde",
    description: "AI infrastructure for agents that actually do work.",
  },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" data-scroll-behavior="smooth">
      <body className={`${inter.variable} ${jetbrainsMono.variable} ${outfit.variable} antialiased`}>
        {children}
      </body>
    </html>
  );
}
