import type { EventStatus } from "@/data/events";

export default function StatusBadge({ status }: { status: EventStatus | string }) {
  const styles: Record<string, string> = {
    upcoming: "bg-gold/10 text-gold border border-gold/30",
    completed: "bg-green-500/10 text-green-400 border border-green-500/30",
    pending: "bg-[#333]/50 text-[#888] border border-[#444]",
  };
  const labels: Record<string, string> = {
    upcoming: "Upcoming",
    completed: "Completed",
    pending: "Pending",
  };
  const cls = styles[status] || styles.pending;
  return (
    <span
      className={`inline-flex items-center px-3 py-1 rounded-full text-xs font-semibold uppercase tracking-wider ${cls}`}
    >
      {labels[status] || status}
    </span>
  );
}
