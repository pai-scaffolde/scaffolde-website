import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geist = Geist({
  variable: "--font-geist",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  display: "swap",
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Scaffolde: Independent proof of what your AI actually did",
  description:
    "Scaffolde is the independent verification and audit plane for AI-native teams. Tamper-evident proof of what every model, agent, and workflow was asked, did, and proved: across Anthropic, OpenAI, Google, xAI, and open-source models.",
  openGraph: {
    title: "Scaffolde: Independent proof of what your AI actually did",
    description:
      "The independent AI verification & audit plane. Tamper-evident proof of what every model, agent, and workflow was asked, did, and proved: Anthropic, OpenAI, Google, xAI, open-source. The grader can't be the graded.",
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
      <head>
        {/* Satoshi (display) via Fontshare — Geist + Geist Mono are self-hosted via next/font */}
        <link
          href="https://api.fontshare.com/v2/css?f[]=satoshi@500,700,900&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className={`${geist.variable} ${geistMono.variable}`}>
        {children}
      </body>
    </html>
  );
}
