import { BookingCtas } from "@/components/sections/BookingCtas";
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
  imageUrl?: string | null;
  imageAlt?: string | null;
};

export function AlternatingSection({
  title,
  description,
  imagePosition = "right",
  cta,
  eyebrow,
  price,
  imageUrl,
  imageAlt,
}: AlternatingSectionProps) {
  const reverse = imagePosition === "left";

  return (
    <div className="grid items-center gap-9 lg:grid-cols-[1fr_1.04fr] lg:gap-18">
      <div className={`max-w-xl ${reverse ? "lg:order-2 lg:ml-auto" : ""}`}>
        {eyebrow ? (
          <p className="mb-5 inline-flex items-center gap-3 text-xs font-bold uppercase tracking-[0.2em] text-(--color-primary)">
            <span className="h-px w-10 bg-(--color-accent)/50" />
            {eyebrow}
          </p>
        ) : null}
        <h2 className="font-(--font-display) text-3xl leading-[1.08] text-(--color-primary) sm:text-4xl lg:text-5xl">
          {title}
        </h2>
        <p className="mt-6 text-base leading-8 text-(--color-text-muted) sm:text-lg">
          {description}
        </p>
        {price ? (
          <p className="mt-6 inline-flex rounded-full border border-(--color-border) bg-white px-5 py-2 text-sm font-semibold text-(--color-primary) shadow-sm">
            {price}
          </p>
        ) : null}
        {cta ? <BookingCtas className="mt-8" bookingLabel={cta.label} /> : null}
      </div>
      <div className={reverse ? "lg:order-1" : ""}>
        {imageUrl ? (
          <PlaceholderImage label={imageAlt ?? title} src={imageUrl} />
        ) : (
          <PlaceholderImage label={title} />
        )}
      </div>
    </div>
  );
}
