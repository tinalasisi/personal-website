import type { EventEntry } from '../data/events';

const MONTHS = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
const NBSP = ' ';

/** Today's date as YYYY-MM-DD in Ann Arbor time (the build runs in UTC). */
export function todayISO(): string {
  return new Intl.DateTimeFormat('en-CA', { timeZone: 'America/Detroit' }).format(new Date());
}

function parts(iso: string) {
  const [y, m, d] = iso.split('-').map(Number);
  return { y, m, d };
}

/** Last day an event is still "upcoming". Month-only dates run to the end of the month. */
function lastDay(e: EventEntry): string {
  const iso = e.end ?? e.start;
  return iso.length === 7 ? `${iso}-31` : iso;
}

/** "Jun 9–12, 2026 · Asilomar, CA", "Nov 2, 2026 · Virtual", "May 2026 · Virtual" */
export function formatWhen(e: EventEntry): string {
  const s = parts(e.start);
  const mon = (m: number) => MONTHS[m - 1];
  let when: string;
  if (!s.d) {
    when = `${mon(s.m)} ${s.y}`;
  } else if (!e.end || e.end === e.start) {
    when = `${mon(s.m)}${NBSP}${s.d}, ${s.y}`;
  } else {
    const t = parts(e.end);
    if (t.y !== s.y) when = `${mon(s.m)}${NBSP}${s.d}, ${s.y} – ${mon(t.m)}${NBSP}${t.d}, ${t.y}`;
    else if (t.m !== s.m) when = `${mon(s.m)}${NBSP}${s.d} – ${mon(t.m)}${NBSP}${t.d}, ${s.y}`;
    else when = `${mon(s.m)}${NBSP}${s.d}–${t.d}, ${s.y}`;
  }
  return `${when} · ${e.where}`;
}

/**
 * Split events into upcoming (soonest first) and recent (newest first) as of
 * build time, so finished events move to "Recent" on the next deploy without
 * editing the data file.
 */
export function splitEvents(events: EventEntry[], today = todayISO(), recentLimit = 6) {
  // Fail the build on a typo'd date rather than rendering "undefined" or mis-sorting.
  for (const e of events) {
    if (!/^\d{4}-\d{2}(-\d{2})?$/.test(e.start) || (e.end && !/^\d{4}-\d{2}-\d{2}$/.test(e.end))) {
      throw new Error(`events.ts: bad date on "${e.title}" (start "${e.start}", end "${e.end}")`);
    }
  }
  const upcoming = events
    .filter((e) => lastDay(e) >= today)
    .sort((a, b) => a.start.localeCompare(b.start));
  const recent = events
    .filter((e) => lastDay(e) < today)
    .sort((a, b) => b.start.localeCompare(a.start))
    .slice(0, recentLimit);
  return { upcoming, recent };
}
