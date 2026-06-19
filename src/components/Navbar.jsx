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

function DropdownItem({ to, title, desc, onClick }) {
  return (
    <NavLink
      to={to}
      onClick={onClick}
      className={({ isActive }) =>
        [
          "block rounded-2xl px-4 py-3 transition",
          isActive ? "bg-gray-100" : "hover:bg-gray-50",
        ].join(" ")
      }
    >
      <div className="text-sm font-semibold text-gray-900">{title}</div>
      {desc ? (
        <div className="mt-0.5 text-xs leading-relaxed text-gray-600">
          {desc}
        </div>
      ) : null}
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
  const [servicesOpen, setServicesOpen] = useState(false);

  const closeMobileMenu = () => setMobileOpen(false);
  const closeServicesMenu = () => setServicesOpen(false);

  return (
    <header className="sticky top-0 z-50 border-b border-gray-200/70 bg-white/80 backdrop-blur">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="flex items-center justify-between gap-4 py-3">
          <Link
            to="/"
            onClick={() => {
              closeMobileMenu();
              closeServicesMenu();
            }}
            className="flex items-center gap-3"
          >
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

            <div
              className="relative"
              onMouseEnter={() => setServicesOpen(true)}
              onMouseLeave={() => setServicesOpen(false)}
            >
              <button
                type="button"
                onClick={() => setServicesOpen((prev) => !prev)}
                className={[
                  "rounded-xl px-3 py-2 text-sm font-semibold transition",
                  servicesOpen
                    ? "bg-gray-100 text-gray-900"
                    : "text-gray-700 hover:bg-gray-100 hover:text-gray-900",
                ].join(" ")}
                aria-expanded={servicesOpen}
              >
                Services ▾
              </button>

              {servicesOpen ? (
                <div className="absolute left-0 top-full w-80 pt-2">
                  <div className="rounded-3xl border border-gray-200 bg-white p-3 shadow-lg">
                    <DropdownItem
                      to="/services"
                      title="All Services"
                      desc="Overview of everything Bedsun Tech can help with."
                      onClick={closeServicesMenu}
                    />
                    <DropdownItem
                      to="/small-business-website-design"
                      title="Websites"
                      desc="Small business website design, redesigns, SEO basics, and forms."
                      onClick={closeServicesMenu}
                    />
                    <DropdownItem
                      to="/business-automation"
                      title="Automation"
                      desc="Business workflows, dashboards, IT automation, scripts, and tools."
                      onClick={closeServicesMenu}
                    />
                    <DropdownItem
                      to="/small-business-it-support"
                      title="Small Business IT"
                      desc="Email, Microsoft 365, devices, Wi-Fi, backups, and tech support."
                      onClick={closeServicesMenu}
                    />
                    <DropdownItem
                      to="/personal-tech-help"
                      title="Personal Tech Help"
                      desc="Accounts, passwords, devices, printers, cameras, and home tech."
                      onClick={closeServicesMenu}
                    />
                    <DropdownItem
                      to="/senior-tech-help"
                      title="Senior Tech Help"
                      desc="Patient help for seniors, families, printers, Wi-Fi, phones, smart TVs, and scam safety."
                      onClick={closeServicesMenu}
                    />
                    <DropdownItem
                      to="/printer-setup-troubleshooting"
                      title="Printer Help"
                      desc="Printer setup, offline printer fixes, wireless printing, scanner setup, and home office printer help."
                      onClick={closeServicesMenu}
                    />
                    <DropdownItem
                      to="/wifi-setup-troubleshooting"
                      title="Wi-Fi Help"
                      desc="Wi-Fi setup, weak signal, router help, dead zones, smart TV connections, printers, cameras, and home network troubleshooting."
                      onClick={closeServicesMenu}
                    />
                  </div>
                </div>
              ) : null}
            </div>

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

              <div className="rounded-2xl border border-gray-200 bg-white p-2">
                <div className="px-2 py-2 text-xs font-semibold uppercase tracking-wider text-gray-500">
                  Services
                </div>
                <MobileNavItem to="/services" onClick={closeMobileMenu}>
                  All Services
                </MobileNavItem>
                <MobileNavItem
                  to="/small-business-website-design"
                  onClick={closeMobileMenu}
                >
                  Websites
                </MobileNavItem>
                <MobileNavItem to="/business-automation" onClick={closeMobileMenu}>
                  Automation
                </MobileNavItem>
                <MobileNavItem
                  to="/small-business-it-support"
                  onClick={closeMobileMenu}
                >
                  Small Business IT
                </MobileNavItem>
                <MobileNavItem to="/personal-tech-help" onClick={closeMobileMenu}>
                  Personal Tech Help
                </MobileNavItem>
                <MobileNavItem to="/senior-tech-help" onClick={closeMobileMenu}>
                  Senior Tech Help
                </MobileNavItem>
                <MobileNavItem
                  to="/printer-setup-troubleshooting"
                  onClick={closeMobileMenu}
                >
                  Printer Help
                </MobileNavItem>
                <MobileNavItem
                  to="/wifi-setup-troubleshooting"
                  onClick={closeMobileMenu}
                >
                  Wi-Fi Help
                </MobileNavItem>
              </div>

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