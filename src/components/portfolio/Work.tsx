import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import { Reveal } from "./Reveal";

const projects = [
  { num: "01", title: "Portfolio Prompt System", category: "Prompt Engineering", year: "2025", desc: "A modular prompt framework for generating high-craft portfolio sites from short briefs.", tag: "System Design" },
  { num: "02", title: "On-Brand Design Generator", category: "AI Workflow", year: "2025", desc: "Multi-step pipeline that produces on-brand visuals while keeping creative direction in human hands.", tag: "Workflow" },
  { num: "03", title: "LLM Evaluation at Turing", category: "Model Training", year: "2024", desc: "Human feedback review and dataset validation for frontier LLMs across reasoning tasks.", tag: "Evaluation" },
  { num: "04", title: "DataVale AI QA", category: "Quality Assurance", year: "2024", desc: "Annotation and quality assurance for fine-tuning data, focused on factual precision.", tag: "Annotation" },
  { num: "05", title: "Humanising AI Output", category: "Prompt Optimization", year: "2025", desc: "A prompt system that strips AI fingerprints and restores warmth in long-form writing.", tag: "Optimization" },
  { num: "06", title: "Team AI Adoption Program", category: "Training", year: "2025", desc: "Hands-on training program teaching teams to build repeatable AI workflows.", tag: "Training" },
];

export function Work() {
  return (
    <section id="work" className="relative px-6 pt-44 pb-32 md:px-10 md:pt-64 md:pb-48">
      <div className="mx-auto max-w-7xl">
        <Reveal>
          <div className="mb-20 flex items-end justify-between">
            <div>
              <p className="mb-6 flex items-center gap-3 text-xs uppercase tracking-[0.24em] text-muted-foreground">
                <span className="h-px w-10 bg-primary" />
                Selected work
              </p>
              <h2 className="font-display text-4xl tracking-tight md:text-6xl">
                Systems, not <span className="italic text-primary">one-offs.</span>
              </h2>
            </div>
            <p className="hidden text-xs uppercase tracking-[0.18em] text-muted-foreground md:block">
              2024 — 2025
            </p>
          </div>
        </Reveal>

        <div>
          {projects.map((p, i) => (
            <ProjectRow key={p.num} project={p} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}

function ProjectRow({ project, index }: { project: typeof projects[number]; index: number }) {
  return (
    <Reveal delay={index * 0.05}>
      <a
        href="#contact"
        data-cursor-hover
        className="group relative block border-t border-border last:border-b"
      >
        <div className="grid grid-cols-12 items-center gap-4 py-8 transition-colors md:py-12">
          <div className="col-span-2 font-display text-xs text-muted-foreground md:text-sm">
            {project.num}
          </div>
          <div className="col-span-10 md:col-span-5">
            <h3 className="font-display text-2xl tracking-tight transition-transform duration-500 group-hover:-translate-y-1 group-hover:text-primary md:text-4xl">
              {project.title}
            </h3>
          </div>
          <div className="col-span-6 hidden text-sm text-muted-foreground md:col-span-3 md:block">
            {project.category}
          </div>
          <div className="col-span-2 hidden text-right text-xs uppercase tracking-[0.16em] text-muted-foreground md:block">
            {project.year}
          </div>
        </div>

        {/* Hover reveal */}
        <motion.div
          initial={false}
          className="overflow-hidden"
        >
          <div className="grid max-h-0 grid-cols-12 gap-4 overflow-hidden opacity-0 transition-all duration-500 ease-out group-hover:max-h-40 group-hover:pb-10 group-hover:opacity-100">
            <div className="col-span-2" />
            <div className="col-span-10 md:col-span-7">
              <p className="max-w-lg text-base text-muted-foreground">{project.desc}</p>
            </div>
            <div className="col-span-2 hidden items-center justify-end gap-2 text-xs uppercase tracking-[0.16em] text-primary md:flex">
              {project.tag}
              <ArrowUpRight className="h-4 w-4" />
            </div>
          </div>
        </motion.div>

        {/* Amber accent line */}
        <div className="absolute bottom-0 left-0 h-px w-0 bg-primary transition-all duration-700 ease-out group-hover:w-full" />
      </a>
    </Reveal>
  );
}
