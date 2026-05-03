/**
 * Lit nhalabene-logo-master.png dans ce dossier (carré ou paysage),
 * puis écrit ../icons/icon-192.png et icon-512.png (carrés, cover).
 */
import { Jimp } from "jimp";
import { copyFileSync, existsSync, mkdirSync } from "fs";
import { dirname, join } from "path";
import { fileURLToPath } from "url";

const __dirname = dirname(fileURLToPath(import.meta.url));
const root = dirname(__dirname);
const iconsDir = join(root, "icons");
const brandingLogo = join(__dirname, "nhalabene-logo-master.png");
const legacyName = join(__dirname, "genius-raros-logo.png");

function resolveSource() {
  if (existsSync(brandingLogo)) return brandingLogo;
  if (existsSync(legacyName)) return legacyName;
  console.error(
    "Logo introuvable. Placez nhalabene-logo-master.png dans branding/ (genere par Marque-Entreprise-Nhalabene/scripts)."
  );
  process.exit(1);
}

const src = resolveSource();

mkdirSync(iconsDir, { recursive: true });

const base = await Jimp.read(src);

async function writeSquare(size, name) {
  const out = join(iconsDir, name);
  const img = base.clone();
  img.cover({ w: size, h: size });
  await img.write(out);
  console.log("OK", out);
}

await writeSquare(192, "icon-192.png");
await writeSquare(512, "icon-512.png");
