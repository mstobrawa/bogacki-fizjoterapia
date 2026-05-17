import type { Metadata } from "next";
import type { ReactNode } from "react";
import { ImageIcon, Newspaper, Stethoscope, Trash2 } from "lucide-react";
import { Section } from "@/components/layout/Section";
import { Button } from "@/components/ui/Button";
import { requireAdmin } from "@/lib/auth";
import {
  createCertificate,
  createPost,
  createService,
  deleteCertificate,
  deletePost,
  deleteService,
  signOut,
  updateCertificate,
  updatePost,
  updateService,
} from "./actions";

export const metadata: Metadata = {
  title: "Admin",
  robots: {
    index: false,
    follow: false,
  },
};

const inputClass =
  "min-h-11 rounded-2xl border border-[var(--color-border)] bg-white px-4 text-sm outline-none transition focus:border-[var(--color-primary)]";
const areaClass =
  "min-h-28 rounded-2xl border border-[var(--color-border)] bg-white px-4 py-3 text-sm leading-6 outline-none transition focus:border-[var(--color-primary)]";

export default async function AdminPage() {
  const { supabase, user } = await requireAdmin();
  const [{ data: services }, { data: posts }, { data: certificates }] = await Promise.all([
    supabase.from("services").select("*").order("position").order("created_at"),
    supabase.from("posts").select("*").order("created_at", { ascending: false }),
    supabase.from("certificates").select("*").order("position").order("created_at"),
  ]);

  return (
    <Section tone="surface">
      <div className="flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">
        <div className="max-w-3xl">
          <p className="text-sm font-semibold uppercase tracking-[0.18em] text-[var(--color-primary)]">
            Panel administracyjny
          </p>
          <h1 className="mt-4 font-[var(--font-display)] text-4xl font-semibold text-[var(--color-primary)]">
            Lekki CMS strony
          </h1>
          <p className="mt-5 text-sm leading-7 text-[var(--color-text-muted)]">
            Zalogowano jako {user.email}. Zmiany sa zapisywane w Supabase i od razu odswiezaja widoki publiczne.
          </p>
        </div>
        <form action={signOut}>
          <Button type="submit" variant="secondary">
            Wyloguj
          </Button>
        </form>
      </div>

      <div className="mt-11 grid gap-8">
        <AdminPanel title="Oferta" icon={<Stethoscope size={20} />}>
          <form action={createService} className="grid gap-3 rounded-[1.5rem] border border-[var(--color-border)] bg-white p-5">
            <div className="grid gap-3 lg:grid-cols-[1fr_1fr_8rem]">
              <input required name="title" placeholder="Nazwa uslugi" className={inputClass} />
              <input required name="price" placeholder="Cena, np. 150-230 zl" className={inputClass} />
              <input name="position" type="number" placeholder="Kolejnosc" className={inputClass} />
            </div>
            <textarea required name="description" placeholder="Opis uslugi" className={areaClass} />
            <Button type="submit" className="justify-self-start">
              Dodaj usluge
            </Button>
          </form>

          <div className="grid gap-4">
            {services?.map((service) => (
              <EditableCard key={service.id}>
                <form action={updateService} className="grid gap-3">
                  <input type="hidden" name="id" value={service.id} />
                  <div className="grid gap-3 lg:grid-cols-[1fr_1fr_8rem]">
                    <input required name="title" defaultValue={service.title} className={inputClass} />
                    <input required name="price" defaultValue={service.price} className={inputClass} />
                    <input name="position" type="number" defaultValue={service.position} className={inputClass} />
                  </div>
                  <textarea required name="description" defaultValue={service.description} className={areaClass} />
                  <Button type="submit" variant="secondary" className="justify-self-start">
                    Zapisz
                  </Button>
                </form>
                <DeleteForm action={deleteService} id={service.id} />
              </EditableCard>
            ))}
          </div>
        </AdminPanel>

        <AdminPanel title="Ciekawostki" icon={<Newspaper size={20} />}>
          <form action={createPost} className="grid gap-3 rounded-[1.5rem] border border-[var(--color-border)] bg-white p-5">
            <div className="grid gap-3 lg:grid-cols-2">
              <input required name="title" placeholder="Tytul" className={inputClass} />
              <input name="slug" placeholder="slug-opcjonalnie" className={inputClass} />
            </div>
            <input name="excerpt" placeholder="Krotki opis na karte" className={inputClass} />
            <input name="image" type="file" accept="image/*" className={inputClass} />
            <textarea required name="content" placeholder="Tresc wpisu" className={`${areaClass} min-h-40`} />
            <label className="flex items-center gap-3 text-sm text-[var(--color-primary)]">
              <input name="published" type="checkbox" defaultChecked /> Opublikowany
            </label>
            <Button type="submit" className="justify-self-start">
              Dodaj wpis
            </Button>
          </form>

          <div className="grid gap-4">
            {posts?.map((post) => (
              <EditableCard key={post.id}>
                <form action={updatePost} className="grid gap-3">
                  <input type="hidden" name="id" value={post.id} />
                  <input type="hidden" name="current_image_url" value={post.image_url ?? ""} />
                  <div className="grid gap-3 lg:grid-cols-2">
                    <input required name="title" defaultValue={post.title} className={inputClass} />
                    <input required name="slug" defaultValue={post.slug} className={inputClass} />
                  </div>
                  <input name="excerpt" defaultValue={post.excerpt ?? ""} className={inputClass} />
                  <input name="image" type="file" accept="image/*" className={inputClass} />
                  <textarea required name="content" defaultValue={post.content} className={`${areaClass} min-h-40`} />
                  <label className="flex items-center gap-3 text-sm text-[var(--color-primary)]">
                    <input name="published" type="checkbox" defaultChecked={post.published} /> Opublikowany
                  </label>
                  <Button type="submit" variant="secondary" className="justify-self-start">
                    Zapisz
                  </Button>
                </form>
                <DeleteForm action={deletePost} id={post.id} />
              </EditableCard>
            ))}
          </div>
        </AdminPanel>

        <AdminPanel title="Certyfikaty" icon={<ImageIcon size={20} />}>
          <form action={createCertificate} className="grid gap-3 rounded-[1.5rem] border border-[var(--color-border)] bg-white p-5">
            <div className="grid gap-3 lg:grid-cols-[1fr_1fr_8rem]">
              <input name="title" placeholder="Tytul opcjonalny" className={inputClass} />
              <input required name="image" type="file" accept="image/*" className={inputClass} />
              <input name="position" type="number" placeholder="Kolejnosc" className={inputClass} />
            </div>
            <Button type="submit" className="justify-self-start">
              Dodaj certyfikat
            </Button>
          </form>

          <div className="grid gap-4 md:grid-cols-2">
            {certificates?.map((certificate) => (
              <EditableCard key={certificate.id}>
                {certificate.image_url ? (
                  <img
                    src={certificate.image_url}
                    alt={certificate.title ?? "Certyfikat"}
                    className="aspect-[4/3] w-full rounded-3xl object-cover"
                  />
                ) : null}
                <form action={updateCertificate} className="mt-4 grid gap-3">
                  <input type="hidden" name="id" value={certificate.id} />
                  <input name="title" defaultValue={certificate.title ?? ""} className={inputClass} />
                  <input name="position" type="number" defaultValue={certificate.position} className={inputClass} />
                  <Button type="submit" variant="secondary" className="justify-self-start">
                    Zapisz
                  </Button>
                </form>
                <DeleteForm action={deleteCertificate} id={certificate.id} storagePath={certificate.storage_path ?? ""} />
              </EditableCard>
            ))}
          </div>
        </AdminPanel>
      </div>
    </Section>
  );
}

