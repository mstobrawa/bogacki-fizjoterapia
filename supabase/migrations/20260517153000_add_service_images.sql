alter table public.services
  add column if not exists image_url text,
  add column if not exists storage_path text;

insert into storage.buckets (id, name, public)
values ('service-images', 'service-images', true)
on conflict (id) do nothing;

create policy "Public can read service images"
  on storage.objects for select
  using (bucket_id = 'service-images');

create policy "Authenticated admins can manage service images"
  on storage.objects for all
  to authenticated
  using (bucket_id = 'service-images' and public.is_admin())
  with check (bucket_id = 'service-images' and public.is_admin());
