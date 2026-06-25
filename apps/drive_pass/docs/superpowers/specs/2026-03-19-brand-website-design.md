# 駕照通品牌官網設計規格

## 概述

駕照通（Drive Pass）品牌官網，作為汽車題庫 App 與機車題庫 App 的品牌母體網站。主要目標為建立品牌信任感並導流 App 下載。

## 目標與約束

### 目標
- 建立駕照通的品牌形象與信任感
- 導流訪客下載汽車版或機車版 App
- 提供考試資訊實用內容，輔助 SEO 自然流量

### 約束
- 支援 5 語言：繁體中文（zh）、English（en）、Tiếng Việt（vi）、ไทย（th）、Bahasa Indonesia（id）
- 部署於 Cloudflare Pages
- 視覺風格延續 App 的 Warm Organic Minimal 調性

---

## 技術架構

| 項目 | 選擇 | 理由 |
|------|------|------|
| 框架 | Astro 5.x（SSG 模式） | 純靜態輸出、SEO 最佳、AI 友善、Cloudflare 一等公民 |
| 樣式 | Tailwind CSS 4.x | 快速開發、與 Astro 整合良好 |
| 動效 | CSS 原生動畫 + Intersection Observer | 輕量、不需額外套件 |
| 互動元件 | 原生 JS（Island Architecture） | 語言切換器、漢堡選單、輪播、FAQ 手風琴、Dark Mode toggle |
| i18n | Astro 內建 i18n 路由 | 5 語言各自有獨立 URL prefix（/zh/、/en/、/vi/、/th/、/id/） |
| 部署 | Cloudflare Pages（靜態輸出） | 免費、全球 CDN、Astro 被 Cloudflare 收購後為一等公民組合 |
| SEO | @astrojs/sitemap + hreflang + Open Graph | 多語言 SEO 完整支援 |
| 字型 | Google Fonts — Outfit | 延續 App 品牌字型，中文回退系統字型 |
| 分析 | Cloudflare Web Analytics | 隱私友善、零 JS 注入、與 Cloudflare Pages 原生整合 |

---

## 頁面結構

### 首頁（/ — 長捲動 Landing Page）

從上到下共 9 個區塊：

#### ① 導航列（Navigation）
- 固定置頂（sticky），滾動時加背景模糊（backdrop-filter: blur）
- 左側：品牌 Logo + 「駕照通」文字
- 右側：汽車版、機車版、考試資訊、下載 App CTA 按鈕、語言切換器、Dark Mode toggle
- 手機版收合為漢堡選單

#### ② Hero 區塊
- **佈局**：居中聚焦型
- **內容**：
  - 標籤：「台灣駕照筆試備考 App」
  - 主標語：「一次考過」+「駕照輕鬆到手」（漸層文字）
  - 副標語：「智慧複習演算法 · 精準通過率預測 · 五語言完整支援」
  - 兩支手機 mockup 並排展示（汽車版橘色框 + 機車版紫色框），微幅傾斜（-3° / +3°）
  - 兩個下載 CTA 按鈕（橘色汽車版 + 紫色機車版）
- **裝飾**：模糊汽車/機車輪廓光暈（SVG + blur(40-60px) + opacity 3-6%），右上角汽車、左下角機車
- **動效**：手機 mockup 微幅上下浮動（CSS animation）

#### ③ 信任指標列
- 一行數字展示：2,500+ 精選題目 · 5 語言支援 · 14 成就獎章 · iOS + Android 雙平台
- 數字分隔線區隔
- **動效**：數字從 0 動態增長至目標值（Intersection Observer 觸發）

#### ④ 產品卡片
- 汽車版與機車版並排兩張卡片
- 每張卡片包含：App icon、名稱、摘要數據（題數、模擬考規格）、功能標籤、「了解更多 →」按鈕
- 汽車版卡片：橘色邊框/裝飾
- 機車版卡片：紫色邊框/裝飾
- 點擊進入各自的 App 詳情頁
- **動效**：hover 時陰影加深 + 微幅上移

