import { Calendar, ExternalLink } from "lucide-react";
import { znanyLekarzUrl } from "@/components/sections/BookingCtas";

export function StickyCTA() {
  return (
    <div className="fixed inset-x-0 bottom-0 z-50 border-t border-[var(--color-border)] bg-white/94 px-4 pb-4 pt-3 shadow-[0_-18px_60px_rgba(13,27,42,0.16)] backdrop-blur-2xl lg:hidden">
      <div className="mx-auto grid max-w-md grid-cols-2 gap-3">
        <a
          href="/kontakt"
          className="inline-flex min-h-[3.25rem] items-center justify-center gap-2 rounded-full bg-[var(--color-primary)] px-4 text-sm font-semibold !text-[var(--color-on-primary)] shadow-[var(--shadow-soft)]"
        >
          <Calendar size={17} />
          Umów wizytę
        </a>
        <a
          href={znanyLekarzUrl}
          target="_blank"
          rel="noreferrer"
          className="inline-flex min-h-[3.25rem] items-center justify-center gap-2 rounded-full border border-[var(--color-primary)] bg-white px-4 text-sm font-semibold text-[var(--color-primary)] shadow-sm"
        >
          <ExternalLink size={16} />
          ZnanyLekarz
        </a>
      </div>
    </div>
  );
}
