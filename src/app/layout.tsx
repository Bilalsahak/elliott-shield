import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Elliott Shield | Premium Private Security — Seattle",
  description:
    "Elliott Shield provides calm, professional private security across Seattle and the Puget Sound. Commercial, residential, events, patrol, and executive protection. Protection that holds.",
  keywords: [
    "private security Seattle",
    "security guards Seattle",
    "event security Puget Sound",
    "executive protection Seattle",
    "mobile patrol Bellevue",
  ],
  openGraph: {
    title: "Elliott Shield | Protection that holds.",
    description:
      "Premium private security for commercial, residential, and events across Seattle and the greater Puget Sound.",
    url: "https://elliottshield.com",
    siteName: "Elliott Shield",
    locale: "en_US",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${inter.variable} h-full antialiased`}>
      <body className="min-h-full flex flex-col font-sans bg-white text-navy">
        {children}
      </body>
    </html>
  );
}
