import Link from "next/link";
import { mainNavigation } from "@/config/navigation";
import { siteConfig } from "@/config/site";

export function SiteHeader() {
  return (
    <header className="site-header border-b border-[var(--border)] bg-[var(--background)]">
      <a href="#main-content" className="sr-only focus:not-sr-only focus:absolute focus:left-3 focus:top-3 focus:z-50 focus:bg-[var(--background)] focus:px-4 focus:py-3">
        Skip to content
      </a>
      <div className="mx-auto w-[var(--page-width)] max-w-[var(--page-width)]">
        <div className="flex items-center justify-between border-b border-[var(--border)] py-3 text-[10px] font-semibold uppercase tracking-[0.23em] text-[var(--muted)] sm:text-xs">
          <span>Student-led at Emory University</span>
          <span className="hidden sm:inline">Global perspectives · Independent inquiry</span>
          <span className="sm:hidden">Eira Journal</span>
        </div>
        <div className="flex flex-col justify-between gap-5 py-6 md:flex-row md:items-end">
          <Link href="/" className="block max-w-[680px] font-display text-[clamp(2.05rem,4vw,3.6rem)] leading-[0.96] tracking-[-0.025em] text-[var(--foreground)]">
            {siteConfig.name}
          </Link>
          <p className="max-w-44 text-sm italic leading-5 text-[var(--muted)] md:text-right">{siteConfig.tagline}</p>
        </div>
        <nav aria-label="Primary navigation" className="flex flex-wrap gap-x-7 gap-y-3 border-t border-[var(--foreground)] py-4 font-sans text-[11px] font-semibold uppercase tracking-[0.14em] sm:text-xs">
          {mainNavigation.map((item) => (
            <Link className="transition-colors hover:text-[var(--accent)] focus-visible:underline" key={item.href} href={item.href}>{item.label}</Link>
          ))}
        </nav>
      </div>
    </header>
  );
}
