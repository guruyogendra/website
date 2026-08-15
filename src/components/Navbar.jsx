import { useEffect, useState } from "react";
import { Link, NavLink, useLocation } from "react-router-dom";
import { Menu, X } from "lucide-react";

const links = [
  { to: "/", label: "Home" },
  { to: "/solutions", label: "Solutions" },
  { to: "/services", label: "Services" },
  { to: "/about", label: "About" },
  { to: "/contact", label: "Contact" },
];
export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const { pathname } = useLocation();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);

    onScroll();
    window.addEventListener("scroll", onScroll);

    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    setOpen(false);
  }, [pathname]);

  return (
    <header
      data-testid="site-navbar"
      className={`fixed top-0 inset-x-0 z-50 transition-colors duration-300 ${
        scrolled
          ? "bg-white/70 backdrop-blur-xl border-b border-slate-200/60"
          : "bg-white/40 backdrop-blur-md border-b border-transparent"
      }`}
    >
      <div className="max-w-[1400px] mx-auto px-6 lg:px-10 h-[80px] flex items-center justify-between">

        {/* Logo and Brand */}
        <Link
          to="/"
          data-testid="nav-logo"
          className="flex items-center gap-3 group"
        >
          <img
            src="/logo.jpeg"
            alt="BioMindz Logo"
            className="h-12 w-auto rounded-md object-contain"
          />

          <div className="flex flex-col justify-center">
            <span className="font-display text-xl font-semibold tracking-tight text-[#0a2540] leading-none">
              BIOMINDZ
            </span>

            <span className="text-[10px] font-medium text-[#00b8d4] uppercase tracking-wider mt-1.5">
              Intelligence. Innovation. Impact
            </span>
          </div>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-9">
          {links.map((l) => (
            <NavLink
              key={l.to}
              to={l.to}
              data-testid={`nav-link-${l.label.toLowerCase()}`}
              className={({ isActive }) =>
                `relative text-sm tracking-wide transition-colors py-1 ${
                  isActive
                    ? "text-[#0a2540]"
                    : "text-slate-500 hover:text-[#0a2540]"
                }`
              }
            >
              {({ isActive }) => (
                <>
                  {l.label}

                  <span
                    className={`absolute -bottom-0.5 left-0 h-px bg-[#00b8d4] transition-all duration-300 ${
                      isActive ? "w-full" : "w-0"
                    }`}
                  />
                </>
              )}
            </NavLink>
          ))}
        </nav>

        {/* Desktop CTA */}
        <div className="hidden md:flex items-center gap-4">
          <Link
            to="/contact"
            data-testid="nav-cta"
            className="btn-primary px-6 py-2.5 text-sm font-medium rounded-full"
          >
            Request a demo
          </Link>
        </div>

        {/* Mobile Menu Button */}
        <button
          data-testid="nav-mobile-toggle"
          className="md:hidden text-[#0a2540]"
          onClick={() => setOpen((v) => !v)}
          aria-label="Menu"
        >
          {open ? (
            <X className="w-6 h-6" />
          ) : (
            <Menu className="w-6 h-6" />
          )}
        </button>
      </div>

      {/* Mobile Navigation */}
      {open && (
        <div className="md:hidden bg-white border-t border-slate-200 px-6 py-6 flex flex-col gap-5">
          {links.map((l) => (
            <Link
              key={l.to}
              to={l.to}
              data-testid={`nav-mobile-${l.label.toLowerCase()}`}
              className="text-base text-[#0a2540]"
            >
              {l.label}
            </Link>
          ))}

          <Link
            to="/contact"
            className="btn-primary px-6 py-3 text-sm text-center rounded-full"
          >
            Request a demo
          </Link>
        </div>
      )}
    </header>
  );
}