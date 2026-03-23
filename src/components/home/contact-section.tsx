import { FadeIn } from "@/components/shared/fade-in";
import { ExternalLink } from "@/components/shared/external-link";
import { SectionHeader } from "@/components/shared/section-header";
import { contactLinks, sectionCopy } from "@/content/site";

export function ContactSection() {
  const content = sectionCopy.contact;

  return (
    <section id="contact" className="shell-container py-14 sm:py-16 lg:py-20 xl:py-24">
      <FadeIn className="surface-panel-strong overflow-hidden p-5 sm:p-7 lg:p-9">
        <div className="grid gap-8 lg:gap-10 xl:grid-cols-[minmax(0,1fr)_320px] xl:items-start">
          <SectionHeader
            label={content.label}
            title={content.title}
            description={content.description}
          />

          <div className="rounded-[24px] border border-line bg-background-soft p-4 sm:p-5">
            <div className="grid gap-3">
              {contactLinks.map((link) => (
                <ExternalLink
                  key={link.href}
                  href={link.href}
                  className="flex items-center justify-between rounded-2xl border border-line bg-panel px-4 py-3 text-sm text-text transition-colors hover:border-line-strong hover:text-accent"
                >
                  {link.label}
                </ExternalLink>
              ))}
            </div>
          </div>
        </div>
      </FadeIn>
    </section>
  );
}
