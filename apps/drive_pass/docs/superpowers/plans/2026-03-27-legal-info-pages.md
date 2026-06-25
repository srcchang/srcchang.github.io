# Legal & Info Pages Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Enhance Privacy Policy & Terms of Service content, add About and FAQ pages, and support in-app WebView embedding across all 5 locales.

**Architecture:** Astro SSG with Page Component pattern (component in `src/components/`, 3-line wrappers in `src/pages/{locale}/`). Translations in flat JSON files under `src/i18n/locales/`. All new pages support `?embed=true` to hide Nav/Footer for in-app WebView. No JavaScript required for FAQ accordion (pure `<details>/<summary>`).

**Tech Stack:** Astro 5.x, Tailwind CSS 4.x, i18n flat JSON

---

### Task 1: Update LegalPage.astro — embed mode + email linkification

**Files:**
- Modify: `src/components/LegalPage.astro`

- [ ] **Step 1: Add embed query parameter support**

Read the `embed` query param from `Astro.url`. Conditionally render Nav and Footer.

```astro
---
import BaseLayout from '../layouts/BaseLayout.astro';
import Nav from './Nav.astro';
import Footer from './Footer.astro';
import { getTranslations, t } from '../i18n/translations';
import type { Locale } from '../i18n/config';

interface Props {
  type: 'privacy' | 'terms';
  locale: string;
}

const { type, locale } = Astro.props;
const tr = getTranslations(locale as Locale);
const embed = Astro.url.searchParams.get('embed') === 'true';

const title = t(tr, `legal.${type}.title`);
const lastUpdated = t(tr, `legal.${type}.lastUpdated`);
const translations = tr as Record<string, any>;
const sections: { heading: string; content: string }[] = translations.legal?.[type]?.sections ?? [];
const currentPath = `/${type}`;
---
<BaseLayout
  title={`${title} — Drive Pass`}
  description={title}
  locale={locale}
  currentPath={currentPath}
>
  {!embed && <Nav locale={locale} currentPath={currentPath} />}

  <article class="bg-bg-surface px-4 pb-16 pt-12 sm:px-6 lg:px-8">
    <div class="mx-auto max-w-2xl">
      <h1 class="text-3xl font-bold text-text-primary sm:text-4xl">{title}</h1>
      <p class="mt-2 text-sm text-text-tertiary">{lastUpdated}</p>

      <div class="mt-10 space-y-8">
        {sections.map((section) => (
          <section>
            <h2 class="text-lg font-semibold text-text-primary">{section.heading}</h2>
            <p class="mt-2 leading-relaxed text-text-secondary" set:html={section.content.replace(
              /([a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,})/g,
              '<a href="mailto:$1" class="text-car underline hover:opacity-80">$1</a>'
            )} />
          </section>
        ))}
      </div>
    </div>
  </article>

  {!embed && <Footer locale={locale} />}
</BaseLayout>
```

- [ ] **Step 2: Verify dev server renders correctly**

Run: `npm run dev`

Check:
- `http://localhost:4321/zh/privacy` — shows Nav + Footer
- `http://localhost:4321/zh/privacy?embed=true` — no Nav, no Footer
- Email `support@drivepass.app` is a clickable mailto link

- [ ] **Step 3: Commit**

```bash
git add src/components/LegalPage.astro
```

Commit message: `feat: LegalPage 支援 embed 模式與 email 連結化`

---

### Task 2: Update zh.json — legal content enhancement

**Files:**
- Modify: `src/i18n/locales/zh.json`

- [ ] **Step 1: Replace the `legal` block**

Replace the existing `legal` object (lines 254-277) with the enhanced version:

