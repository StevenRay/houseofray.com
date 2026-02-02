import type { Metadata } from "next";
import { Playfair_Display, Inter } from "next/font/google";
import "./globals.css";
import { Header } from "@/components/header";
import { Footer } from "@/components/footer";

const playfair = Playfair_Display({
  variable: "--font-playfair",
  subsets: ["latin"],
  display: "swap",
});

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Nycole Ray | Choreographer, Dancer, Educator",
  description:
    "Nycole Ray is a choreographer, dancer, and educator based in Dallas, Texas. Commissions, residencies, master classes, and speaking engagements.",
  metadataBase: new URL("https://nycoleray.com"),
  openGraph: {
    title: "Nycole Ray | Choreographer, Dancer, Educator",
    description:
      "Nycole Ray is a choreographer, dancer, and educator based in Dallas, Texas.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${playfair.variable} ${inter.variable}`}>
      <head>
        <meta name="theme-color" content="#FDF8F3" />
      </head>
      <body className="min-h-screen flex flex-col bg-cream text-purple-dark antialiased">
        <a
          href="#main-content"
          className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 focus:z-50 focus:px-4 focus:py-2 focus:bg-purple focus:text-cream focus:rounded"
        >
          Skip to main content
        </a>
        <Header />
        <main id="main-content" className="flex-1">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
