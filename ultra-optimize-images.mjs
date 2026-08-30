import sharp from 'sharp';
import fs from 'fs';
import path from 'path';

const publicDir = './public';

async function generateUltraOptimized(sourceName, baseName, sizes) {
  const filePath = path.join(publicDir, sourceName);
  const inputBuffer = fs.readFileSync(filePath);

  for (const { width, suffix, quality } of sizes) {
    const outName = suffix ? `${baseName}-${suffix}.webp` : `${baseName}.webp`;
    const pipeline = sharp(inputBuffer);
    if (width) {
      pipeline.resize(width, null, { withoutEnlargement: true });
    }
    const buf = await pipeline.webp({ quality: quality || 75, effort: 6, smartSubsample: true }).toBuffer();
    fs.writeFileSync(path.join(publicDir, outName), buf);
    console.log(`✓ Ultra ${outName}: ${(buf.length / 1024).toFixed(1)} KB`);
  }
}

async function run() {
  console.log('Ultra-optimizing images...');
  
  // Hero After (LCP image)
  await generateUltraOptimized('hero-after.jpg', 'hero-after', [
    { width: 220, suffix: '220', quality: 72 },
    { width: 300, suffix: '300', quality: 72 },
    { width: 550, suffix: '600', quality: 75 },
    { width: 550, suffix: '', quality: 75 },
  ]);

  // Hero Before
  await generateUltraOptimized('hero-before.jpg', 'hero-before', [
    { width: 220, suffix: '220', quality: 72 },
    { width: 300, suffix: '300', quality: 72 },
    { width: 550, suffix: '600', quality: 75 },
    { width: 550, suffix: '', quality: 75 },
  ]);

  // Logo
  await generateUltraOptimized('logo.jpg', 'logo', [
    { width: 80, suffix: '80', quality: 80 },
    { width: 120, suffix: '120', quality: 80 },
    { width: 80, suffix: '', quality: 80 },
  ]);

  // Avatars
  await generateUltraOptimized('avatars.jpg', 'avatars', [
    { width: 180, suffix: '180', quality: 75 },
    { width: 360, suffix: '360', quality: 75 },
    { width: 180, suffix: '', quality: 75 },
  ]);

  console.log('Ultra-optimization complete!');
}

run().catch(console.error);
