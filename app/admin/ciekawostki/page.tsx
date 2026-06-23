import type { Metadata } from "next";
import { Section } from "@/components/layout/Section";
import { Button } from "@/components/ui/Button";
import { createExcerpt } from "@/lib/cms";
import { requireAdmin } from "@/lib/auth";
import { AdminImageField } from "../_components/AdminImageField";
import {
  AdminChrome,
  AdminPanel,
  DeleteForm,
  areaClass,
  inputClass,
} from "../_components/AdminChrome";
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
  const { data: posts } = await supabase
    .from("posts")
    .select("*")
    .order("created_at", { ascending: false });

  return (
    <Section tone="surface">
      <AdminChrome
        title="Ciekawostki"
        description="Dodawaj i edytuj wpisy blogowe widoczne w sekcji Ciekawostki."
        userEmail={user.email}
      >
        <AdminPanel title="Dodaj wpis">
          <form
            action={createPost}
            className="grid gap-4 rounded-[1.35rem] border border-(--color-border) bg-white p-5"
          >
            <div className="grid gap-3 lg:grid-cols-2">
              <input
                required
                name="title"
                placeholder="Tytuł"
                className={inputClass}
              />
              <input
                name="slug"
                placeholder="slug-opcjonalnie"
                className={inputClass}
              />
            </div>
            <input
              name="excerpt"
              placeholder="Krótki opis na kartę"
              className={inputClass}
            />
            <AdminImageField
              name="image"
              label="Zdjęcie wpisu"
              previewClassName="h-28 w-44 rounded-[1rem] border border-[var(--color-border)] object-cover"
            />
            <textarea
              required
              name="content"
              placeholder="Treść wpisu"
              className={`${areaClass} min-h-36`}
            />
            <label className="flex items-center gap-3 text-sm text-(--color-primary)">
              <input name="published" type="checkbox" defaultChecked />{" "}
              Opublikowany
            </label>
            <Button type="submit" className="justify-self-start">
              Dodaj wpis
            </Button>
          </form>
        </AdminPanel>

        <div className="mt-6 grid gap-3">
          {posts?.map((post) => (
            <article
              key={post.id}
              className="rounded-[1.35rem] border border-(--color-border) bg-white p-4 shadow-sm"
            >
              <div className="grid gap-4 sm:grid-cols-[6.5rem_1fr] sm:items-start">
                <div className="h-24 overflow-hidden rounded-2xl border border-(--color-border) bg-(--color-surface)">
                  {post.image_url ? (
                    <img
                      src={post.image_url}
                      alt=""
                      className="h-full w-full object-cover"
                    />
                  ) : (
                    <div className="h-full w-full bg-[linear-gradient(135deg,#F4EFEA_0%,#FFFFFF_55%,#eef3f4_100%)]" />
                  )}
                </div>
                <div className="min-w-0">
                  <div className="flex flex-col gap-2 sm:flex-row sm:items-start sm:justify-between">
                    <div>
                      <h2 className="text-base font-semibold text-(--color-primary)">
                        {post.title}
                      </h2>
                      <p className="mt-1 text-xs font-semibold uppercase tracking-[0.14em] text-(--color-text-muted)">
                        {post.published ? "Opublikowany" : "Szkic"}
                      </p>
                    </div>
                    <div className="flex items-center gap-2">
                      <DeleteForm
                        action={deletePost}
                        id={post.id}
                        className=""
                      />
                    </div>
                  </div>
                  <p className="mt-3 line-clamp-2 text-sm leading-6 text-(--color-text-muted)">
                    {createExcerpt(post.content, post.excerpt)}
                  </p>
                  <details className="mt-4">
                    <summary className="inline-flex min-h-10 cursor-pointer list-none items-center rounded-full border border-(--color-primary) bg-white px-4 text-sm font-semibold text-(--color-primary) shadow-sm transition hover:bg-(--color-surface)">
                      Edytuj wpis
                    </summary>
                    <div className="mt-4 rounded-[1.15rem] border border-(--color-border) bg-(--color-bg) p-4">
                      <form action={updatePost} className="grid gap-3">
                        <input type="hidden" name="id" value={post.id} />
                        <input
                          type="hidden"
                          name="current_image_url"
                          value={post.image_url ?? ""}
                        />
                        <div className="grid gap-3 lg:grid-cols-2">
                          <input
                            required
                            name="title"
                            defaultValue={post.title}
                            className={inputClass}
                          />
                          <input
                            required
                            name="slug"
                            defaultValue={post.slug}
                            className={inputClass}
                          />
                        </div>
                        <input
                          name="excerpt"
                          defaultValue={post.excerpt ?? ""}
                          className={inputClass}
                        />
                        <AdminImageField
                          name="image"
                          label="Zdjęcie wpisu"
                          currentUrl={post.image_url}
                          previewClassName="h-28 w-44 rounded-[1rem] border border-[var(--color-border)] object-cover"
                        />
                        <textarea
                          required
                          name="content"
                          defaultValue={post.content}
                          className={`${areaClass} min-h-36`}
                        />
                        <label className="flex items-center gap-3 text-sm text-(--color-primary)">
                          <input
                            name="published"
                            type="checkbox"
                            defaultChecked={post.published}
                          />{" "}
                          Opublikowany
                        </label>
                        <Button
                          type="submit"
                          variant="secondary"
                          className="min-h-11 justify-self-start px-5"
                        >
                          Zapisz
                        </Button>
                      </form>
                    </div>
                  </details>
                </div>
              </div>
            </article>
          ))}
        </div>
      </AdminChrome>
    </Section>
  );
}