#### ⑤ 核心功能亮點
- 標題：「為什麼選擇駕照通？」
- 圖文交錯排列（odd: 圖左文右, even: 文左圖右）
- 功能項目：
  1. SM-2 智慧複習 — 間隔重複演算法自動安排複習時機
  2. 通過率預測 — 綜合模擬考、正確率、覆蓋率的加權預測
  3. 每日挑戰 & 考前衝刺 — 每天 10 題 + 三層瀑布推薦引擎
  4. 模擬考 — 100% 還原真實考試規格
  5. 錯題本 — 自動收錄、批量重做、答錯次數追蹤
  6. 成就系統 — 14 個成就激勵學習動力
- 每項配有一個插圖/圖示區塊
- **動效**：每個功能區塊滾動淡入（fade-up）

#### ⑥ 用戶評價輪播
- 標題：「用戶怎麼說」
- 副標題：「來自 App Store & Google Play 的真實評價」
- 卡片式輪播，每張含：星級評分、評論文字、用戶名稱、來源平台
- 展示多語言評論（中文、英文、越南文等）
- 自動輪播 + 左右箭頭手動切換
- **動效**：卡片平滑滑動

#### ⑦ FAQ 精選
- 標題：「常見問題」
- 手風琴展開式（Accordion），3-5 題
- 預設展開第一題
- 問題範例：
  - App 是免費的嗎？
  - 支援哪些語言？
  - 題庫內容跟實際考試一樣嗎？
  - 需要網路才能使用嗎？
- **動效**：平滑展開/收合

#### ⑧ 品牌理念 + 最終下載 CTA
- 「關於駕照通」品牌願景文案（2-3 句）
- 「準備好了嗎？」漸層大標題
- 再一次下載 CTA 按鈕（橘色 + 紫色）
- 背景使用模糊車輛光暈呼應 Hero 區塊
- **動效**：滾動淡入

#### ⑨ Footer
- 左側：Logo + 品牌 tagline
- 右側分欄：產品（汽車版、機車版、考試資訊）、法律（隱私政策、服務條款）、聯絡（email、社群連結）
- 底部：版權聲明 + 語言切換器
- 深色背景（Light/Dark Mode 都用深色 footer）

---

### App 詳情頁（/car、/moto）

兩個頁面結構相同，品牌色和內容不同。

#### 區塊

1. **Mini Hero** — App icon + 名稱 + 一句話描述 + 下載按鈕
2. **交叉導流橫幅** — 「也有機車版 / 也有汽車版」引導提示
3. **App 截圖輪播** — 5-8 張實際截圖，放在手機 mockup 框內
4. **考試對比表** — 真實筆試 vs 駕照通模擬考規格對照
5. **功能詳細列表** — 每個功能一張卡片（icon + 標題 + 說明），網格排列
6. **獨家功能 Highlight** — 特別突出該版本獨有功能
7. **下載 CTA** — App Store + Google Play badge

#### 差異對照

| | 汽車版 /car | 機車版 /moto |
|---|---|---|
| 主色調 | 橘色 #F97316 | 紫色 #8B5CF6 |
| 背景光暈 | 模糊汽車輪廓 | 模糊機車輪廓 |
| 題庫數據 | 1,484 題 · 4 分類 · 40 題/30 分鐘 | 1,050+ 題 · 5 分類 · 50 題/40 分鐘 |
| 獨家功能 | 駕訓班地圖整合 | 危險感知影片題 |
| App 截圖 | 橘色介面截圖 | 紫色介面截圖 |

---

### 考試資訊速查頁（/exam-info）

簡潔實用，重點導流回 App。

1. **汽車筆試規則** — 題數、時間、及格分數、計分方式
2. **機車筆試規則** — 同上（含危險感知影片題說明）
3. **實用清單** — 要帶什麼、去哪裡考、報名流程
4. **CTA** — 「用駕照通準備」導流下載

---

### 法律頁面（/privacy、/terms）

簡潔純文字頁面，使用基本排版樣式。

---

## 品牌色彩系統

### 設計原則
> 中性背景當舞台，橘色和紫色當主角。

背景使用中性色，讓 App 的橘色（汽車）和紫色（機車）成為頁面上最搶眼的顏色。

