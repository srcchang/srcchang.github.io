# 駕照通品牌官網 Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Build a brand website for 駕照通 (Drive Pass) that establishes brand trust and drives app downloads, supporting 5 languages with Light/Dark mode.

**Architecture:** Astro 5.x SSG with Tailwind CSS 4.x, deployed on Cloudflare Pages. Hybrid page structure: long-scroll landing page + separate app detail pages. Content managed via JSON files per language. Interactive islands (theme toggle, carousel, FAQ accordion) use vanilla JS.

**Tech Stack:** Astro 5.x, Tailwind CSS 4.x, @fontsource/outfit, @fontsource-variable/noto-sans-thai, @astrojs/sitemap, Cloudflare Pages

**Spec:** `docs/superpowers/specs/2026-03-19-brand-website-design.md`

**Architecture Decisions (deviations from spec):**
- **i18n content**: Spec 使用 `src/content/` + Astro Content Collections，plan 改用 `src/i18n/locales/*.json` 單一檔案方案。原因：此網站內容量不大（每語言約 200 條翻譯字串），不需要 Content Collections 的 schema 驗證和 markdown 渲染能力，單一 JSON 更簡單直接。
- **Scripts**: 使用 `.ts`（TypeScript）而非 spec 中的 `.js`，Astro 原生支援 client-side TS 打包。
- **Favicon**: 使用 SVG 而非 spec 的 `.ico`，同時在 `<head>` 中提供 `<link rel="icon" type="image/svg+xml">` 確保相容性。
- **Thai font**: 使用 `@fontsource-variable/noto-sans-thai`（variable font）以減少請求數。

---

## File Structure

```
drive_pass_website/
├── astro.config.mjs                    # Astro config: SSG, i18n routing, sitemap
├── package.json                        # Dependencies
├── .gitignore                          # Ignore node_modules, dist, .superpowers
├── public/
│   ├── favicon.svg                     # Brand favicon (SVG gradient)
│   ├── favicon.ico                     # Fallback for older browsers
│   └── robots.txt                      # Search engine directives
├── src/
│   ├── styles/
│   │   └── global.css                  # Tailwind 4.x @theme tokens, dark variant, animations
│   ├── i18n/
│   │   ├── translations.ts            # Type-safe translation loader
│   │   ├── config.ts                   # Language config (locales, default, labels)
│   │   └── locales/
│   │       ├── zh.json                 # 繁體中文
│   │       ├── en.json                 # English
│   │       ├── vi.json                 # Tiếng Việt
│   │       ├── th.json                 # ไทย
│   │       └── id.json                 # Bahasa Indonesia
│   ├── layouts/
│   │   └── BaseLayout.astro            # HTML shell: meta, hreflang, fonts, analytics
│   ├── components/
│   │   ├── Nav.astro                   # Sticky navbar + hamburger
│   │   ├── Footer.astro                # Dark footer with links
│   │   ├── LanguageSwitcher.astro      # Dropdown language picker
│   │   ├── ThemeToggle.astro           # Sun/moon dark mode toggle
│   │   ├── Hero.astro                  # Centered hero with phone mockups
│   │   ├── TrustIndicators.astro       # Stats row with counter animation
│   │   ├── ProductCard.astro           # Car/Moto app card
│   │   ├── FeatureSection.astro        # Alternating image-text feature row
│   │   ├── ReviewCarousel.astro        # Testimonial carousel
│   │   ├── FAQ.astro                   # Accordion FAQ
│   │   ├── BrandCTA.astro              # Brand story + final download CTA
│   │   ├── DownloadCTA.astro           # Reusable download buttons
│   │   ├── PhoneMockup.astro           # CSS/SVG phone frame with screenshot slot
│   │   ├── ScreenshotCarousel.astro    # App screenshot carousel in phone frames
│   │   ├── ExamComparisonTable.astro   # Real exam vs app comparison table
│   │   └── VehicleGlow.astro           # Blurred car/moto SVG decoration
│   ├── assets/
│   │   └── svg/
│   │       ├── car-silhouette.svg      # Car outline for glow effect
│   │       ├── moto-silhouette.svg     # Motorcycle outline for glow effect
│   │       └── logo.svg                # Brand logo (gradient)
│   ├── scripts/
│   │   ├── theme-toggle.ts            # Dark mode toggle + localStorage
│   │   ├── counter.ts                 # Animated number counter
│   │   ├── carousel.ts               # Scroll-snap carousel with autoplay
│   │   ├── faq.ts                     # Accordion toggle
│   │   ├── nav.ts                     # Hamburger menu + scroll blur
│   │   └── scroll-reveal.ts          # Intersection Observer fade-in
│   └── pages/
│       ├── index.astro                # Root redirect → /zh/
│       ├── 404.astro                  # 404 page
│       ├── zh/
│       │   ├── index.astro            # 首頁
│       │   ├── car.astro              # 汽車版詳情
│       │   ├── moto.astro             # 機車版詳情
│       │   ├── exam-info.astro        # 考試資訊
│       │   ├── privacy.astro          # 隱私政策
│       │   └── terms.astro            # 服務條款
│       ├── en/                        # Same structure
│       ├── vi/                        # Same structure
│       ├── th/                        # Same structure
│       └── id/                        # Same structure
```

