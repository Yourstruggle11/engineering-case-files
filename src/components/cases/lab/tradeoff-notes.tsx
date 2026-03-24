import type { CaseTradeoffNote } from "@/content/types";
import { ExpandableNote } from "@/components/cases/lab/expandable-note";

type TradeoffNotesProps = {
  notes: CaseTradeoffNote[];
};

export function TradeoffNotes({ notes }: TradeoffNotesProps) {
  if (!notes.length) {
    return null;
  }

  return (
    <div className="grid gap-3">
      {notes.map((note, index) => (
        <ExpandableNote
          key={note.title}
          label={`Tradeoff ${String(index + 1).padStart(2, "0")}`}
          title={note.title}
          defaultOpen={index === 0}
        >
          <p className="reading-copy max-w-none">{note.body}</p>
        </ExpandableNote>
      ))}
    </div>
  );
}
