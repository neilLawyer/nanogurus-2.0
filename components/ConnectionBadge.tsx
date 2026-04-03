import type { Connection } from "@/data/stemConnections";

export default function ConnectionBadge({ connection }: { connection: Connection }) {
  return (
    <div className="bg-[#141414] border border-[#1F1F1F] rounded-xl px-4 py-3 hover:border-gold/30 transition-colors duration-200">
      <p className="font-semibold text-[#F9F9F7] text-sm">{connection.name}</p>
      <p className="text-[#6B7280] text-xs mt-0.5">{connection.title}</p>
    </div>
  );
}