---

## MVP — 首頁（中文）+ 基礎 Layout + Dark Mode

### Task 1: Project Scaffolding

**Files:**
- Create: `package.json`
- Create: `astro.config.mjs`
- Create: `src/styles/global.css`
- Create: `.gitignore`
- Create: `public/robots.txt`

- [ ] **Step 1: Initialize Astro project**

```bash
cd /Users/robin/MyProjects/drive_pass_website
npm create astro@latest . -- --template minimal --no-install --no-git
```

- [ ] **Step 2: Install dependencies**

```bash
npm install @astrojs/tailwind @astrojs/sitemap @fontsource/outfit @fontsource-variable/noto-sans-thai
```

- [ ] **Step 3: Configure astro.config.mjs**

Set up SSG output, i18n routing with 5 locales (zh default), sitemap integration. Configure Tailwind integration.

```javascript
import { defineConfig } from 'astro/config';
import tailwindcss from '@astrojs/tailwind';
import sitemap from '@astrojs/sitemap';

export default defineConfig({
  site: 'https://drivepass.app',
  output: 'static',
  integrations: [tailwindcss(), sitemap()],
  i18n: {
    defaultLocale: 'zh',
    locales: ['zh', 'en', 'vi', 'th', 'id'],
    routing: { prefixDefaultLocale: true },
  },
});
```

- [ ] **Step 4: Set up global.css with Tailwind 4.x theme tokens**

Define all design tokens from spec: colors (brand, light/dark mode), typography (font sizes with clamp), spacing, border radius. Configure dark mode variant with class-based strategy.

```css
@import 'tailwindcss';
@import '@fontsource/outfit/400.css';
@import '@fontsource/outfit/600.css';
@import '@fontsource/outfit/700.css';
@import '@fontsource-variable/noto-sans-thai';

@variant dark (&:where(.dark, .dark *));

@theme {
  /* Brand colors (shared between modes) */
  --color-car: #F97316;
  --color-car-light: #FDBA74;
  --color-car-deep: #EA580C;
  --color-moto: #8B5CF6;
  --color-moto-light: #C4B5FD;
  --color-moto-deep: #7C3AED;

  /* Light mode (default) */
  --color-bg-primary: #FAFAFA;
  --color-bg-surface: #FFFFFF;
  --color-bg-muted: #F4F4F5;
  --color-text-primary: #1A1A2E;
  --color-text-secondary: #6B7280;
  --color-text-tertiary: #9CA3AF;
  --color-border-subtle: #E5E7EB;
  --color-border-strong: #D1D5DB;

  --font-family-sans: 'Outfit', system-ui, -apple-system, sans-serif;
  --font-family-thai: 'Noto Sans Thai Variable', sans-serif;
}

/* Dark mode token overrides */
.dark {
  --color-bg-primary: #09090B;
  --color-bg-surface: #18181B;
  --color-bg-muted: #1E1E22;
  --color-text-primary: #F5F5F5;
  --color-text-secondary: #A1A1AA;
  --color-text-tertiary: #71717A;
  --color-border-subtle: #27272A;
  --color-border-strong: #3F3F46;
  --color-car: #FB923C;
  --color-car-deep: #F97316;
  --color-moto: #A78BFA;
  --color-moto-deep: #8B5CF6;
}
```

- [ ] **Step 5: Update .gitignore**

Add `node_modules/`, `dist/`, `.astro/` to existing `.gitignore`.

- [ ] **Step 6: Verify build**

```bash
npm run build
```

Expected: Build succeeds with empty site.

- [ ] **Step 7: Commit**

```
chore: initialize Astro project with Tailwind 4.x and design tokens
```

---

### Task 2: i18n System + Translation Files

**Files:**
- Create: `src/i18n/config.ts`
- Create: `src/i18n/translations.ts`
- Create: `src/i18n/locales/zh.json`

- [ ] **Step 1: Create i18n config**

Define supported locales, default locale, language labels, and font family overrides (Thai uses Noto Sans Thai).

```typescript
// src/i18n/config.ts
export const locales = ['zh', 'en', 'vi', 'th', 'id'] as const;
export type Locale = (typeof locales)[number];
export const defaultLocale: Locale = 'zh';

export const localeLabels: Record<Locale, string> = {
  zh: '繁體中文',
  en: 'English',
  vi: 'Tiếng Việt',
  th: 'ไทย',
  id: 'Indonesia',
};

export const localeFontFamily: Partial<Record<Locale, string>> = {
  th: "'Noto Sans Thai Variable', sans-serif",
};
```

