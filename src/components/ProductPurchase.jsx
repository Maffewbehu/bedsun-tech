import { Link } from 'react-router-dom';

export default function ProductPurchase({ product }) {
  const { commerce, purchase } = product;
  return (
    <div className="rounded-2xl border border-indigo-100 bg-white p-6 shadow-sm">
      <p className="text-xs font-bold uppercase tracking-wider text-indigo-700">{purchase.heading}</p>
      <p className="mt-2 text-2xl font-bold text-gray-900">
        {commerce.available ? `${commerce.priceLabel} USD` : 'Coming soon'}
      </p>
      <p className="mt-2 text-sm leading-relaxed text-gray-600">
        {commerce.available ? purchase.availableDescription : purchase.upcomingDescription}
      </p>
      {commerce.available ? (
        <a href={commerce.checkoutUrl} className="mt-5 inline-flex min-h-11 w-full items-center justify-center rounded-xl bg-indigo-700 px-5 py-3 font-semibold text-white transition hover:bg-indigo-800">{purchase.buttonLabel}</a>
      ) : (
        <Link to={product.contactPath} className="mt-5 inline-flex min-h-11 w-full items-center justify-center rounded-xl bg-indigo-700 px-5 py-3 font-semibold text-white transition hover:bg-indigo-800">Ask about this template</Link>
      )}
      <p className="mt-3 text-xs leading-relaxed text-gray-500">{purchase.fileLabel}</p>
    </div>
  );
}
