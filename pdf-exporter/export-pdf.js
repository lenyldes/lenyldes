const fs = require('fs');
const path = require('path');
const { marked } = require('marked');
const puppeteer = require('puppeteer');

// Configure marked for GitHub Flavored Markdown
marked.setOptions({
  gfm: true,
  breaks: false
});

/**
 * Finds a suitable browser executable if puppeteer's bundled one isn't ready.
 */
function findSystemBrowser() {
  const candidatePaths = [
    '/Applications/Google Chrome.app/Contents/MacOS/Google Chrome',
    '/Applications/Brave Browser.app/Contents/MacOS/Brave Browser',
    '/Applications/Chromium.app/Contents/MacOS/Chromium',
    '/Applications/Microsoft Edge.app/Contents/MacOS/Microsoft Edge',
    '/usr/bin/google-chrome',
    '/usr/bin/chromium-browser',
    '/usr/bin/chromium'
  ];

  for (const p of candidatePaths) {
    if (fs.existsSync(p)) {
      return p;
    }
  }
  return undefined;
}

/**
 * Converts local image paths in HTML to inline base64 data URIs.
 */
function embedLocalImages(html, baseDir) {
  return html.replace(/<img\s+([^>]*?)src=["']([^"']+)["']([^>]*?)>/gi, (match, before, src, after) => {
    if (src.startsWith('http://') || src.startsWith('https://') || src.startsWith('data:')) {
      return match;
    }

    const resolvedPath = path.resolve(baseDir, src);
    if (fs.existsSync(resolvedPath)) {
      const ext = path.extname(resolvedPath).toLowerCase().replace('.', '');
      const mimeType = ext === 'jpg' ? 'jpeg' : (ext === 'svg' ? 'svg+xml' : ext);
      const data = fs.readFileSync(resolvedPath).toString('base64');
      const dataUri = `data:image/${mimeType};base64,${data}`;
      return `<img ${before}src="${dataUri}"${after}>`;
    }

    return match;
  });
}

/**
 * Generates the complete HTML document.
 */
function buildHtml(markdownContent, baseDir, isPaginated = false) {
  const renderedContent = marked.parse(markdownContent);

  let githubCss = '';
  try {
    const cssPath = require.resolve('github-markdown-css/github-markdown-light.css');
    githubCss = fs.readFileSync(cssPath, 'utf8');
  } catch {
    try {
      const cssPath = require.resolve('github-markdown-css/github-markdown.css');
      githubCss = fs.readFileSync(cssPath, 'utf8');
    } catch {
      githubCss = '';
    }
  }

  const customCss = isPaginated ? `
    @page {
      size: A4;
      margin: 7mm 10mm 7mm 10mm;
    }
    body {
      background-color: #ffffff;
      margin: 0;
      padding: 0;
      -webkit-print-color-adjust: exact !important;
      print-color-adjust: exact !important;
    }
    .markdown-body {
      box-sizing: border-box;
      max-width: 100%;
      margin: 0 auto;
      font-size: 11px;
      line-height: 1.35;
      font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", "Noto Sans", Helvetica, Arial, sans-serif;
    }
    .markdown-body img[alt="Header Banner"] {
      border-radius: 6px;
      max-height: 85px;
      width: 100%;
      object-fit: cover;
      object-position: center 35%;
      margin-bottom: 4px;
    }
    tr { break-inside: avoid !important; page-break-inside: avoid !important; }
    table { display: table !important; width: 100% !important; font-size: 9.8px !important; }
    thead { display: table-header-group; }
  ` : `
    body {
      background-color: #ffffff;
      margin: 0;
      padding: 28px 24px 36px 24px;
      -webkit-print-color-adjust: exact !important;
      print-color-adjust: exact !important;
    }
    .markdown-body {
      box-sizing: border-box;
      max-width: 900px;
      margin: 0 auto;
      padding: 0;
      font-size: 13.5px;
      line-height: 1.5;
      color: #1f2328;
      font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", "Noto Sans", Helvetica, Arial, sans-serif;
    }
    .markdown-body a {
      color: #0969da;
      text-decoration: none;
    }
    .markdown-body a:hover {
      text-decoration: underline;
    }
    .markdown-body img[alt="Header Banner"] {
      width: 100%;
      height: auto;
      border-radius: 8px;
      margin-bottom: 12px;
      box-shadow: 0 1px 3px rgba(0,0,0,0.08);
    }
    .markdown-body h2 {
      margin-top: 10px !important;
      margin-bottom: 6px !important;
      border-bottom: none !important;
    }
    .markdown-body h3 {
      margin-top: 20px !important;
      margin-bottom: 10px !important;
      border-bottom: 1px solid #d8dee4 !important;
      padding-bottom: 4px !important;
    }
    table {
      width: 100% !important;
      display: table !important;
      border-collapse: collapse !important;
      margin-top: 10px !important;
      margin-bottom: 14px !important;
      font-size: 12.5px !important;
      line-height: 1.45 !important;
    }
    th {
      background-color: #f6f8fa !important;
      padding: 8px 12px !important;
      font-weight: 600;
    }
    td {
      padding: 10px 12px !important;
      vertical-align: top !important;
    }
    blockquote {
      padding: 4px 12px !important;
      margin: 8px 0 !important;
      color: #57606a;
      border-left: 3px solid #d0d7de;
    }
    ul, ol {
      padding-left: 22px !important;
      margin-top: 6px !important;
      margin-bottom: 10px !important;
    }
    li {
      margin-top: 3px !important;
      margin-bottom: 3px !important;
    }
    .markdown-body img[alt="Telegram"],
    .markdown-body img[alt="Email"] {
      height: 22px;
      vertical-align: middle;
      margin: 2px 4px;
    }
  `;

  const fullHtml = `<!DOCTYPE html>
<html lang="ru">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Resume</title>
  <style>
    ${githubCss}
    ${customCss}
  </style>
</head>
<body>
  <article class="markdown-body">
    ${renderedContent}
  </article>
</body>
</html>`;

  return embedLocalImages(fullHtml, baseDir);
}

