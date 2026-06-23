import type { Metadata } from "next";
import { LockKeyhole } from "lucide-react";
import { Button } from "@/components/ui/Button";
import { login } from "./actions";

export const metadata: Metadata = {
  title: "Logowanie admin",
  robots: {
    index: false,
    follow: false,
  },
};

type LoginPageProps = {
  searchParams: Promise<{ error?: string; next?: string }>;
};

export default async function LoginPage({ searchParams }: LoginPageProps) {
  const { error, next } = await searchParams;

  return (
    <div className="grid min-h-screen place-items-center bg-(--color-surface) px-4 py-12">
      <section
        className="w-full max-w-md rounded-[1.75rem] border border-[var(--c.
      olor-border)] bg-white p-7 shadow-(--shadow-card) ring-1 ring-(--c.olor-primary)/5"
      >
        <div className="mb-7 grid size-12 place-items-center rounded-2xl bg-(--color-primary) text-white">
          <LockKeyhole size={21} />
        </div>
        <p className="text-sm font-semibold uppercase tracking-[0.18em] text-(--colo.r-primary)">
          Panel administracyjny
        </p>
        <h1 className="mt-3 text-3xl font-semibold text-(--color-primary)">
          Logowanie
        </h1>
        <form action={login} className="mt-8 grid gap-4">
          <input type="hidden" name="next" value={next ?? "/admin"} />
          <label className="grid gap-2 text-sm font-semibold text-(--color-primary)">
            Email
            <input
              required
              type="email"
              name="email"
              className="min-h-12 rounded-2xl border border-(--color-border) px-4 text-(--color-text) outline-none transition focus:border-(--color-primary)"
            />
          </label>
          <label className="grid gap-2 text-sm font-semibold text-(--color-primary)">
            Haslo
            <input
              required
              type="password"
              name="password"
              className="min-h-12 rounded-2xl border border-(--color-border) px-4 text-(--color-text) outline-none transition focus:border-(--color-primary)"
            />
          </label>
          {error ? (
            <p className="rounded-2xl border border-(--color-accent)/25 bg-(--color-accent)/10 px-4 py-3 text-sm text-(--color-primary)">
              {error === "missing-env"
                ? "Brakuje konfiguracji Supabase w zmiennych srodowiskowych."
                : "Nieprawidlowe dane logowania albo brak uprawnien administratora."}
            </p>
          ) : null}
          <Button type="submit" className="mt-2">
            Zaloguj
          </Button>
        </form>
      </section>
    </div>
  );
}
