import type { Metadata } from "next";
import { collaborations } from "@/data/collaborations";
import CollaborationCard from "@/components/CollaborationCard";
import SectionHeading from "@/components/SectionHeading";

export const metadata: Metadata = { title: "Team Collaborations" };

export default function TeamCollaborationsPage() {
  return (
    <>
      {/* HERO */}
      <section className="bg-[#0A0A0A] mesh-bg grid-bg pt-28 pb-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <span className="inline-block text-xs font-semibold uppercase tracking-[0.2em] text-gold mb-4">
            Alliance & Mentorship
          </span>
          <h1 className="font-display text-6xl md:text-8xl tracking-wider text-[#F9F9F7] mb-4">
            TEAM
            <br />
            <span className="text-gold">COLLABORATIONS</span>
          </h1>
        </div>
      </section>

      {/* INTRO */}
      <section className="bg-[#F9F9F7] py-16">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <p className="text-[#374151] text-lg leading-relaxed">
            We actively mentor and support FIRST teams to spread our knowledge and experience,
            allowing others to grow alongside us. Our mentorship has helped teams win multiple
            awards.
          </p>
        </div>
      </section>

      {/* COLLABORATION CARDS */}
      <section className="bg-[#0A0A0A] py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading label="Partner Teams" title="Teams We've" titleGold="Worked With" />
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {collaborations.map((team, i) => (
              <CollaborationCard key={team.id} team={team} index={i} />
            ))}
          </div>
        </div>
      </section>

      {/* MENTORSHIP SIGNUP CTA */}
      <section className="bg-[#141414] border-t border-[#1F1F1F] py-24">
        <div className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-gold/10 border border-gold/20 text-gold text-xs font-semibold uppercase tracking-widest mb-6">
            Get Involved
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-[#F9F9F7] mb-4">
            Interested in being mentored
            <br />
            <span className="text-gold">by NanoGurus 2.0?</span>
          </h2>
          <p className="text-[#9CA3AF] mb-8">
            Whether you&apos;re a new FTC team looking for guidance or an established team wanting
            to collaborate, we&apos;d love to hear from you.
          </p>
          <a
            href="/contact"
            className="inline-flex items-center justify-center px-8 py-3.5 rounded-full bg-gold text-black font-semibold text-base hover:bg-[#D4A800] transition-colors duration-200 focus-visible:outline focus-visible:outline-2 focus-visible:outline-gold focus-visible:outline-offset-2"
          >
            Get in Touch
          </a>
        </div>
      </section>
    </>
  );
}
