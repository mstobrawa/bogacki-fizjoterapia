import type { Metadata } from "next";
import { Mail, MapPin, Phone } from "lucide-react";
import { Section } from "@/components/layout/Section";
import { BookingCtas } from "@/components/sections/BookingCtas";
import { ContactForm } from "./ContactForm";

export const metadata: Metadata = {
  title: "Kontakt",
  description: "Umów wizytę fizjoterapeutyczną w Katowicach.",
};

const mapSrc =
  "https://www.google.com/maps?q=iDentysta%20Clinic%20Genera%C5%82a%20Zygmunta%20Waltera-Jankego%20275%2040-684%20Katowice&output=embed";

export default function ContactPage() {
  return (
    <Section>
      <div className="mx-auto max-w-6xl">
        <div className="max-w-3xl">
          <p className="text-sm font-semibold uppercase tracking-[0.18em] text-[var(--color-primary)]">
            Kontakt
          </p>
          <h1 className="mt-4 text-4xl font-semibold leading-tight text-[var(--color-primary)] sm:text-5xl lg:text-6xl">
            Umów wizytę lub zapytaj o terapię
          </h1>
          <p className="mt-6 max-w-2xl text-lg leading-8 text-[var(--color-text-muted)]">
            Krótko opisz problem, czas trwania dolegliwości i cel wizyty. To
            pomoże dobrać pierwszy krok terapii.
          </p>
        </div>

        <div className="mt-10 grid items-start gap-8 lg:grid-cols-[minmax(0,0.88fr)_minmax(0,1fr)] lg:gap-12">
          <div className="grid gap-6">
            <ContactForm />
            <div className="grid gap-3 rounded-[1.35rem] border border-[var(--color-border)] bg-white/90 p-4 text-sm shadow-sm">
              <a
                className="flex items-center gap-3 text-[var(--color-primary)] transition hover:text-[var(--color-accent)]"
                href="tel:+48505476614"
              >
                <Phone size={18} /> +48 505 476 614
              </a>
              <a
                className="flex items-center gap-3 text-[var(--color-primary)] transition hover:text-[var(--color-accent)]"
                href="mailto:bogackipiotr13@gmail.com"
              >
                <Mail size={18} /> bogackipiotr13@gmail.com
              </a>
              <p className="flex items-center gap-3 text-[var(--color-primary)]">
                <MapPin size={18} /> Generała Zygmunta Waltera-Jankego 275,
                Katowice
              </p>
            </div>
            <BookingCtas />
          </div>

          <div className="grid gap-5">
            <div className="overflow-hidden rounded-[1.75rem] border border-white/70 bg-white shadow-[var(--shadow-card)] ring-1 ring-[var(--color-primary)]/5">
              <iframe
                title="Mapa dojazdu do gabinetu Bogacki Fizjoterapia"
                src={mapSrc}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                className="h-[18rem] w-full border-0 sm:h-[22rem] lg:h-[24rem]"
              />
            </div>
          </div>
        </div>
      </div>
    </Section>
  );
}
