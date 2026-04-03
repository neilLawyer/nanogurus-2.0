"use client";
import { useState } from "react";
import { motion } from "framer-motion";
import { outreaches } from "@/data/outreaches";
import { events } from "@/data/events";
import OutreachCard from "@/components/OutreachCard";
import SectionHeading from "@/components/SectionHeading";
import StatusBadge from "@/components/StatusBadge";
import type { Outreach } from "@/data/outreaches";

type Category = Outreach["category"] | "all";
const categories: { value: Category; label: string }[] = [
  { value: "all", label: "All" },
  { value: "school", label: "School" },
  { value: "community", label: "Community" },
  { value: "cultural", label: "Cultural" },
  { value: "international", label: "International" },
  { value: "hosting", label: "Hosting" },
];

const stats = [
  { value: "22", label: "Events" },
  { value: "7,000+", label: "People Reached" },
  { value: "600+", label: "Team Hours" },
];

export default function OutreachesPage() {
  const [active, setActive] = useState<Category>("all");
  const filtered =
    active === "all" ? outreaches : outreaches.filter((o) => o.category === active);

  const upcomingEvents = events.filter((e) => e.status === "upcoming");

  return (
    <>
      {/* HERO */}
      <section className="bg-[#0A0A0A] mesh-bg grid-bg pt-28 pb-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <span className="inline-block text-xs font-semibold uppercase tracking-[0.2em] text-gold mb-4">
            Community Impact
          </span>
          <h1 className="font-display text-6xl md:text-8xl tracking-wider text-[#F9F9F7] mb-6">
            OUTREACHES
          </h1>
          {/* Stats */}
          <div className="flex flex-wrap items-center justify-center gap-8 mt-8">
            {stats.map((s) => (
              <div key={s.label} className="text-center">
                <div className="font-display text-4xl text-gold">{s.value}</div>
                <div className="text-xs font-semibold uppercase tracking-widest text-[#6B7280] mt-1">{s.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FILTER TABS */}
      <section className="bg-[#0D0D0D] sticky top-16 z-30 border-b border-[#1A1A1A]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center gap-1 overflow-x-auto scrollbar-hide py-3">
            {categories.map((c) => (
              <button
                key={c.value}
                onClick={() => setActive(c.value)}
                className={`flex-shrink-0 px-4 py-1.5 rounded-full text-sm font-semibold transition-all duration-200 focus-visible:outline focus-visible:outline-2 focus-visible:outline-gold ${
                  active === c.value
                    ? "bg-gold text-black"
                    : "text-[#9CA3AF] hover:text-[#F9F9F7] hover:bg-[#1A1A1A]"
                }`}
              >
                {c.label}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* CARDS GRID */}
      <section className="bg-[#0A0A0A] py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {filtered.length === 0 ? (
            <div className="text-center py-20 text-[#6B7280]">
              No outreaches in this category yet.
            </div>
          ) : (
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {filtered.map((o, i) => (
                <OutreachCard key={o.id} outreach={o} index={i} />
              ))}
            </div>
          )}
        </div>
      </section>

      {/* UPCOMING CALLOUT */}
      {upcomingEvents.length > 0 && (
        <section className="bg-[#0D0D0D] py-16 border-t border-[#1A1A1A]">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <SectionHeading label="Coming Up" title="Upcoming" titleGold="Events" />
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
              {upcomingEvents.map((e, i) => (
                <motion.div
                  key={e.id}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: i * 0.1 }}
                  className="bg-[#141414] border border-gold/20 rounded-2xl p-6"
                >
                  <div className="flex items-center justify-between mb-3">
                    <StatusBadge status={e.status} />
                    <span className="text-[#6B7280] text-xs">{e.date}</span>
                  </div>
                  <h3 className="font-bold text-[#F9F9F7] text-base mb-1">{e.title}</h3>
                  <p className="text-[#6B7280] text-xs">{e.location}</p>
                  {e.description && (
                    <p className="text-[#9CA3AF] text-sm mt-3">{e.description}</p>
                  )}
                </motion.div>
              ))}
            </div>
          </div>
        </section>
      )}
    </>
  );
}
