import React, { useState } from 'react';
import { NavLink, Link } from 'react-router-dom';
import { Hexagon, Menu, X, ArrowUpRight } from 'lucide-react';

export default function Header() {
  const [mobileOpen, setMobileOpen] = useState(false);

  const navItems = [
    { label: 'Home', path: '/' },
    { label: 'Solutions', path: '/solutions' },
    { label: 'About Us', path: '/about' },
    { label: 'Contact', path: '/contact' }
  ];

  return (
    <header className="header">
      <div className="container header-container">
        {/* Brand Logo */}
        <Link to="/" className="brand-logo">
          <img src="/logo.jpeg" alt="BioMindz Logo" className="h-10 w-auto rounded" />
          <div className="flex flex-col">
            <span className="logo-text">BIOMINDZ</span>
            <span className="logo-sub">Intelligence in Diagnostics</span>
          </div>
        </Link>

        {/* Desktop Nav */}
        <nav className="desktop-nav">
          {navItems.map((item) => (
            <NavLink
              key={item.path}
              to={item.path}
              className={({ isActive }) =>
                isActive ? 'nav-link active' : 'nav-link'
              }
              end={item.path === '/'}
            >
              {item.label}
            </NavLink>
          ))}
        </nav>

        {/* Right CTA */}
        <div className="header-actions">
          <Link to="/contact" className="btn-pill-navy btn-sm">
            Request a demo
          </Link>
          <button
            className="mobile-toggle"
            onClick={() => setMobileOpen(!mobileOpen)}
            aria-label="Toggle Navigation"
          >
            {mobileOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileOpen && (
        <div className="mobile-drawer">
          <div className="container mobile-drawer-content">
            {navItems.map((item) => (
              <NavLink
                key={item.path}
                to={item.path}
                onClick={() => setMobileOpen(false)}
                className={({ isActive }) =>
                  isActive ? 'mobile-nav-link active' : 'mobile-nav-link'
                }
                end={item.path === '/'}
              >
                {item.label}
              </NavLink>
            ))}
            <Link
              to="/contact"
              onClick={() => setMobileOpen(false)}
              className="btn-pill-navy w-full mt-4"
            >
              Request a demo <ArrowUpRight size={16} />
            </Link>
          </div>
        </div>
      )}

      <style>{`
        .header {
          position: sticky;
          top: 0;
          z-index: 100;
          background-color: rgba(248, 250, 252, 0.94);
          backdrop-filter: blur(12px);
          border-bottom: 1px solid rgba(226, 232, 240, 0.8);
          height: 76px;
          display: flex;
          align-items: center;
        }
        .header-container {
          display: flex;
          align-items: center;
          justify-content: space-between;
        }
        .brand-logo {
          display: flex;
          align-items: center;
          gap: 10px;
          text-decoration: none;
          color: var(--color-navy);
        }
        .logo-hexagon {
          color: var(--color-navy);
          stroke-width: 2.2px;
        }
        .logo-text {
          font-family: var(--font-display);
          font-weight: 800;
          font-size: 1.15rem;
          letter-spacing: 0.04em;
          color: var(--color-navy);
          line-height: 1.1;
        }
        .logo-sub {
          font-size: 0.65rem;
          font-weight: 600;
          color: var(--color-text-muted);
          letter-spacing: 0.08em;
          text-transform: uppercase;
        }
        .logo-dot {
          color: var(--color-teal);
          margin: 0 1px;
        }
        .desktop-nav {
          display: flex;
          align-items: center;
          gap: 36px;
        }
        .nav-link {
          font-weight: 600;
          font-size: 0.92rem;
          color: #475569;
          transition: var(--transition-fast);
          position: relative;
          padding: 8px 0;
          text-decoration: none;
        }
        .nav-link:hover {
          color: var(--color-navy);
        }
        .nav-link.active {
          color: var(--color-navy);
          font-weight: 700;
        }
        .nav-link.active::after {
          content: '';
          position: absolute;
          bottom: 0;
          left: 0;
          right: 0;
          height: 2.5px;
          background-color: var(--color-teal);
          border-radius: 2px;
        }
        .header-actions {
          display: flex;
          align-items: center;
          gap: 16px;
        }
        .btn-sm {
          padding: 8px 20px;
          font-size: 0.88rem;
        }
        .mobile-toggle {
          display: none;
          background: none;
          border: none;
          color: var(--color-navy);
          cursor: pointer;
          padding: 4px;
        }
        .mobile-drawer {
          position: absolute;
          top: 76px;
          left: 0;
          right: 0;
          background-color: #ffffff;
          border-bottom: 1px solid var(--color-card-border);
          padding: 24px 0;
          box-shadow: 0 10px 25px -5px rgba(0, 0, 0, 0.1);
        }
        .mobile-drawer-content {
          display: flex;
          flex-direction: column;
          gap: 16px;
        }
        .mobile-nav-link {
          font-size: 1.1rem;
          font-weight: 600;
          color: var(--color-text-muted);
          padding: 8px 0;
          text-decoration: none;
        }
        .mobile-nav-link.active {
          color: var(--color-teal);
          font-weight: 700;
        }
        @media (max-width: 768px) {
          .desktop-nav {
            display: none;
          }
          .mobile-toggle {
            display: block;
          }
        }
      `}</style>
    </header>
  );
}
