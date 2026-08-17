import type { Metadata, Viewport } from "next";
import { Bodoni_Moda, Cormorant_Garamond, Outfit } from "next/font/google";
import { GrainOverlay } from "@/components/grain-overlay";
import { SiteFooter } from "@/components/site-footer";
import { SiteHeader } from "@/components/site-header";
import { site } from "@/lib/data";
import "./globals.css";

const outfit = Outfit({
  subsets: ["latin"],
  variable: "--font-outfit",
});

const bodoni = Bodoni_Moda({
  subsets: ["latin"],
  variable: "--font-bodoni",
});

const cormorant = Cormorant_Garamond({
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  style: ["normal", "italic"],
  variable: "--font-cormorant",
});

export const viewport: Viewport = {
  themeColor: "#000000",
  colorScheme: "dark",
};

export const metadata: Metadata = {
  metadataBase: new URL("https://thepublicritual.com"),
  title: {
    default: "Public Ritual",
    template: "%s — Public Ritual",
  },
  description: site.description,
  keywords: [
    "Public Ritual",
    "electronic music",
    "house music",
    "Austin",
    "record label",
    "Lucien Varelli",
  ],
  openGraph: {
    title: "Public Ritual",
    description: site.description,
    type: "website",
    locale: "en_US",
    url: "https://thepublicritual.com",
    siteName: "Public Ritual",
  },
  icons: {
    icon: [
      { url: "/favicon.ico?v=3", sizes: "48x48" },
      { url: "/icon.png?v=3", type: "image/png", sizes: "512x512" },
    ],
    apple: [{ url: "/apple-icon.png?v=3", sizes: "180x180" }],
    shortcut: "/favicon.ico?v=3",
  },
  twitter: {
    card: "summary_large_image",
    title: "Public Ritual",
    description: site.tagline,
  },
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en"
      className={`${outfit.variable} ${bodoni.variable} ${cormorant.variable} h-full antialiased`}
    >
      <body className="min-h-full bg-black font-sans text-foreground">
        <GrainOverlay />
        <SiteHeader />
        <main id="content" className="flex min-h-full flex-col">
          {children}
        </main>
        <SiteFooter />
      </body>
    </html>
  );
}
