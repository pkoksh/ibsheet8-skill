import { chromium } from 'playwright';
import http from 'http';
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const ROOT = __dirname;
const PORT = 8765;

const MIME_TYPES = {
  '.html': 'text/html',
  '.js': 'application/javascript',
  '.css': 'text/css',
  '.png': 'image/png',
  '.jpg': 'image/jpeg',
  '.gif': 'image/gif',
};

function createServer() {
  return http.createServer((req, res) => {
    let filePath = path.join(ROOT, decodeURIComponent(req.url));
    if (filePath.endsWith('/') || filePath.endsWith('\\')) filePath += 'index.html';
    const ext = path.extname(filePath);
    const contentType = MIME_TYPES[ext] || 'application/octet-stream';
    fs.readFile(filePath, (err, data) => {
      if (err) {
        res.writeHead(404);
        res.end('Not Found: ' + req.url);
        return;
      }
      res.writeHead(200, { 'Content-Type': contentType + '; charset=utf-8' });
      res.end(data);
    });
  });
}

const templates = [
  {
    name: 'simple-grid',
    path: '/assets/templates/basic/simple-grid.html',
    sheetIds: ['sheet'],
    expectedDataRows: 3
  },
  {
    name: 'readonly-grid',
    path: '/assets/templates/basic/readonly-grid.html',
    sheetIds: ['sheet'],
    expectedDataRows: 3
  },
  {
    name: 'standard-crud',
    path: '/assets/templates/crud/standard-crud.html',
    sheetIds: ['sheet'],
    expectedDataRows: 5
  },
  {
    name: 'batch-crud',
    path: '/assets/templates/crud/batch-crud.html',
    sheetIds: ['sheet'],
    expectedDataRows: 5
  },
  {
    name: 'master-detail',
    path: '/assets/templates/advanced/master-detail.html',
    sheetIds: ['masterSheet', 'detailSheet'],
    expectedDataRows: 3  // master grid rows
  },
  {
    name: 'tree-grid',
    path: '/assets/templates/advanced/tree-grid.html',
    sheetIds: ['sheet'],
    expectedDataRows: 1  // at minimum, root node
  },
  {
    name: 'pivot-table',
    path: '/assets/templates/advanced/pivot-table.html',
    sheetIds: ['pivotSheet', 'detailSheet'],
    expectedDataRows: 4  // 4 regions in pivot
  },
];

async function testTemplate(page, template) {
  const errors = [];
  const warnings = [];

  page.on('console', msg => {
    if (msg.type() === 'error') errors.push(msg.text());
    else if (msg.type() === 'warning') warnings.push(msg.text());
  });
  page.on('pageerror', err => errors.push(err.message));

  const url = `http://localhost:${PORT}${template.path}`;

  try {
    const response = await page.goto(url, { waitUntil: 'domcontentloaded', timeout: 10000 });
    if (!response || response.status() !== 200) {
      return { name: template.name, status: 'FAIL', errors: [`HTTP ${response?.status()}`], warnings, details: [] };
    }

    // Wait for IBSheet to initialize
    await page.waitForTimeout(3000);

    const details = [];

    // Check IBSheet loaded
    const ibsheetLoaded = await page.evaluate(() => typeof IBSheet !== 'undefined');
    if (!ibsheetLoaded) {
      errors.push('IBSheet object not found');
      return { name: template.name, status: 'FAIL', errors, warnings, details };
    }
    details.push('IBSheet loaded');

    // Check each sheet exists
    for (const sheetId of template.sheetIds) {
      const sheetExists = await page.evaluate((id) => {
        var s = window[id];
        return s != null && typeof s === 'object';
      }, sheetId);

      if (sheetExists) {
        details.push(`Sheet "${sheetId}" created`);

        // Check data rows
        const rowCount = await page.evaluate((id) => {
          try {
            var s = window[id];
            if (s && s.getDataRows) return s.getDataRows().length;
            return -1;
          } catch(e) { return -1; }
        }, sheetId);

        if (rowCount >= 0) {
          details.push(`  -> ${rowCount} data rows`);
        }
      } else {
        errors.push(`Sheet "${sheetId}" not found in window`);
      }
    }

    // Check first sheet has data
    const firstSheetId = template.sheetIds[0];
    const firstSheetRows = await page.evaluate((id) => {
      try {
        var s = window[id];
        if (s && s.getDataRows) return s.getDataRows().length;
        return 0;
      } catch(e) { return 0; }
    }, firstSheetId);

    if (firstSheetRows < template.expectedDataRows) {
      errors.push(`Expected ${template.expectedDataRows}+ rows in "${firstSheetId}", got ${firstSheetRows}`);
    }

    // Check grid DOM rendered
    const gridRendered = await page.evaluate(() => {
      return document.querySelectorAll('[class*="Grid"], [class*="sheet"], table').length > 0;
    });
    if (gridRendered) {
      details.push('Grid DOM rendered');
    }

    const status = errors.length === 0 ? 'PASS' : 'FAIL';
    return { name: template.name, status, errors, warnings, details };
  } catch (e) {
    return { name: template.name, status: 'FAIL', errors: [e.message], warnings, details: [] };
  }
}

async function main() {
  const server = createServer();
  server.listen(PORT);
  console.log(`Server: http://localhost:${PORT}`);

  const browser = await chromium.launch({ headless: true });

  console.log('\n=== IBSheet8 Template Tests ===\n');

  let allPassed = true;

  for (const template of templates) {
    const context = await browser.newContext();
    const page = await context.newPage();

    const result = await testTemplate(page, template);

    const icon = result.status === 'PASS' ? 'PASS' : 'FAIL';
    console.log(`[${icon}] ${result.name}`);

    if (result.details.length > 0) {
      result.details.forEach(d => console.log(`  ${d}`));
    }
    if (result.errors.length > 0) {
      allPassed = false;
      result.errors.forEach(err => console.log(`  ERROR: ${err}`));
    }
    if (result.warnings.length > 0) {
      result.warnings.forEach(w => console.log(`  WARN: ${w}`));
    }
    console.log('');

    await context.close();
  }

  console.log(allPassed ? 'All templates passed!' : 'Some templates FAILED!');

  await browser.close();
  server.close();
  process.exit(allPassed ? 0 : 1);
}

main().catch(err => {
  console.error('Test runner error:', err);
  process.exit(1);
});
