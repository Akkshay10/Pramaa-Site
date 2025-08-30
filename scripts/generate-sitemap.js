const fs = require('fs');
const path = require('path');

const ROOT = path.resolve(__dirname, '..');
const APP_DIR = path.join(ROOT, 'pramaa-next', 'app');
const PUBLIC_DIR = path.join(ROOT, 'pramaa-next', 'public');
// write sitemap into the Next.js public folder so it's served at /sitemap.xml
const OUT_FILE = path.join(PUBLIC_DIR, 'sitemap.xml');
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

// routesMap: route -> source file path (used to get mtime for lastmod)
const routesMap = new Map();

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
      routesMap.set(route, file);
    }
  });
}

// Add HTML files from pramaa-next/public
if(fs.existsSync(PUBLIC_DIR)){
  const files = fs.readdirSync(PUBLIC_DIR);
  files.forEach(f=>{
    if(f.toLowerCase().endsWith('.html')){
      const route = f === 'index.html' ? '/' : '/' + f;
      routesMap.set(route, path.join(PUBLIC_DIR, f));
    }
  });
}

// Add root index.html if present at site root
const rootIndex = path.join(ROOT, 'index.html');
if(fs.existsSync(rootIndex)) routesMap.set('/', rootIndex);

// Ensure homepage exists (fall back to app page or create entry)
if(!routesMap.has('/')){
  // try app root
  const appRoot = path.join(APP_DIR, 'page.tsx');
  if(fs.existsSync(appRoot)) routesMap.set('/', appRoot);
  else routesMap.set('/', rootIndex);
}

// Ensure output dir exists
if(!fs.existsSync(PUBLIC_DIR)) fs.mkdirSync(PUBLIC_DIR, { recursive: true });

// Build sitemap with per-file lastmod
let xml = '<?xml version="1.0" encoding="UTF-8"?>\n';
xml += '<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n';

[...routesMap.keys()].sort().forEach(route=>{
  let src = routesMap.get(route);
  let lastmod = new Date().toISOString().slice(0,10);
  try{
    if(src && fs.existsSync(src)){
      const stat = fs.statSync(src);
      lastmod = new Date(stat.mtime).toISOString().slice(0,10);
    }
  }catch(e){/* ignore and use today */}

  xml += '  <url>\n';
  xml += `    <loc>${SITE}${route}</loc>\n`;
  xml += `    <lastmod>${lastmod}</lastmod>\n`;
  xml += `    <changefreq>${route === '/' ? 'monthly' : 'yearly'}</changefreq>\n`;
  xml += `    <priority>${route === '/' ? '0.8' : '0.3'}</priority>\n`;
  xml += '  </url>\n';
});
xml += '</urlset>\n';

fs.writeFileSync(OUT_FILE, xml, 'utf8');
console.log('Sitemap written to', OUT_FILE, 'with routes:', Array.from(routesMap.keys()).join(', '));
