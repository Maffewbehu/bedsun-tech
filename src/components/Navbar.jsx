import { Link, NavLink } from "react-router-dom";
import logo from "../assets/BT_logo.png";

function NavItem({ to, children }) {
  return (
    <NavLink
      to={to}
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

export default function Navbar() {
  return (
    <header className="sticky top-0 z-50 border-b border-gray-200/70 bg-white/70 backdrop-blur">
      <div className="mx-auto flex max-w-6xl items-center justify-between gap-4 px-4 py-3 sm:px-6">
        {/* Brand */}
        <Link to="/" className="flex items-center gap-3">
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
        <nav className="hidden items-center gap-2 sm:flex">
          <NavItem to="/about">About</NavItem>
          <NavItem to="/services">Services</NavItem>
          <NavItem to="/small-business-website-design">Websites</NavItem>
          <NavItem to="/projects">Projects</NavItem>
          <NavItem to="/contact">Contact</NavItem>
        </nav>

        {/* Mobile CTA */}
        <Link
          to="/contact"
          className="sm:hidden rounded-xl bg-gray-900 px-4 py-2 text-sm font-semibold text-white shadow-sm hover:bg-gray-800"
        >
          Contact
        </Link>
      </div>
    </header>
  );
}