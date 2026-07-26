import { useEffect, useState } from "react";
import {
  Home,
  Sparkles,
  LayoutGrid,
  Wrench,
  MessageSquareQuote,
  GraduationCap,
  Cpu,
  Sun,
  Search,
  Menu,
  X,
} from "lucide-react";
import { getTheme, setTheme } from "../utils/theme"

const NAV = [
  { id: "hero", label: "Home", Icon: Home },
  { id: "services", label: "Services", Icon: Sparkles },
  { id: "projects", label: "Projects", Icon: LayoutGrid },
  { id: "tools", label: "Tools", Icon: Wrench },
  { id: "testimonials", label: "Reviews", Icon: MessageSquareQuote },
  { id: "learn", label: "Learn", Icon: GraduationCap },
  { id: "skills", label: "Skills", Icon: Cpu },
];

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [drawer, setDrawer] = useState(false);
  const [search, setSearch] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <>
      <div className="fixed inset-x-0 top-0 z-50 px-3 pt-3 sm:px-6 sm:pt-4">
        <div
          className={[
            "mx-auto flex max-w-6xl items-center justify-between gap-3 rounded-2xl border px-3 py-2.5 sm:px-5 transition-all duration-500",
            scrolled
              ? "border-white/40 bg-white/60 text-foreground shadow-[0_10px_40px_-12px_rgba(0,0,0,0.15)] backdrop-blur-xl"
              : "border-transparent bg-primary text-primary-foreground shadow-[0_10px_30px_-12px_rgba(64,167,72,0.6)]",
          ].join(" ")}
        >
          <a href="#hero" className="flex items-center gap-2 font-display font-bold">
            <img src={scrolled ? "/favicon.svg" : "/logo-white.svg"} alt="MR" className="h-7 w-7" />
            <span className="hidden text-base tracking-tight sm:inline">Moeez Raza</span>
          </a>

          <nav className="hidden items-center gap-1 lg:flex">
            {NAV.map(({ id, label, Icon }) => (
              <a
                key={id}
                href={`#${id}`}
                className={[
                  "group flex items-center gap-1.5 rounded-lg px-2.5 py-1.5 text-sm font-medium transition-colors",
                  scrolled ? "hover:bg-primary/10 hover:text-primary" : "hover:bg-white/15",
                ].join(" ")}
              >
                <Icon size={15} className="opacity-80 group-hover:opacity-100" />
                {label}
              </a>
            ))}
          </nav>

          <div className="flex items-center gap-1">
            <button
              onClick={() => setSearch((v) => !v)}
              aria-label="Search"
              className={[
                "grid h-9 w-9 place-items-center rounded-lg transition-colors",
                scrolled ? "hover:bg-primary/10 hover:text-primary" : "hover:bg-white/15",
              ].join(" ")}
            >
              <Search size={17} />
            </button>
            <button
              aria-label="Theme"
              title="Light theme only"
              className={[
                "grid h-9 w-9 place-items-center rounded-lg transition-colors",
                scrolled ? "hover:bg-primary/10 hover:text-primary" : "hover:bg-white/15",
              ].join(" ")}
              onClick={() => {
                const theme = getTheme()
                if (theme === "auto") {
                  setTheme("light")
                }else if (theme === "light") {
                  setTheme("dark")
                } else {
                  setTheme("auto")
                }
              }}>
              <Sun size={17} />
            </button>
            <button
              onClick={() => setDrawer(true)}
              aria-label="Menu"
              className={[
                "grid h-9 w-9 place-items-center rounded-lg transition-colors lg:hidden",
                scrolled ? "hover:bg-primary/10 hover:text-primary" : "hover:bg-white/15",
              ].join(" ")}
            >
              <Menu size={18} />
            </button>
          </div>
        </div>

        {search && (
          <div className="mx-auto mt-2 max-w-6xl overflow-hidden rounded-2xl border border-border/60 bg-white/80 shadow-lg backdrop-blur-xl animate-in fade-in slide-in-from-top-2">
            <div className="flex items-center gap-2 px-4 py-3">
              <Search size={16} className="text-muted-foreground" />
              <input
                autoFocus
                placeholder="Search projects, tools, skills…"
                className="flex-1 bg-transparent text-sm outline-none placeholder:text-muted-foreground"
              />
              <button onClick={() => setSearch(false)} className="text-muted-foreground hover:text-foreground">
                <X size={16} />
              </button>
            </div>
          </div>
        )}
      </div>

      {/* Mobile drawer */}
      <div
        className={[
          "fixed inset-0 z-60 lg:hidden transition-opacity",
          drawer ? "pointer-events-auto opacity-100" : "pointer-events-none opacity-0",
        ].join(" ")}
      >
        <div
          onClick={() => setDrawer(false)}
          className="absolute inset-0 bg-black/40 backdrop-blur-sm"
        />
        <aside
          className={[
            "absolute right-0 top-0 h-full w-[82%] max-w-sm bg-white shadow-2xl transition-transform duration-300",
            drawer ? "translate-x-0" : "translate-x-full",
          ].join(" ")}
        >
          <div className="flex items-center justify-between border-b border-border px-5 py-4">
            <div className="flex items-center gap-2 font-display font-bold">
              <img src="/favicon.svg" alt="MR" className="h-7 w-7" />
              Menu
            </div>
            <button onClick={() => setDrawer(false)} aria-label="Close" className="grid h-9 w-9 place-items-center rounded-lg hover:bg-muted">
              <X size={18} />
            </button>
          </div>
          <nav className="flex flex-col p-3">
            {NAV.map(({ id, label, Icon }) => (
              <a
                key={id}
                href={`#${id}`}
                onClick={() => setDrawer(false)}
                className="flex items-center gap-3 rounded-xl px-3 py-3 text-sm font-medium hover:bg-primary/10 hover:text-primary"
              >
                <Icon size={18} className="text-primary" />
                {label}
              </a>
            ))}
          </nav>
        </aside>
      </div>
    </>
  );
}
