import { ArrowUpRight } from "lucide-react";

export function Footer() {
  return (
    <footer className="relative border-t border-border px-6 pb-10 pt-24 md:px-10">
      <div className="mx-auto max-w-7xl">
        <a
          href="#top"
          className="block font-display text-[clamp(3rem,15vw,14rem)] font-medium leading-[0.85] tracking-tighter transition-colors hover:text-primary"
        >
          Favour<span className="italic text-primary">.</span>
        </a>

        <div className="mt-16 grid gap-10 border-t border-border pt-10 md:grid-cols-3">
          <div>
            <p className="text-xs uppercase tracking-[0.18em] text-muted-foreground">Elsewhere</p>
            <ul className="mt-4 space-y-2 text-base">
              <li>
                <a
                  href="https://www.linkedin.com/"
                  target="_blank"
                  rel="noreferrer"
                  className="group inline-flex items-center gap-2 hover:text-primary"
                >
                  LinkedIn
                  <ArrowUpRight className="h-3 w-3 opacity-0 transition-all group-hover:translate-x-0.5 group-hover:opacity-100" />
                </a>
              </li>
              <li>
                <a
                  href="https://www.instagram.com/"
                  target="_blank"
                  rel="noreferrer"
                  className="group inline-flex items-center gap-2 hover:text-primary"
                >
                  Instagram
                  <ArrowUpRight className="h-3 w-3 opacity-0 transition-all group-hover:translate-x-0.5 group-hover:opacity-100" />
                </a>
              </li>
            </ul>
          </div>
          <div>
            <p className="text-xs uppercase tracking-[0.18em] text-muted-foreground">Index</p>
            <ul className="mt-4 grid grid-cols-2 gap-y-2 text-base">
              <li><a href="#work" className="hover:text-primary">Work</a></li>
              <li><a href="#about" className="hover:text-primary">About</a></li>
              <li><a href="#services" className="hover:text-primary">Services</a></li>
              <li><a href="#insights" className="hover:text-primary">Insights</a></li>
              <li><a href="#contact" className="hover:text-primary">Contact</a></li>
            </ul>
          </div>
          <div>
            <p className="text-xs uppercase tracking-[0.18em] text-muted-foreground">Colophon</p>
            <p className="mt-4 max-w-xs text-sm leading-relaxed text-muted-foreground">
              Set in Space Grotesk &amp; Inter Tight. Built with care in 2026.
            </p>
          </div>
        </div>

        <div className="mt-16 flex flex-col items-start justify-between gap-3 text-xs uppercase tracking-[0.18em] text-muted-foreground md:flex-row md:items-center">
          <span>© {new Date().getFullYear()} Favour Emmanuel</span>
          <span>All systems operational</span>
        </div>
      </div>
    </footer>
  );
}