### 品牌色

| Token | 用途 |
|-------|------|
| Brand Gradient | #F97316 → #8B5CF6（品牌識別漸層） |
| Car Primary | #F97316（汽車版主色） |
| Car Light | #FDBA74（汽車版亮色） |
| Car Deep | #EA580C（汽車版深色） |
| Moto Primary | #8B5CF6（機車版主色） |
| Moto Light | #C4B5FD（機車版亮色） |
| Moto Deep | #7C3AED（機車版深色） |

### Light Mode

| Token | 色值 | 用途 |
|-------|------|------|
| bg-primary | #FAFAFA | 主背景 |
| bg-surface | #FFFFFF | 卡片、區塊 |
| bg-muted | #F4F4F5 | 交替區塊背景 |
| text-primary | #1A1A2E | 主要文字 |
| text-secondary | #6B7280 | 次要文字 |
| text-tertiary | #9CA3AF | 輔助文字 |
| border-subtle | #E5E7EB | 細邊框 |
| border-strong | #D1D5DB | 強邊框 |

### Dark Mode

| Token | 色值 | 用途 |
|-------|------|------|
| bg-primary | #09090B | 主背景 |
| bg-surface | #18181B | 卡片、區塊 |
| bg-muted | #1E1E22 | 交替區塊背景 |
| text-primary | #F5F5F5 | 主要文字 |
| text-secondary | #A1A1AA | 次要文字 |
| text-tertiary | #71717A | 輔助文字 |
| border-subtle | #27272A | 細邊框 |
| border-strong | #3F3F46 | 強邊框 |

### Dark Mode 品牌色調整

| Token | Light | Dark |
|-------|-------|------|
| Car Primary | #F97316 | #FB923C |
| Moto Primary | #8B5CF6 | #A78BFA |
| Brand Gradient | #F97316 → #8B5CF6 | #FB923C → #A78BFA |

### 模式切換機制
- 預設跟隨系統偏好（prefers-color-scheme）
- Navbar 提供太陽/月亮 toggle 手動切換
- 使用 localStorage 記住用戶偏好
- Tailwind CSS 4.x 使用 CSS-based 配置，在 global.css 中透過 `@variant dark (&:where(.dark, .dark *))` 啟用 class-based dark mode

---

## 排版系統

### 字型
- **主字型**：Outfit（Google Fonts，幾何無襯線體）— 延續 App 品牌字型
- **泰文字型**：Noto Sans Thai（Google Fonts）— Outfit 不支援泰文字元
- **越南文**：Outfit 支援 Latin Extended，涵蓋越南文變音符號
- **中文回退**：系統字型（-apple-system, "微軟正黑體" 等）
- **載入策略**：使用 `@fontsource/outfit` 自行託管（避免 Google Fonts 外部請求），`font-display: swap`，預載（preload）主要字重（400, 600, 700）

### 字級

| 名稱 | 大小 | 字重 | 用途 |
|------|------|------|------|
| Hero | clamp(36px, 5vw, 56px) | Bold 700 | Hero 主標語 |
| H1 | clamp(28px, 4vw, 40px) | Bold 700 | 區塊大標題 |
| H2 | clamp(20px, 3vw, 28px) | Semibold 600 | 區塊標題 |
| H3 | clamp(16px, 2vw, 20px) | Semibold 600 | 卡片標題、功能標題 |
| Body Large | clamp(15px, 1.5vw, 18px) | Normal 400 | 副標語、重點段落 |
| Body | 14px | Normal 400 | 一般內文 |
| Body Small | 12px | Normal 400 | 標籤、輔助文字 |
| Caption | 11px | Medium 500 | 小標籤 |

---

## 動效規劃

