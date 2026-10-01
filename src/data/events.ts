// One list for all events. The home page splits it into Upcoming / Recent at
// build time using `start` / `end`, so nothing needs to be moved by hand.
// Card style: every talk is tagged 'Talk'; `title` names the kind of talk and the host
// ("Dermatology Grand Rounds at …"), and the talk title goes in `summary`.
export interface EventEntry {
  tag: string;
  tagColor: 'teal' | 'pink' | 'neutral';  // past events always render neutral
  start: string;   // YYYY-MM-DD, or YYYY-MM when only the month is known
  end?: string;    // YYYY-MM-DD, for multi-day events
  where: string;   // "Asilomar, CA" or "Virtual"
  title: string;
  summary: string;
  href: string;
}

export const events: EventEntry[] = [
  {
    tag: 'Talk',
    tagColor: 'pink',
    start: '2026-10-23',
    where: 'Toronto, ON',
    title: 'Anthropology Colloquium at the University of Toronto',
    summary:
      '“Classical foundations and genomic frontiers: what pigmentation and hair morphology reveal about the genetics of complex traits.”',
    href: 'https://www.anthropology.utoronto.ca/events/colloquium-series-tina-lasisi',
  },
  {
    tag: 'Talk',
    tagColor: 'pink',
    start: '2026-11-05',
    where: 'Dallas, TX',
    title: 'Dermatology Grand Rounds at UT Southwestern Medical Center',
    summary: '“Human Variation in Skin and Hair Across Diagnostic Boundaries.”',
    href: 'https://cme.utsouthwestern.edu/rss-107-2026/node/137787',
  },
  {
    tag: 'Conference',
    tagColor: 'teal',
    start: '2026-11-18',
    end: '2026-11-22',
    where: 'St. Louis, MO',
    title: 'AAA Annual Meeting',
    summary: "I'll be at the American Anthropological Association's 2026 Annual Meeting.",
    href: 'https://annualmeeting.americananthro.org/',
  },
  {
    tag: 'Talk',
    tagColor: 'pink',
    start: '2026-12-02',
    where: 'Providence, RI',
    title: 'Computational Biology Seminar at Brown University',
    summary: 'Center for Computational Molecular Biology.',
    href: 'https://ccmb.brown.edu/events/computational-biology-seminar-series',
  },
  {
    tag: 'Conference',
    tagColor: 'teal',
    start: '2026-08-21',
    end: '2026-08-22',
    where: 'Chicago, IL',
    title: 'Midwest Population Genetics Meeting',
    summary: 'I was there judging the graduate student talks.',
    href: 'https://jkreinz.github.io/mwpg2026/',
  },
  {
    tag: 'Conference',
    tagColor: 'teal',
    start: '2026-06-09',
    end: '2026-06-12',
    where: 'Asilomar, CA',
    title: 'PEQG 2026',
    summary:
      'Population, Evolutionary, and Quantitative Genetics Conference. My postdoc, Yemko Pryor, presented our poster on network-based predictions of genetic constraint in melanogenesis.',
    href: 'https://genetics-gsa.org/peqg-2026/',
  },
  {
    tag: 'Talk',
    tagColor: 'pink',
    start: '2026-05-08',
    where: 'Virtual',
    title: 'ELSI Friday Forum',
    summary:
      '“Making Genomics Matter: Science, Storytelling, and Public Engagement.” With Janina Jeff Ringo, PhD, moderated by Grace Byfield, PhD. Recording available.',
    href: 'https://elsihub.org/video/may-2026-eff-making-genomics-matter-science-storytelling-and-public-engagement',
  },
];
