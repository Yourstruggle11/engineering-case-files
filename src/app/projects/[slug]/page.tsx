import type { Metadata } from "next";
import { redirect } from "next/navigation";

type ProjectPageProps = {
  params: Promise<{
    slug: string;
  }>;
};

export function generateStaticParams() {
  return [];
}

export async function generateMetadata({
  params
}: ProjectPageProps): Promise<Metadata> {
  const { slug } = await params;

  return {
    title: "Project redirect",
    alternates: {
      canonical: `/cases/${slug}`
    }
  };
}

export default async function ProjectPage({ params }: ProjectPageProps) {
  const { slug } = await params;
  redirect(`/cases/${slug}`);
}
