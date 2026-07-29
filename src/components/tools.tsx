import { useReveal } from "../hooks/use-reveal";
import { GithubIcon } from "./icons";
import {
  Code,
  MousePointerClick,
  Smartphone,
  Terminal,
  Box,
  Cast,
  Layers,
  Brain,
  Sparkles,
} from "lucide-react";

const TOOLS = [
  { name: "VS Code", Icon: Code },
  { name: "Cursor", Icon: MousePointerClick },
  { name: "Android Studio", Icon: Smartphone },
  { name: "Ubuntu", Icon: Terminal },
  { name: "VirtualBox", Icon: Box },
  { name: "AnyDesk", Icon: Cast },
  { name: "GitHub", Icon: GithubIcon },
  { name: "QT", Icon: Layers },
  { name: "DeepSeek", Icon: Brain },
  { name: "LovableAI", Icon: Sparkles },
];

export default function Tools() {
  const ref = useReveal<HTMLDivElement>();
  return (
    <div className="mx-auto max-w-6xl px-5 py-24 sm:px-8">
      <div ref={ref} className="reveal mb-12">
        <p className="eyebrow mb-3">Here are</p>
        <h2 className="text-4xl font-black sm:text-5xl">Tools</h2>
      </div>
      <div className="grid grid-cols-2 gap-3 sm:grid-cols-3 md:grid-cols-5">
        {TOOLS.map(({ name, Icon }, i) => (
          <ToolCard key={name} name={name} Icon={Icon} delay={i * 40} />
        ))}
      </div>
    </div>
  );
}

function ToolCard({ name, Icon, delay }: { name: string; Icon: typeof Code|React.ComponentType; delay: number }) {
  const ref = useReveal<HTMLDivElement>();
  return (
    <div
      ref={ref}
      style={{ animationDelay: `${delay}ms` }}
      className="reveal group flex flex-col items-center gap-2 rounded-xl border border-border bg-card px-4 py-5 transition-all hover:-translate-y-0.5 hover:border-primary/40 hover:shadow-(--shadow-soft)"
    >
      <div className="grid h-10 w-10 place-items-center rounded-lg bg-primary/10 text-primary transition-colors group-hover:bg-primary group-hover:text-primary-foreground">
        <Icon size={18} />
      </div>
      <span className="text-sm font-medium">{name}</span>
    </div>
  );
}
