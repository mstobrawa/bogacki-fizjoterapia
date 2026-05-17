import type { Metadata } from "next";
import { Mail, MapPin, Phone } from "lucide-react";
import { Section } from "@/components/layout/Section";
import { BookingCtas } from "@/components/sections/BookingCtas";
import { PlaceholderImage } from "@/components/ui/PlaceholderImage";
import { ContactForm } from "./ContactForm";

export const metadata: Metadata = {
  title: "Kontakt",
  description: "Umów wizytę fizjoterapeutyczną w Katowicach.",
};

export default function ContactPage() {
  return (
    <Section>
      <div className="grid gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:gap-16">
        <div>
          <p className="text-sm font-semibold uppercase tracking-[0.18em] text-[var(--color-primary)]">
            Kontakt
          </p>
          <h1 className="mt-4 text-4xl font-semibold leading-tight text-[var(--color-primary)] sm:text-5xl lg:text-6xl">
            Umów wizytę lub zapytaj o terapię
          </h1>
          <p className="mt-6 text-lg leading-8 text-[var(--color-text-muted)]">
            Krótko opisz problem, czas trwania dolegliwości i cel wizyty. To pomoże dobrać pierwszy krok terapii.
          </p>
          <div className="mt-8 grid gap-4 rounded-[1.75rem] border border-[var(--color-border)] bg-white p-5 shadow-[var(--shadow-card)]">
            <a
              className="flex items-center gap-3 text-[var(--color-primary)] transition hover:text-[var(--color-accent)]"
              href="tel:+48123456789"
            >
              <Phone size={20} /> +48 123 456 789
            </a>
            <a
              className="flex items-center gap-3 text-[var(--color-primary)] transition hover:text-[var(--color-accent)]"
              href="mailto:kontakt@bogackifizjo.pl"
            >
              <Mail size={20} /> kontakt@bogackifizjo.pl
            </a>
            <p className="flex items-center gap-3 text-[var(--color-primary)]">
              <MapPin size={20} /> Katowice, woj. śląskie
            </p>
          </div>
          <BookingCtas className="mt-8" />
          <div className="mt-8">
            <PlaceholderImage label="Mapa i wejście do gabinetu" />
          </div>
        </div>
        <ContactForm />
      </div>
    </Section>
  );
}
