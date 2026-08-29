export default function PricingSection() {
  const tiers = [
    {
      name: "Vector & Basic Prep",
      badge: "Fast Turnaround",
      popular: false,
      desc: "For AI logos, flat stickers, basic icons, and direct CMYK file inspection.",
      features: [
        "100% Manual Vector Redraw (.SVG, .AI, .EPS)",
        "300+ DPI High-Resolution Master File",
        "Clean Transparent Background",
        "CMYK Color Conversion & Profile Embedding",
        "12–24 Hour Turnaround",
        "Commercial Use License Included",
      ],
      cta: "Request Free Quote on WhatsApp",
      ctaHref: "https://wa.me/923479429415?text=" + encodeURIComponent("Hello! I need Vector & Basic Prep for my AI artwork. Can we discuss?"),
    },
    {
      name: "Commercial Print Master",
      badge: "Most Popular",
      popular: true,
      desc: "Our most requested service for t-shirts, posters, complex illustrations, and multi-color vector artwork.",
      features: [
        "Everything in Basic Prep, plus:",
        "Complex Multi-Layer Vectorization",
        "Real Typography Replacement & Kerning",
        "Custom Bleeds & Crop Marks (0.125”)",
        "Spot Color Separation (1–6 Colors)",
        "Sticker Die-Cut Contour Cut Paths",
        "100% Guaranteed Commercial Press Acceptance",
      ],
      cta: "Get Started on WhatsApp",
      ctaHref: "https://wa.me/923479429415?text=" + encodeURIComponent("Hello! I need the Commercial Print Master package. Can we discuss my project?"),
    },
    {
      name: "Packaging & Large Format",
      badge: "Enterprise & Factory",
      popular: false,
      desc: "For commercial packaging dielines, wraparound book covers, trade show backdrops, and product labels.",
      features: [
        "Everything in Commercial Master, plus:",
        "Full Dieline Mapping & Folding Alignment",
        "Spot UV, Gold Foil & Emboss Mask Layers",
        "KDP / IngramSpark Exact Spine Calculation",
        "Nutrition Tables, Barcodes & Regulatory Text",
        "Rush Delivery Option (4–6 Hours)",
        "Direct Print Shop Technical Support",
      ],
      cta: "Discuss Custom Scope",
      ctaHref: "/contact",
    },
  ];

  return (
    <section className="pricing-section" id="packages" aria-labelledby="packages-heading">
      <div className="container">
        <div className="section-header text-center">
          <span className="section-badge">Tailored Pre-Press Solutions</span>
          <h2 className="section-title" id="packages-heading">
            Custom Packages for <span className="highlight-text">Every Print Scope</span>
          </h2>
          <p className="section-subtitle">
            Every AI artwork is unique. We provide upfront, transparent custom quotes based on your exact file requirements, backed by our 100% print shop acceptance guarantee.
          </p>
        </div>

        <div className="pricing-grid">
          {tiers.map((tier, idx) => (
            <div key={idx} className={`pricing-card ${tier.popular ? "pricing-card--popular" : ""}`}>
              <span className="pricing-card__badge">{tier.badge}</span>
              <div className="pricing-card__header">
                <h3 className="pricing-card__name">{tier.name}</h3>
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
