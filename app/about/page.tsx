"use client";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { rosters } from "@/data/team";
import TeamMemberCard from "@/components/TeamMemberCard";
import SectionHeading from "@/components/SectionHeading";

const goals = [
  "Recruit 5 members",
  "Raise $5,000",
  "12 auto / 24 TeleOp artifacts",
  "Reach 1,500 people",
  "Connect with STEM professionals",
];
const achievements = [
  "8 members recruited",
  "$8,333 raised",
  "12 auto / 26 TeleOp artifacts",
  "7,000+ people reached",
  "34 STEM connections made",
];

export default function TeamPage() {
  const [activeSeason, setActiveSeason] = useState(rosters[0].season);

  const roster = rosters.find((r) => r.season === activeSeason) ?? rosters[0];
  const members = roster.members.filter((m) => m.type === "member");
  const support = roster.members.filter((m) => m.type !== "member");

  return (
    <>
      {/* HERO */}
      <section className="bg-[#0A0A0A] mesh-bg grid-bg pt-28 pb-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <span className="inline-block text-xs font-semibold uppercase tracking-[0.2em] text-gold mb-4">
            NanoGurus 2.0
          </span>
          <h1 className="font-display text-6xl md:text-8xl tracking-wider text-[#F9F9F7] mb-6">
            THE TEAM
          </h1>
        </div>
      </section>

      {/* SEASON TABS */}
      <section className="bg-[#0D0D0D] sticky top-16 z-30 border-b border-[#1A1A1A]">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center gap-2 py-3 overflow-x-auto scrollbar-hide">
            {rosters.map((r) => (
              <button
                key={r.season}
                onClick={() => setActiveSeason(r.season)}
                className={`flex-shrink-0 px-5 py-1.5 rounded-full text-sm font-semibold transition-all duration-200 focus-visible:outline focus-visible:outline-2 focus-visible:outline-gold ${
                  activeSeason === r.season
                    ? "bg-gold text-black"
                    : "text-[#9CA3AF] hover:text-[#F9F9F7] hover:bg-[#1A1A1A]"
                }`}
              >
                {r.label}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* TEAM MEMBERS */}
      <section className="bg-[#0A0A0A] py-24">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading label={roster.label} title="Meet the" titleGold="Members" center />
          <AnimatePresence mode="wait">
            <motion.div
              key={activeSeason + "-members"}
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -16 }}
              transition={{ duration: 0.35 }}
              className="grid grid-cols-6 gap-6"
            >
              {members.map((m, i) => (
                <div
                  key={m.id}
                  className={`col-span-6 sm:col-span-3 lg:col-span-2${
                    i === 3 ? " lg:col-start-2" : i === 4 ? " lg:col-start-4" : ""
                  }`}
                >
                  <TeamMemberCard member={m} index={i} />
                </div>
              ))}
            </motion.div>
          </AnimatePresence>
        </div>
      </section>

      {/* COACHES, MENTORS & MASCOT */}
      <section className="bg-[#0D0D0D] py-24">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading label="Leadership" title="Coaches," titleGold="Mentors & Mascot" center />
          <AnimatePresence mode="wait">
            <motion.div
              key={activeSeason + "-support"}
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -16 }}
              transition={{ duration: 0.35, delay: 0.05 }}
              className="flex flex-wrap justify-center gap-6"
            >
              {support.map((m, i) => (
                <div key={m.id} className="w-[calc(50%-12px)] sm:w-56">
                  <TeamMemberCard member={m} index={i} />
                </div>
              ))}
            </motion.div>
          </AnimatePresence>
        </div>
      </section>

      {/* GOALS VS ACHIEVEMENTS */}
      <section className="bg-[#F9F9F7] py-24">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading
            label="2025–26 Season"
            title="Goals vs."
            titleGold="Achievements"
            center
            light
          />
          <div className="grid md:grid-cols-2 gap-8 mt-4">
            <div className="bg-white border border-[#E5E7EB] rounded-2xl p-8 shadow-sm">
              <h3 className="text-xs font-bold uppercase tracking-widest text-[#6B7280] mb-5">
                Season Goals
              </h3>
              <ul className="space-y-3">
                {goals.map((g) => (
                  <li key={g} className="flex items-start gap-3 text-[#374151] text-sm">
                    <span className="w-5 h-5 rounded-full border-2 border-[#D1D5DB] flex-shrink-0 mt-0.5" />
                    {g}
                  </li>
                ))}
              </ul>
            </div>
            <div className="bg-[#0A0A0A] border border-gold/20 rounded-2xl p-8">
              <h3 className="text-xs font-bold uppercase tracking-widest text-gold mb-1">
                Achievements
              </h3>
              <p className="text-[#555] text-xs mb-5">Every single goal — exceeded, in year one.</p>
              <ul className="space-y-3">
                {achievements.map((a) => (
                  <li key={a} className="flex items-start gap-3 text-[#F9F9F7] text-sm">
                    <span className="w-5 h-5 rounded-full bg-gold/20 border border-gold/40 flex-shrink-0 mt-0.5 flex items-center justify-center text-gold text-xs font-bold">
                      ✓
                    </span>
                    {a}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
