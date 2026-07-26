import { ArrowUpRight } from "lucide-react";
import { useReveal } from "../hooks/use-reveal";

const obmms = "/images/project-obmms.jpg"
const PROJECTS = [
  {
    title: "OBMMS",
    desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. A hospital management system streamlining patient flow, billing, and analytics.",
    image: obmms,
    tag: "Full Stack",
  },
  {
    title: "OBMMS",
    desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Modules for OPD, IPD, pharmacy, and lab with real-time dashboards.",
    image: obmms,
    tag: "Healthcare",
  },
  {
    title: "OBMMS",
    desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Role-based access, audit trails, and printable reports.",
    image: obmms,
    tag: "Enterprise",
  },
];

export default function Projects() {
  const ref = useReveal<HTMLDivElement>();
  return (
    <div className="mx-auto max-w-6xl px-5 py-24 sm:px-8">
      <div ref={ref} className="reveal mb-12">
        <p className="eyebrow mb-3">Browse my</p>
        <h2 className="text-4xl font-black sm:text-5xl">Projects</h2>
      </div>
      <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
        {PROJECTS.map((p, i) => (
          <ProjectCard key={i} {...p} delay={i * 100} />
        ))}
      </div>
    </div>
  );
}

function ProjectCard({
  title, desc, image, tag, delay,
}: { title: string; desc: string; image: string; tag: string; delay: number }) {
  const ref = useReveal<HTMLDivElement>();
  return (
    <article
      ref={ref}
      style={{ animationDelay: `${delay}ms` }}
      className="reveal group overflow-hidden rounded-2xl border border-border bg-card transition-all duration-300 hover:-translate-y-1 hover:shadow-(--shadow-lift)"
    >
      <div className="relative aspect-4/3 overflow-hidden bg-muted">
        <img src={image} alt={title} loading="lazy" className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105" />
        <span className="absolute left-4 top-4 rounded-full bg-white/90 px-3 py-1 font-mono text-[10px] uppercase tracking-widest text-foreground backdrop-blur">
          {tag}
        </span>
      </div>
      <div className="p-6">
        <h3 className="text-xl font-bold">{title}</h3>
        <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{desc}</p>
        <button className="mt-5 inline-flex items-center gap-1.5 text-sm font-semibold text-primary hover:gap-2 transition-all">
          Learn More <ArrowUpRight size={15} />
        </button>
      </div>
    </article>
  );
}
