import { useEffect, useRef, useState } from "react";
import { Bold, Italic, Underline, Type } from "lucide-react";

const SIZES = [
  { label: "S", value: "2" },
  { label: "M", value: "3" },
  { label: "L", value: "5" },
  { label: "XL", value: "6" },
];

type RichTextEditorProps = {
  value: string;
  onChange: (value: string) => void;
  placeholder?: string;
};

export default function RichTextEditor({ value, onChange, placeholder }: RichTextEditorProps) {
  const editorRef = useRef<HTMLDivElement>(null);
  const [empty, setEmpty] = useState(!value.trim());

  useEffect(() => {
    const editor = editorRef.current;

    if (!editor) {
      return;
    }

    if (editor.innerHTML !== value) {
      editor.innerHTML = value;
    }

    setEmpty(!editor.textContent?.trim());
  }, [value]);

  const exec = (cmd: string, value?: string) => {
    editorRef.current?.focus();
    document.execCommand(cmd, false, value);

    const nextValue = editorRef.current?.innerHTML ?? "";
    setEmpty(!(editorRef.current?.textContent ?? "").trim());
    onChange(nextValue);
  };

  return (
    <div className="rounded-xl border border-border bg-background shadow-sm focus-within:border-primary focus-within:ring-2 focus-within:ring-primary/20 transition">
      <div className="flex flex-wrap items-center gap-1 border-b border-border px-2 py-1.5">
        <button type="button" onClick={() => exec("bold")} aria-label="Bold"
          className="grid h-8 w-8 place-items-center rounded-md hover:bg-primary/10 hover:text-primary">
          <Bold size={15} />
        </button>
        <button type="button" onClick={() => exec("italic")} aria-label="Italic"
          className="grid h-8 w-8 place-items-center rounded-md hover:bg-primary/10 hover:text-primary">
          <Italic size={15} />
        </button>
        <button type="button" onClick={() => exec("underline")} aria-label="Underline"
          className="grid h-8 w-8 place-items-center rounded-md hover:bg-primary/10 hover:text-primary">
          <Underline size={15} />
        </button>
        <span className="mx-1 h-5 w-px bg-border" />
        <div className="flex items-center gap-1 pl-1 pr-2 text-muted-foreground">
          <Type size={14} />
          <span className="text-[11px] font-mono uppercase tracking-wider">Size</span>
        </div>
        {SIZES.map((s) => (
          <button
            key={s.value}
            type="button"
            onClick={() => exec("fontSize", s.value)}
            className="h-8 min-w-8 rounded-md px-2 text-xs font-semibold hover:bg-primary/10 hover:text-primary">
            {s.label}
          </button>
        ))}
      </div>
      <div className="relative">
        <div
          ref={editorRef}
          contentEditable
          suppressContentEditableWarning
          onInput={(e) => {
            const nextValue = e.currentTarget.innerHTML;

            setEmpty(!(e.currentTarget.textContent ?? "").trim());
            onChange(nextValue);
          }}
          className="min-h-40 max-h-90 overflow-auto px-4 py-3 text-sm leading-relaxed outline-none"/>
        {empty && (
          <span className="pointer-events-none absolute left-4 top-3 text-sm text-muted-foreground">
            {placeholder ?? "Write your message…"}
          </span>
        )}
      </div>
    </div>
  );
}