# iConcepts - 360° Advertising & Brand Building Agency Website

## Overview
A premium, animation-rich website for iConcepts advertising agency, inspired by Ting.in and WhoaMama.com. Features extensive micro-animations, bold typography, parallax effects, and a living, breathing digital experience.

## Tech Stack
- **Frontend**: React + TypeScript + Vite
- **Styling**: Tailwind CSS + custom CSS animations
- **Animations**: Framer Motion (extensive use)
- **Routing**: Wouter
- **Backend**: Express.js
- **State**: TanStack React Query

## Design System
- **Primary Color**: #D10D10 (Red)
- **Background**: Near-white (#FDFDFD) and dark (#0A0A0A)
- **Heading Font**: Spectral (serif)
- **Body Font**: Inter (sans-serif)
- **Spacing**: 24px base, generous whitespace

## Pages
- **Home** (`/`): Hero with animated text, marquee band, intro, stats, departments, accreditation, clients, CTA
- **About** (`/about`): Company story, timeline, certifications, how we work
- **Creative** (`/creative`): Creative department capabilities and approach
- **Media** (`/media`): Media planning, newspaper advertising, compliance
- **BTL & Events** (`/btl-events`): On-ground activations, events, execution discipline
- **Contact** (`/contact`): Inquiry form with validation and submission

## Key Animation Components
Located in `client/src/components/animations.tsx`:
- `FadeIn` - Scroll-triggered fade with directional slide
- `TextReveal` - Word-by-word text animation
- `SplitTextReveal` - Character-by-character reveal
- `Counter` - Animated number count-up
- `MagneticElement` - Magnetic hover pull effect
- `Parallax` - Scroll-based parallax
- `StaggerContainer/StaggerItem` - Staggered children animations
- `Marquee` - Infinite scrolling content
- `ScrollProgress` - Page scroll progress bar
- `MouseFollower` - Cursor-following gradient spotlight

## Project Structure
```
client/src/
  components/
    animations.tsx    - All animation utility components
    navbar.tsx        - Animated sticky navigation
    footer.tsx        - Site footer
    ui/               - Shadcn UI components
  pages/
    home.tsx          - Homepage with all sections
    about.tsx         - About page
    creative.tsx      - Creative department
    media-dept.tsx    - Media department
    btl-events.tsx    - BTL & Events
    contact.tsx       - Contact form page
    not-found.tsx     - 404 page
  App.tsx             - Router with page transitions
server/
  routes.ts           - Contact form API endpoint
  storage.ts          - In-memory storage for inquiries
shared/
  schema.ts           - Zod schemas for contact form
```

## API Endpoints
- `POST /api/contact` - Submit contact inquiry (validated with Zod)
