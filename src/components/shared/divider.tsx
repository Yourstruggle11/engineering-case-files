import { Label } from "@/components/shared/label";

type DividerProps = {
  label?: string;
  className?: string;
};

export function Divider({ label, className = "" }: DividerProps) {
  return (
    <div className={`flex items-center gap-4 ${className}`}>
      {label ? <Label>{label}</Label> : null}
      <div className="h-px flex-1 bg-line" />
    </div>
  );
}
