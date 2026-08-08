import { Globe, Smartphone, Plug, Radio, ArrowRight } from "lucide-react";
import Reveal from "../components/reveal";

type ServiceType = {
  imageSrc: string,
  gigLink: string,
  delay?: number,
}

const SERVICES: Array<ServiceType> = [
  { imageSrc: "https://fiverr-res.cloudinary.com/images/q_auto,f_auto/gigs/489762509/original/bb1de0ccd68dc322259afb860f5bd3268cfcb2dc/do-fast-api-and-react-js-full-stack-web-development.jpg", gigLink: "https://www.fiverr.com/moeez_raza_35/do-fast-api-and-react-js-full-stack-web-development"},
  { imageSrc: "https://fiverr-res.cloudinary.com/images/q_auto,f_auto/gigs/491457597/original/c14986a4ca6b9eddb01ecf6b1be9b35d5c842147/build-real-time-chat-web-app-and-messaging-system.png", gigLink: "https://www.fiverr.com/moeez_raza_35/build-real-time-chat-web-app-and-messaging-system"},
  { imageSrc: "https://fiverr-res.cloudinary.com/images/q_auto,f_auto/gigs/491528611/original/afb1ebbc3194f327b5035b4317fdb6b9dd992e28/integrate-third-party-api-stripe-open-ai-firebase-and-custom-api-connection.png", gigLink: "https://www.fiverr.com/moeez_raza_35/integrate-third-party-api-stripe-open-ai-firebase-and-custom-api-connection"},
  { imageSrc: "https://fiverr-res.cloudinary.com/images/q_auto,f_auto/gigs/491531086/original/9652d201685e338ffe518469b76cafe0f22d580f/develop-mobile-apps-ios-and-android-apps.png", gigLink: "https://www.fiverr.com/moeez_raza_35/develop-mobile-apps-ios-and-android-apps"},
];

export default function Services() {
  return (
    <div className="mx-auto max-w-6xl px-5 py-24 sm:px-8">
      <Reveal className="reveal mb-12 max-w-2xl">
        <p className="eyebrow mb-3">Check out our</p>
        <h2 className="text-4xl font-black sm:text-5xl">Feature services</h2>
      </Reveal>
      <div className="grid grid-cols-1 gap-5 md:grid-cols-2">
        {SERVICES.map(({imageSrc, gigLink}, i) => (
          <ServiceCard key={i} imageSrc={imageSrc} gigLink={gigLink} delay={i * 90}/>
        ))}
      </div>
    </div>
  );
}

function ServiceCard({
  imageSrc,
  gigLink,
  delay,
}: ServiceType) {
  return (
    <Reveal
      style={{ animationDelay: `${delay}ms` }}
      className="reveal group relative overflow-hidden rounded-2xl border border-border bg-card transition-all duration-300 hover:-translate-y-1 hover:border-primary/40 hover:shadow-(--shadow-soft)">
      <a
        href={gigLink}
        target="_blank"
        rel="noopener noreferrer"
        className="block">
        {/* Banner Image - Full bleed, border-to-border */}
        <img
          src={imageSrc}
          alt="Fiverr Gig Banner"
          className="aspect-video w-full object-cover transition-transform duration-500 group-hover:scale-105"/>

        {/* Overlay on Hover */}
        <div className="absolute inset-0 flex items-center justify-center bg-black/60 opacity-0 transition-opacity duration-300 group-hover:opacity-100">
          {/* <span className="rounded-full bg-white px-8 py-3 font-bold text-black shadow-lg transition-transform duration-300 group-hover:scale-110">
            Order Now 🚀
          </span> */}
          
          <span
            className="mt-8 inline-flex items-center gap-2 rounded-full bg-white px-6 py-3 text-sm font-bold text-primary shadow-lg transition-transform hover:-translate-y-0.5">
            Order Now <ArrowRight size={16} />
          </span>
        </div>
      </a>
    </Reveal>
  );
}
