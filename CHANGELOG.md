# Changelog

All notable changes to this project will be documented in this file.

The format is based on Keep a Changelog, and this project follows semantic versioning when tagged for GitHub releases.

## [Unreleased]

### Changed

- Switched the GitHub Pages deploy workflow to Astro's official GitHub Action.
- Added Home to the header navigation menu.
- Reframed the site-wide professional title around staff-level engineering with an architecture focus.
- Rewrote the About page as a fuller professional narrative with working style, build areas, and portfolio entry links.
- Rewrote the Technology Innovation Institute experience entry in a more formal, purpose-led style.
- Added design pattern tags across project and case-study showcase pages.
- Added the header search field to the mobile top bar, left-aligned opposite the theme and menu controls.
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
- Added an envelope-style Mermaid icon for event handoff nodes and used it in the Autonomous mission lifecycle diagram.
- Standardized AI-Assisted and Reviewed showcase badges behind boolean frontmatter flags with matching icons.
- Expanded the IGCSE Past Paper Toolkit article with icon-based architecture diagrams, a real extracted-question sample, broader subject coverage, and clearer student/teacher outcomes.
- Added a Flutter app screenshot feature section to the Ken project page.
- Rewrote the Ken project page around the PDF-agnostic MCQ generator system, including expanded code-derived technical tags, metrics, constraints, outcome, lessons, a high-level architecture diagram, and a term extraction clustering diagram.
- Rewrote the Autonomous Vehicle Backend project page around the source-reviewed NestJS, MQTT, MongoDB, mission-lifecycle, reporting, and Dockerized simulation design.
- Simplified the Autonomous high-level design diagram into a clearer top-down operational path.
- Rewrote the Opticverge.Dork project page around the completed repository traversal and Git-aware context-pack CLI, separating it from unfinished platform exploration.
- Simplified the Opticverge.Dork high-level design diagram into a cleaner top-down sequence.
- Rewrote the DarkBoxFramework project page around the source-reviewed Python computer-vision architecture, DNA pipeline representation, AISSA optimizer, and archived experiment artifacts.
- Rewrote the scikit-evolution project page around the source-reviewed shell learner architecture, typed hyperparameter system, Artificial Immune System optimizer, and archived experiment evidence.
- Added the PdfExtractor project page around the source-reviewed .NET documentation capture pipeline, JSON configuration model, Playwright acquisition, cleanup, output, merge, and transform stages.
- Added the Vortexa project page around the source-reviewed React, Redux Toolkit, Nivo, and Leaflet boat-ramp dashboard challenge.
- Renamed and rewrote the SAP synchronisation case study around a risk-led .NET 9, Hangfire, Wolverine, SAP OData, and audit-led integration model.
- Renamed and rewrote the workflow governance emails case study around a threat-led .NET 9, Wolverine, Fluid, MailKit, and audit-led notification model.
- Renamed and rewrote the YouTube ingestion case study around a quota-led, two-pipeline .NET serverless model on AWS Lambda, SQS, S3, Kinesis, DynamoDB, and Elasticsearch, with Mermaid diagrams replacing the plain-text flow.
- Rewrote the Twitter ingestion case study around the serverless ingestion architecture and technologies (autoscaling ECS ingester, rate-budget validation gate, bounded pagination with a continuation rule, priority backfill, Kinesis streaming, TPL Dataflow status updates), refocusing away from the v2 migration and adding Mermaid diagrams in place of the plain-text flow.
- Rewrote the client email reporting case study around the shared serverless backend for real-time alerts and weekly program insights (branch-by-type scheduling, a 15-minute ingestion buffer, empty-send suppression, artifact-first S3 sending, SES delivery, SNS callback reconciliation), in the security-model register with Mermaid diagrams replacing the plain-text flow.

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
