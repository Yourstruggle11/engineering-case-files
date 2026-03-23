type ProjectVisualProps = {
  label: string;
  tags: string[];
  tone?: "warm" | "teal" | "neutral";
};

const toneClasses = {
  warm: "from-accent/15 via-white/70 to-white",
  teal: "from-emerald-900/10 via-white/75 to-cyan-900/10",
  neutral: "from-stone-950/5 via-white/75 to-white"
};

export function ProjectVisual({
  label,
  tags,
  tone = "neutral"
}: ProjectVisualProps) {
  return (
    <div
      className={`relative isolate min-h-[260px] overflow-hidden rounded-[28px] border border-line bg-gradient-to-br ${toneClasses[tone]} p-6 sm:p-8`}
    >
      <div className="absolute inset-x-6 top-6 flex items-center justify-between text-[11px] font-semibold uppercase tracking-[0.22em] text-text-soft">
        <span>Placeholder visual</span>
        <span>{label}</span>
      </div>
      <div className="absolute -right-14 top-16 h-52 w-52 rounded-full bg-accent/8 blur-3xl" />
      <div className="absolute -left-10 bottom-8 h-40 w-40 rounded-full bg-emerald-900/10 blur-3xl" />
      <div className="relative mt-16 grid gap-4">
        <div className="grid gap-3 rounded-[24px] border border-white/60 bg-white/70 p-5 shadow-[0_18px_40px_rgba(22,17,12,0.08)]">
          <div className="flex items-center justify-between text-xs font-semibold text-text-soft">
            <span>System snapshot</span>
            <span>UI</span>
          </div>
          <div className="grid gap-3">
            <div className="h-3 rounded-full bg-text/10" />
            <div className="grid grid-cols-[1.2fr_0.8fr] gap-3">
              <div className="rounded-2xl bg-text/6 p-3">
                <div className="h-24 rounded-[18px] border border-line/70 bg-white/70" />
              </div>
              <div className="grid gap-3 rounded-2xl bg-text/6 p-3">
                <div className="h-9 rounded-xl border border-line/70 bg-white/80" />
                <div className="h-9 rounded-xl border border-line/70 bg-white/80" />
                <div className="h-9 rounded-xl border border-line/70 bg-white/80" />
              </div>
            </div>
          </div>
        </div>
        <div className="flex flex-wrap gap-2">
          {tags.map((tag) => (
            <span
              key={tag}
              className="rounded-full border border-line bg-white/80 px-3 py-1.5 text-xs font-semibold text-text-soft"
            >
              {tag}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
}
