import Reveal from "../components/reveal";

const SKILLS = [
  "Python", "JavaScript", "TypeScript", "FastAPI", "Django", "Flask",
  "Node.JS", "Next.JS", "React", "MySQL", "PostgreSQL", "MongoDB",
  "Apache", "Nginx", "C/C++",
];

export default function Skills() {
  const doubled = [...SKILLS, ...SKILLS];
  return (
    <div className="mx-auto max-w-6xl px-5 py-24 sm:px-8">
      <Reveal className="reveal mb-10">
        <p className="eyebrow mb-3">Here are my</p>
        <h2 className="text-4xl font-black sm:text-5xl">Skills</h2>
      </Reveal>
      <div className="relative overflow-hidden rounded-2xl border border-border bg-card py-6">
        <div className="pointer-events-none absolute inset-y-0 left-0 z-10 w-24 bg-linear-to-r from-card to-transparent" />
        <div className="pointer-events-none absolute inset-y-0 right-0 z-10 w-24 bg-linear-to-l from-card to-transparent" />
        <div className="flex marquee-track-fast w-max gap-3 whitespace-nowrap">
          {doubled.map((s, i) => (
            <span
              key={i}
              className="rounded-full border border-border bg-background px-5 py-2.5 font-mono text-sm font-medium text-foreground transition-colors hover:border-primary hover:text-primary">
              {s}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
}
