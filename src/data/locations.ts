export interface Location {
  slug: string;
  name: string;
  countyOrRegion?: string;
  latitude: number;
  longitude: number;
  noindex?: boolean;
}

export const PRIMARY_LOCATION: Location = {
  slug: "colchester",
  name: "Colchester",
  countyOrRegion: "Essex",
  latitude: 51.8949,
  longitude: 0.9023,
};

export const LOCATIONS: Location[] = [
  PRIMARY_LOCATION,
  {
    slug: "wivenhoe",
    name: "Wivenhoe",
    countyOrRegion: "Essex",
    latitude: 51.8570,
    longitude: 0.9570,
  },
  {
    slug: "west-mersea",
    name: "West Mersea",
    countyOrRegion: "Essex",
    latitude: 51.7802,
    longitude: 0.9198,
  },
  {
    slug: "tiptree",
    name: "Tiptree",
    countyOrRegion: "Essex",
    latitude: 51.8133,
    longitude: 0.7438,
  },
  {
    slug: "witham",
    name: "Witham",
    countyOrRegion: "Essex",
    latitude: 51.7968,
    longitude: 0.6404,
  },
  {
    slug: "kelvedon",
    name: "Kelvedon",
    countyOrRegion: "Essex",
    latitude: 51.8363,
    longitude: 0.7030,
  },
  {
    slug: "marks-tey",
    name: "Marks Tey",
    countyOrRegion: "Essex",
    latitude: 51.8759,
    longitude: 0.7673,
  },
  {
    slug: "brightlingsea",
    name: "Brightlingsea",
    countyOrRegion: "Essex",
    latitude: 51.8110,
    longitude: 1.0260,
  },
  {
    slug: "manningtree",
    name: "Manningtree",
    countyOrRegion: "Essex",
    latitude: 51.9454,
    longitude: 1.0636,
  },
];

export const INDEXED_LOCATIONS = LOCATIONS.filter((l) => !l.noindex);

export function getLocationBySlug(slug: string): Location | undefined {
  return LOCATIONS.find((location) => location.slug === slug);
}
