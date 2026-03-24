export const caseLabNavItems = [
  { id: "briefing", code: "I", title: "Case briefing" },
  { id: "signal", code: "II", title: "Initial signal" },
  { id: "evidence", code: "III", title: "Evidence collected" },
  { id: "path", code: "IV", title: "Investigation path" },
  { id: "resolution", code: "V", title: "Resolution" },
  { id: "outcome", code: "VI", title: "Outcome" },
  { id: "references", code: "VII", title: "References" }
] as const;

export type CaseLabSectionId = (typeof caseLabNavItems)[number]["id"];