/**
 * Main export function.
 */
async function exportToPdf(inputPath, outputPath, isPaginated = false) {
  const isUrl = inputPath.startsWith('http://') || inputPath.startsWith('https://');
  const targetOutput = outputPath || 'resume.pdf';

  console.log(`[1/3] Preparing ${isUrl ? 'URL' : inputPath}... (mode: ${isPaginated ? 'A4 Multi-page' : 'Single Long Page'})`);

  let launchOptions = {
    headless: 'new',
    args: ['--no-sandbox', '--disable-setuid-sandbox']
  };

  let browser;
  try {
    browser = await puppeteer.launch(launchOptions);
  } catch (err) {
    const sysBrowser = findSystemBrowser();
    if (sysBrowser) {
      console.log(`Using system browser at ${sysBrowser}`);
      launchOptions.executablePath = sysBrowser;
      browser = await puppeteer.launch(launchOptions);
    } else {
      throw err;
    }
  }

  try {
    const page = await browser.newPage();
    await page.setViewport({ width: 980, height: 1000, deviceScaleFactor: 2 });

    if (isUrl) {
      console.log(`[2/3] Loading webpage ${inputPath}...`);
      await page.goto(inputPath, { waitUntil: 'networkidle2', timeout: 30000 });
      await page.addStyleTag({
        content: `
          header, footer, #repos-header, .Header, .js-header-wrapper { display: none !important; }
          body { background: white !important; }
        `
      });
    } else {
      const fullInputPath = path.resolve(process.cwd(), inputPath);
      if (!fs.existsSync(fullInputPath)) {
        throw new Error(`File not found: ${fullInputPath}`);
      }

      console.log(`[2/3] Rendering Markdown and embedding assets...`);
      const markdown = fs.readFileSync(fullInputPath, 'utf8');
      const html = buildHtml(markdown, path.dirname(fullInputPath), isPaginated);

      await page.setContent(html, {
        waitUntil: ['load', 'networkidle0'],
        timeout: 30000
      });

      // Optimize embedded images in-memory (does not modify disk files)
      await page.evaluate(() => {
        const images = document.querySelectorAll('img');
        for (const img of images) {
          if (img.src.startsWith('data:image/jpeg') || img.src.startsWith('data:image/png')) {
            const canvas = document.createElement('canvas');
            const maxW = 1600;
            let w = img.naturalWidth || img.width;
            let h = img.naturalHeight || img.height;
            if (w > maxW) {
              h = Math.round((h * maxW) / w);
              w = maxW;
            }
            canvas.width = w;
            canvas.height = h;
            const ctx = canvas.getContext('2d');
            ctx.drawImage(img, 0, 0, w, h);
            img.src = canvas.toDataURL('image/jpeg', 0.82);
          }
        }
      });
    }

    console.log(`[3/3] Generating PDF: ${targetOutput}...`);

    if (isPaginated) {
      await page.pdf({
        path: targetOutput,
        format: 'A4',
        printBackground: true,
        margin: { top: '7mm', right: '10mm', bottom: '7mm', left: '10mm' }
      });
    } else {
      // Calculate full content height dynamically for 1 continuous page
      const contentHeight = await page.evaluate(() => {
        const body = document.body;
        const doc = document.documentElement;
        return Math.ceil(Math.max(
          body.scrollHeight, body.offsetHeight,
          doc.clientHeight, doc.scrollHeight, doc.offsetHeight
        ));
      });

      await page.pdf({
        path: targetOutput,
        width: '980px',
        height: `${contentHeight + 20}px`,
        printBackground: true,
        margin: { top: '0px', right: '0px', bottom: '0px', left: '0px' }
      });
    }

    console.log(`✅ Done! PDF successfully saved to: ${targetOutput}`);
  } finally {
    await browser.close();
  }
}

// Smart path resolution
function resolveDefaultInput() {
  if (fs.existsSync(path.resolve(process.cwd(), 'README.md'))) {
    return 'README.md';
  }
  if (fs.existsSync(path.resolve(process.cwd(), '../README.md'))) {
    return '../README.md';
  }
  return 'README.md';
}

function resolveDefaultOutput(input) {
  if (input === '../README.md') {
    return '../resume.pdf';
  }
  return 'resume.pdf';
}

// CLI arguments
const rawArgs = process.argv.slice(2);
const isA4 = rawArgs.includes('--a4') || rawArgs.includes('--pages');
const nonFlagArgs = rawArgs.filter(arg => !arg.startsWith('--'));

const defaultInput = resolveDefaultInput();
const inputFile = nonFlagArgs[0] || defaultInput;
const outputFile = nonFlagArgs[1] || resolveDefaultOutput(defaultInput);

exportToPdf(inputFile, outputFile, isA4).catch((err) => {
  console.error('❌ Error exporting to PDF:', err);
  process.exit(1);
});

