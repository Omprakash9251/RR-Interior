import { useEffect } from 'react';

export const SITE_URL = 'https://rrinterior.com';

/**
 * Keeps the title, description, canonical and Open Graph tags in step with the
 * current route. index.html ships the home-page values, so this only has to
 * correct them on other routes (and restore them on the way back).
 */
function setMeta(selector, attr, value) {
  const el = document.head.querySelector(selector);
  if (el) el.setAttribute(attr, value);
}

export function useSeo({ title, description, path }) {
  useEffect(() => {
    const url = `${SITE_URL}${path}`;

    document.title = title;
    setMeta('meta[name="description"]', 'content', description);
    setMeta('meta[property="og:title"]', 'content', title);
    setMeta('meta[property="og:description"]', 'content', description);
    setMeta('meta[property="og:url"]', 'content', url);
    setMeta('meta[name="twitter:title"]', 'content', title);
    setMeta('meta[name="twitter:description"]', 'content', description);
    setMeta('link[rel="canonical"]', 'href', url);
  }, [title, description, path]);
}
