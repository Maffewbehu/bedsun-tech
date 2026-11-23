import { Link } from "react-router-dom";
import { caseStudies } from "../data/caseStudies";
import { reportPreviews } from "../data/digitalProducts";
import ReportPreview from "./ReportPreview";

export default function FeaturedWork({
  ids,
  heading = "See what the work looks like",
  intro = "A home network project, a working business dashboard, and the intake assistant on this website.",
  id = "selected-work",
  detailed = false,
  showAllLink = true,
}) {
  const examples = ids ? ids.map(value => caseStudies.find(item => item.id === value)).filter(Boolean) : caseStudies;

  return (
    <section aria-labelledby={`${id}-heading`}>
      <div className="mb-6 flex flex-wrap items-end justify-between gap-4">
        <div>
          <p className="text-sm font-semibold uppercase tracking-wider text-indigo-700">Selected work</p>
          <h2 id={`${id}-heading`} className="mt-2 text-2xl font-bold tracking-tight text-gray-900 sm:text-3xl">{heading}</h2>
          {intro && <p className="mt-3 max-w-3xl text-base leading-relaxed text-gray-600">{intro}</p>}
        </div>
        {showAllLink && <Link to="/projects" className="inline-flex min-h-11 items-center font-semibold text-indigo-700 hover:text-indigo-900">Browse all projects</Link>}
      </div>
      <div className={examples.length === 1 ? "grid gap-6" : "grid gap-6 lg:grid-cols-3"}>
        {examples.map(example => (
          <article key={example.id} id={detailed ? example.id : undefined} className="flex scroll-mt-24 flex-col rounded-3xl border border-gray-200 bg-white p-6 shadow-sm">
            <p className="text-sm font-semibold text-indigo-700">{example.category}</p>
            <h3 className="mt-2 text-xl font-bold tracking-tight text-gray-900">{example.title}</h3>
            {detailed && example.date && <p className="mt-2 text-sm text-gray-500">{example.date}</p>}
            <dl className="mt-5 space-y-4 text-base leading-relaxed">
              <div>
                <dt className="font-semibold text-gray-900">The need</dt>
                <dd className="mt-1 text-gray-600">{example.problem}</dd>
              </div>
              <div>
                <dt className="font-semibold text-gray-900">The work</dt>
                <dd className="mt-1 text-gray-600">{example.work}</dd>
              </div>
              <div className="rounded-2xl bg-indigo-50 p-4">
                <dt className="font-semibold text-indigo-900">The result</dt>
                <dd className="mt-1 text-gray-700">{example.outcome}</dd>
              </div>
            </dl>
            {detailed && example.preview === "dashboard" && (
              <figure className="mt-5">
                <ReportPreview page={reportPreviews[0]} loading="lazy" />
                <figcaption className="mt-2 text-sm leading-relaxed text-gray-500">Actual Bedsun Tech product screenshot with fictional demo data.</figcaption>
              </figure>
            )}
            {detailed && <p className="mt-5 text-base leading-relaxed text-gray-600">{example.detail}</p>}
            <div className="mt-auto pt-6">
              {detailed ? (
                <div className="flex flex-col items-start gap-2">
                  {example.demoPath && <Link to={example.demoPath} className="inline-flex min-h-11 items-center font-semibold text-indigo-700 hover:text-indigo-900">{example.demoLabel}</Link>}
                  <Link to={example.requestPath} className="inline-flex min-h-11 items-center rounded-xl border border-indigo-200 px-4 py-2 text-sm font-semibold text-indigo-800 hover:bg-indigo-50">{example.requestLabel}</Link>
                </div>
              ) : (
                <Link to={`/projects#${example.id}`} className="inline-flex min-h-11 items-center font-semibold text-indigo-700 hover:text-indigo-900">View this example</Link>
              )}
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
