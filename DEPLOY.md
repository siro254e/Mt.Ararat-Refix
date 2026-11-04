# Deployment — Mt. Ararat Shinners School

## What is in this project

- React 19 + Vite 8 + Tailwind 4 single-page site (all sections in one page).
- `dist/` is the deployable build. **Upload only `dist/`**, not the project folder.
- `dist/` contains: `index.html`, `assets/` (JS + CSS), `images/` (WebP photos), `og-image.jpg`, `robots.txt`, `.htaccess`.

## Live preview (Netlify)

**https://mt-araratschoolpreview.netlify.app**

- Netlify site: `mt-araratschoolpreview` (team: sirphilo’s team)
- Dashboard: https://app.netlify.com/projects/mt-araratschoolpreview
- Free tier, HTTPS, independent of any local machine.

Publish a new build:

```powershell
cd C:\Users\Administrator\Downloads\mt-ararat-shinners-school
npm run build
npx netlify-cli deploy --prod --dir=dist
```

Netlify-only files (ignored by Apache/Hostinger):

- `public/_redirects` — SPA fallback (`/* /index.html 200`)
- `public/_headers` — 1-year immutable caching for `/assets/*` and `/images/*`

When the real domain is ready, add it in Netlify → Domain management, or move the same `dist/` to Hostinger.

## Build

```powershell
npm install --legacy-peer-deps
npm run build
```

(`--legacy-peer-deps` is needed because the exported `package.json` pins `esbuild@0.25` while Vite 8 expects `0.27+`.)

## Hostinger — static hosting (recommended)

1. hPanel → **Websites → Manage → File Manager** (or FTP/SFTP).
2. Open `public_html/` and delete the default `default.php` / placeholder files.
3. Upload **everything inside `dist/`** into `public_html/` (`.htaccess` is hidden — enable "show hidden files").
4. hPanel → **Advanced → SSL** → make sure the free SSL certificate is active, then enable **Force HTTPS**.
5. Point the domain/subdomain in **hPanel → Domains** and wait for DNS.

The included `.htaccess` already handles:
- HTTPS + non-www redirects
- SPA fallback (so `/#admissions` style links and refreshes work)
- gzip compression
- 1-year caching for hashed assets and images, no-cache for `index.html`

## After the domain is known

Replace these placeholders (currently relative/absent):

| Item | File | Value |
|---|---|---|
| Canonical URL | `index.html` | `<link rel="canonical" href="https://DOMAIN/">` |
| `og:url` + absolute `og:image` | `index.html` | `https://DOMAIN/` and `https://DOMAIN/og-image.jpg` |
| Sitemap | `public/sitemap.xml` | one URL entry for `https://DOMAIN/` |
| Sitemap line in robots.txt | `public/robots.txt` | `Sitemap: https://DOMAIN/sitemap.xml` |

Then rebuild and re-upload.

## Forms

Admission enquiries are delivered through **WhatsApp** (`wa.me/254768358487`) with the parent's details pre-filled. Nothing is stored on the server, so there is no personal data to secure.

## AI "Live Campus Navigator" (optional)

`GroundedMapNavigator` calls `POST /api/maps-grounding`, which only exists in `server.ts` (Node/Express). On static hosting the component automatically falls back to a fixed directions text.

To keep the live Gemini answers on Hostinger shared hosting, add a small PHP proxy (`api/maps-grounding.php`) that calls the Gemini REST API with a key stored outside `public_html`, and point the fetch at it. Requires the Gemini API key in Hostinger env/secrets — never in client code.

## Google Maps

The map works without a key via `maps.google.com/maps?...&output=embed`.
If you want the keyed Embed API (street view, custom styling), set `VITE_GOOGLE_MAPS_API_KEY` at build time **and restrict the key by HTTP referrer** to your domain.

## Content still to confirm with the school

- Testimonials (3 parent quotes) and calendar events are currently AI-authored but presented as real — kept at your request.
- Official school email address (the placeholder was removed; the contact block hides automatically while empty).
- Fees/term dates are described as "shared on request" — confirm that is accurate.
