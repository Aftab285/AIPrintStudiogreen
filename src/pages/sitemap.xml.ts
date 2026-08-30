import type { APIRoute } from "astro";
import { servicesData } from "../data/servicesData.js";
import { toolsData } from "../data/toolsData.js";
import { articlesData } from "../data/articlesData.js";

const siteUrl = "https://aiprintstudio.com";

export const GET: APIRoute = async () => {
  const currentDate = new Date().toISOString().split("T")[0];

  const staticPages = [
    { url: `${siteUrl}/`, changefreq: "daily", priority: "1.0" },
    { url: `${siteUrl}/services/`, changefreq: "weekly", priority: "0.9" },
    { url: `${siteUrl}/how-it-works/`, changefreq: "monthly", priority: "0.8" },
    { url: `${siteUrl}/portfolio/`, changefreq: "weekly", priority: "0.8" },
    { url: `${siteUrl}/guides/`, changefreq: "weekly", priority: "0.8" },
    { url: `${siteUrl}/blog/`, changefreq: "weekly", priority: "0.8" },
    { url: `${siteUrl}/about/`, changefreq: "monthly", priority: "0.7" },
    { url: `${siteUrl}/contact/`, changefreq: "monthly", priority: "0.8" },
    { url: `${siteUrl}/privacy-policy/`, changefreq: "monthly", priority: "0.3" },
    { url: `${siteUrl}/terms/`, changefreq: "monthly", priority: "0.3" },
  ];

  const servicePages = Object.keys(servicesData).map((slug) => ({
    url: `${siteUrl}/services/${slug}/`,
    changefreq: "weekly",
    priority: "0.85",
  }));

  const guidePages = Object.keys(toolsData).map((slug) => ({
    url: `${siteUrl}/guides/${slug}/`,
    changefreq: "weekly",
    priority: "0.8",
  }));

  const blogPages = Object.keys(articlesData).map((slug) => ({
    url: `${siteUrl}/blog/${slug}/`,
    changefreq: "monthly",
    priority: "0.75",
  }));

  const allPages = [...staticPages, ...servicePages, ...guidePages, ...blogPages];

  const sitemapXml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${allPages
  .map(
    (page) => `  <url>
    <loc>${page.url}</loc>
    <lastmod>${currentDate}</lastmod>
    <changefreq>${page.changefreq}</changefreq>
    <priority>${page.priority}</priority>
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