```json
"legal": {
  "privacy": {
    "title": "隱私政策",
    "lastUpdated": "最後更新：2026 年 3 月",
    "sections": [
      { "heading": "資料收集", "content": "駕照通不會收集任何個人身分資訊，包括姓名、電子郵件地址或電話號碼。所有學習進度與設定資料僅儲存於您的裝置本機，不會上傳至任何伺服器。" },
      { "heading": "分析服務", "content": "我們使用 Google Firebase 服務來改善產品體驗。Firebase Analytics 收集匿名的應用程式使用統計，例如功能使用頻率與畫面瀏覽次數，這些數據無法識別個別使用者。Firebase Crashlytics 在應用程式發生異常時自動收集崩潰報告，包含裝置型號、作業系統版本與錯誤堆疊資訊，用於修復問題並提升穩定性。" },
      { "heading": "廣告", "content": "本應用程式使用 Google AdMob 顯示廣告。AdMob 可能會收集您的廣告識別碼（iOS 的 IDFA 或 Android 的 GAID）以投放相關廣告。在 iOS 裝置上，我們會透過「App 追蹤透明度」（ATT）框架徵求您的同意後才進行追蹤。您可以隨時在裝置的隱私設定中關閉個人化廣告。購買去廣告方案後，將不再載入任何廣告模組。" },
      { "heading": "應用內購買", "content": "駕照通提供一次性的應用內購買（去廣告）。所有付款均透過 Apple App Store 或 Google Play Store 處理，我們不會收集、處理或儲存任何付款資訊或信用卡資料。購買紀錄綁定於您的 Apple ID 或 Google 帳號，可透過應用程式內的「恢復購買」功能還原。" },
      { "heading": "位置資訊", "content": "汽車駕照通的「駕訓班地圖」功能會在您明確授權後存取裝置的 GPS 位置，僅用於計算您與附近駕訓班的距離。位置資料不會被儲存、上傳或分享給任何第三方。您可以隨時在裝置設定中撤銷位置權限。機車駕照通不使用位置功能。" },
      { "heading": "資料儲存", "content": "所有題庫資料、學習進度、模擬考記錄均儲存於您的裝置上。解除安裝應用程式將會刪除所有本機資料。" },
      { "heading": "使用者權利", "content": "您可以隨時透過解除安裝應用程式來刪除所有本機資料。您也可以在裝置的隱私設定中重置廣告識別碼或關閉個人化廣告追蹤，以限制第三方服務的資料收集。" },
      { "heading": "兒童隱私", "content": "駕照通並非針對 13 歲以下兒童設計。台灣法規規定考取機車駕照的最低年齡為 16 歲，汽車駕照為 18 歲。我們不會故意收集 13 歲以下兒童的任何資訊。" },
      { "heading": "政策變更", "content": "我們可能會不定期更新本隱私政策。重大變更將透過應用程式內通知告知您。繼續使用本應用程式即表示您同意更新後的隱私政策。" },
      { "heading": "聯絡我們", "content": "如有任何隱私相關問題，請聯繫 support@drivepass.app。" }
    ]
  },
  "terms": {
    "title": "服務條款",
    "lastUpdated": "最後更新：2026 年 3 月",
    "sections": [
      { "heading": "服務說明", "content": "駕照通是一款台灣駕照筆試備考應用程式，提供汽車版與機車版兩個獨立 App。功能包含題庫練習、模擬考試、錯題本、SM-2 智慧複習、每日挑戰等。題庫內容來源為交通部公路局公開題庫。" },
      { "heading": "使用資格", "content": "您必須年滿 13 歲才能使用駕照通。未滿 18 歲的使用者應在家長或法定監護人的同意與監督下使用本應用程式。" },
      { "heading": "使用規範", "content": "您同意僅將本應用程式用於個人學習目的。禁止複製、散布或商業性使用本應用程式中的題庫內容。" },
      { "heading": "應用內購買與退款", "content": "駕照通提供一次性的應用內購買項目（去廣告），此為永久性功能，非訂閱制，不會自動續費。所有付款透過 Apple App Store 或 Google Play Store 處理。退款請依照 Apple 或 Google 的退款政策辦理。更換裝置後，您可透過應用程式內的「恢復購買」功能，使用相同的 Apple ID 或 Google 帳號還原已購買的項目。" },
      { "heading": "免責聲明", "content": "本應用程式提供之題庫僅供練習參考，不保證與實際考試題目完全一致。題庫可能因交通部公路局更新而有時間差異。考試結果由交通部公路局決定，本應用程式不對考試結果負責。我們不保證應用程式將持續不中斷地提供服務，可能因維護、更新或其他原因暫時無法使用。" },
      { "heading": "責任限制", "content": "在法律允許的最大範圍內，駕照通及其開發者不對任何因使用或無法使用本應用程式而產生的間接、附帶、特殊、懲罰性或衍生性損害負責，包括但不限於資料遺失、利潤損失或考試未通過。" },
      { "heading": "智慧財產權", "content": "駕照通的品牌、設計、程式碼及原創內容受著作權法保護。題庫內容之著作權歸交通部公路局所有。" },
      { "heading": "第三方服務", "content": "本應用程式依賴 Apple App Store 和 Google Play Store 平台運作與散布。使用本應用程式時，您同時受到相應平台服務條款的約束。第三方服務（包括 Firebase、AdMob）的使用受其各自條款與隱私政策規範。" },
      { "heading": "準據法與管轄", "content": "本服務條款之解釋與適用，以及因本條款所生或與本條款相關之一切爭議，均以中華民國法律為準據法，並以台灣台北地方法院為第一審管轄法院。" },
      { "heading": "條款修改", "content": "我們保留隨時修改服務條款的權利。重大變更時將透過應用程式內通知。繼續使用本服務即表示您同意修改後的條款。" }
    ]
  }
}
```

- [ ] **Step 2: Verify the page renders**

