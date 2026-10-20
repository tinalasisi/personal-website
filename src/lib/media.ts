import { video, podcasts, press } from '../data/media';

const MONTHS = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
const NBSP = '\u00a0';

/** "Feb 21" from YYYY-MM-DD */
export function monthDay(iso: string): string {
  return `${MONTHS[Number(iso.slice(5, 7)) - 1]}${NBSP}${Number(iso.slice(8, 10))}`;
}

/** "Jun 2023" from YYYY-MM or YYYY-MM-DD */
export function monthYear(iso: string): string {
  return `${MONTHS[Number(iso.slice(5, 7)) - 1]}${NBSP}${iso.slice(0, 4)}`;
}

export interface Highlight {
  kind: string;
  tagColor: 'teal' | 'pink' | 'neutral';
  source: string;
  title: string;
  when: string;
  href: string;
}

/** `featured` entries for the home page strip: TV & video, then podcasts, then press. */
export function mediaHighlights(): Highlight[] {
  return [
    ...video.filter((v) => v.featured).map((v) => ({
      kind: 'TV & video',
      tagColor: 'teal' as const,
      source: v.network,
      title: v.title,
      when: v.years,
      href: v.href,
    })),
    ...podcasts.filter((p) => p.featured).map((p) => ({
      kind: 'Podcast',
      tagColor: 'pink' as const,
      source: p.show,
      title: p.title,
      when: monthYear(p.date),
      href: p.web ?? p.apple ?? p.spotify ?? '/media#podcasts',
    })),
    ...press.filter((item) => item.featured).map((item) => ({
      kind: 'Press',
      tagColor: 'neutral' as const,
      source: item.outlet,
      title: item.headline,
      when: monthYear(item.date),
      href: item.href,
    })),
  ];
}
