import { useState } from 'react';
import { Link } from 'react-router-dom';
import SEO from '../components/SEO';
import ProductPurchase from '../components/ProductPurchase';
import { budgetProduct, budgetFaqs, colorways, sheetPreviews, previewPath } from '../data/digitalProducts';
import { faqPageSchema } from '../lib/structuredData';

export default function SimpleBudgetDebt() {
  const [colorwayId, setColorwayId] = useState('ocean');
  const [sheetId, setSheetId] = useState('budget');
  const colorway = colorways.find(item => item.id === colorwayId);
  const sheet = sheetPreviews.find(item => item.id === sheetId);
  const image = previewPath(colorway.id, sheet.id);

  return (
    <>
      <SEO title="Simple Budget + Debt Spreadsheet Bundle | Bedsun Tech" description="Preview Simple Budget + Debt: a monthly budget and debt tracker with four charts, a separate instructions tab, and six included colorways." path={budgetProduct.path} image={`https://bedsuntech.tech${previewPath()}`} structuredData={[faqPageSchema(budgetFaqs, budgetProduct.path)]} />
      <Link to="/products" className="inline-flex min-h-11 items-center text-sm font-semibold text-indigo-700 hover:text-indigo-900"><span aria-hidden="true" className="mr-2">←</span> Digital products</Link>

      <section className="grid gap-8 pb-8 pt-3 md:grid-cols-[1.4fr_1fr] md:items-center sm:pb-12">
        <div>
          <p className="text-xs font-bold uppercase tracking-widest text-indigo-700">Personal finance · Six colorways</p>
          <h1 className="mt-3 text-4xl font-extrabold tracking-tight text-gray-900 sm:text-5xl">Simple Budget <span className="text-indigo-700">+ Debt</span></h1>
          <p className="mt-5 max-w-xl text-lg leading-relaxed text-gray-600">Make room for a clearer month. Bring your income, spending, savings, and debt payments into one thoughtfully designed workbook.</p>
          <div className="mt-6 flex flex-wrap gap-2 text-sm font-semibold text-gray-700">
            {['Monthly budget', 'Debt tracker', 'Separate setup guide'].map(label => <span key={label} className="rounded-full border border-gray-200 bg-white px-3 py-2">{label}</span>)}
          </div>
          <a href="#workbook-preview" className="mt-4 inline-flex min-h-11 items-center font-semibold text-indigo-700 hover:text-indigo-900">Find your colorway <span aria-hidden="true" className="ml-2">↓</span></a>
        </div>
        <ProductPurchase product={budgetProduct} />
      </section>

      <section id="workbook-preview" aria-labelledby="preview-heading" className="overflow-hidden rounded-3xl border border-gray-200 bg-white shadow-sm">
        <div className="border-b border-gray-200 p-5 sm:p-7">
          <div className="flex flex-wrap items-start justify-between gap-3">
            <div>
              <h2 id="preview-heading" className="text-2xl font-bold tracking-tight text-gray-900">Your numbers. Your colorway.</h2>
              <p className="mt-2 text-sm leading-relaxed text-gray-600">Choose a look to preview. Every colorway has the same features, and all six come in the bundle.</p>
            </div>
            <span className="rounded-full bg-indigo-50 px-3 py-2 text-xs font-semibold text-indigo-700">Actual workbook previews</span>
          </div>
          <div role="group" aria-label="Preview colorway" className="mt-5 grid grid-cols-2 gap-2 sm:grid-cols-3 lg:grid-cols-6">
            {colorways.map(item => (
              <button key={item.id} type="button" aria-pressed={colorwayId === item.id} onClick={() => setColorwayId(item.id)} className={`flex min-h-12 items-center gap-2 rounded-xl border-2 px-3 py-3 text-left text-sm font-semibold transition ${colorwayId === item.id ? 'border-indigo-700 bg-indigo-50 text-indigo-900' : 'border-gray-200 bg-white text-gray-700 hover:border-gray-400'}`}>
                <span aria-hidden="true" className="h-5 w-5 shrink-0 rounded-full border border-black/10" style={{ backgroundColor: item.color }} />{item.name}
              </button>
            ))}
          </div>
          <div role="group" aria-label="Preview worksheet" className="mt-5 flex flex-wrap gap-2">
            {sheetPreviews.map(item => <button key={item.id} type="button" aria-pressed={sheetId === item.id} onClick={() => setSheetId(item.id)} className={`min-h-11 rounded-xl px-4 py-3 text-sm font-semibold transition ${sheetId === item.id ? 'bg-gray-900 text-white' : 'bg-gray-100 text-gray-600 hover:bg-gray-200'}`}>{item.name}</button>)}
          </div>
        </div>
        <figure style={{ backgroundColor: colorway.background }} className="p-3 sm:p-5">
          <figcaption className="mb-3 flex flex-wrap items-center justify-between gap-2 text-sm text-gray-700">
            <span aria-live="polite" aria-atomic="true" className="font-semibold">{colorway.name} · {sheet.name}</span>
            <a href={image} target="_blank" rel="noopener noreferrer" className="inline-flex min-h-11 items-center rounded-lg bg-white px-3 py-2 font-semibold text-indigo-700 hover:text-indigo-900">Open full-size preview <span className="sr-only">of {colorway.name} {sheet.name} (new tab)</span><span aria-hidden="true" className="ml-2">↗</span></a>
          </figcaption>
          <img data-workbook-preview src={image} width={sheet.width} height={sheet.height} alt={`${colorway.name} ${sheet.name} worksheet preview${sheet.id === 'guide' ? ' with setup and monthly update instructions' : ' with fictional example amounts in USD'}`} decoding="async" className={`mx-auto h-auto w-full rounded-lg border border-black/10 bg-white ${sheet.id === 'guide' ? 'max-w-2xl' : ''}`} />
          <p className="mt-3 text-xs leading-relaxed text-gray-700">Preview amounts are fictional examples in USD. For a closer look on a small screen, open the full-size preview.</p>
        </figure>
      </section>

      <section aria-labelledby="included-heading" className="py-10 sm:py-14">
        <p className="text-xs font-bold uppercase tracking-widest text-indigo-700">What’s inside</p>
        <h2 id="included-heading" className="mt-2 text-3xl font-bold tracking-tight text-gray-900">A simple routine, with the details covered.</h2>
        <div className="mt-6 grid gap-4 md:grid-cols-3">
          {[
            ['01', 'Plan your month', 'Compare planned and actual amounts across three income sources and twelve living-cost and savings categories. Totals and differences update as you enter your figures.'],
            ['02', 'See your debt together', 'Track up to twelve debts, planned payments, paid amounts, and statement balances. Payment totals flow into the budget, with a starting-versus-current-balance chart beside your accounts.'],
            ['03', 'Get a clear overview', 'Three budget charts show planned versus actual totals, costs by category, and income allocation. The Start Here tab keeps instructions separate from your daily workspace.'],
          ].map(([number, title, description]) => <article key={number} className="rounded-2xl border border-gray-200 bg-white p-6 shadow-sm"><p className="text-sm font-bold text-indigo-700">{number}</p><h3 className="mt-3 text-xl font-bold text-gray-900">{title}</h3><p className="mt-3 text-sm leading-relaxed text-gray-600">{description}</p></article>)}
        </div>
      </section>

      <section aria-labelledby="faq-heading" className="rounded-3xl border border-gray-200 bg-white p-5 sm:p-8">
        <h2 id="faq-heading" className="text-2xl font-bold tracking-tight text-gray-900">Before you get started</h2>
        <div className="mt-5 divide-y divide-gray-200">
          {budgetFaqs.map(faq => <details key={faq.question} className="py-1"><summary className="min-h-11 cursor-pointer py-4 font-semibold text-gray-900">{faq.question}</summary><p className="max-w-3xl pb-4 text-sm leading-relaxed text-gray-600">{faq.answer}</p></details>)}
        </div>
      </section>
      <section className="my-10 flex flex-col justify-between gap-4 rounded-2xl bg-indigo-50 p-6 sm:flex-row sm:items-center">
        <div><h2 className="text-xl font-bold text-gray-900">Have a question about the workbook?</h2><p className="mt-2 text-sm text-gray-600">Ask Matt about the features or how the template fits your routine.</p></div>
        <Link to={budgetProduct.contactPath} className="inline-flex min-h-11 shrink-0 items-center justify-center rounded-xl border border-indigo-200 bg-white px-5 py-3 font-semibold text-indigo-700 hover:bg-indigo-100">Ask about this template</Link>
      </section>
    </>
  );
}
