export type Outreach = {
  id: string;
  title: string;
  location: string;
  date: string | null;
  description: string;
  highlights: string[];
  image: string | null;
  category: "school" | "community" | "cultural" | "international" | "hosting";
};

export const outreaches: Outreach[] = [
  {
    id: "parsippany-gro",
    title: "Parsippany Gifted and Talented Program",
    location: "Parsippany, NJ",
    date: null,
    description: "Partnered with Parsippany GRO to engage 10 elementary schools with 4 interactive STEM stations.",
    highlights: [
      "Coded EV3 robots",
      "CADed and 3D-printed Lego heads",
      "Built with LEGOs",
      "Drove FTC robots",
      "3 FLL teams starting next season",
    ],
    image: null,
    category: "school",
  },
  {
    id: "montville-boy-scouts",
    title: "Montville Boy Scouts",
    location: "Montville, NJ",
    date: null,
    description: "Community outreach introducing scouts to STEM and FTC robotics.",
    highlights: [],
    image: null,
    category: "community",
  },
  {
    id: "library-diwali",
    title: "Parsippany Library Diwali Event",
    location: "Parsippany, NJ",
    date: null,
    description: "Brought robotics and STEM to families through a cultural celebration. Distributed custom bookmarks and engaged attendees about FIRST.",
    highlights: [
      "Distributed custom FIRST bookmarks",
      "Answered questions about our personal experiences",
    ],
    image: null,
    category: "cultural",
  },
  {
    id: "trunk-or-treat",
    title: "Trunk or Treat",
    location: "Morris Plains, NJ",
    date: null,
    description: "Halloween-themed STEM community engagement with demo robot and Halloween-themed props.",
    highlights: [
      "Demo robot with Halloween props",
      "Collected interest forms",
      "Shared FIRST information with families",
    ],
    image: null,
    category: "community",
  },
  {
    id: "northvail-stem-fair",
    title: "Northvail Elementary School STEM Fair",
    location: "Northvale, NJ",
    date: null,
    description: "Engaged 80+ elementary children through 50 team-hours with hands-on STEM stations.",
    highlights: [
      "Students developed building skills",
      "Drove our outreach robot",
      "Learned about FLL and FTC",
      "Led to invitation to Lake Hiawatha STEAM Fair",
    ],
    image: null,
    category: "school",
  },
  {
    id: "parsippany-fall-festival",
    title: "Parsippany Fall Festival",
    location: "Parsippany, NJ",
    date: null,
    description: "Introduced FIRST to 3,000 people through creative, hands-on FTC and FLL robot activities.",
    highlights: [
      "3,000 people reached",
      "Hands-on FTC robot driving",
      "FLL-inspired challenges",
      "Recruited a new team member",
    ],
    image: null,
    category: "community",
  },
  // ADD NEW OUTREACH EVENTS HERE — copy an object above and fill in the fields
];
