import type { Metadata } from "next";
import type { CSSProperties, ReactNode } from "react";
import { SiteFooter } from "@/components/layout/SiteFooter";
import { SiteHeader } from "@/components/layout/SiteHeader";
import { siteConfig } from "@/config/site";
import { themeConfig } from "@/config/theme";
import "./globals.css";

export const metadata: Metadata = {
  title: { default: siteConfig.name, template: `%s | ${siteConfig.shortName}` },
  description: siteConfig.description,
  metadataBase: new URL(siteConfig.url),
};

export default function RootLayout({ children }: Readonly<{ children: ReactNode }>) {
  return (
    <html lang="en" className="h-full antialiased" style={{
      ["--background" as string]: themeConfig.colors.background,
      ["--surface" as string]: themeConfig.colors.surface,
      ["--foreground" as string]: themeConfig.colors.foreground,
      ["--muted" as string]: themeConfig.colors.muted,
      ["--border" as string]: themeConfig.colors.border,
      ["--accent" as string]: themeConfig.colors.accent,
      ["--font-display" as string]: '"Iowan Old Style", "Palatino Linotype", "Book Antiqua", Garamond, serif',
      ["--font-body" as string]: 'Charter, "Baskerville Old Face", "Times New Roman", Georgia, serif',
      ["--font-sans" as string]: '"Aptos", "Segoe UI", "Helvetica Neue", Arial, sans-serif',
      ["--page-width" as string]: themeConfig.spacing.page,
    } as CSSProperties}>
      <body className="flex min-h-full flex-col bg-[var(--background)] text-[var(--foreground)]">
        <SiteHeader />
        <main id="main-content" className="mx-auto w-[var(--page-width)] max-w-[var(--page-width)] flex-1 py-10 md:py-14">{children}</main>
        <SiteFooter />
      </body>
    </html>
  );
}
