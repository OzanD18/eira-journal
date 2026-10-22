export type Publication = {
  slug: string;
  title: string;
  date: string;
  description: string;
  pdfPath: string;
  route: string;
};

export const publications: Publication[] = [
  {
    slug: "newsletter-1-middle-east",
    title: "Newsletter 1: Middle East",
    date: "2026-10",
    description: "The inaugural Eira Journal newsletter: an editor’s letter, plus reporting on Iran, Israel–Lebanon relations, and Yemen.",
    pdfPath: "/newsletters/eira-journal-newsletter-01-middle-east.pdf",
    route: "/newsletter/1",
  },
];
