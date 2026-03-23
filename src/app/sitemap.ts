import type { MetadataRoute } from "next";
import { caseFiles } from "@/content/cases";
import { absoluteUrl } from "@/lib/site";

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: absoluteUrl("/"),
      lastModified: new Date()
    },
    ...caseFiles.map((caseFile) => ({
      url: absoluteUrl(`/cases/${caseFile.slug}`),
      lastModified: new Date()
    }))
  ];
}
