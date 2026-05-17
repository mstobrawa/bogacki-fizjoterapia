"use client";

import Link from "next/link";
import { useEffect, useState } from "react";

const storageKey = "bogacki-essential-cookies-accepted";

export function CookieBanner() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    setVisible(localStorage.getItem(storageKey) !== "true");
  }, []);

  if (!visible) {
    return null;
  }

  return (
    <div className="fixed inset-x-0 bottom-20 z-50 px-4 lg:bottom-5">
      <div className="mx-auto flex max-w-4xl flex-col gap-4 rounded-[1.5rem] border border-[var(--color-border)] bg-white/95 p-4 text-sm leading-6 text-[var(--color-text-muted)] shadow-[var(--shadow-card)] backdrop-blur-2xl sm:flex-row sm:items-center sm:justify-between">
        <p>
          Ta strona używa wyłącznie niezbędnych cookies potrzebnych do działania serwisu. Nie korzystamy z cookies
          analitycznych ani marketingowych.{" "}
          <Link className="font-semibold text-[var(--color-primary)] underline-offset-4 hover:underline" href="/prywatnosc">
            Polityka prywatności
          </Link>
        </p>
        <button
          type="button"
          onClick={() => {
            localStorage.setItem(storageKey, "true");
            setVisible(false);
          }}
          className="inline-flex min-h-11 shrink-0 items-center justify-center rounded-full bg-[var(--color-primary)] px-6 text-sm font-semibold text-white transition hover:bg-[var(--color-primary-hover)]"
        >
          OK
        </button>
      </div>
    </div>
  );
}
