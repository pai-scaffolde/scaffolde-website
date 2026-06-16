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
  title: "Scaffolde — The Independent AI Verification & Audit Plane",
  description:
    "A portable, tamper-evident record of what any AI system was asked, did, and proved — across Anthropic, OpenAI, and Google. The grader can't be the graded.",
  openGraph: {
    title: "Scaffolde — The Independent AI Verification & Audit Plane",
    description:
      "Cross-vendor proof of what an AI system was asked, did, and verified — attested by a party with no stake in the model's reputation. The grader can't be the graded.",
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
