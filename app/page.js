import AnnouncementBar from "./components/AnnouncementBar";
import Navbar from "./components/Navbar";
import HeroSection from "./components/HeroSection";
import TrustedBy from "./components/TrustedBy";
import ProblemSection from "./components/ProblemSection";
import ServicesOverview from "./components/ServicesOverview";
import BeforeAfterShowcase from "./components/BeforeAfterShowcase";
import HowItWorksSection from "./components/HowItWorksSection";
import AIToolsSupport from "./components/AIToolsSupport";
import PricingSection from "./components/PricingSection";
import TrustSignalsSection from "./components/TrustSignalsSection";
import FAQSection from "./components/FAQSection";
import CTABanner from "./components/CTABanner";
import Footer from "./components/Footer";
import WhatsAppFloat from "./components/WhatsAppFloat";

export default function Home() {
  return (
    <>
      <AnnouncementBar />
      <Navbar />
      <main>
        <HeroSection />
        <TrustedBy />
        <ProblemSection />
        <ServicesOverview />
        <BeforeAfterShowcase />
        <HowItWorksSection />
        <AIToolsSupport />
        <PricingSection />
        <TrustSignalsSection />
        <FAQSection />
        <CTABanner />
      </main>
      <Footer />
      <WhatsAppFloat />

      {/* Structured Data: FAQPage Schema */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "FAQPage",
            mainEntity: [
              {
                "@type": "Question",
                name: "Why can't I print raw AI images directly from Midjourney or ChatGPT?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "Raw AI images are generated at screen resolution (72–96 DPI) in RGB color space. If you print them directly at standard poster or t-shirt size, they will appear blurry, pixelated, and suffer from muddy dark color shifts when converted to CMYK ink.",
                },
              },
              {
                "@type": "Question",
                name: "How is AIPrintStudio different from free online AI upscalers?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "Online AI upscalers simply guess pixels based on neural networks. They cannot create true scalable vector files (.AI, .EPS, .SVG), cannot replace garbled AI pseudo-text with crisp real typography, and cannot create die-cut contour paths for stickers and packaging.",
                },
              },
              {
                "@type": "Question",
                name: "What file formats will I receive in my delivery package?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "You receive a complete commercial print master package including: Adobe Illustrator (.AI), Scalable Vector (.SVG), Vector EPS, Press-Ready PDF (PDF/X-1a with bleeds & crop marks), High-Res 300+ DPI Transparent PNG, and CMYK uncompressed TIFF.",
                },
              },
              {
                "@type": "Question",
                name: "How much does it cost and what is the turnaround time?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "Projects start from just $5 for basic vectorization and file preparation. Standard turnaround is 12 to 24 hours. Rush delivery (4–6 hours) is available upon request.",
                },
              },
            ],
          }),
        }}
      />
    </>
  );
}
