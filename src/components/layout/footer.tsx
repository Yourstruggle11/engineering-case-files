import { ExternalLink } from "@/components/shared/external-link";
import { Divider } from "@/components/shared/divider";
import { Label } from "@/components/shared/label";
import { contactLinks, footerCopy, heroCopy } from "@/content/site";

export function Footer() {
  return (
    <footer className="pb-8 pt-12 sm:pb-10 lg:pt-16">
      <div className="shell-container">
        <div className="surface-panel-strong px-5 py-6 sm:px-6 sm:py-7 lg:px-8 lg:py-8">
          <Divider label={footerCopy.label} />

          <div className="mt-6 grid gap-8 lg:grid-cols-[minmax(0,1.05fr)_minmax(320px,0.95fr)] lg:gap-10">
            <div className="max-w-[46rem]">
              <Label>Souvik Sen</Label>
              <h2 className="mt-4 max-w-[14ch] text-[clamp(2rem,4vw,3.35rem)] leading-[0.98] text-text">
                {footerCopy.title}
              </h2>
              <p className="mt-4 max-w-[42rem] text-[15px] text-text-muted sm:text-base">
                {footerCopy.description}
              </p>

              <Divider className="mt-6" label="Closing Note" />
              <p className="mt-4 max-w-[42rem] text-sm text-text sm:text-[15px]">
                {footerCopy.closingNote}
              </p>
            </div>

            <div className="grid gap-3 self-start">
              {heroCopy.dossier.metadata.map((item) => (
                <article
                  key={item.label}
                  className="rounded-[20px] border border-line bg-background-soft/75 p-4"
                >
                  <Label>{item.label}</Label>
                  <p className="mt-2 text-sm text-text">{item.value}</p>
                </article>
              ))}
            </div>
          </div>

          <Divider className="mt-8" label="Channels" />

          <div className="mt-5 grid gap-3 sm:grid-cols-2 xl:grid-cols-4">
            {contactLinks.map((link) => (
              <ExternalLink
                key={link.href}
                href={link.href}
                className="rounded-[20px] border border-line bg-background-soft/75 px-4 py-4 transition-colors hover:border-line-strong hover:text-accent"
              >
                <span className="block">
                  <span className="block text-sm text-text">{link.label}</span>
                  {link.detail ? (
                    <span className="mt-1 block text-sm text-text-soft">{link.detail}</span>
                  ) : null}
                </span>
              </ExternalLink>
            ))}
          </div>

          <div className="mt-6 flex flex-col gap-2 border-t border-line pt-4 text-sm text-text-soft sm:flex-row sm:items-center sm:justify-between">
            <p>Engineering Case Files / Souvik Sen</p>
            <p>Filed for product, systems, and frontend roles.</p>
          </div>
        </div>
      </div>
    </footer>
  );
}
