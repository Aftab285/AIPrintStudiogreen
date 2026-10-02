import sharp from "sharp";
import path from "node:path";
import fs from "node:fs";

const uploadDir = "C:/Users/Tesla Laptops/.gemini/antigravity/brain/33182e50-e285-4738-89aa-cc104af92f66/.user_uploaded/";
const publicDir = "C:/Users/Tesla Laptops/.gemini/antigravity/scratch/aiprintstudio/public/";

async function processAll() {
  console.log("Processing user uploaded images...");

  // 1. Leaf Emblem Logo (Hero & Brand Showcase)
  // Before: media_1790939571993.jpg (1024x983)
  // After: media_1790939600183.jpg (1024x1024)
  await sharp(path.join(uploadDir, "media_1790939571993.jpg"))
    .resize(600, 600, { fit: "cover" })
    .webp({ quality: 90 })
    .toFile(path.join(publicDir, "hero-sketch-logo-before.webp"));

  await sharp(path.join(uploadDir, "media_1790939600183.jpg"))
    .resize(600, 600, { fit: "cover" })
    .webp({ quality: 90 })
    .toFile(path.join(publicDir, "hero-sketch-logo-after.webp"));

  await sharp(path.join(uploadDir, "media_1790939571993.jpg"))
    .resize(800, 800, { fit: "cover" })
    .webp({ quality: 90 })
    .toFile(path.join(publicDir, "sketch-logo-leaf-before.webp"));

  await sharp(path.join(uploadDir, "media_1790939600183.jpg"))
    .resize(800, 800, { fit: "cover" })
    .webp({ quality: 90 })
    .toFile(path.join(publicDir, "sketch-logo-leaf-after.webp"));

  // 2. Star Swoosh Logo
  // Before: media_1790939809089.jpg (823x810)
  // After: media_1790939835486.png (819x816)
  await sharp(path.join(uploadDir, "media_1790939809089.jpg"))
    .resize(700, 700, { fit: "cover" })
    .webp({ quality: 90 })
    .toFile(path.join(publicDir, "sketch-logo-star-before.webp"));

  await sharp(path.join(uploadDir, "media_1790939835486.png"))
    .resize(700, 700, { fit: "cover" })
    .webp({ quality: 90 })
    .toFile(path.join(publicDir, "sketch-logo-star-after.webp"));

  // 3. Website Wireframe
  // Before: media_1790940715298.png (583x472)
  // After: media_1790940729816.png (593x468)
  await sharp(path.join(uploadDir, "media_1790940715298.png"))
    .webp({ quality: 90 })
    .toFile(path.join(publicDir, "sketch-wireframe-before.webp"));

  await sharp(path.join(uploadDir, "media_1790940729816.png"))
    .extract({ left: 0, top: 6, width: 593, height: 462 })
    .webp({ quality: 90 })
    .toFile(path.join(publicDir, "sketch-wireframe-after.webp"));

  // 4. Landscape Illustration
  // Before: media_1790940758667.png (615x514) - crop right artifact
  // After: media_1790940748253.png (607x492) - crop left artifact and top tab
  await sharp(path.join(uploadDir, "media_1790940758667.png"))
    .extract({ left: 0, top: 0, width: 580, height: 514 })
    .webp({ quality: 90 })
    .toFile(path.join(publicDir, "sketch-illustration-before.webp"));

  await sharp(path.join(uploadDir, "media_1790940748253.png"))
    .extract({ left: 45, top: 10, width: 560, height: 480 })
    .webp({ quality: 90 })
    .toFile(path.join(publicDir, "sketch-illustration-after.webp"));

  // 5. Product Sketch - Armchair
  // Before: media_1790940816688.png (610x724) - crop right artifact
  // After: media_1790940826773.png (613x683) - crop left artifact & cut-off dimension marker
  await sharp(path.join(uploadDir, "media_1790940816688.png"))
    .extract({ left: 0, top: 0, width: 575, height: 724 })
    .webp({ quality: 90 })
    .toFile(path.join(publicDir, "sketch-product-chair-before.webp"));

  await sharp(path.join(uploadDir, "media_1790940826773.png"))
    .extract({ left: 80, top: 0, width: 530, height: 683 })
    .webp({ quality: 90 })
    .toFile(path.join(publicDir, "sketch-product-chair-after.webp"));

  // 6. Industrial Concept - Wheelchair
  // Before: media_1790940852210.png (611x635) - crop right artifact
  // After: media_1790940863491.png (615x672) - crop left artifact
  await sharp(path.join(uploadDir, "media_1790940852210.png"))
    .extract({ left: 0, top: 0, width: 575, height: 635 })
    .webp({ quality: 90 })
    .toFile(path.join(publicDir, "sketch-product-wheelchair-before.webp"));

  await sharp(path.join(uploadDir, "media_1790940863491.png"))
    .extract({ left: 38, top: 0, width: 575, height: 672 })
    .webp({ quality: 90 })
    .toFile(path.join(publicDir, "sketch-product-wheelchair-after.webp"));

  console.log("All individual webp files generated successfully!");

  // Now create side-by-side composite images for each example card
  // Helper to create side-by-side composite image with 800x480 standard canvas
  async function createComposite(beforeFile, afterFile, outFile, targetHeight = 450) {
    const bImg = sharp(beforeFile);
    const aImg = sharp(afterFile);
    const bMeta = await bImg.metadata();
    const aMeta = await aImg.metadata();

    // Scale both to same height
    const bResized = await bImg.resize({ height: targetHeight, fit: "contain", background: { r: 250, g: 250, b: 250, alpha: 1 } }).toBuffer();
    const aResized = await aImg.resize({ height: targetHeight, fit: "contain", background: { r: 255, g: 255, b: 255, alpha: 1 } }).toBuffer();

    const bResMeta = await sharp(bResized).metadata();
    const aResMeta = await sharp(aResized).metadata();

    const dividerWidth = 4;
    const totalWidth = bResMeta.width + aResMeta.width + dividerWidth;

    // Create divider SVG
    const dividerSvg = Buffer.from(
      `<svg width="${dividerWidth}" height="${targetHeight}"><rect width="${dividerWidth}" height="${targetHeight}" fill="#e2e8f0"/></svg>`
    );

    await sharp({
      create: {
        width: totalWidth,
        height: targetHeight,
        channels: 4,
        background: { r: 255, g: 255, b: 255, alpha: 1 }
      }
    })
    .composite([
      { input: bResized, left: 0, top: 0 },
      { input: dividerSvg, left: bResMeta.width, top: 0 },
      { input: aResized, left: bResMeta.width + dividerWidth, top: 0 }
    ])
    .webp({ quality: 90 })
    .toFile(path.join(publicDir, outFile));

    console.log(`Generated composite: ${outFile} (${totalWidth}x${targetHeight})`);
  }

  // 1. Logo 1 (Star Swoosh) composite -> pencil-sketch-to-digital-design-before-after.webp
  await createComposite(
    path.join(publicDir, "sketch-logo-star-before.webp"),
    path.join(publicDir, "sketch-logo-star-after.webp"),
    "pencil-sketch-to-digital-design-before-after.webp",
    480
  );

  // 2. Logo 2 (Leaf Emblem) composite -> hand-drawn-logo-to-vector.webp
  await createComposite(
    path.join(publicDir, "sketch-logo-leaf-before.webp"),
    path.join(publicDir, "sketch-logo-leaf-after.webp"),
    "hand-drawn-logo-to-vector.webp",
    480
  );

  // 3. Website Wireframe composite -> wireframe-sketch-to-digital-design.webp
  await createComposite(
    path.join(publicDir, "sketch-wireframe-before.webp"),
    path.join(publicDir, "sketch-wireframe-after.webp"),
    "wireframe-sketch-to-digital-design.webp",
    450
  );

  // 4. Illustration composite -> sketch-to-illustrator-service.webp
  await createComposite(
    path.join(publicDir, "sketch-illustration-before.webp"),
    path.join(publicDir, "sketch-illustration-after.webp"),
    "sketch-to-illustrator-service.webp",
    480
  );

  // 5. Product Sketch (Chair) composite -> rough-product-sketch-digital-recreation.webp
  await createComposite(
    path.join(publicDir, "sketch-product-chair-before.webp"),
    path.join(publicDir, "sketch-product-chair-after.webp"),
    "rough-product-sketch-digital-recreation.webp",
    500
  );

  // 6. Industrial Concept (Wheelchair) composite -> sketch-industrial-concept-before-after.webp
  await createComposite(
    path.join(publicDir, "sketch-product-wheelchair-before.webp"),
    path.join(publicDir, "sketch-product-wheelchair-after.webp"),
    "sketch-industrial-concept-before-after.webp",
    500
  );

  console.log("All composites generated successfully!");
}

processAll().catch(err => {
  console.error("Error processing images:", err);
  process.exit(1);
});
