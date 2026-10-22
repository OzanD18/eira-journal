import type { MetadataRoute } from "next";
import { siteConfig } from "@/config/site";

export default function sitemap(): MetadataRoute.Sitemap {
  return ["", "/about", "/masthead", "/regions", "/publications", "/newsletter/1"].map((path) => ({
    url: `${siteConfig.url}${path}`,
  }));
}
