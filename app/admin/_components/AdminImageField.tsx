"use client";

import { useEffect, useState } from "react";

type AdminImageFieldProps = {
  name: string;
  label: string;
  currentUrl?: string | null;
  required?: boolean;
};

export function AdminImageField({ name, label, currentUrl, required }: AdminImageFieldProps) {
  const [preview, setPreview] = useState(currentUrl ?? "");

  useEffect(() => {
    setPreview(currentUrl ?? "");
  }, [currentUrl]);

  return (
    <div className="grid gap-3">
      <label className="text-sm font-semibold text-[var(--color-primary)]">{label}</label>
      {preview ? (
        <img
          src={preview}
          alt=""
          className="aspect-[4/3] w-full rounded-[1.25rem] border border-[var(--color-border)] object-cover"
        />
      ) : null}
      <input
        name={name}
        type="file"
        accept="image/*"
        required={required}
        onChange={(event) => {
          const file = event.target.files?.[0];
          if (file) {
            setPreview(URL.createObjectURL(file));
          }
        }}
        className="min-h-11 rounded-2xl border border-[var(--color-border)] bg-white px-4 py-2 text-sm outline-none transition file:mr-4 file:rounded-full file:border-0 file:bg-[var(--color-surface)] file:px-4 file:py-2 file:text-sm file:font-semibold file:text-[var(--color-primary)] focus:border-[var(--color-primary)]"
      />
    </div>
  );
}
