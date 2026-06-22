import type { Locale } from '../i18n/config';

export type ProjectStatus = 'live' | 'coming';

export interface Project {
  id: string;
  status: ProjectStatus;
  /** 站內或外部連結；coming soon 可省略。 */
  href?: string;
  /** 是否外部連結（新分頁開啟）。 */
  external?: boolean;
  emoji: string;
  name: Record<Locale, string>;
  tagline: Record<Locale, string>;
}

// 目前僅 salary_thief 已上線；舊專案待後續逐一以 Astro 重建，先標記為即將推出。
export const projects: Project[] = [
  {
    id: 'salary_thief',
    status: 'live',
    href: '/salary_thief/',
    emoji: '💰',
    name: { 'zh-TW': 'Salary Thief 摸魚帳本', en: 'Salary Thief' },
    tagline: {
      'zh-TW': '把上班時間換算成收入的療癒型計時 App',
      en: 'A playful timer that turns your work hours into earnings',
    },
  },
  {
    id: 'usj',
    status: 'coming',
    emoji: '🎢',
    name: { 'zh-TW': '日本環球影城等待時間', en: 'Universal Studios Japan Wait Times' },
    tagline: {
      'zh-TW': '即時查詢 USJ 各遊樂設施等待時間',
      en: 'Live ride wait times for USJ',
    },
  },
  {
    id: 'tds',
    status: 'coming',
    emoji: '🏰',
    name: { 'zh-TW': '東京迪士尼海洋等待時間', en: 'Tokyo DisneySea Wait Times' },
    tagline: {
      'zh-TW': '即時查詢 TDS 各遊樂設施等待時間',
      en: 'Live ride wait times for Tokyo DisneySea',
    },
  },
  {
    id: 'wea',
    status: 'coming',
    emoji: '🌤️',
    name: { 'zh-TW': '天氣助理', en: 'Weather Assistant' },
    tagline: {
      'zh-TW': '與昨日氣溫對比的貼心天氣 App',
      en: 'Weather with a friendly day-over-day comparison',
    },
  },
  {
    id: 'res',
    status: 'coming',
    emoji: '💧',
    name: { 'zh-TW': '水庫水情 e 把抓', en: 'Reservoir Watch' },
    tagline: {
      'zh-TW': '台灣即時水庫水情查詢',
      en: 'Real-time reservoir levels across Taiwan',
    },
  },
  {
    id: 'pet',
    status: 'coming',
    emoji: '🐾',
    name: { 'zh-TW': '浪浪不流浪', en: 'Adopt, Don’t Shop' },
    tagline: {
      'zh-TW': '台灣流浪動物認養資料庫',
      en: 'A directory of adoptable shelter animals in Taiwan',
    },
  },
];
