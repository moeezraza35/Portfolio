import { Code2, Recycle, FileText, Server, Handshake, LifeBuoy } from "lucide-react";

const ITEMS = [
  { label: "Clean Code", Icon: Code2 },
  { label: "Reusability", Icon: Recycle },
  { label: "Markdown Docs", Icon: FileText },
  { label: "Linux Hosting", Icon: Server },
  { label: "Negotiable Pricing", Icon: Handshake },
  { label: "After-Sale Services", Icon: LifeBuoy },
];

export default function Marquee() {
  const doubled = [...ITEMS, ...ITEMS];
  return (
    <div className="relative overflow-hidden border-y border-border bg-foreground py-5 text-background">
      <div className="flex marquee-track w-max gap-14 whitespace-nowrap">
        {doubled.map(({ label, Icon }, idx) => (
          <div key={idx} className="flex items-center gap-3 text-sm font-medium tracking-wide">
            <Icon size={18} className="text-primary" />
            <span>{label}</span>
            <span className="text-primary">◆</span>
          </div>
        ))}
      </div>
    </div>
  );
}
