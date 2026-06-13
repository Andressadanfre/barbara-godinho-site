import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import PoliticaPrivacidade from '@/components/PoliticaPrivacidade';

const CONSENT_KEY = 'bg_cookie_consent';

const pushConsentToGTM = (granted) => {
  window.dataLayer = window.dataLayer || [];
  window.dataLayer.push({
    event: 'cookie_consent_update',
    analytics_storage: granted ? 'granted' : 'denied',
    ad_storage: 'denied',
  });
};

const CookieBanner = () => {
  const [visible, setVisible] = useState(false);
  const [showPolicy, setShowPolicy] = useState(false);

  useEffect(() => {
    const saved = localStorage.getItem(CONSENT_KEY);
    if (saved === 'accepted') {
      pushConsentToGTM(true);
    } else if (saved === 'declined') {
      pushConsentToGTM(false);
    } else {
      setVisible(true);
    }
  }, []);

  const accept = () => {
    localStorage.setItem(CONSENT_KEY, 'accepted');
    pushConsentToGTM(true);
    setVisible(false);
  };

  const decline = () => {
    localStorage.setItem(CONSENT_KEY, 'declined');
    pushConsentToGTM(false);
    setVisible(false);
  };

  return (
    <AnimatePresence>
      {visible && (
        <motion.div
          className="fixed bottom-0 left-0 right-0 z-50 bg-slate-900 border-t border-slate-700 px-4 py-3 sm:py-4"
          initial={{ y: 100, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: 100, opacity: 0 }}
          transition={{ duration: 0.3 }}
        >
          <div className="container mx-auto flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3">
            <p className="text-xs sm:text-sm text-slate-300 leading-relaxed max-w-2xl">
              Usamos cookies para analisar o tráfego do site via Google Analytics e melhorar sua experiência.
              Sua escolha é salva e respeitada em visitas futuras, conforme a{' '}
              <button onClick={() => setShowPolicy(true)} className="underline text-blue-400 hover:text-blue-300">
                Política de Privacidade
              </button>.
            </p>
            <div className="flex gap-2 shrink-0">
              <button
                onClick={decline}
                className="text-xs sm:text-sm px-3 py-1.5 rounded border border-slate-600 text-slate-400 hover:text-white hover:border-slate-400 transition-colors"
              >
                Recusar
              </button>
              <button
                onClick={accept}
                className="text-xs sm:text-sm px-4 py-1.5 rounded bg-blue-600 text-white hover:bg-blue-500 transition-colors font-medium"
              >
                Aceitar
              </button>
            </div>
          </div>
        </motion.div>
      )}
      <AnimatePresence>
        {showPolicy && (
          <PoliticaPrivacidade onClose={() => setShowPolicy(false)} />
        )}
      </AnimatePresence>
    </AnimatePresence>
  );
};

export default CookieBanner;
