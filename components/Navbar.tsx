"use client";
import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";

const navLinks = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About" },
  { href: "/robot", label: "Robot" },
  { href: "/outreaches", label: "Outreaches" },
  { href: "/stem-connections", label: "STEM" },
  { href: "/awards", label: "Awards" },
  { href: "/events", label: "Events" },
  { href: "/sponsors", label: "Sponsors" },
  { href: "/media", label: "Media" },
];

export default function Navbar() {
  const pathname = usePathname();
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    setMenuOpen(false);
  }, [pathname]);

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          scrolled || menuOpen
            ? "bg-[#0A0A0A]/95 backdrop-blur-md border-b border-[#1F1F1F]"
            : "bg-transparent"
        }`}
      >
        <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
          {/* Logo */}
          <Link
            href="/"
            className="flex flex-col leading-none focus-visible:outline-gold"
          >
            <span className="font-display text-xl text-gold tracking-wide">NanoGurus 2.0</span>
            <span className="text-[10px] text-[#6B7280] tracking-wider uppercase">#30682</span>
          </Link>

          {/* Desktop Links */}
          <ul className="hidden lg:flex items-center gap-1">
            {navLinks.map(({ href, label }) => {
              const active = pathname === href;
              return (
                <li key={href}>
                  <Link
                    href={href}
                    className={`relative px-3 py-2 text-sm font-medium rounded-lg transition-colors duration-200 focus-visible:outline-gold ${
                      active
                        ? "text-gold"
                        : "text-[#9CA3AF] hover:text-[#F9F9F7]"
                    }`}
                  >
                    {label}
                    {active && (
                      <motion.span
                        layoutId="nav-underline"
                        className="absolute bottom-0 left-3 right-3 h-0.5 bg-gold rounded-full"
                      />
                    )}
                  </Link>
                </li>
              );
            })}
          </ul>

          {/* Contact CTA */}
          <a
            href="mailto:NanoGurus30682@gmail.com"
            className="hidden lg:inline-flex items-center px-5 py-2 rounded-full bg-gold text-black text-sm font-semibold hover:bg-gold-deep transition-colors duration-200 focus-visible:outline-gold"
          >
            Contact
          </a>

          {/* Hamburger */}
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="lg:hidden w-10 h-10 flex flex-col items-center justify-center gap-1.5 focus-visible:outline-gold rounded-lg"
            aria-label="Toggle navigation menu"
            aria-expanded={menuOpen}
          >
            <span
              className={`block w-6 h-0.5 bg-[#F9F9F7] rounded transition-all duration-300 ${
                menuOpen ? "translate-y-2 rotate-45" : ""
              }`}
            />
            <span
              className={`block w-6 h-0.5 bg-[#F9F9F7] rounded transition-all duration-300 ${
                menuOpen ? "opacity-0" : ""
              }`}
            />
            <span
              className={`block w-6 h-0.5 bg-[#F9F9F7] rounded transition-all duration-300 ${
                menuOpen ? "-translate-y-2 -rotate-45" : ""
              }`}
            />
          </button>
        </nav>
      </header>

      {/* Mobile Drawer */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0, x: "100%" }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: "100%" }}
            transition={{ type: "tween", duration: 0.3 }}
            className="fixed inset-y-0 right-0 w-72 bg-[#0D0D0D] border-l border-[#1F1F1F] z-40 flex flex-col pt-20 pb-8 px-6"
          >
            <nav>
              <ul className="space-y-1">
                {navLinks.map(({ href, label }, i) => {
                  const active = pathname === href;
                  return (
                    <motion.li
                      key={href}
                      initial={{ opacity: 0, x: 20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: i * 0.04 }}
                    >
                      <Link
                        href={href}
                        className={`flex items-center justify-between px-4 py-3 rounded-xl text-base font-medium transition-colors duration-200 ${
                          active
                            ? "bg-gold/10 text-gold"
                            : "text-[#9CA3AF] hover:bg-[#1A1A1A] hover:text-[#F9F9F7]"
                        }`}
                      >
                        {label}
                        {active && <span className="w-1.5 h-1.5 rounded-full bg-gold" />}
                      </Link>
                    </motion.li>
                  );
                })}
              </ul>
            </nav>
            <div className="mt-auto">
              <a
                href="mailto:NanoGurus30682@gmail.com"
                className="block text-center px-5 py-3 rounded-full bg-gold text-black font-semibold hover:bg-gold-deep transition-colors duration-200"
              >
                Contact Us
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Backdrop */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setMenuOpen(false)}
            className="fixed inset-0 bg-black/60 z-30 lg:hidden"
          />
        )}
      </AnimatePresence>
    </>
  );
}
