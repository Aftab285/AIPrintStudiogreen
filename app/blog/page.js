import Link from "next/link";
import AnnouncementBar from "../components/AnnouncementBar";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import WhatsAppFloat from "../components/WhatsAppFloat";
import Breadcrumbs from "../components/Breadcrumbs";
import CTABanner from "../components/CTABanner";
import { articlesData } from "../data/articlesData";

export const metadata = {
  title: "Commercial AI Printing Knowledge Hub & Pre-Press Guides | AIPrintStudio",
  description: "Explore in-depth technical guides on printing AI-generated art. Learn how to fix blurry prints, master RGB to CMYK color conversion, and convert AI images into vector graphics.",
};

export default function BlogPage() {
  const articles = Object.values(articlesData);

  return (
    <>
      <AnnouncementBar />
      <Navbar />
      <main className="subpage-main">
        <div className="subpage-hero">
          <div className="container">
            <Breadcrumbs items={[{ label: "Home", href: "/" }, { label: "Blog & Knowledge Hub" }]} />
            <h1 className="subpage-hero__title">
              AI Artwork <span className="highlight-text">Commercial Printing Hub</span>
            </h1>
            <p className="subpage-hero__subtitle">
              Authoritative, experience-based pre-press tutorials and technical guides to help you understand resolution, color models, vector graphics, and industrial press standards.
            </p>
          </div>
        </div>

        <section className="container py-8">
          <div className="blog-grid">
            {articles.map((art) => (
              <article key={art.slug} className="blog-card">
                <div className="blog-card__meta">
                  <span className="blog-card__cat">{art.category}</span>
                  <span className="blog-card__read">{art.readTime}</span>
                </div>
                <h2 className="blog-card__title">
                  <Link href={`/blog/${art.slug}`}>{art.title}</Link>
                </h2>
                <p className="blog-card__summary">{art.summary}</p>
                <div className="blog-card__footer">
                  <span className="blog-card__date">{art.publishDate} · By {art.author}</span>
                  <Link href={`/blog/${art.slug}`} className="blog-card__link">
                    Read Full Guide →
                  </Link>
                </div>
              </article>
            ))}
          </div>
        </section>

        <CTABanner />
      </main>
      <Footer />
      <WhatsAppFloat />
    </>
  );
}
