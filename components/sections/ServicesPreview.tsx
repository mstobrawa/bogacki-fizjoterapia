import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { Section } from "@/components/layout/Section";
import { getServices } from "@/lib/cms";

export async function ServicesPreview() {
  const services = await getServices();

  return (
    <Section tone="default">
      <div className="flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">
        <div className="max-w-2xl">
          <p className="text-sm font-semibold uppercase tracking-[0.18em] text-(--color-primary)">
            Oferta
          </p>
          <h2 className="mt-4 font-(--font-display) text-3xl leading-tight text-(--color-primary) sm:text-4xl lg:text-5xl">
            Terapia dobrana do problemu, nie do schematu
          </h2>
        </div>
        <Link
          href="/oferta"
          className="inline-flex items-center gap-2 text-sm font-semibold text-(--color-primary) transition hover:text-(--color-primary-hover)"
        >
          Pełna oferta
          <ArrowRight size={17} />
        </Link>
      </div>
      <div className="mt-11 grid gap-4 md:grid-cols-2 lg:grid-cols-3">
        {services.slice(0, 5).map((service, index) => (
          <Link
            key={service.title}
            href="/oferta"
            className={`group rounded-[1.75rem] border border-(--color-border) bg-white p-6 shadow-(--shadow-card) ring-1 ring-(--color-primary)/5 transition duration-300 ease-(--ease-premium) hover:-translate-y-1 hover:border-(--color-primary)/45 hover:shadow-(--shadow-premium) ${
              index === 0 ? "lg:col-span-2" : ""
            }`}
          >
            <div className="mb-6 flex size-11 items-center justify-center rounded-2xl bg-(--color-primary) text-sm font-semibold text-white">
              {String(index + 1).padStart(2, "0")}
            </div>
            <div className="flex items-start justify-between gap-4">
              <h3 className="text-xl font-semibold text-(--color-primary)">
                {service.title}
              </h3>
              <ArrowRight
                className="mt-1 shrink-0 text-(--color-accent) transition group-hover:translate-x-1"
                size={20}
              />
            </div>
            {service.price ? (
              <p className="mt-3 inline-flex rounded-full bg-(--color-surface) px-4 py-2 text-sm font-semibold text-(--color-primary)">
                {service.price}
              </p>
            ) : null}
            <p className="mt-4 max-w-xl text-sm leading-7 text-(--color-text-muted)">
              {service.description}
            </p>
          </Link>
        ))}
      </div>
    </Section>
  );
}
