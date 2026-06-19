"use client";

import Link from "next/link";
import { startTransition, useActionState, useEffect, useRef } from "react";
import { Button } from "@/components/ui/Button";
import { sendContactMessage } from "./actions";

const initialState = {
  ok: false,
  message: "",
};

const inputClass =
  "min-h-11 rounded-2xl border border-[var(--color-border)] bg-white px-4 text-sm outline-none transition focus:border-[var(--color-primary)]";

const labelClass = "grid gap-2 text-sm font-semibold text-[var(--color-primary)]";

export function ContactForm() {
  const [state, action, pending] = useActionState(sendContactMessage, initialState);
  const formRef = useRef<HTMLFormElement>(null);

  useEffect(() => {
    if (state.ok) {
      formRef.current?.reset();
    }
  }, [state]);

  return (
    <form
      ref={formRef}
      onSubmit={(event) => {
        event.preventDefault();
        const formData = new FormData(event.currentTarget);

        startTransition(() => {
          action(formData);
        });
      }}
      className="grid w-full max-w-[38rem] gap-3.5 rounded-[1.5rem] border border-[var(--color-border)] bg-white/95 p-4 shadow-sm ring-1 ring-[var(--color-primary)]/5 sm:p-5"
    >
      <div className="hidden">
        <label>
          Strona internetowa
          <input name="website" tabIndex={-1} autoComplete="off" />
        </label>
      </div>

      <label className={labelClass}>
        Imię
        <input required name="name" autoComplete="given-name" className={inputClass} />
      </label>

      <div className="grid gap-3 sm:grid-cols-2">
        <label className={labelClass}>
          Email
          <input required name="email" type="email" autoComplete="email" className={inputClass} />
        </label>
        <label className={labelClass}>
          Telefon
          <input name="phone" type="tel" autoComplete="tel" className={inputClass} />
        </label>
      </div>

      <label className={labelClass}>
        Wiadomość / Zapytanie
        <textarea
          required
          name="message"
          rows={4}
          className="min-h-28 resize-y rounded-2xl border border-[var(--color-border)] bg-white px-4 py-3 text-sm leading-6 outline-none transition focus:border-[var(--color-primary)]"
        />
      </label>

      <label className="flex items-start gap-3 text-sm leading-6 text-[var(--color-text-muted)]">
        <input required name="privacy" type="checkbox" className="mt-1" />
        <span>
          Zapoznałem się z{" "}
          <Link href="/prywatnosc" className="font-semibold text-[var(--color-primary)] underline-offset-4 hover:underline">
            polityką prywatności
          </Link>
          .
        </span>
      </label>

      {state.message ? (
        <p
          className={`rounded-2xl px-4 py-3 text-sm leading-6 ${
            state.ok
              ? "bg-[var(--color-soft)] text-[var(--color-primary)]"
              : "bg-[var(--color-accent)]/10 text-[var(--color-primary)]"
          }`}
          role="status"
        >
          {state.message}
        </p>
      ) : null}

      <Button type="submit" disabled={pending} className="min-h-11 justify-self-start px-6">
        {pending ? "Wysyłanie..." : "Wyślij wiadomość"}
      </Button>
    </form>
  );
}
