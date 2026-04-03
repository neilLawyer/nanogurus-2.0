"use client";
import { motion } from "framer-motion";

interface SectionHeadingProps {
  label?: string;
  title: string;
  titleGold?: string;
  subtitle?: string;
  center?: boolean;
  light?: boolean;
}

export default function SectionHeading({
  label,
  title,
  titleGold,
  subtitle,
  center = false,
  light = false,
}: SectionHeadingProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
      className={`mb-12 ${center ? "text-center" : ""}`}
    >
      {label && (
        <span className="inline-block text-xs font-semibold uppercase tracking-[0.2em] text-gold mb-3">
          {label}
        </span>
      )}
      <h2
        className={`text-3xl md:text-4xl lg:text-5xl font-bold ${light ? "text-[#0A0A0A]" : "text-[#F9F9F7]"}`}
      >
        {title}{" "}
        {titleGold && <span className="text-gold">{titleGold}</span>}
      </h2>
      {subtitle && (
        <p
          className={`mt-4 text-base md:text-lg max-w-2xl ${center ? "mx-auto" : ""} ${
            light ? "text-[#6B7280]" : "text-[#9CA3AF]"
          }`}
        >
          {subtitle}
        </p>
      )}
    </motion.div>
  );
}
