import { readFileSync, writeFileSync } from 'node:fs';
import { join } from 'node:path';
import { fileURLToPath } from 'node:url';
import type { Project } from './types';
import { FEATURED_OVERRIDES, FEATURED_ORDER } from '../data/featured.ts';

export const GITHUB_USER = 'jazbar9';
export const HF_USERS = ['jazbarr', 'codigo-g6'];

const EXCLUDED_REPOS = [
  'jazbar9',
  'ecommerce-sales-hf',
  'inmobiliaria',
  'mi_proyecto_django',
  'pythonproyecto1',
  'pythonproyecto2',
  'data-science',
  'data-science2',
  'data-science-g6',
];

function cachePath(): string {
  if (typeof process !== 'undefined' && process.env.PORTFOLIO_CACHE_JSON) {
    return process.env.PORTFOLIO_CACHE_JSON;
  }
  try {
    return join(process.cwd(), 'src', 'data', 'cache.json');
  } catch {
    return fileURLToPath(new URL('../data/cache.json', import.meta.url));
  }
}

function envHeaders(): Record<string, string> {
  const headers: Record<string, string> = { 'User-Agent': 'jazbar9-portfolio' };
  if (typeof process !== 'undefined' && process.env.GITHUB_TOKEN) {
    headers['Authorization'] = `Bearer ${process.env.GITHUB_TOKEN}`;
  }
  return headers;
}

async function getJSON(url: string): Promise<unknown> {
  const res = await fetch(url, {
    headers: envHeaders(),
    signal: AbortSignal.timeout(12000),
  });
  if (!res.ok) throw new Error(`${res.status} ${res.statusText} for ${url}`);
  return res.json();
}

function truncate(text: string, max = 130): string {
  const clean = text.replace(/\s+/g, ' ').trim();
  return clean.length > max ? `${clean.slice(0, max - 1).trim()}…` : clean;
}

function fallbackTags(language?: string, topics: string[] = []): string[] {
  const tags = topics.slice(0, 4);
  if (language && !tags.includes(language) && tags.length < 4) tags.unshift(language);
  return tags;
}

async function fetchGitHub(): Promise<Project[]> {
  const repos = (await getJSON(
    `https://api.github.com/users/${GITHUB_USER}/repos?per_page=100&sort=updated`,
  )) as Array<Record<string, unknown>>;

  return repos
    .filter((r) => !EXCLUDED_REPOS.includes(String(r.name)))
    .map((r) => {
      const name = String(r.name);
      const key = `github/${name}`;
      const override = FEATURED_OVERRIDES.find((o) => o.key === key);
      const desc = String(r.description ?? '');
      return {
        id: key,
        source: 'github' as const,
        title: name,
        slogan: override?.slogan ?? (truncate(desc) || truncate(`Repository ${name}`, 100)),
        description: truncate(desc, 220) || 'No description provided.',
        tags: override?.tags ?? fallbackTags(String(r.language ?? ''), (r.topics as string[]) ?? []),
        language: (r.language as string) ?? undefined,
        stars: Number(r.stargazers_count ?? 0),
        url: String(r.html_url),
        demoUrl: override?.demoUrl ?? ((r.homepage as string) || undefined),
        featured: Boolean(override),
        featuredOrder: FEATURED_ORDER.indexOf(key),
        updated: String(r.updated_at ?? ''),
      } as Project;
    });
}

async function fetchHuggingFaceAuthor(author: string, kind: 'models' | 'spaces'): Promise<Project[]> {
  const list = (await getJSON(
    `https://huggingface.co/api/${kind}?author=${author}&limit=100`,
  )) as Array<Record<string, unknown>>;
  const projects: Project[] = [];
  for (const m of list) {
    const id = String(m.id);
    const key = `huggingface/${id}`;
    const override = FEATURED_OVERRIDES.find((o) => o.key === key);
    const pipeline = String(m.pipeline_tag ?? '');
    const library = String(m.library_name ?? '');
    const sdk = String(m.sdk ?? '');
    const tags = (m.tags as string[]) ?? [];
    const task = tags.some((t) => t === 'audio') ? 'Audio'
      : tags.some((t) => t === 'image') ? 'Vision'
      : tags.some((t) => t === 'text') ? 'NLP'
      : 'ML';
    const fallback: string[] = [];
    if (sdk) fallback.push(sdk.slice(0, 1).toUpperCase() + sdk.slice(1));
    if (library) fallback.push(library.slice(0, 1).toUpperCase() + library.slice(1));
    if (pipeline) fallback.push(pipeline.split('-').map((w) => w[0].toUpperCase() + w.slice(1)).join(' '));
    if (!fallback.includes(task)) fallback.push(task);
    let fallbackDesc = `Hugging Face ${kind === 'spaces' ? 'app' : 'model'} ${id}`;
    if (pipeline) fallbackDesc += ` · pipeline: ${pipeline}`;
    if (sdk) fallbackDesc += ` · sdk: ${sdk}`;

    projects.push({
      id: key,
      source: 'huggingface',
      title: id.replace(`${author}/`, ''),
      slogan: override?.slogan ?? `${id}`,
      description: truncate(override?.slogan ?? fallbackDesc, 220),
      tags: override?.tags ?? fallback.slice(0, 4),
      downloads: Number(m.downloads ?? 0),
      likes: Number(m.likes ?? 0),
      url: `https://huggingface.co/${kind === 'spaces' ? 'spaces/' : ''}${id}`,
      demoUrl: override?.demoUrl,
      featured: Boolean(override),
      featuredOrder: FEATURED_ORDER.indexOf(key),
      updated: String(m.lastModified ?? ''),
    } as Project);
  }
  return projects;
}

async function fetchHuggingFace(): Promise<Project[]> {
  const results = await Promise.all(
    HF_USERS.flatMap((author) => [
      fetchHuggingFaceAuthor(author, 'models'),
      fetchHuggingFaceAuthor(author, 'spaces'),
    ]),
  );
  return results.flat();
}

function sortProjects(projects: Project[]): Project[] {
  return [...projects].sort((a, b) => {
    if (a.featured !== b.featured) return a.featured ? -1 : 1;
    if (a.featured && b.featured && a.featuredOrder !== b.featuredOrder)
      return a.featuredOrder - b.featuredOrder;
    const av = a.stars || a.downloads || 0;
    const bv = b.stars || b.downloads || 0;
    if (bv !== av) return bv - av;
    return a.title.localeCompare(b.title);
  });
}

export async function syncFromNetwork(): Promise<Project[]> {
  const [github, hf] = await Promise.all([fetchGitHub(), fetchHuggingFace()]);
  const projects = sortProjects([...github, ...hf]);
  writeFileSync(cachePath(), JSON.stringify(projects, null, 2), 'utf8');
  return projects;
}

function readCache(): Project[] {
  return JSON.parse(readFileSync(cachePath(), 'utf8')) as Project[];
}

export async function loadProjects(): Promise<Project[]> {
  try {
    return await syncFromNetwork();
  } catch (err) {
    const fallback = readCache();
    console.warn(`[fetchProjects] falling back to cache: ${(err as Error).message}`);
    return fallback;
  }
}