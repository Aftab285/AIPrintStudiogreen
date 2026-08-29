"use client";

import { useState } from "react";
import Image from "next/image";

export default function BeforeAfterShowcase() {
  const [activeTab, setActiveTab] = useState("vector");

  const categories = [
    { id: "vector", label: "Vector & Logo", beforeDesc: "Raw 72 DPI AI render with blurry edges & gibberish text", afterDesc: "100% Vector master in Adobe Illustrator (.AI/.EPS/.SVG) with clean bezier curves" },
    { id: "apparel", label: "T-Shirt & Apparel", beforeDesc: "Solid square background with heavy white halo fringe", afterDesc: "Clean transparent alpha mask with vibrant dark-shirt underbase" },
    { id: "color", label: "CMYK Color Management", beforeDesc: "Muddy, crushed dark shadows and dull out-of-gamut greens", afterDesc: "Calibrated 300% TAC CMYK with brilliant print vibrancy" },
  ];

  const currentCategory = categories.find((c) => c.id === activeTab) || categories[0];

  return (
    <section className="showcase-section" id="showcase" aria-labelledby="showcase-heading">
      <div className="container">
        <div className="section-header text-center">
          <span className="section-badge">Before &amp; After Quality Proof</span>
          <h2 className="section-title" id="showcase-heading">
            See the Difference of <span className="highlight-text">Manual Pre-Press Reproduction</span>
          </h2>
          <p className="section-subtitle">
            Compare raw AI outputs directly against our commercial print-ready master recreations in Adobe Illustrator.
          </p>
        </div>

        {/* Tab Controls */}
        <div className="showcase-tabs" role="tablist">
          {categories.map((cat) => (
            <button
              key={cat.id}
              role="tab"
              aria-selected={activeTab === cat.id}
              className={`showcase-tab ${activeTab === cat.id ? "active" : ""}`}
              onClick={() => setActiveTab(cat.id)}
            >
              {cat.label}
            </button>
          ))}
        </div>

        {/* Comparison Display */}
        <div className="showcase-display">
          <div className="showcase-card showcase-card--before">
            <div className="showcase-card__tag showcase-card__tag--before">Raw AI Output (72 DPI)</div>
            <div className="showcase-card__image-wrap">
              <Image
                src="/hero-before.jpg"
                alt="Before manual recreation: AI-generated artwork showing subtle artifacts and pixelation"
                width={480}
                height={550}
                className="showcase-card__img"
                priority
              />
            </div>
            <div className="showcase-card__desc">
              <span className="showcase-card__status text-danger">✕ Common AI Flaws:</span>
              <p>{currentCategory.beforeDesc}</p>
            </div>
          </div>

          <div className="showcase-divider">
            <div className="showcase-divider__badge">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                <line x1="5" y1="12" x2="19" y2="12" />
                <polyline points="12 5 19 12 12 19" />
              </svg>
            </div>
            <span className="showcase-divider__text">Recreated by Hand</span>
          </div>

          <div className="showcase-card showcase-card--after">
            <div className="showcase-card__tag showcase-card__tag--after">Press-Ready Master (300+ DPI / Vector)</div>
            <div className="showcase-card__image-wrap">
              <Image
                src="/hero-after.jpg"
                alt="After manual recreation: Recreated master vector file open in Adobe Illustrator with 100% sharp detail"
                width={480}
                height={550}
                className="showcase-card__img"
                priority
              />
            </div>
            <div className="showcase-card__desc">
              <span className="showcase-card__status text-success">✓ AIPrintStudio Standard:</span>
              <p>{currentCategory.afterDesc}</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
