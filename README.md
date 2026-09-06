# R. R. Interior — Website

React + Vite. Furniture contractor and interior decorator site for R. R. Interior, Mumbai.

---

## Running it

You need Node.js 18 or newer.

```bash
npm install     # once
npm run dev     # http://localhost:5173
npm run build   # production files land in /dist
npm run preview # serve the built /dist locally to check before deploying
```

Deploying is a matter of running `npm run build` and uploading `/dist`. It is a static
site — no server, no database. Netlify, Vercel, Cloudflare Pages and Hostinger all work.
If you deploy to a subfolder rather than a domain root, set `base: '/subfolder/'` in
`vite.config.js`.

---

## Project structure

```
public/
  img/                     41 project photos, logo files, team portrait
  vid/                     rr-transformation.mp4 (already slowed and web-encoded)
src/
  main.jsx                 entry point
  App.jsx                  section order — reorder the page here
  index.css                all styling; design tokens are the :root variables at the top
  data/content.js          ← ALL TEXT, PHOTOS AND PHONE NUMBERS LIVE HERE
  hooks/
    useReveal.js           scroll-into-view fade, used by most sections
  components/
    Nav.jsx                sticky header, click-to-call button
    Hero.jsx               3-panel auto-rotating carousel, pauses on hover
    Ticker.jsx             scrolling strip of completed projects
    About.jsx              family positioning + four figures
    VideoSection.jsx       bare shell to handover, muted autoplay loop
    ProjectIndex.jsx       project list with cursor-following photo preview
    Gallery.jsx            filterable grid
    Lightbox.jsx           full-screen image view (Esc or click outside closes)
    Process.jsx            six-stage job process
    Team.jsx               five family members with direct lines
    Enquiry.jsx            scope builder — collects requirements, shows no prices
    Contact.jsx            contact details, map, full form
    MapPanel.jsx           stylised map + Open in Maps link
    Footer.jsx             services, links, all five numbers, address, GST
    WhatsAppFab.jsx        floating WhatsApp button
    Icons.jsx              inline SVG icons
```

---

## Editing content

Almost everything is in **`src/data/content.js`**. You should not need to touch a
component to change copy, swap a photo, add a project, or update a phone number.

**Add a gallery photo**
1. Drop the file into `public/img/`, e.g. `newproject-living.jpg`
2. Add an entry to the `GALLERY` array:
   ```js
   { file: 'newproject-living', title: 'Living room', sub: 'Project · materials', cat: 'living' }
   ```
   `cat` must be one of the keys in `GALLERY_FILTERS`. `size: 'tall'` spans two rows,
   `size: 'wide'` spans two columns — use them sparingly to keep the grid interesting.

**Add a project** — append to the `PROJECTS` array. `img` is the photo that appears when
someone hovers that row.

**Change a phone number** — edit `TEAM`. It updates the team cards and the footer at once.

**Change colours or type** — the `:root` block at the top of `src/index.css`. `--red` is
the brand red sampled from the client's own logo (`#DE0600`).

---

## Still to do before launch

Marked with `// TODO` in `content.js`:

- **Founding year** and **total projects completed** — the two placeholder figures in
  `ABOUT.stats`. These are the strongest numbers on the page once confirmed.
- **Area and year per project** — add `area` and `year` to each `PROJECTS` entry, then
  render them in `ProjectIndex.jsx` alongside `type` and `location`.
- **Higher-resolution photographs.** The current images were extracted from the client's
  PDFs and have been compressed once already. They hold up at the sizes used, but ask for
  the photographer's originals — especially Horizon, Fazlani and Rajeev Goyal.

## Wiring up the forms

Both forms currently validate and show a success state, then `console.log` the payload.
Two places to connect a backend:

- `src/components/Enquiry.jsx` → `submit()`
- `src/components/Contact.jsx` → `submit()`

Simplest options: Formspree or Web3Forms (no backend needed), or a small serverless
function that emails `rrinterior@gmail.com` and pings WhatsApp. Given how this business
runs, a WhatsApp notification will get answered faster than email.

---

## Notes on a few decisions

**No prices anywhere.** The enquiry builder collects scope, finish level, timeline and
area, and hands over a qualified lead. Rates move, and a stale figure on a website costs
more credibility than it earns.

**The map is a drawing, not an embed.** A live Google Maps iframe costs roughly 1 MB and
drags the page score down. `MapPanel.jsx` renders an SVG and the button opens Maps
properly. If a real embed is wanted, load the iframe only after a click.

**Accessibility.** Buttons are real buttons, the lightbox traps Escape, the carousel
respects `prefers-reduced-motion`, and every animation is disabled for users who ask for
that in their OS settings.

**Performance.** Gallery images are lazy-loaded. The one thing worth doing before launch
is converting the photos to WebP — it will roughly halve the page weight, which matters on
Indian mobile data.
