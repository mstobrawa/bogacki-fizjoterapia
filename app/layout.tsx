import type { Metadata } from "next";
import { CookieBanner } from "@/components/CookieBanner";
import { Footer } from "@/components/layout/Footer";
import { Navbar } from "@/components/layout/Navbar";
import { StickyCTA } from "@/components/sections/StickyCTA";
import "./globals.css";

export const metadata: Metadata = {
  title: {
    default: "Bogacki Fizjoterapia | Skuteczna pomoc w bólu",
    template: "%s | Bogacki Fizjoterapia",
  },
  description:
    "Nowoczesna fizjoterapia w Katowicach: rehabilitacja, terapia manualna, kinesiotaping i masaż relaksacyjny.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pl">
      <body>
        <Navbar />
        <main className="flex-1">{children}</main>
        <Footer />
        <CookieBanner />
        <StickyCTA />
      </body>
    </html>
  );
}
