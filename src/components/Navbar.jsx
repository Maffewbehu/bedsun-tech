import { Link } from 'react-router-dom';

export default function Navbar() {
  return (
    <nav className="bg-white shadow mb-8 py-4 relative">
      {/* Logo - Top Left */}
      <div className="absolute left-4 top-1/2 transform -translate-y-1/2">
        <Link to="/" className="text-xl font-bold text-blue-700 hover:underline">
          BEDSUN TECH
        </Link>
      </div>

      {/* Centered Links */}
      <div className="flex justify-center">
        <div className="space-x-6">
          <Link to="/about" className="text-blue-600 hover:underline">About</Link>
          <Link to="/services" className="text-blue-600 hover:underline">Services</Link>
          <Link to="/contact" className="text-blue-600 hover:underline">Contact</Link>
        </div>
      </div>
    </nav>
  );
}
