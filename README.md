# Quran Tadabbur — Roman Urdu

Static Quran Tadabbur app with 114 Surahs, Ayat search, dark mode, and Supabase email/password cloud sync. Notes are saved locally first and then synced to the logged-in user account in Supabase.

## GitHub + Supabase security
- The browser uses only the Supabase **Publishable Key**.
- Never use a Supabase **Secret / service-role key** in this project.
- `supabase-config.js` is listed in `.gitignore`, so it is not committed to GitHub.
- GitHub Pages deployment creates `supabase-config.js` from GitHub Actions Secrets.

## GitHub Secrets required
Repository → Settings → Secrets and variables → Actions → New repository secret:
- `SUPABASE_URL` = `https://YOUR_PROJECT_REF.supabase.co`
- `SUPABASE_PUBLISHABLE_KEY` = your `sb_publishable_...` key

The deployed site can still expose the publishable key to the browser; that is expected for a client-side Supabase app. RLS is the protection for user data.

## Supabase table
Table: `tadabbur_data`
Columns used by the app:
- `id` uuid primary key
- `User_id` uuid
- `data` jsonb
- `created_at` timestamptz

RLS policy should allow authenticated users only when `auth.uid() = "User_id"` for both USING and WITH CHECK.
