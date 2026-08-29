import AnnouncementBar from "../components/AnnouncementBar";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import WhatsAppFloat from "../components/WhatsAppFloat";
import Breadcrumbs from "../components/Breadcrumbs";
import CTABanner from "../components/CTABanner";

export const metadata = {
  title: "About AIPrintStudio — Commercial Pre-Press Specialists for AI Art",
  description: "Learn why AIPrintStudio was built: to bridge the gap between creative AI generation and industrial commercial printing through expert manual reproduction.",
};

export default function AboutPage() {
  return (
    <>
      <AnnouncementBar />
      <Navbar />
      <main className="subpage-main">
        <div className="subpage-hero">
          <div className="container">
            <Breadcrumbs items={[{ label: "Home", href: "/" }, { label: "About" }]} />
            <h1 className="subpage-hero__title">
              About <span className="highlight-text">AIPrintStudio</span>
            </h1>
            <p className="subpage-hero__subtitle">
              We are commercial pre-press veterans and digital reproduction artists dedicated to helping creators, businesses, and print shops print AI artwork without compromise.
            </p>
          </div>
        </div>

        <section className="container py-8">
          <div className="about-grid">
            <div className="about-content">
              <div className="content-card">
                <h2 className="content-card__title">Our Mission</h2>
                <p className="content-card__body">
                  Generative AI has democratized visual creativity, allowing anyone to generate breathtaking artwork in seconds. However, commercial printing machinery operates on strict physical laws: mathematical vector paths, exact 300+ DPI dot density, physical CMYK ink gamuts, and precise die-cut tolerances.
                </p>
                <p className="content-card__body mt-4">
                  <strong>AIPrintStudio was created to bridge this exact gap.</strong> Our mission is to become the internet’s most trusted, authoritative destination for transforming raw AI concept art into commercial print-ready master files.
                </p>
              </div>

              <div className="content-card mt-6">
                <h2 className="content-card__title">Why We Reject AI-Only Automated Upscalers</h2>
                <p className="content-card__body">
                  When automated software tools upscale an image, they do not understand that a logo needs clean vector anchor points for a vinyl plotter, or that dark shadows on a t-shirt need an underbase choke to prevent cracking ink. Automated upscalers guess pixels, leaving waxy plastic skin textures and melted text.
                </p>
                <p className="content-card__body mt-4">
                  We believe that while AI is incredible for generating concepts, <strong>human pre-press expertise is indispensable for physical manufacturing.</strong> Every file from AIPrintStudio is hand-crafted and preflight-checked by an experienced graphic reproduction specialist.
                </p>
              </div>
            </div>

            <div className="about-sidebar">
              <div className="trust-card">
                <h3>Our Core Guarantees</h3>
                <ul className="about-guarantees-list">
                  <li><strong>100% Human Quality:</strong> No automated bots or destructive neural filters.</li>
                  <li><strong>Print Shop Ready:</strong> Certified PDF/X-1a, vector .AI, .EPS, and 300+ DPI masters.</li>
                  <li><strong>Fast Turnaround:</strong> 12–24h standard delivery with rush options.</li>
                  <li><strong>Direct Support:</strong> 1-on-1 WhatsApp consultation with your dedicated designer.</li>
                </ul>
              </div>

              <div className="sidebar-contact-card mt-6">
                <h4>Have a Question?</h4>
                <p>Chat directly with our founder on WhatsApp to discuss your project.</p>
                <a
                  href="https://wa.me/923479429415?text=Hello!%20I%20would%20like%20to%20learn%20more%20about%20AIPrintStudio."
                  className="btn btn--primary btn--full"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Chat on WhatsApp (+92 347 9429415)
                </a>
              </div>
            </div>
          </div>
        </section>

        <CTABanner />
      </main>
      <Footer />
      <WhatsAppFloat />
    </>
  );
}
