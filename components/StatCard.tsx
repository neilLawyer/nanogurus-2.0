"use client";
import { motion } from "framer-motion";

interface StatCardProps {
  icon?: React.ReactNode;
  value: string;
  label: string;
  light?: boolean;
  index?: number;
}

export default function StatCard({ icon, value, label, light = false, index = 0 }: StatCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 16 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.4, delay: index * 0.08 }}
      className={`rounded-xl p-5 ${
        light
          ? "bg-white border border-[#E5E7EB] shadow-sm"
          : "bg-[#141414] border border-[#1F1F1F]"
      }`}
    >
      {icon && <div className="text-gold mb-2">{icon}</div>}
      <div className={`text-2xl font-bold ${light ? "text-[#0A0A0A]" : "text-gold"}`}>{value}</div>
      <div className={`text-xs font-medium mt-1 ${light ? "text-[#6B7280]" : "text-[#9CA3AF]"}`}>{label}</div>
    </motion.div>
  );
}
