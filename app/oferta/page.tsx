import type { Metadata } from "next";
import { Section } from "@/components/layout/Section";
import { AlternatingSection } from "@/components/sections/AlternatingSection";
import { getServices } from "@/lib/cms";

export const metadata: Metadata = {
  title: "Oferta",
  description: "Rehabilitacja, fizjoterapia, kinesiotaping, masaż relaksacyjny i oferta dla firm w Katowicach.",
};

export default async function OfferPage() {
  const services = await getServices();

  return (
    <>
      <Section>
        <div className="max-w-3xl">
          <p className="text-sm font-semibold uppercase tracking-[0.18em] text-[var(--color-primary)]">
            Oferta
          </p>
          <h1 className="mt-4 font-[var(--font-display)] text-4xl font-semibold leading-tight text-[var(--color-primary)] sm:text-5xl lg:text-6xl">
            Kompleksowa pomoc dla osób z bólem, po urazach i w przeciążeniu
          </h1>
          <p className="mt-6 text-lg leading-8 text-[var(--color-text-muted)]">
            Struktura oferty jest gotowa pod przyszły CMS, cennik i szczegółowe opisy usług.
          </p>
        </div>
      </Section>
      {services.map((service, index) => (
        <Section key={service.title} tone={index % 2 ? "surface" : "default"}>
          <AlternatingSection
            eyebrow={`0${index + 1}`}
            title={service.title}
            description={service.description}
            price={service.price}
            imagePosition={index % 2 ? "left" : "right"}
            cta={{ label: "Zapytaj o wizytę", href: "/kontakt" }}
          />
        </Section>
      ))}
    </>
  );
}
