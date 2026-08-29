import AnnouncementBar from "../components/AnnouncementBar";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import WhatsAppFloat from "../components/WhatsAppFloat";
import Breadcrumbs from "../components/Breadcrumbs";
import PricingSection from "../components/PricingSection";
import FAQSection from "../components/FAQSection";
import CTABanner from "../components/CTABanner";

export const metadata = {
  title: "Pricing & Packages — Starting from $5 | AIPrintStudio",
  description: "Transparent, pay-per-project pricing for AI artwork recreation and commercial print preparation. Projects start at just $5 with 12–24h turnaround and 100% acceptance guarantee.",
};

export default function PricingPage() {
  return (
    <>
      <AnnouncementBar />
      <Navbar />
      <main className="subpage-main">
        <div className="subpage-hero">
          <div className="container">
            <Breadcrumbs items={[{ label: "Home", href: "/" }, { label: "Pricing" }]} />
            <h1 className="subpage-hero__title">
              Affordable, Transparent Pricing <span className="highlight-text">Starting at $5</span>
            </h1>
            <p className="subpage-hero__subtitle">
              No subscriptions. No automated credits. Pay only for the files you need prepared, backed by our 100% commercial print acceptance guarantee.
            </p>
          </div>
        </div>

        <PricingSection />

        <section className="container py-8">
          <div className="content-card">
            <h2 className="content-card__title">Commercial Rights &amp; What’s Included in Every Project</h2>
            <div className="features-checklist">
              <div className="feature-check-item">
                <span className="check-icon">✓</span>
                <div>
                  <strong>Full Commercial Ownership:</strong> You retain 100% intellectual property and commercial usage rights for physical sale, trademarks, and merchandise.
                </div>
              </div>
              <div className="feature-check-item">
                <span className="check-icon">✓</span>
                <div>
                  <strong>Complete Master File Bundle:</strong> Delivered in Adobe Illustrator (.AI), Scalable Vector (.SVG), Vector EPS, Print-Ready PDF/X-1a, High-Res PNG (300 DPI), and CMYK TIFF.
                </div>
              </div>
              <div className="feature-check-item">
                <span className="check-icon">✓</span>
                <div>
                  <strong>Free Print Shop Revisions:</strong> If your print facility or POD manufacturer requests any file adjustments, we make them free of charge.
                </div>
              </div>
            </div>
          </div>
        </section>

        <FAQSection />
        <CTABanner />
      </main>
      <Footer />
      <WhatsAppFloat />
    </>
  );
}
