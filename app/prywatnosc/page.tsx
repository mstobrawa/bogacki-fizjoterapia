import type { Metadata } from "next";
import { Section } from "@/components/layout/Section";
import { Button } from "@/components/ui/Button";

export const metadata: Metadata = {
  title: "Polityka prywatności",
  description: "Poznaj polityke prywatności.",
};

export default function PrivatePage() {
  return (
    <Section>
      <div className="grid gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:gap-16">
        <div>
          <p className="text-sm font-semibold uppercase tracking-[0.18em] text-(--color-primary)">
            Polityka prywatności
          </p>
          <h1 className="mt-4 text-4xl font-semibold leading-tight text-(--color-primary) sm:text-5xl lg:text-6xl">
            Umów wizytę lub zapytaj o terapię
          </h1>
          <p className="mt-6 text-lg leading-8 text-(--color-text-muted)">
            Krótko opisz problem, czas trwania dolegliwości i cel wizyty. To
            pomoże dobrać pierwszy krok terapii.
          </p>
          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <Button href="tel:+48123456789">Zadzwoń</Button>
            <Button href="mailto:kontakt@bogackifizjo.pl" variant="secondary">
              Napisz wiadomość
            </Button>
          </div>
        </div>
      </div>
    </Section>
  );
}
