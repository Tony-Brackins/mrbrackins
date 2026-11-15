/* Homie portfolio GA4: public pages only; no form values, query strings or advertising signals. */
(function () {
  'use strict';
  const current = document.currentScript;
  const id = current && current.dataset.measurementId;
  const domain = current && current.dataset.website;
  if (!/^G-[A-Z0-9]+$/.test(id || '') || location.hostname.replace(/^www\./, '') !== domain) return;
  if (/^\/(admin|account|agency|login|register|express|password|forgot-password|dashboard|workspace|billing|checkout|checkin|tickets\/passes|forms)(\/|$)/i.test(location.pathname)) return;
  if (window.__homiePortfolioGa4Started) return;
  window.__homiePortfolioGa4Started = true;
  window.dataLayer = window.dataLayer || [];
  window.gtag = window.gtag || function () { window.dataLayer.push(arguments); };
  window.gtag('js', new Date());
  let referrer = '';
  try { const ref = new URL(document.referrer); referrer = ref.origin + ref.pathname; } catch (_) {}
  window.gtag('config', id, {
    allow_google_signals: false,
    allow_ad_personalization_signals: false,
    page_location: location.origin + location.pathname,
    page_referrer: referrer,
    page_title: domain
  });
  const tag = document.createElement('script');
  tag.async = true;
  tag.src = 'https://www.googletagmanager.com/gtag/js?id=' + encodeURIComponent(id);
  document.head.appendChild(tag);
})();
