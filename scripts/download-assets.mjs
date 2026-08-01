// Downloads all image assets from template23.webekspor.com into public/.
import { mkdir, writeFile } from "node:fs/promises";
import path from "node:path";

const IMAGES = [
  ["https://template23.webekspor.com/wp-content/uploads/2022/01/Screen-Shot-2022-01-15-at-15.15.08-copy-90x54.png", "images/logo-elispor.png"],
  ["https://template23.webekspor.com/wp-content/uploads/2022/03/h2-rev-bg-img-3.jpeg", "images/hero-slide-1.jpeg"],
  ["https://template23.webekspor.com/wp-content/uploads/2022/03/h2-rev-bg-img-2.jpeg", "images/hero-slide-2.jpeg"],
  ["https://template23.webekspor.com/wp-content/uploads/2022/03/Home-2-img1.jpeg", "images/about-modern-farming.jpeg"],
  ["https://template23.webekspor.com/wp-content/uploads/2022/03/g1.jpeg", "images/gallery-1-funny-lamb.jpeg"],
  ["https://template23.webekspor.com/wp-content/uploads/2022/03/g2.jpeg", "images/gallery-2-herd-of-cows.jpeg"],
  ["https://template23.webekspor.com/wp-content/uploads/2022/03/g3.jpeg", "images/gallery-3-farm-work.jpeg"],
  ["https://template23.webekspor.com/wp-content/uploads/2022/03/logo-awrads-300x72.png", "images/quality-awards.png"],
  ["https://template23.webekspor.com/wp-content/uploads/2022/03/img-section.jpg", "images/product-processing.jpg"],
  ["https://template23.webekspor.com/wp-content/uploads/2022/03/home-2-product-1.jpeg", "images/product-milk.jpeg"],
  ["https://template23.webekspor.com/wp-content/uploads/2022/03/home-2-product-2.jpeg", "images/product-kefir.jpeg"],
  ["https://template23.webekspor.com/wp-content/uploads/2022/03/home-2-product-3.jpeg", "images/product-goat-cheese.jpeg"],
  ["https://template23.webekspor.com/wp-content/uploads/2022/03/home-2-product-4.jpeg", "images/product-butter.jpeg"],
  ["https://template23.webekspor.com/wp-content/uploads/2022/03/Team-img1.jpeg", "images/team-tom-fill.jpeg"],
  ["https://template23.webekspor.com/wp-content/uploads/2022/03/Team-img2.jpeg", "images/team-sam-jack.jpeg"],
  ["https://template23.webekspor.com/wp-content/uploads/2022/03/Team-img3.jpeg", "images/team-nick-jon.jpeg"],
  ["https://template23.webekspor.com/wp-content/uploads/2022/03/Team-img4.jpeg", "images/team-mark-ten.jpeg"],
  ["https://template23.webekspor.com/wp-content/uploads/2022/03/logo-ekspor.png", "images/logo-webekspor-footer.png"],
  ["https://template23.webekspor.com/wp-content/uploads/2022/03/Cows-parallax.jpeg", "images/cta-cows-banner.jpeg"],
  ["https://template23.webekspor.com/favicon.ico", "seo/favicon.ico"],
  ["https://template23.webekspor.com/wp-content/uploads/2022/01/logo-1-50x50.png", "seo/favicon-32.png"],
  ["https://template23.webekspor.com/wp-content/uploads/2022/01/logo-1-300x300.png", "seo/favicon-192.png"],
];

const PUBLIC_DIR = path.resolve(import.meta.dirname, "..", "public");
const CONCURRENCY = 4;

async function download([url, dest]) {
  const res = await fetch(url);
  if (!res.ok) {
    console.error(`FAILED ${res.status} ${url}`);
    return;
  }
  const buf = Buffer.from(await res.arrayBuffer());
  const destPath = path.join(PUBLIC_DIR, dest);
  await mkdir(path.dirname(destPath), { recursive: true });
  await writeFile(destPath, buf);
  console.log(`OK ${dest} (${buf.length} bytes)`);
}

async function run() {
  const queue = [...IMAGES];
  const workers = Array.from({ length: CONCURRENCY }, async () => {
    while (queue.length) {
      const item = queue.shift();
      if (item) await download(item);
    }
  });
  await Promise.all(workers);
}

run();
