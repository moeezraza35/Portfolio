import { GraduationCap, ArrowRight } from "lucide-react";
import { useReveal } from "../hooks/use-reveal";

export default function LearnBanner() {
  const ref = useReveal<HTMLDivElement>();
  return (
    <div className="mx-auto max-w-6xl px-5 py-20 sm:px-8">
      <div
        ref={ref}
        className="reveal relative overflow-hidden rounded-3xl bg-linear-to-br from-[oklch(0.62_0.17_145)] to-[oklch(0.55_0.14_110)] px-8 py-16 text-white sm:px-14 sm:py-20"
      >
        <div className="absolute inset-0 grid-bg opacity-20" />
        <div className="absolute -right-16 -top-16 h-64 w-64 rounded-full bg-white/10 blur-3xl" />
        <div className="relative max-w-2xl">
          <div className="mb-5 inline-flex items-center gap-2 rounded-full bg-white/15 px-3 py-1 font-mono text-xs uppercase tracking-widest backdrop-blur">
            <GraduationCap size={14} /> Browse our
          </div>
          <h2 className="text-4xl font-black leading-tight sm:text-6xl">Learn with us</h2>
          <p className="mt-4 max-w-xl text-white/85">
            Practical tutorials on full stack, mobile, and system design — the same playbook I use to ship real projects.
          </p>
          <a
            href="#"
            className="mt-8 inline-flex items-center gap-2 rounded-full bg-white px-6 py-3 text-sm font-bold text-primary shadow-lg transition-transform hover:-translate-y-0.5"
          >
            Get Started <ArrowRight size={16} />
          </a>
        </div>
      </div>
    </div>
  );
}
