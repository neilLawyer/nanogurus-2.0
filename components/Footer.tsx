import Link from "next/link";

const links = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About" },
  { href: "/robot", label: "Robot" },
  { href: "/outreaches", label: "Outreaches" },
  { href: "/stem-connections", label: "STEM Connections" },
  { href: "/awards", label: "Awards" },
  { href: "/events", label: "Events" },
  { href: "/team-collaborations", label: "Collaborations" },
  { href: "/sponsors", label: "Sponsors" },
  { href: "/media", label: "Media" },
];

export default function Footer() {
  return (
    <footer className="bg-[#080808] border-t border-[#1A1A1A]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-10">
          {/* Brand */}
          <div>
            <div className="font-display text-2xl text-gold tracking-wide mb-1">NanoGurus 2.0</div>
            <div className="text-xs text-[#6B7280] uppercase tracking-widest mb-3">#30682 · FTC</div>
            <p className="text-[#6B7280] text-sm leading-relaxed max-w-xs">
              Building Robots. Building Character.
            </p>
          </div>

          {/* Links */}
          <div>
            <h3 className="text-xs font-semibold uppercase tracking-widest text-[#6B7280] mb-4">Quick Links</h3>
            <ul className="grid grid-cols-2 gap-x-4 gap-y-2">
              {links.map(({ href, label }) => (
                <li key={href}>
                  <Link
                    href={href}
                    className="text-sm text-[#9CA3AF] hover:text-gold transition-colors duration-200"
                  >
                    {label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-xs font-semibold uppercase tracking-widest text-[#6B7280] mb-4">Contact</h3>
            <ul className="space-y-2">
              <li>
                <a
                  href="mailto:NanoGurus30682@gmail.com"
                  className="text-sm text-[#9CA3AF] hover:text-gold transition-colors duration-200 flex items-center gap-2"
                >
                  <svg className="w-4 h-4 text-gold flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                  NanoGurus30682@gmail.com
                </a>
              </li>
              <li>
                <a
                  href="tel:9735800966"
                  className="text-sm text-[#9CA3AF] hover:text-gold transition-colors duration-200 flex items-center gap-2"
                >
                  <svg className="w-4 h-4 text-gold flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                  </svg>
                  973-580-0966
                </a>
              </li>
              <li className="flex items-start gap-2 text-sm text-[#9CA3AF]">
                <svg className="w-4 h-4 text-gold flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                </svg>
                Morris Plains, NJ, USA
              </li>
              <li>
                <a
                  href="https://www.instagram.com/nanogurus30682/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm text-[#9CA3AF] hover:text-gold transition-colors duration-200 flex items-center gap-2"
                >
                  <svg className="w-4 h-4 text-gold flex-shrink-0" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                  </svg>
                  @nanogurus30682
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-[#1A1A1A] pt-6 flex flex-col sm:flex-row items-center justify-between gap-2">
          <p className="text-xs text-[#555]">
            © 2026 NanoGurus 2.0 #30682 · FIRST Tech Challenge · Morris Plains, NJ
          </p>
          <p className="text-xs text-[#555]">501(c)(3) Nonprofit · Community-Based Team</p>
        </div>
      </div>
    </footer>
  );
}
