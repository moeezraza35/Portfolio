import { ArrowRight, Download } from "lucide-react";
import hero1 from "../assets/hero-1.jpg";
import hero2 from "../assets/hero-2.jpg";
import hero3 from "../assets/hero-3.jpg";
import Slider from "../components/slider";

const SLIDES = [hero1, hero2, hero3];

export default function Hero() {
  return (
    <Slider slides={SLIDES}>
      <div className="max-w-3xl">
        <p className="eyebrow mb-4">Hi, I'm</p>
        <h1 className="text-5xl font-black leading-[0.95] tracking-tight sm:text-7xl md:text-8xl">
          Moeez <span className="text-primary">Raza</span>
        </h1>
        <p className="mt-5 max-w-xl text-lg text-muted-foreground sm:text-xl">
          Full Stack web and Mobile app developer — building clean, modular systems that ship and scale.
        </p>
        <div className="mt-8 flex flex-wrap gap-3">
          <a
            href="/contact/"
            className="group inline-flex items-center gap-2 rounded-full bg-primary px-6 py-3 text-sm font-semibold text-primary-foreground shadow-(--shadow-soft) transition-transform hover:-translate-y-0.5">
            Contact
            <ArrowRight size={16} className="transition-transform group-hover:translate-x-0.5" />
          </a>
          <a
            href="https://drive.google.com/file/d/1TyGn45saML9243kB3S13JcChGt7F_0TP/view?usp=sharing"
            target="_blank"
            className="inline-flex items-center gap-2 rounded-full border border-foreground/15 bg-white/70 px-6 py-3 text-sm font-semibold text-black backdrop-blur transition-colors hover:border-foreground/40">
            <Download size={16} />
            Download CV
          </a>
        </div>
      </div>
    </Slider>
  );
}
