import { CertificatesCarousel } from "@/components/sections/CertificatesCarousel";
import { Hero } from "@/components/sections/Hero";
import { ServicesPreview } from "@/components/sections/ServicesPreview";
import { Testimonials } from "@/components/sections/Testimonials";

export default function HomePage() {
  return (
    <>
      <Hero />
      <div className="premium-divider" />
      <ServicesPreview />
      <div className="premium-divider" />
      <CertificatesCarousel />
      <Testimonials />
    </>
  );
}
