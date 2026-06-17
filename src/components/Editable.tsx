import { useEffect, useRef, type ElementType, type CSSProperties } from "react";
import { Upload } from "lucide-react";
import { useEdit } from "@/lib/edit-store";

interface EditableTextProps {
  id: string;
  defaultValue: string;
  as?: ElementType;
  className?: string;
  multiline?: boolean;
  style?: CSSProperties;
}

export function EditableText({
  id,
  defaultValue,
  as: Tag = "p",
  className = "",
  multiline = true,
  style,
}: EditableTextProps) {
  const { adminMode, get, set } = useEdit();
  const value = get(id, defaultValue);
  const ref = useRef<HTMLElement | null>(null);

  // Keep DOM in sync when value changes externally (e.g. on hydrate)
  useEffect(() => {
    if (ref.current && ref.current.innerText !== value) {
      ref.current.innerText = value;
    }
  }, [value]);

  return (
    <Tag
      ref={ref as never}
      className={`${className} ${adminMode ? "editable-active" : ""}`}
      style={style}
      contentEditable={adminMode}
      suppressContentEditableWarning
      spellCheck={adminMode}
      onBlur={(e: React.FocusEvent<HTMLElement>) => {
        if (!adminMode) return;
        const next = multiline ? e.currentTarget.innerText : e.currentTarget.innerText.replace(/\n/g, " ");
        set(id, next);
      }}
    >
      {value}
    </Tag>
  );
}

interface EditableImageProps {
  id: string;
  defaultSrc: string;
  alt: string;
  className?: string;
  imgClassName?: string;
  overlay?: React.ReactNode;
}

export function EditableImage({
  id,
  defaultSrc,
  alt,
  className = "",
  imgClassName = "",
  overlay,
}: EditableImageProps) {
  const { adminMode, get, set } = useEdit();
  const src = get(id, defaultSrc);
  const inputRef = useRef<HTMLInputElement>(null);

  const handleFile = (file: File) => {
    const reader = new FileReader();
    reader.onload = () => {
      if (typeof reader.result === "string") set(id, reader.result);
    };
    reader.readAsDataURL(file);
  };

  return (
    <div className={`relative overflow-hidden ${className}`}>
      <img src={src} alt={alt} className={imgClassName} loading="lazy" />
      {overlay}
      {adminMode && (
        <>
          <button
            type="button"
            onClick={() => inputRef.current?.click()}
            className="absolute right-3 top-3 z-20 inline-flex items-center gap-2 rounded-full bg-foreground/90 px-3 py-2 text-xs font-medium text-background backdrop-blur transition hover:bg-foreground"
          >
            <Upload className="h-3.5 w-3.5" /> Replace
          </button>
          <input
            ref={inputRef}
            type="file"
            accept="image/*"
            className="hidden"
            onChange={(e) => {
              const f = e.target.files?.[0];
              if (f) handleFile(f);
              e.target.value = "";
            }}
          />
        </>
      )}
    </div>
  );
}

interface EditableLinkProps {
  id: string;
  defaultHref: string;
  defaultLabel: string;
  className?: string;
  icon?: React.ReactNode;
  external?: boolean;
}

export function EditableLink({ id, defaultHref, defaultLabel, className = "", icon, external }: EditableLinkProps) {
  const { adminMode, get, set } = useEdit();
  const href = get(`${id}:href`, defaultHref);
  const label = get(`${id}:label`, defaultLabel);

  if (adminMode) {
    return (
      <div className={`flex flex-col gap-2 rounded-xl border border-dashed border-primary/60 bg-primary-soft/50 p-3 ${className}`}>
        <label className="text-xs font-medium text-muted-foreground">Label</label>
        <input
          defaultValue={label}
          onBlur={(e) => set(`${id}:label`, e.target.value)}
          className="rounded-md border border-border bg-background px-2 py-1 text-sm"
        />
        <label className="text-xs font-medium text-muted-foreground">URL</label>
        <input
          defaultValue={href}
          onBlur={(e) => set(`${id}:href`, e.target.value)}
          className="rounded-md border border-border bg-background px-2 py-1 text-sm"
        />
      </div>
    );
  }

  return (
    <a
      href={href}
      target={external ? "_blank" : undefined}
      rel={external ? "noopener noreferrer" : undefined}
      className={className}
    >
      {icon}
      <span>{label}</span>
    </a>
  );
}
