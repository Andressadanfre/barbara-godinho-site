const LEADS_ENDPOINT =
  'https://script.google.com/macros/s/AKfycby-p7m1O55FXX92n5NamJz2jj_4S31KnE3b4jjiNOInqSbE_3vw_LDmabebIiQXdH-lMA/exec';

export const sendLead = (payload) => {
  const body = JSON.stringify(payload);
  const blob = new Blob([body], { type: 'text/plain;charset=UTF-8' });
  if (navigator.sendBeacon && navigator.sendBeacon(LEADS_ENDPOINT, blob)) return;
  fetch(LEADS_ENDPOINT, { method: 'POST', body, mode: 'no-cors', keepalive: true }).catch(() => {});
};

export const getAttribution = () => {
  const params = new URLSearchParams(window.location.search);
  return {
    pagina: window.location.pathname,
    utm_source: params.get('utm_source') || '',
    gclid: params.get('gclid') || '',
  };
};

export const formatWhatsapp = (value) => {
  const d = value.replace(/\D/g, '').slice(0, 11);
  if (d.length <= 2) return d.length ? `(${d}` : '';
  if (d.length <= 6) return `(${d.slice(0, 2)}) ${d.slice(2)}`;
  if (d.length <= 10) return `(${d.slice(0, 2)}) ${d.slice(2, 6)}-${d.slice(6)}`;
  return `(${d.slice(0, 2)}) ${d.slice(2, 7)}-${d.slice(7)}`;
};
