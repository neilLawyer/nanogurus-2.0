"use client";
import { motion } from "framer-motion";
import SectionHeading from "@/components/SectionHeading";

export default function MediaPage() {

  return (
    <>
      {/* HERO */}
      <section className="bg-[#0A0A0A] mesh-bg grid-bg pt-28 pb-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <span className="inline-block text-xs font-semibold uppercase tracking-[0.2em] text-gold mb-4">
            Stay Updated
          </span>
          <h1 className="font-display text-6xl md:text-8xl tracking-wider text-[#F9F9F7]">
            MEDIA
          </h1>
        </div>
      </section>

      {/* INSTAGRAM */}
      <section className="bg-[#0D0D0D] py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row items-start md:items-end justify-between gap-6 mb-12">
            <div>
              <SectionHeading
                label="Social Media"
                title="Follow Us on"
                titleGold="Instagram"
              />
              <div className="flex items-center gap-2 -mt-4">
                <svg className="w-5 h-5 text-gold" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
                </svg>
                <span className="text-[#9CA3AF] text-sm font-medium">@nanogurus30682</span>
              </div>
            </div>
            <a
              href="https://www.instagram.com/nanogurus30682/"
              target="_blank"
              rel="noopener noreferrer"
              className="flex-shrink-0 inline-flex items-center gap-2 px-6 py-3 rounded-full bg-gold text-black font-semibold text-sm hover:bg-[#D4A800] transition-colors duration-200 focus-visible:outline focus-visible:outline-2 focus-visible:outline-gold focus-visible:outline-offset-2"
            >
              Open Instagram →
            </a>
          </div>

          {/* 6-box placeholder grid */}
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
            {Array.from({ length: 6 }).map((_, i) => (
              <motion.a
                key={i}
                href="https://www.instagram.com/nanogurus30682/"
                target="_blank"
                rel="noopener noreferrer"
                initial={{ opacity: 0, scale: 0.96 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: i * 0.07 }}
                className="group aspect-square bg-[#141414] border border-[#1F1F1F] rounded-2xl flex flex-col items-center justify-center gap-3 hover:border-gold/30 transition-all duration-300"
              >
                <svg
                  className="w-8 h-8 text-[#333] group-hover:text-gold/40 transition-colors duration-300"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                  aria-hidden="true"
                >
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
                </svg>
                <span className="text-xs text-[#444] group-hover:text-[#666] transition-colors duration-300 text-center px-2">
                  Visit our Instagram for live posts
                </span>
              </motion.a>
            ))}
          </div>
        </div>
      </section>

      {/* NANONEWS NEWSLETTER */}
      <section className="bg-[#F9F9F7] py-24">
        <div className="max-w-xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <SectionHeading
            label="NanoNews"
            title="Stay in the"
            titleGold="Loop"
            center
            light
          />
          <p className="text-[#374151] mb-8 leading-relaxed">
            Get updates on our outreaches, robot progress, STEM connections, and upcoming events.
          </p>
          <div className="flex justify-center mb-10">
            <a
              href="/contact"
              className="px-8 py-3.5 rounded-full bg-gold text-black font-semibold text-sm hover:bg-[#D4A800] transition-colors duration-200 focus-visible:outline focus-visible:outline-2 focus-visible:outline-gold focus-visible:outline-offset-2"
            >
              Get in Touch
            </a>
          </div>

          {/* Contact info */}
          <div className="flex flex-col items-center gap-2 text-sm text-[#6B7280]">
            <a href="/contact" className="hover:text-[#0A0A0A] transition-colors duration-200">
              Contact Us
            </a>
            <a href="tel:9735800966" className="hover:text-[#0A0A0A] transition-colors duration-200">
              973-580-0966
            </a>
            <span>Morris Plains, NJ, USA</span>
          </div>
        </div>
      </section>
    </>
  );
}
