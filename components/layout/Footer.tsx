import Link from "next/link";
import { Container } from "./Container";

export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-white/10 bg-[var(--color-primary)] py-14 pb-28 text-white lg:pb-14">
      <Container>
        <div className="grid gap-10 md:grid-cols-[1.35fr_1fr_1fr]">
          <div>
            <p className="font-[var(--font-display)] text-3xl font-semibold">
              Bogacki Fizjoterapia
            </p>
            <p className="mt-4 max-w-sm text-sm leading-7 text-white/78">
              Nowoczesna fizjoterapia w Katowicach oparta o dokładną
              diagnostykę, jasny plan terapii i pracę z realnymi celami
              pacjenta.
            </p>
            <div className="mt-7 h-px max-w-xs bg-gradient-to-r from-[var(--color-accent)]/70 to-transparent" />
          </div>
          <div>
            <p className="text-sm font-semibold">Nawigacja</p>
            <div className="mt-4 grid gap-3 text-sm text-white/78">
              <Link className="transition hover:text-white" href="/oferta">
                Oferta
              </Link>
              <Link className="transition hover:text-white" href="/o-mnie">
                O mnie
              </Link>
              <Link className="transition hover:text-white" href="/ciekawostki">
                Ciekawostki
              </Link>
              <Link className="transition hover:text-white" href="/kontakt">
                Kontakt
              </Link>
              <Link className="transition hover:text-white" href="/prywatnosc">
                Polityka prywatności
              </Link>
            </div>
          </div>
          <div>
            <p className="text-sm font-semibold">Kontakt</p>
            <div className="mt-4 grid gap-3 text-sm text-white/78">
              <a
                className="transition hover:text-white"
                href="tel:+48505476614"
              >
                +48 505 476 614
              </a>
              <a
                className="transition hover:text-white"
                href="mailto:bogackipiotr13@gmail.com"
              >
                bogackipiotr13@gmail.com
              </a>
              <p>Katowice, woj. śląskie</p>
            </div>
          </div>
        </div>
        <div className="mt-12 border-t border-white/10 pt-6 text-center text-xs leading-6 text-white/55">
          <p>© {year} bogackifizjoterapia.pl - wszystkie prawa zastrzeżone</p>
          <p>
            crafted by{" "}
            <a
              className="transition hover:text-white"
              href="https://mikewebworks.dev"
              target="_blank"
              rel="noreferrer"
            >
              Mike Webworks
            </a>
          </p>
        </div>
      </Container>
    </footer>
  );
}
