export default function ConsoleFrame({
  label,
  children,
}: {
  label: string;
  children: React.ReactNode;
}) {
  return (
    <div className="relative">
      <div
        aria-hidden
        className="glow -inset-6 opacity-60"
        style={{
          background:
            "radial-gradient(ellipse, rgba(124,92,255,0.16) 0%, rgba(124,92,255,0) 70%)",
          filter: "blur(50px)",
        }}
      />
      <figure className="relative m-0 overflow-hidden rounded-[12px] border border-ink/[0.06] bg-white/70 shadow-[0_4px_24px_0_rgba(17,17,17,0.04)] backdrop-blur-[10px]">
        <div className="flex h-8 items-center gap-2 border-b border-black/[0.05] bg-black/[0.03] px-4">
          <span aria-hidden className="flex items-center gap-2">
            <span className="size-[10px] rounded-full bg-[rgba(248,113,113,0.6)]" />
            <span className="size-[10px] rounded-full bg-[rgba(250,204,21,0.6)]" />
            <span className="size-[10px] rounded-full bg-[rgba(74,222,128,0.6)]" />
          </span>
          <span className="ml-2 truncate text-[11px] font-bold uppercase leading-[16.5px] tracking-[1.1px] text-ink-muted">
            {label}
          </span>
        </div>
        <div className="p-5 sm:p-6">{children}</div>
      </figure>
    </div>
  );
}
