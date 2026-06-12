# EARP Lab website

A single-page static website for the EARP Lab. All content lives in one file,
`data.js`, so updating the site never requires touching the page layout or any
code. The site is pure static HTML/CSS/JS: no build step, no Jekyll, no server.

## Files

| File | What it is |
|---|---|
| `index.html` | The whole website. You should rarely need to edit this. |
| `data.js` | **All editable content** — people, publications, news, themes, about text. |
| `admin.html` | A form-based editor. Edit content in your browser, then download an updated `data.js`. |
| `assets/headshots/` | Member photos. |
| `assets/logo-mark.svg` | The lab logo (also used as the favicon). |
| `CNAME` | The custom domain. Edit this to match the domain you register. |
| `.nojekyll` | Tells GitHub Pages to serve the files as-is. |

## Two ways to update the site

**1. Hand it to Claude (Brian).** Drop the new publication, person, or update
into a chat and ask Claude to edit `data.js`. Claude commits the change.

**2. Use the editor (Yuxin, or anyone).** No coding needed:

1. Open `admin.html` in a web browser (double-click the file, or open it from
   the live site at `/admin.html`).
2. Add or edit people, publications, and news using the forms.
3. Click **Download data.js**.
4. On GitHub, open the repository, click `data.js`, click the pencil/upload,
   and replace it with the file you just downloaded. Commit. The site updates
   in a minute or two.

### Adding a person's photo
Put the image in `assets/headshots/` (square photos look best). Then set the
member's **Photo file** to `assets/headshots/yourfile.jpg`. If a photo is
missing or fails to load, the site shows the person's initials instead.

### Adding a publication
Paste the citation in APA 7th format. To italicise a journal title, wrap it in
`<em>…</em>`. Tick **Featured** to also show it on the Home page.

## Hosting at a custom domain (e.g. earplab.org)

The site is already configured for GitHub Pages.

1. Push this folder to a GitHub repository (e.g. `earp-lab/earp-lab.github.io`,
   or any repo with Pages enabled on the `main` branch).
2. In the repo: **Settings → Pages → Build and deployment → Source: Deploy from
   a branch**, branch `main`, folder `/ (root)`.
3. **Register the domain.** You can register it anywhere; you do **not** have to
   host at the registrar. Cloudflare Registrar is recommended (at-cost pricing,
   easy DNS, and you already have a Cloudflare account). Avoid registering it
   through Wix unless you specifically want Wix hosting — Wix tends to lock the
   domain into its own platform and makes pointing it at GitHub less convenient.
4. **Point the domain at GitHub Pages.** In your DNS (e.g. Cloudflare), add:
   - Four `A` records for the apex (`earplab.org`) →
     `185.199.108.153`, `185.199.109.153`, `185.199.110.153`, `185.199.111.153`
   - One `CNAME` record for `www` → `earp-lab.github.io`
   (If using Cloudflare, set these records to **DNS only / grey cloud**, not
   proxied, while GitHub issues the HTTPS certificate.)
5. Edit the `CNAME` file in this repo so it contains exactly the domain you
   registered (e.g. `earplab.org`), and commit.
6. In **Settings → Pages → Custom domain**, enter the domain and enable
   **Enforce HTTPS** once the certificate is issued.

Until the custom domain is live, the site also works at
`https://earp-lab.github.io/`.

## Notes
- "NUS compatible" here means standards-based, accessible, and dependency-free —
  it renders fine on institutional networks and links cleanly from NUS pages.
- Headshots in `.avif` format display in all current browsers. If you ever need
  wider compatibility, save photos as `.jpg`.
