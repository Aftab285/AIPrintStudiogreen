import Link from "next/link";
import { toolsData } from "../data/toolsData";

export default function AIToolsSupport() {
  const toolsList = Object.values(toolsData);
  const extraTools = ["Claude", "Gemini", "Leonardo AI", "Recraft", "DeepSeek", "Kimi"];

  return (
    <section className="tools-section" id="supported-tools" aria-labelledby="tools-heading">
      <div className="container">
        <div className="section-header text-center">
          <span className="section-badge">Universal Compatibility</span>
          <h2 className="section-title" id="tools-heading">
            Works with Artwork from <span className="highlight-text">Every AI Generator</span>
          </h2>
          <p className="section-subtitle">
            No matter which generative model you used to create your image, our pre-press team specializes in preparing it for commercial physical printing.
          </p>
        </div>

        <div className="tools-grid">
          {toolsList.map((tool) => (
            <div key={tool.slug} className="tool-card">
              <div className="tool-card__header">
                <h3 className="tool-card__name">{tool.name}</h3>
                <span className="tool-card__native-res">{tool.startingDpi}</span>
              </div>
              <p className="tool-card__desc">{tool.tagline}</p>
              <div className="tool-card__specs">
                <span className="tool-card__spec">Native: {tool.nativeRes}</span>
                <span className="tool-card__spec text-success">Target: {tool.targetRes}</span>
              </div>
              <Link href={`/guides/${tool.slug}`} className="tool-card__link">
                Read Printing Guide →
              </Link>
            </div>
          ))}
        </div>

        <div className="extra-tools-strip">
          <span className="extra-tools-strip__label">Also Fully Supporting:</span>
          <div className="extra-tools-tags">
            {extraTools.map((name) => (
              <span key={name} className="extra-tool-tag">
                ✓ {name}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
