import type { Metadata } from "next";
import { team } from "@/data/team";
import TeamMemberCard from "@/components/TeamMemberCard";
import SectionHeading from "@/components/SectionHeading";

export const metadata: Metadata = { title: "About Us" };

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

export default function AboutPage() {
  const members = team.filter((m) => m.type === "member");
  const support = team.filter((m) => m.type !== "member");

  return (
    <>
      {/* HERO */}
      <section className="bg-[#0A0A0A] mesh-bg grid-bg pt-28 pb-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <span className="inline-block text-xs font-semibold uppercase tracking-[0.2em] text-gold mb-4">
            Who We Are
          </span>
          <h1 className="font-display text-6xl md:text-8xl tracking-wider text-[#F9F9F7] mb-6">
            OUR STORY
          </h1>
        </div>
      </section>

      {/* STORY */}
      <section className="bg-[#F9F9F7] py-20">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <p className="text-[#374151] text-lg leading-relaxed mb-6">
            We are a rookie, community-based 501(c)(3) nonprofit team located in Morris Plains,
            New Jersey. We started with just two inexperienced members, no funding, and a coach who
            had moved away. Instead of lowering expectations, we raised our standards and rebuilt
            from the ground up — by February 2026, we had become NanoGurus 2.0: an eight-member
            team defined by passion, strong character, and a mission to create a lasting FIRST
            environment for our community and beyond.
          </p>
          <p className="text-[#6B7280] text-base leading-relaxed">
            What followed is the kind of first season most teams spend years working toward. We
            finished 3rd at the Morris Conference Upper Central League Tournament against experienced,
            multi-year teams, reached 7,000+ people through outreach, raised over $8,000, and built
            a network of 34 STEM professionals — all in year one. The results speak for themselves,
            and we&apos;re just getting started.
          </p>
        </div>
      </section>

      {/* TEAM MEMBERS */}
      <section className="bg-[#0A0A0A] py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading label="The Team" title="Meet the" titleGold="Members" />
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-5">
            {members.map((m, i) => (
              <TeamMemberCard key={m.id} member={m} index={i} />
            ))}
          </div>
        </div>
      </section>

      {/* COACHES & MENTORS */}
      <section className="bg-[#0D0D0D] py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading label="Leadership" title="Coaches," titleGold="Mentors & Mascot" />
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-5">
            {support.map((m, i) => (
              <TeamMemberCard key={m.id} member={m} index={i} />
            ))}
          </div>
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
