import Reveal from "../components/reveal";

export default function ImageWithText({
  eyebrow, heading, paragraph, image, reverse = false,
}: {
  eyebrow: string;
  heading: string;
  paragraph: string;
  image: string;
  reverse?: boolean;
}) {
  return (
    <div className="mx-auto max-w-6xl px-5 py-20 sm:px-8">
      <div className={`grid items-center gap-10 md:grid-cols-2 ${reverse ? "md:*:first:order-2" : ""}`}>
        <Reveal className={`reveal ${reverse ? "slide-left" : "slide-right"} relative`}>
          <div className="absolute -inset-4 rounded-3xl bg-linear-to-br from-primary/20 to-secondary/20 blur-2xl" />
          <img
            src={image}
            alt={heading}
            loading="lazy"
            className="relative w-full rounded-2xl border border-border shadow-(--shadow-lift)"
          />
        </Reveal>
        <Reveal className={`reveal ${reverse ? "slide-right" : "slide-left"}`}>
          <p className="eyebrow mb-3">{eyebrow}</p>
          <h2 className="text-4xl font-black sm:text-5xl">{heading}</h2>
          <p className="mt-5 text-base leading-relaxed text-muted-foreground sm:text-lg">{paragraph}</p>
          <div className="mt-6 flex items-center gap-3">
            <span className="inline-block h-px w-12 bg-primary" />
            <span className="font-mono text-xs uppercase tracking-widest text-primary">Process</span>
          </div>
        </Reveal>
      </div>
    </div>
  );
}
