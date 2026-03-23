import { ExternalLink } from "@/components/shared/external-link";
import { Divider } from "@/components/shared/divider";
import { Label } from "@/components/shared/label";
import { contactLinks } from "@/content/site";

export function Footer() {
  return (
    <footer className="pb-8 pt-12 sm:pb-10">
      <div className="shell-container">
        <div className="rounded-[28px] border border-line bg-panel px-5 py-6 shadow-panel sm:px-6 sm:py-7">
          <Divider label="End of File" />
          <div className="mt-6 flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">
            <div className="max-w-2xl">
              <Label>Souvik Sen</Label>
              <p className="mt-4 text-lg text-text">
                Engineering case files covering fast React products, real-time SaaS workflows, and developer tooling.
              </p>
              <p className="mt-3 text-sm text-text-soft">
                Based in Kolkata, India. Current context: fintech and enterprise workflow software at Phlo Systems.
              </p>
            </div>
            <div className="flex flex-wrap gap-x-5 gap-y-3">
              {contactLinks.map((link) => (
                <ExternalLink key={link.href} href={link.href}>
                  {link.label}
                </ExternalLink>
              ))}
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
