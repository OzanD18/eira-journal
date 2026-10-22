/** Confirmed editorial roster supplied by the journal leadership, October 2026. */
export type RegionalDesk = {
  slug: string;
  name: string;
  editor: string;
  writers: string[];
  description: string;
};

export const coEditorsInChief = ["Ozan Demiroglu", "Rebecca Han"] as const;

export const regionalDesks: RegionalDesk[] = [
  {
    slug: "middle-east",
    name: "Middle East",
    editor: "Tvisha Jindal",
    writers: ["Cyrus Rahbari", "Maya Virani", "Amelia Weinhouse"],
    description: "Diplomacy, regional security, political economy, and societies across the Middle East.",
  },
  {
    slug: "europe",
    name: "Europe",
    editor: "Margaret Barg",
    writers: ["Sabrine Lane", "Savannah Smalley", "Kevin Cruz-Cristanto"],
    description: "European politics, institutions, security, and the continent's international relationships.",
  },
  {
    slug: "north-america",
    name: "North America",
    editor: "Mason Zelenko",
    writers: ["Leah Jacob", "Sophia Rodkin", "Nicholas Kupchan"],
    description: "Foreign policy, cross-border relations, and international political economy in North America.",
  },
  {
    slug: "africa",
    name: "Africa",
    editor: "Hugo Rosen",
    writers: ["Ellie Mendelson", "Eline Dovlo", "Andres Guzman Orosco"],
    description: "Governance, development, regional cooperation, and international affairs across Africa.",
  },
  {
    slug: "latin-america",
    name: "Latin America",
    editor: "Arish Ashraf",
    writers: ["Olivia Sopcic", "Sophie Fernandez", "Santiago de Leon-Zaspe"],
    description: "International relations, politics, development, and regional dynamics in Latin America.",
  },
  {
    slug: "asia",
    name: "Asia",
    editor: "Yoshi Ordonez",
    writers: ["Yejin Kee", "Vivika Arora", "Oliver Johnston"],
    description: "Diplomacy, security, economics, and regional affairs across Asia.",
  },
];

export const totalTeamMembers = coEditorsInChief.length + regionalDesks.reduce(
  (total, desk) => total + 1 + desk.writers.length,
  0,
);
