"use client";

import { useState } from "react";

export default function FAQSection() {
  const [openIdx, setOpenIdx] = useState(0);

  const faqs = [
    {
      q: "Why can't I print raw AI images directly from Midjourney or ChatGPT?",
      a: "Raw AI images are generated at screen resolution (72–96 DPI) in RGB color space. If you print them directly at standard poster or t-shirt size, they will appear blurry, pixelated, and suffer from muddy dark color shifts when converted to CMYK ink. Furthermore, commercial printing machines require 0.125” bleeds and vector cut paths that raw AI files lack.",
    },
    {
      q: "How is AIPrintStudio different from free online AI upscalers?",
      a: "Online AI upscalers simply guess pixels based on neural networks. They cannot create true scalable vector files (.AI, .EPS, .SVG), cannot replace garbled AI pseudo-text with crisp real typography, cannot fix out-of-gamut CMYK color shifts, and cannot create die-cut contour paths for stickers and packaging. Our specialists manually redraw and calibrate your files element by element.",
    },
    {
      q: "What file formats will I receive in my delivery package?",
      a: "You receive a complete commercial print master package including: Adobe Illustrator (.AI), Scalable Vector (.SVG), Vector EPS, Press-Ready PDF (PDF/X-1a with bleeds & crop marks), High-Res 300+ DPI Transparent PNG, and CMYK uncompressed TIFF.",
    },
    {
      q: "How do I get a quote and what is the turnaround time?",
      a: "Connect directly on WhatsApp (+92 347 9429415) or submit our Free Quote form. Share your AI artwork and target print dimensions for a free, instant file review and quote. Standard turnaround is 12 to 24 hours.",
    },
    {
      q: "Which print-on-demand (POD) platforms do your files work with?",
      a: "Our files are 100% compliant with Printful, Printify, Gelato, Amazon Merch on Demand, Redbubble, Teespring, Zazzle, Sticker Mule, StickerApp, Moo, VistaPrint, GotPrint, KDP, and IngramSpark.",
    },
    {
      q: "How do I start a project?",
      a: "Click the 'Talk to Me' button to connect directly on WhatsApp (+92 347 9429415) or submit our Free Quote form. Share your AI artwork and target print dimensions, and we will inspect your file and provide an upfront quote immediately.",
    },
  ];

  const toggle = (idx) => {
    setOpenIdx(openIdx === idx ? null : idx);
  };

  return (
    <section className="faq-section" id="faq" aria-labelledby="faq-heading">
      <div className="container">
        <div className="section-header text-center">
          <span className="section-badge">Clear Answers (AEO)</span>
          <h2 className="section-title" id="faq-heading">
            Frequently Asked <span className="highlight-text">Questions</span>
          </h2>
          <p className="section-subtitle">
            Everything you need to know about preparing AI artwork for commercial print production.
          </p>
        </div>

        <div className="faq-accordion">
          {faqs.map((faq, idx) => {
            const isOpen = openIdx === idx;
            return (
              <div key={idx} className={`faq-item ${isOpen ? "faq-item--open" : ""}`}>
                <button
                  className="faq-question"
                  onClick={() => toggle(idx)}
                  aria-expanded={isOpen}
                >
                  <span>{faq.q}</span>
                  <span className="faq-icon" aria-hidden="true">
                    {isOpen ? "−" : "+"}
                  </span>
                </button>
                {isOpen && (
                  <div className="faq-answer">
                    <p>{faq.a}</p>
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
