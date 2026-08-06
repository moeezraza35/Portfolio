import { Quote, Star } from "lucide-react";
import Reveal from "../components/reveal";

const REVIEWS = [
  {
    name: "Qadees Wajid",
    role: "Business Developer and Freelancer",
    text: "The Attendance System doesn't feel like a project built by a fresh graduate—it feels enterprise-ready. His attention to architectural integrity and edge-case handling is far beyond what I expected from someone at his level.",
    stars: 4
  },
  {
    name: "Zeshan",
    role: "CEO, Ravo Logics",
    text: "I initially hired him strictly for backend development on the GTRS Club website, but he seamlessly stepped up to handle complex frontend challenges when the scope expanded. Even with the increased workload, he delivered a polished, fully functional product with a problem-solver's mindset.",
    stars: 4
  },
  {
    name: "Zia Shaukat",
    role: "Campus Head, Riphah International College",
    text: "His ability to translate our complex attendance tracking requirements into a streamlined, automated solution was genuinely impressive. He's exactly the kind of engineer we needed to modernize our campus management operations.",
    stars: 5
  },
  {
    name: "Ibrahim Awan",
    role: "Shopify Developer, Maftech",
    text: "He truly saved the day. I was amazed at how quickly he grasped our design challenges and delivered a solution that exceeded every expectation. His development velocity and clean execution are absolutely top-tier.",
    stars: 5
  },
];

export default function Testimonials() {
  return (
    <div className="bg-muted/40">
      <div className="mx-auto max-w-6xl px-5 py-24 sm:px-8">
        <Reveal className="reveal mb-12">
          <p className="eyebrow mb-3">See what others'</p>
          <h2 className="text-4xl font-black sm:text-5xl">Reviews</h2>
        </Reveal>
        <div className="grid grid-cols-1 gap-5 md:grid-cols-3">
          {REVIEWS.map((r, i) => (
            <Card key={i} {...r} delay={i * 100}/>
          ))}
        </div>
      </div>
    </div>
  );
}

function Card({ name, role, text, delay, stars }: { name: string; role: string; text: string; delay: number, stars: number }) {
  return (
    <Reveal
      style={{ animationDelay: `${delay}ms` }}
      className="reveal relative flex flex-col rounded-2xl border border-border bg-card p-6">
      <Quote size={28} className="text-primary/30" />
      <blockquote className="mt-3 text-sm leading-relaxed text-foreground/90">"{text}"</blockquote>
      <div className="mt-5 flex items-center gap-1 text-primary">
        {Array.from({length: stars}).map((_, i) => (
          <Star key={i} size={14} fill="currentColor" strokeWidth={1} stroke="currentColor"/>
        ))}
        {Array.from({ length: 5-stars }).map((_, i) => (
          <Star key={i} size={14} fill="#0000" strokeWidth={1} stroke="currentColor"/>
        ))}
      </div>
      <figcaption className="mt-4 border-t border-border pt-4">
        <div className="text-sm font-bold">{name}</div>
        <div className="text-xs text-muted-foreground">{role}</div>
      </figcaption>
    </Reveal>
  );
}