Run: `npm run dev`
Check: `http://localhost:4321/zh/privacy` shows 10 sections, `http://localhost:4321/zh/terms` shows 10 sections.

- [ ] **Step 3: Commit**

```bash
git add src/i18n/locales/zh.json
```

Commit message: `feat: 補齊中文隱私政策與服務條款內容`

---

### Task 3: Update en.json — legal content enhancement

**Files:**
- Modify: `src/i18n/locales/en.json`

- [ ] **Step 1: Replace the `legal` block**

Replace the existing `legal` object with the enhanced English version:

```json
"legal": {
  "privacy": {
    "title": "Privacy Policy",
    "lastUpdated": "Last Updated: March 2026",
    "sections": [
      { "heading": "Data Collection", "content": "Drive Pass does not collect any personally identifiable information, including names, email addresses, or phone numbers. All learning progress and settings are stored locally on your device and are never uploaded to any server." },
      { "heading": "Analytics Services", "content": "We use Google Firebase services to improve the product experience. Firebase Analytics collects anonymous app usage statistics such as feature usage frequency and screen views — this data cannot identify individual users. Firebase Crashlytics automatically collects crash reports when the app encounters errors, including device model, OS version, and error stack information, to help us fix issues and improve stability." },
      { "heading": "Advertising", "content": "This app uses Google AdMob to display ads. AdMob may collect your advertising identifier (IDFA on iOS or GAID on Android) to deliver relevant ads. On iOS devices, we will request your consent through the App Tracking Transparency (ATT) framework before any tracking occurs. You can disable personalized ads at any time in your device's privacy settings. After purchasing the ad-removal option, no advertising modules will be loaded." },
      { "heading": "In-App Purchases", "content": "Drive Pass offers a one-time in-app purchase to remove ads. All payments are processed through the Apple App Store or Google Play Store — we do not collect, process, or store any payment information or credit card data. Purchase records are tied to your Apple ID or Google account and can be restored using the \"Restore Purchases\" feature within the app." },
      { "heading": "Location Information", "content": "The \"Driving School Map\" feature in Drive Pass Car accesses your device's GPS location only after you explicitly grant permission, solely to calculate distances to nearby driving schools. Location data is never stored, uploaded, or shared with any third party. You can revoke location permission at any time in your device settings. Drive Pass Moto does not use location features." },
      { "heading": "Data Storage", "content": "All question bank data, learning progress, and mock exam records are stored on your device. Uninstalling the app will delete all local data." },
      { "heading": "User Rights", "content": "You can delete all local data at any time by uninstalling the app. You can also reset your advertising identifier or disable personalized ad tracking in your device's privacy settings to limit data collection by third-party services." },
      { "heading": "Children's Privacy", "content": "Drive Pass is not designed for children under 13 years of age. Taiwan regulations require a minimum age of 16 for motorcycle licenses and 18 for car licenses. We do not knowingly collect any information from children under 13." },
      { "heading": "Policy Changes", "content": "We may update this privacy policy from time to time. Significant changes will be communicated through in-app notifications. Continued use of the app constitutes your acceptance of the updated privacy policy." },
      { "heading": "Contact Us", "content": "If you have any privacy-related questions, please contact support@drivepass.app." }
    ]
  },
  "terms": {
    "title": "Terms of Service",
    "lastUpdated": "Last Updated: March 2026",
    "sections": [
      { "heading": "Service Description", "content": "Drive Pass is a Taiwan driver's license written test preparation app available in two separate apps: Car Edition and Motorcycle Edition. Features include question bank practice, mock exams, wrong answer notebook, SM-2 spaced repetition review, daily challenges, and more. The question bank content is sourced from the official question pool published by the Directorate General of Highways, MOTC." },
      { "heading": "Eligibility", "content": "You must be at least 13 years old to use Drive Pass. Users under 18 should use this app with the consent and supervision of a parent or legal guardian." },
      { "heading": "Usage Guidelines", "content": "You agree to use this app solely for personal learning purposes. Copying, distributing, or commercially using the question bank content in this app is prohibited." },
      { "heading": "In-App Purchases & Refunds", "content": "Drive Pass offers a one-time in-app purchase item (ad removal). This is a permanent feature, not a subscription, and will not auto-renew. All payments are processed through the Apple App Store or Google Play Store. For refunds, please follow Apple's or Google's respective refund policies. After switching devices, you can use the \"Restore Purchases\" feature to restore purchased items using the same Apple ID or Google account." },
      { "heading": "Disclaimer", "content": "The question bank provided by this app is for practice reference only and is not guaranteed to be identical to actual exam questions. The question bank may have time delays due to updates by the Directorate General of Highways, MOTC. Exam results are determined by the Directorate General of Highways — this app is not responsible for exam outcomes. We do not guarantee uninterrupted availability of the app, which may be temporarily unavailable due to maintenance, updates, or other reasons." },
      { "heading": "Limitation of Liability", "content": "To the maximum extent permitted by law, Drive Pass and its developers shall not be liable for any indirect, incidental, special, punitive, or consequential damages arising from the use or inability to use this app, including but not limited to data loss, loss of profits, or failure to pass an exam." },
      { "heading": "Intellectual Property", "content": "The Drive Pass brand, design, code, and original content are protected by copyright law. The copyright of the question bank content belongs to the Directorate General of Highways, MOTC." },
      { "heading": "Third-Party Services", "content": "This app relies on the Apple App Store and Google Play Store platforms for operation and distribution. By using this app, you are also subject to the respective platform's terms of service. The use of third-party services (including Firebase and AdMob) is governed by their respective terms and privacy policies." },
      { "heading": "Governing Law & Jurisdiction", "content": "The interpretation and application of these terms, and any disputes arising from or related to these terms, shall be governed by the laws of the Republic of China (Taiwan), with the Taipei District Court of Taiwan as the court of first instance." },
      { "heading": "Modification of Terms", "content": "We reserve the right to modify these terms of service at any time. Significant changes will be communicated through in-app notifications. Continued use of this service constitutes your acceptance of the modified terms." }
    ]
  }
}
```

