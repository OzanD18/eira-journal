import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "About",
  description: "Learn about the Eira Journal, a student-led publication organized around six regional editorial teams.",
};

export default function AboutPage() {
  return (
    <div className="grid gap-10 border-t border-[var(--foreground)] pt-8 lg:grid-cols-[1fr_1.1fr] lg:gap-24">
      <div>
        <p className="font-sans text-[11px] font-bold uppercase tracking-[0.28em] text-[var(--accent)]">Who we are</p>
        <h1 className="mt-5 font-display text-[clamp(3.4rem,6vw,5.8rem)] leading-[1.02] tracking-[-0.04em]">A journal with a <span className="italic text-[var(--accent)]">global lens.</span></h1>
      </div>
      <div className="space-y-10 text-lg leading-8">
        <section>
          <h2 className="font-display text-3xl">Our purpose</h2>
          <p className="mt-3">The Eira Journal is a student-led editorial publication focused on international affairs, regional politics, diplomacy, and the questions shaping our world.</p>
        </section>
        <section>
          <h2 className="font-display text-3xl">A regional approach</h2>
          <p className="mt-3">Our editorial team is organized into six regional desks: Africa, Asia, Europe, Latin America, the Middle East, and North America. Each desk brings together an editor and three writers.</p>
          <Link href="/regions" className="mt-4 inline-block font-sans text-xs font-semibold uppercase tracking-widest text-[var(--accent)] hover:underline">Explore the desks →</Link>
        </section>
        <section>
          <h2 className="font-display text-3xl">Editorial leadership</h2>
          <p className="mt-3">The journal is co-led by Ozan Demiroglu and Rebecca Han, supported by six regional editors and their writing teams.</p>
          <Link href="/masthead" className="mt-4 inline-block font-sans text-xs font-semibold uppercase tracking-widest text-[var(--accent)] hover:underline">Meet the full team →</Link>
        </section>
      </div>
    </div>
  );
}
