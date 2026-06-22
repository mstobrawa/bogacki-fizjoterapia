"use client";

import Autoplay from "embla-carousel-autoplay";
import useEmblaCarousel from "embla-carousel-react";
import { Quote, Star } from "lucide-react";
import { Section } from "@/components/layout/Section";

const testimonials = [
  {
    initials: "Anna",
    text: "Wizyta przebiegła w miłej i profesjonalnej atmosferze. Pan Piotr wszystko dokładnie wyjaśnił, uważnie wysłuchał problemu i dobrał odpowiednie ćwiczenia oraz terapię. Już po pierwszych wizytach odczułam wyraźną poprawę. Widać duże doświadczenie, indywidualne podejście do pacjenta i realne zaangażowanie w proces leczenia. Zdecydowanie wrócę i polecam każdemu, kto szuka skutecznej rehabilitacji.",
  },
  {
    initials: "Michał",
    text: "Bardzo profesjonalnie. Punktualnie. Wszystko zostało mi dokładnie wyjaśnione, ze szczegółami. Jestem bardzo zadowolony z pierwszej wizyty. Mogę polecić z czystym sumieniem.",
  },
  {
    initials: "Aleksandra",
    text: "Profesjonalna wizyta, wnikliwe dopytanie pacjenta, dokładna diagnostyka i super wytłumaczone ćwiczenia do robienia w domu, polecam",
  },
  {
    initials: "MM",
    text: "Profesjonalne podejście, ogromna wiedza oraz empatia. Fizjoterapia została dopasowana do moich potrzeb. Po kilku wizytach odczułem znaczą poprawę, a dolegliwości bólowe zmalały. Dziękuję za pomoc i zaangażowanie Pana Piotra",
  },
  {
    initials: "Paweł",
    text: "Pan Piotr jest bardzo dobrym fizjoterapeutą, który na pierwszej wizycie przeprowadza szczegółowy wywiad z pacjentem i odrazu po tym przystępuje do profesjonalnego masażu. Jestem po pierwszej wizycie u Pana Piotra i jestem bardzo zadowolony. Gorąco polecam.",
  },
  {
    initials: "Agnieszka Ga",
    text: "Bardzo mily ,kompetentny fizjoterapeuta. Wszystko wyjaśnił zrozumiale",
  },
  {
    initials: "Tomasz",
    text: "Czuje sie zrehabilitowany!!! Wizyta udana, na pewno umowie sie na kolejna.",
  },
  {
    initials: "ms",
    text: "profesjonalna i dokładna konsultacja, konkretne zalecenia odn leczenia, ustalona wizyta kontrolna, serdecznie polecam",
  },
];

export function Testimonials() {
  const [emblaRef] = useEmblaCarousel(
    { loop: true, align: "start", dragFree: false, slidesToScroll: 1 },
    [
      Autoplay({
        delay: 3000,
        stopOnInteraction: false,
        stopOnMouseEnter: true,
      }),
    ],
  );

  return (
    <Section tone="surface">
      <div className="grid gap-8 lg:grid-cols-[0.78fr_1fr] lg:items-end">
        <div>
          <p className="text-sm font-semibold uppercase tracking-[0.18em] text-(--color-primary)">
            Opinie pacjentów
          </p>
          <h2 className="mt-4 font-(--font-display) text-3xl leading-tight text-(--color-primary) sm:text-4xl lg:text-5xl">
            Spokojna, konkretna pomoc w powrocie do sprawności
          </h2>
        </div>
      </div>
      <div className="mt-11 overflow-hidden py-2" ref={emblaRef}>
        <div className="-ml-5 flex">
          {testimonials.map((testimonial) => (
            <div
              key={testimonial.initials}
              className="min-w-0 flex-[0_0_88%] pl-5 md:flex-[0_0_47%] lg:flex-[0_0_31.5%]"
            >
              <article className="relative rounded-[1.75rem] border border-[var(--color-border)] bg-white p-7 shadow-[var(--shadow-card)] ring-1 ring-[var(--color-primary)]/5">
                <Quote
                  className="absolute right-7 top-7 text-[var(--color-surface)]"
                  size={38}
                  fill="currentColor"
                />
                <div
                  className="flex gap-1 text-[var(--color-primary)]"
                  aria-label="Ocena 5 na 5"
                >
                  {Array.from({ length: 5 }).map((_, index) => (
                    <Star key={index} size={17} fill="currentColor" />
                  ))}
                </div>
                <p className="mt-6 text-base leading-8 text-[var(--color-text)]">
                  “{testimonial.text}”
                </p>
                <div className="mt-7 border-t border-[var(--color-border)] pt-5">
                  <span className="inline-flex items-center rounded-full bg-[var(--color-primary)] px-4 py-2 text-sm font-semibold text-[var(--color-surface)] shadow-sm">
                    {testimonial.initials}
                  </span>
                </div>
              </article>
            </div>
          ))}
        </div>
      </div>
    </Section>
  );
}
