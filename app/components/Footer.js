import Link from "next/link";
import Image from "next/image";
import { servicesData } from "../data/servicesData";
import { toolsData } from "../data/toolsData";

export default function Footer() {
  const servicesList = Object.values(servicesData);
  const toolsList = Object.values(toolsData);

  return (
    <footer className="site-footer" role="contentinfo">
      <div className="container">
        <div className="footer-grid">
          {/* Brand Info */}
          <div className="footer-col footer-col--brand">
            <Link href="/" className="footer-brand">
              <Image
                src="/logo.jpg"
                alt="AIPrintStudio Logo"
                width={36}
                height={36}
                className="footer-logo"
              />
              <span className="footer-brand-name">AIPrintStudio</span>
            </Link>
            <p className="footer-tagline">
              The internet&apos;s leading authority for transforming AI-generated artwork into professional, commercial print-ready files.
            </p>
            <div className="footer-contact-item">
              <span>Direct WhatsApp:</span>
              <a
                href="https://wa.me/923479429415?text=Hello!%20I%20have%20an%20AI%20artwork%20print%20project."
                target="_blank"
                rel="noopener noreferrer"
                className="footer-link text-success"
              >
                +92 347 9429415
              </a>
            </div>
            <div className="footer-contact-item">
              <span>Primary Markets:</span>
              <span>United States, Canada, UK, Australia, Europe</span>
            </div>
          </div>

          {/* Services Links */}
          <div className="footer-col">
            <h4 className="footer-title">Pre-Press Services</h4>
            <ul className="footer-links">
              {servicesList.slice(0, 7).map((srv) => (
                <li key={srv.slug}>
                  <Link href={`/services/${srv.slug}`} className="footer-link">
                    {srv.shortTitle}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div className="footer-col">
            <h4 className="footer-title">Specialty Print Setup</h4>
            <ul className="footer-links">
              {servicesList.slice(7).map((srv) => (
                <li key={srv.slug}>
                  <Link href={`/services/${srv.slug}`} className="footer-link">
                    {srv.shortTitle}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* AI Guides */}
          <div className="footer-col">
            <h4 className="footer-title">AI Tool Guides</h4>
            <ul className="footer-links">
              {toolsList.map((tool) => (
                <li key={tool.slug}>
                  <Link href={`/guides/${tool.slug}`} className="footer-link">
                    Print from {tool.name}
                  </Link>
                </li>
              ))}
              <li>
                <Link href="/blog" className="footer-link">
                  <strong>Knowledge Hub Articles →</strong>
                </Link>
              </li>
            </ul>
          </div>

          {/* Quick Links & Legal */}
          <div className="footer-col">
            <h4 className="footer-title">Company</h4>
            <ul className="footer-links">
              <li><Link href="/how-it-works" className="footer-link">How It Works</Link></li>
              <li><Link href="/portfolio" className="footer-link">Portfolio &amp; Samples</Link></li>
              <li><Link href="/about" className="footer-link">About AIPrintStudio</Link></li>
              <li><Link href="/contact" className="footer-link">Contact &amp; Free Quote</Link></li>
              <li><Link href="/privacy-policy" className="footer-link">Privacy Policy</Link></li>
              <li><Link href="/terms" className="footer-link">Terms of Service</Link></li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="footer-bottom">
          <p className="footer-copyright">
            © {new Date().getFullYear()} AIPrintStudio.com. All rights reserved. 100% Human Quality Pre-Press Craftsmanship.
          </p>
          <div className="footer-badges">
            <span>✓ 300+ DPI Certified</span>
            <span>✓ CMYK Color Calibrated</span>
            <span>✓ Infinite Scalable Vector</span>
            <span>✓ 100% Print Shop Guarantee</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
