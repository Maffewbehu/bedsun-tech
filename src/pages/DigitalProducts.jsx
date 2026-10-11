import { Link } from 'react-router-dom';
import SEO from '../components/SEO';
import { budgetProduct, colorways, previewPath } from '../data/digitalProducts';

export default function DigitalProducts() {
  return (
    <>
      <SEO title="Digital Products & Spreadsheet Templates | Bedsun Tech" description="Explore practical spreadsheet templates from Bedsun Tech, starting with Simple Budget + Debt: a monthly budget, debt tracker, and six colorways." path="/products" image={`https://bedsuntech.tech${previewPath()}`} />
      <section className="py-5 sm:py-8">
        <p className="text-xs font-bold uppercase tracking-widest text-indigo-700">Bedsun Tech templates</p>
        <h1 className="mt-3 text-4xl font-extrabold tracking-tight text-gray-900 sm:text-5xl">Useful tools. Thoughtful design.</h1>
        <p className="mt-5 max-w-2xl text-lg leading-relaxed text-gray-600">Digital products for everyday tasks, built to be clear and comfortable to use. Our first collection starts with your monthly budget.</p>
      </section>
      <section aria-labelledby="collection-heading" className="pb-10 pt-6">
        <div className="mb-5 flex flex-wrap items-end justify-between gap-3">
          <h2 id="collection-heading" className="text-2xl font-bold tracking-tight text-gray-900">Personal finance spreadsheets</h2>
          <span className="text-sm text-gray-500">Our first release</span>
        </div>
        <article className="overflow-hidden rounded-3xl border border-gray-200 bg-white shadow-sm">
          <Link to={budgetProduct.path} aria-label="Explore Simple Budget + Debt" className="block border-b border-gray-200 bg-slate-50 p-3 sm:p-6">
            <img src={previewPath()} width={2209} height={782} alt="Ocean workbook preview showing the monthly budget charts and input tables with fictional example amounts" decoding="async" className="h-auto w-full rounded-lg border border-gray-200" />
          </Link>
          <div className="grid gap-6 p-6 sm:p-8 md:grid-cols-[1fr_auto] md:items-center">
            <div>
              <p className="text-xs font-bold uppercase tracking-wider text-indigo-700">{budgetProduct.commerce.available ? `${budgetProduct.commerce.priceLabel} USD · Digital bundle` : 'Coming soon · Digital bundle'}</p>
              <h3 className="mt-2 text-2xl font-bold text-gray-900">{budgetProduct.name}</h3>
              <p className="mt-3 max-w-2xl leading-relaxed text-gray-600">{budgetProduct.description} Keep income, living costs, savings, and debt payments together, with instructions on their own tab.</p>
              <div aria-label="Six included colorways" className="mt-4 flex flex-wrap items-center gap-2">
                {colorways.map(colorway => <span key={colorway.id} title={colorway.name} className="h-5 w-5 rounded-full border border-black/10" style={{ backgroundColor: colorway.color }} />)}
                <span className="ml-1 text-sm text-gray-600">All six included</span>
              </div>
            </div>
            <Link to={budgetProduct.path} className="inline-flex min-h-11 items-center justify-center rounded-xl bg-indigo-700 px-6 py-3 font-semibold text-white transition hover:bg-indigo-800">Explore the workbook <span aria-hidden="true" className="ml-2">→</span></Link>
          </div>
        </article>
      </section>
    </>
  );
}
