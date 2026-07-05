# Changelog

All notable changes to this project will be documented in this file.

The format is based on Keep a Changelog, and this project follows semantic versioning when tagged for GitHub releases.

## [Unreleased]

### Changed

- Reworked the desktop header so navigation starts with About on the left, the name link is removed, search sits evenly between the links and the theme/GitHub controls, and the controls stay right-aligned.
- Removed duplicate sidebar search while keeping docs sidebars on the left.
- Matched the Projects and Case Studies category-page article lists to the compact numbered style used on the Showcase page.
- Generalized the structured showcase article model across projects and case studies, including required role, metrics, decisions, outcomes, lessons, and ordered body headings.
- Migrated all project write-ups into the shared showcase structure and replaced the case-study-only authoring template with a shared showcase template.
- Rewrote the IGCSE Past Paper Toolkit showcase article around the end-to-end Python pipeline and Flutter quiz app narrative.
- Added Mermaid diagram support with draggable and expandable diagram frames, plus a simplified architecture, flow, sequence, state, and entity-relationship diagram suite for the IGCSE Past Paper Toolkit showcase article.
- Rendered article tags visibly below article descriptions while keeping Pagefind tag filters.
- Added reusable right-aligned showcase article badge stacks and used AI-Assisted plus Reviewed badges on the Ken project page.
- Added per-diagram Mermaid direction and layout props, documented top-to-bottom flow authoring, and changed Ken's term extraction diagram to top-to-bottom.
- Changed Mermaid diagrams to render full-diagram article previews by default while preserving the draggable expanded canvas for detailed navigation.
- Standardized AI-Assisted and Reviewed showcase badges behind boolean frontmatter flags with matching icons.
- Expanded the IGCSE Past Paper Toolkit article with icon-based architecture diagrams, a real extracted-question sample, broader subject coverage, and clearer student/teacher outcomes.
- Added a Flutter app screenshot feature section to the Ken project page.
- Rewrote the Ken project page around the PDF-agnostic MCQ generator system, including expanded code-derived technical tags, metrics, constraints, outcome, lessons, a high-level architecture diagram, and a term extraction clustering diagram.

## [1.0.0] - 2026-06-19

### Added

- First stable Compass template release for product docs, support centers, and internal knowledge bases.
- Astro 6 and Tailwind CSS 4 project setup with MDX content collections.
- Parent landing pages, nested sub-category pages, article pages, breadcrumbs, and previous/next article navigation.
- Pagefind-powered static search for the homepage and docs sidebar.
- Reusable MDX docs components for callouts, badges, cards, card grids, buttons, tabs, code tabs, file trees, tables, accordions, steps, checklists, and quotes.
- Article frontmatter for descriptions, tags, lifecycle status, authors, edit links, hero images, redirects, related links, search visibility, ordering, and update dates.
- Locally hosted Geist fonts, light/dark mode, favicons, Open Graph image support, RSS feed generation, and sitemap generation.
- Browser enhancements for article table of contents, code-copy controls, image lightbox behavior, keyboard-friendly search, and accessible search result state.
