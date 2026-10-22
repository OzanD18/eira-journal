import Link from "next/link";
import type { Metadata } from "next";
import { publications } from "@/content/publications";

export const metadata: Metadata = {
  title: "Publications",
  description: "Newsletters and published work from the Eira Journal.",
};

export default function PublicationsPage() {
  const sorted = [...publications].sort((a, b) => b.date.localeCompare(a.date));
  return (
    <div className="space-y-12">
      <header className="border-b border-[var(--foreground)] pb-10">
        <p className="font-sans text-[11px] font-bold uppercase tracking-[0.28em] text-[var(--accent)]">The journal archive</p>
        <h1 className="mt-5 font-display text-[clamp(3.4rem,7vw,6rem)] leading-none tracking-[-0.04em]">Publications</h1>
        <p className="mt-6 max-w-2xl text-lg leading-8 text-[var(--muted)]">Newsletters and editorial work from the Eira Journal.</p>
      </header>
      {sorted.length ? (
        <div className="grid gap-10 md:grid-cols-2">
          {sorted.map((publication) => (
            <article key={publication.slug} className="border-t-2 border-[var(--accent)] pt-6">
              <p className="font-sans text-xs font-semibold uppercase tracking-[0.18em] text-[var(--accent)]">Newsletter 01 · Middle East</p>
              <h2 className="mt-5 font-display text-3xl md:text-4xl">{publication.title}</h2>
              <p className="mt-4 leading-7 text-[var(--muted)]">{publication.description}</p>
              <div className="mt-6 flex flex-wrap gap-3"><Link href={publication.route} className="inline-block bg-[var(--accent)] px-5 py-3 font-sans text-xs font-semibold uppercase tracking-widest text-white hover:opacity-90">Read Our Newsletter ↗</Link><a href={publication.pdfPath} target="_blank" rel="noopener noreferrer" className="inline-block border border-[var(--foreground)] px-5 py-3 font-sans text-xs font-semibold uppercase tracking-widest hover:bg-[var(--foreground)] hover:text-white">View PDF ↓</a></div>
            </article>
          ))}
        </div>
      ) : (
        <section className="max-w-2xl border-l-2 border-[var(--accent)] py-2 pl-7">
          <h2 className="font-display text-3xl">The archive is being prepared.</h2>
          <p className="mt-4 text-lg leading-8 text-[var(--muted)]">No newsletters are currently posted on this website. The archive will display the journal’s published newsletters once they are added.</p>
        </section>
      )}
    </div>
  );
}
