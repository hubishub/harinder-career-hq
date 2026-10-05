import fs from "fs";
import path from "path";
import matter from "gray-matter";

const PLAYBOOKS_DIR = path.join(process.cwd(), "src/content/playbooks");

export type PlaybookMeta = {
  slug: string;
  title: string;
  description: string;
  tags: string[];
  readingMinutes: number;
  audience: string;
  updated: string;
};

export type Playbook = PlaybookMeta & { content: string };

export function getPlaybookSlugs(): string[] {
  if (!fs.existsSync(PLAYBOOKS_DIR)) return [];
  return fs
    .readdirSync(PLAYBOOKS_DIR)
    .filter((f) => f.endsWith(".mdx") || f.endsWith(".md"))
    .map((f) => f.replace(/\.mdx?$/, ""));
}

export function getPlaybook(slug: string): Playbook | null {
  const mdxPath = path.join(PLAYBOOKS_DIR, `${slug}.mdx`);
  const mdPath = path.join(PLAYBOOKS_DIR, `${slug}.md`);
  const filePath = fs.existsSync(mdxPath) ? mdxPath : mdPath;
  if (!fs.existsSync(filePath)) return null;
  const raw = fs.readFileSync(filePath, "utf8");
  const { data, content } = matter(raw);
  return {
    slug,
    title: String(data.title ?? slug),
    description: String(data.description ?? ""),
    tags: Array.isArray(data.tags) ? data.tags.map(String) : [],
    readingMinutes: Number(data.readingMinutes ?? 8),
    audience: String(data.audience ?? "Dispatch & ops"),
    updated: String(data.updated ?? ""),
    content,
  };
}

export function getAllPlaybooks(): PlaybookMeta[] {
  return getPlaybookSlugs()
    .map((slug) => {
      const p = getPlaybook(slug);
      if (!p) return null;
      const { content, ...meta } = p;
      void content;
      return meta;
    })
    .filter((p): p is PlaybookMeta => Boolean(p))
    .sort((a, b) => a.title.localeCompare(b.title));
}

export function getAllTags(): string[] {
  const tags = new Set<string>();
  getAllPlaybooks().forEach((p) => p.tags.forEach((t) => tags.add(t)));
  return Array.from(tags).sort();
}
