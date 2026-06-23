import { Section } from "@/components/layout/Section";
import { getCertificates } from "@/lib/cms";
import { CertificatesLightboxCarousel } from "./CertificatesLightboxCarousel";

export async function CertificatesCarousel() {
  const certificates = await getCertificates();

  return (
    <Section tone="dark">
      <div className="max-w-2xl">
        <p className="text-sm font-semibold uppercase tracking-[0.18em] text-white/75">
          Certyfikaty
        </p>
        <h2 className="mt-4 font-(--font-display) text-3xl leading-tight text-white sm:text-4xl lg:text-5xl">
          Stały rozwój i sprawdzone metody pracy
        </h2>
      </div>
      <CertificatesLightboxCarousel certificates={certificates} />
    </Section>
  );
}
