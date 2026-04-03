export type TeamMember = {
  id: string;
  name: string;
  role: string;
  grade: string;
  bio: string | null;
  image: string | null;
  type: "member" | "coach" | "mentor" | "mascot";
};

export const team: TeamMember[] = [
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
    id: "mayank-k",
    name: "Mayank K.",
    role: "CAD Lead",
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
    id: "gautham-r",
    name: "Gautham R.",
    role: "Scout Lead",
    grade: "11th Grade",
    bio: null,
    image: null,
    type: "member",
  },
  {
    id: "anirudh-r",
    name: "Anirudh R.",
    role: "Outreach Lead",
    grade: "9th Grade",
    bio: null,
    image: null,
    type: "member",
  },
  {
    id: "ishaan-b",
    name: "Ishaan B.",
    role: "Connects Lead",
    grade: "9th Grade",
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
  // ADD NEW TEAM MEMBERS HERE — copy an object above, change the fields
];
