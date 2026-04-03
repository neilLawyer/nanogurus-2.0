"use client";
import { motion } from "framer-motion";
import Link from "next/link";
import CTAButton from "@/components/CTAButton";
import CountUpStat from "@/components/CountUpStat";
import SectionHeading from "@/components/SectionHeading";
import OutreachCard from "@/components/OutreachCard";
import SponsorCard from "@/components/SponsorCard";
import { outreaches } from "@/data/outreaches";
import { sponsors } from "@/data/sponsors";

const seasonHighlights = [
  { icon: "🏆", value: "Think Award", label: "Winner" },
  { icon: "🤖", value: "12", label: "Artifacts in Auto" },
  { icon: "⚡", value: "26", label: "Artifacts in TeleOp" },
  { icon: "👥", value: "7,000+", label: "People Reached" },
  { icon: "🔗", value: "34", label: "STEM Connections" },
  { icon: "🏫", value: "10", label: "Elementary Schools" },
];

const aboutStats = [
  { value: "8", label: "Team Members" },
  { value: "$8,333", label: "Raised" },
  { value: "7,000+", label: "People Reached" },
  { value: "22+", label: "Outreach Events" },
];

export default function HomePage() {
  return (
    <>
      {/* HERO */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-[#0A0A0A] mesh-bg grid-bg">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-gold/5 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute bottom-1/4 right-1/4 w-72 h-72 bg-gold/3 rounded-full blur-3xl pointer-events-none" />
        <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="mb-4"
          >
            <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-gold/10 border border-gold/20 text-gold text-xs font-semibold uppercase tracking-widest">
              FTC Team #30682 · Morris Plains, NJ
            </span>
          </motion.div>
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="font-display text-[clamp(4rem,12vw,9rem)] leading-none tracking-wider text-[#F9F9F7] mb-2"
          >
            BUILDING
            <br />
            ROBOTS.
          </motion.h1>
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="font-display text-[clamp(4rem,12vw,9rem)] leading-none tracking-wider text-gold mb-8"
          >
            BUILDING
            <br />
            CHARACTER.
          </motion.h1>
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.35 }}
            className="text-[#9CA3AF] text-base md:text-lg mb-10 max-w-xl mx-auto"
          >
            NanoGurus 2.0 #30682 — FIRST Tech Challenge | Morris Plains, NJ
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.45 }}
            className="flex flex-col sm:flex-row items-center justify-center gap-4"
          >
            <CTAButton href="/about" variant="filled">Meet the Team</CTAButton>
            <CTAButton href="/robot" variant="outline">View Our Robot</CTAButton>
          </motion.div>
        </div>
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1 }}
          className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
        >
          <span className="text-[#555] text-xs uppercase tracking-widest">Scroll</span>
          <motion.div
            animate={{ y: [0, 6, 0] }}
            transition={{ duration: 1.5, repeat: Infinity }}
            className="w-0.5 h-8 bg-gradient-to-b from-gold/60 to-transparent rounded-full"
          />
        </motion.div>
      </section>

      {/* STATS BAR */}
      <section className="bg-[#0A0A0A] border-y border-[#1A1A1A] py-12">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            <CountUpStat value={8} label="Team Members" />
            <CountUpStat value={8333} prefix="$" label="Raised" />
            <CountUpStat value={7000} suffix="+" label="People Reached" />
            <CountUpStat value={22} label="Outreach Events" />
          </div>
        </div>
      </section>

      {/* ABOUT SNAPSHOT */}
      <section className="bg-[#F9F9F7] py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-16 items-center">
            <div>
              <SectionHeading label="Our Story" title="From Two Members" titleGold="to a Movement" light />
              <p className="text-[#374151] leading-relaxed text-base md:text-lg mb-4">
                We are a rookie, community-based 501(c)(3) nonprofit team located in Morris Plains,
                New Jersey. We started with just two inexperienced members, no funding, and a coach
                who had moved away. Instead of lowering expectations, we raised our standards and
                rebuilt from the ground up.
              </p>
              <p className="text-[#6B7280] leading-relaxed text-sm md:text-base">
                In our first season, we finished 3rd at the Morris Conference tournament, reached
                7,000+ people, and built one of the strongest rookie records in New Jersey FTC —
                without ever making that the goal.
              </p>
              <div className="mt-8">
                <CTAButton href="/about" variant="filled">Our Full Story →</CTAButton>
              </div>
            </div>
            <div className="grid grid-cols-2 gap-4">
              {aboutStats.map((s, i) => (
                <motion.div
                  key={s.label}
                  initial={{ opacity: 0, y: 16 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: i * 0.1 }}
                  className="bg-white border border-[#E5E7EB] rounded-2xl p-6 shadow-sm"
                >
                  <div className="text-3xl font-bold text-[#0A0A0A]">{s.value}</div>
                  <div className="text-xs font-semibold uppercase tracking-wider text-[#6B7280] mt-1">{s.label}</div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* SEASON HIGHLIGHTS */}
      <section className="bg-[#0A0A0A] py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading label="2025–26 Season" title="Season" titleGold="Highlights" center />
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
            {seasonHighlights.map((h, i) => (
              <motion.div
                key={h.label}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: i * 0.08 }}
                className="bg-[#141414] border border-[#1F1F1F] rounded-2xl p-5 flex flex-col items-center text-center gap-2 hover:border-gold/30 transition-colors duration-300"
              >
                <span className="text-3xl" role="img" aria-label={h.label}>{h.icon}</span>
                <div className="font-bold text-gold text-lg">{h.value}</div>
                <div className="text-[#9CA3AF] text-xs">{h.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* OUTREACH PREVIEW */}
      <section className="bg-[#0D0D0D] py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row items-start md:items-end justify-between gap-4 mb-12">
            <SectionHeading label="Community Impact" title="Our" titleGold="Outreaches" />
            <CTAButton href="/outreaches" variant="outline">All Outreaches →</CTAButton>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {outreaches.slice(0, 3).map((o, i) => (
              <OutreachCard key={o.id} outreach={o} index={i} />
            ))}
          </div>
        </div>
      </section>

      {/* SPONSORS STRIP */}
      <section className="bg-[#F9F9F7] py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading label="Thank You" title="Proudly" titleGold="Supported By" center light />
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4">
            {sponsors.map((s, i) => (
              <SponsorCard key={s.id} sponsor={s} index={i} />
            ))}
          </div>
          <div className="text-center mt-10">
            <Link
              href="/sponsors"
              className="text-sm text-[#6B7280] hover:text-[#0A0A0A] transition-colors duration-200 underline underline-offset-4"
            >
              Become a Sponsor →
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
