export type Mentor = {
  id: string;
  name: string;
  title: string;
  organization: string;
  bio: string | null;
  image: string | null;
};

export type Connection = {
  id: string;
  name: string;
  title: string;
};

export const mentors: Mentor[] = [
  {
    id: "maikel-m",
    name: "Maikel M.",
    title: "Mechanical Engineer",
    organization: "Stratford Preparatory",
    bio: null,
    image: null,
  },
  {
    id: "jacob-c",
    name: "Jacob C.",
    title: "Rotational Engineer",
    organization: "Boston Dynamics",
    bio: null,
    image: null,
  },
  {
    id: "jeffrey-d",
    name: "Jeffrey D.",
    title: "Engineering Teacher",
    organization: "Morris Hills High School",
    bio: null,
    image: null,
  },
  {
    id: "mayank-g",
    name: "Mayank G.",
    title: "Software Engineer",
    organization: "Veeva",
    bio: null,
    image: null,
  },
  {
    id: "owen-b",
    name: "Owen B.",
    title: "Pre-calc & Computer Science Teacher",
    organization: "Villa Walsh",
    bio: null,
    image: null,
  },
  {
    id: "thomas-shadis",
    name: "Thomas S.",
    title: "Engineer",
    organization: "Department of Defense, Picatinny Arsenal",
    bio: null,
    image: null,
  },
  // ADD NEW MENTORS HERE — copy an object above and fill in the fields
];

export const connections: Connection[] = [
  { id: "reagan-s", name: "Reagan S.", title: "Orthopedic Robotics" },
  { id: "brandi-p", name: "Brandi P.", title: "Innovation Director, UpLevel Ops" },
  { id: "vipul-p", name: "Vipul P.", title: "Principal Engineer, CISCO" },
  { id: "hyun-w", name: "Hyun W.", title: "Founder, Social Trade INC." },
  { id: "rashmi-s", name: "Rashmi S.", title: "Technologist, NASA JPL" },
  { id: "gianinder-s", name: "Gianinder S.", title: "Senior VP, SGS Consulting" },
  { id: "shivaprasad-t", name: "Shivaprasad T.", title: "Solution Architect" },
  { id: "prabhu-r", name: "Prabhu R.", title: "Loan Officer, E Mortgage" },
  { id: "varun-r", name: "Varun R.", title: "Freshman, UIUC" },
  { id: "dimitri-a", name: "Dimitri A.", title: "Engineer, NYU Abu Dhabi SEL" },
  { id: "tom-b", name: "Tom B.", title: "Engineer, Picatinny Arsenal" },
  { id: "cora-l", name: "Cora L.", title: "Operations Engineer, Stryker" },
  { id: "trivikrama-r", name: "Trivikrama R.", title: "Senior Engineer R&D, BD" },
  { id: "shreyas-a", name: "Shreyas A.", title: "Freshman, Georgia Tech" },
  { id: "swathi-v", name: "Swathi V.", title: "Data Scientist, Bayer" },
  { id: "michael-t", name: "Michael T.", title: "Senior Sales Training Manager" },
  { id: "elias-e", name: "Elias E.", title: "Security Operations Center Analyst" },
  { id: "nishka-s", name: "Nishka S.", title: "Senior, Fordham University" },
  { id: "krishna-k", name: "Krishna K.", title: "CTO, Centogene" },
  { id: "tim-l", name: "Tim L.", title: "Freshman, Purdue University" },
  { id: "kamal-s", name: "Kamal S.", title: "Director, Novartis" },
  { id: "alex-e", name: "Alex E.", title: "Author and Energy Expert" },
  { id: "vihas-v", name: "Vihas V.", title: "Freshman, UT Austin" },
  { id: "ramesh-n", name: "Ramesh N.", title: "Tapestry Inc." },
  { id: "ava-s", name: "Ava S.", title: "Legal Analyst, Goldman Sachs" },
  { id: "bailey-t", name: "Bailey T.", title: "Freshman, Georgia Tech" },
  { id: "deepti-b", name: "Deepti B.", title: "AI Engineer" },
  { id: "kush-c", name: "Kush C.", title: "Engineer, Broad Institute" },
  // ADD NEW CONNECTIONS HERE — copy an object above and fill in the fields
];
