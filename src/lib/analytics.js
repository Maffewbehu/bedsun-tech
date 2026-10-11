export function trackAnalyticsEvent(eventName, parameters = {}) {
  if (typeof window === "undefined" || typeof window.gtag !== "function") return;

  try {
    window.gtag("event", eventName, parameters);
  } catch {
    // Analytics should never interrupt a page or checkout action.
  }
}
