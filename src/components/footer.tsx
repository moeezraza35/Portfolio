import {
  Mail,
  Phone,
  MapPin,
  Send
} from "lucide-react";
import {
  GithubIcon,
  LinkedinIcon,
  TwitterIcon
} from "./ui/icons";

export default function Footer() {
  return (
    <footer className="bg-primary text-primary-foreground">
      <div className="mx-auto grid max-w-6xl gap-10 px-5 py-16 sm:px-8 md:grid-cols-4">
        <div className="md:col-span-1">
          <div className="flex items-center gap-3">
            <img src="/logo-white.svg" alt="MR" className="h-10 w-10" />
            <div className="font-display text-xl tracking-tight">Moeez Raza</div>
          </div>
          <p className="mt-4 max-w-xs text-sm text-primary-foreground/70">
            Moeez Raza — Full Stack web and Mobile app developer building software that lasts.
          </p>
          <div className="mt-5 flex gap-2">
            {[GithubIcon, LinkedinIcon, TwitterIcon].map((Icon, i) => (
              <a
                key={i}
                href="#"
                className="grid h-9 w-9 place-items-center rounded-lg border border-primary-foreground/25 transition-colors hover:border-primary-foreground hover:bg-primary-foreground hover:text-primary"
              >
                <Icon width="16px" height="16px" />
              </a>
            ))}
          </div>
        </div>

        <div>
          <h4 className="font-mono text-xs uppercase tracking-widest text-primary-foreground/90">Quick Links</h4>
          <ul className="mt-4 space-y-2 text-sm text-primary-foreground/85">
            {["Home", "Services", "Projects", "Tools", "Reviews", "Skills"].map((l) => (
              <li key={l}><a href={`#${l.toLowerCase()}`} className="hover:text-primary-foreground hover:underline">{l}</a></li>
            ))}
          </ul>
        </div>

        <div>
          <h4 className="font-mono text-xs uppercase tracking-widest text-primary-foreground/90">Contact</h4>
          <ul className="mt-4 space-y-3 text-sm text-primary-foreground/85">
            <li className="flex items-center gap-2"><Mail size={14} /> moeez@example.com</li>
            <li className="flex items-center gap-2"><Phone size={14} /> +92 300 0000000</li>
            <li className="flex items-center gap-2"><MapPin size={14} /> Lahore, Pakistan</li>
          </ul>
        </div>

        <div>
          <h4 className="font-mono text-xs uppercase tracking-widest text-primary-foreground/90">Newsletter</h4>
          <p className="mt-4 text-sm text-primary-foreground/70">Occasional notes on shipping software.</p>
          <form className="mt-3 flex overflow-hidden rounded-lg border border-primary-foreground/25 bg-primary-foreground/10 focus-within:border-primary-foreground/60">
            <input
              type="email"
              placeholder="you@email.com"
              className="min-w-0 flex-1 bg-transparent px-3 py-2 text-sm text-primary-foreground placeholder:text-primary-foreground/50 outline-none"
            />
            <button
              type="submit"
              aria-label="Subscribe"
              className="flex shrink-0 items-center gap-1.5 bg-primary-foreground px-4 text-sm font-semibold text-primary transition-colors hover:bg-primary-foreground/90"
            >
              <Send size={14} />
              {/* <span className="hidden sm:inline">Join</span> */}
            </button>
          </form>
        </div>
      </div>
      <div className="border-t border-primary-foreground/15">
        <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-2 px-5 py-5 text-xs text-primary-foreground/70 sm:flex-row sm:px-8">
          <div>© {new Date().getFullYear()} Moeez Raza. All rights reserved.</div>
          <div>Built with clean code and negotiable pricing.</div>
        </div>
      </div>
    </footer>
  );
}
