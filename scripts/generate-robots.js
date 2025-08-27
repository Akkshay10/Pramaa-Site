const fs = require('fs');
const path = require('path');
const ROOT = path.resolve(__dirname, '..');
const PUBLIC_DIR = path.join(ROOT, 'pramaa-next', 'public');
const OUT = path.join(PUBLIC_DIR, 'robots.txt');
const SITE = 'https://pramaa.solutions';
const sitemap = `${SITE}/sitemap.xml`;

if(!fs.existsSync(PUBLIC_DIR)) fs.mkdirSync(PUBLIC_DIR, { recursive: true });

const content = `User-agent: *\nAllow: /\nSitemap: ${sitemap}\n`;
fs.writeFileSync(OUT, content, 'utf8');
console.log('Wrote', OUT);
