export default function Eyebrow({
  children,
  tone = "violet",
}: {
  children: React.ReactNode;
  tone?: "violet" | "brand" | "muted";
}) {
  const colour =
    tone === "violet"
      ? "text-violet"
      : tone === "brand"
        ? "text-brand-text"
        : "text-ink-muted";
  return (
    <p
      className={`text-[11px] font-bold uppercase leading-[16.5px] tracking-[1.1px] ${colour}`}
    >
      {children}
    </p>
  );
}
