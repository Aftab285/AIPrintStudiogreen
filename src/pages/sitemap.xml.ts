import type { APIRoute } from "astro";
import { servicesData } from "../data/servicesData.js";
import { toolsData } from "../data/toolsData.js";
import { articlesData } from "../data/articlesData.js";

const siteUrl = "https://aiprintstudio.com";

// Meaningful last-modification dates per page group
const LAUNCH_DATE = "2026-07-01";      // site launch
const SERVICES_DATE = "2026-08-01";   // last service content update
const BLOG_DATE = "2026-08-15";       // last blog update
const GUIDE_DATE = "2026-08-10";      // last guide update

export const GET: APIRoute = async () => {
  const staticPages = [
    { url: `${siteUrl}/`,                 lastmod: LAUNCH_DATE },
    { url: `${siteUrl}/services/`,        lastmod: SERVICES_DATE },
    { url: `${siteUrl}/how-it-works/`,    lastmod: LAUNCH_DATE },
    { url: `${siteUrl}/portfolio/`,       lastmod: SERVICES_DATE },
    { url: `${siteUrl}/guides/`,          lastmod: GUIDE_DATE },
    { url: `${siteUrl}/blog/`,            lastmod: BLOG_DATE },
    { url: `${siteUrl}/about/`,           lastmod: LAUNCH_DATE },
    { url: `${siteUrl}/contact/`,         lastmod: LAUNCH_DATE },
  ];

  const servicePages = Object.keys(servicesData).map((slug) => ({
    url: `${siteUrl}/services/${slug}/`,
    lastmod: SERVICES_DATE,
  }));

  const guidePages = Object.keys(toolsData).map((slug) => ({
    url: `${siteUrl}/guides/${slug}/`,
    lastmod: GUIDE_DATE,
  }));

  const blogPages = Object.keys(articlesData).map((slug) => ({
    url: `${siteUrl}/blog/${slug}/`,
    lastmod: BLOG_DATE,
  }));

  const allPages = [...staticPages, ...servicePages, ...guidePages, ...blogPages];

  const sitemapXml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${allPages
  .map(
    (page) => `  <url>
    <loc>${page.url}</loc>
    <lastmod>${page.lastmod}</lastmod>
  </url>`
  )
  .join("\n")}
</urlset>`;

  return new Response(sitemapXml, {
    status: 200,
    headers: {
      "Content-Type": "application/xml; charset=utf-8",
      "Cache-Control": "public, max-age=86400",
    },
  });
};
