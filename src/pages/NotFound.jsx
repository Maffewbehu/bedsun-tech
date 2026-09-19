import { Link } from "react-router-dom";
import SEO from "../components/SEO";

export default function NotFound() {
  return (
    <>
      <SEO title="Page not found | Bedsun Tech" description="Find personal tech help, business services, or contact Bedsun Tech." noindex path={null} />
      <section className="mx-auto max-w-xl py-12 text-center">
        <p className="text-sm font-semibold text-indigo-700">404 · Page not found</p>
        <h1 className="mt-3 text-3xl font-bold text-gray-900">Let’s get you to the right place.</h1>
        <p className="mt-4 text-gray-600">This page may have moved, or the link may be incomplete.</p>
        <div className="mt-6 flex flex-wrap justify-center gap-3">
          <Link to="/" className="rounded-xl bg-indigo-600 px-5 py-3 font-semibold text-white">Back to home</Link>
          <Link to="/contact" className="rounded-xl border border-gray-300 bg-white px-5 py-3 font-semibold text-gray-900">Contact Bedsun Tech</Link>
        </div>
      </section>
    </>
  );
}
