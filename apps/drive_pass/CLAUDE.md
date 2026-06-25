# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

駕照通 Drive Pass 品牌官網 — 台灣駕照筆試備考 App 的行銷網站。Astro 5.x SSG + Tailwind CSS 4.x，部署至 Cloudflare Pages。

## Commands

```bash
npm run dev        # 開發伺服器 (localhost:4321)
npm run build      # 靜態建置到 dist/
npm run preview    # 預覽建置結果 (Vite-based)
```

## Architecture

### i18n 系統

5 語系：`zh`（預設）、`en`、`vi`、`th`、`id`。設定在 `src/i18n/config.ts`。

- 翻譯檔：`src/i18n/locales/{locale}.json`（巢狀 JSON，用 dot notation 路徑存取，如 `t(tr, 'hero.title1')`）
- 取用方式：`getTranslations(locale)` → `t(tr, 'key.path')`
- 路由：所有語系含前綴 (`/zh/`, `/en/` 等)，由 `astro.config.mjs` 的 `prefixDefaultLocale: true` 控制

### 頁面組件模式

頁面分為 **Page Component**（邏輯＋模板）和 **Page File**（3 行 wrapper）：

- Page Components 在 `src/components/`：`HomePage.astro`、`AppDetailPage.astro`、`ExamInfoPage.astro`、`LegalPage.astro`、`AboutPage.astro`、`FaqPage.astro`
- Page Files 在 `src/pages/{locale}/`：只傳 `locale` prop 給 Page Component
- 新增頁面時：先建 Page Component，再為每個語系建 3 行 wrapper

### Design Tokens

定義在 `src/styles/global.css` 的 `@theme` 區塊，深淺色模式用 CSS custom properties：

- 背景：`bg-primary`、`bg-surface`、`bg-muted`
- 文字：`text-primary`、`text-secondary`、`text-tertiary`
- 邊框：`border-subtle`、`border-strong`
- 品牌色：`car`（橘色系）、`moto`（紫色系）

深色模式透過 `.dark` class 覆寫，`BaseLayout.astro` 的 inline script 在載入前套用。

### Scroll Reveal

- 加 `data-reveal` 屬性即可觸發進場動畫
- `data-reveal-delay={ms}` 控制延遲（用於交錯效果）
- 邏輯在 `src/scripts/scroll-reveal.ts`，由 `BaseLayout.astro` 統一 import
- 已支援 `prefers-reduced-motion`

### In-App WebView 嵌入模式

所有內容頁面（LegalPage、AboutPage、FaqPage）支援 `?embed=true` 查詢參數，隱藏 Nav 和 Footer，供 App 內 WebView 使用。

**App 端 URL 組裝方式：**（網站部署於 Cloudflare Workers）

```
https://drivepass.srcchang-a3e.workers.dev/{languageCode}/{page}?embed=true
```

語系代碼對應（App `languageCode` 與網站路由前綴完全一致）：

| App `languageCode` | 網站路由 |
|---|---|
| `zh` | `/zh/` |
| `en` | `/en/` |
| `vi` | `/vi/` |
| `id` | `/id/` |
| `th` | `/th/` |

可用頁面：`privacy`、`terms`、`about`、`faq`

Flutter 範例：
```dart
final locale = ref.read(localeProvider).languageCode; // "zh", "en", etc.
final url = 'https://drivepass.srcchang-a3e.workers.dev/$locale/privacy?embed=true';
```

> 注意：兩個 App（car / moto）的語系代碼定義在各自的 `lib/core/l10n/locale_provider.dart`，`_localeMap` 中的 key（`zh`、`en`、`vi`、`id`、`th`）與網站路由一致，無需額外轉換。

### 共用工具

- `src/utils/text.ts`：`linkifyEmail()` — 將文字中的 email 地址轉為 `mailto:` 連結，供 LegalPage 和 FaqPage 使用

## 臨時分享預覽

```bash
npx serve dist/ -l 4322 &
cloudflared tunnel --url http://localhost:4322
```

關掉：`killall cloudflared; lsof -ti:4322 | xargs kill`

> 注意：`astro preview` 使用 Vite，會因 `allowedHosts` 擋住 tunnel 連線，改用 `npx serve` 避開此問題。
