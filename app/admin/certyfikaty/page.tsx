import type { Metadata } from "next";
import { Section } from "@/components/layout/Section";
import { Button } from "@/components/ui/Button";
import { requireAdmin } from "@/lib/auth";
import { AdminImageField } from "../_components/AdminImageField";
import {
  AdminChrome,
  AdminPanel,
  DeleteForm,
  EditableCard,
  inputClass,
} from "../_components/AdminChrome";
import {
  createCertificate,
  deleteCertificate,
  updateCertificate,
} from "../actions";

export const metadata: Metadata = {
  title: "Certyfikaty | Admin",
  robots: {
    index: false,
    follow: false,
  },
};

export default async function AdminCertificatesPage() {
  const { supabase, user } = await requireAdmin();
  const { data: certificates } = await supabase
    .from("certificates")
    .select("*")
    .order("position")
    .order("created_at");

  return (
    <Section tone="surface">
      <AdminChrome
        title="Certyfikaty"
        description="Zarządzaj dokumentami, zdjęciami certyfikatów oraz ich kolejnością."
        userEmail={user.email}
      >
        <AdminPanel title="Dodaj certyfikat">
          <form
            action={createCertificate}
            className="grid gap-4 rounded-[1.35rem] border border-(--color-border) bg-white p-5"
          >
            <div className="grid gap-3 lg:grid-cols-[1fr_8rem]">
              <input
                name="title"
                placeholder="Tytuł opcjonalny"
                className={inputClass}
              />
              <input
                name="position"
                type="number"
                placeholder="Kolejność"
                className={inputClass}
              />
            </div>
            <AdminImageField
              name="image"
              label="Zdjęcie certyfikatu"
              required
            />
            <Button type="submit" className="justify-self-start">
              Dodaj certyfikat
            </Button>
          </form>
        </AdminPanel>

        <div className="mt-6 grid gap-4 md:grid-cols-2">
          {certificates?.map((certificate) => (
            <EditableCard key={certificate.id}>
              {certificate.image_url ? (
                <img
                  src={certificate.image_url}
                  alt={certificate.title ?? "Certyfikat"}
                  className="aspect-4/3 w-full rounded-[1.25rem] object-cover"
                />
              ) : null}
              <form action={updateCertificate} className="mt-4 grid gap-3">
                <input type="hidden" name="id" value={certificate.id} />
                <input
                  name="title"
                  defaultValue={certificate.title ?? ""}
                  className={inputClass}
                />
                <input
                  name="position"
                  type="number"
                  defaultValue={certificate.position}
                  className={inputClass}
                />
                <Button
                  type="submit"
                  variant="secondary"
                  className="justify-self-start"
                >
                  Zapisz
                </Button>
              </form>
              <DeleteForm
                action={deleteCertificate}
                id={certificate.id}
                storagePath={certificate.storage_path ?? ""}
              />
            </EditableCard>
          ))}
        </div>
      </AdminChrome>
    </Section>
  );
}
