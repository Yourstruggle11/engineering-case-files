import type { CaseWorkflowBeat } from "@/content/types";
import { Label } from "@/components/shared/label";

type WorkflowBeatsProps = {
  beats: CaseWorkflowBeat[];
};

export function WorkflowBeats({ beats }: WorkflowBeatsProps) {
  if (!beats.length) {
    return null;
  }

  return (
    <ol className="m-0 grid list-none gap-4 p-0">
      {beats.map((beat, index) => (
        <li
          key={beat.phase}
          className="rounded-[22px] border border-line bg-background-soft/70 p-5 sm:p-6"
        >
          <div className="flex flex-wrap items-baseline gap-3">
            <Label>Phase {String(index + 1).padStart(2, "0")}</Label>
            <h3 className="font-serif text-xl leading-snug tracking-[-0.03em] text-text">{beat.phase}</h3>
          </div>
          <div className="mt-5 grid gap-4 lg:grid-cols-2">
            <div>
              <Label>Observed friction</Label>
              <p className="mt-2 text-sm leading-relaxed text-text-muted sm:text-[15px]">
                {beat.friction}
              </p>
            </div>
            <div>
              <Label>Response</Label>
              <p className="mt-2 text-sm leading-relaxed text-text-muted sm:text-[15px]">
                {beat.response}
              </p>
            </div>
          </div>
        </li>
      ))}
    </ol>
  );
}
