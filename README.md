# andrew-beaver-Portfolio

Personal portfolio website built with **Next.js 15**, **React 19**, **TypeScript**, and **Tailwind CSS v4**. Features a project showcase, about page, and a functional contact form powered by Resend.

## Pages

| Route | Description |
|---|---|
| `/` | Hero section with availability badge and featured projects |
| `/projects` | Full project grid with category filtering |
| `/projects/[id]` | Individual project detail page |
| `/about` | Bio, technical skills, and education |
| `/contact` | Contact form (email delivered via Resend) |

## Projects Showcased

| Project | Category | Stack |
|---|---|---|
| TicketHive | Full-Stack Web | C#, ASP.NET Core, React, Node.js, SQL Server, Azure |
| MealWave | Mobile | Dart, Flutter, Material 3 |
| Halifax Transit App | Android | Kotlin, Jetpack Compose, Mapbox, GTFS Realtime |
| Arrivio | Full-Stack Web | React, Vite, Node.js, Express, Google Maps API |
| WeatherPal | Android | Kotlin, Jetpack Compose, Retrofit, Coroutines |
| Sentiment Analysis | Desktop ML | C#, ML.NET, Windows Forms |
| Humans vs Zombies | Systems | C++, OOP, Polymorphism |
| Screensaver Simulation | Desktop | C#, Windows Forms, .NET Framework |
| Async TCP Chat App | Networking | C#, .NET Framework, TCP/IP |

## Tech Stack

- **Framework:** Next.js 16 (App Router)
- **Language:** TypeScript
- **Styling:** Tailwind CSS v4
- **Email:** Resend
- **Deployment:** Vercel (recommended)

## Getting Started

```bash
cd my-portfolio
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

### Environment Variables

Create `my-portfolio/.env.local`:

```env
RESEND_API_KEY=your_resend_api_key
CONTACT_EMAIL=your@email.com
```

## Project Structure


```text
my-portfolio/
├── app/
│   ├── globals.css
│   ├── layout.tsx
│   ├── page.tsx              # Home / hero
│   ├── about/
│   │   └── page.tsx          # About & skills
│   ├── projects/
│   │   ├── page.tsx          # Project grid
│   │   └── [id]/
│   │       └── page.tsx      # Project detail
│   ├── contact/
│   │   └── page.tsx          # Contact form
│   └── api/
│       └── contact/
│           └── route.ts      # Resend email handler
├── components/
│   ├── contact/
│   │   ├── ContactCard.tsx
│   │   ├── ContactContent.tsx
│   │   ├── ContactForm.tsx
│   │   └── index.ts
│   ├── layout/
│   │   ├── Footer.tsx
│   │   ├── index.ts
│   │   ├── Nav.tsx
│   │   ├── PageTransition.tsx
│   │   └── ThemeProvider.tsx
│   ├── projects/
│   │   ├── index.ts
│   │   ├── ProjectCard.tsx
│   │   └── ProjectsGrid.tsx
│   └── ui/
│       ├── AvailabilityBadge.tsx
│       ├── FadeInSection.tsx
│       ├── index.ts
│       ├── ScrollGradientBackground.tsx
│       ├── ScrollToTop.tsx
│       ├── SkillsSection.tsx
│       ├── TechTooltip.tsx
│       ├── ThemeToggle.tsx
│       ├── TiltCard.tsx
│       └── TypeWriter.tsx
├── data/
│   └── projects.ts           # Project data
└── public/
```
```

## Scripts

| Command | Description |
|---|---|
| `npm run dev` | Start development server |
| `npm run build` | Production build |
| `npm start` | Start production server |
| `npm run lint` | Run ESLint |
