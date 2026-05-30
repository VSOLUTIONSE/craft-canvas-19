import { useState } from "react";
import { ArrowUpRight, Loader2 } from "lucide-react";
import { toast } from "sonner";
import { Reveal } from "./Reveal";
import { Magnetic } from "./Magnetic";

const WEB3FORMS_KEY = "7ff61434-434d-4fd9-ba0a-89de87ec4830";

export function Contact() {
  const [loading, setLoading] = useState(false);

  const onSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const form = e.currentTarget;
    const data = new FormData(form);
    data.append("access_key", WEB3FORMS_KEY);
    setLoading(true);
    try {
      const res = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: data,
      });
      const json = await res.json();
      if (json.success) {
        toast.success("Message received. I'll be in touch shortly.");
        form.reset();
      } else {
        toast.error(json.message ?? "Something went wrong.");
      }
    } catch {
      toast.error("Network error. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <section id="contact" className="relative border-t border-border px-6 py-32 md:px-10 md:py-48">
      <div className="mx-auto max-w-7xl">
        <div className="grid gap-20 lg:grid-cols-12">
          <div className="lg:col-span-5">
            <Reveal>
              <p className="mb-6 flex items-center gap-3 text-xs uppercase tracking-[0.24em] text-muted-foreground">
                <span className="h-px w-10 bg-primary" />
                Contact
              </p>
              <h2 className="font-display text-4xl leading-[0.95] tracking-tight md:text-6xl">
                Have a project, a role, or a problem worth <span className="italic text-primary">solving?</span>
              </h2>
              <p className="mt-8 max-w-md text-base leading-relaxed text-muted-foreground md:text-lg">
                I'm currently open to full-time roles, contract work, and team training engagements.
                Tell me what you're building.
              </p>
              <div className="mt-12 space-y-4 text-sm">
                <div className="flex items-center justify-between border-b border-border pb-4">
                  <span className="uppercase tracking-[0.18em] text-muted-foreground">Status</span>
                  <span className="text-foreground">Available · 2026</span>
                </div>
                <div className="flex items-center justify-between border-b border-border pb-4">
                  <span className="uppercase tracking-[0.18em] text-muted-foreground">Response</span>
                  <span className="text-foreground">Within 24h</span>
                </div>
              </div>
            </Reveal>
          </div>

          <div className="lg:col-span-7">
            <Reveal delay={0.15}>
              <form onSubmit={onSubmit} className="space-y-8">
                <Field name="name" label="Your name" required />
                <Field name="email" label="Email" type="email" required />
                <Field name="company" label="Company (optional)" />
                <div>
                  <label className="mb-3 block text-xs uppercase tracking-[0.2em] text-muted-foreground">
                    Project / message
                  </label>
                  <textarea
                    name="message"
                    rows={5}
                    required
                    className="w-full resize-none border-0 border-b border-border bg-transparent pb-3 text-lg text-foreground outline-none transition-colors placeholder:text-muted-foreground/50 focus:border-primary"
                    placeholder="Tell me about it..."
                  />
                </div>
                <input type="hidden" name="subject" value="New inquiry from favouremmanuel.com" />
                <input type="checkbox" name="botcheck" className="hidden" tabIndex={-1} />

                <div className="pt-4">
                  <Magnetic>
                    <button
                      type="submit"
                      disabled={loading}
                      className="group inline-flex items-center gap-3 rounded-full bg-primary px-8 py-4 text-sm font-medium text-primary-foreground transition-opacity disabled:opacity-60"
                    >
                      {loading ? (
                        <>
                          <Loader2 className="h-4 w-4 animate-spin" />
                          Sending
                        </>
                      ) : (
                        <>
                          Send message
                          <ArrowUpRight className="h-4 w-4 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
                        </>
                      )}
                    </button>
                  </Magnetic>
                </div>
              </form>
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  );
}

function Field({ name, label, type = "text", required }: { name: string; label: string; type?: string; required?: boolean }) {
  return (
    <div>
      <label className="mb-3 block text-xs uppercase tracking-[0.2em] text-muted-foreground">{label}</label>
      <input
        type={type}
        name={name}
        required={required}
        className="w-full border-0 border-b border-border bg-transparent pb-3 text-lg text-foreground outline-none transition-colors placeholder:text-muted-foreground/50 focus:border-primary"
      />
    </div>
  );
}
