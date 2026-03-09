export interface Location {
  slug: string;
  name: string;
  countyOrRegion?: string;
  latitude: number;
  longitude: number;
  noindex?: boolean;
}

export const PRIMARY_LOCATION: Location = {
  slug: "glasgow",
  name: "Glasgow",
  countyOrRegion: "City of Glasgow",
  latitude: 55.8642,
  longitude: -4.2518,
};

export const LOCATIONS: Location[] = [
  PRIMARY_LOCATION,
  {
    slug: "east-kilbride",
    name: "East Kilbride",
    countyOrRegion: "South Lanarkshire",
    latitude: 55.7644,
    longitude: -4.1769,
  },
  {
    slug: "paisley",
    name: "Paisley",
    countyOrRegion: "Renfrewshire",
    latitude: 55.8456,
    longitude: -4.4239,
  },
  {
    slug: "motherwell",
    name: "Motherwell",
    countyOrRegion: "North Lanarkshire",
    latitude: 55.7892,
    longitude: -3.9915,
  },
  {
    slug: "hamilton",
    name: "Hamilton",
    countyOrRegion: "South Lanarkshire",
    latitude: 55.7735,
    longitude: -4.0390,
  },
  {
    slug: "lanark",
    name: "Lanark",
    countyOrRegion: "South Lanarkshire",
    latitude: 55.6739,
    longitude: -3.7810,
  },
  {
    slug: "cumbernauld",
    name: "Cumbernauld",
    countyOrRegion: "North Lanarkshire",
    latitude: 55.9465,
    longitude: -3.9936,
  },
  {
    slug: "coatbridge",
    name: "Coatbridge",
    countyOrRegion: "North Lanarkshire",
    latitude: 55.8621,
    longitude: -4.0264,
  },
  {
    slug: "rutherglen",
    name: "Rutherglen",
    countyOrRegion: "South Lanarkshire",
    latitude: 55.8288,
    longitude: -4.2133,
  },
];

export const INDEXED_LOCATIONS = LOCATIONS.filter((l) => !l.noindex);

export function getLocationBySlug(slug: string): Location | undefined {
  return LOCATIONS.find((location) => location.slug === slug);
}
