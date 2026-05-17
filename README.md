# OrbitGrant

Company landing page for **OrbitGrant** — a global talent network for IT professionals offering job bidding support, resume optimization, interview coaching, and career acceleration.

**Website:** [http://orbitgrant.org/](http://orbitgrant.org/)

## Tech stack

- [React](https://react.dev/) 19 + [TypeScript](https://www.typescriptlang.org/)
- [Vite](https://vite.dev/) 8
- [Tailwind CSS](https://tailwindcss.com/) 4

## Prerequisites

- [Node.js](https://nodejs.org/) 20+ (LTS recommended)
## Getting started

```bash
# Install dependencies
npm install

# Start development server
npm run dev
```

Open **http://127.0.0.1:5174/** in your browser.

> Keep the terminal running while you develop. Press `Ctrl+C` to stop the server.

## Scripts

| Command           | Description                          |
| ----------------- | ------------------------------------ |
| `npm run dev`     | Start dev server with hot reload     |
| `npm run build`   | Type-check and build for production  |
| `npm run preview` | Preview the production build locally |
| `npm run lint`    | Run ESLint                           |

## Production build

```bash
npm run build
npm run preview
```

Output is written to the `dist/` folder. Deploy `dist/` to any static host (Vercel, Netlify, GitHub Pages, etc.).

## Project structure

```
src/
├── App.tsx                 # Page layout and section order
├── main.tsx
├── index.css               # Tailwind + theme variables
└── components/
    ├── Header.tsx
    ├── Hero.tsx
    ├── Problem.tsx
    ├── Solution.tsx
    ├── HowItWorks.tsx
    ├── Services.tsx
    ├── ValueProposition.tsx
    ├── ForCoaches.tsx
    ├── Contact.tsx
    ├── JoinCta.tsx
    ├── Footer.tsx
    ├── Button.tsx
    └── SectionHeading.tsx
```

## Configuration

### Dev server port

The dev server runs on port **5174** by default (`vite.config.ts`). If that port is busy, Vite may pick another port — check the terminal output for the correct URL.

### Contact email

Update the contact address in `src/components/Contact.tsx`:

```ts
const CONTACT_EMAIL = 'contact@orbitgrant.com'
```

The contact form opens the user’s email client with a prefilled message (`mailto:`). For server-side form handling, wire the form to your API or a service like Formspree.

## Page sections

1. **Hero** — Value proposition and primary CTAs
2. **Problem** — Challenges IT professionals face
3. **Solution** — Platform offerings
4. **How it works** — 3-step process
5. **Services** — Job bidding, resume, interview, global network
6. **Why choose us** — Value proposition
7. **For coaches** — Coach recruitment
8. **Contact** — Inquiry form and email
9. **Join CTA** — Final call to action

## License

Private — all rights reserved.
