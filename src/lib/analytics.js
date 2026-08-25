/*
 * Vendor-agnostic event tracking.
 *
 * No analytics provider is installed on this site yet. This helper lets the app
 * emit events now and start recording them the moment a provider is added, with
 * no code changes here. It dispatches to whichever global is present:
 *
 *   Google Analytics 4 / gtag.js  -> window.gtag("event", name, props)
 *   Google Tag Manager            -> window.dataLayer.push({ event, ...props })
 *   Plausible                     -> window.plausible(name, { props })
 *   Umami                         -> window.umami.track(name, props)
 *
 * If none is present it no-ops (and logs in development so events are visible
 * while working locally). Analytics must never break the page, so every call is
 * wrapped and failures are swallowed.
 */
export function track(name, props = {}) {
  try {
    if (typeof window === "undefined" || !name) return;

    if (typeof window.gtag === "function") {
      window.gtag("event", name, props);
      return;
    }
    if (typeof window.plausible === "function") {
      window.plausible(name, { props });
      return;
    }
    if (window.umami && typeof window.umami.track === "function") {
      window.umami.track(name, props);
      return;
    }
    if (Array.isArray(window.dataLayer)) {
      window.dataLayer.push({ event: name, ...props });
      return;
    }

    if (process.env.NODE_ENV !== "production") {
      // eslint-disable-next-line no-console
      console.info("[analytics] %s", name, props);
    }
  } catch (err) {
    /* never let analytics break the UI */
  }
}

export default track;
