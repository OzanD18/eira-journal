import Link from "next/link";
import { siteConfig } from "@/config/site";
import { mainNavigation } from "@/config/navigation";

export function SiteFooter() {
  return (
    <footer className="mt-24 border-t border-[var(--foreground)] bg-[var(--surface)]">
      <div className="mx-auto grid w-[var(--page-width)] max-w-[var(--page-width)] gap-9 py-12 md:grid-cols-[1.3fr_1fr]">
        <div>
          <h2 className="font-display text-3xl tracking-tight">{siteConfig.name}</h2>
          <p className="mt-3 max-w-lg text-sm leading-6 text-[var(--muted)]">{siteConfig.description}</p>
          <p className="mt-6 text-xs text-[var(--muted)]">Views expressed in individual publications belong to their authors and do not represent Emory University.</p>
        </div>
        <div>
          <p className="font-sans text-[11px] font-semibold uppercase tracking-[0.22em] text-[var(--accent)]">Explore</p>
          <div className="mt-4 grid grid-cols-2 gap-x-5 gap-y-3 text-sm">
            {mainNavigation.map((link) => <Link key={link.href} href={link.href} className="hover:text-[var(--accent)]">{link.label}</Link>)}
          </div>
          <p className="mt-7 font-sans text-xs text-[var(--muted)]">© {new Date().getFullYear()} Eira Journal</p>
        </div>
      </div>
    </footer>
  );
}
