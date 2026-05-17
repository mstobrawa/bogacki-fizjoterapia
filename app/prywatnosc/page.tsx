import type { Metadata } from "next";
import { Section } from "@/components/layout/Section";
import { BookingCtas } from "@/components/sections/BookingCtas";

export const metadata: Metadata = {
  title: "Polityka prywatności",
  description: "Poznaj politykę prywatności.",
};

export default function PrivatePage() {
  return (
    <Section>
      <div className="max-w-3xl">
        <p className="text-sm font-semibold uppercase tracking-[0.18em] text-[var(--color-primary)]">
          Polityka prywatności
        </p>
        <h1 className="mt-4 text-4xl font-semibold leading-tight text-[var(--color-primary)] sm:text-5xl lg:text-6xl">
          Dane przekazywane przez formularz kontaktowy
        </h1>
        <div className="mt-6 grid gap-4 text-lg leading-8 text-[var(--color-text-muted)]">
          <p>
            Dane z formularza kontaktowego są używane wyłącznie do odpowiedzi na zapytanie i organizacji kontaktu z
            gabinetem.
          </p>
          <p>
            Strona korzysta tylko z niezbędnych cookies potrzebnych do działania serwisu. Nie używamy cookies
            analitycznych ani marketingowych.
          </p>
        </div>
        <BookingCtas className="mt-8" />
      </div>
    </Section>
  );
}
