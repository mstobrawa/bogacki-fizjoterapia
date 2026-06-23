import { Calendar, ExternalLink, Phone } from "lucide-react";
import { Button } from "@/components/ui/Button";

export const phoneHref = "tel:+48505476614";
export const znanyLekarzUrl =
  "https://www.znanylekarz.pl/piotr-bogacki-4/fizjoterapeuta/katowice";

type BookingCtasProps = {
  className?: string;
  bookingLabel?: string;
};

export function BookingCtas({
  className = "",
  bookingLabel = "Umów wizytę",
}: BookingCtasProps) {
  return (
    <div
      className={`flex flex-col gap-3 sm:flex-row sm:flex-wrap ${className}`}
    >
      <Button href={phoneHref} className="gap-2 px-7">
        <Phone size={18} />
        Zadzwoń
      </Button>
      <Button href="/kontakt" variant="secondary" className="gap-2 px-7">
        <Calendar size={18} />
        {bookingLabel}
      </Button>
      <Button
        href={znanyLekarzUrl}
        target="_blank"
        rel="noreferrer"
        variant="ghost"
        className="gap-2 border border-(--color-primary)/18 bg-(--color-surface)/70 px-6 font-semibold shadow-sm hover:-translate-y-0.5 hover:border-(--color-accent)/45 hover:bg-(--color-primary)/6 hover:text-(--color-primary-hover) hover:shadow-(--shadow-soft)"
      >
        <ExternalLink size={16} className="shrink-0" />
        ZnanyLekarz
      </Button>
    </div>
  );
}
