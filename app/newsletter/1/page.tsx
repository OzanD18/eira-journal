import Link from "next/link";
import type { Metadata } from "next";
import issue from "@/content/newsletter-01.json";

export const metadata: Metadata = {
  title: "Newsletter 1: Middle East",
  description: "Eira Journal's inaugural newsletter, featuring an Editor-in-Chief's letter and three Middle East articles.",
};

const pdfPath = "/newsletters/eira-journal-newsletter-01-middle-east.pdf";

export default function NewsletterOne() {
  return (
    <div className="space-y-12">
      <header className="border-b border-[var(--foreground)] pb-12">
        <p className="font-sans text-xs font-bold uppercase tracking-[0.24em] text-[var(--accent)]">Eira Journal · Newsletter 01 · {issue.region}</p>
        <h1 className="mt-7 max-w-4xl font-display text-[clamp(3.6rem,9vw,7.8rem)] leading-[.95] tracking-[-.05em]">Middle <span className="italic text-[var(--accent)]">East.</span></h1>
        <p className="mt-7 max-w-3xl border-l-2 border-[var(--accent)] pl-5 text-xl leading-8 text-[var(--muted)]">Read the inaugural issue below.</p>
        <div className="mt-8 flex flex-wrap gap-3">
          <a href={pdfPath} target="_blank" rel="noopener noreferrer" className="inline-flex items-center bg-[var(--accent)] px-6 py-3 font-sans text-xs font-bold uppercase tracking-widest text-white hover:opacity-90">Read full PDF ↗</a>
          <Link href="/publications" className="inline-flex items-center border border-[var(--foreground)] px-6 py-3 font-sans text-xs font-bold uppercase tracking-widest hover:bg-[var(--foreground)] hover:text-white">All publications →</Link>
        </div>
      </header>

      <div className="grid gap-10 lg:grid-cols-[260px_1fr]">
        <aside className="space-y-6 lg:sticky lg:top-8 lg:self-start">
          <div className="border-t-2 border-[var(--accent)] pt-5">
            <p className="font-sans text-xs font-bold uppercase tracking-widest text-[var(--accent)]">In this issue</p>
            <nav className="mt-5 space-y-3 font-sans text-sm leading-6">
              <a className="block hover:text-[var(--accent)]" href="#editors-letter">Editor’s letter · Ozan Demiroglu</a>
              {issue.articles.map((a, i) => <a key={a.anchor} className="block hover:text-[var(--accent)]" href={`#${a.anchor}`}>{String(i+1).padStart(2,"0")} · {a.author}</a>)}
            </nav>
          </div>
          <div className="border-t border-[var(--border)] pt-4 text-sm leading-7 text-[var(--muted)]">
            <p><span className="font-semibold text-[var(--foreground)]">Middle East Editor:</span> {issue.editor}</p>
            <p><span className="font-semibold text-[var(--foreground)]">Co-Editors-in-Chief:</span> {issue.coEditors.join(" and ")}</p>
          </div>
        </aside>

        <div className="min-w-0 space-y-20">
          <article id="editors-letter" className="scroll-mt-8 border-b border-[var(--border)] pb-14">
            <p className="font-sans text-xs font-bold uppercase tracking-[0.18em] text-[var(--accent)]">From the Editor-in-Chief</p>
            <h2 className="mt-4 font-display text-4xl md:text-5xl">A Letter to Our Readers</h2>
            <p className="mt-4 font-sans text-xs uppercase tracking-widest text-[var(--muted)]">Ozan Demiroglu · Co-Editor-in-Chief</p>
            <div className="mt-8 max-w-[740px] space-y-5 text-[1.075rem] leading-[1.85]">
              {issue.letter.paragraphs.map((para,i)=><p key={i}>{para}</p>)}
              <p className="pt-3 font-display text-xl">Sincerely,<br/><span className="font-semibold">Ozan Demiroglu</span><br/><span className="text-base text-[var(--muted)]">Co-Editor-in-Chief</span></p>
            </div>
          </article>

          {issue.articles.map((article, index) => (
            <article key={article.anchor} id={article.anchor} className="scroll-mt-8 border-b border-[var(--border)] pb-14 last:border-0">
              <p className="font-sans text-xs font-bold uppercase tracking-[0.18em] text-[var(--accent)]">Middle East · Feature {String(index+1).padStart(2,"0")}</p>
              <h2 className="mt-4 max-w-3xl font-display text-[clamp(2.2rem,4vw,3.9rem)] leading-tight tracking-[-.025em]">{article.title}</h2>
              <p className="mt-5 font-sans text-sm text-[var(--muted)]">By <strong className="text-[var(--foreground)]">{article.author}</strong> · Staff Writer</p>
              <p className="mt-7 border-l-2 border-[var(--accent)] pl-5 font-display text-xl italic leading-8 text-[var(--accent)]">{article.dek}</p>
              <div className="mt-8 max-w-[750px] space-y-5 text-[1.075rem] leading-[1.85]">
                {article.paragraphs.map((para,i)=><p key={i}>{para}</p>)}
              </div>
              <details className="mt-12 max-w-[750px] border-t border-[var(--border)] pt-6">
                <summary className="cursor-pointer font-sans text-xs font-bold uppercase tracking-[0.14em] text-[var(--accent)]">Sources and references ({article.sources.length})</summary>
                <ol className="mt-5 list-decimal space-y-3 pl-5 font-sans text-sm leading-6 text-[var(--muted)]">
                  {article.sources.map((source,i)=><li key={i} className="break-words pl-2">{source}</li>)}
                </ol>
              </details>
            </article>
          ))}
          <div className="flex flex-wrap gap-4"><a href={pdfPath} target="_blank" rel="noopener noreferrer" className="bg-[var(--accent)] px-6 py-3 font-sans text-xs font-bold uppercase tracking-widest text-white">Read the newsletter PDF ↗</a><Link href="/" className="border border-[var(--foreground)] px-6 py-3 font-sans text-xs font-bold uppercase tracking-widest">Back to homepage →</Link></div>
        </div>
      </div>
    </div>
  );
}
