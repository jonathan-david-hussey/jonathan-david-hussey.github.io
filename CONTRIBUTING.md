# Contributing

Thanks for contributing to Compass.

## Local Setup

If you are using Compass for your own docs, create a repository from the template first. Then clone that new repository and run:

```bash
npm install
npm run dev
```

Open `http://localhost:3000`.

When you want to test the full search experience, run:

```bash
npm run build
npm run preview
```

Pagefind search is generated during the build, so `npm run dev` does not include the final search bundle.

## Common Commands

```bash
npm run dev
npm run build
npm run preview
npm run check
npm run validate:content
npm run format:check
npm run clean
```

## Project Guidelines

- Keep docs content in `src/content/docs`.
- Store article-specific images next to the article `.mdx` file whenever possible.
- Update `src/data/docs.ts` when adding or reorganizing categories.
- Use nested docs links such as `/getting-started/start-here`; one-segment sub-category URLs such as `/start-here` are not generated.
- Prefer small, focused pull requests.
- Preserve the existing Astro, Tailwind, and MDX patterns unless there is a strong reason to change them.

## Before Opening a PR

- Run `npm run check`.
- Run `npm run format:check`.
- Run `npm run build` if your change affects search, routes, metadata, or generated output.
- Verify keyboard behavior and basic accessibility for any interactive UI changes.
- Update `README.md` and `CHANGELOG.md` when the change affects setup, usage, or end-user behavior.
- If contributor workflow changed, update `CONTRIBUTING.md` too.
- For template releases, keep `package.json`, `package-lock.json`, `CHANGELOG.md`, and `.github/releases/` in sync with the GitHub release tag.

## Content Notes

Each article should include frontmatter similar to:

```mdx
---
title: 'Article Title'
description: 'Short summary of the article.'
category: 'start-here'
tags: ['setup']
status: 'published'
author: 'Docs Team'
order: 1
updatedAt: 2026-06-03
---
```

Optional frontmatter fields you can use when helpful:

- `status` for lifecycle state; use `draft` or `archived` when a page should not publish
- `editUrl` for contributor-facing edit links on article pages
- `heroImage` for top-of-page article imagery
- `aiAssisted` and `reviewed` booleans for the standard title-adjacent showcase badges
- `badges` for any other short title-adjacent article labels
- `hideFromSearch` for pages that should stay out of Pagefind results
- `redirectFrom` for legacy routes that should point to the canonical article URL

Use the `Mermaid` MDX component for editable diagrams. It renders a full-diagram overview in the article flow, then opens a larger draggable canvas when expanded so readers can inspect dense architecture diagrams:

```mdx
<Mermaid
  title="Example flow"
  direction="TD"
  chart={`
flowchart TD
  A[Source] --> B[Pipeline] --> C[App]
`}
/>
```

Use `direction="TD"` or `direction="TB"` for top-to-bottom flows, `direction="LR"` for left-to-right architecture pipelines, and `direction="BT"` or `direction="RL"` only when the reverse reading order is intentional. The component rewrites `flowchart` and `graph` headings to the requested direction at render time. The optional `layout` prop can set Mermaid's layout engine hint; `dagre` is the bundled safe default, while `elk` should only be used after adding and verifying the external Mermaid ELK layout package.

Showcase articles in `projects` and `case-studies` use a stricter shared structure. Start from `src/templates/showcase-article-template.mdx`; these pages must include `role`, `dates`, `roleSummary`, at least two `metrics`, at least three `decisions`, at least one `outcome`, and `lessons`. The body must keep these level-two headings in Title Case and in order: `Context`, `The Problem`, `Constraints`, `The Design`.

## Pull Request Notes

- Explain what changed and why.
- Call out any follow-up work or tradeoffs.
- Include screenshots when the change affects UI.
