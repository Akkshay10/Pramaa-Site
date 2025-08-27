const fs = require('fs');
const path = require('path');

const ROOT = path.resolve(__dirname, '..');
const APP_DIR = path.join(ROOT, 'pramaa-next', 'app');
const PUBLIC_DIR = path.join(ROOT, 'pramaa-next', 'public');
const OUT_FILE = path.join(ROOT, 'sitemap.xml');
const SITE = 'https://pramaa.solutions';

function walk(dir, cb){
  if(!fs.existsSync(dir)) return;
  const entries = fs.readdirSync(dir, { withFileTypes: true });
  for(const e of entries){
    const full = path.join(dir, e.name);
    if(e.isDirectory()) walk(full, cb);
    else cb(full);
  }
}

const routes = new Set();

// Add Next.js app routes by finding page.(js|ts|jsx|tsx)
if(fs.existsSync(APP_DIR)){
  walk(APP_DIR, (file)=>{
    const base = path.basename(file);
    if(/^page\.(js|jsx|ts|tsx)$/.test(base)){
      let rel = path.relative(APP_DIR, path.dirname(file)).replace(/\\/g, '/');
      let route = '/';
      if(rel && rel !== '.') route = '/' + rel;
      // skip dynamic routes (contain [ or ])
      if(route.includes('[') || route.includes(']')) return;
      routes.add(route);
    }
  });
}

// Add HTML files from pramaa-next/public
if(fs.existsSync(PUBLIC_DIR)){
  const files = fs.readdirSync(PUBLIC_DIR);
  files.forEach(f=>{
    if(f.toLowerCase().endsWith('.html')){
      const route = f === 'index.html' ? '/' : '/' + f;
      routes.add(route);
    }
  });
}

// Add root index.html if present at site root
const rootIndex = path.join(ROOT, 'index.html');
if(fs.existsSync(rootIndex)) routes.add('/');

// Ensure homepage exists
if(!routes.has('/')) routes.add('/');

// Build sitemap
const now = new Date().toISOString().slice(0,10);
let xml = '<?xml version="1.0" encoding="UTF-8"?>\n';
xml += '<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n';
[...routes].sort().forEach(route=>{
  xml += '  <url>\n';
  xml += `    <loc>${SITE}${route}</loc>\n`;
  xml += `    <lastmod>${now}</lastmod>\n`;
  xml += `    <changefreq>${route === '/' ? 'monthly' : 'yearly'}</changefreq>\n`;
  xml += `    <priority>${route === '/' ? '0.8' : '0.3'}</priority>\n`;
  xml += '  </url>\n';
});
xml += '</urlset>\n';

fs.writeFileSync(OUT_FILE, xml, 'utf8');
console.log('Sitemap written to', OUT_FILE, 'with routes:', Array.from(routes).join(', '));
