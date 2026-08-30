import type { APIRoute } from "astro";

export const GET: APIRoute = async () => {
  const robotsTxt = `User-agent: *
Allow: /
Disallow: /api/

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
