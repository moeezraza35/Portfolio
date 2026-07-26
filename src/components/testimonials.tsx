import { Quote, Star } from "lucide-react";
import { useReveal } from "../hooks/use-reveal";

const REVIEWS = [
  {
    name: "Ayesha Khan",
    role: "Product Manager, MedTech Co.",
    text: "Moeez delivered our hospital management platform ahead of schedule. Clean architecture, tight documentation — a genuine full stack pro.",
  },
  {
    name: "Daniel Wright",
    role: "Founder, FieldOps",
    text: "He rebuilt our mobile app from scratch and doubled our retention. Communication was crisp; the code, cleaner.",
  },
  {
    name: "Sara Malik",
    role: "CTO, Retailly",
    text: "Rare combination of speed and craft. The real-time dashboard he built still runs untouched two years later.",
  },
];

export default function Testimonials() {
  const ref = useReveal<HTMLDivElement>();
  return (
    <div className="bg-muted/40">
      <div className="mx-auto max-w-6xl px-5 py-24 sm:px-8">
        <div ref={ref} className="reveal mb-12">
          <p className="eyebrow mb-3">See what others'</p>
          <h2 className="text-4xl font-black sm:text-5xl">Reviews</h2>
        </div>
        <div className="grid grid-cols-1 gap-5 md:grid-cols-3">
          {REVIEWS.map((r, i) => (
            <Card key={i} {...r} delay={i * 100} />
          ))}
        </div>
      </div>
    </div>
  );
}

function Card({ name, role, text, delay }: { name: string; role: string; text: string; delay: number }) {
  const ref = useReveal<HTMLDivElement>();
  return (
    <figure
      ref={ref}
      style={{ animationDelay: `${delay}ms` }}
      className="reveal relative flex flex-col rounded-2xl border border-border bg-card p-6"
    >
      <Quote size={28} className="text-primary/30" />
      <blockquote className="mt-3 text-sm leading-relaxed text-foreground/90">"{text}"</blockquote>
      <div className="mt-5 flex items-center gap-1 text-primary">
        {Array.from({ length: 5 }).map((_, i) => (
          <Star key={i} size={14} fill="currentColor" strokeWidth={0} />
        ))}
      </div>
      <figcaption className="mt-4 border-t border-border pt-4">
        <div className="text-sm font-bold">{name}</div>
        <div className="text-xs text-muted-foreground">{role}</div>
      </figcaption>
    </figure>
  );
}
