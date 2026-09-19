import { Link, useLocation } from 'react-router-dom';

export default function MobileContactBar() {
  const { pathname } = useLocation();
  // Leave the keyboard and form controls unobstructed on these pages.
  if (pathname === '/contact' || pathname === '/ai-consultant') return null;

  return (
    <nav aria-label="Quick contact" className="mobile-contact-bar fixed inset-x-0 bottom-0 z-40 border-t border-gray-200 bg-white/95 px-4 pt-3 backdrop-blur lg:hidden">
      <div className="mx-auto grid max-w-lg grid-cols-2 gap-3">
        <a href="tel:17022195011" className="flex min-h-11 items-center justify-center rounded-xl border border-indigo-200 font-semibold text-indigo-700">Call Matt</a>
        <Link to="/contact" className="flex min-h-11 items-center justify-center rounded-xl bg-indigo-600 font-semibold text-white">Request help</Link>
      </div>
    </nav>
  );
}
