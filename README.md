```
     _    ____   ____ ____   ___  _____ _____
    / \  |  _ \ / ___/ ___| / _ \|  ___|_   _|
   / _ \ | |_) | |  _\___ \| | | | |_    | |
  / ___ \|  _ <| |_| |___) | |_| |  _|   | |
 /_/   \_\_| \_\\____|____/ \___/|_|     |_|
```

# argsoft.ar

Landing page and portfolio for **ARGSOFT** -- a software studio building web products for Argentine SMEs.

Live at [argsoft.ar](https://argsoft.ar)

---

## What it does

A single-page site with six scrollable sections:

| #   | Section          | Purpose                                                           |
| --- | ---------------- | ----------------------------------------------------------------- |
| 1   | **Hero**         | Headline, animated illustration (Lottie), call-to-action          |
| 2   | **Trust Us**     | Scrolling client logo marquee                                     |
| 3   | **Services**     | Three service cards (websites, booking systems, WhatsApp AI bots) |
| 4   | **Projects**     | Portfolio gallery with bilingual descriptions (ES/EN)             |
| 5   | **Work Process** | Four-step methodology: Discovery, Design, Development, Deployment |
| 6   | **Contact**      | Form that opens a pre-filled WhatsApp message                     |

Other features: dark/light theme toggle (persisted), language switcher (ES/EN), scroll-triggered CSS animations via Intersection Observer, responsive navbar with mobile hamburger menu.

---

## Stack

```
React 19  ........  UI
TypeScript 6  ....  Language
Vite 8  ..........  Build
react-router-dom   Routing
lottie-react  ....  Hero animation
lucide-react  ....  Icons
react-icons  .....  Brand/social icons
Vercel  ..........  Hosting
```

---

## Project layout

```
src/
  components/       Reusable UI (Navbar, Footer, Cards, Buttons, ThemeSwitcher, LangSwitcher, ...)
  contexts/         ThemeContext (dark/light)
  data/             JSON data files (services, portfolio, work process, client logos)
  hooks/            useInView (Intersection Observer)
  pages/home/       Home page + section components (Hero, Services, Projects, WorkProcess, Contact)
  styles/           Shared animation keyframes
  assets/           Lottie files, brand images
```

---

## Getting started

```bash
# clone
git clone https://github.com/<your-org>/argsoft.ar.git
cd argsoft.ar

# install
npm install

# run locally
npm run dev
```

Open `http://localhost:5173`.

## Available scripts

| Command           | What it does                                    |
| ----------------- | ----------------------------------------------- |
| `npm run dev`     | Start Vite dev server with HMR                  |
| `npm run build`   | Type-check with `tsc` then build for production |
| `npm run preview` | Preview the production build locally            |
| `npm run lint`    | Run ESLint across the project                   |

---

## Deployment

Deployed to **Vercel**. Configuration lives in `vercel.json`:

```json
{
  "installCommand": "npm install --include=dev",
  "buildCommand": "npm run build",
  "outputDirectory": "dist"
}
```

Push to `main` to trigger a deploy.

---

## Data files

Content is decoupled from components. Edit these JSON files to update the site without touching code:

| File                          | Controls                    |
| ----------------------------- | --------------------------- |
| `src/data/services.json`      | Service cards               |
| `src/data/portfolioData.json` | Project gallery (bilingual) |
| `src/data/workProcess.json`   | Methodology steps           |
| `src/data/logos.json`         | Client logos in the marquee |

---

## License

Private.
