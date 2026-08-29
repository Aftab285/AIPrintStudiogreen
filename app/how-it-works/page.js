import AnnouncementBar from "../components/AnnouncementBar";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import WhatsAppFloat from "../components/WhatsAppFloat";
import Breadcrumbs from "../components/Breadcrumbs";
import HowItWorksSection from "../components/HowItWorksSection";
import CTABanner from "../components/CTABanner";

export const metadata = {
  title: "How It Works — 4-Step AI Artwork Pre-Press Process | AIPrintStudio",
  description: "Learn how AIPrintStudio transforms your raw Midjourney, ChatGPT, and Flux images into commercial print-ready files in 4 simple steps.",
};

export default function HowItWorksPage() {
  return (
    <>
      <AnnouncementBar />
      <Navbar />
      <main className="subpage-main">
        <div className="subpage-hero">
          <div className="container">
            <Breadcrumbs items={[{ label: "Home", href: "/" }, { label: "How It Works" }]} />
            <h1 className="subpage-hero__title">
              Our 4-Step <span className="highlight-text">Human Pre-Press Process</span>
            </h1>
            <p className="subpage-hero__subtitle">
              We prioritize personal consultation and precision craftsmanship over automated software upscalers. Here is exactly how we take your project from AI concept to physical print perfection.
            </p>
          </div>
        </div>

        <HowItWorksSection />

        <section className="container py-8">
          <div className="content-card">
            <h2 className="content-card__title">Why Consultation-First Beats Automated Upload Forms</h2>
            <p className="content-card__body">
              Most automated websites make you drag and drop your file into an algorithm that blindly upscales pixels without understanding your print medium. A t-shirt printed via Direct-to-Garment requires completely different underbase and edge transparency than a high-gloss metallic acrylic wall print or a flexographic box packaging dieline.
            </p>
            <p className="content-card__body mt-4">
              By talking with us directly, you get a dedicated pre-press production specialist who tailors your file to your exact printer, paper stock, ink profile, and finishing requirements.
            </p>
          </div>
        </section>

        <CTABanner />
      </main>
      <Footer />
      <WhatsAppFloat />
    </>
  );
}
