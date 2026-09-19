import { useEffect, useRef, useState } from "react";
import { Link, NavLink, useLocation } from "react-router-dom";
import logo from "../assets/BT_logo.png";
import logoWebp from "../assets/BT_logo.webp";

const serviceGroups = [
  {
    title: "Home Help",
    links: [
      ["/personal-tech-help", "Personal tech help"],
      ["/senior-tech-help", "Senior tech help"],
      ["/printer-setup-troubleshooting", "Printers & scanning"],
      ["/wifi-setup-troubleshooting", "Wi-Fi & internet"],
      ["/email-password-scam-help", "Email, passwords & scams"],
      ["/smart-tv-phone-tablet-setup", "TVs, phones & tablets"],
    ],
  },
  {
    title: "Business Help",
    links: [
      ["/services", "Business services overview"],
      ["/small-business-website-design", "Websites & SEO"],
      ["/business-automation", "Automation & workflows"],
      ["/ai-integration-small-business", "AI integration"],
      ["/business-tech-ai-opportunity-scan", "Tech & AI opportunity scan"],
      ["/small-business-it-support", "Small business IT"],
    ],
  },
];

function NavItem({ to, children, onClick, block = false }) {
  return (
    <NavLink to={to} onClick={onClick} end={to === "/"}
      className={({ isActive }) => [
        "min-h-11 items-center rounded-xl px-3 py-3 text-sm font-semibold transition",
        block ? "flex w-full" : "inline-flex",
        isActive ? "bg-gray-900 text-white" : "text-gray-700 hover:bg-gray-100 hover:text-gray-900",
      ].join(" ")}
    >{children}</NavLink>
  );
}

