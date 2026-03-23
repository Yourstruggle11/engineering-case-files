import Link from "next/link";
import { Label } from "@/components/shared/label";

export default function NotFound() {
  return (
    <main className="shell-container flex min-h-[72vh] flex-col items-start justify-center py-24">
      <Label>404 / Missing File</Label>
      <h1 className="mt-6 text-5xl leading-tight text-text">Requested case file not found.</h1>
      <p className="mt-4 max-w-xl text-text-muted">
        The page you tried to open is not in the archive. Return to the homepage to browse the case index and supporting reports.
      </p>
      <Link href="/" className="button-primary mt-8">
        Return to archive
      </Link>
    </main>
  );
}
