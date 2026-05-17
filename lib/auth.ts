import { redirect } from "next/navigation";
import { createSupabaseServerClient } from "@/lib/supabase/server";

export function isAllowedAdminEmail(email?: string | null) {
  const configuredEmails = process.env.ADMIN_EMAILS?.split(",")
    .map((emailAddress) => emailAddress.trim().toLowerCase())
    .filter(Boolean);

  if (!configuredEmails?.length) {
    return Boolean(email);
  }

  return Boolean(email && configuredEmails.includes(email.toLowerCase()));
}

export async function requireAdmin() {
  const supabase = await createSupabaseServerClient();

  if (!supabase) {
    redirect("/admin/login?error=missing-env");
  }

  const {
    data: { user },
  } = await supabase.auth.getUser();

  if (!user || !isAllowedAdminEmail(user.email)) {
    redirect("/admin/login");
  }

  return { supabase, user };
}
