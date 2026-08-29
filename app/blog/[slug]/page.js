import { notFound } from "next/navigation";
import Link from "next/link";
import AnnouncementBar from "../../components/AnnouncementBar";
import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";
import WhatsAppFloat from "../../components/WhatsAppFloat";
import Breadcrumbs from "../../components/Breadcrumbs";
import CTABanner from "../../components/CTABanner";
import { articlesData } from "../../data/articlesData";

export async function generateStaticParams() {
  return Object.keys(articlesData).map((slug) => ({ slug }));
}

export async function generateMetadata({ params }) {
  const { slug } = await params;
  const article = articlesData[slug];
  if (!article) return {};

  return {
    title: article.metaTitle,
    description: article.metaDescription,
    alternates: {
      canonical: `https://aiprintstudio.com/blog/${slug}`,
    },
    openGraph: {
      title: article.metaTitle,
      description: article.metaDescription,
      url: `https://aiprintstudio.com/blog/${slug}`,
      type: "article",
      publishedTime: "2026-08-01T00:00:00Z",
    },
  };
}

export default async function ArticleDetailPage({ params }) {
  const { slug } = await params;
  const article = articlesData[slug];

  if (!article) {
    notFound();
  }

  const whatsappUrl =
    "https://wa.me/923479429415?text=" +
    encodeURIComponent(
      `Hello! I read your article "${article.title}" and have a question about printing my AI artwork.`
    );

  return (
    <>
      <AnnouncementBar />
      <Navbar />
      <main className="subpage-main article-detail-page">
        <div className="subpage-hero">
          <div className="container">
            <Breadcrumbs
              items={[
                { label: "Home", href: "/" },
                { label: "Knowledge Hub", href: "/blog" },
                { label: article.category },
              ]}
            />
            <div className="article-hero-header">
              <span className="section-badge">{article.category}</span>
              <h1 className="subpage-hero__title article-title">{article.title}</h1>
              <div className="article-meta-bar">
                <span>By <strong>{article.author}</strong></span>
                <span>•</span>
                <span>{article.publishDate}</span>
                <span>•</span>
                <span>{article.readTime}</span>
              </div>
            </div>
          </div>
        </div>

        <section className="container py-8">
          <div className="article-layout-grid">
            {/* Main Content */}
            <article className="article-main-content">
              {/* Short Answer / Summary Box (AEO Standard) */}
              <div className="article-summary-box">
                <h3 className="summary-title">💡 Summary &amp; Direct Answer</h3>
                <p>{article.summary}</p>
              </div>

              {/* Key Takeaways Box (AEO / GEO Standard) */}
              <div className="takeaways-box mt-6">
                <h3 className="takeaways-box__title">📌 Key Takeaways</h3>
                <ul className="takeaways-box__list">
                  {article.keyTakeaways.map((item, idx) => (
                    <li key={idx}>✓ {item}</li>
                  ))}
                </ul>
              </div>

              {/* Article Body Sections */}
              <div className="article-body-content mt-8">
                {article.sections.map((sec, idx) => (
                  <section key={idx} className="article-section-block">
                    <h2>{sec.heading}</h2>
                    <div
                      className="section-markdown-text"
                      dangerouslySetInnerHTML={{
                        __html: sec.content
                          .replace(/\n\n/g, "<p>")
                          .replace(/\n\* /g, "<li>")
                          .replace(/\*\*(.*?)\*\*/g, "<strong>$1</strong>"),
                      }}
                    />
                  </section>
                ))}
              </div>

              {/* FAQs Section */}
              {article.faqs && article.faqs.length > 0 && (
                <div className="article-faqs-block mt-8">
                  <h2>Frequently Asked Questions</h2>
                  <div className="faq-list">
                    {article.faqs.map((faq, idx) => (
                      <div key={idx} className="faq-card">
                        <h4 className="faq-card__question">Q: {faq.q}</h4>
                        <p className="faq-card__answer">{faq.a}</p>
                      </div>
                    ))}
                  </div>
                </div>
              )}
            </article>

            {/* Sidebar */}
            <aside className="article-sidebar">
              <div className="sidebar-cta-box">
                <h3>Need Print-Ready AI Files?</h3>
                <p>
                  Skip the headache of blurry prints and color shifts. We recreate AI files manually from $5 with guaranteed printer approval.
                </p>
                <a
                  href={whatsappUrl}
                  className="btn btn--primary btn--full"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Talk to Me on WhatsApp →
                </a>
                <Link href="/contact" className="btn btn--outline btn--full mt-2">
                  Get a Free Quote
                </Link>
              </div>

              <div className="sidebar-links-box mt-6">
                <h4>Popular Pre-Press Services</h4>
                <ul>
                  <li><Link href="/services/ai-artwork-recreation">AI Artwork Recreation</Link></li>
                  <li><Link href="/services/ai-image-to-vector">AI Image to Vector</Link></li>
                  <li><Link href="/services/t-shirt-artwork">T-Shirt &amp; Apparel Prep</Link></li>
                  <li><Link href="/services/logo-vectorization">Logo Vectorization</Link></li>
                  <li><Link href="/services/poster-preparation">Large Format Posters</Link></li>
                  <li><Link href="/services/cmyk-conversion">CMYK Color Calibration</Link></li>
                </ul>
              </div>
            </aside>
          </div>
        </section>

        <CTABanner />
      </main>
      <Footer />
      <WhatsAppFloat />

      {/* Structured Data: Article Schema */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Article",
            headline: article.title,
            description: article.metaDescription,
            author: {
              "@type": "Organization",
              name: "AIPrintStudio Pre-Press Team",
              url: "https://aiprintstudio.com",
            },
            publisher: {
              "@type": "Organization",
              name: "AIPrintStudio",
              logo: {
                "@type": "ImageObject",
                url: "https://aiprintstudio.com/logo.jpg",
              },
            },
            datePublished: "2026-08-01T00:00:00Z",
            mainEntityOfPage: `https://aiprintstudio.com/blog/${slug}`,
          }),
        }}
      />
    </>
  );
}
