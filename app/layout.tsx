import type { Metadata } from "next";
import { CookieBanner } from "@/components/CookieBanner";
import { Footer } from "@/components/layout/Footer";
import { Navbar } from "@/components/layout/Navbar";
import { StickyCTA } from "@/components/sections/StickyCTA";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL("https://bogackifizjoterapia.pl"),

  title: {
    default: "Bogacki Fizjoterapia | Skuteczna pomoc w bólu",
    template: "%s | Bogacki Fizjoterapia",
  },

  description:
    "Nowoczesna fizjoterapia w Katowicach i Mysłowicach. Diagnostyka, terapia manualna i indywidualny plan leczenia pomagający wrócić do sprawności.",

  keywords: [
    "fizjoterapia Katowice",
    "fizjoterapeuta Katowice",
    "rehabilitacja Katowice",
    "fizjoterapia Mysłowice",
    "terapia manualna",
    "kinesiotaping",
    "masaż relaksacyjny",
    "ból pleców",
    "rehabilitacja",
  ],

  authors: [
    {
      name: "Piotr Bogacki",
    },
  ],

  creator: "Mike Webworks",

  publisher: "Bogacki Fizjoterapia",

  category: "healthcare",

  icons: {
    icon: "/favicon.ico",
    shortcut: "/favicon.ico",
    apple: "/favicon.ico",
  },

  alternates: {
    canonical: "/",
  },

  robots: {
    index: true,
    follow: true,

    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-video-preview": -1,
      "max-snippet": -1,
    },
  },

  openGraph: {
    title: "Bogacki Fizjoterapia | Skuteczna pomoc w bólu",

    description:
      "Nowoczesna fizjoterapia w Katowicach i Mysłowicach. Umów wizytę i wróć do sprawności.",

    url: "https://bogackifizjoterapia.pl",

    siteName: "Bogacki Fizjoterapia",

    locale: "pl_PL",

    type: "website",

    images: [
      {
        url: "/opengraph-image.png",
        width: 1200,
        height: 630,
        alt: "Bogacki Fizjoterapia – skuteczna pomoc w bólu",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",

    title: "Bogacki Fizjoterapia | Skuteczna pomoc w bólu",

    description:
      "Nowoczesna fizjoterapia w Katowicach i Mysłowicach. Umów wizytę i wróć do sprawności.",

    images: ["/opengraph-image.png"],
  },
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
