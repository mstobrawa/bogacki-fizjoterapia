import type { Metadata } from "next";
import { Section } from "@/components/layout/Section";
import { Button } from "@/components/ui/Button";
import { requireAdmin } from "@/lib/auth";
import { AdminImageField } from "../_components/AdminImageField";
import { AdminChrome, AdminPanel, DeleteForm, EditableCard, areaClass, inputClass } from "../_components/AdminChrome";
import { createPost, deletePost, updatePost } from "../actions";

export const metadata: Metadata = {
  title: "Ciekawostki | Admin",
  robots: {
    index: false,
    follow: false,
  },
};

export default async function AdminPostsPage() {
  const { supabase, user } = await requireAdmin();
  const { data: posts } = await supabase.from("posts").select("*").order("created_at", { ascending: false });

  return (
    <Section tone="surface">
      <AdminChrome
        title="Ciekawostki"
        description="Dodawaj i edytuj wpisy blogowe widoczne w sekcji Ciekawostki."
        userEmail={user.email}
      >
        <AdminPanel title="Dodaj wpis">
          <form action={createPost} className="grid gap-4 rounded-[1.35rem] border border-[var(--color-border)] bg-white p-5">
            <div className="grid gap-3 lg:grid-cols-2">
              <input required name="title" placeholder="Tytuł" className={inputClass} />
              <input name="slug" placeholder="slug-opcjonalnie" className={inputClass} />
            </div>
            <input name="excerpt" placeholder="Krótki opis na kartę" className={inputClass} />
            <AdminImageField name="image" label="Zdjęcie wpisu" />
            <textarea required name="content" placeholder="Treść wpisu" className={`${areaClass} min-h-40`} />
            <label className="flex items-center gap-3 text-sm text-[var(--color-primary)]">
              <input name="published" type="checkbox" defaultChecked /> Opublikowany
            </label>
            <Button type="submit" className="justify-self-start">
              Dodaj wpis
            </Button>
          </form>
        </AdminPanel>

        <div className="mt-6 grid gap-4">
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
                <AdminImageField name="image" label="Zdjęcie wpisu" currentUrl={post.image_url} />
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
      </AdminChrome>
    </Section>
  );
}
