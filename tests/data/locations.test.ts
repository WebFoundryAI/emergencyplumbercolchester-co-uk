import { describe, it, expect } from 'vitest';
import {
  LOCATIONS,
  INDEXED_LOCATIONS,
  PRIMARY_LOCATION,
  getLocationBySlug,
} from '../../src/data/locations';

describe('Locations Data', () => {
  describe('LOCATIONS array integrity', () => {
    it('contains exactly 9 locations', () => {
      expect(LOCATIONS).toHaveLength(9);
    });

    it('every location has a unique slug', () => {
      const slugs = LOCATIONS.map((l) => l.slug);
      expect(new Set(slugs).size).toBe(slugs.length);
    });

    it('every slug matches URL-safe pattern', () => {
      for (const loc of LOCATIONS) {
        expect(loc.slug).toMatch(/^[a-z0-9-]+$/);
      }
    });

    it('every location has countyOrRegion defined', () => {
      for (const loc of LOCATIONS) {
        expect(loc.countyOrRegion).toBeTruthy();
      }
    });
  });

  describe('PRIMARY_LOCATION', () => {
    it('is "colchester"', () => {
      expect(PRIMARY_LOCATION.slug).toBe('colchester');
    });

    it('is first in LOCATIONS array', () => {
      expect(LOCATIONS[0]).toBe(PRIMARY_LOCATION);
    });
  });

  describe('INDEXED_LOCATIONS', () => {
    it('contains all 9 locations', () => {
      expect(INDEXED_LOCATIONS).toHaveLength(9);
    });

    it('includes only locations without noindex', () => {
      for (const loc of INDEXED_LOCATIONS) {
        expect(loc.noindex).toBeFalsy();
      }
    });

    it('includes all location slugs', () => {
      const slugs = INDEXED_LOCATIONS.map((l) => l.slug);
      expect(slugs).toContain('colchester');
      expect(slugs).toContain('wivenhoe');
      expect(slugs).toContain('west-mersea');
      expect(slugs).toContain('tiptree');
      expect(slugs).toContain('witham');
      expect(slugs).toContain('kelvedon');
      expect(slugs).toContain('marks-tey');
      expect(slugs).toContain('brightlingsea');
      expect(slugs).toContain('manningtree');
    });
  });

  describe('getLocationBySlug', () => {
    it('returns correct location for "colchester"', () => {
      const loc = getLocationBySlug('colchester');
      expect(loc).toBeDefined();
      expect(loc!.name).toBe('Colchester');
    });

    it('returns correct location for "wivenhoe"', () => {
      const loc = getLocationBySlug('wivenhoe');
      expect(loc).toBeDefined();
      expect(loc!.name).toBe('Wivenhoe');
    });

    it('returns undefined for non-existent slug', () => {
      expect(getLocationBySlug('nonexistent')).toBeUndefined();
    });

    it('returns undefined for empty string', () => {
      expect(getLocationBySlug('')).toBeUndefined();
    });
  });
});
