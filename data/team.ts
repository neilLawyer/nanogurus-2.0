export type TeamMember = {
  id: string;
  name: string;
  role: string;
  grade: string;
  bio: string | null;
  image: string | null;
  imagePosition?: string;
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
        bio: "Samanyu is currently a sophomore at the Academy for Mathematics, Science, and Engineering. He mainly works on the hardware of the robot and is interested in prototyping different designs on CAD. Outside of robotics, he likes to go running, cooking, and listening to music.",
        image: "/images/team/Samanyu.jpg",
        imagePosition: "object-[center_20%]",
        type: "member",
      },
      {
        id: "araya-s",
        name: "Araya S.",
        role: "Build Lead",
        grade: "10th Grade",
        bio: "Araya is currently a sophomore at Villa Walsh Academy. She is interested in the mechanical aspect of robotics and enjoys designing and building. In her free time, she likes bouldering, playing golf, playing the piano, watching movies and TV, and listening to music.",
        image: "/images/team/Araya.jpg",
        type: "member",
      },
      {
        id: "nikhil-m",
        name: "Nikhil M.",
        role: "Programming Lead",
        grade: "11th Grade",
        bio: "Nikhil is currently a junior at Parsippany Hills High School. He works on programming the robot and is interested in coding various projects. In his free time he enjoys practicing Taekwondo, playing badminton and watching TV.",
        image: "/images/team/Nikhil.jpg",
        type: "member",
      },
      {
        id: "rohinish-r",
        name: "Rohinish R.",
        role: "Fundraising Lead",
        grade: "10th Grade",
        bio: "Rohinish is currently a sophomore at the Academy for Mathematics, Science, and Engineering. He is interested in the mechanical and software aspects of the robot. In his free time he enjoys swimming, building Legos, and running his Etsy shop.",
        image: "/images/team/Rohinish.jpg",
        type: "member",
      },
      {
        id: "arush",
        name: "Arush V.",
        role: "xxxxx",
        grade: "10th Grade",
        bio: "Arush is currently a sophomore at the Academy for Mathematics, Science, and Engineering. Primarily working on the hardware of the robot, you will often see him prototyping different designs with CAD or 3D printing at home. Outside of robotics, he loves to play video games and listen to music.",
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
