import type { Metadata } from "next";
import { Cinzel, Cormorant_Garamond, Work_Sans } from "next/font/google";
import { SiteShell } from "@/components/site-shell";
import "./globals.css";

const cormorant = Cormorant_Garamond({
  variable: "--font-display",
  subsets: ["latin"],
  weight: ["500", "600", "700"],
});

const workSans = Work_Sans({
  variable: "--font-body",
  subsets: ["latin"],
  weight: ["400", "500", "600"],
});

const cinzel = Cinzel({
  variable: "--font-logo",
  subsets: ["latin"],
  weight: ["700", "800", "900"],
});

export const metadata: Metadata = {
  title: {
    default: "LYDesign",
    template: "%s | LYDesign",
  },
  description:
    "LYDesign creates refined residential and architectural spaces with a focus on composition, materiality, and atmosphere.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${cormorant.variable} ${workSans.variable} ${cinzel.variable}`}>
        <SiteShell>{children}</SiteShell>
      </body>
    </html>
  );
}
