"use server";

import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";
import { requireAdmin } from "@/lib/auth";

function value(formData: FormData, key: string) {
  return String(formData.get(key) ?? "").trim();
}

function checked(formData: FormData, key: string) {
  return formData.get(key) === "on";
}

function slugify(input: string) {
  return input
    .toLowerCase()
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "")
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-+|-+$/g, "");
}

async function uploadImage(bucket: string, file: File, folder: string) {
  const { supabase } = await requireAdmin();

  if (!file.size) {
    return null;
  }

  const extension = file.name.split(".").pop()?.toLowerCase() || "jpg";
  const filePath = `${folder}/${crypto.randomUUID()}.${extension}`;
  const { error } = await supabase.storage.from(bucket).upload(filePath, file, {
    cacheControl: "31536000",
    upsert: false,
  });

  if (error) {
    throw new Error(error.message);
  }

  const { data } = supabase.storage.from(bucket).getPublicUrl(filePath);
  return { path: filePath, url: data.publicUrl };
}

function revalidateCms() {
  revalidatePath("/");
  revalidatePath("/oferta");
  revalidatePath("/ciekawostki");
  revalidatePath("/admin");
}

export async function signOut() {
  const { supabase } = await requireAdmin();
  await supabase.auth.signOut();
  redirect("/admin/login");
}

export async function createService(formData: FormData) {
  const { supabase } = await requireAdmin();

  await supabase.from("services").insert({
    title: value(formData, "title"),
    description: value(formData, "description"),
    price: value(formData, "price"),
    position: Number(value(formData, "position") || 0),
  });

  revalidateCms();
}

export async function updateService(formData: FormData) {
  const { supabase } = await requireAdmin();
  const id = value(formData, "id");

  await supabase
    .from("services")
    .update({
      title: value(formData, "title"),
      description: value(formData, "description"),
      price: value(formData, "price"),
      position: Number(value(formData, "position") || 0),
      updated_at: new Date().toISOString(),
    })
    .eq("id", id);

  revalidateCms();
}

export async function deleteService(formData: FormData) {
  const { supabase } = await requireAdmin();
  await supabase.from("services").delete().eq("id", value(formData, "id"));
  revalidateCms();
}

export async function createPost(formData: FormData) {
  const { supabase } = await requireAdmin();
  const image = await uploadImage("blog-images", formData.get("image") as File, "posts");
  const title = value(formData, "title");

  await supabase.from("posts").insert({
    title,
    slug: value(formData, "slug") || slugify(title),
    excerpt: value(formData, "excerpt"),
    content: value(formData, "content"),
    image_url: image?.url ?? null,
    published: checked(formData, "published"),
  });

  revalidateCms();
}

export async function updatePost(formData: FormData) {
  const { supabase } = await requireAdmin();
  const id = value(formData, "id");
  const title = value(formData, "title");
  const imageFile = formData.get("image") as File;
  const image = imageFile?.size ? await uploadImage("blog-images", imageFile, "posts") : null;

  await supabase
    .from("posts")
    .update({
      title,
      slug: value(formData, "slug") || slugify(title),
      excerpt: value(formData, "excerpt"),
      content: value(formData, "content"),
      image_url: image?.url ?? (value(formData, "current_image_url") || null),
      published: checked(formData, "published"),
      updated_at: new Date().toISOString(),
    })
    .eq("id", id);

  revalidatePath(`/ciekawostki/${value(formData, "slug")}`);
  revalidateCms();
}

export async function deletePost(formData: FormData) {
  const { supabase } = await requireAdmin();
  await supabase.from("posts").delete().eq("id", value(formData, "id"));
  revalidateCms();
}

export async function createCertificate(formData: FormData) {
  const image = await uploadImage("certificate-images", formData.get("image") as File, "certificates");

  if (!image) {
    return;
  }

  const { supabase } = await requireAdmin();
  await supabase.from("certificates").insert({
    title: value(formData, "title") || null,
    image_url: image.url,
    storage_path: image.path,
    position: Number(value(formData, "position") || 0),
  });

  revalidateCms();
}

export async function updateCertificate(formData: FormData) {
  const { supabase } = await requireAdmin();
  await supabase
    .from("certificates")
    .update({
      title: value(formData, "title") || null,
      position: Number(value(formData, "position") || 0),
      updated_at: new Date().toISOString(),
    })
    .eq("id", value(formData, "id"));

  revalidateCms();
}

export async function deleteCertificate(formData: FormData) {
  const { supabase } = await requireAdmin();
  const id = value(formData, "id");
  const storagePath = value(formData, "storage_path");

  if (storagePath) {
    await supabase.storage.from("certificate-images").remove([storagePath]);
  }

  await supabase.from("certificates").delete().eq("id", id);
  revalidateCms();
}