- [ ] **Step 2: Verify the page renders**

Run: `npm run dev`
Check: `http://localhost:4321/en/privacy` and `http://localhost:4321/en/terms` show 10 sections each.

- [ ] **Step 3: Commit**

```bash
git add src/i18n/locales/en.json
```

Commit message: `feat: 補齊英文隱私政策與服務條款內容`

---

### Task 4: Update vi.json, th.json, id.json — legal content enhancement

**Files:**
- Modify: `src/i18n/locales/vi.json`
- Modify: `src/i18n/locales/th.json`
- Modify: `src/i18n/locales/id.json`

- [ ] **Step 1: Replace the `legal` block in vi.json**

Replace the existing `legal` object with the enhanced Vietnamese version. Translate all 10 privacy sections and 10 terms sections from the English version, maintaining the same structure and key names. Use natural Vietnamese that a native speaker would find clear.

- [ ] **Step 2: Replace the `legal` block in th.json**

Same as above but in Thai.

- [ ] **Step 3: Replace the `legal` block in id.json**

Same as above but in Indonesian.

- [ ] **Step 4: Verify all 3 locales render**

Run: `npm run dev`
Check: `/vi/privacy`, `/th/privacy`, `/id/privacy` each show 10 sections.
Check: `/vi/terms`, `/th/terms`, `/id/terms` each show 10 sections.

- [ ] **Step 5: Commit**

```bash
git add src/i18n/locales/vi.json src/i18n/locales/th.json src/i18n/locales/id.json
```

Commit message: `feat: 補齊越南文、泰文、印尼文隱私政策與服務條款內容`

---

### Task 5: Create AboutPage.astro + page files

**Files:**
- Create: `src/components/AboutPage.astro`
- Create: `src/pages/zh/about.astro`
- Create: `src/pages/en/about.astro`
- Create: `src/pages/vi/about.astro`
- Create: `src/pages/th/about.astro`
- Create: `src/pages/id/about.astro`

- [ ] **Step 1: Create AboutPage.astro**

This component follows the same layout pattern as LegalPage but with richer visual content (icons for highlights). Supports `?embed=true`.

