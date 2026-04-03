"use client";
import { motion } from "framer-motion";
import { mentors, connections } from "@/data/stemConnections";
import MentorCard from "@/components/MentorCard";
import ConnectionBadge from "@/components/ConnectionBadge";
import SectionHeading from "@/components/SectionHeading";

const stats = [
  { value: "34", label: "STEM Connections" },
  { value: "6", label: "Mentors Gained" },
  { value: "4", label: "Team Collaborations" },
];

export default function StemConnectionsPage() {
  return (
    <>
      {/* HERO */}
      <section className="bg-[#0A0A0A] mesh-bg grid-bg pt-28 pb-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <span className="inline-block text-xs font-semibold uppercase tracking-[0.2em] text-gold mb-4">
            Professional Network
          </span>
          <h1 className="font-display text-6xl md:text-8xl tracking-wider text-[#F9F9F7] mb-6">
            STEM CONNECTIONS
          </h1>
          <div className="flex flex-wrap items-center justify-center gap-8 mt-8">
            {stats.map((s) => (
              <div key={s.label} className="text-center">
                <div className="font-display text-4xl text-gold">{s.value}</div>
                <div className="text-xs font-semibold uppercase tracking-widest text-[#6B7280] mt-1">
                  {s.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* INTRO */}
      <section className="bg-[#F9F9F7] py-16">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <p className="text-[#374151] text-lg leading-relaxed">
            As a new team, we actively look to connect the dots between our skill gaps and gain more
            insight into the engineering world. We understand that the professional STEM community
            plays an essential role in our success. Our connections and mentors have helped us
            overcome many challenges throughout each season and have helped develop our skills.
          </p>
        </div>
      </section>

      {/* MENTORS */}
      <section className="bg-[#0A0A0A] py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading label="Our Mentors" title="Expert" titleGold="Mentors" />
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {mentors.map((m, i) => (
              <MentorCard key={m.id} mentor={m} index={i} />
            ))}
          </div>
        </div>
      </section>

      {/* STRYKER PLANT VISIT */}
      <section className="bg-[#F9F9F7] py-24">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-white border border-[#E5E7EB] rounded-3xl p-8 md:p-12 shadow-sm">
            <span className="inline-block text-xs font-semibold uppercase tracking-[0.2em] text-gold mb-3">
              Highlighted Experience
            </span>
            <h2 className="text-3xl font-bold text-[#0A0A0A] mb-6">
              Plant Visit —{" "}
              <span className="text-gold">Stryker Medical Devices</span>
            </h2>
            <div className="space-y-4 text-[#374151] leading-relaxed">
              <p>
                The team visited Stryker&apos;s state-of-the-art facility for an immersive look at
                real-world engineering in action. We simulated knee surgery using the MAKO robotic
                surgical system, toured the manufacturing plant, and engaged directly with plant
                engineers about their work.
              </p>
              <p>
                During the visit, we explored CAD modeling used in robotic surgery systems, the
                knee implant manufacturing process through metal injection moulding, and how 3D
                printing and iterative design are applied to develop real medical solutions — the
                same principles we use on our own robot.
              </p>
              <p>
                The parallels between surgical robotics and FTC design were eye-opening: precision,
                repeatability, and safety-first engineering are as critical in an operating room as
                they are on a competition field.
              </p>
              <p className="text-[#6B7280] italic border-l-4 border-gold pl-4">
                A sincere thank-you to the Stryker team for generously hosting us and sharing their
                passion for innovation. This experience will stay with every member of NanoGurus 2.0
                as we continue to grow.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CONNECTIONS GRID */}
      <section className="bg-[#0A0A0A] py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading
            label="Professional Network"
            title="All"
            titleGold="Connections"
            subtitle={`${connections.length} professionals across industry, academia, and research.`}
          />
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-3">
            {connections.map((c, i) => (
              <motion.div
                key={c.id}
                initial={{ opacity: 0, y: 12 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.3, delay: Math.min(i * 0.03, 0.5) }}
              >
                <ConnectionBadge connection={c} />
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
