import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { CaseDetail } from "@/components/cases/case-detail";
import { caseFiles, getCaseBySlug } from "@/content/cases";
import { absoluteUrl } from "@/lib/site";

type CasePageProps = {
  params: Promise<{
    slug: string;
  }>;
};

export function generateStaticParams() {
  return caseFiles.map((caseFile) => ({
    slug: caseFile.slug
  }));
}

export async function generateMetadata({
  params
}: CasePageProps): Promise<Metadata> {
  const { slug } = await params;
  const caseFile = getCaseBySlug(slug);

  if (!caseFile) {
    return {
      title: "Case not found"
    };
  }

  return {
    title: `CASE ${caseFile.caseNumber} - ${caseFile.title}`,
    description: caseFile.summary,
    alternates: {
      canonical: `/cases/${caseFile.slug}`
    },
    openGraph: {
      title: `CASE ${caseFile.caseNumber} - ${caseFile.title} | Souvik Sen`,
      description: caseFile.summary,
      url: absoluteUrl(`/cases/${caseFile.slug}`),
      type: "article"
    },
    twitter: {
      title: `CASE ${caseFile.caseNumber} - ${caseFile.title}`,
      description: caseFile.summary
    }
  };
}

export default async function CasePage({ params }: CasePageProps) {
  const { slug } = await params;
  const caseFile = getCaseBySlug(slug);

  if (!caseFile) {
    notFound();
  }

  const structuredData = {
    "@context": "https://schema.org",
    "@type": "CreativeWork",
    name: `CASE ${caseFile.caseNumber} - ${caseFile.title}`,
    headline: caseFile.title,
    description: caseFile.summary,
    url: absoluteUrl(`/cases/${caseFile.slug}`),
    author: {
      "@type": "Person",
      name: "Souvik Sen",
      url: absoluteUrl("/")
    },
    keywords: [caseFile.filedUnder, "Engineering Case Files", ...caseFile.links.map((link) => link.label)]
  };

  const structuredDataJson = JSON.stringify(structuredData).replace(/</g, "\\u003c");

  return (
    <>
      <CaseDetail caseFile={caseFile} />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: structuredDataJson }}
      />
    </>
  );
}