```astro
---
import BaseLayout from '../layouts/BaseLayout.astro';
import Nav from './Nav.astro';
import Footer from './Footer.astro';
import { getTranslations, t } from '../i18n/translations';
import type { Locale } from '../i18n/config';

interface Props {
  locale: string;
}

const { locale } = Astro.props;
const tr = getTranslations(locale as Locale);
const embed = Astro.url.searchParams.get('embed') === 'true';

const title = t(tr, 'aboutPage.title');
const currentPath = '/about';
const translations = tr as Record<string, any>;
const highlights: { icon: string; title: string; description: string }[] = translations.aboutPage?.highlights ?? [];
---
<BaseLayout
  title={`${title} — Drive Pass`}
  description={t(tr, 'aboutPage.mission')}
  locale={locale}
  currentPath={currentPath}
>
  {!embed && <Nav locale={locale} currentPath={currentPath} />}

  <article class="bg-bg-surface px-4 pb-16 pt-12 sm:px-6 lg:px-8">
    <div class="mx-auto max-w-2xl">
      <!-- Mission -->
      <h1 class="text-3xl font-bold text-text-primary sm:text-4xl">{title}</h1>
      <p class="mt-4 leading-relaxed text-text-secondary">{t(tr, 'aboutPage.mission')}</p>

      <!-- Products -->
      <section class="mt-12">
        <h2 class="text-lg font-semibold text-text-primary">{t(tr, 'aboutPage.productsTitle')}</h2>
        <div class="mt-4 space-y-4">
          <div class="rounded-xl border border-border-subtle bg-bg-muted p-4">
            <div class="flex items-center gap-2">
              <span class="h-3 w-3 rounded-full bg-car"></span>
              <span class="font-medium text-text-primary">{t(tr, 'aboutPage.carName')}</span>
            </div>
            <p class="mt-1 text-sm text-text-secondary">{t(tr, 'aboutPage.carDescription')}</p>
          </div>
          <div class="rounded-xl border border-border-subtle bg-bg-muted p-4">
            <div class="flex items-center gap-2">
              <span class="h-3 w-3 rounded-full bg-moto"></span>
              <span class="font-medium text-text-primary">{t(tr, 'aboutPage.motoName')}</span>
            </div>
            <p class="mt-1 text-sm text-text-secondary">{t(tr, 'aboutPage.motoDescription')}</p>
          </div>
        </div>
      </section>

      <!-- Why Drive Pass -->
      <section class="mt-12">
        <h2 class="text-lg font-semibold text-text-primary">{t(tr, 'aboutPage.whyTitle')}</h2>
        <div class="mt-4 grid gap-4 sm:grid-cols-2">
          {highlights.map((item) => (
            <div class="rounded-xl border border-border-subtle bg-bg-muted p-4">
              <p class="font-medium text-text-primary">{item.title}</p>
              <p class="mt-1 text-sm text-text-secondary">{item.description}</p>
            </div>
          ))}
        </div>
      </section>

      <!-- Contact -->
      <section class="mt-12">
        <h2 class="text-lg font-semibold text-text-primary">{t(tr, 'aboutPage.contactTitle')}</h2>
        <p class="mt-2 text-text-secondary">
          <a href="mailto:support@drivepass.app" class="text-car underline hover:opacity-80">support@drivepass.app</a>
        </p>
      </section>
    </div>
  </article>

  {!embed && <Footer locale={locale} />}
</BaseLayout>
```

- [ ] **Step 2: Create 5 page wrapper files**

Each file follows the 3-line pattern. Example for `src/pages/zh/about.astro`:

```astro
---
import AboutPage from '../../components/AboutPage.astro';
---
<AboutPage locale="zh" />
```

Create identical files for `en`, `vi`, `th`, `id` — only changing the locale string.

- [ ] **Step 3: Commit**

```bash
git add src/components/AboutPage.astro src/pages/*/about.astro
```

Commit message: `feat: 新增 About 頁面元件與 5 語系 page files`

---

### Task 6: Create FaqPage.astro + page files

**Files:**
- Create: `src/components/FaqPage.astro`
- Create: `src/pages/zh/faq.astro`
- Create: `src/pages/en/faq.astro`
- Create: `src/pages/vi/faq.astro`
- Create: `src/pages/th/faq.astro`
- Create: `src/pages/id/faq.astro`

- [ ] **Step 1: Create FaqPage.astro**

Uses `<details>/<summary>` for accordion — no JS needed. Supports `?embed=true`.

```astro
---
import BaseLayout from '../layouts/BaseLayout.astro';
import Nav from './Nav.astro';
import Footer from './Footer.astro';
import { getTranslations, t } from '../i18n/translations';
import type { Locale } from '../i18n/config';

interface Props {
  locale: string;
}

const { locale } = Astro.props;
const tr = getTranslations(locale as Locale);
const embed = Astro.url.searchParams.get('embed') === 'true';

const title = t(tr, 'faqPage.title');
const currentPath = '/faq';
const translations = tr as Record<string, any>;
const items: { question: string; answer: string }[] = translations.faqPage?.items ?? [];
---
<BaseLayout
  title={`${title} — Drive Pass`}
  description={title}
  locale={locale}
  currentPath={currentPath}
>
  {!embed && <Nav locale={locale} currentPath={currentPath} />}

  <article class="bg-bg-surface px-4 pb-16 pt-12 sm:px-6 lg:px-8">
    <div class="mx-auto max-w-2xl">
      <h1 class="text-3xl font-bold text-text-primary sm:text-4xl">{title}</h1>

      <div class="mt-10 divide-y divide-border-subtle">
        {items.map((item) => (
          <details class="group py-4">
            <summary class="flex cursor-pointer items-center justify-between text-text-primary font-medium list-none">
              <span>{item.question}</span>
              <span class="ml-4 shrink-0 text-text-tertiary transition-transform duration-200 group-open:rotate-45">+</span>
            </summary>
            <p class="mt-3 leading-relaxed text-text-secondary" set:html={item.answer.replace(
              /([a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,})/g,
              '<a href="mailto:$1" class="text-car underline hover:opacity-80">$1</a>'
            )} />
          </details>
        ))}
      </div>
    </div>
  </article>

  {!embed && <Footer locale={locale} />}
</BaseLayout>
```

