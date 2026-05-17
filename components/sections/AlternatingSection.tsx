import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/Button";
import { PlaceholderImage } from "@/components/ui/PlaceholderImage";

type AlternatingSectionProps = {
  title: string;
  description: string;
  imagePosition?: "left" | "right";
  cta?: {
    label: string;
    href: string;
  };
  eyebrow?: string;
  price?: string | null;
};

export function AlternatingSection({
  title,
  description,
  imagePosition = "right",
  cta,
  eyebrow,
  price,
}: AlternatingSectionProps) {
  const reverse = imagePosition === "left";

  return (
    <div className="grid items-center gap-9 lg:grid-cols-[1fr_1.04fr] lg:gap-[4.5rem]">
      <div className={`max-w-xl ${reverse ? "lg:order-2 lg:ml-auto" : ""}`}>
        {eyebrow ? (
          <p className="mb-5 inline-flex items-center gap-3 text-xs font-bold uppercase tracking-[0.2em] text-[var(--color-primary)]">
            <span className="h-px w-10 bg-[var(--color-accent)]/50" />
            {eyebrow}
          </p>
        ) : null}
        <h2 className="font-[var(--font-display)] text-3xl font-semibold leading-[1.08] text-[var(--color-primary)] sm:text-4xl lg:text-5xl">
          {title}
        </h2>
        <p className="mt-6 text-base leading-8 text-[var(--color-text-muted)] sm:text-lg">
          {description}
        </p>
        {price ? (
          <p className="mt-6 inline-flex rounded-full border border-[var(--color-border)] bg-white px-5 py-2 text-sm font-semibold text-[var(--color-primary)] shadow-sm">
            {price}
          </p>
        ) : null}
        {cta ? (
          <div className="mt-8">
            <Button href={cta.href} variant="secondary" className="gap-2">
              {cta.label}
              <ArrowRight size={17} />
            </Button>
          </div>
        ) : null}
      </div>
      <div className={reverse ? "lg:order-1" : ""}>
        <PlaceholderImage label={title} />
      </div>
    </div>
  );
}
