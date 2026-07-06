/**
 * Curated monochrome icon pack for Mermaid flowchart icon nodes.
 *
 * Simple 24x24 line-art icons drawn with `currentColor` so they inherit the
 * diagram's node colour and theme correctly in light and dark mode. Registered
 * as the `igcse` pack in src/components/docs/Mermaid.astro and referenced from
 * MDX as, e.g., `Node@{ icon: "igcse:file-document", form: "square" }`.
 *
 * The shape matches Iconify's IconifyJSON contract expected by
 * `mermaid.registerIconPacks`.
 */
const stroke =
  'fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"';

export const iconPack = {
  prefix: 'igcse',
  width: 24,
  height: 24,
  icons: {
    // Question paper: a page with text lines.
    'file-document': {
      body: `<g ${stroke}><path d="M6 3h8l4 4v13a1 1 0 0 1-1 1H6a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1z"/><path d="M14 3v4h4M8 12h8M8 15h8M8 9h3"/></g>`,
    },
    // Mark scheme: a page with a check mark.
    'file-certificate': {
      body: `<g ${stroke}><path d="M6 3h8l4 4v13a1 1 0 0 1-1 1H6a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1z"/><path d="M14 3v4h4M8.5 12.5l2 2 4-4"/></g>`,
    },
    // Extract & detect: a magnifier.
    'text-box-search': {
      body: `<g ${stroke}><circle cx="10.5" cy="10.5" r="6"/><path d="M15 15l4.5 4.5"/></g>`,
    },
    // Match, filter, de-dupe: a funnel/filter.
    filter: {
      body: `<path d="M4 5h16l-6 7v6l-4 2v-8z" ${stroke}/>`,
    },
    // Pair answers: two overlapping pages.
    'file-link': {
      body: `<g ${stroke}><path d="M10 4h5l3 3v8a1 1 0 0 1-1 1h-7a1 1 0 0 1-1-1V5a1 1 0 0 1 1-1z"/><path d="M15 4v3h3"/><path d="M8 8H6a1 1 0 0 0-1 1v9a1 1 0 0 0 1 1h7a1 1 0 0 0 1-1v-1"/></g>`,
    },
    // Consolidated outputs: a page with a download arrow.
    'file-pdf': {
      body: `<g ${stroke}><path d="M6 3h8l4 4v13a1 1 0 0 1-1 1H6a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1z"/><path d="M14 3v4h4M8 16h8"/></g><path d="M8 10h1.3a1.15 1.15 0 0 1 0 2.3H8V10zm4 0h1.1c1.4 0 2.2.8 2.2 2s-.8 2-2.2 2H12v-4zm5 0h2.5M17 12h2" ${stroke}/>`,
    },
    // CLI/script entrypoint.
    terminal: {
      body: `<g ${stroke}><rect x="3.5" y="5" width="17" height="14" rx="2"/><path d="M7 9l3 3-3 3M12 15h5"/></g>`,
    },
    // Event/message handoff: an envelope.
    message: {
      body: `<g ${stroke}><rect x="3.5" y="6" width="17" height="12" rx="2"/><path d="M4.5 7.5l7.5 5.5 7.5-5.5"/><path d="M4.8 16.5l5-4M19.2 16.5l-5-4"/></g>`,
    },
    // Mobile app shell.
    phone: {
      body: `<g ${stroke}><rect x="7" y="3" width="10" height="18" rx="2"/><path d="M10 6h4M11 18h2"/></g>`,
    },
    // Library / source books.
    book: {
      body: `<g ${stroke}><path d="M5 4.5A2.5 2.5 0 0 1 7.5 2H19v17H7.5A2.5 2.5 0 0 0 5 21.5z"/><path d="M5 4.5v17M8 6h7M8 9h6"/></g>`,
    },
    // Verified boundary / quality gate.
    'shield-check': {
      body: `<g ${stroke}><path d="M12 3l7 3v5c0 4.5-2.8 8.2-7 10-4.2-1.8-7-5.5-7-10V6z"/><path d="M8.5 12.2l2.1 2.1 4.9-5"/></g>`,
    },
    // Stored searchable question index.
    database: {
      body: `<g ${stroke}><ellipse cx="12" cy="5.5" rx="6.5" ry="2.5"/><path d="M5.5 5.5v9c0 1.4 2.9 2.5 6.5 2.5s6.5-1.1 6.5-2.5v-9"/><path d="M5.5 10c0 1.4 2.9 2.5 6.5 2.5s6.5-1.1 6.5-2.5"/></g>`,
    },
    // Classical text/string search.
    'text-search': {
      body: `<g ${stroke}><path d="M5 6h9M5 10h7M5 14h5"/><circle cx="16.5" cy="15.5" r="3"/><path d="M18.7 17.7l2.3 2.3"/></g>`,
    },
    // Embedding/vector similarity.
    embedding: {
      body: `<g ${stroke}><circle cx="6" cy="8" r="2"/><circle cx="18" cy="8" r="2"/><circle cx="12" cy="17" r="2"/><path d="M7.7 9.1l2.6 5.2M16.3 9.1l-2.6 5.2M8 8h8"/></g>`,
    },
    // Question boundary detection.
    target: {
      body: `<g ${stroke}><circle cx="12" cy="12" r="7"/><circle cx="12" cy="12" r="3"/><path d="M12 3v3M12 18v3M3 12h3M18 12h3"/></g>`,
    },
    // Cropped visual question capture.
    crop: {
      body: `<g ${stroke}><path d="M7 3v14a1 1 0 0 0 1 1h13"/><path d="M3 7h13a1 1 0 0 1 1 1v13"/><path d="M9 9h6v6H9z"/></g>`,
    },
    // De-duplication fingerprint.
    fingerprint: {
      body: `<g ${stroke}><path d="M8.5 17c-1.2-1.6-1.8-3.2-1.8-5.1C6.7 8.7 9 6 12 6s5.3 2.7 5.3 5.9c0 1-.2 2-.5 2.9"/><path d="M10 19c1.4-2.1 2-4.3 2-7M14.2 18c.7-1.8 1.1-3.8 1-5.9"/><path d="M9.8 11.5c.1-1.5 1-2.7 2.2-2.7s2.2 1.2 2.2 2.7"/></g>`,
    },
  },
} as const;
