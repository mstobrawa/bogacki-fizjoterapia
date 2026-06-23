import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { Section } from "@/components/layout/Section";
import { createExcerpt, getPublishedPosts } from "@/lib/cms";

export const metadata: Metadata = {
  title: "Ciekawostki",
  description:
    "Artykuły i porady fizjoterapeutyczne przygotowane pod przyszłą integrację CMS.",
};

export default async function BlogPage() {
  const posts = await getPublishedPosts();

  return (
    <Section>
      <div className="max-w-3xl">
        <p className="text-sm font-semibold uppercase tracking-[0.18em] text-(--color-primary)">
          Ciekawostki
        </p>
        <h1 className="mt-4 font-(--font-display) text-4xl leading-tight text-(--color-primary) sm:text-5xl lg:text-6xl">
          Wiedza, która pomaga lepiej rozumieć ciało
        </h1>
      </div>
      <div className="mt-10 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
        {posts.map((post) => (
          <Link
            key={post.slug}
            href={`/ciekawostki/${post.slug}`}
            className="group overflow-hidden rounded-[1.75rem] border border-(--color-border) bg-white shadow-(--shadow-card) ring-1 ring-(--color-primary)/5 transition duration-300 ease-(--ease-premium) hover:-translate-y-1 hover:border-(--color-primary)/45 hover:shadow-(--shadow-premium)"
          >
            {post.image_url ? (
              <img
                src={post.image_url}
                alt=""
                className="aspect-4/3 w-full object-cover"
              />
            ) : null}
            <div className="p-6">
              <p className="text-sm text-(--color-text-muted)">
                {new Intl.DateTimeFormat("pl-PL").format(
                  new Date(post.created_at ?? Date.now()),
                )}
              </p>
              <h2 className="mt-4 text-xl font-semibold text-(--color-primary)">
                {post.title}
              </h2>
              <p className="mt-4 text-sm leading-7 text-(--color-text-muted)">
                {createExcerpt(post.content, post.excerpt)}
              </p>
              <span className="mt-6 inline-flex items-center gap-2 text-sm font-semibold text-(--color-primary) group-hover:text-(--color-primary-hover)">
                Czytaj dalej{" "}
                <ArrowRight
                  className="transition group-hover:translate-x-1"
                  size={17}
                />
              </span>
            </div>
          </Link>
        ))}
      </div>
    </Section>
  );
}
