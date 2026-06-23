import Image from "next/image";

type PlaceholderImageProps = {
  label?: string;
  className?: string;
  variant?: "portrait" | "wide" | "certificate";
  src?: string;
  priority?: boolean;
  sizes?: string;
};

export function PlaceholderImage({
  label = "Miejsce na zdjęcie",
  className = "",
  variant = "wide",
  src,
  priority = false,
  sizes = "(min-width: 1024px) 48vw, 100vw",
}: PlaceholderImageProps) {
  const ratio =
    variant === "portrait"
      ? "aspect-[4/5]"
      : variant === "certificate"
        ? "aspect-[3/4]"
        : "aspect-[5/4]";

  return (
    <div
      className={`group relative ${ratio} overflow-hidden rounded-4xl border bg-[linear-gradient(145deg,#102133_0%,#163047_32%,#274761_68%,#3A5A73_100%)] shadow-(--shadow-premium) ${className}`}
      aria-label={label}
      role="img"
    >
      {src && (
        <div className="absolute inset-6 overflow-hidden rounded-3xl">
          <Image
            src={src}
            alt={label}
            fill
            priority={priority}
            sizes={sizes}
            className="object-cover transition duration-700 ease-out group-hover:scale-[1.03]"
          />

          <div className="absolute inset-0 bg-[linear-gradient(to_top,rgba(13,27,42,0.22),transparent_45%)]" />
        </div>
      )}

      <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_18%,rgba(184,115,77,0.16),transparent_22rem),radial-gradient(circle_at_bottom_right,rgba(244,239,234,0.08),transparent_20rem)]bg-[radial-gradient(circle_at_24%_18%,rgba(184,115,77,0.18),transparent_24rem)]" />

      <div className="absolute left-8 top-8 h-24 w-24 rounded-full border border-[rgba(244,239,234,0.14)] bg-[rgba(13,27,42,0.12)] blur-sm" />

      <div className="absolute inset-6 rounded-3xl border border-[rgba(244,239,234,0.14)] bg-[rgba(13,27,42,0.12)] shadow-inner transition duration-500 ease-(--ease-premium)" />

      <div className="absolute right-8 top-10 h-36 w-24 rounded-full bg-[rgba(184,115,77,0.16)] blur-2xl" />

      {!src && (
        <div className="absolute bottom-6 left-6 right-6 rounded-3xl border border-[rgba(244,239,234,0.25)] bg-[rgba(255,255,255,0.92)] p-5 shadow-sm backdrop-blur">
          <div className="mb-3 h-1 w-12 rounded-full bg-(--color-accent)" />

          <p className="text-sm font-semibold text-(--color-primary)">
            {label}
          </p>

          <p className="mt-1 text-xs leading-5 text-(--color-text-muted)">
            Elegancki placeholder pod docelowe zdjęcie gabinetu
          </p>
        </div>
      )}
    </div>
  );
}
