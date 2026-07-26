import { useEffect, useState } from "react";
import { ArrowRight, Download } from "lucide-react";
import hero1 from "../assets/hero-1.jpg";
import hero2 from "../assets/hero-2.jpg";
import hero3 from "../assets/hero-3.jpg";

const SLIDES = [hero1, hero2, hero3];

export default function Hero() {
  const [i, setI] = useState(0);
  useEffect(() => {
    const t = setInterval(() => setI((v) => (v + 1) % SLIDES.length), 4500);
    return () => clearInterval(t);
  }, []);

  return (
    <div className="relative min-h-svh overflow-hidden pt-28 pb-16 sm:pt-32">
      {/* Carousel bg */}
      <div className="absolute inset-0">
        {SLIDES.map((src, idx) => (
          <img
            key={src}
            src={src}
            alt=""
            width={1600}
            height={1000}
            className={[
              "absolute inset-0 h-full w-full object-cover transition-opacity duration-1200",
              idx === i ? "opacity-100" : "opacity-0",
            ].join(" ")}
          />
        ))}
        <div className="absolute inset-0 bg-linear-to-b from-(--overlay-base)/40 via-(--overlay-base)/70 to-(--overlay-base)"/>
        <div className="absolute inset-0 grid-bg opacity-40" />
      </div>

      <div className="relative mx-auto max-w-6xl px-5 sm:px-8">
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
              href="#contact"
              className="group inline-flex items-center gap-2 rounded-full bg-primary px-6 py-3 text-sm font-semibold text-primary-foreground shadow-(--shadow-soft) transition-transform hover:-translate-y-0.5"
            >
              Contact
              <ArrowRight size={16} className="transition-transform group-hover:translate-x-0.5" />
            </a>
            <a
              href="#"
              className="inline-flex items-center gap-2 rounded-full border border-foreground/15 bg-white/70 px-6 py-3 text-sm font-semibold text-black backdrop-blur transition-colors hover:border-foreground/40"
            >
              <Download size={16} />
              Download CV
            </a>
          </div>
        </div>

        {/* Indicators */}
        <div className="absolute bottom-6 right-5 flex gap-2 sm:right-8">
          {SLIDES.map((_, idx) => (
            <button
              key={idx}
              onClick={() => setI(idx)}
              aria-label={`Slide ${idx + 1}`}
              className={[
                "h-1.5 rounded-full transition-all",
                idx === i ? "w-8 bg-primary" : "w-4 bg-foreground/25",
              ].join(" ")}
            />
          ))}
        </div>
      </div>
    </div>
  );
}
