import { createFileRoute } from "@tanstack/react-router";
import { Toaster } from "sonner";
import { GrainOverlay } from "@/components/portfolio/GrainOverlay";
import { Cursor } from "@/components/portfolio/Cursor";
import { Nav } from "@/components/portfolio/Nav";
import { Hero } from "@/components/portfolio/Hero";
import { About } from "@/components/portfolio/About";
import { Work } from "@/components/portfolio/Work";
import { Services } from "@/components/portfolio/Services";
import { Insights } from "@/components/portfolio/Insights";
import { Contact } from "@/components/portfolio/Contact";
import { Footer } from "@/components/portfolio/Footer";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Favour Emmanuel — AI Prompt Engineer & LLM Trainer" },
      { name: "description", content: "I turn AI into repeatable systems that save time, improve output quality, and make teams faster." },
      { property: "og:title", content: "Favour Emmanuel — AI Prompt Engineer & LLM Trainer" },
      { property: "og:description", content: "Prompt systems, LLM evaluation, AI workflow automation, and team training." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Index,
});

function Index() {
  return (
    <div className="relative min-h-screen bg-background text-foreground">
      <GrainOverlay />
      <Cursor />
      <Toaster theme="dark" position="bottom-right" />
      <Nav />
      <main>
        <Hero />
        <Work />
        <About />
        <Services />
        <Insights />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
