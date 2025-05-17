import { Link } from 'react-router-dom';

export default function Home() {
  return (
    <>
      <h1 className="text-5xl font-bold text-blue-700 mb-4">Bedsun Tech</h1>
      <p className="text-xl mb-8">IT Solutions From Dusk to Dawn.</p>
      <div className="flex gap-6">
        <Link to="/about" className="text-blue-600 hover:underline text-lg">About Me</Link>
        <Link to="/services" className="text-blue-600 hover:underline text-lg">Services</Link>
        <Link to="/contact" className="text-blue-600 hover:underline text-lg">Contact Me</Link>
      </div>
    </>
  );
}
