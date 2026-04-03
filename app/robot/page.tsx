import type { Metadata } from "next";
import SectionHeading from "@/components/SectionHeading";
import CTAButton from "@/components/CTAButton";

export const metadata: Metadata = { title: "Our Robot — DECODE" };

const subsystems = [
  {
    num: "01",
    title: "Intake",
    desc: "6 compliant wheels for rapid collection. Collects within 50ms of contact.",
  },
  {
    num: "02",
    title: "Ramp with Funnels",
    desc: "3D-printed custom ramp with integrated funnels for smooth artifact transfer.",
  },
  {
    num: "03",
    title: "Transfer Stage 1",
    desc: "TPU sweepers with a 1.5:1 gear ratio to precisely move artifacts upstream.",
  },
  {
    num: "04",
    title: "Transfer Stage 2",
    desc: "4 compliant wheels driven by a NeveRest 3.7 motor for reliable delivery.",
  },
  {
    num: "05",
    title: "Adjustable Hood",
    desc: "Servo-driven mechanism with custom 3D-printed components. Range: 50°–70°.",
  },
  {
    num: "06",
    title: "Flywheel",
    desc: "Steel flywheel with 1.60 lbs added weight to minimize velocity drops under load.",
  },
];

const codeHighlights = [
  {
    title: "Sensor Fusion",
    desc: "Kalman Filter-inspired approach combining multiple sensor inputs for robust localization.",
    icon: "📡",
  },
  {
    title: "Flywheel PIDF",
    desc: "Custom PIDF controller with gain scheduling for accurate, consistent scoring.",
    icon: "⚙️",
  },
  {
    title: "Ballistics Table",
    desc: "Military-inspired ballistics table for precise trajectory calculations at any position.",
    icon: "🎯",
  },
  {
    title: "Auto Goal Alignment",
    desc: "Vision-based automatic goal alignment for hands-free targeting during TeleOp.",
    icon: "🔭",
  },
  {
    title: "LED Transparency",
    desc: "LED driver providing real-time system state feedback to drive team.",
    icon: "💡",
  },
  {
    title: "Current-Draw Limiter",
    desc: "Intelligent current monitoring to prevent brownouts during peak motor demand.",
    icon: "🔋",
  },
];

const timeline = [
  "Brainstorming",
  "Prototyping",
  "Sketch / CAD",
  "Testing & Evaluation",
  "Refining & Optimizing",
];

export default function RobotPage() {
  return (
    <>
      {/* HERO */}
      <section className="bg-[#0A0A0A] mesh-bg grid-bg pt-28 pb-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <span className="inline-block text-xs font-semibold uppercase tracking-[0.2em] text-gold mb-4">
            2025–26 Season Robot
          </span>
          <h1 className="font-display text-6xl md:text-9xl tracking-wider text-[#F9F9F7] mb-4">
            DECODE
          </h1>
          <p className="text-[#9CA3AF] text-base md:text-lg max-w-lg mx-auto">
            Compact, modular robot optimized for fast 3-artifact cycles and accurate shooting from
            any zone.
          </p>
        </div>
      </section>

      {/* SUBSYSTEMS */}
      <section className="bg-[#0D0D0D] py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading label="Hardware" title="Key" titleGold="Subsystems" />
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {subsystems.map((s) => (
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
            {/* Line */}
            <div className="hidden md:block absolute top-6 left-0 right-0 h-0.5 bg-[#E5E7EB]" />
            <div className="grid grid-cols-1 md:grid-cols-5 gap-6 md:gap-4">
              {timeline.map((step, i) => (
                <div key={step} className="flex flex-col items-center text-center">
                  <div className="relative z-10 w-12 h-12 rounded-full bg-[#0A0A0A] border-2 border-gold flex items-center justify-center mb-4 shadow-lg shadow-gold/10">
                    <span className="font-display text-gold text-lg">{i + 1}</span>
                  </div>
                  <h3 className="font-semibold text-[#0A0A0A] text-sm text-center">{step}</h3>
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
            {codeHighlights.map((c) => (
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
      <section className="bg-[#141414] border-t border-[#1F1F1F] py-20">
        <div className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <SectionHeading
            label="Documentation"
            title="Design"
            titleGold="Portfolio"
            center
          />
          <p className="text-[#9CA3AF] mb-8">
            Download our design portfolio — a condensed look at DECODE&apos;s engineering and
            mechanical design process.
          </p>
          <CTAButton href="/design-portfolio.pdf" variant="filled" external>
            Download Design Portfolio (PDF)
          </CTAButton>
          <p className="text-[#555] text-xs mt-4">Pages 5–10 · Season 2025–26</p>
        </div>
      </section>
    </>
  );
}
