import AnnouncementBar from "../components/AnnouncementBar";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import WhatsAppFloat from "../components/WhatsAppFloat";
import Breadcrumbs from "../components/Breadcrumbs";

export const metadata = {
  title: "Terms of Service | AIPrintStudio",
  description: "Terms of service and commercial print preparation agreements for AIPrintStudio.",
};

export default function TermsPage() {
  return (
    <>
      <AnnouncementBar />
      <Navbar />
      <main className="subpage-main">
        <div className="subpage-hero">
          <div className="container">
            <Breadcrumbs items={[{ label: "Home", href: "/" }, { label: "Terms of Service" }]} />
            <h1 className="subpage-hero__title">Terms of Service</h1>
            <p className="subpage-hero__subtitle">
              Last Updated: August 2026. Clear, transparent terms for all commercial pre-press projects.
            </p>
          </div>
        </div>

        <section className="container py-8">
          <div className="content-card max-w-4xl mx-auto">
            <h2>1. Service Scope</h2>
            <p>
              AIPrintStudio provides manual digital reproduction, vectorization, CMYK color calibration, bleed setup, and preflight inspection services for client-provided AI-generated artwork.
            </p>

            <h2 className="mt-6">2. Deliverables &amp; Turnaround</h2>
            <p>
              Deliverables are provided in standard industry formats (.AI, .EPS, .SVG, .PDF/X, .PNG, .TIFF). Standard turnaround times are 12 to 24 hours from project confirmation, unless a rush delivery service (4–6 hours) is agreed upon.
            </p>

            <h2 className="mt-6">3. Commercial Print Shop Guarantee</h2>
            <p>
              We guarantee that our prepared files meet commercial printing press specifications. In the unlikely event that your commercial printer or print-on-demand platform flags any technical error with our output files, we will revise the file free of charge or communicate directly with your print vendor until approved.
            </p>

            <h2 className="mt-6">4. Intellectual Property &amp; Ownership</h2>
            <p>
              Clients retain 100% full intellectual property and commercial exploitation rights to the final delivered master files. You are free to trademark, publish, sell, and print your files globally without royalties or restrictions.
            </p>

            <h2 className="mt-6">5. Contact</h2>
            <p>
              For questions regarding our terms, reach out directly on WhatsApp at <strong>+92 347 9429415</strong>.
            </p>
          </div>
        </section>
      </main>
      <Footer />
      <WhatsAppFloat />
    </>
  );
}
