import type { Metadata } from "next";
import { coEditorsInChief, regionalDesks, totalTeamMembers } from "@/content/team";

export const metadata: Metadata = {
  title: "Masthead",
  description: "The co-editors-in-chief, regional editors, and writers of the Eira Journal.",
};

export default function MastheadPage() {
  return (
    <div className="space-y-16">
      <header className="border-b border-[var(--foreground)] pb-10">
        <p className="font-sans text-[11px] font-bold uppercase tracking-[0.28em] text-[var(--accent)]">The people behind the publication</p>
        <div className="mt-4 flex flex-col justify-between gap-5 md:flex-row md:items-end">
          <h1 className="font-display text-[clamp(3.3rem,7vw,6.4rem)] leading-none tracking-[-0.045em]">Editorial Masthead</h1>
          <p className="font-sans text-sm text-[var(--muted)]">{totalTeamMembers} team members · 6 regional desks</p>
        </div>
      </header>

      <section className="grid gap-7 md:grid-cols-[0.65fr_1.35fr] md:gap-16">
        <div>
          <p className="font-sans text-[11px] font-bold uppercase tracking-[0.22em] text-[var(--accent)]">Leadership</p>
          <h2 className="mt-3 font-display text-3xl md:text-4xl">Co-Editors-in-Chief</h2>
        </div>
        <div className="grid gap-4 sm:grid-cols-2">
          {coEditorsInChief.map((name) => (
            <div key={name} className="border-t-2 border-[var(--accent)] py-5">
              <h3 className="font-display text-3xl leading-tight">{name}</h3>
              <p className="mt-3 font-sans text-[11px] font-semibold uppercase tracking-[0.16em] text-[var(--muted)]">Co-Editor-in-Chief</p>
            </div>
          ))}
        </div>
      </section>

      <section className="space-y-5">
        <div className="border-b border-[var(--foreground)] pb-5">
          <p className="font-sans text-[11px] font-bold uppercase tracking-[0.22em] text-[var(--accent)]">Editorial departments</p>
          <h2 className="mt-3 font-display text-4xl tracking-tight">Regional desks</h2>
        </div>
        {regionalDesks.map((desk, index) => (
          <section id={desk.slug} key={desk.slug} className="grid scroll-mt-8 gap-6 border-b border-[var(--border)] py-8 md:grid-cols-[0.65fr_1.35fr] md:gap-16">
            <div>
              <p className="font-sans text-[11px] font-bold uppercase tracking-[0.18em] text-[var(--accent)]">Desk {String(index + 1).padStart(2, "0")}</p>
              <h3 className="mt-3 font-display text-3xl md:text-4xl">{desk.name}</h3>
            </div>
            <div className="grid gap-7 sm:grid-cols-2">
              <div>
                <p className="font-sans text-[11px] font-bold uppercase tracking-[0.19em] text-[var(--muted)]">Regional Editor</p>
                <p className="mt-3 font-display text-2xl">{desk.editor}</p>
              </div>
              <div>
                <p className="font-sans text-[11px] font-bold uppercase tracking-[0.19em] text-[var(--muted)]">Writers</p>
                <ul className="mt-3 space-y-2">
                  {desk.writers.map((name) => <li className="font-display text-xl md:text-2xl" key={name}>{name}</li>)}
                </ul>
              </div>
            </div>
          </section>
        ))}
      </section>
    </div>
  );
}
