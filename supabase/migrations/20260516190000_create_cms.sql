create extension if not exists "pgcrypto";

create table if not exists public.services (
  id uuid primary key default gen_random_uuid(),
  title text not null,
  description text not null,
  price text not null default '',
  position integer not null default 0,
  created_at timestamptz not null default now(),
  updated_at timestamptz not null default now()
);

create table if not exists public.posts (
  id uuid primary key default gen_random_uuid(),
  title text not null,
  slug text not null unique,
  image_url text,
  excerpt text,
  content text not null,
  published boolean not null default false,
  created_at timestamptz not null default now(),
  updated_at timestamptz not null default now()
);

create table if not exists public.certificates (
  id uuid primary key default gen_random_uuid(),
  title text,
  image_url text not null,
  storage_path text,
  position integer not null default 0,
  created_at timestamptz not null default now(),
  updated_at timestamptz not null default now()
);

create table if not exists public.admin_users (
  id uuid primary key default gen_random_uuid(),
  email text not null unique,
  created_at timestamptz not null default now()
);

create or replace function public.is_admin()
returns boolean
language sql
stable
security definer
set search_path = public
as $$
  select exists (
    select 1
    from public.admin_users
    where lower(email) = lower(coalesce(auth.jwt() ->> 'email', ''))
  );
$$;

create index if not exists services_position_idx on public.services (position, created_at);
create index if not exists posts_published_created_at_idx on public.posts (published, created_at desc);
create index if not exists certificates_position_idx on public.certificates (position, created_at);

alter table public.services enable row level security;
alter table public.posts enable row level security;
alter table public.certificates enable row level security;
alter table public.admin_users enable row level security;

create policy "Public can read services"
  on public.services for select
  using (true);

create policy "Authenticated admins can manage services"
  on public.services for all
  to authenticated
  using (public.is_admin())
  with check (public.is_admin());

create policy "Public can read published posts"
  on public.posts for select
  using (published = true);

create policy "Authenticated admins can read all posts"
  on public.posts for select
  to authenticated
  using (public.is_admin());

create policy "Authenticated admins can manage posts"
  on public.posts for all
  to authenticated
  using (public.is_admin())
  with check (public.is_admin());

create policy "Public can read certificates"
  on public.certificates for select
  using (true);

create policy "Authenticated admins can manage certificates"
  on public.certificates for all
  to authenticated
  using (public.is_admin())
  with check (public.is_admin());

create policy "Authenticated admins can read admin users"
  on public.admin_users for select
  to authenticated
  using (public.is_admin());

insert into storage.buckets (id, name, public)
values ('blog-images', 'blog-images', true)
on conflict (id) do nothing;

insert into storage.buckets (id, name, public)
values ('certificate-images', 'certificate-images', true)
on conflict (id) do nothing;

create policy "Public can read blog images"
  on storage.objects for select
  using (bucket_id = 'blog-images');

create policy "Authenticated admins can manage blog images"
  on storage.objects for all
  to authenticated
  using (bucket_id = 'blog-images' and public.is_admin())
  with check (bucket_id = 'blog-images' and public.is_admin());

create policy "Public can read certificate images"
  on storage.objects for select
  using (bucket_id = 'certificate-images');

create policy "Authenticated admins can manage certificate images"
  on storage.objects for all
  to authenticated
  using (bucket_id = 'certificate-images' and public.is_admin())
  with check (bucket_id = 'certificate-images' and public.is_admin());
