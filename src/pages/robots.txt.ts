import type { APIRoute } from "astro";

export const GET: APIRoute = async () => {
  const robotsTxt = `# ========================================
# AIPrintStudio - robots.txt
# ========================================

# Standard Search Engine Crawlers
User-agent: *
Allow: /
Disallow: /api/
Disallow: /_astro/

# AI Scraping & Data Extraction Bots
User-agent: GPTBot
Disallow: /

User-agent: ChatGPT-User
Disallow: /

User-agent: CCBot
Disallow: /

User-agent: anthropic-ai
Disallow: /

User-agent: Claude-Web
Disallow: /

User-agent: Bytespider
Disallow: /

User-agent: Diffbot
Disallow: /

User-agent: FacebookBot
Disallow: /

User-agent: Google-Extended
Disallow: /

User-agent: Omegabot
Disallow: /

# Canonical Sitemap Reference
Sitemap: https://aiprintstudio.com/sitemap.xml
`;

  return new Response(robotsTxt, {
    status: 200,
    headers: {
      "Content-Type": "text/plain; charset=utf-8",
      "Cache-Control": "public, max-age=86400",
    },
  });
};
