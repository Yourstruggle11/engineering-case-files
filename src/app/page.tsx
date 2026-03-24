import { ArchiveSection } from "@/components/home/archive-section";
import { CasesSection } from "@/components/home/cases-section";
import { ContactSection } from "@/components/home/contact-section";
import { EvidenceSection } from "@/components/home/evidence-section";
import { FieldNotesSection } from "@/components/home/field-notes-section";
import { HeroSection } from "@/components/home/hero-section";
import { ReportsSection } from "@/components/home/reports-section";
import { caseFiles } from "@/content/cases";
import { absoluteUrl } from "@/lib/site";

const structuredData = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Person",
      name: "Souvik Sen",
      url: absoluteUrl("/"),
      address: {
        "@type": "PostalAddress",
        addressLocality: "Kolkata",
        addressCountry: "IN"
      },
      email: "mailto:souviksen093@gmail.com",
      sameAs: [
        "https://github.com/Yourstruggle11",
        "https://linkedin.com/in/yourstruggle11",
        "https://medium.com/@yourstruggle11"
      ],
      knowsAbout: [
        "React",
        "Next.js",
        "TypeScript",
        "Node.js",
        "Frontend architecture",
        "Real-time SaaS workflows",
        "Developer tooling"
      ],
      jobTitle: "Product-focused full-stack engineer"
    },
    {
      "@type": "CollectionPage",
      name: "Engineering Case Files",
      url: absoluteUrl("/"),
      hasPart: caseFiles.map((caseFile) => ({
        "@type": "CreativeWork",
        name: caseFile.title,
        url: absoluteUrl(`/cases/${caseFile.slug}`),
        abstract: caseFile.summary
      }))
    }
  ]
};

const structuredDataJson = JSON.stringify(structuredData).replace(/</g, "\\u003c");

export default function HomePage() {
  return (
    <>
      <main>
        <HeroSection />
        <CasesSection />
        <EvidenceSection />
        <FieldNotesSection />
        <ArchiveSection />
        <ReportsSection />
        <ContactSection />
      </main>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: structuredDataJson }}
      />
    </>
  );
}
