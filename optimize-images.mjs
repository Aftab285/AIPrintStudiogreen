import sharp from 'sharp';
import fs from 'fs';
import path from 'path';

const publicDir = './public';

async function generateMultiRes(sourceName, baseOutputName, widths, quality) {
  const filePath = path.join(publicDir, sourceName);
  const inputBuffer = fs.readFileSync(filePath);

  for (const w of widths) {
    const outName = w ? `${baseOutputName}-${w}.webp` : `${baseOutputName}.webp`;
    const pipeline = sharp(inputBuffer);
    if (w) {
      pipeline.resize(w, null, { withoutEnlargement: true });
    }
    const buf = await pipeline.webp({ quality: quality || 80, effort: 6 }).toBuffer();
    fs.writeFileSync(path.join(publicDir, outName), buf);
    console.log(`✓ Generated ${outName} (${(buf.length / 1024).toFixed(1)} KB)`);
  }

  // Also master webp and compressed jpeg
  const masterWebp = await sharp(inputBuffer).webp({ quality: quality || 80, effort: 6 }).toBuffer();
  fs.writeFileSync(path.join(publicDir, `${baseOutputName}.webp`), masterWebp);

  const masterJpeg = await sharp(inputBuffer).jpeg({ quality: quality || 80, mozjpeg: true }).toBuffer();
  fs.writeFileSync(path.join(publicDir, `${baseOutputName}.jpg`), masterJpeg);
}

async function run() {
  console.log('Generating multi-resolution responsive WebP assets...');
  
  // Hero before (300px for mobile, 600px for desktop)
  await generateMultiRes('hero-before.jpg', 'hero-before', [300, 600], 80);
  
  // Hero after (300px for mobile, 600px for desktop)
  await generateMultiRes('hero-after.jpg', 'hero-after', [300, 600], 80);
  
  // Logo (80px, 120px)
  await generateMultiRes('logo.jpg', 'logo', [80, 120], 85);
  
  // Avatars (180px, 360px)
  await generateMultiRes('avatars.jpg', 'avatars', [180, 360], 80);
  
  // Background (600px, 1200px)
  await generateMultiRes('hero-bg.jpg', 'hero-bg', [600, 1200], 75);

  console.log('Responsive assets generated successfully!');
}

run().catch(console.error);
