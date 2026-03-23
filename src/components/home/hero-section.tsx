import Link from "next/link";
import { FadeIn } from "@/components/shared/fade-in";
import { Divider } from "@/components/shared/divider";
import { Label } from "@/components/shared/label";
import { heroCopy, heroHighlights, siteTitle } from "@/content/site";

export function HeroSection() {
  return (
    <section className="shell-container pt-8 sm:pt-12 lg:pt-16">
      <FadeIn className="surface-panel-strong relative p-5 sm:p-7 lg:p-10">
        <div className="pointer-events-none absolute inset-x-0 top-0 h-48 bg-[radial-gradient(circle_at_top_right,rgba(143,187,207,0.2),transparent_56%)]" />
        <div className="pointer-events-none absolute inset-y-0 right-0 hidden w-[42%] bg-[linear-gradient(180deg,rgba(143,187,207,0.05),transparent_72%)] xl:block" />

        <div className="relative grid gap-8 lg:gap-10 xl:grid-cols-[minmax(0,1.45fr)_minmax(320px,0.82fr)] xl:items-start">
          <div className="max-w-[52rem]">
            <div className="flex flex-wrap items-center gap-3">
              <Label>{heroCopy.label}</Label>
              <span className="hidden h-px w-10 bg-line sm:block" />
              <p className="text-sm font-medium text-text/90 sm:text-base">{siteTitle}</p>
            </div>

            <h1 className="mt-5 max-w-[11.25ch] text-[clamp(3rem,7vw,6.75rem)] leading-[0.9] tracking-[-0.06em] text-text">
              <span className="block">{heroCopy.titleLead}</span>
              <span className="block text-text/94">{heroCopy.titleMain}</span>
            </h1>

            <p className="mt-4 max-w-[35rem] text-pretty text-lg leading-8 text-text/88 sm:text-xl sm:leading-8 lg:text-[1.45rem] lg:leading-9">
              {heroCopy.titleSupport}
            </p>

            <p className="mt-5 max-w-[42rem] text-base text-text-muted sm:text-lg lg:text-[1.05rem]">
              {heroCopy.description}
            </p>

            <div className="mt-7 flex flex-wrap gap-3">
              <Link href={heroCopy.primaryCta.href} className="button-primary">
                {heroCopy.primaryCta.label}
              </Link>
              <Link
                href={heroCopy.secondaryCta.href}
                className="button-secondary"
                target="_blank"
                rel="noreferrer"
              >
                {heroCopy.secondaryCta.label}
              </Link>
            </div>

            <div className="mt-4 flex flex-wrap gap-2 sm:gap-3">
              <span className="inline-flex items-center rounded-full border border-line bg-background-soft px-3.5 py-2 font-mono text-[10px] uppercase tracking-[0.22em] text-text-soft sm:text-[11px]">
                {heroCopy.commandHint}
              </span>
              <span className="inline-flex items-center rounded-full border border-line bg-background-soft px-3.5 py-2 font-mono text-[10px] uppercase tracking-[0.22em] text-text-soft sm:text-[11px]">
                Mobile-first archive
              </span>
            </div>
          </div>

          <aside className="rounded-[24px] border border-line bg-background-soft/80 p-5 sm:p-6">
            <div className="flex items-center justify-between gap-3">
              <Label>{heroCopy.dossier.label}</Label>
              <span className="inline-flex items-center rounded-full border border-line bg-background px-2.5 py-1 font-mono text-[10px] uppercase tracking-[0.24em] text-text-soft">
                Open
              </span>
            </div>

            <p className="mt-4 max-w-[16ch] text-2xl leading-tight text-text sm:text-[1.75rem]">
              {heroCopy.dossier.title}
            </p>

            <p className="mt-3 text-sm text-text-muted sm:text-[15px]">
              {heroCopy.dossier.summary}
            </p>

            <Divider className="mt-6" label="Metadata" />

            <dl className="mt-4 space-y-4">
              {heroCopy.dossier.metadata.map((item) => (
                <div key={item.label}>
                  <dt>
                    <Label>{item.label}</Label>
                  </dt>
                  <dd className="mt-1 text-sm text-text sm:text-[15px]">{item.value}</dd>
                </div>
              ))}
            </dl>

            <Divider className="mt-6" label="Quick Access" />

            <div className="mt-4 flex flex-wrap gap-2">
              {heroCopy.dossier.indexLinks.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className="inline-flex items-center rounded-full border border-line bg-background px-3 py-2 text-xs font-medium text-text transition duration-200 hover:border-line-strong hover:text-accent focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent/60 focus-visible:ring-offset-2 focus-visible:ring-offset-background"
                >
                  {item.label}
                </Link>
              ))}
            </div>
          </aside>
        </div>

        <Divider className="relative mt-8 lg:mt-10" label="At A Glance" />

        <div className="relative mt-5 grid gap-3 sm:grid-cols-2 xl:grid-cols-3">
          {heroHighlights.map((item) => (
            <article
              key={item.label}
              className="rounded-[22px] border border-line bg-black/10 p-4 sm:p-5"
            >
              <Label>{item.label}</Label>
              <p className="mt-3 text-2xl text-text sm:text-[2rem]">{item.value}</p>
              <p className="mt-2 max-w-[34ch] text-sm text-text-muted">{item.detail}</p>
            </article>
          ))}
        </div>
      </FadeIn>
    </section>
  );
}
