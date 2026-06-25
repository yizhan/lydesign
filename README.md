# LYDesign — Studio Website

Marketing and portfolio website for **LYDesign**, an Auckland-based residential architecture studio. Built with Next.js 15 (App Router) and CSS Modules.

---

## Tech Stack

- **Framework**: Next.js 15, App Router, React 19
- **Styling**: CSS Modules (no CSS framework)
- **Images**: `next/image` with static assets from `/public` and Unsplash remote patterns
- **Fonts**: Google Fonts stylesheet link in `src/app/layout.tsx` — Montserrat across display, body, and logo typography
- **Language**: TypeScript throughout
- **Deployment**: Vercel (recommended)

---

## Design System

### Palette
A warm neutral palette with high contrast black ink on white/paper surfaces. Dark pages (home, project listing) use near-black `#0f0f0e` backgrounds with off-white `#f8f5ed` text.

| Token | Value | Usage |
|---|---|---|
| `--color-ink` | `#10100f` | Body text, headings |
| `--color-paper` | `#f4f1ea` | Warm background tint |
| `--color-stone` | `#6d6a64` | Secondary / label text |
| `--color-line` | `rgba(16,16,15,0.18)` | Dividers, borders |
| `--color-white` | `#ffffff` | Page background |

### Typography
Font family defined via CSS variables:
- `--font-display` — Montserrat used for all headings (`h1`–`h6`), nav links, project titles
- `--font-body` — Montserrat used for body copy, labels, UI text
- `--font-logo` — Montserrat used for logo-style text and slogan styling

Type sizes use `clamp()` throughout for fluid scaling without breakpoint jumps.

### Motion
Two easing tokens drive all transitions:
- `--ease-cinematic` `cubic-bezier(0.16, 1, 0.3, 1)` — page reveals, gallery lifts, image hovers
- `--ease-standard` `cubic-bezier(0.22, 0.61, 0.36, 1)` — interactive UI elements

Page entry uses the `.pageReveal` utility class (fade + translate-up). Gallery images use staggered `animation-delay` via `blockIndex`.

### Navigation
The header is always `position: fixed` and transparent. Text and icon colour adapts per page context:
- **Dark header** (home `/`, project listing `/project`) — white hamburger, white logo name
- **Light header** (all other pages) — dark hamburger, dark logo name

The mobile menu is a full-screen overlay (`rgba(9,9,8,0.94)`) with staggered nav link animations. The close button sits top-left at the same position as the hamburger.

---

## Project Structure

```
src/
  app/
    page.tsx              # Home — full-bleed hero
    about/                # Studio, team grid, practice facts
    project/              # Project listing (dark grid)
      [slug]/             # Project detail (hero strip + gallery)
    services/             # Services (hidden from nav, URL still works)
    contact/              # Contact form
  components/
    site-shell.tsx        # Fixed header + mobile menu wrapper
  lib/
    projects.ts           # Project data — slugs, images, metadata
public/                   # Static images (logos, hero photos)
```

---

## Development

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

### Adding a project
Edit `src/lib/projects.ts`. Each project needs at minimum: `slug`, `title`, `excerpt`, `coverImage`, and a `gallery` array. Optional fields: `topStripImage`, `planImages`, `galleryBlocks`, `tags`, `size`, `completionDate`, `credits`.

### Re-enabling Services in nav
In `src/components/site-shell.tsx`, add back to `NAV_LINKS`:
```ts
{ href: "/services", label: "Services" },
```
