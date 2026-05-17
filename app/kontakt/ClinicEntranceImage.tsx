"use client";

import { useState } from "react";

export function ClinicEntranceImage() {
  const [available, setAvailable] = useState(true);

  if (!available) {
    return null;
  }

  return (
    <div className="group overflow-hidden rounded-[1.5rem] border border-white/70 bg-white shadow-sm ring-1 ring-[var(--color-primary)]/5">
      <img
        src="/clinic-entrance.jpg"
        alt="Wejście do gabinetu w iDentysta Clinic"
        onError={() => setAvailable(false)}
        className="aspect-[16/9] w-full object-cover transition duration-500 ease-[var(--ease-premium)] group-hover:scale-[1.025]"
      />
    </div>
  );
}
