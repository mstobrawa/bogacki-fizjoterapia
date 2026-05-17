import { Calendar, ExternalLink } from "lucide-react";
import { Button } from "@/components/ui/Button";

export const znanyLekarzUrl =
  "https://www.znanylekarz.pl/piotr-bogacki-4/fizjoterapeuta/katowice";

type BookingCtasProps = {
  className?: string;
  primaryLabel?: string;
};

export function BookingCtas({ className = "", primaryLabel = "Umów wizytę" }: BookingCtasProps) {
  return (
    <div className={`flex flex-col gap-3 sm:flex-row ${className}`}>
      <Button href="/kontakt" className="gap-2 px-7">
        <Calendar size={18} />
        {primaryLabel}
      </Button>
      <Button
        href={znanyLekarzUrl}
        target="_blank"
        rel="noreferrer"
        variant="secondary"
        className="gap-2 px-7"
      >
        <ExternalLink size={17} />
        ZnanyLekarz
      </Button>
    </div>
  );
}
