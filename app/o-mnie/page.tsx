import type { Metadata } from "next";
import { AlternatingSection } from "@/components/sections/AlternatingSection";
import { PlaceholderImage } from "@/components/ui/PlaceholderImage";
import { Section } from "@/components/layout/Section";
import { Button } from "@/components/ui/Button";
export const metadata: Metadata = {
  title: "O mnie",
  description:
    "Poznaj podejście do fizjoterapii w gabinecie Bogacki Fizjoterapia w Katowicach.",
};
export default function AboutPage() {
  return (
    <>
      <Section>
        <div className="grid items-center gap-10 lg:grid-cols-[0.95fr_1.05fr] lg:gap-16">
          <PlaceholderImage
            src="/ja.webp"
            label="Piotr Bogacki"
            variant="portrait"
          />
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.18em] text-[var(--color-primary)]">
              O mnie
            </p>
            <h1 className="mt-4 font-[var(--font-display)] text-4xl font-semibold leading-tight text-[var(--color-primary)] sm:text-5xl">
              Fizjoterapia oparta o uważność, edukację i realny plan
            </h1>
            <p className="mt-6 text-lg leading-8 text-[var(--color-text-muted)]">
              Pomagam pacjentom odzyskiwać sprawność po urazach, zmniejszać ból
              i lepiej rozumieć swoje ciało. Stawiam na spokojną diagnostykę,
              jasną komunikację i terapię, którą można kontynuować poza
              gabinetem.
            </p>
            <div className="mt-8">
              <Button href="/kontakt">Umów wizytę</Button>
            </div>
          </div>
        </div>
      </Section>
      <Section tone="surface">
        <AlternatingSection
          title="Doświadczenie, które przekłada się na prostą komunikację"
          description="Pacjent powinien wiedzieć, co robimy, dlaczego to robimy i jak mierzymy postęp. Dlatego każda terapia kończy się konkretnymi zaleceniami oraz planem kolejnych kroków."
          imagePosition="right"
        />
      </Section>
    </>
  );
}