- [ ] **Step 2: Create translation loader**

Type-safe helper to get translations for a given locale and key path.

```typescript
// src/i18n/translations.ts
import type { Locale } from './config';

const translationModules = import.meta.glob('./locales/*.json', { eager: true });

export function getTranslations(locale: Locale) {
  const mod = translationModules[`./locales/${locale}.json`] as { default: Record<string, any> };
  return mod.default;
}

export function t(translations: Record<string, any>, key: string): string {
  return key.split('.').reduce((obj, k) => obj?.[k], translations) ?? key;
}
```

- [ ] **Step 3: Create zh.json with all homepage translations**

Include: nav, hero, trust indicators, product cards, features, reviews, FAQ, brand CTA, footer. Structure as nested objects by section.

```json
{
  "nav": {
    "car": "汽車版",
    "moto": "機車版",
    "examInfo": "考試資訊",
    "download": "下載 App"
  },
  "hero": {
    "badge": "台灣駕照筆試備考 App",
    "title1": "一次考過",
    "title2": "駕照輕鬆到手",
    "subtitle": "智慧複習演算法 · 精準通過率預測 · 五語言完整支援",
    "downloadCar": "汽車版下載",
    "downloadMoto": "機車版下載"
  },
  "trust": {
    "questions": "精選題目",
    "questionsCount": "2,500+",
    "languages": "語言支援",
    "languagesCount": "5",
    "achievements": "成就獎章",
    "achievementsCount": "14",
    "platforms": "雙平台",
    "platformsLabel": "iOS + Android"
  },
  "products": { "...": "..." },
  "features": { "...": "..." },
  "reviews": { "...": "..." },
  "faq": { "...": "..." },
  "brand": { "...": "..." },
  "footer": { "...": "..." }
}
```

- [ ] **Step 4: Verify build**

```bash
npm run build
```

- [ ] **Step 5: Commit**

```
feat: add i18n system with zh translations
```

---

### Task 3: BaseLayout + Dark Mode Toggle

**Files:**
- Create: `src/layouts/BaseLayout.astro`
- Create: `src/scripts/theme-toggle.ts`
- Create: `src/components/ThemeToggle.astro`

- [ ] **Step 1: Create BaseLayout.astro**

HTML shell with: `<!DOCTYPE html>`, `<html lang>` set by locale, `<head>` with charset, viewport, title, description, og:tags, hreflang links for all 5 locales, font preloads, global.css import. `<body>` with slot. Inline script at top of `<head>` to apply dark class before paint (prevents FOUC).

```astro
---
interface Props {
  title: string;
  description: string;
  locale: string;
  currentPath: string;
}
const { title, description, locale, currentPath } = Astro.props;
---
<!DOCTYPE html>
<html lang={locale} class="scroll-smooth">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <title>{title}</title>
  <meta name="description" content={description} />
  <!-- Inline dark mode script to prevent FOUC -->
  <script is:inline>
    const theme = localStorage.getItem('theme');
    if (theme === 'dark' || (!theme && matchMedia('(prefers-color-scheme: dark)').matches)) {
      document.documentElement.classList.add('dark');
    }
  </script>
  <!-- hreflang tags for all locales -->
  <!-- og:tags -->
  <meta name="apple-itunes-app" content="app-id=TBD" />
  <link rel="icon" type="image/svg+xml" href="/favicon.svg" />
  <link rel="icon" type="image/x-icon" href="/favicon.ico" />
  <link rel="stylesheet" href="/src/styles/global.css" />
</head>
<body class="bg-bg-primary text-text-primary font-sans">
  <slot />
</body>
</html>
```

- [ ] **Step 2: Create ThemeToggle.astro**

Sun/moon icon button. Client-side script toggles `.dark` on `<html>` and saves to localStorage.

- [ ] **Step 3: Create theme-toggle.ts**

Toggle logic: read localStorage → toggle class → save preference. Listen for system preference changes when no manual override.

- [ ] **Step 4: Create root index.astro redirect**

```astro
---
// src/pages/index.astro
---
<!DOCTYPE html>
<html>
<head>
  <meta http-equiv="refresh" content="0;url=/zh/" />
  <link rel="canonical" href="/zh/" />
</head>
</html>
```

- [ ] **Step 5: Create minimal zh/index.astro to test layout**

