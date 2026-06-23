import type { Metadata } from "next";
import { Section } from "@/components/layout/Section";
import { requireAdmin } from "@/lib/auth";
import { AdminChrome, adminNavItems } from "./_components/AdminChrome";

export const metadata: Metadata = {
  title: "Admin",
  robots: {
    index: false,
    follow: false,
  },
};

export default async function AdminPage() {
  const { supabase, user } = await requireAdmin();
  const [
    { count: servicesCount },
    { count: postsCount },
    { count: certificatesCount },
  ] = await Promise.all([
    supabase.from("services").select("id", { count: "exact", head: true }),
    supabase.from("posts").select("id", { count: "exact", head: true }),
    supabase.from("certificates").select("id", { count: "exact", head: true }),
  ]);

  const stats = [
    { label: "Usługi", value: servicesCount ?? 0 },
    { label: "Wpisy", value: postsCount ?? 0 },
    { label: "Certyfikaty", value: certificatesCount ?? 0 },
  ];

  return (
    <Section tone="surface">
      <AdminChrome
        title="Lekki CMS strony"
        description="Wybierz sekcję, którą chcesz edytować. Zmiany są zapisywane w Supabase i od razu odświeżają widoki publiczne."
        userEmail={user.email}
      >
        <div className="grid gap-5 md:grid-cols-3">
          {stats.map((item) => (
            <div
              key={item.label}
              className="rounded-3xl border border-(--color-border) bg-white p-5 shadow-sm"
            >
              <p className="text-sm font-semibold text-(--color-text-muted)">
                {item.label}
              </p>
              <p className="mt-3 font-(--font-display) text-4xl text-(--color-primary)">
                {item.value}
              </p>
            </div>
          ))}
        </div>
        <div className="mt-6 grid gap-4 md:grid-cols-2">
          {adminNavItems.slice(1).map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="rounded-3xl border border-(--color-border) bg-white p-5 text-(--color-primary) shadow-sm transition hover:-translate-y-0.5 hover:shadow-(--shadow-card)"
            >
              <p className="text-lg font-semibold">{item.label}</p>
              <p className="mt-2 text-sm leading-6 text-(--color-text-muted)">
                Przejdź do zarządzania sekcją.
              </p>
            </a>
          ))}
        </div>
      </AdminChrome>
    </Section>
  );
}