| 效果 | 應用位置 | 實作方式 |
|------|---------|---------|
| 滾動淡入（fade-up） | 所有區塊進入 viewport 時 | Intersection Observer + CSS transition |
| 視差浮動 | Hero 區手機 mockup 微幅上下漂浮 | CSS @keyframes animation |
| 數字跳動 | 信任指標列的數字 | Intersection Observer + JS counter |
| hover 微互動 | 按鈕 scale、卡片陰影加深、連結底線滑入 | CSS :hover transition |
| 手風琴展開 | FAQ 區塊平滑展開/收合 | CSS max-height transition 或 HTML details/summary |
| 圖片輪播 | 用戶評價、App 截圖 | CSS scroll-snap 或輕量 JS |
| 導航模糊 | Navbar 滾動時加背景模糊 | CSS backdrop-filter + scroll event |

### 動效原則
- 持續時間：200-400ms
- 緩動函數：ease-out 為主
- 不使用花俏的 3D 效果或粒子特效
- 精緻但不華麗，服務於內容而非炫技

---

## 裝飾元素

### 模糊車輛光暈

使用 App Logo 的汽車/機車幾何輪廓作為裝飾性背景光暈。

| 屬性 | 數值 |
|------|------|
| 素材 | SVG 汽車輪廓 + SVG 機車輪廓（取自 App Logo） |
| 尺寸 | 300-500px，部分超出畫面邊緣 |
| 透明度 | Light Mode: 3-6% / Dark Mode: 4-8% |
| 模糊 | filter: blur(40px) ~ blur(60px) |
| 顏色 | 汽車：橘色 / 機車：紫色 |
| 實作 | SVG 路徑 + CSS filter + opacity |

### 使用位置
- **Hero 區塊**：右上角汽車、左下角機車（最大裝飾元素）
- **最終 CTA 區塊**：呼應 Hero，收尾
- **App 詳情頁 Mini Hero**：對應版本的車輛光暈
- 其他區塊保持乾淨

---

## 響應式設計

| 斷點 | 寬度 | 佈局調整 |
|------|------|---------|
| Mobile | < 768px | 單欄、漢堡選單、產品卡片堆疊、功能圖文上下排列 |
| Tablet | 768-1024px | 雙欄維持、間距縮小 |
| Desktop | > 1024px | 完整佈局、最大寬度 1280px 居中 |

---

## i18n 架構

### URL 結構
```
/             → 重導向至 /zh/（預設語言）
/zh/          → 繁體中文首頁
/en/          → English 首頁
/vi/          → Tiếng Việt 首頁
/th/          → ไทย 首頁
/id/          → Bahasa Indonesia 首頁
/zh/car       → 汽車版詳情（中文）
/en/car       → Car App Details（English）
... 以此類推
```

### 根路徑重導向
- `/` 使用 `<meta http-equiv="refresh">` 重導向至 `/zh/`（純靜態方案，無需 Cloudflare Workers）
- 未來如需根據 Accept-Language 自動偵測語言，可透過 Cloudflare Pages Functions 實作

### 內容管理
- 使用 JSON 檔案管理多語言內容
- 每個語言一個資料夾（src/content/zh/、src/content/en/...）
- Astro Content Collections 管理
- 頁面 Layout 層統一注入 hreflang 標籤

### SEO 多語言
- 每個語言頁面獨立 URL，可被搜尋引擎個別索引
- hreflang 標籤指向所有語言版本
- sitemap.xml 包含所有語言頁面
- Open Graph / meta 標籤根據語言動態設定，每頁含獨立 og:image（1200×630px，含品牌 Logo + 頁面標題）
- 預設語言：繁體中文（zh）

---

## 專案結構

