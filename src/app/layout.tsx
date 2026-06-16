import type { Metadata } from "next";
import { JetBrains_Mono, Newsreader } from "next/font/google";
import "./globals.css";

const newsreader = Newsreader({
  variable: "--font-newsreader",
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  style: ["normal", "italic"],
});

const jetbrainsMono = JetBrains_Mono({
  variable: "--font-jetbrains",
  subsets: ["latin"],
  weight: ["400", "500", "700"],
});

export const metadata: Metadata = {
  title: "Scaffolde — Personal AI Capability Factory",
  description:
    "Define, dispatch, coordinate, verify, and learn across agents, skills, memory, surfaces, and proof loops. The operating model that runs above the frameworks.",
  openGraph: {
    title: "Scaffolde — Personal AI Capability Factory",
    description:
      "158 skills · 41 agents · 7 providers · 12 surfaces. AI infrastructure for agents that actually do work.",
    siteName: "Scaffolde",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" data-theme="dark">
      <head>
        <link rel="preconnect" href="https://fonts.bunny.net" />
        <link
          href="https://fonts.bunny.net/css?family=newsreader:400,500,600|jetbrains-mono:400,500,700"
          rel="stylesheet"
        />
      </head>
      <body
        className={`${newsreader.variable} ${jetbrainsMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
