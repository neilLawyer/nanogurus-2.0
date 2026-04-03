"use client";
import { motion } from "framer-motion";
import type { SeasonEvent } from "@/data/events";
import PlaceholderImage from "./PlaceholderImage";
import StatusBadge from "./StatusBadge";
import Image from "next/image";

export default function EventCard({
  event,
  index = 0,
}: {
  event: SeasonEvent;
  index?: number;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.08 }}
      className="bg-[#141414] border border-[#1F1F1F] rounded-2xl overflow-hidden card-hover gold-border-hover flex flex-col"
    >
      {event.image ? (
        <div className="relative h-44 w-full">
          <Image src={event.image} alt={event.title} fill className="object-cover" />
        </div>
      ) : (
        <PlaceholderImage className="h-44 w-full rounded-none" />
      )}
      <div className="p-5 flex flex-col flex-1">
        <div className="flex items-center justify-between mb-3">
          <StatusBadge status={event.status} />
          <span className="text-[#6B7280] text-xs">{event.date}</span>
        </div>
        <h3 className="font-bold text-[#F9F9F7] text-base leading-snug mb-2">{event.title}</h3>
        <div className="flex items-center gap-1 text-[#6B7280] text-xs mb-3">
          <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
          </svg>
          {event.location}
        </div>
        <p className="text-[#9CA3AF] text-sm leading-relaxed flex-1">
          {event.description || <em className="text-[#555]">Details coming soon</em>}
        </p>
      </div>
    </motion.div>
  );
}
