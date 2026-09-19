import { useEffect } from 'react';
import { useLocation, useNavigationType } from 'react-router-dom';

export default function RouteScroll() {
  const { pathname, hash } = useLocation();
  const navigationType = useNavigationType();

  useEffect(() => {
    if (hash) {
      let id = hash.slice(1);
      try { id = decodeURIComponent(id); } catch { /* Keep malformed URL fragments harmless. */ }
      document.getElementById(id)?.scrollIntoView();
    } else if (navigationType !== 'POP') {
      window.scrollTo(0, 0);
      document.getElementById('main-content')?.focus({ preventScroll: true });
    }
  }, [pathname, hash, navigationType]);

  return null;
}
