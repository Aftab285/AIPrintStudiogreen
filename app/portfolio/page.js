import Image from "next/image";
import Link from "next/link";
import AnnouncementBar from "../components/AnnouncementBar";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import WhatsAppFloat from "../components/WhatsAppFloat";
import Breadcrumbs from "../components/Breadcrumbs";
import CTABanner from "../components/CTABanner";

export const metadata = {
  title: "Portfolio & Print Proof Showcase | AIPrintStudio",
  description: "Explore our portfolio of recreated AI artwork across t-shirts, packaging, fine art posters, stickers, and brand logos. See the before and after print-ready results.",
};

export default function PortfolioPage() {
  const projects = [
    {
      title: "Mythic Floating Castle Poster",
      category: "Fine Art Wall Poster",
      source: "Midjourney v6",
      output: "300 DPI @ 24x36” (CMYK TIFF + PDF/X-1a)",
      desc: "Reconstructed fantasy landscape with ultra-sharp waterfall details, foliage textures, and calibrated sky gradients for fine art giclée canvas printing.",
      beforeImg: "/hero-before.jpg",
      afterImg: "/hero-after.jpg",
    },
    {
      title: "Cyberpunk Mascot Logo",
      category: "Vector Brand Identity",
      source: "ChatGPT / DALL·E 3",
      output: "100% Scalable Vector (.AI, .EPS, .SVG)",
      desc: "Vector redrawing of an intricate cybernetic mascot with real geometric typography, clean bezier curves, and Pantone spot colors for embroidery.",
      beforeImg: "/hero-before.jpg",
      afterImg: "/hero-after.jpg",
    },
    {
      title: "Botanical Gin Packaging Label",
      category: "Product Label & Foil Mask",
      source: "Flux Dev",
      output: "Roll Label PDF with Gold Foil Spot Channel",
      desc: "Transformed AI bottle concept into factory-ready roll dieline with scannable barcode, regulatory typography, and spot metallic embellishments.",
      beforeImg: "/hero-before.jpg",
      afterImg: "/hero-after.jpg",
    },
  ];

  return (
    <>
      <AnnouncementBar />
      <Navbar />
      <main className="subpage-main">
        <div className="subpage-hero">
          <div className="container">
            <Breadcrumbs items={[{ label: "Home", href: "/" }, { label: "Portfolio" }]} />
            <h1 className="subpage-hero__title">
              Our Work: <span className="highlight-text">From AI Concept to Physical Print</span>
            </h1>
            <p className="subpage-hero__subtitle">
              Browse our before-and-after case studies across apparel, large format wall art, packaging, stickers, and corporate branding.
            </p>
          </div>
        </div>

        <section className="container py-8">
          <div className="portfolio-grid">
            {projects.map((proj, idx) => (
              <div key={idx} className="portfolio-card">
                <div className="portfolio-card__images">
                  <div className="portfolio-img-wrap">
                    <span className="portfolio-img-tag before">Raw AI Output</span>
                    <Image
                      src={proj.beforeImg}
                      alt={`Before: ${proj.title}`}
                      width={380}
                      height={420}
                      className="portfolio-img"
                    />
                  </div>
                  <div className="portfolio-img-wrap">
                    <span className="portfolio-img-tag after">Press-Ready Master</span>
                    <Image
                      src={proj.afterImg}
                      alt={`After: ${proj.title}`}
                      width={380}
                      height={420}
                      className="portfolio-img"
                    />
                  </div>
                </div>

                <div className="portfolio-card__content">
                  <div className="portfolio-card__meta">
                    <span className="portfolio-badge">{proj.category}</span>
                    <span className="portfolio-source">Source: {proj.source}</span>
                  </div>
                  <h3 className="portfolio-card__title">{proj.title}</h3>
                  <p className="portfolio-card__desc">{proj.desc}</p>
                  <div className="portfolio-card__output">
                    <strong>Delivery Specs:</strong> {proj.output}
                  </div>
                </div>
              </div>
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
