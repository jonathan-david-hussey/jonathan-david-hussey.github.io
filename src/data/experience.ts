/**
 * Single source of truth for the "years of experience" figure shown across the
 * site — the homepage hero and highlight stat, the about page, and the site
 * meta description all import from here so the number can never drift between
 * them.
 *
 * Career start: Logicalware, September 2011 (the earliest role in the Experience
 * section). The figure is computed at build time, so it advances automatically
 * each time the site is rebuilt.
 */
import { DateTime } from 'luxon';

export const CAREER_START_YEAR = DateTime.fromISO('2011-09-01');

export const yearsOfExperience: number = Math.floor(DateTime.utc().diff(CAREER_START_YEAR, 'years').years);
