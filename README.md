# Jonathan Hussey Portfolio

This repository contains the source for Jonathan Hussey's personal engineering portfolio at:

```text
https://jonathan-david-hussey.github.io
```

The site is an Astro 6 static site adapted from the Compass documentation theme. It now acts as a structured portfolio for professional experience, personal projects, and engineering case studies, with Pagefind search, MDX content, Mermaid diagrams, article tags, and GitHub Pages deployment.

## What Is In The Site

- **Home**, a summary landing page with highlights and links into the main sections.
- **About**, a professional narrative, working style, education, technology areas, and contact links.
- **Experience**, role-based career entries.
- **Projects**, personal builds with structured write-ups, metrics, decisions, outcomes, and lessons.
- **Case Studies**, professional engineering stories with the same structured showcase model.

Projects and case studies use a stricter content model than the rest of the site. They must include role, dates, role summary, metrics, decisions, outcomes, lessons, and the required body headings checked by `scripts/validate-showcase.mjs`.

## Tech Stack

- Astro 6 with MDX content collections
- Tailwind CSS 4 via the Vite plugin
- Pagefind for generated static search
- Mermaid for architecture and flow diagrams
- TypeScript for site code and content validation
- GitHub Actions and GitHub Pages for deployment

## Getting Started

Install dependencies:

```bash
npm install
```

Start the local dev server:

```bash
npm run dev
```

The dev server runs on:

```text
http://localhost:3000
```

## Common Commands

```bash
npm run dev              # Start Astro locally
npm run check            # Validate showcase content and run astro check
npm run validate:content # Run the showcase structure validator only
npm run build            # Build Astro and generate the Pagefind index
npm run preview          # Preview the production build locally
npm run format:check     # Check formatting
npm run format           # Format the repository
npm run clean            # Remove generated build output
```

On Windows PowerShell, use `npm.cmd` if script execution policy blocks `npm.ps1`:

```powershell
npm.cmd run check
```

## Content Structure

Content lives under `src/content/docs`.

```text
src/content/docs/
  about/
  experience/
  projects/
  case-studies/
```

The category and navigation model is defined in `src/data/docs.ts`. Site-wide metadata, contact links, and deployment URL are defined in `site.config.mjs`.

For projects and case studies, each article should include:

- `role`
- `dates`
- `roleSummary`
- at least two `metrics`
- at least three `decisions`
- at least one `outcome`
- `lessons`

The body must include these `##` headings in order:

```text
## Context
## The Problem
## Constraints
## The Design
```

Mermaid diagrams in showcase content must render top-to-bottom. Use `flowchart TD` or `direction="TD"` / `direction="TB"`.

## Search

Search is powered by Pagefind and is generated during the production build:

```bash
npm run build
```

`npm run dev` does not generate the final Pagefind search bundle. To test production search locally, build and then preview:

```bash
npm run build
npm run preview
```

## Deployment

The site deploys to GitHub Pages through `.github/workflows/deploy.yml`.

The workflow:

- runs on pushes to `main`
- uses Astro's official `withastro/action`
- runs `npm run build`
- uploads the generated `dist` artifact
- deploys with `actions/deploy-pages`

In the GitHub repository settings, set **Pages** source to **GitHub Actions**.

This repository is intended to deploy as a user site at:

```text
https://jonathan-david-hussey.github.io
```

That means the GitHub repository should normally be named:

```text
jonathan-david-hussey.github.io
```

If deployed as a project site under a different repository name, Astro `base` handling would need to be revisited because the site uses root-relative internal links.

## Maintenance Notes

- Update `CHANGELOG.md` for user-visible content, navigation, workflow, or site behavior changes.
- Run `npm run check` before wrapping up meaningful changes.
- Keep `package.json` and `package-lock.json` version fields aligned with the latest released changelog section when cutting a release.
- Update `CONTRIBUTING.md` if contributor workflow changes.
