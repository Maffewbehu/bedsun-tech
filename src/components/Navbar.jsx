import { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import logo from "../assets/BT_logo.png";

function NavItem({ to, children, onClick }) {
  return (
    <NavLink
      to={to}
      onClick={onClick}
      className={({ isActive }) =>
        [
          "rounded-xl px-3 py-2 text-sm font-semibold transition",
          isActive
            ? "bg-gray-900 text-white shadow-sm"
            : "text-gray-700 hover:bg-gray-100 hover:text-gray-900",
        ].join(" ")
      }
      end={to === "/"}
    >
      {children}
    </NavLink>
  );
}

function MobileNavItem({ to, children, onClick }) {
  return (
    <NavLink
      to={to}
      onClick={onClick}
      className={({ isActive }) =>
        [
          "block rounded-2xl px-4 py-3 text-sm font-semibold transition",
          isActive
            ? "bg-gray-900 text-white shadow-sm"
            : "text-gray-700 hover:bg-gray-100 hover:text-gray-900",
        ].join(" ")
      }
      end={to === "/"}
    >
      {children}
    </NavLink>
  );
}

export default function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);

  const closeMobileMenu = () => setMobileOpen(false);

  return (
    <header className="sticky top-0 z-50 border-b border-gray-200/70 bg-white/80 backdrop-blur">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="flex items-center justify-between gap-4 py-3">
          {/* Brand */}
          <Link to="/" onClick={closeMobileMenu} className="flex items-center gap-3">
            <img
              src={logo}
              alt="Bedsun Tech"
              className="h-10 w-10 rounded-xl object-contain shadow-sm"
            />
            <div className="text-left leading-tight">
              <div className="text-sm font-extrabold tracking-wide text-gray-900">
                BEDSUN TECH
              </div>
              <div className="text-xs font-medium text-gray-600">
                IT Solutions • Dusk to Dawn
              </div>
            </div>
          </Link>

          {/* Desktop nav */}
          <nav className="hidden items-center gap-2 md:flex">
            <NavItem to="/about">About</NavItem>
            <NavItem to="/services">Services</NavItem>
            <NavItem to="/small-business-website-design">Websites</NavItem>
            <NavItem to="/projects">Projects</NavItem>
            <NavItem to="/contact">Contact</NavItem>
          </nav>

          {/* Mobile menu button */}
          <button
            type="button"
            onClick={() => setMobileOpen((prev) => !prev)}
            className="inline-flex items-center justify-center rounded-xl border border-gray-200 bg-white px-3 py-2 text-sm font-semibold text-gray-900 shadow-sm hover:bg-gray-50 md:hidden"
            aria-label={mobileOpen ? "Close navigation menu" : "Open navigation menu"}
            aria-expanded={mobileOpen}
          >
            {mobileOpen ? (
              <span className="text-lg leading-none">×</span>
            ) : (
              <span className="flex flex-col gap-1">
                <span className="block h-0.5 w-5 rounded-full bg-gray-900" />
                <span className="block h-0.5 w-5 rounded-full bg-gray-900" />
                <span className="block h-0.5 w-5 rounded-full bg-gray-900" />
              </span>
            )}
          </button>
        </div>

        {/* Mobile nav */}
        {mobileOpen ? (
          <nav className="border-t border-gray-200 py-3 md:hidden">
            <div className="grid gap-2">
              <MobileNavItem to="/about" onClick={closeMobileMenu}>
                About
              </MobileNavItem>
              <MobileNavItem to="/services" onClick={closeMobileMenu}>
                Services
              </MobileNavItem>
              <MobileNavItem
                to="/small-business-website-design"
                onClick={closeMobileMenu}
              >
                Websites
              </MobileNavItem>
              <MobileNavItem to="/projects" onClick={closeMobileMenu}>
                Projects
              </MobileNavItem>
              <MobileNavItem to="/contact" onClick={closeMobileMenu}>
                Contact
              </MobileNavItem>
            </div>

            <div className="mt-3 rounded-2xl border border-gray-200 bg-gray-50 p-4">
              <div className="text-sm font-semibold text-gray-900">
                Need help with technology?
              </div>
              <p className="mt-1 text-sm leading-relaxed text-gray-600">
                Websites, automation, small business IT, Wi-Fi, cameras, and personal tech help.
              </p>
              <Link
                to="/contact"
                onClick={closeMobileMenu}
                className="mt-3 inline-flex w-full justify-center rounded-2xl bg-indigo-600 px-5 py-3 text-sm font-semibold text-white shadow-sm hover:bg-indigo-700"
              >
                Start a project
              </Link>
            </div>
          </nav>
        ) : null}
      </div>
    </header>
  );
}