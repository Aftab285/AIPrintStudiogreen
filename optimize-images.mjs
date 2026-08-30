import sharp from 'sharp';
import fs from 'fs';
import path from 'path';

const publicDir = './public';

async function processImage(filename, width, height, quality) {
  const filePath = path.join(publicDir, filename);
  const inputBuffer = fs.readFileSync(filePath);
  const ext = path.extname(filename);
  const baseName = path.basename(filename, ext);

  // Generate WebP
  let webpPipeline = sharp(inputBuffer);
  if (width || height) {
    webpPipeline = webpPipeline.resize(width, height, { fit: 'inside', withoutEnlargement: true });
  }
  const webpBuffer = await webpPipeline.webp({ quality: quality || 80 }).toBuffer();
  fs.writeFileSync(path.join(publicDir, `${baseName}.webp`), webpBuffer);

  // Overwrite compressed JPEG
  let jpegPipeline = sharp(inputBuffer);
  if (width || height) {
    jpegPipeline = jpegPipeline.resize(width, height, { fit: 'inside', withoutEnlargement: true });
  }
  const jpegBuffer = await jpegPipeline.jpeg({ quality: quality || 80, mozjpeg: true }).toBuffer();
  fs.writeFileSync(filePath, jpegBuffer);

  console.log(`✓ Processed ${filename} -> ${baseName}.webp (${(webpBuffer.length / 1024).toFixed(1)} KB), ${filename} (${(jpegBuffer.length / 1024).toFixed(1)} KB)`);
}

async function run() {
  console.log('Optimizing all assets...');
  await processImage('logo.jpg', 120, 120, 85);
  await processImage('avatars.jpg', 360, 72, 80);
  await processImage('hero-before.jpg', 600, null, 80);
  await processImage('hero-after.jpg', 600, null, 80);
  await processImage('hero-bg.jpg', 1200, null, 75);
  console.log('All images optimized successfully!');
}

run().catch(console.error);
