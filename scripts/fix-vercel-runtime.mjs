import fs from 'fs';
import path from 'path';

const functionsDir = '.vercel/output/functions';

function updateRuntimeInDir(dir) {
  if (!fs.existsSync(dir)) return;

  let items;
  try {
    items = fs.readdirSync(dir);
  } catch (e) {
    return;
  }

  for (const item of items) {
    const fullPath = path.join(dir, item);

    try {
      const stat = fs.lstatSync(fullPath);

      // Skip symlinks
      if (stat.isSymbolicLink()) continue;

      if (stat.isDirectory()) {
        updateRuntimeInDir(fullPath);
      } else if (item === '.vc-config.json') {
        const config = JSON.parse(fs.readFileSync(fullPath, 'utf-8'));
        if (config.runtime === 'nodejs18.x') {
          config.runtime = 'nodejs20.x';
          fs.writeFileSync(fullPath, JSON.stringify(config, null, 2));
          console.log(`Updated runtime in ${fullPath}`);
        }
      }
    } catch (e) {
      // Skip files that can't be accessed
      continue;
    }
  }
}

console.log('Fixing Vercel runtime to nodejs20.x...');
updateRuntimeInDir(functionsDir);
console.log('Done!');
