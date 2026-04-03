export type EventStatus = "upcoming" | "completed" | "pending";

export type SeasonEvent = {
  id: string;
  title: string;
  date: string;
  location: string;
  status: EventStatus;
  description: string | null;
  image: string | null;
  season: "2025-26" | "2026-27";
};

export const events: SeasonEvent[] = [
  {
    id: "lake-hiawatha-2026",
    title: "Lake Hiawatha Elementary STEAM Fair",
    date: "March 27, 2026",
    location: "Lake Hiawatha, NJ",
    status: "upcoming",
    description: "Pending — check back soon for updates and photos!",
    image: null,
    season: "2025-26",
  },
  // ADD NEW EVENTS HERE — copy the object above and fill in the fields
  // For 2026-27 season events, set season: "2026-27"
];
