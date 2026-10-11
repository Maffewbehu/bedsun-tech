import { Link } from 'react-router-dom';
import { useState } from 'react';

export default function ProductPurchase({ product }) {
  const { commerce, purchase } = product;
  const [busy, setBusy] = useState(false);
  const [error, setError] = useState('');
  async function startCheckout() {
    if (busy) return;
    setBusy(true);
    setError('');
    try {
      const response = await fetch('/api/store/checkout', {
        method: 'POST', headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ productId: product.id, requestId: crypto.randomUUID() }),
      });
      const result = await response.json();
      if (!response.ok) throw new Error(result.error || 'Unable to start checkout. Please try again.');
      const url = new URL(result.url);
      if (url.protocol !== 'https:' || url.hostname !== 'checkout.stripe.com') throw new Error('Unable to start checkout.');
      window.location.assign(url.href);
    } catch (failure) {
      setError(failure.message || 'Unable to start checkout. Please try again.');
      setBusy(false);
    }
  }
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
        commerce.checkoutUrl === '/api/store/checkout' ? (
          <button type="button" onClick={startCheckout} disabled={busy} className="mt-5 inline-flex min-h-11 w-full items-center justify-center rounded-xl bg-indigo-700 px-5 py-3 font-semibold text-white transition hover:bg-indigo-800 disabled:opacity-60">{busy ? 'Opening checkout…' : purchase.buttonLabel}</button>
        ) : (
          <a href={commerce.checkoutUrl} className="mt-5 inline-flex min-h-11 w-full items-center justify-center rounded-xl bg-indigo-700 px-5 py-3 font-semibold text-white transition hover:bg-indigo-800">{purchase.buttonLabel}</a>
        )
      ) : (
        <Link to={product.contactPath} className="mt-5 inline-flex min-h-11 w-full items-center justify-center rounded-xl bg-indigo-700 px-5 py-3 font-semibold text-white transition hover:bg-indigo-800">Ask about this template</Link>
      )}
      {error && <p role="alert" className="mt-3 text-sm text-red-700">{error}</p>}
      <p className="mt-3 text-xs leading-relaxed text-gray-500">{purchase.fileLabel}</p>
    </div>
  );
}
