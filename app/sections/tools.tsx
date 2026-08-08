import { GithubIcon } from "../components/icons";
import Reveal from "../components/reveal";

export type ToolType = {
  name: string,
  Icon: string | React.ElementType,
  delay?: number,
}
const TOOLS: Array<ToolType> = [
  { name: "VS Code", Icon: "https://code.visualstudio.com/favicon.ico" },
  { name: "Cursor", Icon: "https://cursor.com/favicon.ico" },
  { name: "Android Studio", Icon: "https://uxwing.com/wp-content/themes/uxwing/download/brands-and-social-media/android-studio-icon.png" },
  { name: "QT Creator", Icon: "https://upload.wikimedia.org/wikipedia/commons/thumb/0/0b/Qt_logo_2016.svg/1280px-Qt_logo_2016.svg.png" },
  { name: "GitHub", Icon: GithubIcon },
  { name: "DeepSeek", Icon: "https://fe-static.deepseek.com/chat/favicon.svg" },
  { name: "LovableAI", Icon: "https://lovable.dev/favicon.svg" },
  { name: "Gemini", Icon: "https://www.gstatic.com/lamda/images/gemini_sparkle_aurora_33f86dc0c0257da337c63.svg" },
  { name: "Canva", Icon: "https://static.canva.com/domain-assets/canva/static/images/favicon-1.ico"},
  { name: "Figma", Icon: "https://static.figma.com/app/icon/1/favicon.svg"},
  { name: "SVG Repo", Icon: "https://images.icon-icons.com/2699/PNG/512/svgrepo_logo_icon_170689.png"},
  { name: "I Love PDF", Icon: "https://www.ilovepdf.com/img/favicons-pdf/favicon-32x32.png"},
  { name: "Lucid", Icon: "https://cdn-cashy-static-assets.lucidchart.com/app/webroot/favicons/favicon_suite_v3.ico"},
  { name: "Grammarly", Icon: "https://denali-static.grammarly.com/files/0018912fc1389f26f2ed/favicon-32x32-v2.png"},
  { name: "Mermaid", Icon: "https://mermaid.js.org/favicon.ico"},
  { name: "AnyDesk", Icon: "https://anydesk.com/_static/img/favicon/favicon-32x32.png" },
  { name: "Netlify", Icon: "https://www.netlify.com/favicon/icon.svg"},
  { name: "Contabo", Icon: "https://contabo.com/favicon-32x32.png"},
  { name: "Drive to Web", Icon: "https://ssl.gstatic.com/docs/doclist/images/drive_favicon_2026_32dp.png"},
  { name: "Docker", Icon: "https://www.docker.com/app/uploads/2024/02/cropped-docker-logo-favicon-32x32.png"},
  { name: "Ubuntu", Icon: "https://assets.ubuntu.com/v1/be7e4cc6-COF-favicon-32x32.png" },
  { name: "VirtualBox", Icon: "https://www.virtualbox.org/favicon.ico" },
];

export default function Tools() {
  return (
    <div className="mx-auto max-w-6xl px-5 py-24 sm:px-8">
      <Reveal className="reveal mb-12">
        <p className="eyebrow mb-3">Here are</p>
        <h2 className="text-4xl font-black sm:text-5xl">Tools</h2>
      </Reveal>
      <div className="grid grid-cols-2 gap-3 sm:grid-cols-3 md:grid-cols-5">
        {TOOLS.map(({ name, Icon }, i) => (
          <ToolCard key={name} name={name} Icon={Icon} delay={i * 40} />
        ))}
      </div>
    </div>
  );
}

export function ToolCard({
  name,
  Icon,
  delay,
}: ToolType) {
  const isImageUrl = typeof Icon === "string";

  return (
    <Reveal
      style={{ animationDelay: `${delay}ms` }}
      className="reveal group flex flex-col items-center gap-2 rounded-xl border border-border bg-card px-4 py-5 transition-all hover:-translate-y-0.5 hover:border-primary/40 hover:shadow-(--shadow-soft)">
      <div className="grid h-10 w-10 place-items-center rounded-lg bg-primary/10 text-primary transition-colors group-hover:bg-primary group-hover:text-primary-foreground">
        {isImageUrl ? (
          <img
            src={Icon}
            alt={name}
            className="h-6 w-6 object-contain transition-colors group-hover:brightness-0 group-hover:invert"/>
        ) : (
          <Icon size={18} />
        )}
      </div>
      <span className="text-sm font-medium">{name}</span>
    </Reveal>
  );
}
