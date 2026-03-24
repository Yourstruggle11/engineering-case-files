import { CaseInvestigationLab } from "@/components/cases/case-investigation-lab";
import type { CaseFile } from "@/content/types";

type CaseDetailProps = {
  caseFile: CaseFile;
};

export function CaseDetail({ caseFile }: CaseDetailProps) {
  return <CaseInvestigationLab caseFile={caseFile} />;
}
