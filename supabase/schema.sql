-- Cabinet BEGO — schéma Supabase
-- À exécuter dans l'éditeur SQL du projet Supabase (ou via `supabase db push`).

-- ============================================================
-- Table: contact_messages
-- Messages envoyés depuis le formulaire /contact du site.
-- Écriture effectuée côté serveur (API route) avec la clé service_role,
-- donc RLS reste fermé : aucun accès direct depuis le client.
-- ============================================================
create table if not exists public.contact_messages (
  id uuid primary key default gen_random_uuid(),
  created_at timestamptz not null default now(),
  first_name text not null,
  last_name text not null,
  email text not null,
  phone text,
  subject text not null,
  message text not null,
  handled boolean not null default false
);

alter table public.contact_messages enable row level security;
-- Aucune policy publique : uniquement accessible via la clé service_role
-- (utilisée par la route API /api/contact et le dashboard Supabase).

-- ============================================================
-- Table: news_posts
-- Actualités affichées sur /news. Gérées depuis le dashboard Supabase
-- (table editor) ou un futur back-office. Lecture publique des articles
-- publiés uniquement.
-- ============================================================
create table if not exists public.news_posts (
  id uuid primary key default gen_random_uuid(),
  created_at timestamptz not null default now(),
  published_at date,
  title text not null,
  location text,
  excerpt text not null,
  body text,
  is_published boolean not null default true
);

alter table public.news_posts enable row level security;

create policy "Public can read published news"
  on public.news_posts
  for select
  using (is_published = true);

-- ============================================================
-- Table: job_postings
-- Offres d'emploi affichées sur /carrieres. Lecture publique des offres
-- ouvertes uniquement.
-- ============================================================
create table if not exists public.job_postings (
  id uuid primary key default gen_random_uuid(),
  created_at timestamptz not null default now(),
  title text not null,
  location text,
  contract_type text,
  description text not null,
  deadline date,
  is_open boolean not null default true
);

alter table public.job_postings enable row level security;

create policy "Public can read open job postings"
  on public.job_postings
  for select
  using (is_open = true);

-- ============================================================
-- Index utiles
-- ============================================================
create index if not exists news_posts_published_at_idx
  on public.news_posts (published_at desc);

create index if not exists contact_messages_created_at_idx
  on public.contact_messages (created_at desc);
