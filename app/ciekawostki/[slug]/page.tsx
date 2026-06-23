import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { Section } from "@/components/layout/Section";
import { createExcerpt, getPostBySlug } from "@/lib/cms";

type BlogPostPageProps = {
  params: Promise<{ slug: string }>;
};

export async function generateMetadata({
  params,
}: BlogPostPageProps): Promise<Metadata> {
  const { slug } = await params;
  const post = await getPostBySlug(slug);

  if (!post) {
    return {};
  }

  return {
    title: post.title,
    description: createExcerpt(post.content, post.excerpt),
  };
}

export default async function BlogPostPage({ params }: BlogPostPageProps) {
  const { slug } = await params;
  const post = await getPostBySlug(slug);

  if (!post) {
    notFound();
  }

  return (
    <Section>
      <article className="mx-auto max-w-3xl">
        <p className="text-sm text-(--color-text-muted)">
          {new Intl.DateTimeFormat("pl-PL").format(
            new Date(post.created_at ?? Date.now()),
          )}
        </p>
        <h1 className="mt-4 font-(--font-display) text-4xl leading-tight text-(--color-primary) sm:text-5xl">
          {post.title}
        </h1>
        {post.excerpt ? (
          <p className="mt-6 text-xl leading-9 text-(--color-text-muted)">
            {post.excerpt}
          </p>
        ) : null}
        {post.image_url ? (
          <img
            src={post.image_url}
            alt=""
            className="mt-10 aspect-16/10 w-full rounded-[1.75rem] object-cover shadow-(--shadow-card)"
          />
        ) : null}
        <div className="mt-10 rounded-[1.75rem] border border-(--color-border) bg-(--color-surface) p-8 shadow-(--shadow-card) ring-1 ring-(--color-primary)/5">
          <div className="whitespace-pre-line leading-8 text-(--color-text-muted)">
            {post.content}
          </div>
        </div>
      </article>
    </Section>
  );
}
