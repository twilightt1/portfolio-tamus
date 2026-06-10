# Portfolio Website Plan

## Overview
Build a clean, minimal, single-column portfolio website for an ML/AI intern software engineer. JetBrains Mono for headings (code-aesthetic), Work Sans for body text. Light theme. Fully responsive. Each major section gets its own route for SSR/SEO.

## Routes
```
src/routes/
  __root.tsx      -> shared nav + footer, font loading
  index.tsx        -> / (hero, brief intro, CTA to projects)
  about.tsx        -> /about (bio, education, interests)
  projects.tsx     -> /projects (ML/AI project cards with descriptions)
  skills.tsx       -> /skills (tech stack grid, tools, languages)
  contact.tsx      -> /contact (email, GitHub, LinkedIn links)
```

Each route has unique `head()` meta (title, description, og:title, og:description).

## Design System Updates
- **Typography**: Load JetBrains Mono and Work Sans via `<link>` in `__root.tsx` head.
- **Colors**: Keep existing clean light tokens, add a subtle accent for ML/AI theme (e.g., a soft indigo highlight for code blocks and tags).
- **Spacing**: Generous vertical padding between sections (py-20 to py-28), max-width container (max-w-4xl centered).

## Shared Components
- **Header**: Sticky top nav with logo/name, links to About, Projects, Skills, Contact. Collapses to hamburger on mobile.
- **Footer**: Simple footer with copyright and social icon links.
- **SectionHeading**: Reusable heading component with a subtle mono accent label.

## Page Details

### / (Home)
- Large name heading (JetBrains Mono, display size).
- Short tagline: "ML/AI Engineer — Building intelligent systems with code."
- Brief intro paragraph.
- CTAs: "View Projects" → /projects, "Get in Touch" → /contact.

### /about
- Profile photo placeholder (styled avatar).
- Bio paragraphs with ML/AI focus.
- Education / experience timeline placeholder.

### /projects
- 3-4 project cards in a responsive grid (1-col mobile, 2-col tablet, 3-col desktop).
- Each card: project name, short description, tech tags, placeholder image.
- ML-themed placeholder content (e.g., "Neural Style Transfer", "Sentiment Analysis API", "Reinforcement Learning Agent").

### /skills
- Categorized skill lists: Languages, ML/AI Frameworks, Tools & Cloud.
- Visual tag pills / badges for each skill.
- Progress bars or proficiency indicators (optional, keep minimal).

### /contact
- "Let's work together" heading.
- Direct email link (mailto).
- Social links: GitHub, LinkedIn, Kaggle, etc.
- Simple copy-to-clipboard for email.

## Responsive Strategy
- Mobile-first Tailwind classes.
- Single-column layout everywhere; grids become 1-col on mobile.
- Nav collapses to a mobile menu on small screens.
- Generous touch targets for links and CTAs.

## Placeholder Content Strategy
All text is clearly placeholder-tagged or generic enough to be easily replaced:
- Name: "Alex Chen" (or similar generic placeholder).
- Projects: realistic ML/AI project titles with generic descriptions.
- Skills: standard ML/AI stack (Python, PyTorch, TensorFlow, scikit-learn, etc.).
- All image slots use styled CSS placeholders or generated placeholder images.

## Technical Notes
- Uses existing shadcn components where helpful (Button, Card, Badge, Separator).
- No backend needed; contact is mailto + social links only.
- Tailwind v4 with existing token system; no new config file needed.