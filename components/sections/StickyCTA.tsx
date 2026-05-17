import { Calendar, ExternalLink, Phone } from "lucide-react";
import { phoneHref, znanyLekarzUrl } from "@/components/sections/BookingCtas";

export function StickyCTA() {
  return (
    <div className="fixed inset-x-0 bottom-0 z-50 border-t border-[var(--color-border)] bg-white/94 px-3 pb-4 pt-3 shadow-[0_-18px_60px_rgba(13,27,42,0.16)] backdrop-blur-2xl lg:hidden">
      <div className="mx-auto grid max-w-md grid-cols-3 gap-2">
        <a
          href={phoneHref}
          className="inline-flex min-h-[3.1rem] items-center justify-center gap-1.5 rounded-full bg-[var(--color-primary)] px-3 text-xs font-semibold !text-[var(--color-on-primary)] shadow-[var(--shadow-soft)]"
        >
          <Phone size={15} />
          Zadzwoń
        </a>
        <a
          href="/kontakt"
          className="inline-flex min-h-[3.1rem] items-center justify-center gap-1.5 rounded-full border border-[var(--color-primary)] bg-white px-3 text-xs font-semibold text-[var(--color-primary)] shadow-sm"
        >
          <Calendar size={15} />
          Wizyta
        </a>
        <a
          href={znanyLekarzUrl}
          target="_blank"
          rel="noreferrer"
          className="inline-flex min-h-[3.1rem] items-center justify-center gap-1.5 rounded-full border border-[var(--color-primary)]/18 bg-[var(--color-surface)]/70 px-3 text-xs font-semibold text-[var(--color-primary)] shadow-sm transition duration-300 ease-[var(--ease-premium)] hover:border-[var(--color-accent)]/45 hover:bg-[var(--color-primary)]/6 hover:text-[var(--color-primary-hover)]"
        >
          <ExternalLink size={14} />
          Znany
        </a>
      </div>
    </div>
  );
}
