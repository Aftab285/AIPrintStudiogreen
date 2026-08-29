import { notFound } from "next/navigation";
import Link from "next/link";
import AnnouncementBar from "../../components/AnnouncementBar";
import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";
import WhatsAppFloat from "../../components/WhatsAppFloat";
import Breadcrumbs from "../../components/Breadcrumbs";
import QuoteForm from "../../components/QuoteForm";
import CTABanner from "../../components/CTABanner";
import { servicesData } from "../../data/servicesData";

export async function generateStaticParams() {
  return Object.keys(servicesData).map((slug) => ({ slug }));
}

export async function generateMetadata({ params }) {
  const { slug } = await params;
  const service = servicesData[slug];
  if (!service) return {};

  return {
    title: service.metaTitle,
    description: service.metaDescription,
    alternates: {
      canonical: `https://aiprintstudio.com/services/${slug}`,
    },
    openGraph: {
      title: service.metaTitle,
      description: service.metaDescription,
      url: `https://aiprintstudio.com/services/${slug}`,
    },
  };
}

export default async function ServiceDetailPage({ params }) {
  const { slug } = await params;
  const service = servicesData[slug];

  if (!service) {
    notFound();
  }

  const whatsappUrl =
    "https://wa.me/923479429415?text=" +
    encodeURIComponent(
      `Hello! I need ${service.title} for my AI artwork. Can we discuss specs and a custom quote?`
    );

  return (
    <>
      <AnnouncementBar />
      <Navbar />
      <main className="subpage-main service-detail-page">
        {/* Service Hero */}
        <div className="subpage-hero">
          <div className="container">
            <Breadcrumbs
              items={[
                { label: "Home", href: "/" },
                { label: "Services", href: "/services" },
                { label: service.shortTitle },
              ]}
            />
            <div className="service-detail-hero">
              <div className="service-detail-hero__content">
                <span className="section-badge">{service.badge}</span>
                <h1 className="subpage-hero__title">{service.heroHeading}</h1>
                <p className="subpage-hero__subtitle">{service.heroSubheading}</p>
                
                <div className="service-detail-meta-pills">
                  <span className="meta-pill">✓ <strong>100% Commercial Ready</strong></span>
                  <span className="meta-pill">⚡ Turnaround: <strong>{service.turnaround}</strong></span>
                  <span className="meta-pill">✓ 100% Human Craftsmanship</span>
                </div>

                <div className="service-detail-actions">
                  <a
                    href={whatsappUrl}
                    className="btn btn--primary btn--large"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Talk to Me on WhatsApp →
                  </a>
                  <a href="#quote" className="btn btn--outline btn--large">
                    Get a Free Quote
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Overview & Key Takeaways (AEO) */}
        <section className="service-overview-section">
          <div className="container">
            <div className="service-content-grid">
              <div className="service-main-content">
                <div className="content-card">
                  <h2 className="content-card__title">Service Overview</h2>
                  <p className="content-card__body">{service.summary}</p>
                </div>

                {/* Key Takeaways Box (AEO Standard) */}
                <div className="takeaways-box">
                  <h3 className="takeaways-box__title">
                    <span className="takeaways-box__icon">📌</span> Key Takeaways
                  </h3>
                  <ul className="takeaways-box__list">
                    {service.keyTakeaways.map((item, idx) => (
                      <li key={idx}>✓ {item}</li>
                    ))}
                  </ul>
                </div>

                {/* Why AI Fails at this print application */}
                <div className="content-card">
                  <h2 className="content-card__title">
                    Why Raw AI Files Fail for {service.shortTitle}
                  </h2>
                  <div className="issues-list">
                    {service.whyAiFails.map((issue, idx) => (
                      <div key={idx} className="issue-item">
                        <h4 className="issue-item__title">✕ {issue.title}</h4>
                        <p className="issue-item__desc">{issue.desc}</p>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Step-by-Step Recreation Process */}
                <div className="content-card">
                  <h2 className="content-card__title">
                    Our 4-Step Technical Reproduction Process
                  </h2>
                  <div className="process-timeline">
                    {service.processSteps.map((step) => (
                      <div key={step.step} className="timeline-item">
                        <div className="timeline-item__num">{step.step}</div>
                        <div className="timeline-item__content">
                          <h4 className="timeline-item__title">{step.title}</h4>
                          <p className="timeline-item__desc">{step.desc}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Comparison Table */}
                <div className="content-card">
                  <h2 className="content-card__title">
                    Raw AI vs AIPrintStudio Master Recreations
                  </h2>
                  <div className="table-responsive">
                    <table className="comparison-table">
                      <thead>
                        <tr>
                          <th>Specification</th>
                          <th>Raw AI Output</th>
                          <th>AIPrintStudio Master</th>
                        </tr>
                      </thead>
                      <tbody>
                        {service.comparisonTable.map((row, idx) => (
                          <tr key={idx}>
                            <td><strong>{row.feature}</strong></td>
                            <td className="text-danger">{row.rawAi}</td>
                            <td className="text-success"><strong>{row.ourService}</strong></td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                </div>

                {/* Deliverables */}
                <div className="content-card">
                  <h2 className="content-card__title">Deliverable File Formats Included</h2>
                  <div className="deliverables-grid">
                    {service.deliverables.map((item, idx) => (
                      <div key={idx} className="deliverable-pill">
                        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                          <polyline points="20 6 9 17 4 12" />
                        </svg>
                        <span>{item}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Service Specific FAQs */}
                <div className="content-card">
                  <h2 className="content-card__title">Frequently Asked Questions</h2>
                  <div className="faq-list">
                    {service.faqs.map((faq, idx) => (
                      <div key={idx} className="faq-card">
                        <h4 className="faq-card__question">Q: {faq.q}</h4>
                        <p className="faq-card__answer">{faq.a}</p>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {/* Sidebar with Quote Form */}
              <aside className="service-sidebar" id="quote">
                <QuoteForm defaultService={service.title} />
                
                <div className="sidebar-contact-card">
                  <h4>Need Immediate Help?</h4>
                  <p>Speak directly with our pre-press lead on WhatsApp for instant feedback on your AI file.</p>
                  <a
                    href={whatsappUrl}
                    className="btn btn--primary btn--full"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    WhatsApp +92 347 9429415
                  </a>
                </div>
              </aside>
            </div>
          </div>
        </section>

        <CTABanner />
      </main>
      <Footer />
      <WhatsAppFloat />

      {/* Structured Data: Service Schema */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Service",
            name: service.title,
            description: service.metaDescription,
            provider: {
              "@type": "Organization",
              name: "AIPrintStudio",
              url: "https://aiprintstudio.com",
            },
          }),
        }}
      />
    </>
  );
}
