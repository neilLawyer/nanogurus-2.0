"use client";
import { motion } from "framer-motion";

export default function ContactPage() {
  return (
    <main className="min-h-screen bg-[#0A0A0A] pt-28 pb-24">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="mb-10 text-center"
        >
          <span className="inline-block text-xs font-semibold uppercase tracking-[0.2em] text-gold mb-4">
            Get In Touch
          </span>
          <h1 className="font-display text-5xl md:text-7xl tracking-wide text-[#F9F9F7] mb-4">
            CONTACT US
          </h1>
          <p className="text-[#9CA3AF] text-base max-w-md mx-auto">
            Have a question, want to sponsor us, or just want to say hi? Fill out the form below and we&apos;ll get back to you.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.15 }}
          className="relative"
        >
          {/* Gold glow layers */}
          <div className="absolute -inset-4 rounded-[2rem] bg-gold/15 blur-2xl pointer-events-none" />
          <div className="absolute -inset-1 rounded-2xl bg-gradient-to-br from-gold/20 via-transparent to-gold/8 blur-md pointer-events-none" />

          {/* Form */}
          <div className="relative rounded-2xl overflow-hidden border border-gold/25 shadow-[0_0_70px_rgba(245,196,0,0.16)]">
            <iframe
              src="https://docs.google.com/forms/d/15OxWcjP3SZV7MdgPBrEApoTou7VZDHOmKe_KRtGzfSY/viewform?embedded=true"
              width="100%"
              height="780"
              style={{ border: 0, background: "white" }}
              title="Contact Form"
            >
              Loading form…
            </iframe>
          </div>
        </motion.div>
      </div>
    </main>
  );
}
