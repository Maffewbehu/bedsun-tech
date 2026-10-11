import { useEffect, useState } from 'react';
import { Link, useSearchParams } from 'react-router-dom';
import SEO from '../components/SEO';

export default function PurchaseComplete() {
  const [params] = useSearchParams();
  const session = params.get('session_id');
  const [result, setResult] = useState({ status: 'checking' });
  const [retry, setRetry] = useState(0);
  useEffect(() => {
    const controller = new AbortController();
    let timer;
    let attempts = 0;
    async function check() {
      if (!/^cs_(live|test)_[A-Za-z0-9]{8,240}$/.test(session || '')) {
        setResult({ status: 'error', error: 'Open the purchase confirmation link from checkout to see your download.' });
        return;
      }
      try {
        const response = await fetch(`/api/store/order?session_id=${encodeURIComponent(session)}`, { signal: controller.signal, cache: 'no-store' });
        const data = await response.json();
        if (!response.ok) throw new Error(data.error || 'Unable to check your purchase.');
        if (data.status === 'ready') {
          const url = new URL(data.downloadUrl, window.location.origin);
          if (url.origin !== window.location.origin || url.pathname !== '/api/store/download') throw new Error('Unable to load your download link.');
          setResult({ ...data, downloadUrl: url.pathname + url.search });
        } else if (++attempts < 12) {
          timer = setTimeout(check, 2000);
        } else {
          setResult({ status: 'processing' });
        }
      } catch (error) {
        if (!controller.signal.aborted) setResult({ status: 'error', error: error.message });
      }
    }
    check();
    return () => { controller.abort(); clearTimeout(timer); };
  }, [session, retry]);
  return (
    <>
      <SEO title="Your purchase | Bedsun Tech" path={null} noindex description="Check your purchase and download your Bedsun Tech digital product." />
      <section className="mx-auto max-w-2xl px-4 py-16">
        <div className="rounded-2xl border border-indigo-100 bg-white p-8 shadow-sm">
          <p className="text-sm font-semibold text-indigo-700">Bedsun Tech digital products</p>
          <h1 className="mt-3 text-3xl font-bold text-gray-900">{result.status === 'ready' ? 'Your download is ready' : 'Your purchase'}</h1>
          <div className="mt-5 space-y-4 text-gray-600" aria-live="polite">
            {result.status === 'checking' && <p>Checking your payment and preparing your download…</p>}
            {result.status === 'processing' && <p>Your payment or download is still being processed. When payment is confirmed, we’ll email your download link.</p>}
            {result.status === 'error' && <p role="alert">{result.error}</p>}
            {result.status === 'ready' && <>
              <p>{result.productName}</p>
              <a href={result.downloadUrl} className="inline-flex min-h-11 items-center justify-center rounded-xl bg-indigo-700 px-6 py-3 font-semibold text-white hover:bg-indigo-800">Download your ZIP</a>
              <p className="text-sm">Save the ZIP after downloading. Your link expires {new Date(result.expiresAt * 1000).toLocaleDateString('en-US')}. We also send it to the email entered at checkout.</p>
            </>}
            {['processing', 'error'].includes(result.status) && session && <button type="button" className="font-semibold text-indigo-700" onClick={() => { setResult({ status: 'checking' }); setRetry(value => value + 1); }}>Check again</button>}
            <p className="text-sm">Need help? <a className="text-indigo-700 underline" href="mailto:bedsun.tech@gmail.com">bedsun.tech@gmail.com</a></p>
            <Link className="inline-block text-sm text-indigo-700 underline" to="/products">Back to digital products</Link>
          </div>
        </div>
      </section>
    </>
  );
}
