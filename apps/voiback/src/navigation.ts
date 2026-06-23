import { getPermalink } from './utils/permalinks';

export const headerData = {
  links: [
    { href: getPermalink('/#features') },
    { href: getPermalink('/faq') },
  ],
};

export const footerData = {
  links: [],
  secondaryLinks: [
    { href: getPermalink('/privacy') },
    { href: getPermalink('/terms') },
  ],
  socialLinks: [],
  footNote: `VOIBACK`,
};
