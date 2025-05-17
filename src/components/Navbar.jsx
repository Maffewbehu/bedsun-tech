import { Link } from 'react-router-dom';

export default function Navbar() {
  return (
    <nav className="bg-white shadow px-4 py-3 sticky top-0 z-50">
      <div className="max-w-6xl mx-auto flex flex-col sm:flex-row sm:items-center sm:justify-between">
        
        {/* Logo */}
        <div className="text-blue-700 font-bold text-xl sm:text-2xl text-center sm:text-left">
          <Link to="/">BEDSUN TECH</Link>
        </div>

        {/* Nav Links */}
        <div className="mt-3 sm:mt-0 flex justify-center sm:justify-end flex-wrap gap-x-6 text-sm sm:text-base">
          <Link to="/about" className="text-blue-600 hover:underline">About</Link>
          <Link to="/services" className="text-blue-600 hover:underline">Services</Link>
          <Link to="/contact" className="text-blue-600 hover:underline">Contact</Link>
          <Link to="/projects" className="text-blue-600 hover:underline">Projects</Link>
        </div>
      </div>
    </nav>
  );
}
