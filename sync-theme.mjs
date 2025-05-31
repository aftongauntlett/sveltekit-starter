// Syncs theme HSL values in theme.css from hex values in color-preview.css
// Converts `--color-name-light` to :root  and `--color-name-dark` to html.dark
// Replaces only matching --color-* variables used in the theme
// Skips malformed or incomplete hex values and logs a warning
// Logs all changes for transparency
// Run manually with: npm run sync-theme
// Auto-runs on save with: npm run watch-theme
console.log('🛠️ sync-theme running...');
import fs from 'fs/promises';

// Convert hex to HSL
function hexToHSL(hex) {
  const r = parseInt(hex.slice(1, 3), 16) / 255;
  const g = parseInt(hex.slice(3, 5), 16) / 255;
  const b = parseInt(hex.slice(5, 7), 16) / 255;

  const max = Math.max(r, g, b);
  const min = Math.min(r, g, b);
  let h = 0,
    s = 0,
    l = (max + min) / 2;

  if (max !== min) {
    const d = max - min;
    s = l > 0.5 ? d / (2 - max - min) : d / (max + min);
    switch (max) {
      case r:
        h = (g - b) / d + (g < b ? 6 : 0);
        break;
      case g:
        h = (b - r) / d + 2;
        break;
      case b:
        h = (r - g) / d + 4;
        break;
    }
    h /= 6;
  }

  return `${Math.round(h * 360)} ${Math.round(s * 100)}% ${Math.round(l * 100)}%`;
}

const previewPath = './src/lib/styles/color-preview.css';
const themePath = './src/lib/styles/theme.css';
console.log('Reading:', previewPath, themePath);

const preview = await fs.readFile(previewPath, 'utf8');
const theme = await fs.readFile(themePath, 'utf8');

// Prepare maps for light and dark mode replacements
const lightVars = new Map();
const darkVars = new Map();

const hexPattern = /^#[0-9a-fA-F]{6}$/;

for (const [, name, hex] of preview.matchAll(/(--color-[\w-]+):\s*(#[0-9a-fA-F]{3,6});/g)) {
  if (!hexPattern.test(hex)) {
    console.warn(`⚠️  Skipping ${name}: Invalid hex value "${hex}"`);
    continue;
  }

  const hsl = hexToHSL(hex);

  const baseName = name.replace(/-(light|dark)$/, '');
  if (name.endsWith('-dark')) {
    darkVars.set(baseName, hsl);
  } else if (name.endsWith('-light')) {
    lightVars.set(baseName, hsl);
  } else {
    lightVars.set(name, hsl);
  }
}

// Replace in :root block
let updated = theme;

updated = updated.replace(/:root\s*{[^}]*}/gs, (block) =>
  block.replace(/(--color-[\w-]+):\s*[\d.]+\s*%?\s*[\d.]+%\s*[\d.]+%?;/g, (line, name) => {
    const newVal = lightVars.get(name);
    if (!newVal) return line;
    const oldVal = line.split(':')[1].trim();
    console.log(`🌞 Updated ${name}: ${oldVal} → ${newVal}`);
    return `${name}: ${newVal};`;
  })
);

// Replace in html.dark or .dark block
updated = updated.replace(/(html\.dark|\.dark)\s*{[^}]*}/gs, (block) =>
  block.replace(/(--color-[\w-]+):\s*[\d.]+\s*%?\s*[\d.]+%\s*[\d.]+%?;/g, (line, name) => {
    const newVal = darkVars.get(name);
    if (!newVal) return line;
    const oldVal = line.split(':')[1].trim();
    console.log(`🌚 Updated ${name}: ${oldVal} → ${newVal}`);
    return `${name}: ${newVal};`;
  })
);

await fs.writeFile(themePath, updated, 'utf8');
console.log('Theme updated from color-preview.css');
