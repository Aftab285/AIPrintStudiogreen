import Link from "next/link";
import AnnouncementBar from "../components/AnnouncementBar";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import WhatsAppFloat from "../components/WhatsAppFloat";
import Breadcrumbs from "../components/Breadcrumbs";
import CTABanner from "../components/CTABanner";
import { servicesData } from "../data/servicesData";

export const metadata = {
  title: "Commercial AI Print Services — Vectorization, CMYK & Pre-Press",
  description: "Browse all 13 commercial pre-press services for AI-generated images. AI artwork recreation, logo vectorization, t-shirt prep, poster scaling, packaging dielines, and KDP covers. Projects from $5.",
};

export default function ServicesPage() {
  const servicesList = Object.values(servicesData);

  return (
    <>
      <AnnouncementBar />
      <Navbar />
      <main className="subpage-main">
        <div className="subpage-hero">
          <div className="container">
            <Breadcrumbs items={[{ label: "Home", href: "/" }, { label: "Services" }]} />
            <h1 className="subpage-hero__title">
              Commercial Print-Ready Services for <span className="highlight-text">AI Artwork</span>
            </h1>
            <p className="subpage-hero__subtitle">
              We convert raw AI images from Midjourney, ChatGPT, DALL·E, and Flux into 100% press-ready vector and high-resolution master files for physical printing.
            </p>
          </div>
        </div>

        <section className="services-hub-section">
          <div className="container">
            <div className="services-hub-grid">
              {servicesList.map((srv) => (
                <div key={srv.slug} className="service-hub-card">
                  <div className="service-hub-card__top">
                    <span className="service-hub-card__badge">{srv.badge}</span>
                    <span className="service-hub-card__price">From {srv.startingPrice}</span>
                  </div>
                  <h2 className="service-hub-card__title">
                    <Link href={`/services/${srv.slug}`}>{srv.title}</Link>
                  </h2>
                  <p className="service-hub-card__desc">{srv.summary}</p>
                  
                  <div className="service-hub-card__deliverables">
                    <span className="deliverables-label">Deliverables:</span>
                    <div className="deliverables-tags">
                      {srv.deliverables.slice(0, 3).map((d, idx) => (
                        <span key={idx} className="deliverable-tag">{d}</span>
                      ))}
                    </div>
                  </div>

                  <div className="service-hub-card__footer">
                    <span className="service-hub-card__turnaround">⚡ {srv.turnaround}</span>
                    <Link href={`/services/${srv.slug}`} className="btn btn--outline btn--sm">
                      View Service Specs →
                    </Link>
                  </div>
                </div>
              ))}
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
