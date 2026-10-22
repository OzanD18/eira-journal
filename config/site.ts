const configuredUrl = process.env.NEXT_PUBLIC_SITE_URL;
const vercelProductionUrl = process.env.VERCEL_PROJECT_PRODUCTION_URL;
const vercelDeploymentUrl = process.env.VERCEL_URL;
const publicUrl = configuredUrl
  ? configuredUrl.replace(/\/$/, "")
  : vercelProductionUrl
    ? `https://${vercelProductionUrl}`
    : vercelDeploymentUrl
      ? `https://${vercelDeploymentUrl}`
      : "http://localhost:3000";

export const siteConfig = {
  name: "Eira Journal",
  shortName: "Eira Journal",
  tagline: "International affairs, examined from every region.",
  description: "An Emory student-run editorial publication exploring international affairs, regional politics, and global questions.",
  url: publicUrl,
} as const;
