import { ArrowUpRight } from "lucide-react";
import { Reveal } from "./Reveal";

const insights = [
  { date: "May 2026", read: "6 min read", title: "Prompts are not features. They're infrastructure.", excerpt: "Why teams that treat prompts like throwaway strings keep rebuilding the same workflows." },
  { date: "Apr 2026", read: "4 min read", title: "Evaluation is the work. Generation is the demo.", excerpt: "A note from the trenches of LLM evaluation, and what most teams get wrong on day one." },
  { date: "Mar 2026", read: "8 min read", title: "How to humanise AI output without losing the model.", excerpt: "A short guide to stripping AI fingerprints from long-form writing while keeping the engine intact." },
];

export function Insights() {
  return (
    <section id="insights" className="relative border-t border-border px-6 py-32 md:px-10 md:py-48">
      <div className="mx-auto max-w-7xl">
        <Reveal>
          <div className="mb-20 flex items-end justify-between">
            <div>
              <p className="mb-6 flex items-center gap-3 text-xs uppercase tracking-[0.24em] text-muted-foreground">
                <span className="h-px w-10 bg-primary" />
                Insights
              </p>
              <h2 className="font-display text-4xl tracking-tight md:text-6xl">
                Notes from <span className="italic text-primary">the work.</span>
              </h2>
            </div>
          </div>
        </Reveal>

        <div className="grid gap-px bg-border md:grid-cols-3">
          {insights.map((post, i) => (
            <Reveal key={post.title} delay={i * 0.1}>
              <article className="group h-full bg-background p-8 transition-colors hover:bg-card md:p-10">
                <div className="mb-10 flex items-center justify-between text-xs uppercase tracking-[0.18em] text-muted-foreground">
                  <span>{post.date}</span>
                  <span>{post.read}</span>
                </div>
                <h3 className="font-display text-2xl leading-snug tracking-tight transition-colors group-hover:text-primary md:text-3xl">
                  {post.title}
                </h3>
                <p className="mt-6 text-sm leading-relaxed text-muted-foreground">{post.excerpt}</p>
                <div className="mt-10 inline-flex items-center gap-2 text-xs uppercase tracking-[0.18em] text-foreground">
                  Read
                  <ArrowUpRight className="h-3 w-3 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
                </div>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
