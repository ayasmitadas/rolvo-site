export default function Eyebrow({
  children,
  tone = "accent",
}: {
  children: React.ReactNode;
  tone?: "accent" | "muted";
}) {
  // `eyebrow` is a theme token: the contrast-safe orange on light bands,
  // the full brand orange on dark ones.
  const colour = tone === "muted" ? "text-ink-muted" : "text-eyebrow";
  return (
    <p
      className={`text-[11px] font-bold uppercase leading-[16.5px] tracking-[1.1px] ${colour}`}
    >
      {children}
    </p>
  );
}
