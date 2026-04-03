"use client";
import { useState } from "react";
import { sponsors } from "@/data/sponsors";
import SponsorCard from "@/components/SponsorCard";
import SectionHeading from "@/components/SectionHeading";

export default function SponsorsPage() {
  const [email, setEmail] = useState("");

  const gold = sponsors.filter((s) => s.tier === "gold");
  const silver = sponsors.filter((s) => s.tier === "silver");
  const community = sponsors.filter((s) => s.tier === "community");

  return (
    <>
      {/* HERO */}
      <section className="bg-[#0A0A0A] mesh-bg grid-bg pt-28 pb-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <span className="inline-block text-xs font-semibold uppercase tracking-[0.2em] text-gold mb-4">
            Partnerships
          </span>
          <h1 className="font-display text-6xl md:text-8xl tracking-wider text-[#F9F9F7] mb-4">
            OUR SPONSORS
          </h1>
          <p className="text-[#9CA3AF] text-base md:text-lg max-w-xl mx-auto">
            We are grateful for the support of our sponsors and are actively seeking new
            collaborations.
          </p>
        </div>
      </section>

      {/* GOLD SPONSORS */}
      {gold.length > 0 && (
        <section className="bg-[#0A0A0A] py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex items-center gap-3 mb-8">
              <span className="w-3 h-3 rounded-full bg-gold" />
              <h2 className="text-xs font-bold uppercase tracking-widest text-gold">Gold Sponsors</h2>
            </div>
            <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-5">
              {gold.map((s, i) => (
                <SponsorCard key={s.id} sponsor={s} index={i} />
              ))}
            </div>
          </div>
        </section>
      )}

      {/* SILVER SPONSORS */}
      {silver.length > 0 && (
        <section className="bg-[#0D0D0D] py-16 border-t border-[#1A1A1A]">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex items-center gap-3 mb-8">
              <span className="w-3 h-3 rounded-full bg-[#C0C0C0]" />
              <h2 className="text-xs font-bold uppercase tracking-widest text-[#C0C0C0]">Silver Sponsors</h2>
            </div>
            <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-5">
              {silver.map((s, i) => (
                <SponsorCard key={s.id} sponsor={s} index={i} />
              ))}
            </div>
          </div>
        </section>
      )}

      {/* COMMUNITY SPONSORS */}
      {community.length > 0 && (
        <section className="bg-[#0A0A0A] py-16 border-t border-[#1A1A1A]">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex items-center gap-3 mb-8">
              <span className="w-3 h-3 rounded-full bg-[#6B7280]" />
              <h2 className="text-xs font-bold uppercase tracking-widest text-[#6B7280]">Community Sponsors</h2>
            </div>
            <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-5">
              {community.map((s, i) => (
                <SponsorCard key={s.id} sponsor={s} index={i} />
              ))}
            </div>
          </div>
        </section>
      )}

      {/* SPONSORSHIP INTEREST CTA */}
      <section className="bg-[#F9F9F7] py-24">
        <div className="max-w-xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <SectionHeading
            label="Partner With Us"
            title="Support"
            titleGold="NanoGurus 2.0"
            center
            light
          />
          <p className="text-[#374151] mb-8">
            Interested in supporting NanoGurus 2.0? We&apos;d love to connect about sponsorship
            opportunities and how your organization can help us grow.
          </p>
          <form
            onSubmit={(e) => {
              e.preventDefault();
              if (email) {
                window.location.href = `mailto:nanogurus25@gmail.com?subject=Sponsorship Inquiry&body=Hi NanoGurus team, I'm interested in sponsoring your team. My email is: ${email}`;
              }
            }}
            className="flex flex-col sm:flex-row gap-3"
          >
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Your email address"
              required
              className="flex-1 px-5 py-3 rounded-full bg-white border border-[#D1D5DB] text-[#0A0A0A] placeholder-[#9CA3AF] focus:outline-none focus:ring-2 focus:ring-gold focus:border-transparent text-sm"
            />
            <button
              type="submit"
              className="px-7 py-3 rounded-full bg-[#0A0A0A] text-white font-semibold text-sm hover:bg-[#1A1A1A] transition-colors duration-200 focus-visible:outline focus-visible:outline-2 focus-visible:outline-gold focus-visible:outline-offset-2 whitespace-nowrap"
            >
              Get in Touch
            </button>
          </form>
        </div>
      </section>
    </>
  );
}
