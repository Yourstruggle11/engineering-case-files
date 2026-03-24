import type { ReactNode } from "react";
import { Label } from "@/components/shared/label";

type SignalCardProps = {
  title: string;
  badge?: string;
  children: ReactNode;
};

export function SignalCard({ title, badge = "Signal", children }: SignalCardProps) {
  return (
    <article className="rounded-[22px] border border-line bg-background-soft/70 p-5 sm:p-6">
      <div className="flex flex-wrap items-center gap-3">
        <Label>{badge}</Label>
      </div>
      <h3 className="mt-3 font-serif text-xl leading-snug tracking-[-0.03em] text-text sm:text-[1.35rem]">{title}</h3>
      <div className="mt-4 reading-copy max-w-none text-[15px]">{children}</div>
    </article>
  );
}