```astro
---
// src/pages/zh/index.astro
import BaseLayout from '../../layouts/BaseLayout.astro';
import ThemeToggle from '../../components/ThemeToggle.astro';
---
<BaseLayout title="駕照通 Drive Pass" description="台灣駕照筆試備考 App" locale="zh" currentPath="/">
  <div class="p-8 text-center">
    <h1 class="text-4xl font-bold">駕照通</h1>
    <ThemeToggle />
    <p class="mt-4 text-text-secondary">Dark Mode 測試</p>
  </div>
</BaseLayout>
```

- [ ] **Step 6: Verify dev server**

```bash
npm run dev
```

Open http://localhost:4321 → should redirect to /zh/. Toggle dark mode works. Verify no FOUC.

- [ ] **Step 7: Commit**

```
feat: add BaseLayout with dark mode toggle and root redirect
```

---

### Task 4: Navigation Component

**Files:**
- Create: `src/components/Nav.astro`
- Create: `src/components/LanguageSwitcher.astro`
- Create: `src/scripts/nav.ts`
- Create: `src/assets/svg/logo.svg`

- [ ] **Step 1: Create logo.svg**

Simple gradient square with rounded corners (orange → purple gradient). Placeholder for now.

- [ ] **Step 2: Create Nav.astro**

Sticky top navbar. Left: logo + "駕照通" text. Right: nav links (汽車版, 機車版, 考試資訊), download CTA button, LanguageSwitcher, ThemeToggle. Responsive: hamburger menu on mobile. Uses translations from i18n.

- [ ] **Step 3: Create LanguageSwitcher.astro**

Dropdown showing current language label. On click, shows list of 5 languages. Each option links to the same page path but with different locale prefix.

- [ ] **Step 4: Create nav.ts**

Handle hamburger menu toggle (mobile), scroll-based background blur effect (add `bg-white/80 dark:bg-zinc-900/80 backdrop-blur-md` class after scrolling past 50px).

- [ ] **Step 5: Add Nav to zh/index.astro**

Import and render Nav at top of page.

- [ ] **Step 6: Verify**

```bash
npm run dev
```

Test: desktop nav links visible, mobile hamburger works, scroll blur effect, language switcher dropdown.

- [ ] **Step 7: Commit**

```
feat: add responsive navbar with language switcher
```

---

### Task 5: Hero Section

**Files:**
- Create: `src/components/Hero.astro`
- Create: `src/components/PhoneMockup.astro`
- Create: `src/components/VehicleGlow.astro`
- Create: `src/assets/svg/car-silhouette.svg`
- Create: `src/assets/svg/moto-silhouette.svg`

- [ ] **Step 1: Create car-silhouette.svg and moto-silhouette.svg**

Simple vehicle outlines extracted/inspired from app logos. These will be heavily blurred so detail isn't critical.

- [ ] **Step 2: Create VehicleGlow.astro**

Renders an SVG with CSS `filter: blur(50px)` and low opacity. Props: `vehicle` ('car' | 'moto'), `position` ('top-right' | 'bottom-left' etc.), `size` (px).

- [ ] **Step 3: Create PhoneMockup.astro**

CSS-only phone frame: rounded rectangle with notch/dynamic island, border matching app color. Accepts a slot for screen content. Props: `variant` ('car' | 'moto'), `rotate` (degrees).

- [ ] **Step 4: Create Hero.astro**

Centered layout with:
- Badge pill ("台灣駕照筆試備考 App")
- Gradient title text
- Subtitle
- Two PhoneMockups side by side (car rotated -3°, moto rotated +3°) with placeholder screen content
- Two download CTA buttons (orange car + purple moto)
- VehicleGlow decorations (car top-right, moto bottom-left)
- CSS floating animation on phone mockups

- [ ] **Step 5: Add Hero to zh/index.astro**

```astro
<BaseLayout ...>
  <Nav locale="zh" currentPath="/" />
  <Hero locale="zh" />
</BaseLayout>
```

- [ ] **Step 6: Verify**

Preview in browser. Check: gradient text renders, phone mockups display with slight rotation, floating animation smooth, glow decorations visible but subtle, responsive on mobile (phones stack or scale).

- [ ] **Step 7: Commit**

```
feat: add hero section with phone mockups and vehicle glow decorations
```

---

### Task 6: Trust Indicators + Product Cards

**Files:**
- Create: `src/components/TrustIndicators.astro`
- Create: `src/components/ProductCard.astro`
- Create: `src/scripts/counter.ts`

- [ ] **Step 1: Create TrustIndicators.astro**

Horizontal row with 4 stats separated by dividers. Each stat: large gradient number + small label. Numbers have `data-target` attribute for counter animation. Uses `counter.ts` as client script.

- [ ] **Step 2: Create counter.ts**

Intersection Observer watches `.counter` elements. When visible, animate from 0 to `data-target` value over 1.5s using `requestAnimationFrame`. Only triggers once.

- [ ] **Step 3: Create ProductCard.astro**