- [ ] **Step 2: Create 5 page wrapper files**

Example for `src/pages/zh/faq.astro`:

```astro
---
import FaqPage from '../../components/FaqPage.astro';
---
<FaqPage locale="zh" />
```

Create identical files for `en`, `vi`, `th`, `id` — only changing the locale string.

- [ ] **Step 3: Commit**

```bash
git add src/components/FaqPage.astro src/pages/*/faq.astro
```

Commit message: `feat: 新增 FAQ 頁面元件與 5 語系 page files`

---

### Task 7: Add aboutPage + faqPage translations to zh.json

**Files:**
- Modify: `src/i18n/locales/zh.json`

- [ ] **Step 1: Add `aboutPage` block**

Insert after the `legal` block, before `notFound`:

```json
"aboutPage": {
  "title": "關於駕照通",
  "mission": "我們相信，每個人都值得擁有一個聰明的備考夥伴。駕照通結合科學的 SM-2 間隔重複演算法與直覺化的使用體驗，讓準備駕照筆試不再是痛苦的背誦，而是有系統的學習旅程。無論你的母語是什麼，我們都想幫助你順利通過台灣的駕照筆試。",
  "productsTitle": "我們的產品",
  "carName": "汽車駕照通",
  "carDescription": "台灣汽車駕照筆試完整備考方案。40 題模擬考、分類練習、錯題本、SM-2 智慧複習、每日挑戰，以及駕訓班地圖功能。",
  "motoName": "機車駕照通",
  "motoDescription": "台灣機車駕照筆試完整備考方案。50 題模擬考、分類練習、錯題本、SM-2 智慧複習、每日挑戰，以及獨家的危險感知影片題。",
  "whyTitle": "為什麼選擇駕照通",
  "highlights": [
    { "title": "完整官方題庫", "description": "題庫來自交通部公路局公開題庫，定期更新確保與最新考題一致。" },
    { "title": "科學複習方法", "description": "SM-2 間隔重複演算法，根據你的答題表現智慧安排最佳複習時機。" },
    { "title": "五種語言支援", "description": "繁體中文、English、Tiếng Việt、ไทย、Bahasa Indonesia，題目與介面完整翻譯。" },
    { "title": "完全離線可用", "description": "下載安裝後所有功能離線可用，通勤、等車隨時隨地練習。" }
  ],
  "contactTitle": "聯絡我們"
}
```

- [ ] **Step 2: Add `faqPage` block**

Insert after `aboutPage`, before `notFound`:

```json
"faqPage": {
  "title": "常見問題",
  "items": [
    {
      "question": "App 是免費的嗎？",
      "answer": "核心功能完全免費！包含完整題庫、模擬考、錯題本、SM-2 智慧複習、每日挑戰等。可透過應用內購買一次性去除廣告。"
    },
    {
      "question": "支援哪些語言？",
      "answer": "目前支援繁體中文、English、Tiếng Việt、ไทย、Bahasa Indonesia 五種語言，題目與介面都有完整翻譯。"
    },
    {
      "question": "題庫內容跟實際考試一樣嗎？",
      "answer": "是的！題庫來源為交通部公路局公開題庫，定期更新確保與最新考題一致。"
    },
    {
      "question": "需要網路才能使用嗎？",
      "answer": "下載安裝後，所有題庫和功能都可以離線使用，不需要網路連線。"
    },
    {
      "question": "汽車版和機車版有什麼差別？",
      "answer": "汽車版為 40 題模擬考（每題 2.5 分、30 分鐘），並提供駕訓班地圖功能。機車版為 50 題模擬考（每題 2 分、40 分鐘），並包含台灣機車考試獨有的危險感知影片題。兩版及格分數皆為 85 分。"
    },
    {
      "question": "如何去除廣告？",
      "answer": "您可以在應用程式內透過一次性購買來永久去除廣告。這不是訂閱制，不會自動續費。購買後廣告將完全消失。"
    },
    {
      "question": "換手機後資料會不見嗎？",
      "answer": "學習進度儲存在裝置本機，換機後需要重新開始。但如果您購買過去廣告方案，可以在新手機上透過「恢復購買」功能使用相同的 Apple ID 或 Google 帳號還原。"
    },
    {
      "question": "如何回報問題或提供建議？",
      "answer": "歡迎寄信到 support@drivepass.app，我們會盡快回覆您。"
    }
  ]
}
```

- [ ] **Step 3: Add footer translation keys**

Add `about` and `faq` keys to the `footer` object:

