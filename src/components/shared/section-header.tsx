import { Label } from "@/components/shared/label";

type SectionHeaderProps = {
  label: string;
  title: string;
  description: string;
  className?: string;
};

export function SectionHeader({
  label,
  title,
  description,
  className = ""
}: SectionHeaderProps) {
  return (
    <div className={`max-w-none ${className}`}>
      <Label>{label}</Label>
      <div className="mt-4 grid gap-4 sm:gap-5 lg:grid-cols-[minmax(0,1.1fr)_minmax(20rem,0.82fr)] lg:items-end lg:gap-8 xl:gap-12">
        <h2 className="max-w-[18ch] text-balance text-[clamp(2.2rem,5vw,4rem)] leading-[0.98] tracking-[-0.055em] text-text lg:max-w-none">
          {title}
        </h2>
        <p className="max-w-[42rem] text-[15px] leading-7 text-text-muted sm:text-base sm:leading-8 lg:max-w-[30rem] lg:justify-self-end lg:pb-1 lg:text-[1.02rem]">
          {description}
        </p>
      </div>
    </div>
  );
}
