import { notFound } from "next/navigation";
import Link from "next/link";
import AnnouncementBar from "../../components/AnnouncementBar";
import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";
import WhatsAppFloat from "../../components/WhatsAppFloat";
import Breadcrumbs from "../../components/Breadcrumbs";
import CTABanner from "../../components/CTABanner";
import QuoteForm from "../../components/QuoteForm";
import { toolsData } from "../../data/toolsData";

export async function generateStaticParams() {
  return Object.keys(toolsData).map((slug) => ({ slug }));
}

export async function generateMetadata({ params }) {
  const { slug } = await params;
  const tool = toolsData[slug];
  if (!tool) return {};

  return {
    title: `How to Print ${tool.name} Images — Commercial Guide | AIPrintStudio`,
    description: `Complete guide on converting ${tool.name} AI images into commercial print-ready files. Overcome resolution limits, CMYK color shifts, and vector requirements.`,
    alternates: {
      canonical: `https://aiprintstudio.com/guides/${slug}`,
    },
  };
}

export default async function ToolGuidePage({ params }) {
  const { slug } = await params;
  const tool = toolsData[slug];

  if (!tool) {
    notFound();
  }

  const whatsappUrl =
    "https://wa.me/923479429415?text=" +
    encodeURIComponent(
      `Hello! I have artwork from ${tool.name} that I want to prepare for commercial printing. Can we discuss?`
    );

  return (
    <>
      <AnnouncementBar />
      <Navbar />
      <main className="subpage-main tool-guide-page">
        <div className="subpage-hero">
          <div className="container">
            <Breadcrumbs
              items={[
                { label: "Home", href: "/" },
                { label: "AI Guides", href: "/guides" },
                { label: tool.name },
              ]}
            />
            <span className="section-badge">{tool.name} Print Guide</span>
            <h1 className="subpage-hero__title">{tool.heroHeading}</h1>
            <p className="subpage-hero__subtitle">{tool.description}</p>
          </div>
        </div>

        <section className="container py-8">
          <div className="service-content-grid">
            <div className="service-main-content">
              {/* Native Specifications */}
              <div className="content-card">
                <h2 className="content-card__title">{tool.name} Native Output Specs vs Print Requirements</h2>
                <div className="table-responsive">
                  <table className="comparison-table">
                    <thead>
                      <tr>
                        <th>Metric</th>
                        <th>Native {tool.name} Output</th>
                        <th>Commercial Print Requirement</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td><strong>Resolution (DPI)</strong></td>
                        <td className="text-danger">{tool.startingDpi}</td>
                        <td className="text-success"><strong>300–600 DPI / Infinite Vector</strong></td>
                      </tr>
                      <tr>
                        <td><strong>Native Pixel Dimensions</strong></td>
                        <td className="text-danger">{tool.nativeRes}</td>
                        <td className="text-success"><strong>{tool.targetRes}</strong></td>
                      </tr>
                      <tr>
                        <td><strong>Color Profile</strong></td>
                        <td className="text-danger">sRGB (Screen Light)</td>
                        <td className="text-success"><strong>CMYK (Physical Press Profiles)</strong></td>
                      </tr>
                      <tr>
                        <td><strong>Bleed &amp; Margins</strong></td>
                        <td className="text-danger">None (0.00”)</td>
                        <td className="text-success"><strong>Standard 0.125” (3.175mm) Bleed</strong></td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>

              {/* Common Issues */}
              <div className="content-card">
                <h2 className="content-card__title">Common Problems When Printing {tool.name} Images</h2>
                <div className="issues-list">
                  {tool.commonIssues.map((issue, idx) => (
                    <div key={idx} className="issue-item">
                      <h4 className="issue-item__title">✕ Challenge #{idx + 1}</h4>
                      <p className="issue-item__desc">{issue}</p>
                    </div>
                  ))}
                </div>
              </div>

              {/* Recreation Workflow */}
              <div className="content-card">
                <h2 className="content-card__title">How AIPrintStudio Prepares {tool.name} Files</h2>
                <div className="process-timeline">
                  {tool.recreationWorkflow.map((step, idx) => (
                    <div key={idx} className="timeline-item">
                      <div className="timeline-item__num">0{idx + 1}</div>
                      <div className="timeline-item__content">
                        <p className="timeline-item__desc"><strong>{step}</strong></p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Sidebar */}
            <aside className="service-sidebar">
              <QuoteForm defaultService={`AI Artwork Recreation (${tool.name})`} />
              
              <div className="sidebar-contact-card">
                <h4>Have a {tool.name} Project?</h4>
                <p>Send your file on WhatsApp for immediate pre-press review.</p>
                <a
                  href={whatsappUrl}
                  className="btn btn--primary btn--full"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Chat on WhatsApp →
                </a>
              </div>
            </aside>
          </div>
        </section>

        <CTABanner />
      </main>
      <Footer />
      <WhatsAppFloat />
    </>
  );
}
