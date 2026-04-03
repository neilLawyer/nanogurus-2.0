import type { Metadata } from "next";
import { results } from "@/data/awards";
import AwardCard from "@/components/AwardCard";
import SectionHeading from "@/components/SectionHeading";

export const metadata: Metadata = { title: "Awards & Accolades" };

export default function AwardsPage() {
  const featured = results.filter((r) => r.featured);
  const standard = results.filter((r) => !r.featured);

  return (
    <>
      {/* HERO */}
      <section className="bg-[#0A0A0A] mesh-bg grid-bg pt-28 pb-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <span className="inline-block text-xs font-semibold uppercase tracking-[0.2em] text-gold mb-4">
            2025–26 Season
          </span>
          <h1 className="font-display text-6xl md:text-8xl tracking-wider text-[#F9F9F7] mb-4">
            AWARDS &amp;
            <br />
            <span className="text-gold">ACCOLADES</span>
          </h1>
        </div>
      </section>

      {/* FEATURED RESULTS */}
      {featured.length > 0 && (
        <section className="bg-[#0A0A0A] py-16">
          <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
            <SectionHeading label="Standout Performances" title="Featured" titleGold="Results" />
            <div className="grid md:grid-cols-2 gap-6">
              {featured.map((r, i) => (
                <AwardCard key={r.id} result={r} index={i} />
              ))}
            </div>
          </div>
        </section>
      )}

      {/* ALL RESULTS */}
      <section className="bg-[#0D0D0D] py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading label="Full Record" title="All" titleGold="Competition Results" />
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {standard.map((r, i) => (
              <AwardCard key={r.id} result={r} index={i} />
            ))}
          </div>
        </div>
      </section>

      {/* SUMMARY BANNER */}
      <section className="bg-[#F9F9F7] py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <span className="inline-block text-xs font-semibold uppercase tracking-[0.2em] text-gold mb-3">
            Season Summary
          </span>
          <h2 className="text-4xl font-bold text-[#0A0A0A] mb-6">
            A Rookie Season Unlike Most
          </h2>
          <p className="text-[#374151] text-lg leading-relaxed max-w-2xl mx-auto mb-6">
            Finishing 3rd overall at a conference tournament, reaching the playoff quarterfinals,
            and posting the 2nd and 3rd best individual performances across multiple league meets —
            against squads with years of experience — is not a typical rookie story.
          </p>
          <p className="text-[#6B7280] text-base leading-relaxed max-w-xl mx-auto">
            NanoGurus 2.0 also earned the <strong className="text-[#374151]">Think Award</strong>,
            recognizing the engineering thinking and innovation behind DECODE. We don&apos;t
            measure ourselves against what&apos;s expected of first-year teams. We just compete —
            and let the record do the talking.
          </p>
        </div>
      </section>
    </>
  );
}
