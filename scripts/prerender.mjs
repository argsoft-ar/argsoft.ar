// Post-build: inyecta el HTML renderizado de cada ruta en dist/index.html.
import { readFile, writeFile, mkdir } from "node:fs/promises";
import { dirname, resolve } from "node:path";
import { fileURLToPath, pathToFileURL } from "node:url";

const root = resolve(dirname(fileURLToPath(import.meta.url)), "..");
const distDir = resolve(root, "dist");
const ssrEntry = resolve(root, "dist-ssr", "entry-server.js");
const ROUTES = ["/"];
const ROOT_PLACEHOLDER = '<div id="root"></div>';

try {
  const { render } = await import(pathToFileURL(ssrEntry).href);
  const template = await readFile(resolve(distDir, "index.html"), "utf-8");

  if (!template.includes(ROOT_PLACEHOLDER)) {
    throw new Error(`No se encontró ${ROOT_PLACEHOLDER} en dist/index.html`);
  }

  for (const route of ROUTES) {
    const html = template.replace(
      ROOT_PLACEHOLDER,
      `<div id="root">${render(route)}</div>`,
    );
    const target =
      route === "/"
        ? resolve(distDir, "index.html")
        : resolve(distDir, route.slice(1), "index.html");
    await mkdir(dirname(target), { recursive: true });
    await writeFile(target, html);
    console.log(`prerender: ${route} -> ${target.replace(root, ".")}`);
  }
} catch (error) {
  // Fail-soft: el sitio sigue funcionando como SPA si el prerender falla.
  console.error("prerender: falló, se mantiene el HTML de la SPA.", error);
}
