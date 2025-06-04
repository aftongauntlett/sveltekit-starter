# SvelteKit Starter

[![Commit Activity](https://img.shields.io/github/commit-activity/m/aftongauntlett/sveltekit-starter)](https://github.com/aftongauntlett/sveltekit-starter/commits)
![SvelteKit](https://img.shields.io/badge/SvelteKit-%23ff3e00.svg?style=flat&logo=svelte&logoColor=white)
![TailwindCSS](https://img.shields.io/badge/TailwindCSS-38B2AC?style=flat&logo=tailwind-css&logoColor=white)
![TypeScript](https://img.shields.io/badge/TypeScript-3178C6?style=flat&logo=typescript&logoColor=white)
![Theme Sync](https://img.shields.io/badge/Theme-Sync%20Enabled-9f7aea?style=flat&logo=css3&logoColor=white)

A clean, accessible SvelteKit starter template built with Tailwind CSS v4.1, HSL theming, and reusable component scaffolding. Designed for fast launches and long-term scalability across creative and professional projects.

## Features

- **SvelteKit** with file-based routing and SSR support
- **Tailwind CSS v4.1** with fluid `clamp()`-based typography and spacing
- **Custom Theme System** using CSS variables and hex-to-HSL sync script
- **Dark Mode Toggle** with animated icons and hover effects
- **Reusable Components** – e.g., `Section`, `ProjectCard`, `HeroCard`
- **Accessibility-First** markup with semantic HTML and keyboard-safe interaction
- **Mobile-First Layout** with consistent spacing and typography out of the box
- **Perfect for cloning into new projects or portfolios**

## Getting Started

### 1. **Clone the Repo**

```bash
git clone https://github.com/aftongauntlett/sveltekit-starter.git
cd sveltekit-starter
```

### 2. **Install Dependencies**

```bash
npm install
```

### 3. **Run the Dev Server**

```bash
npm run dev
```

Visit `http://localhost:5173` in your browser to start building.

## Theme Sync System

This project uses a custom design workflow for managing HSL-based theming. Because HSL values aren't editable in the VSCode color picker, I maintain a `color-preview.css` file with HEX values (fully VSCode-compatible) and sync them to `theme.css` as HSL using a lightweight Node script.

The sync runs automatically whenever the dev server is started:

```bash
npm run dev
```

Behind the scenes, this runs both the SvelteKit dev server **and** a file watcher that updates your `theme.css` whenever `color-preview.css` changes. This way, you can:

- Use VSCode’s color picker to adjust HEX values in `color-preview.css`
- Save the file to automatically update the real `theme.css` HSL values
- Keep your entire app using consistent, modern HSL theming

Manual sync (if needed):

```bash
npm run sync-theme
```

You can also run the watcher manually:

```bash
npm run watch-theme
```

This is a lightweight dev-time helper and does not affect production builds.

## Folder Structure (Relevant Parts)

```
src/
  lib/
    components/        # Reusable UI components
      HeroCard.svelte
      ProjectCard.svelte
      Section.svelte
    styles/
      color-preview.css
      theme.css
  routes/
    +layout.svelte
    +page.svelte        # Template homepage
    about/+page.svelte
    contact/+page.svelte
```

## Intended Usage

This repo serves as a personal SvelteKit starter. To build a new portfolio or product site:

```bash
git clone https://github.com/aftongauntlett/sveltekit-starter.git my-project
cd my-project
npm install
```

Then update content, add pages, and customize as needed.

## License

MIT License

Copyright (c) 2025 Afton Gauntlett

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in
all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING
FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS
IN THE SOFTWARE.
