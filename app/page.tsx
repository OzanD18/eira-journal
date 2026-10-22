import Link from "next/link";
import { coEditorsInChief, regionalDesks, totalTeamMembers } from "@/content/team";
import { publications } from "@/content/publications";

export default function Home() {
  const latest = [...publications].sort((a, b) => b.date.localeCompare(a.date)).slice(0, 2);
  return (
    <div className="space-y-20">
      <section className="grid gap-12 border-b border-[var(--foreground)] pb-16 lg:grid-cols-[1.8fr_0.75fr] lg:gap-20">
        <div>
          <p className="mb-7 font-sans text-[11px] font-bold uppercase tracking-[0.3em] text-[var(--accent)]">Eira Journal</p>
          <h1 className="max-w-4xl font-display text-[clamp(3.2rem,7.1vw,7.2rem)] leading-[0.96] tracking-[-0.048em]">
            A wider view of <span className="italic text-[var(--accent)]">the world.</span>
          </h1>
          <p className="mt-9 max-w-[640px] border-l-2 border-[var(--accent)] pl-6 text-xl leading-[1.5] text-[var(--muted)] md:text-2xl">
            Student-led inquiry into diplomacy, global politics, and international affairs, organized across six regional editorial desks.
          </p>
          <div className="mt-10 flex flex-wrap gap-3">
            <Link className="inline-flex items-center gap-4 bg-[var(--accent)] px-6 py-3 font-sans text-xs font-semibold uppercase tracking-[0.17em] text-white hover:opacity-90" href="/newsletter/1">Read Our Newsletter <span aria-hidden="true">↗</span></Link>
            <Link className="inline-flex items-center gap-4 border border-[var(--foreground)] px-6 py-3 font-sans text-xs font-semibold uppercase tracking-[0.17em] hover:bg-[var(--foreground)] hover:text-white" href="/masthead">Meet the editorial team <span aria-hidden="true">→</span></Link>
          </div>
        </div>
        <aside className="self-end border-t-2 border-[var(--accent)] pt-6">
          <p className="font-sans text-[11px] font-bold uppercase tracking-[0.26em] text-[var(--accent)]">The editorial board</p>
          <p className="mt-5 font-display text-6xl leading-none">{totalTeamMembers}</p>
          <p className="mt-2 text-sm text-[var(--muted)]">Editors and writers across the journal</p>
          <div className="mt-9 border-t border-[var(--border)] pt-5">
            <p className="font-sans text-[11px] font-bold uppercase tracking-[0.17em] text-[var(--muted)]">Co-Editors-in-Chief</p>
            {coEditorsInChief.map((name) => <p className="mt-3 font-display text-2xl" key={name}>{name}</p>)}
          </div>
        </aside>
      </section>

      <section className="grid gap-8 border-y border-[var(--foreground)] bg-[var(--surface)] px-6 py-9 md:grid-cols-[0.9fr_1.3fr] md:items-center md:px-10 md:py-12">
        <div>
          <p className="font-sans text-xs font-bold uppercase tracking-[0.24em] text-[var(--accent)]">Just added · Newsletter No. 01</p>
          <p className="mt-5 font-display text-[clamp(3.5rem,7vw,6.5rem)] leading-none tracking-tight text-[var(--accent)]">Middle<br /><em>East.</em></p>
        </div>
        <div>
          <p className="font-sans text-xs font-bold uppercase tracking-[0.17em] text-[var(--muted)]">The inaugural issue</p>
          <h2 className="mt-3 font-display text-3xl leading-tight md:text-4xl">Three perspectives. One region. A deeper understanding.</h2>
          <p className="mt-4 max-w-xl leading-7 text-[var(--muted)]">Read our founding Editor-in-Chief’s letter and reporting on Iran, Israel–Lebanon relations, and Yemen by Cyrus Rahbari, Maya Virani, and Amelia Weinhouse.</p>
          <div className="mt-7 flex flex-wrap gap-3">
            <Link href="/newsletter/1" className="inline-flex items-center gap-3 bg-[var(--accent)] px-6 py-3 font-sans text-xs font-bold uppercase tracking-widest text-white hover:opacity-90">Read Our Newsletter ↗</Link>
            <a href="/newsletters/eira-journal-newsletter-01-middle-east.pdf" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-3 border border-[var(--foreground)] px-6 py-3 font-sans text-xs font-bold uppercase tracking-widest hover:bg-[var(--foreground)] hover:text-white">View PDF ↓</a>
          </div>
        </div>
      </section>

      <section>
        <div className="mb-9 flex flex-col justify-between gap-4 border-b border-[var(--border)] pb-5 sm:flex-row sm:items-end">
          <div>
            <p className="font-sans text-[11px] font-bold uppercase tracking-[0.25em] text-[var(--accent)]">Our regional desks</p>
            <h2 className="mt-3 font-display text-4xl tracking-tight md:text-5xl">Six regions. One conversation.</h2>
          </div>
          <Link href="/regions" className="font-sans text-xs font-semibold uppercase tracking-widest text-[var(--accent)] hover:underline">All regions →</Link>
        </div>
        <div className="grid gap-0 sm:grid-cols-2 lg:grid-cols-3">
          {regionalDesks.map((desk, i) => (
            <Link key={desk.slug} href={`/masthead#${desk.slug}`} className="group border-b border-[var(--border)] py-7 pr-6 sm:pr-8 lg:min-h-56">
              <p className="font-sans text-[11px] font-semibold tracking-[0.19em] text-[var(--accent)]">{String(i + 1).padStart(2, "0")} / 06</p>
              <h3 className="mt-5 font-display text-[clamp(1.9rem,3vw,2.55rem)] tracking-tight group-hover:text-[var(--accent)]">{desk.name} <span aria-hidden="true" className="text-base">↗</span></h3>
              <p className="mt-3 text-sm leading-6 text-[var(--muted)]">{desk.description}</p>
              <p className="mt-4 font-sans text-[11px] font-semibold uppercase tracking-wider text-[var(--foreground)]">Editor · {desk.editor}</p>
            </Link>
          ))}
        </div>
      </section>

      <section className="grid gap-8 border-t border-[var(--foreground)] pt-10 md:grid-cols-[1fr_1.3fr] md:gap-20">
        <div>
          <p className="font-sans text-[11px] font-bold uppercase tracking-[0.26em] text-[var(--accent)]">From the journal</p>
          <h2 className="mt-4 font-display text-4xl tracking-tight md:text-5xl">Publications</h2>
        </div>
        {latest.length ? (
          <div className="space-y-5">
            {latest.map((item) => (
              <div key={item.slug} className="border-b border-[var(--border)] pb-5">
                <p className="font-sans text-xs text-[var(--muted)]">Newsletter 01 · Middle East</p>
                <h3 className="mt-2 font-display text-2xl">{item.title}</h3>
                <p className="mt-2 text-sm text-[var(--muted)]">{item.description}</p>
                <Link href={item.route} className="mt-3 inline-block font-sans text-xs font-semibold uppercase tracking-widest text-[var(--accent)] hover:underline">Read Our Newsletter ↗</Link>
              </div>
            ))}
          </div>
        ) : (
          <div className="space-y-4">
            <p className="font-display text-2xl leading-snug">A home for the journal’s newsletters and editorial work.</p>
            <p className="max-w-xl text-base leading-7 text-[var(--muted)]">Publications will be listed here once the journal’s newsletters are added.</p>
            <Link href="/publications" className="inline-block font-sans text-xs font-semibold uppercase tracking-widest text-[var(--accent)] hover:underline">Visit publications →</Link>
          </div>
        )}
      </section>
    </div>
  );
}
