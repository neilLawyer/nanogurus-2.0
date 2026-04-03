export type Sponsor = {
  id: string;
  name: string;
  logo: string | null;
  website: string | null;
  tier: "gold" | "silver" | "community";
};

export const sponsors: Sponsor[] = [
  { id: "kumon", name: "Kumon, Bridgewater", logo: null, website: null, tier: "community" },
  { id: "dodstem", name: "DoDSTEM — Department of Defense", logo: null, website: null, tier: "gold" },
  { id: "sgs", name: "SGS Consulting", logo: null, website: null, tier: "gold" },
  { id: "emortgage", name: "eMortgage Funding", logo: null, website: null, tier: "gold" },
  { id: "picatinny", name: "Picatinny STEM", logo: null, website: null, tier: "silver" },
  { id: "first", name: "FIRST Rookie Grant", logo: null, website: "https://firstinspires.org", tier: "silver" },
  // ADD NEW SPONSORS HERE — copy an object above and fill in the fields
];
