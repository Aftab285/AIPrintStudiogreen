import sharp from 'sharp';
import fs from 'fs';
import path from 'path';

const outDir = './public';

const svgs = [
  {
    name: 'pencil-sketch-to-digital-design-before-after.webp',
    svg: `<svg width="800" height="450" viewBox="0 0 800 450" xmlns="http://www.w3.org/2000/svg">
      <defs>
        <linearGradient id="bg" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stop-color="#f8fafc"/>
          <stop offset="100%" stop-color="#f1f5f9"/>
        </linearGradient>
      </defs>
      <rect width="800" height="450" fill="url(#bg)"/>
      <!-- Left side: Sketch -->
      <rect x="30" y="30" width="350" height="390" rx="12" fill="#ffffff" stroke="#e2e8f0" stroke-width="2"/>
      <rect x="50" y="50" width="160" height="26" rx="13" fill="#fee2e2"/>
      <text x="65" y="68" font-family="'Space Grotesk', monospace" font-size="11" font-weight="700" fill="#b91c1c">PENCIL SKETCH</text>
      <!-- Ruled notebook lines -->
      <line x1="50" y1="120" x2="360" y2="120" stroke="#f1f5f9" stroke-width="1.5"/>
      <line x1="50" y1="160" x2="360" y2="160" stroke="#f1f5f9" stroke-width="1.5"/>
      <line x1="50" y1="200" x2="360" y2="200" stroke="#f1f5f9" stroke-width="1.5"/>
      <line x1="50" y1="240" x2="360" y2="240" stroke="#f1f5f9" stroke-width="1.5"/>
      <line x1="50" y1="280" x2="360" y2="280" stroke="#f1f5f9" stroke-width="1.5"/>
      <line x1="50" y1="320" x2="360" y2="320" stroke="#f1f5f9" stroke-width="1.5"/>
      <!-- Hand drawn logo sketch -->
      <path d="M120 280 C130 180, 200 130, 260 190 C300 230, 240 310, 180 290" stroke="#475569" stroke-width="3.5" fill="none" stroke-linecap="round" stroke-dasharray="8 3 5 2"/>
      <circle cx="210" cy="200" r="35" stroke="#64748b" stroke-width="2.5" fill="none" stroke-dasharray="6 2"/>
      <path d="M150 250 L270 250" stroke="#334155" stroke-width="2" stroke-dasharray="5 2"/>
      <text x="140" y="360" font-family="'Comic Sans MS', cursive, sans-serif" font-size="16" fill="#64748b">rough concept doodle</text>

      <!-- Center Divider Arrow -->
      <circle cx="400" cy="225" r="24" fill="#15803d"/>
      <path d="M394 217 L406 225 L394 233" stroke="#ffffff" stroke-width="3" stroke-linecap="round" stroke-linejoin="round" fill="none"/>

      <!-- Right side: Digital Vector -->
      <rect x="420" y="30" width="350" height="390" rx="12" fill="#ffffff" stroke="#bbf7d0" stroke-width="2"/>
      <rect x="440" y="50" width="180" height="26" rx="13" fill="#dcfce7"/>
      <text x="455" y="68" font-family="'Space Grotesk', monospace" font-size="11" font-weight="700" fill="#166534">VECTOR MASTER (.AI)</text>
      <!-- Clean vector art with anchor points -->
      <path d="M510 280 C520 170, 600 120, 660 180 C700 220, 640 310, 570 290" stroke="#15803d" stroke-width="5" fill="none" stroke-linecap="round"/>
      <circle cx="610" cy="200" r="36" stroke="#22c55e" stroke-width="3" fill="#f0fdf4"/>
      <line x1="540" y1="250" x2="680" y2="250" stroke="#166534" stroke-width="3" stroke-linecap="round"/>
      <!-- Anchor points -->
      <rect x="506" y="276" width="8" height="8" fill="#15803d" stroke="#ffffff" stroke-width="1.5"/>
      <rect x="656" y="176" width="8" height="8" fill="#15803d" stroke="#ffffff" stroke-width="1.5"/>
      <rect x="566" y="286" width="8" height="8" fill="#15803d" stroke="#ffffff" stroke-width="1.5"/>
      <text x="500" y="360" font-family="'Plus Jakarta Sans', sans-serif" font-size="15" font-weight="700" fill="#0f172a">100% Scalable Vector Path</text>
    </svg>`
  },
  {
    name: 'hand-drawn-logo-to-vector.webp',
    svg: `<svg width="800" height="450" viewBox="0 0 800 450" xmlns="http://www.w3.org/2000/svg">
      <rect width="800" height="450" fill="#f8fafc"/>
      <rect x="30" y="30" width="350" height="390" rx="12" fill="#ffffff" stroke="#e2e8f0" stroke-width="2"/>
      <rect x="50" y="50" width="160" height="26" rx="13" fill="#fee2e2"/>
      <text x="65" y="68" font-family="'Space Grotesk', monospace" font-size="11" font-weight="700" fill="#b91c1c">HAND-DRAWN LOGO</text>
      <!-- Sketch icon -->
      <polygon points="205,130 145,260 265,260" stroke="#64748b" stroke-width="3" fill="none" stroke-linecap="round" stroke-dasharray="6 3"/>
      <circle cx="205" cy="205" r="25" stroke="#475569" stroke-width="2" fill="none" stroke-dasharray="4 2"/>
      <text x="135" y="310" font-family="'Comic Sans MS', cursive" font-size="20" fill="#475569">AeroShield</text>
      <text x="140" y="355" font-family="'Comic Sans MS', cursive" font-size="13" fill="#94a3b8">pencil logo on napkin</text>

      <!-- Divider -->
      <circle cx="400" cy="225" r="24" fill="#15803d"/>
      <path d="M394 217 L406 225 L394 233" stroke="#ffffff" stroke-width="3" stroke-linecap="round" stroke-linejoin="round" fill="none"/>

      <!-- Right side: Vector Logo -->
      <rect x="420" y="30" width="350" height="390" rx="12" fill="#ffffff" stroke="#bbf7d0" stroke-width="2"/>
      <rect x="440" y="50" width="180" height="26" rx="13" fill="#dcfce7"/>
      <text x="455" y="68" font-family="'Space Grotesk', monospace" font-size="11" font-weight="700" fill="#166534">PRODUCTION VECTOR</text>
      <!-- Precise Geometric Vector -->
      <polygon points="595,125 530,260 660,260" stroke="#15803d" stroke-width="4" fill="#f0fdf4"/>
      <circle cx="595" cy="205" r="26" stroke="#22c55e" stroke-width="3" fill="#ffffff"/>
      <text x="515" y="310" font-family="'Plus Jakarta Sans', sans-serif" font-weight="800" font-size="22" fill="#0f172a" letter-spacing="-0.03em">AEROSHIELD</text>
      <text x="545" y="335" font-family="'Inter', sans-serif" font-weight="600" font-size="11" fill="#15803d" letter-spacing="0.1em">BRAND IDENTITY</text>
      <text x="490" y="375" font-family="'Space Grotesk', monospace" font-size="11" fill="#64748b">Pantone 348 C · CMYK 88/12/95/41</text>
    </svg>`
  },
  {
    name: 'wireframe-sketch-to-digital-design.webp',
    svg: `<svg width="800" height="450" viewBox="0 0 800 450" xmlns="http://www.w3.org/2000/svg">
      <rect width="800" height="450" fill="#f8fafc"/>
      <rect x="30" y="30" width="350" height="390" rx="12" fill="#ffffff" stroke="#e2e8f0" stroke-width="2"/>
      <rect x="50" y="50" width="170" height="26" rx="13" fill="#fee2e2"/>
      <text x="65" y="68" font-family="'Space Grotesk', monospace" font-size="11" font-weight="700" fill="#b91c1c">PAPER WIREFRAME</text>
      <!-- Hand drawn wireframe layout -->
      <rect x="70" y="110" width="270" height="240" rx="4" stroke="#64748b" stroke-width="2" fill="none" stroke-dasharray="6 3"/>
      <rect x="85" y="125" width="60" height="15" stroke="#94a3b8" stroke-width="1.5" fill="none"/>
      <line x1="200" y1="132" x2="320" y2="132" stroke="#cbd5e1" stroke-width="2" stroke-dasharray="4 4"/>
      <rect x="85" y="160" width="120" height="80" stroke="#64748b" stroke-width="2" fill="none" stroke-dasharray="5 2"/>
      <line x1="85" y1="160" x2="205" y2="240" stroke="#cbd5e1" stroke-width="1.5"/>
      <line x1="205" y1="160" x2="85" y2="240" stroke="#cbd5e1" stroke-width="1.5"/>
      <rect x="220" y="160" width="105" height="18" fill="#e2e8f0"/>
      <rect x="220" y="190" width="105" height="10" fill="#f1f5f9"/>
      <rect x="220" y="210" width="60" height="22" rx="4" stroke="#64748b" stroke-width="1.5" fill="none"/>
      <text x="120" y="380" font-family="'Comic Sans MS', cursive" font-size="14" fill="#64748b">notebook page layout</text>

      <!-- Center Divider Arrow -->
      <circle cx="400" cy="225" r="24" fill="#15803d"/>
      <path d="M394 217 L406 225 L394 233" stroke="#ffffff" stroke-width="3" stroke-linecap="round" stroke-linejoin="round" fill="none"/>

      <!-- Right side: Digital UI -->
      <rect x="420" y="30" width="350" height="390" rx="12" fill="#ffffff" stroke="#bbf7d0" stroke-width="2"/>
      <rect x="440" y="50" width="180" height="26" rx="13" fill="#dcfce7"/>
      <text x="455" y="68" font-family="'Space Grotesk', monospace" font-size="11" font-weight="700" fill="#166534">FIGMA UI WIREFRAME</text>
      <!-- Clean Digital UI -->
      <rect x="460" y="110" width="270" height="240" rx="8" stroke="#15803d" stroke-width="2" fill="#ffffff"/>
      <rect x="460" y="110" width="270" height="32" rx="8 8 0 0" fill="#f8fafc" stroke="#e2e8f0" stroke-width="1"/>
      <circle cx="475" cy="126" r="3" fill="#ef4444"/>
      <circle cx="485" cy="126" r="3" fill="#f59e0b"/>
      <circle cx="495" cy="126" r="3" fill="#10b981"/>
      <rect x="475" y="160" width="115" height="85" rx="6" fill="#f0fdf4" stroke="#bbf7d0" stroke-width="1"/>
      <rect x="605" y="160" width="110" height="16" rx="3" fill="#0f172a"/>
      <rect x="605" y="185" width="110" height="8" rx="2" fill="#94a3b8"/>
      <rect x="605" y="200" width="90" height="8" rx="2" fill="#cbd5e1"/>
      <rect x="605" y="220" width="70" height="24" rx="12" fill="#15803d"/>
      <text x="480" y="380" font-family="'Plus Jakarta Sans', sans-serif" font-size="14" font-weight="700" fill="#0f172a">Clean Responsive Layout</text>
    </svg>`
  },
  {
    name: 'rough-product-sketch-digital-recreation.webp',
    svg: `<svg width="800" height="450" viewBox="0 0 800 450" xmlns="http://www.w3.org/2000/svg">
      <rect width="800" height="450" fill="#f8fafc"/>
      <rect x="30" y="30" width="350" height="390" rx="12" fill="#ffffff" stroke="#e2e8f0" stroke-width="2"/>
      <rect x="50" y="50" width="170" height="26" rx="13" fill="#fee2e2"/>
      <text x="65" y="68" font-family="'Space Grotesk', monospace" font-size="11" font-weight="700" fill="#b91c1c">PRODUCT SKETCH</text>
      <!-- Isometric Bottle/Product Sketch -->
      <ellipse cx="205" cy="140" rx="45" ry="15" stroke="#64748b" stroke-width="2" fill="none" stroke-dasharray="5 2"/>
      <line x1="160" y1="140" x2="160" y2="290" stroke="#64748b" stroke-width="2.5" stroke-dasharray="6 3"/>
      <line x1="250" y1="140" x2="250" y2="290" stroke="#64748b" stroke-width="2.5" stroke-dasharray="6 3"/>
      <ellipse cx="205" cy="290" rx="45" ry="15" stroke="#64748b" stroke-width="2" fill="none" stroke-dasharray="5 2"/>
      <rect x="175" y="180" width="60" height="70" stroke="#94a3b8" stroke-width="1.5" fill="none" stroke-dasharray="4 2"/>
      <text x="140" y="360" font-family="'Comic Sans MS', cursive" font-size="14" fill="#64748b">ergonomic bottle idea</text>

      <!-- Center Divider Arrow -->
      <circle cx="400" cy="225" r="24" fill="#15803d"/>
      <path d="M394 217 L406 225 L394 233" stroke="#ffffff" stroke-width="3" stroke-linecap="round" stroke-linejoin="round" fill="none"/>

      <!-- Right side: Digital Concept -->
      <rect x="420" y="30" width="350" height="390" rx="12" fill="#ffffff" stroke="#bbf7d0" stroke-width="2"/>
      <rect x="440" y="50" width="190" height="26" rx="13" fill="#dcfce7"/>
      <text x="455" y="68" font-family="'Space Grotesk', monospace" font-size="11" font-weight="700" fill="#166534">DIGITAL PRODUCT MODEL</text>
      <!-- Rendered 3D product -->
      <defs>
        <linearGradient id="bottleGrad" x1="0%" y1="0%" x2="100%" y2="0%">
          <stop offset="0%" stop-color="#15803d"/>
          <stop offset="50%" stop-color="#22c55e"/>
          <stop offset="100%" stop-color="#166534"/>
        </linearGradient>
      </defs>
      <rect x="550" y="140" width="90" height="150" rx="15" fill="url(#bottleGrad)"/>
      <ellipse cx="595" cy="140" rx="45" ry="12" fill="#86efac"/>
      <rect x="575" y="110" width="40" height="30" rx="6" fill="#0f172a"/>
      <rect x="560" y="180" width="70" height="75" rx="6" fill="#ffffff"/>
      <text x="575" y="210" font-family="'Plus Jakarta Sans', sans-serif" font-weight="700" font-size="11" fill="#0f172a">PURE</text>
      <text x="570" y="228" font-family="'Inter', sans-serif" font-size="8" fill="#15803d">500ml · Organic</text>
      <text x="490" y="360" font-family="'Plus Jakarta Sans', sans-serif" font-size="14" font-weight="700" fill="#0f172a">Factory-Ready Dimensions</text>
    </svg>`
  },
  {
    name: 'sketch-to-illustrator-service.webp',
    svg: `<svg width="800" height="450" viewBox="0 0 800 450" xmlns="http://www.w3.org/2000/svg">
      <rect width="800" height="450" fill="#f8fafc"/>
      <rect x="30" y="30" width="350" height="390" rx="12" fill="#ffffff" stroke="#e2e8f0" stroke-width="2"/>
      <rect x="50" y="50" width="180" height="26" rx="13" fill="#fee2e2"/>
      <text x="65" y="68" font-family="'Space Grotesk', monospace" font-size="11" font-weight="700" fill="#b91c1c">HAND ILLUSTRATION</text>
      <!-- Pen illustration sketch -->
      <path d="M140 280 C120 200, 160 140, 205 140 C250 140, 290 200, 270 280 Z" stroke="#475569" stroke-width="2.5" fill="none" stroke-dasharray="5 3"/>
      <path d="M170 200 Q205 160 240 200" stroke="#64748b" stroke-width="2" fill="none"/>
      <circle cx="185" cy="220" r="8" fill="#64748b"/>
      <circle cx="225" cy="220" r="8" fill="#64748b"/>
      <text x="140" y="360" font-family="'Comic Sans MS', cursive" font-size="14" fill="#64748b">character sketchbook ink</text>

      <!-- Center Divider Arrow -->
      <circle cx="400" cy="225" r="24" fill="#15803d"/>
      <path d="M394 217 L406 225 L394 233" stroke="#ffffff" stroke-width="3" stroke-linecap="round" stroke-linejoin="round" fill="none"/>

      <!-- Right side: Illustrator Vector -->
      <rect x="420" y="30" width="350" height="390" rx="12" fill="#ffffff" stroke="#bbf7d0" stroke-width="2"/>
      <rect x="440" y="50" width="190" height="26" rx="13" fill="#dcfce7"/>
      <text x="455" y="68" font-family="'Space Grotesk', monospace" font-size="11" font-weight="700" fill="#166534">ADOBE ILLUSTRATOR (.AI)</text>
      <!-- Clean Vector Illustration -->
      <path d="M530 280 C510 195, 550 135, 595 135 C640 135, 680 195, 660 280 Z" fill="#dcfce7" stroke="#15803d" stroke-width="4"/>
      <path d="M560 195 Q595 155 630 195" stroke="#166534" stroke-width="3" fill="none" stroke-linecap="round"/>
      <circle cx="575" cy="220" r="10" fill="#15803d"/>
      <circle cx="615" cy="220" r="10" fill="#15803d"/>
      <circle cx="577" cy="218" r="3" fill="#ffffff"/>
      <circle cx="617" cy="218" r="3" fill="#ffffff"/>
      <text x="500" y="360" font-family="'Plus Jakarta Sans', sans-serif" font-size="14" font-weight="700" fill="#0f172a">Layered Vector Master File</text>
    </svg>`
  }
];

async function generate() {
  for (const item of svgs) {
    const dest = path.join(outDir, item.name);
    await sharp(Buffer.from(item.svg))
      .webp({ quality: 90 })
      .toFile(dest);
    console.log(`Generated: ${dest}`);
  }
}

generate().catch(err => {
  console.error(err);
  process.exit(1);
});
