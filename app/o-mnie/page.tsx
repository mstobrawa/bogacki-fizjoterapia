import type { Metadata } from "next";
import { Section } from "@/components/layout/Section";
import { AlternatingSection } from "@/components/sections/AlternatingSection";
import { BookingCtas } from "@/components/sections/BookingCtas";
import { PlaceholderImage } from "@/components/ui/PlaceholderImage";

export const metadata: Metadata = {
  title: "O mnie",
  description:
    "Poznaj podejście do fizjoterapii w gabinecie Bogacki Fizjoterapia w Katowicach.",
};

export default function AboutPage() {
  return (
    <>
      <Section tone="surface">
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
              Nazywam się Piotr Bogacki i jestem absolwentem Śląskiego
              Uniwersytetu Medycznego na kierunku fizjoterapia. W obszarze moich
              zainteresowań zawodowych znajduje się przede wszystkim terapia
              przeciwbólowa urazów przewlekłych oraz biomechanika układu ruchu.
              Wierzę, że prawidłowo postawiona diagnoza jest kluczem zarówno do
              leczenia bólu, jak i poprawy innych aspektów zdrowotnych — od
              ograniczeń ruchomości po względy estetyczne. W swojej praktyce
              stawiam na indywidualne podejście i atmosferę sprzyjającą terapii,
              pamiętając jednocześnie, że najważniejszy pozostaje efekt końcowy
              rehabilitacji. Poniżej przedstawiam wykaz dyplomów i certyfikatów
              potwierdzających moje kwalifikacje oraz rozwój zawodowy. Ich
              liczba będzie się stopniowo zwiększać wraz z dalszym poszerzaniem
              wiedzy i doświadczenia. Jeśli uznają mnie Państwo za osobę godną
              zaufania — zapraszam do kontaktu.
            </p>
            <BookingCtas className="mt-8" />
          </div>
        </div>
      </Section>
      {/* <Section tone="surface">
        <AlternatingSection
          title="Doświadczenie, które przekłada się na prostą komunikację"
          description="Pacjent powinien wiedzieć, co robimy, dlaczego to robimy i jak mierzymy postęp. Dlatego każda terapia kończy się konkretnymi zaleceniami oraz planem kolejnych kroków."
          imagePosition="right"
        />
      </Section> */}
    </>
  );
}