```json
"footer": {
  ...existing keys...,
  "about": "關於我們",
  "faq": "常見問題"
}
```

- [ ] **Step 4: Verify About and FAQ pages render**

Run: `npm run dev`
Check:
- `http://localhost:4321/zh/about` — shows all 4 sections
- `http://localhost:4321/zh/about?embed=true` — no Nav/Footer
- `http://localhost:4321/zh/faq` — shows 8 FAQ items with accordion
- `http://localhost:4321/zh/faq?embed=true` — no Nav/Footer

- [ ] **Step 5: Commit**

```bash
git add src/i18n/locales/zh.json
```

Commit message: `feat: 新增中文 About、FAQ 翻譯與 footer 連結 key`

---

### Task 8: Add aboutPage + faqPage translations to en.json

**Files:**
- Modify: `src/i18n/locales/en.json`

- [ ] **Step 1: Add `aboutPage` block**

```json
"aboutPage": {
  "title": "About Drive Pass",
  "mission": "We believe everyone deserves a smart study companion. Drive Pass combines the science of SM-2 spaced repetition with an intuitive user experience, turning driver's license test prep from painful memorization into a structured learning journey. No matter what language you speak, we want to help you pass Taiwan's driver's license written test.",
  "productsTitle": "Our Products",
  "carName": "Drive Pass Car",
  "carDescription": "Complete preparation for Taiwan's car driver's license written test. Features 40-question mock exams, categorized practice, wrong answer notebook, SM-2 smart review, daily challenges, and a driving school map.",
  "motoName": "Drive Pass Moto",
  "motoDescription": "Complete preparation for Taiwan's motorcycle driver's license written test. Features 50-question mock exams, categorized practice, wrong answer notebook, SM-2 smart review, daily challenges, and exclusive hazard perception video questions.",
  "whyTitle": "Why Drive Pass",
  "highlights": [
    { "title": "Complete Official Question Bank", "description": "Questions sourced from the official Directorate General of Highways question pool, updated regularly to match the latest exam content." },
    { "title": "Scientific Review Method", "description": "SM-2 spaced repetition algorithm intelligently schedules optimal review times based on your performance." },
    { "title": "Five Languages Supported", "description": "繁體中文, English, Tiếng Việt, ไทย, Bahasa Indonesia — both questions and interface fully translated." },
    { "title": "Fully Offline", "description": "All features available offline after installation. Practice anytime, anywhere — on your commute or while waiting." }
  ],
  "contactTitle": "Contact Us"
}
```

- [ ] **Step 2: Add `faqPage` block**

```json
"faqPage": {
  "title": "Frequently Asked Questions",
  "items": [
    {
      "question": "Is the app free?",
      "answer": "Core features are completely free! This includes the full question bank, mock exams, wrong answer notebook, SM-2 smart review, and daily challenges. You can remove ads with a one-time in-app purchase."
    },
    {
      "question": "Which languages are supported?",
      "answer": "The app currently supports five languages: 繁體中文, English, Tiếng Việt, ไทย, and Bahasa Indonesia. Both the questions and the interface are fully translated."
    },
    {
      "question": "Are the questions the same as the actual exam?",
      "answer": "Yes! The question bank is sourced from the official Directorate General of Highways (MOTC) question pool and is updated regularly to stay aligned with the latest exam content."
    },
    {
      "question": "Does it require an internet connection?",
      "answer": "After installation, all questions and features are available offline — no internet connection required."
    },
    {
      "question": "What's the difference between the Car and Motorcycle editions?",
      "answer": "The Car edition has 40-question mock exams (2.5 points each, 30 minutes) and includes a driving school map feature. The Motorcycle edition has 50-question mock exams (2 points each, 40 minutes) and includes exclusive hazard perception video questions unique to Taiwan's motorcycle exam. Both require 85 points to pass."
    },
    {
      "question": "How do I remove ads?",
      "answer": "You can permanently remove ads through a one-time in-app purchase. This is not a subscription and will not auto-renew. After purchase, all ads will be completely removed."
    },
    {
      "question": "Will I lose my data when switching phones?",
      "answer": "Learning progress is stored locally on your device, so you'll need to start over on a new phone. However, if you've purchased the ad-removal option, you can restore it on your new device using the \"Restore Purchases\" feature with the same Apple ID or Google account."
    },
    {
      "question": "How can I report issues or provide feedback?",
      "answer": "Please email us at support@drivepass.app — we'll get back to you as soon as possible."
    }
  ]
}
```

- [ ] **Step 3: Add footer translation keys**

Add `about` and `faq` keys to the `footer` object:

```json
"footer": {
  ...existing keys...,
  "about": "About",
  "faq": "FAQ"
}
```

- [ ] **Step 4: Verify**

Run: `npm run dev`
Check: `http://localhost:4321/en/about` and `http://localhost:4321/en/faq` render correctly.