```
drive_pass_website/
├── src/
│   ├── components/          # 共用元件
│   │   ├── Nav.astro
│   │   ├── Footer.astro
│   │   ├── LanguageSwitcher.astro
│   │   ├── ThemeToggle.astro
│   │   ├── FAQ.astro
│   │   ├── ReviewCarousel.astro
│   │   ├── ScreenshotCarousel.astro
│   │   ├── TrustIndicators.astro
│   │   ├── ProductCard.astro
│   │   ├── FeatureSection.astro
│   │   └── DownloadCTA.astro
│   ├── layouts/
│   │   └── BaseLayout.astro   # 共用 Layout（SEO meta、hreflang、字型載入）
│   ├── pages/
│   │   ├── zh/
│   │   │   ├── index.astro
│   │   │   ├── car.astro
│   │   │   ├── moto.astro
│   │   │   ├── exam-info.astro
│   │   │   ├── privacy.astro
│   │   │   └── terms.astro
│   │   ├── en/               # 同結構
│   │   ├── vi/               # 同結構
│   │   ├── th/               # 同結構
│   │   ├── id/               # 同結構
│   │   ├── 404.astro         # 404 錯誤頁面（中文預設，含語言切換連結）
│   │   └── index.astro       # 根路徑重導向至 /zh/
│   ├── content/              # 多語言內容（JSON）
│   │   ├── zh/
│   │   ├── en/
│   │   ├── vi/
│   │   ├── th/
│   │   └── id/
│   ├── styles/
│   │   └── global.css        # Tailwind 入口 + 自訂動畫
│   ├── scripts/
│   │   ├── theme-toggle.js   # Dark Mode 切換
│   │   ├── counter.js        # 數字跳動動畫
│   │   └── carousel.js       # 輪播邏輯
│   └── assets/
│       ├── images/           # Logo、App 截圖
│       └── svg/              # 車輛光暈 SVG
├── public/
│   ├── favicon.ico
│   └── robots.txt
├── astro.config.mjs
├── package.json
└── .gitignore
```

---

## 效能目標

| 指標 | 目標 |
|------|------|
| Lighthouse Performance | ≥ 95 |
| Lighthouse SEO | 100 |
| First Contentful Paint | < 1.5s |
| Largest Contentful Paint | < 2.5s |
| Cumulative Layout Shift | < 0.1 |
| Total JS Bundle | < 20KB（僅互動島所需） |

---

## 分析追蹤

### 工具
- **Cloudflare Web Analytics** — 隱私友善、無需 JS 注入、Cloudflare Pages 原生整合

### 追蹤事件（自訂事件如需日後擴充可改用 Plausible 或 Umami）
- App Store / Google Play 下載連結點擊（區分汽車版/機車版）
- 「了解更多」按鈕點擊（進入 App 詳情頁）
- 語言切換使用
- FAQ 展開互動
- 頁面瀏覽路徑

---

## App Store 連結

- App Store / Google Play 連結待 App 上架後填入（標記為 TBD）
- 使用官方 Store Badge（遵循 Apple / Google 品牌指南）
- iOS 頁面加入 Smart App Banner：`<meta name="apple-itunes-app" content="app-id=TBD">`

---

## 無障礙（a11y）

- 輪播元件支援鍵盤導航（左右箭頭鍵）
- 自動輪播提供暫停機制（hover 或 focus 時暫停）
- 輪播加入 `aria-label`、`aria-live="polite"` 標籤
- 所有互動元素可被 Tab 鍵聚焦
- 色彩對比度符合 WCAG AA 標準
- 圖片加入有意義的 alt 文字

---

## 內容維護

### 用戶評價
- 手動維護在 JSON 檔案中，每個語言 5-8 筆精選評論
- 來源：App Store / Google Play 真實評論（需取得引用授權或匿名化處理）
- 更新頻率：隨 App 版本更新時檢視

### 考試資訊
- 手動維護，內容隨法規變動時更新
- 需 5 語言同步翻譯

### 手機 Mockup 素材
- 使用自製 CSS/SVG 手機外框（圓角矩形 + 瀏海/動態島）
- 內嵌實際 App 截圖
- 不區分 iPhone/Android 機型，使用通用手機外觀

---

## 實作優先順序

| 階段 | 範圍 | 說明 |
|------|------|------|
| MVP | 首頁（中文） + 基礎 Layout + Dark Mode | 先完成一個語言的完整首頁，驗證設計 |
| Phase 1 | 汽車版/機車版詳情頁 + 考試資訊頁（中文） | 補齊所有頁面 |
| Phase 2 | 5 語言 i18n | 翻譯所有內容、hreflang、sitemap |
| Phase 3 | 動效打磨 + SEO 優化 + Analytics | 上線前最終調校 |
| Phase 4 | 法律頁面 + 404 + OG 圖片 | 收尾項目 |
