import { useState } from 'react';
import { Link } from 'react-router-dom';
import SEO from '../components/SEO';
import ProductPurchase from '../components/ProductPurchase';
import ReportPreview from '../components/ReportPreview';
import { dashboardProduct, dashboardFaqs, reportPreviews } from '../data/digitalProducts';
import { digitalProductSchema, faqPageSchema } from '../lib/structuredData';

export default function SalesExpensesDashboard() {
  const [pageId, setPageId] = useState('overview');
  const page = reportPreviews.find(item => item.id === pageId);

  return (
    <>
      <SEO title="Small Business Sales & Expenses Power BI Dashboard | Bedsun Tech" description="Preview a three-page Power BI template for small business revenue, direct costs, operating expenses, and profit. Includes demo data, Excel workbook, and buyer guide." path={dashboardProduct.path} image={`https://bedsuntech.tech${reportPreviews[0].image}`} structuredData={[
        digitalProductSchema({
          name: dashboardProduct.name,
          description: dashboardProduct.description,
          path: dashboardProduct.path,
          image: 'https://bedsuntech.tech' + reportPreviews[0].image,
          priceLabel: dashboardProduct.commerce.priceLabel,
          available: dashboardProduct.commerce.available,
        }),
        faqPageSchema(dashboardFaqs, dashboardProduct.path),
      ]} />
      <Link to="/products" className="inline-flex min-h-11 items-center text-sm font-semibold text-indigo-700 hover:text-indigo-900"><span aria-hidden="true" className="mr-2">←</span> Digital products</Link>

      <section className="grid gap-8 pb-8 pt-3 sm:pb-12 md:grid-cols-[1.4fr_1fr] md:items-center">
        <div>
          <p className="text-xs font-bold uppercase tracking-widest text-indigo-700">Small business · Power BI template</p>
          <h1 className="mt-3 text-4xl font-extrabold tracking-tight text-gray-900 sm:text-5xl">Sales & Expenses <span className="text-indigo-700">Dashboard</span></h1>
          <p className="mt-5 max-w-xl text-lg leading-relaxed text-gray-600">See what’s coming in, what it costs to deliver, and what remains after overhead. Turn your sales and expense workbook into a clear view of your business.</p>
          <div className="mt-6 flex flex-wrap gap-2 text-sm font-semibold text-gray-700">
            {['Three report pages', 'Year & month filters', 'Built-in demo data'].map(label => <span key={label} className="rounded-full border border-gray-200 bg-white px-3 py-2">{label}</span>)}
          </div>
          <a href="#dashboard-preview" className="mt-4 inline-flex min-h-11 items-center font-semibold text-indigo-700 hover:text-indigo-900">Explore the report <span aria-hidden="true" className="ml-2">↓</span></a>
        </div>
        <ProductPurchase product={dashboardProduct} />
      </section>

      <section id="dashboard-preview" aria-labelledby="preview-heading" className="overflow-hidden rounded-3xl border border-gray-200 bg-white shadow-sm">
        <div className="border-b border-gray-200 p-5 sm:p-7">
          <div className="flex flex-wrap items-start justify-between gap-3">
            <div>
              <h2 id="preview-heading" className="text-2xl font-bold tracking-tight text-gray-900">One business. Three useful views.</h2>
              <p className="mt-2 text-sm leading-relaxed text-gray-600">Explore actual report screenshots from Power BI Desktop. The controls here switch previews.</p>
            </div>
            <span className="rounded-full bg-indigo-50 px-3 py-2 text-xs font-semibold text-indigo-700">Actual dashboard previews</span>
          </div>
          <div role="group" aria-label="Preview report page" className="mt-5 flex flex-wrap gap-2">
            {reportPreviews.map(item => <button key={item.id} type="button" aria-pressed={pageId === item.id} onClick={() => setPageId(item.id)} className={`min-h-11 rounded-xl px-4 py-3 text-sm font-semibold transition ${pageId === item.id ? 'bg-gray-900 text-white' : 'bg-gray-100 text-gray-600 hover:bg-gray-200'}`}>{item.name}</button>)}
          </div>
        </div>
        <figure className="bg-slate-50 p-3 sm:p-5">
          <figcaption className="mb-3 flex flex-wrap items-center justify-between gap-2 text-sm text-gray-700">
            <span aria-live="polite" aria-atomic="true" className="font-semibold">{page.name} · Fictional demo data</span>
            <a href={page.image} target="_blank" rel="noopener noreferrer" className="inline-flex min-h-11 items-center rounded-lg bg-white px-3 py-2 font-semibold text-indigo-700 hover:text-indigo-900">Open full-size preview <span className="sr-only">of {page.name} in Power BI Desktop (new tab)</span><span aria-hidden="true" className="ml-2">↗</span></a>
          </figcaption>
          <ReportPreview page={page} />
          <p className="mt-3 text-sm leading-relaxed text-gray-600">{page.description}</p>
          <p className="mt-2 text-xs leading-relaxed text-gray-600">Example data covers January 2025–September 2026 in USD. Open the full-size screenshot for a closer look on a small screen.</p>
        </figure>
      </section>

      <section aria-labelledby="included-heading" className="py-10 sm:py-14">
        <p className="text-xs font-bold uppercase tracking-widest text-indigo-700">What’s inside</p>
        <h2 id="included-heading" className="mt-2 text-3xl font-bold tracking-tight text-gray-900">From a sample workbook to your business numbers.</h2>
        <div className="mt-6 grid gap-4 md:grid-cols-3">
          {[
            ['01', 'Reusable Power BI template', 'Open the .pbit file with its built-in demo, then connect your own workbook. Fourteen measures cover revenue, profit, margins, invoice counts, and operating expenses.'],
            ['02', 'Sample Excel workbook', 'Two named tables keep sales and operating overhead organized. Replace the fictional rows while preserving the supplied column names, then refresh the report.'],
            ['03', 'Buyer guide & quick start', 'A three-page PDF and quick-start file explain setup, required columns, calculations, filters, and common refresh issues.'],
          ].map(([number, title, description]) => <article key={number} className="rounded-2xl border border-gray-200 bg-white p-6 shadow-sm"><p className="text-sm font-bold text-indigo-700">{number}</p><h3 className="mt-3 text-xl font-bold text-gray-900">{title}</h3><p className="mt-3 text-sm leading-relaxed text-gray-600">{description}</p></article>)}
        </div>
      </section>

      <section aria-labelledby="setup-heading" className="mb-10 rounded-3xl border border-indigo-100 bg-indigo-50 p-5 sm:p-8">
        <h2 id="setup-heading" className="text-2xl font-bold tracking-tight text-gray-900">Start with the demo. Connect your workbook when you’re ready.</h2>
        <ol className="mt-5 grid list-inside list-decimal gap-4 text-sm leading-relaxed text-gray-700 md:grid-cols-3">
          <li><strong>Open in Power BI Desktop.</strong> Extract the ZIP and open the .pbit template on Windows. Leave DataFilePath blank to see the demo.</li>
          <li><strong>Add your business data.</strong> Make a copy of the sample .xlsx workbook. Replace the Sales and Expenses rows, keeping both tables and column names.</li>
          <li><strong>Set the path and refresh.</strong> Enter your workbook’s full local path in DataFilePath. Refresh whenever your source workbook changes.</li>
        </ol>
      </section>

      <section aria-labelledby="faq-heading" className="rounded-3xl border border-gray-200 bg-white p-5 sm:p-8">
        <h2 id="faq-heading" className="text-2xl font-bold tracking-tight text-gray-900">Before you get started</h2>
        <div className="mt-5 divide-y divide-gray-200">
          {dashboardFaqs.map(faq => <details key={faq.question} className="py-1"><summary className="min-h-11 cursor-pointer py-4 font-semibold text-gray-900">{faq.question}</summary><p className="max-w-3xl pb-4 text-sm leading-relaxed text-gray-600">{faq.answer}</p></details>)}
        </div>
      </section>
      <section className="my-10 flex flex-col justify-between gap-4 rounded-2xl bg-indigo-50 p-6 sm:flex-row sm:items-center">
        <div><h2 className="text-xl font-bold text-gray-900">Have a question about the dashboard?</h2><p className="mt-2 text-sm text-gray-600">Ask Matt about the template or connecting your sales and expense workbook.</p></div>
        <Link to={dashboardProduct.contactPath} className="inline-flex min-h-11 shrink-0 items-center justify-center rounded-xl border border-indigo-200 bg-white px-5 py-3 font-semibold text-indigo-700 hover:bg-indigo-100">Ask about this template</Link>
      </section>
    </>
  );
}
