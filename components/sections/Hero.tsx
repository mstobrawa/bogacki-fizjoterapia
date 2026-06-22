import { CheckCircle2 } from "lucide-react";
import { Container } from "@/components/layout/Container";
import { BookingCtas } from "@/components/sections/BookingCtas";
import { PlaceholderImage } from "@/components/ui/PlaceholderImage";

const trustItems = [
  "Indywidualny plan terapii",
  "Praca z bólem pleców",
  "Dokładna diagnostyka",
];

export function Hero() {
  return (
    <section className="relative isolate overflow-hidden bg-[linear-gradient(180deg,#ffffff_0%,#f7f1eb_100%)] py-14 sm:py-18 lg:py-24">
      <div className="absolute inset-x-0 top-0 -z-10 h-80 bg-[radial-gradient(circle_at_72%_18%,rgba(13,27,42,0.13),transparent_30rem)]" />
      <Container className="grid items-center gap-12 lg:grid-cols-[0.95fr_1.05fr] lg:gap-16">
        <div className="max-w-2xl">
          <p className="mb-6 inline-flex items-center gap-2 rounded-full border border-[var(--color-primary)] bg-white px-4 py-2 text-sm font-semibold text-[var(--color-primary)] shadow-sm">
            <span className="size-2 rounded-full bg-[var(--color-accent)]" />
            Fizjoterapia w Katowicach i Mysłowicach
          </p>
          <h1 className="font-[var(--font-display)] text-[2.75rem] font-semibold leading-[1.03] text-[var(--color-primary)] sm:text-6xl lg:text-7xl">
            Bogacki Fizjoterapia - skuteczna{" "}
            <span className="relative whitespace-nowrap text-[var(--color-primary)]">
              pomoc w bólu
              <span className="absolute -bottom-1 left-0 h-1 w-full rounded-full bg-[var(--color-accent)]/60" />
            </span>
          </h1>
          <p className="mt-7 max-w-xl text-lg leading-8 text-[var(--color-text-muted)] sm:text-xl">
            Pomagam wrócić do sprawności po urazach, zmniejszyć ból i poprawić
            komfort życia.
          </p>
          <BookingCtas className="mt-9" />
          <div className="mt-8 grid gap-3 sm:grid-cols-3">
            {trustItems.map((item) => (
              <div
                key={item}
                className="flex items-center gap-3 rounded-2xl border border-[var(--color-border)] bg-white px-4 py-3 text-sm font-semibold text-[var(--color-primary)] shadow-sm"
              >
                <CheckCircle2
                  size={17}
                  className="shrink-0 text-[var(--color-accent)]"
                />
                <span>{item}</span>
              </div>
            ))}
          </div>
        </div>
        <div className="relative">
          <div className="absolute -inset-4 -z-10 rounded-[2.5rem] bg-[var(--color-primary)]/12 blur-2xl" />
          <PlaceholderImage
            src="/gabinet.webp"
            label="Nowoczesny gabinet fizjoterapii"
            className="lg:aspect-[5/5]"
            priority
            sizes="(min-width: 1280px) 560px, (min-width: 1024px) 48vw, calc(100vw - 88px)"
          />
        </div>
      </Container>
    </section>
  );
}
