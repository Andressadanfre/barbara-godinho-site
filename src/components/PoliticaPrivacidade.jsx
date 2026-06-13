import React, { useEffect } from 'react';
import { motion } from 'framer-motion';

const PoliticaPrivacidade = ({ onClose }) => {
  useEffect(() => {
    document.body.style.overflow = 'hidden';
    return () => { document.body.style.overflow = ''; };
  }, []);

  return (
    <motion.div
      className="fixed inset-0 z-[100] bg-black/60 flex items-center justify-center p-4"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      onClick={onClose}
    >
      <motion.div
        className="bg-white rounded-2xl shadow-2xl max-w-2xl w-full max-h-[85vh] overflow-y-auto"
        initial={{ scale: 0.95, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        exit={{ scale: 0.95, opacity: 0 }}
        onClick={(e) => e.stopPropagation()}
      >
        <div className="sticky top-0 bg-white border-b border-slate-100 px-6 py-4 flex items-center justify-between">
          <h2 className="text-lg font-semibold text-slate-800">Política de Privacidade</h2>
          <button
            onClick={onClose}
            className="text-slate-400 hover:text-slate-600 transition-colors text-2xl leading-none"
          >
            ×
          </button>
        </div>

        <div className="px-6 py-6 space-y-6 text-sm text-slate-700 leading-relaxed">
          <p className="text-xs text-slate-400">Última atualização: junho de 2026</p>

          <section>
            <h3 className="font-semibold text-slate-800 mb-2">1. Quem somos</h3>
            <p>
              Bárbara Godinho Investimentos, CNPJ 27.673.614/0001-90, analista de valores mobiliários
              credenciada pela CVM (CNPI EM-9901/APIMEC), responsável pelo site{' '}
              <strong>www.barbaragodinhoinvest.com.br</strong>.
            </p>
          </section>

          <section>
            <h3 className="font-semibold text-slate-800 mb-2">2. Dados que coletamos</h3>
            <ul className="list-disc pl-4 space-y-1">
              <li><strong>Dados de contato:</strong> nome, e-mail e WhatsApp fornecidos voluntariamente no formulário de contato.</li>
              <li><strong>Dados de navegação:</strong> páginas visitadas, tempo de sessão e origem do acesso, coletados via Google Analytics 4 (somente com seu consentimento).</li>
            </ul>
          </section>

          <section>
            <h3 className="font-semibold text-slate-800 mb-2">3. Finalidade do tratamento</h3>
            <ul className="list-disc pl-4 space-y-1">
              <li>Responder solicitações de contato e proposta de serviços.</li>
              <li>Analisar o desempenho do site para melhorar a experiência do usuário.</li>
            </ul>
          </section>

          <section>
            <h3 className="font-semibold text-slate-800 mb-2">4. Base legal (LGPD)</h3>
            <p>
              O tratamento de dados é realizado com base no <strong>consentimento do titular</strong> (Art. 7º, I da Lei 13.709/2018)
              e no <strong>legítimo interesse</strong> para resposta a solicitações de contato (Art. 7º, IX).
            </p>
          </section>

          <section>
            <h3 className="font-semibold text-slate-800 mb-2">5. Cookies e rastreamento</h3>
            <p>
              Utilizamos cookies de análise via Google Analytics 4, ativados somente após seu consentimento explícito.
              Você pode alterar sua preferência a qualquer momento limpando os dados do navegador.
            </p>
          </section>

          <section>
            <h3 className="font-semibold text-slate-800 mb-2">6. Compartilhamento de dados</h3>
            <p>
              Não vendemos nem compartilhamos seus dados pessoais com terceiros, exceto com o Google LLC
              (Google Analytics), sujeito à política de privacidade do Google, e quando exigido por lei.
            </p>
          </section>

          <section>
            <h3 className="font-semibold text-slate-800 mb-2">7. Seus direitos</h3>
            <p>Conforme a LGPD, você tem direito a:</p>
            <ul className="list-disc pl-4 space-y-1">
              <li>Confirmar a existência de tratamento de seus dados.</li>
              <li>Acessar, corrigir ou excluir seus dados.</li>
              <li>Revogar o consentimento a qualquer momento.</li>
              <li>Solicitar a portabilidade dos dados.</li>
            </ul>
            <p className="mt-2">
              Para exercer esses direitos, entre em contato pelo e-mail{' '}
              <a href="mailto:barbara.godinhop@gmail.com" className="text-blue-600 underline">
                barbara.godinhop@gmail.com
              </a>.
            </p>
          </section>

          <section>
            <h3 className="font-semibold text-slate-800 mb-2">8. Retenção de dados</h3>
            <p>
              Dados de contato são mantidos pelo tempo necessário para atendimento da solicitação.
              Dados de navegação seguem a política de retenção do Google Analytics (padrão: 14 meses).
            </p>
          </section>

          <section>
            <h3 className="font-semibold text-slate-800 mb-2">9. Contato</h3>
            <p>
              Dúvidas sobre esta política:{' '}
              <a href="mailto:barbara.godinhop@gmail.com" className="text-blue-600 underline">
                barbara.godinhop@gmail.com
              </a>
            </p>
          </section>
        </div>
      </motion.div>
    </motion.div>
  );
};

export default PoliticaPrivacidade;
