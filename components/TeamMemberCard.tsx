"use client";
import { motion } from "framer-motion";
import type { TeamMember } from "@/data/team";
import PlaceholderAvatar from "./PlaceholderAvatar";
import Image from "next/image";

export default function TeamMemberCard({
  member,
  index = 0,
}: {
  member: TeamMember;
  index?: number;
}) {
  const isSpecial = member.type === "coach" || member.type === "mentor" || member.type === "mascot";

  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, delay: index * 0.1, ease: "easeOut" }}
      style={{ animationDelay: `${index * 0.4}s` }}
    >
      {/* Outer glow wrapper */}
      <motion.div
        animate={{ y: [0, -7, 0] }}
        transition={{
          duration: 3.5 + index * 0.3,
          repeat: Infinity,
          ease: "easeInOut",
          delay: index * 0.5,
        }}
        className="group relative"
      >
        {/* Gold gradient border via pseudo-wrapper */}
        <div className="relative rounded-2xl p-[1px] bg-gradient-to-b from-[#2A2A2A] to-[#1A1A1A] group-hover:from-gold/60 group-hover:to-gold/10 transition-all duration-500">
          {/* Glow behind card */}
          <div className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 blur-xl bg-gold/10 -z-10" />

          {/* Card body */}
          <div className="relative bg-[#111] rounded-2xl px-6 pt-6 pb-5 flex flex-col items-center text-center overflow-hidden">
            {/* Subtle top shimmer */}
            <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-gold/30 to-transparent" />

            {/* Avatar */}
            <div className="relative mb-4">
              <div className="w-28 h-28 rounded-full p-[2px] bg-gradient-to-br from-gold/40 to-[#2A2A2A] group-hover:from-gold group-hover:to-gold/30 transition-all duration-500">
                <div className="relative w-full h-full rounded-full overflow-hidden bg-[#1A1A1A]">
                  {member.image ? (
                    <Image
                      src={member.image}
                      alt={member.name}
                      fill
                      className={`object-cover ${member.imagePosition ?? "object-top"}`}
                    />
                  ) : (
                    <PlaceholderAvatar size="lg" name={member.name} />
                  )}
                </div>
              </div>
              {isSpecial && (
                <span className="absolute -bottom-1 -right-1 w-5 h-5 bg-gold rounded-full border-2 border-[#111]" />
              )}
            </div>

            {/* Info */}
            <h3 className="font-bold text-[#F9F9F7] text-base tracking-wide">{member.name}</h3>
            <p className="text-gold text-[11px] font-semibold uppercase tracking-[0.15em] mt-1">
              {member.role}
            </p>
            <p className="text-[#555] text-xs mt-1">{member.grade}</p>

            {/* Bio or badge */}
            {member.bio ? (
              <p className="text-[#9CA3AF] text-xs mt-4 leading-relaxed">
                {member.bio}
              </p>
            ) : (
              <span className="mt-4 inline-flex items-center px-3 py-1 rounded-full text-[10px] font-semibold uppercase tracking-widest bg-gold/10 text-gold border border-gold/20">
                Bio coming soon
              </span>
            )}
          </div>
        </div>
      </motion.div>
    </motion.div>
  );
}
