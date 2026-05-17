"use server";

import { redirect } from "next/navigation";
import { isAllowedAdminEmail } from "@/lib/auth";
import { createSupabaseServerClient } from "@/lib/supabase/server";

export async function login(formData: FormData) {
  const email = String(formData.get("email") ?? "").trim();
  const password = String(formData.get("password") ?? "");
  const next = String(formData.get("next") ?? "/admin");
  const supabase = await createSupabaseServerClient();

  if (!supabase) {
    redirect("/admin/login?error=missing-env");
  }

  const { data, error } = await supabase.auth.signInWithPassword({ email, password });

  if (error || !isAllowedAdminEmail(data.user?.email)) {
    await supabase.auth.signOut();
    redirect("/admin/login?error=invalid");
  }

  redirect(next.startsWith("/admin") ? next : "/admin");
}
