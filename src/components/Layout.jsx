import Navbar from "./Navbar";
import { Outlet, Link } from "react-router-dom";

export default function Layout() {
  return (
    <div className="min-h-screen bg-[radial-gradient(70rem_40rem_at_50%_-10%,rgba(79,70,229,0.12),transparent_60%),radial-gradient(45rem_30rem_at_10%_20%,rgba(245,158,11,0.10),transparent_55%)] text-gray-900">
      <Navbar />

      <main className="mx-auto w-full max-w-6xl px-4 py-10 sm:px-6">
        <Outlet />
      </main>

      <footer className="border-t border-gray-200/70 bg-white/60 backdrop-blur">
        <div className="mx-auto flex max-w-6xl flex-col gap-4 px-4 py-8 text-sm text-gray-600 sm:flex-row sm:items-center sm:justify-between sm:px-6">
          <div className="flex flex-col gap-1">
            <div className="font-semibold text-gray-900">Bedsun Tech LLC</div>
            <div>Freelance IT • Systems • Networks • Cloud</div>
          </div>

          <div className="flex flex-wrap items-center gap-4">
            <Link className="hover:text-gray-900" to="/services">
              Services
            </Link>
            <Link className="hover:text-gray-900" to="/projects">
              Projects
            </Link>
            <Link className="hover:text-gray-900" to="/contact">
              Contact
            </Link>
          </div>
        </div>
      </footer>
    </div>
  );
}
