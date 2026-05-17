"use client";

import Autoplay from "embla-carousel-autoplay";
import useEmblaCarousel from "embla-carousel-react";
import { Quote, Star } from "lucide-react";
import { Section } from "@/components/layout/Section";

const testimonials = [
  {
    initials: "AK",
    text: "Profesjonalne podejście, dokładne wyjaśnienie problemu i ćwiczenia, które realnie pomogły po kilku wizytach.",
  },
  {
    initials: "MR",
    text: "Bardzo spokojna atmosfera i konkretna terapia. Ból pleców po pracy siedzącej jest dużo mniejszy.",
  },
  {
    initials: "JP",
    text: "Plan rehabilitacji był jasny od początku. Czułem, że wiem, po co wykonuję każde ćwiczenie.",
  },
];

export function Testimonials() {
  const [emblaRef] = useEmblaCarousel({ loop: true, align: "start", dragFree: false, slidesToScroll: 1 }, [
    Autoplay({ delay: 3000, stopOnInteraction: false, stopOnMouseEnter: true }),
  ]);

  return (
    <Section tone="surface">
      <div className="grid gap-8 lg:grid-cols-[0.78fr_1fr] lg:items-end">
        <div>
          <p className="text-sm font-semibold uppercase tracking-[0.18em] text-[var(--color-primary)]">
            Opinie pacjentów
          </p>
          <h2 className="mt-4 font-[var(--font-display)] text-3xl font-semibold leading-tight text-[var(--color-primary)] sm:text-4xl lg:text-5xl">
            Spokojna, konkretna pomoc w powrocie do sprawności
          </h2>
        </div>
        <div className="rounded-[1.75rem] border border-[var(--color-border)] bg-white p-5 shadow-sm ring-1 ring-[var(--color-primary)]/5">
          <p className="text-sm font-semibold text-[var(--color-primary)]">Placeholder opinii inspirowany serwisami medycznymi</p>
          <p className="mt-2 text-sm leading-6 text-[var(--color-text-muted)]">
            Docelowo sekcja może być zasilana ręcznie z CMS lub połączona z zewnętrznym źródłem opinii.
          </p>
        </div>
      </div>
      <div className="mt-11 overflow-hidden py-2" ref={emblaRef}>
        <div className="-ml-5 flex">
          {testimonials.map((testimonial) => (
            <div key={testimonial.initials} className="min-w-0 flex-[0_0_88%] pl-5 md:flex-[0_0_47%] lg:flex-[0_0_31.5%]">
              <article className="relative h-full rounded-[1.75rem] border border-[var(--color-border)] bg-white p-7 shadow-[var(--shadow-card)] ring-1 ring-[var(--color-primary)]/5">
                <Quote className="absolute right-7 top-7 text-[var(--color-surface)]" size={38} fill="currentColor" />
                <div className="flex gap-1 text-[var(--color-primary)]" aria-label="Ocena 5 na 5">
                  {Array.from({ length: 5 }).map((_, index) => (
                    <Star key={index} size={17} fill="currentColor" />
                  ))}
                </div>
                <p className="mt-6 text-base leading-8 text-[var(--color-text)]">"{testimonial.text}"</p>
                <div className="mt-7 flex items-center gap-3 border-t border-[var(--color-border)] pt-5">
                  <div className="grid size-12 place-items-center rounded-full bg-[var(--color-primary)] text-sm font-semibold text-white">
                    {testimonial.initials}
                  </div>
                  <div>
                    <p className="text-sm font-semibold text-[var(--color-primary)]">Pacjent</p>
                    <p className="text-xs text-[var(--color-text-muted)]">Opinia placeholder</p>
                  </div>
                </div>
              </article>
            </div>
          ))}
        </div>
      </div>
    </Section>
  );
}
