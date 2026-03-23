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
      url: absoluteUrl(`/cases/${caseFile.slug}`)
    }
  };
}

export default async function CasePage({ params }: CasePageProps) {
  const { slug } = await params;
  const caseFile = getCaseBySlug(slug);

  if (!caseFile) {
    notFound();
  }

  return <CaseDetail caseFile={caseFile} />;
}