function AdminPanel({ title, icon, children }: { title: string; icon: ReactNode; children: ReactNode }) {
  return (
    <section className="rounded-[1.75rem] border border-[var(--color-border)] bg-[var(--color-bg)] p-5 shadow-[var(--shadow-card)] ring-1 ring-[var(--color-primary)]/5 sm:p-6">
      <h2 className="mb-5 flex items-center gap-3 text-xl font-semibold text-[var(--color-primary)]">
        <span className="grid size-10 place-items-center rounded-2xl bg-[var(--color-primary)] text-white">{icon}</span>
        {title}
      </h2>
      <div className="grid gap-5">{children}</div>
    </section>
  );
}

function EditableCard({ children }: { children: ReactNode }) {
  return <div className="rounded-[1.5rem] border border-[var(--color-border)] bg-white p-5">{children}</div>;
}

function DeleteForm({
  action,
  id,
  storagePath = "",
}: {
  action: (formData: FormData) => Promise<void>;
  id: string;
  storagePath?: string;
}) {
  return (
    <form action={action} className="mt-3">
      <input type="hidden" name="id" value={id} />
      <input type="hidden" name="storage_path" value={storagePath} />
      <button
        type="submit"
        className="inline-flex min-h-10 items-center gap-2 rounded-full px-4 text-sm font-semibold text-[var(--color-accent)] transition hover:bg-[var(--color-accent)]/10"
      >
        <Trash2 size={16} />
        Usun
      </button>
    </form>
  );
}
