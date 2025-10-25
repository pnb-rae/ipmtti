const fs = require('fs');
const path = require('path');

const siteUrl = process.env.SITE_URL || process.env.VITE_SITE_URL || 'https://ipmtti.co.ke';

// Keep in sync with src/App.tsx primary routes
const routes = [
  '/',
  '/about',
  '/contact',
  '/schools',
  '/gallery',
  '/apply',
  '/privacy',
  '/terms',
  '/sitemap',
  '/schools/driving-plant-operation',
  '/schools/engineering',
  '/schools/computing',
  '/programs/engineering',
  '/courses/driving-classes',
  '/courses/plant-operator',
  '/plant-operator-training',
  // ICT
  '/programs/ict/ict-craft',
  '/programs/ict/computer-programming',
  '/programs/ict/web-design',
  '/programs/ict/computer-packages',
  // Engineering
  '/programs/engineering/plumbing',
  '/programs/engineering/construction-plant-mechanic',
  '/programs/engineering/electrical-wireman',
  '/programs/engineering/electrical-installation',
  '/programs/engineering/masonry',
  '/programs/engineering/carpentry-joinery',
  '/programs/engineering/painting',
  '/programs/engineering/welding-fabrication',
  '/programs/engineering/motor-vehicle-electrician',
  '/programs/engineering/motor-vehicle-mechanic',
];

const now = new Date().toISOString();

const urls = routes.map((route) => {
  return `  <url>\n    <loc>${siteUrl}${route}</loc>\n    <lastmod>${now}</lastmod>\n    <changefreq>weekly</changefreq>\n    <priority>${route === '/' ? '1.0' : '0.7'}</priority>\n  </url>`;
});

const xml = `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n${urls.join('\n')}\n</urlset>\n`;

const outPath = path.join(process.cwd(), 'public', 'sitemap.xml');
fs.writeFileSync(outPath, xml);
console.log(`Sitemap written to ${outPath} with ${routes.length} routes.`);
