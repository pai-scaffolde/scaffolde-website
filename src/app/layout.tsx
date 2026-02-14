import type { Metadata } from "next";
import { Inter, JetBrains_Mono, Outfit } from "next/font/google";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

const jetbrainsMono = JetBrains_Mono({
  variable: "--font-jetbrains",
  subsets: ["latin"],
});

const outfit = Outfit({
  variable: "--font-outfit",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Scaffolde — Your work, amplified.",
  description:
    "Personal AI infrastructure that makes professionals capable of extraordinary work. 34 skills, multi-agent orchestration, persistent memory, and self-improving architecture.",
  openGraph: {
    title: "Scaffolde — Your work, amplified.",
    description:
      "Personal AI infrastructure. 34 skills, 6 AI models, self-improving architecture.",
    siteName: "Scaffolde",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${inter.variable} ${jetbrainsMono.variable} ${outfit.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
