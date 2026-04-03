"use client";
import { motion } from "framer-motion";
import Link from "next/link";
import CTAButton from "@/components/CTAButton";
import SectionHeading from "@/components/SectionHeading";
import { sponsors } from "@/data/sponsors";
import SponsorCard from "@/components/SponsorCard";

const sections = [
  {
    label: "The Robot",
    title: "DECODE",
    description:
      "Our 2025–26 competition robot — built for speed, precision, and reliability. Compact, modular, and engineered to compete.",
    href: "/robot",
    cta: "Meet DECODE",
  },
  {
    label: "Community",
    title: "Outreaches",
    description:
      "We bring robotics and STEM to schools, community events, and cultural gatherings across New Jersey to inspire the next generation.",
    href: "/outreaches",
    cta: "See Our Outreaches",
  },
  {
    label: "Network",
    title: "STEM Connections",
    description:
      "We connect with engineers, researchers, and professionals to close skill gaps and understand what real-world STEM looks like.",
    href: "/stem-connections",
    cta: "View Our Network",
  },
  {
    label: "Competition",
    title: "Awards",
    description:
      "A look at how we performed on the competition field — meets, tournaments, placements, and awards earned this season.",
    href: "/awards",
    cta: "See Results",
  },
  {
    label: "The Team",
    title: "Who We Are",
    description:
      "Eight members. Two coaches. One mentor. A mascot. And a mission that goes well beyond robotics.",
    href: "/about",
    cta: "Meet the Team",
  },
  {
    label: "Partnerships",
    title: "Sponsors",
    description:
      "The individuals and organizations who believe in our mission and make everything we do possible.",
    href: "/sponsors",
    cta: "Our Sponsors",
  },
];

export default function HomePage() {
  return (
    <>
      {/* ── HERO ─────────────────────────────────────────────── */}
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
            NanoGurus 2.0 · FIRST Tech Challenge · Morris Plains, NJ
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

      {/* ── WHO WE ARE ───────────────────────────────────────── */}
      <section className="bg-[#F9F9F7] py-24">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <span className="inline-block text-xs font-semibold uppercase tracking-[0.2em] text-gold mb-4">
              Who We Are
            </span>
            <h2 className="text-4xl md:text-5xl font-bold text-[#0A0A0A] mb-6 leading-tight">
              A community team built on{" "}
              <span className="text-gold">character</span> first.
            </h2>
            <p className="text-[#374151] text-lg leading-relaxed mb-6">
              NanoGurus 2.0 is a rookie, community-based 501(c)(3) nonprofit FTC robotics team
              from Morris Plains, New Jersey. We started with almost nothing — no funding, no
              experience, and a coach who had moved away. Instead of scaling back, we rebuilt from
              the ground up.
            </p>
            <p className="text-[#6B7280] text-base leading-relaxed mb-8">
              We compete in FIRST Tech Challenge, but robotics is just the vehicle. Our real mission
              is to build a lasting STEM culture in our community — one that inspires younger
              students, connects with professionals, and proves that character drives results.
            </p>
            <CTAButton href="/about" variant="filled">Our Full Story →</CTAButton>
          </motion.div>
        </div>
      </section>

      {/* ── OUR MISSION ──────────────────────────────────────── */}
      <section className="bg-[#0A0A0A] py-24 border-y border-[#1A1A1A]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <span className="inline-block text-xs font-semibold uppercase tracking-[0.2em] text-gold mb-6">
              Our Mission
            </span>
            <blockquote className="font-display text-3xl md:text-5xl lg:text-6xl tracking-wide text-[#F9F9F7] leading-tight">
              "TO INSPIRE A LASTING{" "}
              <span className="text-gold">FIRST ENVIRONMENT</span>{" "}
              FOR OUR COMMUNITY AND BEYOND."
            </blockquote>
          </motion.div>
        </div>
      </section>

      {/* ── SITE SECTIONS ────────────────────────────────────── */}
      <section className="bg-[#0D0D0D] py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading
            label="Explore"
            title="Everything"
            titleGold="NanoGurus 2.0"
            subtitle="Get to know us — from the robot we built to the community we serve."
          />
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {sections.map((s, i) => (
              <motion.div
                key={s.href}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: i * 0.07 }}
              >
                <Link
                  href={s.href}
                  className="group block bg-[#141414] border border-[#1F1F1F] rounded-2xl p-7 h-full hover:border-gold/30 transition-all duration-300 hover:-translate-y-1"
                >
                  <span className="text-xs font-semibold uppercase tracking-widest text-gold mb-3 block">
                    {s.label}
                  </span>
                  <h3 className="text-xl font-bold text-[#F9F9F7] mb-3 group-hover:text-gold transition-colors duration-200">
                    {s.title}
                  </h3>
                  <p className="text-[#9CA3AF] text-sm leading-relaxed mb-5">{s.description}</p>
                  <span className="text-gold text-sm font-semibold inline-flex items-center gap-1 group-hover:gap-2 transition-all duration-200">
                    {s.cta} <span aria-hidden="true">→</span>
                  </span>
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ── SPONSORS STRIP ───────────────────────────────────── */}
      <section className="bg-[#F9F9F7] py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading
            label="Thank You"
            title="Proudly"
            titleGold="Supported By"
            center
            light
          />
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
