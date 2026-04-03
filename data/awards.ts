export type CompetitionResult = {
  id: string;
  eventName: string;
  teamCount: number | null;
  placement: string | null;
  highlights: string[];
  awards: string[];
  image: string | null;
  featured: boolean;
};

export const results: CompetitionResult[] = [
  {
    id: "p2-4-league-meet",
    eventName: "P2-4 Upper Central League Meet",
    teamCount: 19,
    placement: "5th Overall",
    highlights: ["3rd best individual performance"],
    awards: [],
    image: null,
    featured: false,
  },
  {
    id: "p3-2-league-meet",
    eventName: "P3-2 Upper Central League Meet",
    teamCount: 25,
    placement: null,
    highlights: ["2nd best individual performance"],
    awards: [],
    image: null,
    featured: false,
  },
  {
    id: "morris-conference-tournament",
    eventName: "Morris Conference Upper Central League Tournament",
    teamCount: null,
    placement: "3rd Overall",
    highlights: [
      "Reached playoff bracket quarterfinals",
      "3rd best individual performance",
    ],
    awards: ["Think Award"],
    image: "/images/awards/tournament-team.jpg",
    featured: true,
  },
  // ADD NEW COMPETITION RESULTS HERE — copy an object above and fill in the fields
];
