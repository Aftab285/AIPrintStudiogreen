import Image from "next/image";

function IconShieldCheck() {
  return (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
      <path d="M9 12l2 2 4-4" />
    </svg>
  );
}

function IconPrinter() {
  return (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <polyline points="6 9 6 2 18 2 18 9" />
      <path d="M6 18H4a2 2 0 0 1-2-2v-5a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2v5a2 2 0 0 1-2 2h-2" />
      <rect x="6" y="14" width="12" height="8" />
    </svg>
  );
}

function IconPenTool() {
  return (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M12 19l7-7 3 3-7 7-3-3z" />
      <path d="M18 13l-1.5-7.5L2 2l3.5 14.5L13 18l5-5z" />
      <path d="M2 2l7.586 7.586" />
      <circle cx="11" cy="11" r="2" />
    </svg>
  );
}

function IconPalette() {
  return (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <circle cx="13.5" cy="6.5" r="0.5" fill="currentColor" />
      <circle cx="17.5" cy="10.5" r="0.5" fill="currentColor" />
      <circle cx="8.5" cy="7.5" r="0.5" fill="currentColor" />
      <circle cx="6.5" cy="12.5" r="0.5" fill="currentColor" />
      <path d="M12 2C6.5 2 2 6.5 2 12s4.5 10 10 10c.926 0 1.648-.746 1.648-1.688 0-.437-.18-.835-.437-1.125-.29-.289-.438-.652-.438-1.125a1.64 1.64 0 0 1 1.668-1.668h1.996c3.051 0 5.555-2.503 5.555-5.554C21.965 6.012 17.461 2 12 2z" />
    </svg>
  );
}

function IconZap() {
  return (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2" />
    </svg>
  );
}

function IconArrowRight() {
  return (
    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
      <line x1="5" y1="12" x2="19" y2="12" />
      <polyline points="12 5 19 12 12 19" />
    </svg>
  );
}

function IconStar() {
  return (
    <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor">
      <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
    </svg>
  );
}

function WhatsAppIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
    </svg>
  );
}

export default function HeroSection() {
  const whatsappUrl =
    "https://wa.me/923479429415?text=" +
    encodeURIComponent(
      "Hello! I created artwork using AI and need it professionally recreated into a commercial print-ready file. Can we discuss my project?"
    );

  return (
    <section className="hero" id="hero" aria-labelledby="hero-heading">
      <div className="hero__grid-pattern" aria-hidden="true" />
      <div className="container">
        <div className="hero__content">
          {/* Left Column */}
          <div className="hero__left">
            <div className="hero__badge">
              <span className="hero__badge-dot" aria-hidden="true" />
              Professional Artwork Recreation
            </div>

            <h1 className="hero__heading" id="hero-heading">
              AI Artwork,
              <br />
              Print-Ready{" "}
              <span className="hero__heading-highlight">Perfection.</span>
            </h1>

            <p className="hero__description">
              We transform your AI-generated images into high-resolution,
              print-ready files that look stunning in any format — from business
              cards to billboards.
            </p>

            <div className="hero__trust-badges" role="list" aria-label="Our guarantees">
              <div className="trust-badge" role="listitem">
                <span className="trust-badge__icon trust-badge__icon--green" aria-hidden="true">
                  <IconShieldCheck />
                </span>
                100% Manual Recreation
              </div>
              <div className="trust-badge" role="listitem">
                <span className="trust-badge__icon trust-badge__icon--blue" aria-hidden="true">
                  <IconPrinter />
                </span>
                Commercial Print-Ready
              </div>
              <div className="trust-badge" role="listitem">
                <span className="trust-badge__icon trust-badge__icon--purple" aria-hidden="true">
                  <IconPenTool />
                </span>
                Vector Expertise
              </div>
              <div className="trust-badge" role="listitem">
                <span className="trust-badge__icon trust-badge__icon--amber" aria-hidden="true">
                  <IconPalette />
                </span>
                CMYK &amp; 300 DPI
              </div>
              <div className="trust-badge" role="listitem">
                <span className="trust-badge__icon trust-badge__icon--rose" aria-hidden="true">
                  <IconZap />
                </span>
                Fast Delivery
              </div>
            </div>

            <div className="hero__ctas">
              <a
                href={whatsappUrl}
                className="btn btn--primary btn--large"
                target="_blank"
                rel="noopener noreferrer"
              >
                <WhatsAppIcon />
                Talk to Me
              </a>
              <a
                href="/contact"
                className="btn btn--outline btn--large"
              >
                Get a Free Quote
                <svg className="btn__icon btn__arrow" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                  <path fillRule="evenodd" d="M3 10a.75.75 0 01.75-.75h10.638L10.23 5.29a.75.75 0 111.04-1.08l5.5 5.25a.75.75 0 010 1.08l-5.5 5.25a.75.75 0 11-1.04-1.08l4.158-3.96H3.75A.75.75 0 013 10z" clipRule="evenodd" />
                </svg>
              </a>
            </div>

            <div className="hero__social-proof">
              <div className="hero__avatars" aria-hidden="true">
                <Image
                  src="/avatars.jpg"
                  alt="Customer reviews"
                  width={180}
                  height={36}
                  style={{
                    width: "180px",
                    height: "36px",
                    borderRadius: "18px",
                    objectFit: "cover",
                  }}
                  priority
                />
              </div>
              <div className="hero__social-text">
                <div className="hero__stars" aria-label="5 out of 5 stars">
                  <IconStar /><IconStar /><IconStar /><IconStar /><IconStar />
                </div>
                <span className="hero__social-label">
                  Trusted by 500+ creators &amp; businesses worldwide
                </span>
              </div>
            </div>
          </div>

          {/* Right Column */}
          <div className="hero__right">
            <div className="hero__comparison">
              <div className="hero__image-card hero__image-card--before">
                <span className="hero__image-card__label">AI Generated Image</span>
                <span className="hero__image-card__badge">AI</span>
                <Image
                  src="/hero-before.jpg"
                  alt="AI-generated artwork before recreation"
                  width={255}
                  height={350}
                  priority
                  quality={90}
                />
              </div>

              <div className="hero__arrow" aria-label="transforms into">
                <IconArrowRight />
              </div>

              <div className="hero__image-card hero__image-card--after">
                <span className="hero__image-card__label">Print-Ready Artwork</span>
                <Image
                  src="/hero-after.jpg"
                  alt="Professionally recreated print-ready artwork"
                  width={275}
                  height={350}
                  priority
                  quality={90}
                />
              </div>
            </div>

            <div className="hero__formats" role="list" aria-label="Supported file formats">
              <span className="format-badge format-badge--ai" role="listitem">AI</span>
              <span className="format-badge format-badge--eps" role="listitem">EPS</span>
              <span className="format-badge format-badge--pdf" role="listitem">PDF</span>
              <span className="format-badge format-badge--svg" role="listitem">SVG</span>
              <span className="format-badge format-badge--png" role="listitem">PNG</span>
              <span className="format-badge format-badge--tiff" role="listitem">TIFF</span>
              <span className="format-badge format-badge--jpg" role="listitem">JPG</span>
              <span className="format-badge format-badge--psd" role="listitem">PSD</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