- [ ] **Step 5: Commit**

```bash
git add src/i18n/locales/en.json
```

Commit message: `feat: 新增英文 About、FAQ 翻譯與 footer 連結 key`

---

### Task 9: Add aboutPage + faqPage translations to vi.json, th.json, id.json

**Files:**
- Modify: `src/i18n/locales/vi.json`
- Modify: `src/i18n/locales/th.json`
- Modify: `src/i18n/locales/id.json`

- [ ] **Step 1: Add `aboutPage`, `faqPage`, and footer keys to vi.json**

Translate all content from the English version into natural Vietnamese. Use the same JSON structure and key names. Ensure `aboutPage.highlights` array has 4 items and `faqPage.items` array has 8 items.

Footer keys:
```json
"about": "Giới thiệu",
"faq": "Câu hỏi thường gặp"
```

- [ ] **Step 2: Add `aboutPage`, `faqPage`, and footer keys to th.json**

Same structure, translated to Thai.

Footer keys:
```json
"about": "เกี่ยวกับเรา",
"faq": "คำถามที่พบบ่อย"
```

- [ ] **Step 3: Add `aboutPage`, `faqPage`, and footer keys to id.json**

Same structure, translated to Indonesian.

Footer keys:
```json
"about": "Tentang Kami",
"faq": "FAQ"
```

- [ ] **Step 4: Verify all 3 locales**

Run: `npm run dev`
Check all 6 pages: `/vi/about`, `/vi/faq`, `/th/about`, `/th/faq`, `/id/about`, `/id/faq`

- [ ] **Step 5: Commit**

```bash
git add src/i18n/locales/vi.json src/i18n/locales/th.json src/i18n/locales/id.json
```

Commit message: `feat: 新增越南文、泰文、印尼文 About、FAQ 翻譯`

---

### Task 10: Update Footer with About & FAQ links

**Files:**
- Modify: `src/components/Footer.astro`

- [ ] **Step 1: Add About and FAQ links to the Legal column**

In `Footer.astro`, add two `<li>` items after the Terms link (inside the Legal column `<ul>`):

```astro
<!-- Column 3: Legal -->
<div>
  <h3 class="mb-4 text-sm font-semibold uppercase tracking-wider text-[#71717A]">
    {t(tr, 'footer.legal')}
  </h3>
  <ul class="space-y-2 text-sm">
    <li>
      <a href={`/${locale}/privacy`} class="text-[#A1A1AA] transition-colors hover:text-[#F5F5F5]">
        {t(tr, 'footer.privacy')}
      </a>
    </li>
    <li>
      <a href={`/${locale}/terms`} class="text-[#A1A1AA] transition-colors hover:text-[#F5F5F5]">
        {t(tr, 'footer.terms')}
      </a>
    </li>
    <li>
      <a href={`/${locale}/about`} class="text-[#A1A1AA] transition-colors hover:text-[#F5F5F5]">
        {t(tr, 'footer.about')}
      </a>
    </li>
    <li>
      <a href={`/${locale}/faq`} class="text-[#A1A1AA] transition-colors hover:text-[#F5F5F5]">
        {t(tr, 'footer.faq')}
      </a>
    </li>
  </ul>
</div>
```

- [ ] **Step 2: Verify footer renders**

Run: `npm run dev`
Check: Footer on any page shows 4 links under Legal column. All links navigate correctly.

- [ ] **Step 3: Commit**

```bash
git add src/components/Footer.astro
```

Commit message: `feat: Footer 新增 About 與 FAQ 連結`

---

### Task 11: Mobile & embed verification

**Files:** None (verification only)

- [ ] **Step 1: Test mobile viewport**

Run: `npm run dev`
Open Chrome DevTools → Toggle device toolbar → select iPhone 14 (390px width).

Check the following pages at mobile width:
- `/zh/privacy` — text readable, no horizontal overflow, email is clickable link
- `/zh/terms` — all 10 sections display, text doesn't get cut off
- `/zh/about` — product cards stack vertically, highlight grid is 1-column on mobile
- `/zh/faq` — accordion items are tappable, expand/collapse works, sufficient tap target size

- [ ] **Step 2: Test embed mode on mobile**

Check the following at mobile width:
- `/zh/privacy?embed=true` — no Nav, no Footer, content starts near top
- `/zh/about?embed=true` — same
- `/zh/faq?embed=true` — same

- [ ] **Step 3: Test all locales briefly**

Spot-check `/en/about`, `/vi/faq`, `/th/privacy`, `/id/terms` — verify text renders without broken characters or layout issues.

- [ ] **Step 4: Run build to ensure no SSG errors**

Run: `npm run build`
Expected: Build succeeds with no errors. All new routes appear in the output.
