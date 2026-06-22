# Project SRC — srcchang.github.io

個人 side projects 整合性官網。採 **Astro** monorepo：根目錄一個作品集 **Hub** 站，
每個專案都是各自獨立的 Astro 靜態站（各有 `base` path），建置時合併成單一 `dist`，
部署到 GitHub Pages（`https://srcchang.github.io/`）。

> 舊版以 Docusaurus 製作，已封存於 tag [`v1-docusaurus`](https://github.com/srcchang/srcchang.github.io/releases/tag/v1-docusaurus)。

## 結構

```
apps/
├── hub/           # 作品集首頁，base: '/'      → srcchang.github.io/
└── salary_thief/  # base: '/salary_thief'      → srcchang.github.io/salary_thief/
scripts/
└── build-all.mjs  # 依序建置各子站，合併到根 /dist
```

新增專案：在 `apps/` 下放一個 Astro 站（`base: '/<name>'`），並在 `scripts/build-all.mjs`
的 `apps[]` 加一筆 `{ name, dest }`。

## 開發

```bash
npm install            # 安裝所有 workspace 相依
npm run dev:hub        # 開發 Hub
npm run dev:salary     # 開發 salary_thief
```

## 建置與預覽

```bash
npm run build          # 建置全部並合併到 dist/
npm run preview        # 本地靜態伺服 dist/
```

## 部署

push 到 `main` 會觸發 `.github/workflows/deploy.yml`：`npm ci` → `npm run build` →
以 `peaceiris/actions-gh-pages` 發佈 `dist/` 到 `gh-pages` 分支。
