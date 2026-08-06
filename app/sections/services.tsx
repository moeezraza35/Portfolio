import { Globe, Smartphone, Plug, Radio } from "lucide-react";
import Reveal from "../components/reveal";

const SERVICES = [
  { title: "Full Stack Web Development", desc: "End-to-end web apps with React, Next.js and modern APIs.", Icon: Globe },
  { title: "Mobile App Development", desc: "Cross-platform apps that feel native on iOS and Android.", Icon: Smartphone },
  { title: "API Integration", desc: "Wire third-party services cleanly with resilient contracts.", Icon: Plug },
  { title: "Real Time App Development", desc: "WebSockets and streams for live dashboards and chat.", Icon: Radio },
];

export default function Services() {
  return (
    <div className="mx-auto max-w-6xl px-5 py-24 sm:px-8">
      <Reveal className="reveal mb-12 max-w-2xl">
        <p className="eyebrow mb-3">Check out our</p>
        <h2 className="text-4xl font-black sm:text-5xl">Feature services</h2>
      </Reveal>
      <div className="grid grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-4">
        {SERVICES.map(({ title, desc, Icon }, i) => (
          <ServiceCard key={title} title={title} desc={desc} Icon={Icon} delay={i * 90} />
        ))}
      </div>
    </div>
  );
}

function ServiceCard({
  title, desc, Icon, delay,
}: { title: string; desc: string; Icon: typeof Globe; delay: number }) {
  return (
    <Reveal
      style={{ animationDelay: `${delay}ms` }}
      className="reveal group relative overflow-hidden rounded-2xl border border-border bg-card p-6 transition-all duration-300 hover:-translate-y-1 hover:border-primary/40 hover:shadow-(--shadow-soft)">
      <div className="absolute -right-8 -top-8 h-24 w-24 rounded-full bg-primary/10 blur-2xl transition-opacity group-hover:opacity-100" />
      <div className="relative">
        <div className="mb-4 grid h-11 w-11 place-items-center rounded-xl bg-primary/10 text-primary">
          <Icon size={22} />
        </div>
        <h3 className="text-lg font-bold">{title}</h3>
        <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{desc}</p>
      </div>
    </Reveal>
  );
}
