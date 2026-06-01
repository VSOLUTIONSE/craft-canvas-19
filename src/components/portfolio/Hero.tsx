import { useEffect, useRef, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowDown, ArrowUpRight, ArrowUp } from "lucide-react";
import { Magnetic } from "./Magnetic";
import pic from "@/assets/pic.jpg";

const FIRST = "Favour";
const LAST = "Emmanuel";

export function Hero() {
  const ref = useRef<HTMLDivElement>(null);
  const [mouse, setMouse] = useState({ x: 0, y: 0 });
  const [showTop, setShowTop] = useState(false);

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

  useEffect(() => {
    const onScroll = () => setShowTop(window.scrollY > window.innerHeight);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <section id="top" ref={ref} className="relative flex min-h-screen flex-col px-6 pt-32 md:px-10 md:pt-40">
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

        <div className="flex flex-col items-start gap-10 md:flex-row md:items-center md:gap-16">
          <div className="flex-1">
            <h1 className="font-display text-[clamp(3.5rem,12vw,11rem)] font-medium leading-[0.88] tracking-tighter">
              <Word text={FIRST} mouse={mouse} delay={0.1} />
              <br />
              <Word text={LAST} mouse={mouse} delay={0.5} italic />
            </h1>
          </div>

          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.9, delay: 0.6, ease: [0.22, 1, 0.36, 1] }}
            className="shrink-0 md:-ml-8"
          >
            <div className="group relative">
              <div className="absolute -inset-3 rounded-full bg-gradient-to-br from-primary/30 to-primary/10 opacity-50 blur-xl transition-opacity group-hover:opacity-80" />
              <img
                src={pic}
                alt="Favour Emmanuel"
                className="relative h-48 w-48 rounded-full border-2 border-primary/30 object-cover ring-1 ring-primary/20 transition-transform duration-500 group-hover:scale-[1.02] md:h-72 md:w-72"
              />
            </div>
          </motion.div>
        </div>

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

      <div className="absolute -bottom-8 left-1/2 -translate-x-1/2 flex items-center gap-2 text-xs uppercase tracking-[0.2em] text-muted-foreground">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 1.6 }}
          className="flex items-center gap-2"
        >
          <ArrowDown className="h-3 w-3 animate-bounce" />
          Scroll
        </motion.div>
      </div>

      <AnimatePresence>
        {showTop && (
          <motion.button
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.5 }}
            transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
            onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
            className="fixed bottom-8 right-8 z-50 flex h-12 w-12 items-center justify-center rounded-full border border-border bg-background/70 text-foreground shadow-lg backdrop-blur-xl transition-colors hover:border-primary hover:text-primary"
          >
            <ArrowUp className="h-4 w-4" />
          </motion.button>
        )}
      </AnimatePresence>
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
