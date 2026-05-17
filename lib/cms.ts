import { certificates as fallbackCertificates, posts as fallbackPosts, services as fallbackServices } from "@/lib/content";
import type { BlogPost, Certificate, Service } from "@/lib/content";
import { createSupabaseServerClient } from "@/lib/supabase/server";

export function createExcerpt(content?: string | null, fallback?: string | null) {
  if (fallback) {
    return fallback;
  }

  const plainText = content?.replace(/\s+/g, " ").trim() ?? "";
  return plainText.length > 140 ? `${plainText.slice(0, 137)}...` : plainText;
}

export async function getServices(): Promise<Service[]> {
  const supabase = await createSupabaseServerClient();

  if (!supabase) {
    return fallbackServices;
  }

  const { data, error } = await supabase.from("services").select("*").order("position").order("created_at");

  return error || !data?.length ? fallbackServices : data;
}

export async function getPublishedPosts(): Promise<BlogPost[]> {
  const supabase = await createSupabaseServerClient();

  if (!supabase) {
    return fallbackPosts;
  }

  const { data, error } = await supabase
    .from("posts")
    .select("*")
    .eq("published", true)
    .order("created_at", { ascending: false });

  return error || !data?.length ? fallbackPosts : data;
}

export async function getPostBySlug(slug: string): Promise<BlogPost | null> {
  const supabase = await createSupabaseServerClient();

  if (!supabase) {
    return fallbackPosts.find((post) => post.slug === slug) ?? null;
  }

  const { data, error } = await supabase
    .from("posts")
    .select("*")
    .eq("slug", slug)
    .eq("published", true)
    .maybeSingle();

  if (error) {
    return fallbackPosts.find((post) => post.slug === slug) ?? null;
  }

  return data;
}

export async function getCertificates(): Promise<Certificate[]> {
  const supabase = await createSupabaseServerClient();

  if (!supabase) {
    return fallbackCertificates;
  }

  const { data, error } = await supabase.from("certificates").select("*").order("position").order("created_at");

  return error || !data?.length ? fallbackCertificates : data;
}
