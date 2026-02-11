const path = require('path');
const fs = require('fs');
const sharp = require('sharp');

// Config
const srcDir = path.join(__dirname, '..', 'images');
const outDir = path.join(__dirname, '..', 'assets', 'images');
const sizes = [320, 800]; // outputs: name-320.jpg, name-800.jpg

if (!fs.existsSync(outDir)) fs.mkdirSync(outDir, { recursive: true });

function normalize(name) {
  return name
    .toLowerCase()
    .replace(/\.[^.]+$/, '')
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/^-+|-+$/g, '');
}

async function processFile(file) {
  const ext = path.extname(file).toLowerCase();
  const base = normalize(file);
  const input = path.join(srcDir, file);
  for (const s of sizes) {
    const outPath = path.join(outDir, `${base}-${s}.jpg`);
    await sharp(input)
      .resize(s, s, { fit: 'cover', position: 'centre' })
      .jpeg({ quality: 78, mozjpeg: true })
      .toFile(outPath);
    console.log('Written', outPath);
  }
}

async function run() {
  const files = fs.readdirSync(srcDir).filter(f => /\.jpe?g|\.png$/i.test(f));
  if (!files.length) {
    console.error('No images found in', srcDir);
    process.exit(1);
  }
  for (const f of files) {
    try {
      await processFile(f);
    } catch (err) {
      console.error('Failed', f, err.message);
    }
  }
}

run();
