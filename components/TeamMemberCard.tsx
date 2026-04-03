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
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.08 }}
      className="group bg-[#141414] border border-[#1F1F1F] rounded-2xl p-6 flex flex-col items-center text-center card-hover gold-border-hover"
    >
      <div className="relative mb-4">
        {member.image ? (
          <div className="w-20 h-20 rounded-full overflow-hidden border-2 border-[#2A2A2A] group-hover:border-gold transition-colors duration-300">
            <Image
              src={member.image}
              alt={member.name}
              width={80}
              height={80}
              className="object-cover w-full h-full"
            />
          </div>
        ) : (
          <div className="w-20 h-20 rounded-full overflow-hidden border-2 border-[#2A2A2A] group-hover:border-gold transition-colors duration-300">
            <PlaceholderAvatar size="md" name={member.name} />
          </div>
        )}
        {isSpecial && (
          <span className="absolute -bottom-1 -right-1 w-5 h-5 bg-gold rounded-full border-2 border-[#141414]" />
        )}
      </div>

      <h3 className="font-semibold text-[#F9F9F7] text-base">{member.name}</h3>
      <p className="text-gold text-xs font-semibold uppercase tracking-wider mt-1">{member.role}</p>
      <p className="text-[#6B7280] text-xs mt-1">{member.grade}</p>

      {member.bio ? (
        <p className="text-[#9CA3AF] text-xs mt-3 leading-relaxed line-clamp-3">{member.bio}</p>
      ) : (
        <span className="mt-3 inline-flex items-center px-2.5 py-1 rounded-full text-[10px] font-semibold uppercase tracking-widest bg-gold/10 text-gold border border-gold/20">
          Bio coming soon
        </span>
      )}
    </motion.div>
  );
}
