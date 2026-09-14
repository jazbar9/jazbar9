import { execSync } from 'node:child_process';
import { writeFileSync, rmSync, mkdirSync } from 'node:fs';
import { fileURLToPath, pathToFileURL } from 'node:url';

const root = fileURLToPath(new URL('..', import.meta.url));
const cacheDir = fileURLToPath(new URL('../.cache', import.meta.url));
const outFile = fileURLToPath(new URL('../.cache/fetchProjects.mjs', import.meta.url));

mkdirSync(cacheDir, { recursive: true });
execSync(
  'node ./node_modules/esbuild/bin/esbuild src/lib/fetchProjects.ts --bundle --format=esm --platform=node --outfile=.cache/fetchProjects.mjs',
  { stdio: 'inherit', cwd: root },
);

const { syncFromNetwork } = await import(pathToFileURL(outFile).href);
process.env.PORTFOLIO_CACHE_JSON = fileURLToPath(new URL('../src/data/cache.json', import.meta.url));
const projects = await syncFromNetwork();
writeFileSync(
  process.env.PORTFOLIO_CACHE_JSON,
  JSON.stringify(projects, null, 2),
);
rmSync(outFile, { force: true });
console.log(`Cache updated: ${projects.length} projects synced from GitHub + Hugging Face.`);