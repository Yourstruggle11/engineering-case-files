import { Divider } from "@/components/shared/divider";
import { FadeIn } from "@/components/shared/fade-in";
import { ExternalLink } from "@/components/shared/external-link";
import { Label } from "@/components/shared/label";
import { SectionFrame } from "@/components/shared/section-frame";
import { SectionHeader } from "@/components/shared/section-header";
import { contactLinks, contactSignals, heroCopy, sectionCopy } from "@/content/site";

export function ContactSection() {
  const content = sectionCopy.contact;

  return (
    <section
      id="contact"
      className="shell-container section-space pb-14 sm:pb-16 lg:pb-20 xl:pb-24"
    >
      <FadeIn>
        <SectionFrame>
          <div className="grid gap-8 lg:gap-10 xl:grid-cols-[minmax(0,1.04fr)_minmax(340px,0.96fr)] xl:items-start">
            <div className="grid gap-6">
              <SectionHeader
                label={content.label}
                title={content.title}
                description={content.description}
                variant="stacked"
              />

              <Divider label="Current Status" />

              <div className="grid gap-3 md:grid-cols-3">
                {heroCopy.dossier.metadata.map((item) => (
                  <div
                    key={item.label}
                    className="rounded-[20px] border border-line bg-background-soft/70 p-4"
                  >
                    <Label>{item.label}</Label>
                    <p className="mt-2 text-sm text-text-muted">{item.value}</p>
                  </div>
                ))}
              </div>

              <div className="rounded-[24px] border border-line bg-background-soft/75 p-5 sm:p-6">
                <Divider label="Preferred Threads" />
                <div className="mt-4 grid gap-3">
                  {contactSignals.map((item) => (
                    <article
                      key={item.label}
                      className="rounded-[18px] border border-line bg-panel px-4 py-4"
                    >
                      <Label>{item.label}</Label>
                      <p className="mt-2 text-base leading-7 text-text">{item.value}</p>
                      <p className="mt-2 max-w-[34rem] text-sm text-text-muted">{item.detail}</p>
                    </article>
                  ))}
                </div>
              </div>
            </div>

            <div className="grid gap-4 sm:gap-5">
              <div className="rounded-[24px] border border-line bg-background-soft/75 p-4 sm:p-5">
                <Label>Channels</Label>
                <div className="mt-4 grid gap-3">
                  {contactLinks.map((link) => (
                    <ExternalLink
                      key={link.href}
                      href={link.href}
                      className="rounded-[20px] border border-line bg-panel px-4 py-4 transition-colors hover:border-line-strong hover:text-accent"
                    >
                      <span className="flex items-start justify-between gap-4">
                        <span className="min-w-0">
                          <span className="block text-base text-text">{link.label}</span>
                          {link.detail ? (
                            <span className="mt-1 block text-sm text-text-muted">{link.detail}</span>
                          ) : null}
                        </span>
                        <span className="shrink-0 text-sm text-text-soft">Open</span>
                      </span>
                    </ExternalLink>
                  ))}
                </div>
              </div>

              <div className="rounded-[24px] border border-line bg-background-soft/75 p-5 sm:p-6">
                <Label>Index Status</Label>
                <p className="mt-3 max-w-[22ch] text-[1.7rem] leading-tight text-text sm:text-[2rem]">
                  Open for roles, product engineering work, and React-focused collaboration.
                </p>
                <p className="mt-4 text-sm text-text-muted sm:text-[15px]">
                  Email is the best direct route for opportunities. GitHub, LinkedIn, and Medium
                  provide the surrounding project, writing, and open-source context.
                </p>
              </div>
            </div>
          </div>
        </SectionFrame>
      </FadeIn>
    </section>
  );
}
