import { Reveal } from "./Reveal";

const capabilities = [
  {
    title: "AI & Prompt Engineering",
    items: ["Prompt Engineering", "Prompt Optimization", "Prompt Chaining", "AI Workflow Design", "Output Evaluation", "SOP Development", "Context Engineering", "Agentic AI"],
  },
  {
    title: "AI Platforms",
    items: ["Perplexity", "Claude", "Gemini", "ChatGPT", "Manus AI", "GitHub Copilot"],
  },
  {
    title: "LLM Training & Evaluation",
    items: ["Data Annotation", "LLM Evaluation", "Quality Assurance", "Human Feedback Review", "Dataset Validation"],
  },
  {
    title: "Automation & Technical",
    items: ["Workflow Automation", "API Integration", "JavaScript", "TypeScript", "React", "Git & GitHub"],
  },
];

export function About() {
  return (
    <section id="about" className="relative border-t border-border px-6 py-32 md:px-10 md:py-48">
      <div className="mx-auto max-w-7xl">
        <Reveal>
          <p className="mb-16 flex items-center gap-3 text-xs uppercase tracking-[0.24em] text-muted-foreground">
            <span className="h-px w-10 bg-primary" />
            About
          </p>
        </Reveal>

        <div className="grid gap-16 lg:grid-cols-12">
          <div className="lg:col-span-7">
            <Reveal>
              <p className="font-display text-3xl leading-snug tracking-tight md:text-4xl lg:text-5xl">
                Favour Emmanuel is an AI Prompt Engineer and LLM Trainer who builds
                <span className="text-muted-foreground"> repeatable AI workflows, engineers high-performance prompts, and creates systems that make teams faster and outputs sharper.</span>
              </p>
            </Reveal>
            <Reveal delay={0.15}>
              <p className="mt-10 max-w-xl text-base leading-relaxed text-muted-foreground md:text-lg">
                He has trained professionals across industries on practical AI adoption,
                evaluated large language models at Turing and DataVale AI, and developed
                prompt systems for portfolios, on-brand design generation, and humanising
                AI output. He works primarily in Perplexity, Claude, and Gemini.
              </p>
            </Reveal>
          </div>

          <div className="lg:col-span-5">
            <Reveal delay={0.2}>
              <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-1">
                {capabilities.map((c, i) => (
                  <div key={c.title}>
                    <div className="mb-3 flex items-baseline gap-3">
                      <span className="font-display text-xs text-primary">0{i + 1}</span>
                      <h3 className="font-display text-sm uppercase tracking-[0.16em]">{c.title}</h3>
                    </div>
                    <ul className="flex flex-wrap gap-x-3 gap-y-1 text-sm text-muted-foreground">
                      {c.items.map((it, idx) => (
                        <li key={it}>
                          {it}
                          {idx < c.items.length - 1 && <span className="ml-3 text-border">·</span>}
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  );
}
