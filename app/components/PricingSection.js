export default function PricingSection() {
  const tiers = [
    {
      name: "Starter Vector / Prep",
      price: "$5",
      period: "per artwork",
      popular: false,
      desc: "Ideal for simple AI logos, flat stickers, basic icons, and direct CMYK file inspection.",
      features: [
        "100% Manual Vector Redraw (.SVG, .AI, .EPS)",
        "300+ DPI High-Resolution Master File",
        "Clean Transparent Background",
        "CMYK Color Conversion & Profile Embedding",
        "12–24 Hour Turnaround",
        "Commercial Use License Included",
      ],
      cta: "Talk on WhatsApp",
      ctaHref: "https://wa.me/923479429415?text=" + encodeURIComponent("Hello! I need Starter AI print preparation ($5). Can we discuss?"),
    },
    {
      name: "Commercial Print Master",
      price: "$10",
      period: "per artwork",
      popular: true,
      desc: "Our most popular package for t-shirts, posters, complex illustrations, and multi-color vector artwork.",
      features: [
        "Everything in Starter, plus:",
        "Complex Multi-Layer Vectorization",
        "Real Typography Replacement & Kerning",
        "Custom Bleeds & Crop Marks (0.125”)",
        "Spot Color Separation (1–6 Colors)",
        "Sticker Die-Cut Contour Cut Paths",
        "100% Guaranteed Commercial Press Acceptance",
      ],
      cta: "Get Started Now",
      ctaHref: "https://wa.me/923479429415?text=" + encodeURIComponent("Hello! I need the Commercial Print Master package ($10). Can we discuss my project?"),
    },
    {
      name: "Packaging & Large Format",
      price: "$15+",
      period: "custom scope",
      popular: false,
      desc: "For commercial packaging dielines, wraparound book covers, trade show backdrops, and product labels.",
      features: [
        "Everything in Commercial, plus:",
        "Full Dieline Mapping & Folding Alignment",
        "Spot UV, Gold Foil & Emboss Mask Layers",
        "KDP / IngramSpark Exact Spine Calculation",
        "Nutrition Tables, Barcodes & Regulatory Text",
        "Rush Delivery Option (4–6 Hours)",
        "Direct Print Shop Technical Support",
      ],
      cta: "Request Free Quote",
      ctaHref: "/contact",
    },
  ];

  return (
    <section className="pricing-section" id="pricing" aria-labelledby="pricing-heading">
      <div className="container">
        <div className="section-header text-center">
          <span className="section-badge">Transparent Value</span>
          <h2 className="section-title" id="pricing-heading">
            Simple, Transparent Pricing <span className="highlight-text">Starting from $5</span>
          </h2>
          <p className="section-subtitle">
            No subscriptions or hidden fees. Pay only for the artwork you need prepared, backed by our 100% print shop acceptance guarantee.
          </p>
        </div>

        <div className="pricing-grid">
          {tiers.map((tier, idx) => (
            <div key={idx} className={`pricing-card ${tier.popular ? "pricing-card--popular" : ""}`}>
              {tier.popular && <span className="pricing-card__badge">Most Popular</span>}
              <div className="pricing-card__header">
                <h3 className="pricing-card__name">{tier.name}</h3>
                <div className="pricing-card__price-wrap">
                  <span className="pricing-card__price">{tier.price}</span>
                  <span className="pricing-card__period">{tier.period}</span>
                </div>
                <p className="pricing-card__desc">{tier.desc}</p>
              </div>

              <ul className="pricing-card__features">
                {tier.features.map((feat, fIdx) => (
                  <li key={fIdx} className="pricing-card__feature">
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                      <polyline points="20 6 9 17 4 12" />
                    </svg>
                    <span>{feat}</span>
                  </li>
                ))}
              </ul>

              <div className="pricing-card__footer">
                <a
                  href={tier.ctaHref}
                  className={`btn ${tier.popular ? "btn--primary" : "btn--outline"} btn--full`}
                  target={tier.ctaHref.startsWith("http") ? "_blank" : undefined}
                  rel={tier.ctaHref.startsWith("http") ? "noopener noreferrer" : undefined}
                >
                  {tier.cta}
                </a>
              </div>
            </div>
          ))}
        </div>

        <div className="pricing-guarantee">
          <div className="pricing-guarantee__icon">
            <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
              <path d="M9 12l2 2 4-4" />
            </svg>
          </div>
          <div className="pricing-guarantee__text">
            <h4>100% Commercial Print Shop Acceptance Guarantee</h4>
            <p>
              If your commercial printer or print-on-demand platform flags any technical error with our prepared files, we will revise the file for free or communicate directly with your print shop until approved.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
