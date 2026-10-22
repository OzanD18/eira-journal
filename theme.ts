export const themeConfig = {
  colors: {
    background: "#f7f3ec",
    surface: "#fcfaf6",
    foreground: "#14181f",
    muted: "#5f6976",
    border: "#cfcbc2",
    accent: "#123a69",
    accentSoft: "#d9e4f2",
    accentStrong: "#0d2746",
  },
  typography: {
    display: "Cormorant Garamond",
    body: "Source Serif 4",
    sans: "Source Sans 3",
    scale: {
      hero: "clamp(3rem, 7vw, 5.8rem)",
      headline: "clamp(2rem, 4.2vw, 3.6rem)",
      section: "clamp(1.2rem, 2vw, 1.6rem)",
      body: "1.08rem",
    },
  },
  spacing: {
    page: "min(92vw, 1280px)",
    reading: "min(92vw, 760px)",
  },
} as const;
