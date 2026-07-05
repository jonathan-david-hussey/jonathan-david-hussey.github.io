import { defineCollection } from 'astro:content';
import { glob } from 'astro/loaders';
import { z } from 'zod';
import { docsCategorySlugs } from './data/docs';

const structuredShowcaseCategories = new Set(['case-studies', 'projects']);

const docs = defineCollection({
  loader: glob({ pattern: '**/*.{md,mdx}', base: './src/content/docs' }),
  schema: ({ image }) =>
    z
      .object({
        title: z.string(),
        description: z.string().optional(),
        category: z.enum(docsCategorySlugs),
        tags: z.array(z.string()).optional().default([]),
        badges: z.array(z.string()).optional().default([]),
        // Standardised showcase badges. Boolean flags, default false (hidden
        // until the author verifies). Rendered with icons in the article header.
        aiAssisted: z.boolean().optional().default(false),
        reviewed: z.boolean().optional().default(false),
        status: z.enum(['draft', 'published', 'deprecated', 'archived']).optional(),
        author: z.string().optional(),
        editUrl: z.string().optional(),
        heroImage: image().optional(),
        hideFromSearch: z.boolean().optional().default(false),
        redirectFrom: z.array(z.string()).optional().default([]),
        relatedLinks: z
          .array(
            z.object({
              title: z.string(),
              href: z.string(),
              description: z.string().optional(),
              eyebrow: z.string().optional(),
            }),
          )
          .optional()
          .default([]),
        order: z.number().optional().default(100),
        updatedAt: z.coerce.date().optional(),
        // Structured showcase sections. Required for projects and case studies
        // via superRefine below; unused by other categories.
        role: z.string().optional(),
        dates: z.string().optional(),
        roleSummary: z.string().optional(),
        metrics: z.array(z.string()).optional(),
        decisions: z
          .array(
            z.object({
              title: z.string(),
              detail: z.string(),
              tradeoff: z.string().optional(),
            }),
          )
          .optional(),
        outcome: z.array(z.string()).optional(),
        lessons: z.string().optional(),
      })
      .superRefine((data, ctx) => {
        if (!structuredShowcaseCategories.has(data.category)) return;

        const require = (condition: boolean, path: string, message: string) => {
          if (!condition) ctx.addIssue({ code: 'custom', path: [path], message });
        };

        require(Boolean(data.role), 'role', 'Projects and case studies must set role.');
        require(Boolean(data.dates), 'dates', 'Projects and case studies must set dates.');
        require(
          Boolean(data.roleSummary),
          'roleSummary',
          'Projects and case studies must set roleSummary (1-2 sentences on what you owned).',
        );
        require(
          (data.metrics?.length ?? 0) >= 2,
          'metrics',
          'Projects and case studies must list at least 2 at-a-glance metrics.',
        );
        require(
          (data.decisions?.length ?? 0) >= 3,
          'decisions',
          'Projects and case studies must document at least 3 decisions and trade-offs.',
        );
        require(
          (data.outcome?.length ?? 0) >= 1,
          'outcome',
          'Projects and case studies must state at least 1 outcome.',
        );
        require(Boolean(data.lessons), 'lessons', 'Projects and case studies must close with lessons.');
      }),
});

export const collections = { docs };
