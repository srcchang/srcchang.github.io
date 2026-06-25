// 依序建置各 Astro 子站，再合併到根 /dist 供 GitHub Pages 單一部署。
//
// 新增專案：在 apps[] 加一筆 { name, dest } 即可。
//   - name：apps/ 下的資料夾名，必須與該站 package.json 的 "name" 一致
//           （build 以 npm workspace 名稱定位，比 path 形式更穩定）
//   - dest：合併到 dist 後的子路徑（''=根，須與該站 astro.config 的 base 對應）
import { execSync } from 'node:child_process';
import { cpSync, rmSync, mkdirSync, writeFileSync, existsSync } from 'node:fs';
import { fileURLToPath } from 'node:url';
import { dirname, join } from 'node:path';

const root = join(dirname(fileURLToPath(import.meta.url)), '..');
const distRoot = join(root, 'dist');

const apps = [
  { name: 'hub', dest: '' }, // 作品集首頁，服務於根網域
  { name: 'salary_thief', dest: 'salary_thief' }, // base: /salary_thief
  { name: 'voiback', dest: 'voiback' }, // base: /voiback
  { name: 'drive_pass', dest: 'drive_pass' }, // base: /drive_pass
];

function run(cmd) {
  console.log(`\n$ ${cmd}`);
  execSync(cmd, { stdio: 'inherit', cwd: root });
}

console.log('🧹 清空 dist/');
rmSync(distRoot, { recursive: true, force: true });
mkdirSync(distRoot, { recursive: true });

for (const app of apps) {
  console.log(`\n🏗️  建置 ${app.name}`);
  run(`npm run build -w ${app.name}`);

  const from = join(root, 'apps', app.name, 'dist');
  if (!existsSync(from)) {
    throw new Error(`找不到建置輸出：${from}`);
  }
  const to = app.dest ? join(distRoot, app.dest) : distRoot;
  console.log(`📦 複製 ${app.name}/dist → dist/${app.dest}`);
  cpSync(from, to, { recursive: true });
}

// GitHub Pages 預設用 Jekyll，會忽略底線開頭的 _astro/，需放 .nojekyll
writeFileSync(join(distRoot, '.nojekyll'), '');
console.log('\n✅ 合併完成 → dist/');
