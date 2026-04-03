"use client";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { robots } from "@/data/robot";
import SectionHeading from "@/components/SectionHeading";
import CTAButton from "@/components/CTAButton";

export default function RobotPage() {
  const [activeSeason, setActiveSeason] = useState(robots[0].season);
  const robot = robots.find((r) => r.season === activeSeason) ?? robots[0];

  return (
    <>
      {/* HERO */}
      <section className="bg-[#0A0A0A] mesh-bg grid-bg pt-28 pb-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <span className="inline-block text-xs font-semibold uppercase tracking-[0.2em] text-gold mb-4">
            Season Robot
          </span>
          <AnimatePresence mode="wait">
            <motion.h1
              key={robot.name}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.4 }}
              className="font-display text-6xl md:text-9xl tracking-wider text-[#F9F9F7] mb-4"
            >
              {robot.name}
            </motion.h1>
          </AnimatePresence>
          <AnimatePresence mode="wait">
            <motion.p
              key={robot.tagline}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.4, delay: 0.1 }}
              className="text-[#9CA3AF] text-base md:text-lg max-w-lg mx-auto"
            >
              {robot.tagline}
            </motion.p>
          </AnimatePresence>
        </div>
      </section>

      {/* SEASON TABS */}
      <section className="bg-[#0D0D0D] sticky top-16 z-30 border-b border-[#1A1A1A]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center gap-2 py-3 overflow-x-auto scrollbar-hide">
            {robots.map((r) => (
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

      <AnimatePresence mode="wait">
        <motion.div
          key={activeSeason}
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -16 }}
          transition={{ duration: 0.35 }}
        >
          {/* SUBSYSTEMS */}
          <section className="bg-[#0D0D0D] py-24">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <SectionHeading label="Hardware" title="Key" titleGold="Subsystems" />
              <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
                {robot.subsystems.map((s) => (
                  <div
                    key={s.num}
                    className="bg-[#141414] border border-[#1F1F1F] rounded-2xl p-6 hover:border-gold/30 transition-colors duration-300 group"
                  >
                    <div className="font-display text-5xl text-gold/20 group-hover:text-gold/40 transition-colors duration-300 mb-3">
                      {s.num}
                    </div>
                    <h3 className="font-bold text-[#F9F9F7] text-lg mb-2">{s.title}</h3>
                    <p className="text-[#9CA3AF] text-sm leading-relaxed">{s.desc}</p>
                  </div>
                ))}
              </div>
            </div>
          </section>

          {/* DESIGN PROCESS TIMELINE */}
          <section className="bg-[#F9F9F7] py-24 overflow-hidden">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <SectionHeading label="Process" title="Design" titleGold="Process" light />
              <div className="relative">
                <div className="hidden md:block absolute top-6 left-0 right-0 h-0.5 bg-[#E5E7EB]" />
                <div className="grid grid-cols-1 md:grid-cols-5 gap-6 md:gap-4">
                  {robot.timeline.map((step, i) => (
                    <div key={step} className="flex flex-col items-center text-center">
                      <div className="relative z-10 w-12 h-12 rounded-full bg-[#0A0A0A] border-2 border-gold flex items-center justify-center mb-4 shadow-lg shadow-gold/10">
                        <span className="font-display text-gold text-lg">{i + 1}</span>
                      </div>
                      <h3 className="font-semibold text-[#0A0A0A] text-sm">{step}</h3>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </section>

          {/* CODE HIGHLIGHTS */}
          <section className="bg-[#0A0A0A] py-24">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <SectionHeading label="Software" title="Code" titleGold="Highlights" />
              <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
                {robot.codeHighlights.map((c) => (
                  <div
                    key={c.title}
                    className="bg-[#141414] border border-[#1F1F1F] rounded-2xl p-6 hover:border-gold/30 transition-colors duration-300"
                  >
                    <div className="text-3xl mb-4" role="img" aria-label={c.title}>{c.icon}</div>
                    <h3 className="font-bold text-[#F9F9F7] text-base mb-2">{c.title}</h3>
                    <p className="text-[#9CA3AF] text-sm leading-relaxed">{c.desc}</p>
                  </div>
                ))}
              </div>
            </div>
          </section>

          {/* DESIGN PORTFOLIO DOWNLOAD */}
          {/* FILE: Drop pages 5-10 of the engineering portfolio as /public/design-portfolio.pdf */}
          {robot.portfolioPath && (
            <section className="bg-[#141414] border-t border-[#1F1F1F] py-20">
              <div className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                <SectionHeading label="Documentation" title="Design" titleGold="Portfolio" center />
                <p className="text-[#9CA3AF] mb-8">
                  Download our design portfolio — a condensed look at {robot.name}&apos;s engineering
                  and mechanical design process.
                </p>
                <CTAButton href={robot.portfolioPath} variant="filled" external>
                  Download Design Portfolio (PDF)
                </CTAButton>
                <p className="text-[#555] text-xs mt-4">Pages 5–10 · {robot.label}</p>
              </div>
            </section>
          )}
        </motion.div>
      </AnimatePresence>
    </>
  );
}
