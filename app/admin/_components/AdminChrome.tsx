import type { ReactNode } from "react";
import Link from "next/link";
import {
  ImageIcon,
  LayoutDashboard,
  LogOut,
  Newspaper,
  Stethoscope,
} from "lucide-react";
import { Button } from "@/components/ui/Button";
import { signOut } from "../actions";

export const inputClass =
  "min-h-11 rounded-2xl border border-[var(--color-border)] bg-white px-4 text-sm outline-none transition focus:border-[var(--color-primary)]";

export const areaClass =
  "min-h-28 rounded-2xl border border-[var(--color-border)] bg-white px-4 py-3 text-sm leading-6 outline-none transition focus:border-[var(--color-primary)]";

export const adminNavItems = [
  { href: "/admin", label: "Dashboard", icon: LayoutDashboard },
  { href: "/admin/oferta", label: "Oferta", icon: Stethoscope },
  { href: "/admin/ciekawostki", label: "Ciekawostki", icon: Newspaper },
  { href: "/admin/certyfikaty", label: "Certyfikaty", icon: ImageIcon },
];

export function AdminChrome({
  title,
  description,
  userEmail,
  children,
}: {
  title: string;
  description: string;
  userEmail?: string | null;
  children: ReactNode;
}) {
  return (
    <div>
      <div className="flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">
        <div className="max-w-3xl">
          <p className="text-sm font-semibold uppercase tracking-[0.18em] text-(--color-primary)">
            Panel administracyjny
          </p>
          <h1 className="mt-4 font-(--font-display) text-4xl text-(--color-primary)">
            {title}
          </h1>
          <p className="mt-5 text-sm leading-7 text-(--color-text-muted)">
            {description}
            {userEmail ? ` Zalogowano jako ${userEmail}.` : ""}
          </p>
        </div>
        <form action={signOut}>
          <Button type="submit" variant="secondary" className="gap-2">
            <LogOut size={16} />
            Wyloguj
          </Button>
        </form>
      </div>

      <nav
        className="mt-9 grid gap-3 sm:grid-cols-2 lg:grid-cols-4"
        aria-label="Nawigacja CMS"
      >
        {adminNavItems.map((item) => {
          const Icon = item.icon;
          return (
            <Link
              key={item.href}
              href={item.href}
              className="flex items-center gap-3 rounded-[1.25rem] border border-(--color-border) bg-white p-4 text-sm font-semibold text-(--color-primary) shadow-sm transition hover:-translate-y-0.5 hover:shadow-(--shadow-card)"
            >
              <span className="grid size-9 place-items-center rounded-2xl bg-(--color-surface)">
                <Icon size={17} />
              </span>
              {item.label}
            </Link>
          );
        })}
      </nav>

      <div className="mt-9">{children}</div>
    </div>
  );
}

export function AdminPanel({
  title,
  children,
}: {
  title: string;
  children: ReactNode;
}) {
  return (
    <section className="rounded-[1.75rem] border border-(--color-border) bg-(--color-bg) p-5 shadow-(--shadow-card) ring-1 ring-(--color-primary)/5 sm:p-6">
      <h2 className="mb-5 text-xl font-semibold text-(--color-primary)">
        {title}
      </h2>
      <div className="grid gap-5">{children}</div>
    </section>
  );
}

export function EditableCard({ children }: { children: ReactNode }) {
  return (
    <div className="rounded-[1.35rem] border border-(--color-border) bg-white p-4 sm:p-5">
      {children}
    </div>
  );
}

export function DeleteForm({
  action,
  id,
  storagePath = "",
  className = "mt-3",
}: {
  action: (formData: FormData) => Promise<void>;
  id: string;
  storagePath?: string;
  className?: string;
}) {
  return (
    <form action={action} className={className}>
      <input type="hidden" name="id" value={id} />
      <input type="hidden" name="storage_path" value={storagePath} />
      <button
        type="submit"
        className="inline-flex min-h-10 items-center rounded-full px-4 text-sm font-semibold text-(--color-accent) transition hover:bg-(--color-accent)/10"
      >
        Usuń
      </button>
    </form>
  );
}
