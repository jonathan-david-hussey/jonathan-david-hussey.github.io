import fs from 'node:fs';
import path from 'node:path';

/**
 * Showcase articles must contain these top-level body headings, in this order
 * and in this exact Title Case. The data sections (My Role, At a Glance,
 * Decisions and Trade-Offs, Outcome, Lessons) are enforced separately by the
 * content schema in src/content.config.ts.
 */
const REQUIRED_HEADINGS = ['Context', 'The Problem', 'Constraints', 'The Design'];

const SHOWCASE_DIRS = [
  { label: 'project', dir: path.join(process.cwd(), 'src', 'content', 'docs', 'projects') },
  { label: 'case study', dir: path.join(process.cwd(), 'src', 'content', 'docs', 'case-studies') },
];

function findMdxFiles(dir) {
  if (!fs.existsSync(dir)) return [];

  return fs
    .readdirSync(dir, { withFileTypes: true })
    .flatMap((entry) => {
      const entryPath = path.join(dir, entry.name);

      if (entry.isDirectory()) return findMdxFiles(entryPath);
      if (entry.isFile() && /\.mdx?$/.test(entry.name)) return [entryPath];
      return [];
    })
    .sort();
}

function stripCodeFences(markdown) {
  return markdown.replace(/```[\s\S]*?```/g, '');
}

function validateFile(filePath) {
  const raw = fs.readFileSync(filePath, 'utf8');
  const body = stripCodeFences(raw.replace(/^---[\s\S]*?---/, ''));
  const level2Headings = [...body.matchAll(/^##\s+(.+?)\s*$/gm)].map((match) => match[1]);

  const errors = [];
  let cursor = -1;

  for (const required of REQUIRED_HEADINGS) {
    const index = level2Headings.indexOf(required);
    if (index === -1) {
      errors.push(`missing required heading "## ${required}"`);
    } else if (index < cursor) {
      errors.push(`heading "## ${required}" is out of order`);
    } else {
      cursor = index;
    }
  }

  // Every Mermaid diagram must render top-to-bottom (TD/TB). Flag horizontal or
  // bottom-up charts, whether set on the chart's first line or via the
  // `direction` prop on the <Mermaid> component.
  for (const match of raw.matchAll(/\b(?:flowchart|graph)\s+(LR|RL|BT)\b/g)) {
    errors.push(`Mermaid diagrams must be top-to-bottom; found "${match[0]}" (use "flowchart TD")`);
  }
  for (const match of raw.matchAll(/direction\s*=\s*["'](LR|RL|BT)["']/g)) {
    errors.push(`Mermaid direction must be TD or TB; found direction="${match[1]}"`);
  }

  return errors;
}

let failed = false;
let checkedFileCount = 0;

for (const { label, dir } of SHOWCASE_DIRS) {
  const files = findMdxFiles(dir);
  checkedFileCount += files.length;

  for (const file of files) {
    const errors = validateFile(file);
    if (errors.length > 0) {
      failed = true;
      console.error(`\n${path.relative(process.cwd(), file)} (${label})`);
      for (const error of errors) console.error(`  - ${error}`);
    }
  }
}

if (failed) {
  console.error(
    `\nShowcase structure check failed. Required body headings, in order: ${REQUIRED_HEADINGS.map((h) => `"## ${h}"`).join(', ')}.`,
  );
  process.exit(1);
}

console.log(`Showcase structure check passed (${checkedFileCount} files).`);
