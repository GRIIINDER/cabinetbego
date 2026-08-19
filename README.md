# Cabinet BEGO — site web

Refonte du site du Bureau d'Études et de Gestion des Organisations (BEGO), avec le même contenu que cabinetbego.com mais un nouveau design (Next.js + TypeScript + Tailwind CSS).

## Stack technique

- **Next.js 16** (App Router, React Server Components)
- **TypeScript**
- **Tailwind CSS v4**
- **Supabase** (optionnel) pour le formulaire de contact, les actualités et les offres d'emploi
- Déploiement prévu sur **Vercel**

## Démarrage local

```bash
npm install
npm run dev
```

Le site est accessible sur [http://localhost:3000](http://localhost:3000).

```bash
npm run build   # build de production
npm run start   # sert le build de production
npm run lint     # ESLint
```

## Structure du contenu

Tout le texte du site (repris du site actuel) est centralisé dans `src/content/` :

- `site.ts` — coordonnées, réseaux sociaux, chiffres clés
- `home.ts` — contenu de la page d'accueil
- `pages.ts` — pages de contenu "info" (vision/mission, services, domaines, ressources, mentions légales…)
- `landings.ts` — pages de sommaire (Qui sommes-nous, Services, Domaines, Références, Ressources)
- `team.ts`, `partners.ts`, `projects.ts`, `careers.ts`, `news.ts`, `contact.ts` — contenus spécifiques

Pour modifier un texte, il suffit d'éditer le fichier de contenu correspondant : aucune page `.tsx` n'a besoin d'être touchée pour un simple changement de texte.

Les pages elles-mêmes vivent dans `src/app/` (App Router), et réutilisent des gabarits communs (`src/components/InfoPageLayout.tsx`, `LandingPageLayout.tsx`) pour garder un rendu cohérent.

## Configurer Supabase (optionnel)

Le site fonctionne sans Supabase (formulaire de contact loggué côté serveur, actualités statiques, aucune offre d'emploi affichée). Pour activer la persistance :

1. Créer un projet sur [supabase.com](https://supabase.com).
2. Dans l'éditeur SQL du projet, exécuter le script `supabase/schema.sql` (tables `contact_messages`, `news_posts`, `job_postings`).
3. Copier `.env.example` vers `.env.local` et renseigner :
   - `NEXT_PUBLIC_SUPABASE_URL`
   - `NEXT_PUBLIC_SUPABASE_ANON_KEY`
   - `SUPABASE_SERVICE_ROLE_KEY` (Project Settings > API — à garder secret, jamais côté client)
4. Gérer les actualités et offres d'emploi directement depuis l'éditeur de table Supabase (`news_posts`, `job_postings`).

## Déploiement

### 1. GitHub

```bash
git remote add origin <url-du-repo-github>
git branch -M main
git push -u origin main
```

### 2. Vercel

1. Importer le repo GitHub dans [Vercel](https://vercel.com/new).
2. Vercel détecte automatiquement Next.js — aucune configuration de build nécessaire.
3. Renseigner les variables d'environnement (si Supabase est utilisé) dans *Project Settings > Environment Variables*.
4. Déployer. Chaque push sur `main` redéploie automatiquement.

### 3. Nom de domaine

Une fois le déploiement validé, pointer `cabinetbego.com` vers Vercel (Project Settings > Domains) en suivant les instructions DNS fournies par Vercel.

## Développement avec Claude Code

Ce projet est conçu pour être poursuivi avec Claude Code en local : ouvrez le dossier `cabinet-bego/` dans votre terminal et lancez `claude` pour continuer l'implémentation (contenu des pages "Ressources" à enrichir, offres d'emploi dynamiques, back-office news, etc.).
