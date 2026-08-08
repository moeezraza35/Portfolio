import Reveal from "../components/reveal";
import obmms from "../assets/project-obmms.png";
import vista from "../assets/project-vista.png";
import ric from "../assets/project-ric.png";
import gtrs from "../assets/project-gtrs.png";
import wshandler from "../assets/project-wshandler.png";

const PROJECTS = [
  {
    title: "Online Bus Monitoring & Management System",
    desc: "A comprehensive fleet management SaaS that secures private bus transportation through role-based payment gating. Administrators gain a centralized command center to monitor live routes, manage financial ledgers, and enforce access controls—ensuring only verified, paid riders board the vehicle.",
    image: obmms.src,
    tag: "SaaS",
  },
  {
    title: "Travel Agency Management System",
    desc: "An end-to-end travel marketplace that transforms how tour operators manage bookings. From an intuitive admin suite for inventory and package configuration to automated email sequences and real-time booking status tracking, this platform streamlines operations while keeping travelers informed at every stage.",
    image: vista.src,
    tag: "Full Stack",
  },
  {
    title: "Attendance System",
    desc: "An enterprise-grade hybrid attendance solution combining web-based management with IoT hardware (RFID & Biometric). It automates the entire attendance lifecycle—from real-time logging to generating filtered PDF reports for staff and students across multiple departments, drastically reducing manual administrative overhead.",
    image: ric.src,
    tag: "IOT",
  },
  {
    title: "Car Insurance System",
    desc: "A dedicated policy lifecycle management system built for GTRS Club. It centralizes vehicle and owner data while automating critical backend operations—including expiry detection, automated email alerts, and seamless insurance certificate generation—ensuring zero lapse in coverage.",
    image: gtrs.src,
    tag: "Full Stack",
  },
  {
    title: "WebSocket Handler",
    desc: "A full-stack WebSocket solution engineered for seamless real-time communication. The FastAPI backend handles dynamic room provisioning and participant identification, while a dedicated React adapter manages resilient reconnection logic—ensuring network instability never disrupts the user experience.",
    image: wshandler.src,
    tag: "Real Time",
  },
];

export default function Projects() {
  return (
    <div className="mx-auto max-w-6xl px-5 py-24 sm:px-8">
      <Reveal className="reveal mb-12">
        <p className="eyebrow mb-3">Browse my</p>
        <h2 className="text-4xl font-black sm:text-5xl">Projects</h2>
      </Reveal>
      <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
        {PROJECTS.map((p, i) => (
          <ProjectCard key={i} {...p} delay={i * 100} />
        ))}
      </div>
    </div>
  );
}

function ProjectCard({
  title, desc, image, tag, delay,
}: { title: string; desc: string; image: string; tag: string; delay: number }) {
  return (
    <Reveal
      style={{ animationDelay: `${delay}ms` }}
      className="reveal group overflow-hidden rounded-2xl border border-border bg-card transition-all duration-300 hover:-translate-y-1 hover:shadow-(--shadow-lift)">
      <div className="relative aspect-4/3 overflow-hidden bg-muted">
        <img src={image} alt={title} loading="lazy" className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105" />
        <span className="absolute left-4 top-4 rounded-full bg-white/90 px-3 py-1 font-mono text-[10px] uppercase tracking-widest text-black backdrop-blur">
          {tag}
        </span>
      </div>
      <div className="p-6">
        <h3 className="text-xl font-bold">{title}</h3>
        <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{desc}</p>
        {/* <button className="mt-5 inline-flex items-center gap-1.5 text-sm font-semibold text-primary hover:gap-2 transition-all">
          Learn More <ArrowUpRight size={15} />
        </button> */}
      </div>
    </Reveal>
  );
}