export default function Navbar() {
  const { pathname } = useLocation();
  const [mobileOpen, setMobileOpen] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);
  const mobileButton = useRef(null);
  const servicesButton = useRef(null);
  const header = useRef(null);
  const closeMenus = () => { setMobileOpen(false); setServicesOpen(false); };

  useEffect(() => { setMobileOpen(false); setServicesOpen(false); }, [pathname]);

  useEffect(() => {
    if (!mobileOpen && !servicesOpen) return;
    const onKeyDown = (event) => {
      if (event.key !== "Escape") return;
      if (mobileOpen) mobileButton.current?.focus();
      else servicesButton.current?.focus();
      setMobileOpen(false);
      setServicesOpen(false);
    };
    const onPointerDown = (event) => {
      if (!header.current?.contains(event.target)) {
        setMobileOpen(false);
        setServicesOpen(false);
      }
    };
    document.addEventListener("keydown", onKeyDown);
    document.addEventListener("pointerdown", onPointerDown);
    return () => {
      document.removeEventListener("keydown", onKeyDown);
      document.removeEventListener("pointerdown", onPointerDown);
    };
  }, [mobileOpen, servicesOpen]);

  return (
    <header ref={header} className="sticky top-0 z-50 border-b border-gray-200/70 bg-white/95 backdrop-blur">
      <a href="#main-content" className="sr-only focus:not-sr-only focus:absolute focus:left-4 focus:top-2 focus:z-50 focus:rounded-xl focus:bg-indigo-700 focus:px-4 focus:py-3 focus:text-white">Skip to content</a>
      <div className="relative mx-auto max-w-6xl px-4 sm:px-6">
        <div className="flex items-center justify-between gap-3 py-3">
          <Link to="/" onClick={closeMenus} className="flex min-w-0 items-center gap-3" aria-label="Bedsun Tech home">
            <picture className="shrink-0">
              <source srcSet={logoWebp} type="image/webp" />
              <img src={logo} alt="" width={40} height={40} decoding="async" className="h-10 w-10 rounded-xl object-contain shadow-sm" />
            </picture>
            <div className="text-left leading-tight">
              <div className="text-sm font-extrabold tracking-wide text-gray-900">BEDSUN TECH</div>
              <div className="text-xs font-medium text-gray-600">IT Solutions · Dusk to Dawn</div>
            </div>
          </Link>
          <nav aria-label="Main navigation" className="hidden items-center gap-1 lg:flex">
            <NavItem to="/about">About</NavItem>
            <NavItem to="/ai-consultant">AI Assistant</NavItem>
            <div className="relative">
              <button ref={servicesButton} type="button" onClick={() => setServicesOpen(open => !open)} aria-expanded={servicesOpen} aria-controls="desktop-services" className="min-h-11 rounded-xl px-3 py-3 text-sm font-semibold text-gray-700 hover:bg-gray-100">Services <span aria-hidden="true">▾</span></button>
              {servicesOpen && (
                <div id="desktop-services" className="absolute right-0 top-full w-[42rem] max-w-[calc(100vw-3rem)] pt-2">
                  <div className="grid max-h-[calc(100dvh-6rem)] grid-cols-2 gap-4 overflow-y-auto rounded-2xl border border-gray-200 bg-white p-4 shadow-xl">
                    {serviceGroups.map(group => (
                      <div key={group.title}>
                        <p className="px-3 pb-2 text-xs font-bold uppercase tracking-wider text-indigo-700">{group.title}</p>
                        {group.links.map(([to, label]) => <NavItem key={to} to={to} block onClick={closeMenus}>{label}</NavItem>)}
                      </div>
                    ))}
                  </div>
                </div>
              )}
            </div>
            <NavItem to="/projects">Projects</NavItem>
            <NavItem to="/blog">Blog</NavItem>
            <NavItem to="/contact">Contact</NavItem>
          </nav>
          <button ref={mobileButton} type="button" onClick={() => setMobileOpen(open => !open)} aria-label={mobileOpen ? "Close navigation menu" : "Open navigation menu"} aria-expanded={mobileOpen} aria-controls="mobile-navigation" className="inline-flex min-h-11 min-w-11 shrink-0 items-center justify-center rounded-xl border border-gray-200 bg-white text-sm font-semibold text-gray-900 lg:hidden">
            {mobileOpen ? <span aria-hidden="true" className="text-2xl">×</span> : <span>Menu</span>}
          </button>
        </div>
        {mobileOpen && (
          <nav id="mobile-navigation" aria-label="Mobile navigation" className="max-h-[calc(100dvh-5rem)] overflow-y-auto overscroll-contain border-t border-gray-200 pb-6 pt-3 lg:hidden">
            <div className="mb-3 grid grid-cols-2 gap-3">
              <Link to="/contact" onClick={closeMenus} className="flex min-h-11 items-center justify-center rounded-xl bg-indigo-600 px-3 py-3 text-sm font-semibold text-white">Request help</Link>
              <a href="tel:17022195011" className="flex min-h-11 items-center justify-center rounded-xl border border-indigo-200 px-3 py-3 text-sm font-semibold text-indigo-700">Call Matt</a>
            </div>
            {serviceGroups.map(group => (
              <details key={group.title} className="mb-2 rounded-xl border border-gray-200 bg-white">
                <summary className="min-h-11 cursor-pointer px-4 py-3 font-semibold text-gray-900">{group.title}</summary>
                <div className="border-t border-gray-100 p-2">
                  {group.links.map(([to, label]) => <NavItem key={to} to={to} block onClick={closeMenus}>{label}</NavItem>)}
                </div>
              </details>
            ))}
            <NavItem to="/ai-consultant" block onClick={closeMenus}>Ask the AI Assistant</NavItem>
            <div className="grid grid-cols-3 gap-1 border-t border-gray-100 pt-2">
              <NavItem to="/about" onClick={closeMenus}>About</NavItem>
              <NavItem to="/projects" onClick={closeMenus}>Projects</NavItem>
              <NavItem to="/blog" onClick={closeMenus}>Blog</NavItem>
            </div>
          </nav>
        )}
      </div>
    </header>
  );
}
