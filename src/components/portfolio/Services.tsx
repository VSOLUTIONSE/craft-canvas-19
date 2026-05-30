import { Reveal } from "./Reveal";

const services = [
  { num: "01", title: "Prompt Systems", desc: "Custom prompt libraries and chains that turn one-off AI experiments into reliable, reusable workflows." },
  { num: "02", title: "LLM Evaluation", desc: "Structured evals, annotation pipelines, and human-feedback review for teams shipping AI features." },
  { num: "03", title: "AI Workflow Automation", desc: "End-to-end automation that connects models, tools, and APIs into systems your team can operate." },
  { num: "04", title: "Team Training", desc: "Hands-on programs teaching practical AI adoption — from prompting fundamentals to agentic workflows." },
];

export function Services() {
  return (
    <section id="services" className="relative border-t border-border px-6 py-32 md:px-10 md:py-48">
      <div className="mx-auto max-w-7xl">
        <Reveal>
          <div className="mb-20 grid gap-8 lg:grid-cols-2 lg:items-end">
            <div>
              <p className="mb-6 flex items-center gap-3 text-xs uppercase tracking-[0.24em] text-muted-foreground">
                <span className="h-px w-10 bg-primary" />
                What I do
              </p>
              <h2 className="font-display text-4xl tracking-tight md:text-6xl">
                Four ways to work <span className="italic text-primary">together.</span>
              </h2>
            </div>
            <p className="max-w-md text-base text-muted-foreground md:text-lg">
              Each engagement starts with a clear outcome and ends with a system your team owns —
              not a black box.
            </p>
          </div>
        </Reveal>

        <div className="grid gap-px overflow-hidden rounded-2xl bg-border md:grid-cols-2">
          {services.map((s, i) => (
            <Reveal key={s.num} delay={i * 0.08}>
              <div className="group relative h-full bg-background p-10 transition-colors hover:bg-card md:p-14">
                <div className="mb-8 flex items-baseline justify-between">
                  <span className="font-display text-sm text-primary">{s.num}</span>
                  <span className="h-px w-12 bg-border transition-all duration-500 group-hover:w-24 group-hover:bg-primary" />
                </div>
                <h3 className="font-display text-3xl tracking-tight md:text-4xl">{s.title}</h3>
                <p className="mt-6 max-w-md text-base leading-relaxed text-muted-foreground">{s.desc}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
