export type CollaborationTeam = {
  id: string;
  teamNumber: string;
  teamName: string;
  awards: string[];
  description: string | null;
  image: string | null;
};

export const collaborations: CollaborationTeam[] = [
  {
    id: "mech-warriors",
    teamNumber: "#31823",
    teamName: "Mech Warriors",
    awards: ["Connect Award"],
    description: null,
    image: null,
  },
  {
    id: "invincibles",
    teamNumber: "#31074",
    teamName: "Invincibles",
    awards: ["Think Award"],
    description: null,
    image: null,
  },
  {
    id: "nanogurus-original",
    teamNumber: "#4347",
    teamName: "NanoGurus",
    awards: ["Reach Award", "Control Award"],
    description: null,
    image: null,
  },
  // ADD NEW COLLABORATION TEAMS HERE — copy an object above and fill in the fields
];
