# Mati Fuentes — Personal Portfolio

Software Engineer & Creative Technologist portfolio built with Next.js 15 and Tailwind CSS v4.

## Tech Stack

- **Framework**: Next.js 15 with App Router
- **Styling**: Tailwind CSS v4 (CSS-first approach)
- **TypeScript**: Strict mode enabled
- **Fonts**: Space Grotesk, Inter, JetBrains Mono (via next/font)
- **Deployment**: GitHub Pages (static export)

## Getting Started

### Development

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

### Build

```bash
npm run build
```

This generates a static export in the `out/` directory.

## Deployment to GitHub Pages

1. Push this repository to GitHub as `mjfuentes/mjfuentes.github.io`
2. Go to repository Settings → Pages
3. Set Source to "GitHub Actions"
4. Push to main branch - the workflow will automatically deploy

The site will be available at `https://mjfuentes.github.io`

## Project Structure

```
src/
├── app/                  # Next.js App Router
│   ├── globals.css       # Tailwind + custom styles
│   ├── layout.tsx        # Root layout with fonts
│   └── page.tsx          # Home page
├── components/
│   ├── hero/             # Hero section
│   ├── projects/         # Projects grid
│   ├── experience/       # Timeline
│   ├── tech-stack/       # Skills display
│   └── layout/           # Header, Footer, Section
├── data/                 # Content data (immutable)
└── types/                # TypeScript interfaces
```

## Design Principles

- **Editorial aesthetic**: Asymmetric layouts, intentional spacing, strong typography
- **Bold colors**: Dark background with amber and violet accents
- **Fluid typography**: Responsive text scaling with clamp()
- **Immutability**: All data structures use `as const`
- **Composition**: Small, focused components
- **Accessibility**: Semantic HTML, ARIA labels, keyboard navigation

## Content Updates

Edit content in `src/data/`:
- `projects.ts` - Project portfolio items
- `experience.ts` - Work history
- `skills.ts` - Tech stack

All data is immutable and type-safe.

## License

© 2026 Matias Fuentes. All rights reserved.
