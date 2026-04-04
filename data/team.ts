export type TeamMember = {
  id: string;
  name: string;
  role: string;
  grade: string;
  bio: string | null;
  image: string | null;
  type: "member" | "coach" | "mentor" | "mascot";
};

export type SeasonRoster = {
  season: string; // e.g. "2025-26"
  label: string;  // e.g. "2025–26 Season"
  members: TeamMember[];
};

// Coaches/mentors/mascot — shared across seasons (update as needed)
const support: TeamMember[] = [
  {
    id: "jyoti-s",
    name: "Jyoti S.",
    role: "Coach",
    grade: "Business Owner",
    bio: null,
    image: null,
    type: "coach",
  },
  {
    id: "shikha-s",
    name: "Shikha S.",
    role: "Remote Coach",
    grade: "Professor (Retired)",
    bio: null,
    image: null,
    type: "coach",
  },
  {
    id: "thomas-s",
    name: "Thomas S.",
    role: "Mentor",
    grade: "Picatinny Arsenal",
    bio: null,
    image: null,
    type: "mentor",
  },
  {
    id: "taffy",
    name: "Taffy",
    role: "Mascot",
    grade: "Araya's House",
    bio: null,
    image: null,
    type: "mascot",
  },
];

export const rosters: SeasonRoster[] = [
  // ── ADD NEW SEASON AT THE TOP ──────────────────────────────────────────────
  {
    season: "2026-27",
    label: "2026–27 Season",
    members: [
      {
        id: "samanyu-h",
        name: "Samanyu H.",
        role: "Design Lead",
        grade: "10th Grade",
        bio: null,
        image: null,
        type: "member",
      },
      {
        id: "araya-s",
        name: "Araya S.",
        role: "Build Lead",
        grade: "10th Grade",
        bio: null,
        image: null,
        type: "member",
      },
      {
        id: "nikhil-m",
        name: "Nikhil M.",
        role: "Programming Lead",
        grade: "11th Grade",
        bio: null,
        image: null,
        type: "member",
      },
      {
        id: "rohinish-r",
        name: "Rohinish R.",
        role: "Fundraising Lead",
        grade: "10th Grade",
        bio: null,
        image: null,
        type: "member",
      },
      {
        id: "arush",
        name: "Arush V.",
        role: "xxxxx",
        grade: "10th Grade",
        bio: null,
        image: null,
        type: "member",
      },
      ...support,
    ],
  },
  {
    season: "2025-26",
    label: "2025–26 Season",
    members: [
      {
        id: "samanyu-h",
        name: "Samanyu H.",
        role: "Design Lead",
        grade: "9th Grade",
        bio: null,
        image: null,
        type: "member",
      },
      {
        id: "araya-s",
        name: "Araya S.",
        role: "Build Lead",
        grade: "9th Grade",
        bio: null,
        image: null,
        type: "member",
      },
      {
        id: "mayank-k",
        name: "Mayank K.",
        role: "CAD Lead",
        grade: "9th Grade",
        bio: null,
        image: null,
        type: "member",
      },
      {
        id: "nikhil-m",
        name: "Nikhil M.",
        role: "Programming Lead",
        grade: "10th Grade",
        bio: null,
        image: null,
        type: "member",
      },
      {
        id: "gautham-r",
        name: "Gautham R.",
        role: "Scout Lead",
        grade: "10th Grade",
        bio: null,
        image: null,
        type: "member",
      },
      {
        id: "anirudh-r",
        name: "Anirudh R.",
        role: "Outreach Lead",
        grade: "8th Grade",
        bio: null,
        image: null,
        type: "member",
      },
      {
        id: "ishaan-b",
        name: "Ishaan B.",
        role: "Connects Lead",
        grade: "8th Grade",
        bio: null,
        image: null,
        type: "member",
      },
      {
        id: "rohinish-r",
        name: "Rohinish R.",
        role: "Fundraising Lead",
        grade: "9th Grade",
        bio: null,
        image: null,
        type: "member",
      },
      ...support,
    ],
  },
  // ADD NEW SEASONS ABOVE THIS LINE — copy a season block above and update the fields
];

// Flat team export for any component that still needs it (coaches etc.)
export const team = rosters[0].members;
