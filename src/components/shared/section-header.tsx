import { Label } from "@/components/shared/label";

type SectionHeaderVariant = "split" | "stacked" | "rail";

type SectionHeaderProps = {
  label: string;
  title: string;
  description: string;
  className?: string;
  variant?: SectionHeaderVariant;
};

export function SectionHeader({
  label,
  title,
  description,
  className = "",
  variant = "split"
}: SectionHeaderProps) {
  if (variant === "stacked") {
    return (
      <div className={`max-w-[48rem] ${className}`}>
        <Label>{label}</Label>
        <h2 className="mt-4 max-w-[16ch] text-balance text-[clamp(2.15rem,4.7vw,3.8rem)] leading-[0.98] tracking-[-0.055em] text-text">
          {title}
        </h2>
        <p className="mt-4 max-w-[38rem] text-[15px] leading-7 text-text-muted sm:text-base sm:leading-8 lg:text-[1.02rem]">
          {description}
        </p>
      </div>
    );
  }

  if (variant === "rail") {
    return (
      <div className={`grid gap-4 lg:grid-cols-[112px_minmax(0,1fr)] lg:gap-8 ${className}`}>
        <div className="hidden pt-1 lg:block">
          <Label>{label}</Label>
        </div>
        <div>
          <Label className="lg:hidden">{label}</Label>
          <h2 className="mt-4 max-w-[16ch] text-balance text-[clamp(2.15rem,4.4vw,3.65rem)] leading-[0.98] tracking-[-0.055em] text-text lg:mt-0 lg:max-w-[15ch]">
            {title}
          </h2>
          <p className="mt-4 max-w-[42rem] text-[15px] leading-7 text-text-muted sm:text-base sm:leading-8 lg:max-w-[38rem] lg:text-[1.02rem]">
            {description}
          </p>
        </div>
      </div>
    );
  }

  return (
    <div className={`max-w-none ${className}`}>
      <Label>{label}</Label>
      <div className="mt-4 grid gap-4 sm:gap-5 lg:grid-cols-[minmax(0,1.04fr)_minmax(18rem,0.76fr)] lg:items-end lg:gap-8 xl:gap-12">
        <h2 className="max-w-[17ch] text-balance text-[clamp(2.15rem,4.6vw,3.85rem)] leading-[0.98] tracking-[-0.055em] text-text lg:max-w-none">
          {title}
        </h2>
        <p className="max-w-[42rem] text-[15px] leading-7 text-text-muted sm:text-base sm:leading-8 lg:max-w-[28rem] lg:justify-self-end lg:pb-1 lg:text-[1.02rem]">
          {description}
        </p>
      </div>
    </div>
  );
}
