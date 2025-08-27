const fs = require('fs');
const path = require('path');
const OUT = path.join(path.resolve(__dirname, '..'), 'robots.txt');
const SITE = 'https://pramaa.solutions';
const sitemap = `${SITE}/sitemap.xml`;
const content = `User-agent: *\nAllow: /\nSitemap: ${sitemap}\n`;
fs.writeFileSync(OUT, content, 'utf8');
console.log('Wrote', OUT);
