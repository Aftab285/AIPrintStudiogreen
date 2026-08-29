import Link from "next/link";
import AnnouncementBar from "../components/AnnouncementBar";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import WhatsAppFloat from "../components/WhatsAppFloat";
import Breadcrumbs from "../components/Breadcrumbs";
import CTABanner from "../components/CTABanner";
import { toolsData } from "../data/toolsData";

export const metadata = {
  title: "AI Tool Printing Guides — Midjourney, ChatGPT, Flux, Canva | AIPrintStudio",
  description: "Learn how to prepare images from Midjourney, ChatGPT/DALL-E, Flux, Ideogram, and Canva AI for physical commercial printing. Native resolutions, flaws, and solutions.",
};

export default function GuidesHubPage() {
  const toolsList = Object.values(toolsData);

  return (
    <>
      <AnnouncementBar />
      <Navbar />
      <main className="subpage-main">
        <div className="subpage-hero">
          <div className="container">
            <Breadcrumbs items={[{ label: "Home", href: "/" }, { label: "AI Printing Guides" }]} />
            <h1 className="subpage-hero__title">
              AI Generator <span className="highlight-text">Printing Guides</span>
            </h1>
            <p className="subpage-hero__subtitle">
              Detailed pre-press breakdown for every major AI model. Discover their native limitations and how to convert their outputs into commercial press-ready files.
            </p>
          </div>
        </div>

        <section className="container py-8">
          <div className="tools-grid">
            {toolsList.map((tool) => (
              <div key={tool.slug} className="tool-card">
                <div className="tool-card__header">
                  <h2 className="tool-card__name">{tool.name}</h2>
                  <span className="tool-card__native-res">{tool.startingDpi}</span>
                </div>
                <p className="tool-card__desc">{tool.description}</p>
                <div className="tool-card__specs">
                  <span className="tool-card__spec">Native: {tool.nativeRes}</span>
                  <span className="tool-card__spec text-success">Target: {tool.targetRes}</span>
                </div>
                <Link href={`/guides/${tool.slug}`} className="tool-card__link">
                  Read {tool.name} Printing Guide →
                </Link>
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
