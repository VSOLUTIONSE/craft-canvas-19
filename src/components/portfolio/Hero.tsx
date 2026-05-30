import { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";
import { ArrowDown, ArrowUpRight } from "lucide-react";
import { Magnetic } from "./Magnetic";

const FIRST = "Favour";
const LAST = "Emmanuel";

export function Hero() {
  const ref = useRef<HTMLDivElement>(null);
  const [mouse, setMouse] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const onMove = (e: MouseEvent) => {
      const el = ref.current;
      if (!el) return;
      const r = el.getBoundingClientRect();
      setMouse({
        x: (e.clientX - (r.left + r.width / 2)) / r.width,
        y: (e.clientY - (r.top + r.height / 2)) / r.height,
      });
    };
    window.addEventListener("mousemove", onMove);
    return () => window.removeEventListener("mousemove", onMove);
  }, []);

  return (
    <section id="top" ref={ref} className="relative flex min-h-screen flex-col justify-between px-6 pb-12 pt-32 md:px-10 md:pt-40">
      <div className="mx-auto flex w-full max-w-7xl flex-1 flex-col justify-center">
        <motion.p
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mb-8 flex items-center gap-3 text-xs uppercase tracking-[0.24em] text-muted-foreground"
        >
          <span className="h-px w-10 bg-primary" />
          AI Prompt Engineer · LLM Trainer
        </motion.p>

        <h1 className="font-display text-[clamp(3.5rem,12vw,11rem)] font-medium leading-[0.88] tracking-tighter">
          <Word text={FIRST} mouse={mouse} delay={0.1} />
          <br />
          <Word text={LAST} mouse={mouse} delay={0.5} italic />
        </h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1.1 }}
          className="mt-10 max-w-xl text-lg leading-relaxed text-muted-foreground md:text-xl"
        >
          I turn AI into repeatable systems that save time, improve output quality,
          and make teams faster.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1.3 }}
          className="mt-12 flex flex-wrap items-center gap-4"
        >
          <Magnetic>
            <a
              href="#work"
              className="group inline-flex items-center gap-3 rounded-full bg-primary px-7 py-4 text-sm font-medium text-primary-foreground transition-colors"
            >
              View selected work
              <ArrowUpRight className="h-4 w-4 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
            </a>
          </Magnetic>
          <Magnetic>
            <a
              href="#contact"
              className="inline-flex items-center gap-3 rounded-full border border-border px-7 py-4 text-sm font-medium text-foreground transition-colors hover:border-primary"
            >
              Get in touch
            </a>
          </Magnetic>
        </motion.div>
      </div>

      <div className="mx-auto flex w-full max-w-7xl items-end justify-between text-xs uppercase tracking-[0.2em] text-muted-foreground">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 1.6 }}
          className="flex items-center gap-2"
        >
          <ArrowDown className="h-3 w-3 animate-bounce" />
          Scroll
        </motion.div>
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 1.6 }}
          className="hidden md:block"
        >
          Perplexity · Claude · Gemini
        </motion.p>
      </div>
    </section>
  );
}

function Word({ text, mouse, delay, italic }: { text: string; mouse: { x: number; y: number }; delay: number; italic?: boolean }) {
  return (
    <span className={italic ? "italic text-primary" : ""}>
      {text.split("").map((ch, i) => (
        <motion.span
          key={i}
          initial={{ opacity: 0, y: 80 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: delay + i * 0.04, ease: [0.22, 1, 0.36, 1] }}
          style={{
            display: "inline-block",
            transform: `translate(${mouse.x * (8 + i)}px, ${mouse.y * (6 + i)}px)`,
            transition: "transform 0.4s cubic-bezier(0.22, 1, 0.36, 1)",
          }}
        >
          {ch}
        </motion.span>
      ))}
    </span>
  );
}
