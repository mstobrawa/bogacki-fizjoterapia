"use client";

import { useEffect, useMemo, useState } from "react";
import { Award, X } from "lucide-react";
import type { Certificate } from "@/lib/content";

function CertificateCard({
  certificate,
  onOpen,
  focusable = true,
}: {
  certificate: Certificate;
  onOpen: (certificate: Certificate) => void;
  focusable?: boolean;
}) {
  const title = certificate.title || "Certyfikat";

  return (
    <button
      type="button"
      tabIndex={focusable ? 0 : -1}
      onClick={() => onOpen(certificate)}
      className="group block h-full w-full rounded-[1.75rem] border border-white/15 bg-white p-5 text-left text-[var(--color-text)] shadow-[var(--shadow-card)] ring-1 ring-white/10 transition duration-300 ease-[var(--ease-premium)] hover:-translate-y-1 hover:shadow-[var(--shadow-premium)] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[var(--color-accent)]"
    >
      <div className="relative aspect-[4/3] overflow-hidden rounded-3xl bg-[linear-gradient(135deg,#F4EFEA_0%,#FFFFFF_48%,#dbe6e8_100%)]">
        {certificate.image_url ? (
          <img
            src={certificate.image_url}
            alt=""
            loading="lazy"
            decoding="async"
            className="h-full w-full object-cover transition duration-500 group-hover:scale-[1.03]"
          />
        ) : (
          <>
            <div className="absolute inset-5 rounded-2xl border border-white/80 bg-white/28" />
            <div className="absolute left-6 top-6 grid size-12 place-items-center rounded-2xl bg-[var(--color-primary)] text-white shadow-sm">
              <Award size={22} />
            </div>
            <div className="absolute bottom-6 left-6 right-6 h-2 rounded-full bg-white/70">
              <div className="h-full w-2/3 rounded-full bg-[var(--color-primary)]" />
            </div>
          </>
        )}
      </div>
      <h3 className="mt-5 text-lg font-semibold text-[var(--color-primary)]">{title}</h3>
      <p className="mt-2 text-sm leading-6 text-[var(--color-text-muted)]">Kliknij, aby powiekszyc dokument.</p>
    </button>
  );
}

export function CertificatesLightboxCarousel({ certificates }: { certificates: Certificate[] }) {
  const [active, setActive] = useState<Certificate | null>(null);
  const marqueeCertificates = useMemo(() => [...certificates, ...certificates], [certificates]);

  useEffect(() => {
    if (!active) {
      return;
    }

    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setActive(null);
      }
    };

    document.body.style.overflow = "hidden";
    window.addEventListener("keydown", onKeyDown);

    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", onKeyDown);
    };
  }, [active]);

  return (
    <>
      <div className="relative mt-11 overflow-hidden py-2">
        <div className="pointer-events-none absolute inset-y-0 left-0 z-10 w-16 bg-gradient-to-r from-[var(--color-primary)] to-transparent sm:w-28" />
        <div className="pointer-events-none absolute inset-y-0 right-0 z-10 w-16 bg-gradient-to-l from-[var(--color-primary)] to-transparent sm:w-28" />
        <div className="certificates-marquee flex w-max gap-5 will-change-transform">
          {marqueeCertificates.map((certificate, index) => (
            <div
              key={`${certificate.id ?? certificate.title}-${index}`}
              className="w-[78vw] shrink-0 sm:w-[22rem] lg:w-[24rem]"
              aria-hidden={index >= certificates.length}
            >
              <CertificateCard
                certificate={certificate}
                onOpen={setActive}
                focusable={index < certificates.length}
              />
            </div>
          ))}
        </div>
      </div>

      {active ? (
        <div
          className="fixed inset-0 z-50 grid place-items-center bg-[var(--color-primary)]/88 p-4 backdrop-blur-md"
          onClick={() => setActive(null)}
          role="dialog"
          aria-modal="true"
        >
          <button
            type="button"
            aria-label="Zamknij"
            onClick={() => setActive(null)}
            className="absolute right-5 top-5 grid size-11 place-items-center rounded-full border border-white/20 bg-white/10 text-white transition hover:bg-white/20"
          >
            <X size={21} />
          </button>
          <div className="max-h-[86vh] w-full max-w-5xl" onClick={(event) => event.stopPropagation()}>
            {active.image_url ? (
              <img
                src={active.image_url}
                alt={active.title ?? "Certyfikat"}
                className="mx-auto max-h-[86vh] w-auto rounded-[1.5rem] object-contain shadow-[0_30px_90px_rgba(0,0,0,0.45)]"
              />
            ) : (
              <div className="mx-auto grid aspect-[4/3] max-h-[86vh] max-w-3xl place-items-center rounded-[1.5rem] bg-white p-10 text-center shadow-[0_30px_90px_rgba(0,0,0,0.45)]">
                <p className="font-[var(--font-display)] text-4xl font-semibold text-[var(--color-primary)]">{active.title}</p>
              </div>
            )}
          </div>
        </div>
      ) : null}
    </>
  );
}
