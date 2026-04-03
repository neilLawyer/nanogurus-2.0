// To add a new event, go to /data/events.ts and add a new object to the events array.
// Copy the existing object structure and fill in the fields.
// Set season: "2026-27" for next season events.

import type { Metadata } from "next";
import { events } from "@/data/events";
import EventCard from "@/components/EventCard";
import SectionHeading from "@/components/SectionHeading";
import type { SeasonEvent } from "@/data/events";

export const metadata: Metadata = { title: "Events" };

type SeasonKey = SeasonEvent["season"];

const seasonLabels: Record<SeasonKey, string> = {
  "2025-26": "2025–26 Season",
  "2026-27": "2026–27 Season",
};

const statusOrder: Record<SeasonEvent["status"], number> = {
  completed: 0,
  upcoming: 1,
  pending: 2,
};

export default function EventsPage() {
  // Group by season
  const grouped = events.reduce<Partial<Record<SeasonKey, SeasonEvent[]>>>((acc, e) => {
    if (!acc[e.season]) acc[e.season] = [];
    acc[e.season]!.push(e);
    return acc;
  }, {});

  // Sort within each season
  const seasons: SeasonKey[] = ["2025-26", "2026-27"];
  seasons.forEach((s) => {
    if (grouped[s]) {
      grouped[s]!.sort((a, b) => statusOrder[a.status] - statusOrder[b.status]);
    }
  });

  return (
    <>
      {/* HERO */}
      <section className="bg-[#0A0A0A] mesh-bg grid-bg pt-28 pb-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <span className="inline-block text-xs font-semibold uppercase tracking-[0.2em] text-gold mb-4">
            Calendar
          </span>
          <h1 className="font-display text-6xl md:text-8xl tracking-wider text-[#F9F9F7]">
            EVENTS
          </h1>
        </div>
      </section>

      {/* SEASONS */}
      {seasons.map((season) => {
        const seasonEvents = grouped[season];
        if (!seasonEvents || seasonEvents.length === 0) return null;
        return (
          <section key={season} className="bg-[#0A0A0A] py-16 border-t border-[#1A1A1A]">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <SectionHeading
                label="Season"
                title={seasonLabels[season]}
                titleGold=""
              />
              <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
                {seasonEvents.map((e, i) => (
                  <EventCard key={e.id} event={e} index={i} />
                ))}
              </div>
            </div>
          </section>
        );
      })}

      {/* EMPTY STATE */}
      {events.length === 0 && (
        <section className="bg-[#0A0A0A] py-32 text-center">
          <p className="text-[#555] text-lg">No events added yet.</p>
          <p className="text-[#444] text-sm mt-2">
            Add events in <code className="text-gold">/data/events.ts</code>
          </p>
        </section>
      )}
    </>
  );
}
