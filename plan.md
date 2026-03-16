# LYDesign Website Build Plan (Next.js)

## 1) Objective
Build a production-ready English website for LYDesign in Next.js (App Router), strongly inspired by xstudio.co.nz interaction and presentation style, with project routes:
- `/project` (listing)
- `/project/{slug}` (detail)

The site launches with exactly 12 seeded projects:
- 1 fully developed mock project (residential exterior theme)
- 11 scaffold projects with placeholders

## 2) Locked Product Decisions
These decisions are confirmed and no longer open:
1. Homepage follows xstudio pattern: full-viewport background imagery as primary experience, not a featured-project feed from project data.
2. Contact page behavior follows xstudio pattern: contact information only (no form for v1).
3. Full mock project theme is residential exterior (house exterior photography focus).
4. Transitions and animation are a core requirement and should be prominent across navigation and content reveals.

## 3) Scope and Deliverables

### Core pages
- Home (`/`)
- About (`/about`)
- Services (`/services`)
- Projects listing (`/project`)
- Project detail (`/project/[slug]`)
- Contact (`/contact`)

### Shared UI system
- Global overlay header/menu (logo + primary nav)
- Footer with contact details and quick links
- Reusable content sections (hero, intro, gallery blocks, CTA)
- Transition layer / animation primitives used consistently across pages

### Data/content structure
- Central TypeScript project data module
- 12 project entries total (`1 full + 11 scaffold`)
- Full project contains:
  - overview
  - services/scope
  - challenge/solution/result narrative
  - full gallery set with captions

### Assets
- Use provided logo file: `lydesign_logo.png`
- Use placeholder images from Unsplash/Pexels/Pixabay until real assets are uploaded
- Prioritize high-resolution residential exterior photography for hero and full mock project

## 4) Information Architecture

### Primary navigation
- Home
- About
- Services
- Project
- Contact

### URL conventions
- `/project` for archive/list page
- `/project/{slug}` for detail pages

### Project model
Each project supports:
- `title`
- `slug`
- `location` (optional)
- `year` (optional)
- `category` (residential/commercial/interior/etc.)
- `coverImage`
- `gallery[]`
- `excerpt`
- `contentSections[]`
- `status` (`full` | `scaffold`)

## 5) Visual and Interaction Direction

### Design intent
- Minimal architectural presentation with premium editorial tone
- Large photographic surfaces, restrained copy, strong negative space
- Neutral palette with sharp contrast accents
- Cinematic motion language during page load, menu open/close, and route changes

### Homepage behavior (critical)
- Full-screen background image experience from first paint
- Foreground content remains minimal: logo, menu trigger, key nav/context
- Background imagery can rotate/fade between curated exterior shots
- Motion should feel smooth and deliberate, not decorative noise

### Typography and styling system (no Tailwind)
- CSS Modules + `globals.css`
- CSS custom properties for:
  - colors
  - spacing scale
  - type scale
  - motion durations/easing
  - z-index layers
- Define explicit font pairing (display + body) and fallback stacks in implementation
- Maintain clear type rhythm across desktop/tablet/mobile

### Animation requirements
- Include meaningful transitions across:
  - initial page reveal
  - menu open/close
  - route changes
  - project card hover and image reveal
- Define timing tokens (example ranges):
  - fast: `180-240ms`
  - medium: `320-420ms`
  - slow/cinematic: `600-900ms`
- Respect `prefers-reduced-motion` with simplified fades and no large movement

## 6) Build Phases

### Phase 1: Foundation
- Clean starter template
- Configure global style tokens (color/type/space/motion)
- Implement base layout shell (header/footer/transition layer)
- Integrate logo from `public/`

### Phase 2: Routing and structural scaffolds
- Create all core routes
- Implement baseline page structures and internal links
- Add xstudio-like homepage full-screen background behavior

### Phase 3: Project system
- Implement project data model and typed helpers
- Build `/project` listing UI
- Build `/project/[slug]` dynamic template and static params
- Seed 12 projects (`1 full + 11 scaffold`)

### Phase 4: Content and imagery
- Write complete residential-exterior mock project content
- Curate placeholder galleries (consistent quality/aspect strategy)
- Add captions/metadata and responsive image handling

### Phase 5: Motion polish and QA
- Apply and refine transition choreography site-wide
- Responsive QA across mobile/tablet/desktop
- Accessibility pass (heading order, alt text, keyboard access, focus visibility, contrast)
- SEO baseline (metadata, titles, descriptions, OG defaults)
- Performance pass (optimized images, limited CLS, acceptable LCP)

## 7) Contact Data Integration
Use across footer + contact page + optional header utility:
- Phone: `021 573 123`
- Email: `leo@lydesign.co.nz`
- Address: `Unit H, Building 2, 5 Ceres Court, Rosedale, Auckland 0632`

## 8) Acceptance Criteria
- `next build` succeeds with no blocking errors
- All required routes exist and are linked
- `/project` and `/project/{slug}` operate correctly
- Exactly 12 seeded projects are present (`1 full + 11 scaffold`)
- Homepage is full-screen image-first experience (not project-feed-led)
- Contact page is info-only (no form in v1)
- Full mock project is residential exterior with complete narrative and gallery
- Animation is visibly implemented across load/menu/navigation while honoring reduced-motion preferences
- Logo and contact details are correctly integrated
- Placeholder content/assets can be replaced without structural refactor
