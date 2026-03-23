import type { ReactNode } from "react";

type LabelProps = {
  children: ReactNode;
  className?: string;
};

export function Label({ children, className = "" }: LabelProps) {
  return (
    <span
      className={`font-mono text-[10px] uppercase tracking-[0.24em] text-text-soft sm:text-[11px] ${className}`}
    >
      {children}
    </span>
  );
}
