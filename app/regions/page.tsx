import Link from "next/link";
import type { Metadata } from "next";
import { regionalDesks } from "@/content/team";

export const metadata: Metadata = {
  title: "Regions",
  description: "Meet the six regional editorial desks of the Eira Journal.",
};

export default function RegionsPage() {
  return (
    <div>
      <header className="mb-12 border-b border-[var(--foreground)] pb-10">
        <p className="font-sans text-[11px] font-bold uppercase tracking-[0.25em] text-[var(--accent)]">Editorial coverage</p>
        <h1 className="mt-4 font-display text-[clamp(3.4rem,7vw,6rem)] leading-none tracking-[-0.04em]">Around the world</h1>
        <p className="mt-5 max-w-2xl text-lg leading-7 text-[var(--muted)]">Our writers and regional editors follow international affairs through six dedicated desks.</p>
      </header>
      <div className="grid gap-12 md:grid-cols-2">
        {regionalDesks.map((desk, index) => (
          <section className="border-t-2 border-[var(--accent)] pt-6" key={desk.slug}>
            <p className="font-sans text-xs uppercase tracking-[0.22em] text-[var(--accent)]">0{index + 1} — Regional desk</p>
            <h2 className="mt-5 font-display text-4xl tracking-tight">{desk.name}</h2>
            <p className="mt-3 max-w-lg leading-7 text-[var(--muted)]">{desk.description}</p>
            <div className="mt-7 grid gap-6 border-t border-[var(--border)] pt-5 sm:grid-cols-2">
              <div><p className="font-sans text-[11px] font-bold uppercase tracking-[0.18em] text-[var(--muted)]">Editor</p><p className="mt-3 text-lg">{desk.editor}</p></div>
              <div><p className="font-sans text-[11px] font-bold uppercase tracking-[0.18em] text-[var(--muted)]">Writers</p><ul className="mt-3 space-y-2">{desk.writers.map((writer) => <li key={writer}>{writer}</li>)}</ul></div>
            </div>
            <Link className="mt-6 inline-block font-sans text-xs font-semibold uppercase tracking-widest text-[var(--accent)] hover:underline" href={`/masthead#${desk.slug}`}>View on masthead →</Link>
          </section>
        ))}
      </div>
    </div>
  );
}
