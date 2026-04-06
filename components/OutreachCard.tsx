"use client";
import { motion } from "framer-motion";
import type { Outreach } from "@/data/outreaches";
import PlaceholderImage from "./PlaceholderImage";
import Image from "next/image";

const categoryColors: Record<string, string> = {
  school: "bg-blue-500/10 text-blue-400 border-blue-500/20",
  community: "bg-green-500/10 text-green-400 border-green-500/20",
  cultural: "bg-purple-500/10 text-purple-400 border-purple-500/20",
  international: "bg-orange-500/10 text-orange-400 border-orange-500/20",
  hosting: "bg-yellow-500/10 text-yellow-400 border-yellow-500/20",
};

export default function OutreachCard({
  outreach,
  index = 0,
}: {
  outreach: Outreach;
  index?: number;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.08 }}
      className="group bg-[#141414] border border-[#1F1F1F] rounded-2xl overflow-hidden card-hover gold-border-hover flex flex-col"
    >
      {outreach.image ? (
        <div className="relative h-64 w-full overflow-hidden bg-[#0F0F0F]">
          <Image
            src={outreach.image}
            alt={outreach.title}
            fill
            className="object-contain p-2 rounded-xl"
          />
        </div>
      ) : (
        <PlaceholderImage className="h-64 w-full rounded-none" label="Photo coming soon" />
      )}

      <div className="p-5 flex flex-col flex-1">
        <div className="flex items-start justify-between gap-2 mb-2">
          <span
            className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-semibold uppercase tracking-wider border ${
              categoryColors[outreach.category] || categoryColors.community
            }`}
          >
            {outreach.category}
          </span>
          <span className="text-[#6B7280] text-xs flex items-center gap-1 flex-shrink-0">
            <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
            </svg>
            {outreach.location}
          </span>
        </div>

        <h3 className="font-bold text-[#F9F9F7] text-base leading-snug mb-2">{outreach.title}</h3>
        <p className="text-[#9CA3AF] text-sm leading-relaxed flex-1">{outreach.description}</p>
      </div>
    </motion.div>
  );
}
