<div align="center">

# <img src="public/afaqulislam.png" width="42" height="42" align="center" alt=""/> Linktree

### One page. Every link. All you.

**A dark, minimal, cinematically-lit link-in-bio page — built by Afaq Ul Islam.**

`Full-Stack & AI Engineer` · `Co-Founder & COO, Neofyx`

![Next.js](https://img.shields.io/badge/Next.js%2016.1.1-000000.svg?style=flat-square&logo=nextdotjs&logoColor=white) ![React](https://img.shields.io/badge/React%2019.2.3-61DAFB.svg?style=flat-square&logo=react&logoColor=black) ![TypeScript](https://img.shields.io/badge/TypeScript%205.9.3-3178C6.svg?style=flat-square&logo=typescript&logoColor=white) ![Tailwind](https://img.shields.io/badge/Tailwind%204.1.18-06B6D4.svg?style=flat-square&logo=tailwindcss&logoColor=white) ![pnpm](https://img.shields.io/badge/pnpm%2010.26.2-F69220.svg?style=flat-square&logo=pnpm&logoColor=white) ![MIT](https://img.shields.io/badge/License-MIT-brightgreen.svg?style=flat-square)

**[🔗 Live Demo → linktree-afaqulislam.vercel.app](https://linktree-afaqulislam.vercel.app)**

</div>

<div align="center">

[Features](#-features) &nbsp;·&nbsp; [Tech Stack](#-tech-stack) &nbsp;·&nbsp; [Quality](#-quality) &nbsp;·&nbsp; [Quick Start](#-quick-start) &nbsp;·&nbsp; [Structure](#-project-structure) &nbsp;·&nbsp; [The 24 Links](#-the-24-links) &nbsp;·&nbsp; [Setup](#-setup) &nbsp;·&nbsp; [Scripts](#-scripts)

</div>

---

## ✨ Features

|                                        |                                                                                                                                                                         |
| -------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| <div align="center"><b>🎯</b></div>    | <b>One Hub. Everything.</b><br>24 social & developer profiles — LinkedIn, GitHub, X, Bluesky, LeetCode, Codeforces & more — gathered on a single pixel of the internet. |
| <div align="center"><b>🖼️</b></div>    | <b>Your Face, Everywhere.</b><br>A single avatar (`public/afaqulislam.png`) powers the profile picture, favicon, Open Graph card and PWA manifest.                      |
| <div align="center"><b>⚡</b></div>    | <b>Sparkle CTAs.</b><br>"Portfolio" and "Email" buttons erupt into 20 randomly-placed particles with a conic-gradient halo on hover.                                    |
| <div align="center"><b>💡</b></div>    | <b>Spotlight Entrance.</b><br>A blurred, 151px-Gaussian light sweeps across the header the moment the page loads.                                                       |
| <div align="center"><b>🌌</b></div>    | <b>Dark Art Direction.</b><br>Near-black `#020202` canvas, a subtle grid texture, and a bottom vignette for pure cinema.                                                |
| <div align="center"><b>🖥️</b></div>    | <b>One Column. Every Screen.</b><br>Centered `max-w-lg` feed — equally at home on a 6" phone and a 32" monitor.                                                         |
| <div align="center"><b>📱</b></div>    | <b>Share-Ready SEO.</b><br>Open Graph, Twitter cards, `site.webmanifest`, theme color and per-platform brand icons.                                                     |
| <div align="center"><b>⬛ +1</b></div> | <b>Analytics on Tap.</b><br>Drop-in [Umami](https://umami.is) support — private analytics with just two env vars.                                                       |

---

## 🧱 Tech Stack

| Layer         | Tech                                                             | Why                                          |
| ------------- | ---------------------------------------------------------------- | -------------------------------------------- |
| **Framework** | [Next.js](https://nextjs.org) `16.1.1`                           | App Router · Turbopack · static prerendering |
| **UI**        | [React](https://react.dev) `19.2.3`                              | Fine-grained, modern component model         |
| **Styling**   | [Tailwind CSS](https://tailwindcss.com) `4.1.18`                 | CSS-first utility framework                  |
| **Language**  | [TypeScript](https://www.typescriptlang.org) `5.9.3`             | Full strict-mode type safety                 |
| **Fonts**     | [Geist Sans](https://vercel.com/font)                            | Vercel's signature humanist sans             |
| **Icons**     | [react-icons](https://react-icons.github.io/react-icons) `5.5.0` | 25+ brand icon sets in one tree              |
| **Env Guard** | [`@t3-oss/env-nextjs`](https://github.com/t3-oss/t3-env) (Zod)   | Runtime-validated environment variables      |
| **Utils**     | `clsx` + `tailwind-merge`                                        | Collision-aware class merging                |
| **PM**        | [pnpm](https://pnpm.io) `10.26.2`                                | Fast, disk-efficient installs                |

---

## 🏆 Quality

The project ships **zero-warning clean** across the whole toolchain.

| Check         | Tool                            | Result                              |
| ------------- | ------------------------------- | ----------------------------------- |
| **Lint**      | ESLint 9 + `eslint-config-next` | ✅ 0 warnings (`--max-warnings 0`)  |
| **Types**     | TypeScript 5.9 (strict)         | ✅ `tsc --noEmit` clean             |
| **Format**    | Prettier 3                      | ✅ 100% formatted                   |
| **Dead code** | Knip 5                          | ✅ 0 unused exports · 0 unused deps |
| **Build**     | Next.js Turbopack               | ✅ Production build passes          |

---

## 🚀 Quick Start

```bash
# 1. Install dependencies
pnpm install

# 2. Create your environment file
cp .env.example .env   # Windows: copy .env.example .env

# 3. Run the dev server (Turbopack, hot reload)
pnpm dev
```

Then open **http://localhost:3000** and your Linktree is live.

---

## 📁 Project Structure

```
linktree/
├── public/
│   ├── afaqulislam.png   # Avatar — profile, favicon, OG image & manifest
│   └── site.webmanifest  # PWA manifest
└── src/
    ├── app/
    │   ├── layout.tsx    # Root layout + full SEO/OG/PWA metadata
    │   ├── page.tsx      # The link-in-bio page (24 links)
    │   └── grid.svg      # Background grid texture
    ├── components/
    │   ├── spotlight.tsx     # Animated spotlight entrance
    │   ├── sparkle-link.tsx  # Particle-burst CTA buttons
    │   ├── primary-links.tsx # Portfolio · Email actions
    │   ├── footer.tsx        # Auto-year copyright
    │   └── analytics.tsx     # Optional Umami script
    ├── styles/globals.css   # Tailwind CSS + keyframe animations
    ├── utils/cn.ts          # clsx + tailwind-merge helper
    └── env.ts               # Zod-validated environment schema
```

---

## 🔗 The 24 Links

Every profile opens in a **new safe tab** (`target="_blank"` + `rel="noopener noreferrer"`), labeled with the consistent **`AUI |`** prefix and its official brand icon:

`LinkedIn` · `GitHub` · `X (Twitter)` · `Buy Me A Coffee` · `Instagram` · `Bluesky` · `Facebook` · `Telegram` · `Discord` · `GitLab` · `LeetCode` · `Codeforces` · `NeetCode` · `Medium` · `DEV Community` · `Hashnode` · `Reddit` · `Product Hunt` · `Threads` · `Dribbble` · `Behance` · `NPM` · `Pinterest` · `Snapchat`

---

## 🔧 Setup

| Variable                       | Required | Purpose                                     |
| ------------------------------ | -------- | ------------------------------------------- |
| `NEXT_PUBLIC_SITE_URL`         | ✅       | Canonical URL · `metadataBase` · Open Graph |
| `NEXT_PUBLIC_UMAMI_URL`        | —        | Optional Umami instance URL                 |
| `NEXT_PUBLIC_UMAMI_WEBSITE_ID` | —        | Optional Umami website UUID                 |

> The app **refuses to boot** on a missing/invalid `NEXT_PUBLIC_SITE_URL` — every env var is validated at runtime with Zod.

---

## 📜 Scripts

| Command                             | Action                             |
| ----------------------------------- | ---------------------------------- |
| `pnpm dev`                          | Development server with hot reload |
| `pnpm build`                        | Optimized production build         |
| `pnpm start`                        | Serve the production build         |
| `pnpm lint` · `pnpm lint:fix`       | ESLint — zero warnings allowed     |
| `pnpm typecheck`                    | Strict TypeScript check            |
| `pnpm format` · `pnpm format:check` | Prettier write / verify            |
| `pnpm knip`                         | Dead-code & unused-dependency scan |
| `pnpm check`                        | Everything, in one command         |
| `pnpm typegen`                      | Generate Next.js route types       |

---

<div align="center">

**MIT Licensed** — use it, tweak it, ship it.

Made with **Afaq Ul Islam** · © 2026

**🔗 [Live Demo → linktree-afaqulislam.vercel.app](https://linktree-afaqulislam.vercel.app)**

</div>
