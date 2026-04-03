"use client";
import { useCountUp } from "@/hooks/useCountUp";
import { useInView } from "@/hooks/useInView";

interface CountUpStatProps {
  value: number;
  suffix?: string;
  prefix?: string;
  label: string;
  light?: boolean;
}

export default function CountUpStat({
  value,
  suffix = "",
  prefix = "",
  label,
  light = false,
}: CountUpStatProps) {
  const [ref, inView] = useInView(0.3);
  const count = useCountUp(value, 1500, inView);

  return (
    <div ref={ref} className="flex flex-col items-center text-center">
      <div className={`text-4xl md:text-5xl font-display tracking-wider ${light ? "text-[#0A0A0A]" : "text-gold"}`}>
        {prefix}{count.toLocaleString()}{suffix}
      </div>
      <div className={`text-xs font-semibold uppercase tracking-[0.15em] mt-2 ${light ? "text-[#6B7280]" : "text-[#6B7280]"}`}>
        {label}
      </div>
    </div>
  );
}
