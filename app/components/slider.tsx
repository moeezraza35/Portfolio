"use client";

import { StaticImageData } from "next/image";
import { useState, useEffect, ReactNode } from "react";

interface SliderProps {
  slides: Array<StaticImageData>;
  children: ReactNode,
}

function Slider({ slides, children }: SliderProps){
  const [i, setI] = useState(0);
  useEffect(() => {
    const t = setInterval(() => setI((v) => (v + 1) % slides.length), 4500);
    return () => clearInterval(t);
  }, []);
  return (
    <div className="relative flex min-h-svh items-center overflow-hidden py-16 sm:py-20">
      {/* Carousel bg */}
      <div className="absolute inset-0">
        {slides.map((img, idx) => (
          <img
            key={img.src}
            src={img.src}
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
        { children }
        {/* Indicators */}
        <div className="absolute -bottom-6 right-5 flex gap-2 sm:right-8">
          {slides.map((_, idx) => (
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
  )
}
export default Slider
