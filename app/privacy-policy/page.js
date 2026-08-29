import AnnouncementBar from "../components/AnnouncementBar";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import WhatsAppFloat from "../components/WhatsAppFloat";
import Breadcrumbs from "../components/Breadcrumbs";

export const metadata = {
  title: "Privacy Policy | AIPrintStudio",
  description: "Learn how AIPrintStudio protects your privacy and treats your uploaded AI artwork with complete confidentiality.",
};

export default function PrivacyPolicyPage() {
  return (
    <>
      <AnnouncementBar />
      <Navbar />
      <main className="subpage-main">
        <div className="subpage-hero">
          <div className="container">
            <Breadcrumbs items={[{ label: "Home", href: "/" }, { label: "Privacy Policy" }]} />
            <h1 className="subpage-hero__title">Privacy Policy</h1>
            <p className="subpage-hero__subtitle">
              Last Updated: August 2026. Your intellectual property and personal data are strictly protected.
            </p>
          </div>
        </div>

        <section className="container py-8">
          <div className="content-card max-w-4xl mx-auto">
            <h2>1. Confidentiality of Client Artwork</h2>
            <p>
              At AIPrintStudio, we treat all client-submitted AI artwork, logos, concept art, and project details as strictly confidential. We never sell, license, share, or publicly display your artwork in our portfolio without your explicit prior written consent.
            </p>

            <h2 className="mt-6">2. Information We Collect</h2>
            <p>
              We collect information that you directly provide when contacting us via WhatsApp, email, or our quote consultation forms, including your name, email address, project descriptions, and artwork files.
            </p>

            <h2 className="mt-6">3. Use of Your Information</h2>
            <p>
              Your information is used solely to provide pre-press file inspection, prepare quotes, communicate about your active project, deliver completed print-ready files, and provide ongoing customer support.
            </p>

            <h2 className="mt-6">4. Intellectual Property Rights</h2>
            <p>
              You retain 100% full commercial and intellectual property ownership of all original artwork and final recreated master files produced for your projects.
            </p>

            <h2 className="mt-6">5. Contact Information</h2>
            <p>
              If you have any questions regarding this Privacy Policy, contact us on WhatsApp at <strong>+92 347 9429415</strong> or via our website at AIPrintStudio.com.
            </p>
          </div>
        </section>
      </main>
      <Footer />
      <WhatsAppFloat />
    </>
  );
}