Card component with props: `variant` ('car' | 'moto'). Displays: App icon (gradient square), name, summary stats, feature tags (pills), "了解更多 →" link. Border and accent colors based on variant. Hover: shadow deepens + slight translateY(-4px).

- [ ] **Step 4: Add both components to zh/index.astro**

After Hero: TrustIndicators, then a section with two ProductCards side by side.

- [ ] **Step 5: Verify**

Scroll down to see counter animation trigger. Product cards hover effect. Mobile: cards stack vertically.

- [ ] **Step 6: Commit**

```
feat: add trust indicators with counter animation and product cards
```

---

### Task 7: Feature Sections

**Files:**
- Create: `src/components/FeatureSection.astro`
- Create: `src/scripts/scroll-reveal.ts`

- [ ] **Step 1: Create scroll-reveal.ts**

Generic Intersection Observer script. Watches elements with `data-reveal` attribute. On enter viewport, adds `revealed` class. CSS handles the transition (opacity 0→1, translateY 20px→0).

- [ ] **Step 2: Add scroll-reveal CSS to global.css**

```css
[data-reveal] {
  opacity: 0;
  transform: translateY(20px);
  transition: opacity 0.6s ease-out, transform 0.6s ease-out;
}
[data-reveal].revealed {
  opacity: 1;
  transform: translateY(0);
}
```

- [ ] **Step 3: Create FeatureSection.astro**

Props: `title`, `description`, `icon` (emoji or SVG), `reversed` (boolean for image-text order). Renders a row with icon/illustration on one side and text on the other. On mobile: stacks vertically (icon on top). Each section has `data-reveal` for scroll animation.

- [ ] **Step 4: Add 6 feature sections to zh/index.astro**

Alternating `reversed` prop: SM-2 (normal), Pass Rate (reversed), Daily Challenge (normal), Mock Exam (reversed), Wrong Answers (normal), Achievements (reversed).

- [ ] **Step 5: Verify**

Scroll through page. Each feature section fades in when entering viewport. Layout alternates correctly. Mobile: all stack vertically.

- [ ] **Step 6: Commit**

```
feat: add feature sections with scroll reveal animation
```

---

### Task 8: Review Carousel + FAQ

**Files:**
- Create: `src/components/ReviewCarousel.astro`
- Create: `src/components/FAQ.astro`
- Create: `src/scripts/carousel.ts`
- Create: `src/scripts/faq.ts`

- [ ] **Step 1: Create carousel.ts**

Scroll-snap based carousel with:
- Auto-scroll every 5 seconds
- Pause on hover/focus
- Left/right arrow button handlers
- Keyboard arrow key support (a11y)
- `aria-live="polite"` on container

- [ ] **Step 2: Create ReviewCarousel.astro**

Section with title "用戶怎麼說". Horizontal scrollable card container with scroll-snap. Each card: star rating, review text, reviewer name + platform. Arrow buttons on sides. Data from translations JSON (5-8 reviews with mixed languages). `data-reveal` for scroll-in.

- [ ] **Step 3: Create faq.ts**

Accordion toggle: click on question toggles answer visibility. Only one open at a time (close others). Smooth height animation. Keyboard accessible (Enter/Space to toggle).

- [ ] **Step 4: Create FAQ.astro**

Section with title "常見問題". List of FAQ items from translations. First item expanded by default. Each item: question text + chevron icon, answer text. `data-reveal` for scroll-in.

- [ ] **Step 5: Add both to zh/index.astro**

After feature sections: ReviewCarousel, then FAQ.

- [ ] **Step 6: Verify**

Carousel auto-scrolls, pauses on hover, arrow buttons work. FAQ: click to expand/collapse, smooth animation, first item open by default.

- [ ] **Step 7: Commit**

```
feat: add review carousel and FAQ accordion
```

---

### Task 9: Brand CTA + Footer

**Files:**
- Create: `src/components/BrandCTA.astro`
- Create: `src/components/DownloadCTA.astro`
- Create: `src/components/Footer.astro`

- [ ] **Step 1: Create DownloadCTA.astro**

