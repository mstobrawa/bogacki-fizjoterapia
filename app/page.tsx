import { AlternatingSection } from "@/components/sections/AlternatingSection";
import { CertificatesCarousel } from "@/components/sections/CertificatesCarousel";
import { Hero } from "@/components/sections/Hero";
import { ServicesPreview } from "@/components/sections/ServicesPreview";
import { Testimonials } from "@/components/sections/Testimonials";
import { Section } from "@/components/layout/Section";

export default function HomePage() {
  return (
    <>
      <Hero />
      <div className="premium-divider" />
      {/* <Section className="lg:py-[6.5rem]">
        <AlternatingSection
          eyebrow="Podejście"
          title="Najpierw diagnoza, potem precyzyjna terapia"
          description="Każda wizyta zaczyna się od rozmowy i oceny ruchu. Dzięki temu terapia nie jest przypadkowym zestawem technik, ale uporządkowanym procesem dopasowanym do bólu, trybu życia i celu pacjenta."
          imagePosition="right"
          cta={{ label: "Poznaj mnie", href: "/o-mnie" }}
          imageUrl="/konsultacja.webp"
          imageAlt={"Konsultacja fizjoterapeutyczna w gabinecie"}
        />
      </Section> */}
      <ServicesPreview />
      <div className="premium-divider" />
      {/* <Section className="lg:py-[6.5rem]">
        <AlternatingSection
          eyebrow="Dla pacjentów"
          title="Pomoc w bólu pleców, po urazie i przy napięciu"
          description="Pracuję z osobami aktywnymi, pacjentami po kontuzjach oraz osobami przeciążonymi pracą siedzącą. Celem jest trwała poprawa funkcji, a nie tylko chwilowe wyciszenie objawów."
          imagePosition="left"
          cta={{ label: "Zobacz ofertę", href: "/oferta" }}
          imageUrl="/bolplecow.webp"
          imageAlt="Masaż pomagający na ból pleców"
        />
      </Section> */}
      <CertificatesCarousel />
      <Testimonials />
    </>
  );
}
