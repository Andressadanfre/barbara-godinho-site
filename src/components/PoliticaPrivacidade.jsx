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
          <p className="text-xs text-slate-400">Última atualização: outubro de 2026</p>

          <section>
            <h3 className="font-semibold text-slate-800 mb-2">1. Quem somos</h3>
            <p>
              Barbara Godinho Pereira, pessoa física, consultora de valores mobiliários registrada na
              CVM e certificada CNPI (nº 9901 – APIMEC), responsável pelo site{' '}
              <strong>www.barbaragodinhoinvest.com.br</strong>.
            </p>
          </section>

          <section>
            <h3 className="font-semibold text-slate-800 mb-2">2. Dados que coletamos</h3>
            <ul className="list-disc pl-4 space-y-1">
              <li><strong>Dados de contato:</strong> nome, e-mail, WhatsApp, faixa de patrimônio disponível para investir, tipo de necessidade e mensagem fornecidos voluntariamente no formulário de contato.</li>
              <li><strong>Dados de origem do contato:</strong> página do envio e parâmetros de campanha presentes no endereço do site (origem do acesso e identificador de clique em anúncio do Google), registrados junto ao formulário.</li>
              <li><strong>Dados de navegação:</strong> páginas visitadas, tempo de sessão e origem do acesso, coletados via Google Analytics 4 (somente com seu consentimento).</li>
            </ul>
          </section>

          <section>
            <h3 className="font-semibold text-slate-800 mb-2">3. Finalidade do tratamento</h3>
            <ul className="list-disc pl-4 space-y-1">
              <li>Responder solicitações de contato e proposta de serviços, inclusive retornando o contato por WhatsApp ou e-mail caso a conversa não seja concluída.</li>
              <li>Verificar se o atendimento é compatível com o perfil atendido (patrimônio a partir de R$ 300 mil).</li>
              <li>Medir a origem dos contatos e o desempenho de campanhas de divulgação.</li>
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
              Utilizamos cookies do Google Analytics 4 (análise de tráfego) e do Google Ads (medição do resultado de
              anúncios e exibição de anúncios relacionados), gravados somente após você clicar em "Aceitar" no aviso de
              cookies. Sem esse consentimento, as ferramentas do Google podem enviar sinais técnicos sem cookies e sem
              identificação pessoal, usados apenas para estimativas estatísticas agregadas. Você pode alterar sua
              preferência a qualquer momento limpando os dados do navegador; o aviso será exibido novamente.
            </p>
          </section>

          <section>
            <h3 className="font-semibold text-slate-800 mb-2">6. Compartilhamento de dados</h3>
            <p>
              Não vendemos seus dados pessoais. Eles são tratados apenas pelos seguintes fornecedores, na medida necessária
              às finalidades acima: Google LLC (armazenamento dos dados do formulário no Google Workspace, análise via
              Google Analytics e medição de anúncios via Google Ads) e WhatsApp/Meta, quando você opta por iniciar a
              conversa pelo aplicativo. Também poderão ser compartilhados quando exigido por lei. Esses fornecedores
              seguem suas próprias políticas de privacidade.
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
              <a href="mailto:contato@barbaragodinhoinvest.com.br" className="text-blue-600 underline">
                contato@barbaragodinhoinvest.com.br
              </a>.
            </p>
          </section>

          <section>
            <h3 className="font-semibold text-slate-800 mb-2">8. Retenção de dados</h3>
            <p>
              Dados de contato e de origem do contato são mantidos por até 12 meses após o último contato e depois
              excluídos, salvo se houver relação contratual ou obrigação legal que exija prazo maior.
              Dados de navegação seguem a política de retenção do Google Analytics (padrão: 14 meses).
            </p>
          </section>

          <section>
            <h3 className="font-semibold text-slate-800 mb-2">9. Contato</h3>
            <p>
              Dúvidas sobre esta política:{' '}
              <a href="mailto:contato@barbaragodinhoinvest.com.br" className="text-blue-600 underline">
                contato@barbaragodinhoinvest.com.br
              </a>
            </p>
          </section>
        </div>
      </motion.div>
    </motion.div>
  );
};

export default PoliticaPrivacidade;
