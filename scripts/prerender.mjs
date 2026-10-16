// Renders every static page from the built server into dist/client so the
// folder can be hosted on any static host (GitHub Pages).
import { mkdir, writeFile, copyFile } from "node:fs/promises";
import { join } from "node:path";

const base = (process.env.BASE_PATH || "/").replace(/\/?$/, "/");
const pages = ["", "historias", "metodos", "variedades"];
const out = "dist/client";

const { default: server } = await import(new URL("../dist/server/index.mjs", import.meta.url));

for (const p of pages) {
  const res = await server.fetch(new Request(`http://localhost${base}${p}`), {}, { waitUntil() {} });
  if (res.status !== 200) throw new Error(`/${p} respondió ${res.status}`);
  const dir = join(out, p);
  await mkdir(dir, { recursive: true });
  await writeFile(join(dir, "index.html"), await res.text());
  console.log(`✓ ${base}${p}`);
}
await copyFile(join(out, "index.html"), join(out, "404.html"));
await writeFile(join(out, ".nojekyll"), "");
