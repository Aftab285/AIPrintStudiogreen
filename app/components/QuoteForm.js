"use client";

import { useState } from "react";

export default function QuoteForm({ defaultService = "AI Artwork Recreation" }) {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    service: defaultService,
    aiTool: "Midjourney",
    targetDimensions: "",
    substrate: "Posters / Wall Art",
    notes: "",
  });

  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    const msg = `Hello! I would like a quote for AI Print Preparation:
- Name: ${formData.name}
- Email: ${formData.email}
- Service Needed: ${formData.service}
- AI Tool Used: ${formData.aiTool}
- Target Print Dimensions: ${formData.targetDimensions || "Not sure yet"}
- Substrate / Medium: ${formData.substrate}
- Notes: ${formData.notes || "None"}`;

    const url = `https://wa.me/923479429415?text=${encodeURIComponent(msg)}`;
    window.open(url, "_blank");
    setSubmitted(true);
  };

  return (
    <div className="quote-form-card">
      <div className="quote-form-card__header">
        <h3 className="quote-form-card__title">Get a Free Pre-Press Quote</h3>
        <p className="quote-form-card__subtitle">
          Get expert file inspection and a personalized quote within 15 minutes.
        </p>
      </div>

      {submitted ? (
        <div className="quote-form-success">
          <div className="quote-form-success__icon">✓</div>
          <h4>Thank you, {formData.name}!</h4>
          <p>
            Your project details were prepared for WhatsApp. We will connect with you immediately to inspect your file and provide your quote.
          </p>
        </div>
      ) : (
        <form onSubmit={handleSubmit} className="quote-form">
          <div className="form-group">
            <label htmlFor="quote-name">Your Name</label>
            <input
              type="text"
              id="quote-name"
              required
              placeholder="e.g. Sarah Jenkins"
              value={formData.name}
              onChange={(e) => setFormData({ ...formData, name: e.target.value })}
            />
          </div>

          <div className="form-group">
            <label htmlFor="quote-email">Email Address</label>
            <input
              type="email"
              id="quote-email"
              required
              placeholder="sarah@example.com"
              value={formData.email}
              onChange={(e) => setFormData({ ...formData, email: e.target.value })}
            />
          </div>

          <div className="form-row">
            <div className="form-group">
              <label htmlFor="quote-service">Service Needed</label>
              <select
                id="quote-service"
                value={formData.service}
                onChange={(e) => setFormData({ ...formData, service: e.target.value })}
              >
                <option value="AI Artwork Recreation">AI Artwork Recreation</option>
                <option value="AI Image to Vector">AI Image to Vector</option>
                <option value="Logo Vectorization">Logo Vectorization</option>
                <option value="T-Shirt / Apparel Artwork">T-Shirt / Apparel Artwork</option>
                <option value="Poster / Wall Art Prep">Poster / Wall Art Prep</option>
                <option value="Packaging & Dielines">Packaging &amp; Dielines</option>
                <option value="Book Cover (KDP/Ingram)">Book Cover (KDP/Ingram)</option>
                <option value="Business Card Setup">Business Card Setup</option>
                <option value="Die-Cut Sticker Artwork">Die-Cut Sticker Artwork</option>
                <option value="Large Banner & Signage">Large Banner &amp; Signage</option>
                <option value="Product Label Design">Product Label Design</option>
                <option value="CMYK Color Conversion">CMYK Color Conversion</option>
                <option value="Preflight Inspection Audit">Preflight Inspection Audit</option>
              </select>
            </div>

            <div className="form-group">
              <label htmlFor="quote-ai-tool">AI Tool Used</label>
              <select
                id="quote-ai-tool"
                value={formData.aiTool}
                onChange={(e) => setFormData({ ...formData, aiTool: e.target.value })}
              >
                <option value="Midjourney">Midjourney</option>
                <option value="ChatGPT / DALL-E">ChatGPT / DALL·E</option>
                <option value="Flux">Flux</option>
                <option value="Ideogram">Ideogram</option>
                <option value="Canva AI">Canva AI</option>
                <option value="Adobe Firefly">Adobe Firefly</option>
                <option value="Claude">Claude</option>
                <option value="Gemini">Gemini</option>
                <option value="Leonardo AI">Leonardo AI</option>
                <option value="Other">Other / Multiple</option>
              </select>
            </div>
          </div>

          <div className="form-row">
            <div className="form-group">
              <label htmlFor="quote-dims">Target Print Size</label>
              <input
                type="text"
                id="quote-dims"
                placeholder="e.g. 18x24 inches, 3.5x2, or Vector"
                value={formData.targetDimensions}
                onChange={(e) => setFormData({ ...formData, targetDimensions: e.target.value })}
              />
            </div>

            <div className="form-group">
              <label htmlFor="quote-substrate">Print Application</label>
              <select
                id="quote-substrate"
                value={formData.substrate}
                onChange={(e) => setFormData({ ...formData, substrate: e.target.value })}
              >
                <option value="Posters / Wall Art">Posters / Wall Art</option>
                <option value="T-Shirts / Apparel">T-Shirts / Apparel</option>
                <option value="Die-Cut Stickers">Die-Cut Stickers</option>
                <option value="Packaging / Boxes">Packaging / Boxes</option>
                <option value="Book Cover (KDP/Ingram)">Book Cover (KDP/Ingram)</option>
                <option value="Business Cards">Business Cards</option>
                <option value="Product Labels">Product Labels</option>
                <option value="Banners / Signage">Banners / Signage</option>
                <option value="Other">Other</option>
              </select>
            </div>
          </div>

          <div className="form-group">
            <label htmlFor="quote-notes">Project Details / Special Requirements</label>
            <textarea
              id="quote-notes"
              rows="3"
              placeholder="Describe your artwork or any specific questions..."
              value={formData.notes}
              onChange={(e) => setFormData({ ...formData, notes: e.target.value })}
            />
          </div>

          <button type="submit" className="btn btn--primary btn--full btn--large">
            Send Project Details on WhatsApp →
          </button>
          <span className="quote-form-disclaimer">
            🔒 100% Confidential. We never share your AI artwork or business details.
          </span>
        </form>
      )}
    </div>
  );
}
