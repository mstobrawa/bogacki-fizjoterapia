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
  areaClass,
  inputClass,
} from "../_components/AdminChrome";
import { createService, deleteService, updateService } from "../actions";

export const metadata: Metadata = {
  title: "Oferta | Admin",
  robots: {
    index: false,
    follow: false,
  },
};

export default async function AdminOfferPage() {
  const { supabase, user } = await requireAdmin();
  const { data: services } = await supabase
    .from("services")
    .select("*")
    .order("position")
    .order("created_at");

  return (
    <Section tone="surface">
      <AdminChrome
        title="Oferta"
        description="Zarządzaj usługami, cenami, kolejnością i opcjonalnymi zdjęciami kart oferty."
        userEmail={user.email}
      >
        <AdminPanel title="Dodaj usługę">
          <form
            action={createService}
            className="grid gap-4 rounded-[1.35rem] border border-(--color-border) bg-white p-5"
          >
            <div className="grid gap-3 lg:grid-cols-[1fr_1fr_8rem]">
              <input
                required
                name="title"
                placeholder="Nazwa usługi"
                className={inputClass}
              />
              <input
                required
                name="price"
                placeholder="Cena, np. 150-230 zł"
                className={inputClass}
              />
              <input
                name="position"
                type="number"
                placeholder="Kolejność"
                className={inputClass}
              />
            </div>
            <textarea
              required
              name="description"
              placeholder="Opis usługi"
              className={areaClass}
            />
            <AdminImageField name="image" label="Zdjęcie usługi (opcjonalne)" />
            <Button type="submit" className="justify-self-start">
              Dodaj usługę
            </Button>
          </form>
        </AdminPanel>

        <div className="mt-6 grid gap-4">
          {services?.map((service) => (
            <EditableCard key={service.id}>
              <form action={updateService} className="grid gap-3">
                <input type="hidden" name="id" value={service.id} />
                <input
                  type="hidden"
                  name="current_image_url"
                  value={service.image_url ?? ""}
                />
                <input
                  type="hidden"
                  name="current_storage_path"
                  value={service.storage_path ?? ""}
                />
                <div className="grid gap-3 lg:grid-cols-[1fr_1fr_8rem]">
                  <input
                    required
                    name="title"
                    defaultValue={service.title}
                    className={inputClass}
                  />
                  <input
                    required
                    name="price"
                    defaultValue={service.price}
                    className={inputClass}
                  />
                  <input
                    name="position"
                    type="number"
                    defaultValue={service.position}
                    className={inputClass}
                  />
                </div>
                <textarea
                  required
                  name="description"
                  defaultValue={service.description}
                  className={areaClass}
                />
                <AdminImageField
                  name="image"
                  label="Zdjęcie usługi"
                  currentUrl={service.image_url}
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
                action={deleteService}
                id={service.id}
                storagePath={service.storage_path ?? ""}
              />
            </EditableCard>
          ))}
        </div>
      </AdminChrome>
    </Section>
  );
}
