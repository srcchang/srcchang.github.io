# srcchang.github.io

Astro monorepo（npm workspaces），部署於 GitHub Pages。

## 指令

| 指令 | 用途 |
|------|------|
| `npm run dev:hub` | 開發 hub |
| `npm run dev:salary` | 開發 salary_thief |
| `npm run build` | 建置所有子站並合併到 `dist/` |
| `npm run preview` | 本地預覽 `dist/` |

## 結構

```
apps/
  hub/              # 作品集首頁   base: /          → srcchang.github.io/
  salary_thief/     # 手遊品牌頁   base: /salary_thief
scripts/build-all.mjs  # 依序建置各站，合併到 dist/
```

## 建置／部署

- `npm run build` → `build-all.mjs` 清空 `dist/` → 逐站 `npm run build -w apps/*` → 合併 → `.nojekyll`
- `main` push 觸發 `.github/workflows/deploy.yml` → `peaceiris/actions-gh-pages` 部署 `dist/`
- 新增子站：`apps/` 下放 Astro 站（設 `base: '/<name>'`）、`build-all.mjs` 的 `apps[]` 加一筆

## 慣例

- 語系路由：Astro i18n + `[locale]` 動態路由，`prefixDefaultLocale: true`
- 樣式：Tailwind CSS v4（`@tailwindcss/vite`），無 PostCSS 設定檔
- Node >= 22.12.0