Reusable component with two buttons: orange "汽車版下載" + purple "機車版下載". Props: `size` ('sm' | 'lg'). Links to App Store / Google Play (TBD, use # for now). Button shadow and hover scale effect.

- [ ] **Step 2: Create BrandCTA.astro**

Section with: "關於駕照通" heading, 2-3 sentence brand vision text, "準備好了嗎？" gradient heading, DownloadCTA (lg), VehicleGlow decorations. `data-reveal` for scroll-in.

- [ ] **Step 3: Create Footer.astro**

Dark background (always dark regardless of theme). Left: logo + tagline. Right: 3 columns (產品, 法律, 聯絡). Bottom bar: copyright + language switcher. All links from translations.

- [ ] **Step 4: Assemble complete zh/index.astro**

Final page assembly: Nav → Hero → TrustIndicators → ProductCards → Features (×6) → ReviewCarousel → FAQ → BrandCTA → Footer.

- [ ] **Step 5: Verify full page flow**

```bash
npm run dev
```

Scroll through entire page top to bottom. Check: all sections render, animations trigger, dark mode works throughout, mobile responsive.

- [ ] **Step 6: Run build**

```bash
npm run build
```

Verify: build succeeds, output in `dist/` folder.

- [ ] **Step 7: Commit**

```
feat: complete MVP homepage with brand CTA and footer
```

---

## Phase 1 — App 詳情頁 + 考試資訊頁（中文）

### Task 10: App Detail Page Template

**Files:**
- Create: `src/components/ScreenshotCarousel.astro`
- Create: `src/components/ExamComparisonTable.astro`

- [ ] **Step 1: Create ScreenshotCarousel.astro**

Similar to ReviewCarousel but displays app screenshots inside PhoneMockup frames. Props: `variant` ('car' | 'moto'), `screenshots` (array of image paths). Horizontal scroll-snap.

- [ ] **Step 2: Create ExamComparisonTable.astro**

Two-column comparison table: "真實筆試" vs "駕照通模擬考". Rows: 題數, 時間, 及格分數, 計分方式. Checkmarks (✓) on matching items. Props: `variant` for data differences.

- [ ] **Step 3: Verify components render in isolation**

Temporarily add to zh/index.astro for visual check.

- [ ] **Step 4: Commit**

```
feat: add screenshot carousel and exam comparison table components
```

---

### Task 11: Car App Detail Page

**Files:**
- Create: `src/pages/zh/car.astro`

- [ ] **Step 1: Create zh/car.astro**

Full page using BaseLayout. Sections:
1. Mini Hero — orange theme, car icon, "汽車題庫" title, subtitle, download button
2. Cross-promotion banner — "也有機車版 →" link to /zh/moto
3. ScreenshotCarousel — car variant (placeholder images for now)
4. ExamComparisonTable — car data (40 questions, 30 min, 85 points)
5. Feature grid — 2×3 cards (分類練習, 模擬考, 錯題本, SM-2 複習, 每日挑戰, 駕訓班地圖)
6. Exclusive feature highlight — 駕訓班地圖整合
7. DownloadCTA + Footer

- [ ] **Step 2: Verify page**

Navigate to /zh/car. Check all sections, orange theming, link to /zh/moto works.

- [ ] **Step 3: Commit**

```
feat: add car app detail page
```

---

### Task 12: Moto App Detail Page

**Files:**
- Create: `src/pages/zh/moto.astro`

- [ ] **Step 1: Create zh/moto.astro**

Same structure as car.astro but:
- Purple theme
- "機車題庫" title
- Cross-promotion: "也有汽車版 →" link to /zh/car
- ExamComparisonTable: 50 questions, 40 min, 85 points
- Feature grid includes 情境題
- Exclusive feature: 危險感知影片題

- [ ] **Step 2: Verify page**

Navigate to /zh/moto. Check purple theming, cross-promotion link.

- [ ] **Step 3: Commit**

```
feat: add moto app detail page
```

---

### Task 13: Exam Info Page

**Files:**
- Create: `src/pages/zh/exam-info.astro`

- [ ] **Step 1: Create zh/exam-info.astro**

Page sections:
1. Page header — "考試資訊速查"
2. Car exam rules card — 題數 40, 時間 30 分鐘, 及格 85 分, 計分方式
3. Moto exam rules card — 題數 50, 時間 40 分鐘, 及格 85 分, 含危險感知影片題說明
4. Practical checklist — 需攜帶物品, 考試地點, 報名流程
5. CTA — "用駕照通準備" + DownloadCTA
6. Footer

- [ ] **Step 2: Verify page**

Navigate to /zh/exam-info. Check content renders correctly.

- [ ] **Step 3: Commit**

```
feat: add exam info page
```

---

## Phase 2 — 5 語言 i18n

### Task 14: Create Translation Files

**Files:**
- Create: `src/i18n/locales/en.json`
- Create: `src/i18n/locales/vi.json`
- Create: `src/i18n/locales/th.json`
- Create: `src/i18n/locales/id.json`

- [ ] **Step 1: Create en.json**

Translate all zh.json keys to English. Include all sections: nav, hero, trust, products, features, reviews, FAQ, brand, footer, car page, moto page, exam info.

- [ ] **Step 2: Create vi.json**

Translate to Vietnamese.

- [ ] **Step 3: Create th.json**

Translate to Thai.

- [ ] **Step 4: Create id.json**

Translate to Indonesian.

- [ ] **Step 5: Commit**

```
feat: add translation files for en, vi, th, id
```

---

### Task 15: Generate All Language Pages

**Files:**
- Create: `src/pages/en/*.astro` (6 files)
- Create: `src/pages/vi/*.astro` (6 files)
- Create: `src/pages/th/*.astro` (6 files)
- Create: `src/pages/id/*.astro` (6 files)

- [ ] **Step 1: Create page files for all 4 remaining languages**

Each language folder gets: index.astro, car.astro, moto.astro, exam-info.astro. Pages are identical to zh/ versions but pass different locale to components. Legal pages (privacy, terms) will be added in Phase 4 for all languages at once.

Consider: refactor pages to use a shared page component that takes locale as prop, reducing duplication. Each page file is minimal:

```astro
---
import HomePage from '../../components/pages/HomePage.astro';
---
<HomePage locale="en" />
```

- [ ] **Step 2: Verify hreflang tags**

Check any page's `<head>` — should have 5 `<link rel="alternate" hreflang="xx" href="...">` tags.

- [ ] **Step 3: Verify Thai page renders with Noto Sans Thai**

Navigate to /th/. Check that Thai text uses correct font family.

- [ ] **Step 4: Verify all language pages build**

```bash
npm run build
```

Check `dist/` for all 20 pages (4 pages × 5 languages). Legal pages added later in Phase 4.

- [ ] **Step 5: Commit**

```
feat: generate all language pages with i18n routing
```

---

### Task 16: Sitemap + SEO Meta

**Files:**
- Modify: `astro.config.mjs`
- Modify: `src/layouts/BaseLayout.astro`

- [ ] **Step 1: Configure sitemap in astro.config.mjs**

Ensure sitemap generates all language URLs with proper hreflang alternates.

- [ ] **Step 2: Add comprehensive SEO meta to BaseLayout**

Add: canonical URL, og:title, og:description, og:image, og:locale, twitter:card. All values from props and translations.

- [ ] **Step 3: Verify sitemap output**

```bash
npm run build
cat dist/sitemap-0.xml
```

Should list all 30+ URLs.

- [ ] **Step 4: Commit**

```
feat: add sitemap and SEO meta tags
```

---

## Phase 3 — 動效打磨 + Analytics

### Task 17: Polish Animations

**Files:**
- Modify: `src/styles/global.css`
- Modify: `src/scripts/scroll-reveal.ts`

- [ ] **Step 1: Add staggered reveal delays**

Feature sections and product cards get sequential `transition-delay` so they appear one by one, not all at once.

- [ ] **Step 2: Add floating animation to Hero phone mockups**

```css
@keyframes float {
  0%, 100% { transform: translateY(0) rotate(var(--rotate)); }
  50% { transform: translateY(-10px) rotate(var(--rotate)); }
}
```

- [ ] **Step 3: Polish hover transitions**

Buttons: `transform: scale(1.02)` + shadow increase. Cards: `translateY(-4px)` + shadow increase. Links: underline slide-in from left.

- [ ] **Step 4: Test all animations**

Full page walkthrough: scroll reveals smooth, hover effects consistent, no janky transitions.

- [ ] **Step 5: Commit**

```
style: polish scroll reveal, hover, and floating animations
```

---

### Task 18: Cloudflare Web Analytics

**Files:**
- Modify: `src/layouts/BaseLayout.astro`

- [ ] **Step 1: Add Cloudflare Web Analytics beacon**

Add the Cloudflare analytics script tag to BaseLayout `<head>`. Token will be configured in Cloudflare dashboard after deployment.

```html
<!-- Cloudflare Web Analytics -->
<script defer src='https://static.cloudflareinsights.com/beacon.min.js'
  data-cf-beacon='{"token": "TBD"}'></script>
```

- [ ] **Step 2: Verify build still passes**

```bash
npm run build
```

- [ ] **Step 3: Commit**

```
feat: add Cloudflare Web Analytics beacon
```

---

## Phase 4 — 法律頁面 + 404 + 收尾

### Task 19: Legal Pages (All Languages)

**Files:**
- Create: `src/pages/{zh,en,vi,th,id}/privacy.astro`
- Create: `src/pages/{zh,en,vi,th,id}/terms.astro`

- [ ] **Step 1: Create a shared LegalPage component**

```astro
// src/components/pages/LegalPage.astro
// Accepts locale + content type (privacy | terms), renders prose page with BaseLayout + Nav + Footer
```

- [ ] **Step 2: Create privacy.astro and terms.astro for all 5 languages**

Each file is minimal, importing LegalPage with locale prop. Content from translation JSON. Initial content can be placeholder text to be replaced by actual legal copy later.

- [ ] **Step 3: Add legal page translations to all locale JSON files**

- [ ] **Step 4: Verify pages render**

```bash
npm run dev
```

Navigate to /zh/privacy, /en/privacy, etc.

- [ ] **Step 5: Commit**

```
feat: add privacy policy and terms of service pages for all languages
```

---

### Task 20: 404 Page

**Files:**
- Create: `src/pages/404.astro`
- Create: `public/favicon.svg`

- [ ] **Step 1: Create 404.astro**

Centered layout: "404" large gradient number, "找不到頁面" message, links to each language's homepage, back to home button. Include Nav and Footer.

- [ ] **Step 2: Create favicon.svg**

Simple gradient square icon (orange → purple) matching brand.

- [ ] **Step 3: Verify 404 page**

```bash
npm run dev
```

Navigate to a non-existent URL, should show 404 page.

- [ ] **Step 4: Commit**

```
feat: add 404 page and favicon
```

---

### Task 21: Final Build + Deploy Config

**Files:**
- Modify: `package.json`
- Verify: all pages build

- [ ] **Step 1: Final build verification**

```bash
npm run build
```

Check: no errors, all pages generated, dist/ folder contains correct structure.

- [ ] **Step 2: Preview production build**

```bash
npm run preview
```

Full walkthrough: all pages, all languages, dark mode, responsive, animations.

- [ ] **Step 3: Verify Cloudflare Pages compatibility**

Ensure `dist/` output is plain static files. No server-side runtime needed. Cloudflare Pages build command: `npm run build`, output directory: `dist`.

- [ ] **Step 4: Commit**

```
chore: finalize build configuration for Cloudflare Pages deployment
```

---

### Task 22: OG Images

**Files:**
- Create: `src/assets/og/` directory with OG images

- [ ] **Step 1: Create a generic OG image template**

Design a 1200×630px OG image with brand gradient background, logo, and text placeholder. This can be a static SVG or PNG.

- [ ] **Step 2: Generate per-page OG images**

Create OG images for key pages: homepage, car, moto, exam-info. Each shows brand logo + page title. For i18n, the homepage OG image can be shared across languages (brand logo is universal); page-specific titles can vary.

- [ ] **Step 3: Reference OG images in BaseLayout**

Ensure `og:image` meta tag points to the correct image per page.

- [ ] **Step 4: Commit**

```
feat: add OG images for social sharing
```

---

### Task 23: Performance & a11y Verification

**Files:**
- No new files

- [ ] **Step 1: Run Lighthouse audit**

```bash
npm run build && npm run preview
```

Open Chrome DevTools → Lighthouse → run audit on /zh/ page. Verify:
- Performance ≥ 95
- SEO = 100
- Accessibility ≥ 90
- FCP < 1.5s
- LCP < 2.5s
- CLS < 0.1

- [ ] **Step 2: Check JS bundle size**

Inspect `dist/` output. Total client-side JS should be < 20KB (gzipped).

- [ ] **Step 3: Verify a11y basics**

- All interactive elements focusable via Tab
- Color contrast passes WCAG AA (check gradient text on both light/dark)
- All images have alt text
- Carousel keyboard navigable
- FAQ keyboard navigable

- [ ] **Step 4: Fix any issues found**

Address Lighthouse warnings and a11y issues.

- [ ] **Step 5: Commit**

```
fix: address performance and accessibility audit findings
```

---

### Task 24: App Screenshot Assets Preparation

**Files:**
- Create: `src/assets/images/screenshots/car/` (placeholder images)
- Create: `src/assets/images/screenshots/moto/` (placeholder images)

- [ ] **Step 1: Create placeholder screenshot images**

Generate 5-8 placeholder images per app (car + moto) at appropriate dimensions for phone mockup frames. These will be replaced with actual app screenshots when available.

- [ ] **Step 2: Update ScreenshotCarousel to reference real paths**

Ensure the carousel component loads from `src/assets/images/screenshots/{car,moto}/`.

- [ ] **Step 3: Commit**

```
chore: add placeholder app screenshot assets
```

---

## Summary

| Phase | Tasks | Description |
|-------|-------|-------------|
| MVP | 1-9 | 首頁（中文）完整版 + Layout + Dark Mode |
| Phase 1 | 10-13 | 汽車版/機車版詳情頁 + 考試資訊頁（中文） |
| Phase 2 | 14-16 | 5 語言 i18n + Sitemap + SEO |
| Phase 3 | 17-18 | 動效打磨 + Analytics |
| Phase 4 | 19-24 | 法律頁面 + 404 + OG 圖片 + 效能驗證 + 截圖素材 + 部署準備 |
| **Total** | **24 tasks** | |

**Note on tracking events:** Cloudflare Web Analytics 提供頁面級瀏覽分析，不支援自訂事件。Spec 中列出的自訂追蹤事件（下載點擊、FAQ 展開等）屬於後續優化，如需要可在未來改用 Plausible 或 Umami 實作。
