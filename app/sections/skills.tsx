import { ToolCard } from "./tools";
import { type ToolType } from "./tools";
import Reveal from "../components/reveal";

const SKILLS: Array<ToolType> = [
  { name: "Python", Icon: "https://cdn.simpleicons.org/python/3776AB" },
  { name: "JavaScript", Icon: "https://cdn.simpleicons.org/javascript/F7DF1E" },
  { name: "TypeScript", Icon: "https://cdn.simpleicons.org/typescript/3178C6" },
  { name: "C/C++", Icon: "https://cdn.simpleicons.org/cplusplus/00599C" },
  { name: "Go-Lang", Icon: "https://cdn.simpleicons.org/go/00ADD8" },
  { name: "FastAPI", Icon: "https://cdn.simpleicons.org/fastapi/009688" },
  { name: "Django", Icon: "https://cdn.simpleicons.org/django/092E20" },
  { name: "Flask", Icon: "https://cdn.simpleicons.org/flask/000000" },
  { name: "Node.JS", Icon: "https://cdn.simpleicons.org/nodedotjs/339933" },
  { name: "Next.JS", Icon: "https://cdn.simpleicons.org/nextdotjs/000000" },
  { name: "React", Icon: "https://cdn.simpleicons.org/react/61DAFB" },
  { name: "MySQL", Icon: "https://cdn.simpleicons.org/mysql/4479A1" },
  { name: "PostgreSQL", Icon: "https://cdn.simpleicons.org/postgresql/4169E1" },
  { name: "MongoDB", Icon: "https://cdn.simpleicons.org/mongodb/47A248" },
  { name: "Apache", Icon: "https://cdn.simpleicons.org/apache/D22128" },
  { name: "Nginx", Icon: "https://cdn.simpleicons.org/nginx/009639" },
]

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
          {doubled.map(({name, Icon}, i) => (
            <ToolCard
              key={i}
              name={name}
              Icon={Icon}
              delay={i * 50}/>
          ))}
        </div>
      </div>
    </div>
  );
}
