import "./globals.css";

export const metadata = {
  metadataBase: new URL("https://aiprintstudio.com"),
  title: {
    default: "AIPrintStudio — Transform AI Artwork into Print-Ready Perfection",
    template: "%s | AIPrintStudio",
  },
  description:
    "We professionally recreate your AI-generated images into high-resolution, commercial print-ready files. Expert CMYK conversion, vector artwork, and 300+ DPI output.",
  keywords: [
    "AI print-ready artwork",
    "print-ready AI artwork",
    "AI artwork printing",
    "AI image to vector",
    "AI artwork to vector",
    "CMYK conversion",
    "RGB to CMYK",
    "300 DPI artwork",
    "print file preparation",
    "artwork recreation",
    "AI logo vectorization",
    "vector conversion",
    "commercial print artwork",
  ],
  authors: [{ name: "AIPrintStudio" }],
  creator: "AIPrintStudio",
  publisher: "AIPrintStudio",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://aiprintstudio.com",
    siteName: "AIPrintStudio",
    title: "AIPrintStudio — Transform AI Artwork into Print-Ready Perfection",
    description:
      "We professionally recreate your AI-generated images into high-resolution, commercial print-ready files. Expert CMYK conversion, vector artwork, and 300+ DPI output.",
    images: [
      {
        url: "/logo.jpg",
        width: 1200,
        height: 630,
        alt: "AIPrintStudio - AI Artwork to Print-Ready Files",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "AIPrintStudio — Transform AI Artwork into Print-Ready Perfection",
    description:
      "We professionally recreate your AI-generated images into high-resolution, commercial print-ready files.",
    images: ["/logo.jpg"],
  },
  robots: {
    index: true,
    follow: true,
  },
  alternates: {
    canonical: "https://aiprintstudio.com",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        {/* Organization Schema */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Organization",
              name: "AIPrintStudio",
              url: "https://aiprintstudio.com",
              logo: "https://aiprintstudio.com/logo.jpg",
              description:
                "Professional AI artwork recreation for commercial print-ready files.",
              contactPoint: {
                "@type": "ContactPoint",
                telephone: "+923479429415",
                contactType: "customer service",
                areaServed: ["US", "CA", "GB", "AU"],
                availableLanguage: "English",
              },
            }),
          }}
        />
        {/* Website Schema */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "WebSite",
              name: "AIPrintStudio",
              url: "https://aiprintstudio.com",
            }),
          }}
        />
        {/* Service Schema */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Service",
              serviceType: "AI Artwork Recreation & Print Preparation",
              provider: {
                "@type": "Organization",
                name: "AIPrintStudio",
              },
              areaServed: [
                { "@type": "Country", name: "United States" },
                { "@type": "Country", name: "Canada" },
                { "@type": "Country", name: "United Kingdom" },
                { "@type": "Country", name: "Australia" },
              ],
            }),
          }}
        />
      </head>
      <body>{children}</body>
    </html>
  );
}
