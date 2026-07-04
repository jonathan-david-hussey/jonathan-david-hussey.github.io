export const docsParentCategories = [
  {
    slug: 'showcase',
    name: 'Showcase',
    description: 'Personal projects with source, and engineering case studies from professional work.',
  },
  {
    slug: 'career',
    name: 'Career',
    description: 'Fourteen-plus years of roles, and the background behind them.',
  },
] as const;

export const docsCategories = [
  {
    name: 'Projects',
    slug: 'projects',
    parent: 'showcase',
    description: 'Personal builds across C#/.NET, Python, TypeScript and more — each with a write-up of what it does and how.',
    icon: 'spark',
  },
  {
    name: 'Case Studies',
    slug: 'case-studies',
    parent: 'showcase',
    description: 'Engineering stories from professional work: the problem, the constraints, the architecture, and the measured outcome.',
    icon: 'file',
  },
  {
    name: 'Experience',
    slug: 'experience',
    parent: 'career',
    description: 'Roles from web developer to software architect — what each one involved and what shipped.',
    icon: 'flag',
  },
  {
    name: 'About',
    slug: 'about',
    parent: 'career',
    description: 'Bio, education, and the technologies used across this site.',
    icon: 'grid',
  },
] as const;

export type DocsParentSlug = (typeof docsParentCategories)[number]['slug'];
export type DocsCategorySlug = (typeof docsCategories)[number]['slug'];

export const docsCategorySlugs = docsCategories.map((category) => category.slug) as [
  DocsCategorySlug,
  ...DocsCategorySlug[],
];

export const docsParentMap = Object.fromEntries(
  docsParentCategories.map((category) => [category.slug, category]),
) as Record<DocsParentSlug, (typeof docsParentCategories)[number]>;

export const docsCategoryMap = Object.fromEntries(
  docsCategories.map((category) => [category.slug, category.name]),
) as Record<DocsCategorySlug, string>;

export const docsCategoryDataMap = Object.fromEntries(
  docsCategories.map((category) => [category.slug, category]),
) as Record<DocsCategorySlug, (typeof docsCategories)[number]>;

export function getParentForCategory(categorySlug: string) {
  return docsCategories.find((category) => category.slug === categorySlug)?.parent;
}

export function getCategoriesForParent(parentSlug: string) {
  return docsCategories.filter((category) => category.parent === parentSlug);
}

export function getCategoryHref(categorySlug: string) {
  const parentSlug = getParentForCategory(categorySlug);
  return parentSlug ? `/${parentSlug}/${categorySlug}` : `/${categorySlug}`;
}

/** Top navigation: category pages surfaced directly, as in the original site design. */
export const topNavItems = [
  { label: 'Experience', href: getCategoryHref('experience') },
  { label: 'Projects', href: getCategoryHref('projects') },
  { label: 'Case Studies', href: getCategoryHref('case-studies') },
  { label: 'About', href: `${getCategoryHref('about')}/about-jonathan` },
] as const;

export type SidebarSection = {
  name: string;
  slug: string;
  href: string;
};

export function getSidebarSections(parentSlug: string): SidebarSection[] {
  return getCategoriesForParent(parentSlug).map((section) => ({
    name: section.name,
    slug: section.slug,
    href: getCategoryHref(section.slug),
  }));
}

export function getArticleHref(categorySlug: string, articleSlug: string) {
  return `${getCategoryHref(categorySlug)}/${articleSlug}`;
}

export function getCleanDocSlug(docId: string) {
  return docId.split('/').at(-1) ?? docId;
}

type PublicDocSource = {
  data: {
    status?: string;
  };
};

type SearchSuggestionSource = {
  id: string;
  data: {
    title: string;
    description?: string;
    category: string;
    order?: number;
    hideFromSearch?: boolean;
    status?: string;
  };
};

type OrderedDocSource = {
  data: {
    category: string;
    order?: number;
    status?: string;
  };
};

export type SearchSuggestion = {
  title: string;
  excerpt: string;
  url: string;
};

const SEARCH_PREVIEW_MAX_CHARS = 160;

export function isPublicDoc<T extends PublicDocSource>(doc: T) {
  return doc.data.status !== 'draft' && doc.data.status !== 'archived';
}

export function getPublicDocs<T extends PublicDocSource>(docs: T[]) {
  return docs.filter(isPublicDoc);
}

const clampText = (value: string, maxChars = SEARCH_PREVIEW_MAX_CHARS) => {
  if (value.length <= maxChars) return value;

  const truncated = value.slice(0, maxChars);
  const lastSpaceIndex = truncated.lastIndexOf(' ');

  return `${(lastSpaceIndex > 60 ? truncated.slice(0, lastSpaceIndex) : truncated).trimEnd()}...`;
};

export function getDocSearchPreview(doc: SearchSuggestionSource, maxChars = SEARCH_PREVIEW_MAX_CHARS) {
  return clampText(doc.data.description?.trim() ?? '', maxChars);
}

export function getSearchPreviewLookup(docs: SearchSuggestionSource[]) {
  return Object.fromEntries(
    getPublicDocs(docs).map((doc) => [
      getArticleHref(doc.data.category, getCleanDocSlug(doc.id)),
      getDocSearchPreview(doc),
    ]),
  ) as Record<string, string>;
}

export function getSuggestedSearchArticles(
  docs: SearchSuggestionSource[],
  { limit = 4, categories = ['case-studies', 'projects'] }: { limit?: number; categories?: string[] } = {},
): SearchSuggestion[] {
  const allowedCategories = new Set(categories);

  return docs
    .filter(isPublicDoc)
    .filter((doc) => !doc.data.hideFromSearch)
    .filter((doc) => allowedCategories.has(doc.data.category))
    .sort((a, b) => {
      const categoryIndexDifference = categories.indexOf(a.data.category) - categories.indexOf(b.data.category);
      if (categoryIndexDifference !== 0) return categoryIndexDifference;
      return (a.data.order ?? 100) - (b.data.order ?? 100);
    })
    .slice(0, limit)
    .map((doc) => ({
      title: doc.data.title,
      excerpt: getDocSearchPreview(doc),
      url: getArticleHref(doc.data.category, getCleanDocSlug(doc.id)),
    }));
}

export function getOrderedDocsForCategory<T extends OrderedDocSource>(docs: T[], category: string) {
  return docs
    .filter(isPublicDoc)
    .filter((doc) => doc.data.category === category)
    .sort((a, b) => (a.data.order ?? 100) - (b.data.order ?? 100));
}
