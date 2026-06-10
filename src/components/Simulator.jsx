import React, { useState, useMemo } from 'react';
import { motion } from 'framer-motion';

const formatBRL = (cents) =>
  (cents / 100).toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' });

const formatPct = (n) =>
  `${n.toLocaleString('pt-BR', { minimumFractionDigits: 2, maximumFractionDigits: 2 })}%`;

const maskThousands = (raw) => {
  const digits = raw.replace(/\D/g, '');
  if (!digits) return '';
  return Number(digits).toLocaleString('pt-BR');
};
const unmaskToCents = (masked) => {
  const digits = masked.replace(/\D/g, '');
  return digits ? Number(digits) * 100 : 0;
};

const getIRRate = (dias) => {
  if (dias <= 180) return 0.225;
  if (dias <= 360) return 0.2;
  if (dias <= 720) return 0.175;
  return 0.15;
};

function simular({ capitalCents, dias, cdiAA, lciPctCdi }) {
  const cdi = cdiAA / 100;
  const fatorTempo = dias / 365;

  const taxaEfCDB = cdi * fatorTempo;
  const lucroBrutoCDB = capitalCents * taxaEfCDB;
  const irRate = getIRRate(dias);
  const irPagoCDB = lucroBrutoCDB * irRate;
  const lucroLiqCDB = lucroBrutoCDB - irPagoCDB;

  const taxaEfLci = cdi * (lciPctCdi / 100) * fatorTempo;
  const lucroLiqLci = capitalCents * taxaEfLci;

  const poupAA = cdiAA > 8.5 ? Math.pow(1.005, 12) - 1 : cdi * 0.7;
  const taxaEfPoup = poupAA * fatorTempo;
  const lucroLiqPoup = capitalCents * taxaEfPoup;

  const linhas = [
    { nome: 'Poupança', taxaEf: taxaEfPoup, ir: 0, lucro: lucroLiqPoup, total: capitalCents + lucroLiqPoup },
    { nome: 'CDB 100% CDI', taxaEf: taxaEfCDB, ir: irPagoCDB, lucro: lucroLiqCDB, total: capitalCents + lucroLiqCDB },
    { nome: `LCI/LCA ${lciPctCdi}% CDI`, taxaEf: taxaEfLci, ir: 0, lucro: lucroLiqLci, total: capitalCents + lucroLiqLci },
  ];

  const max = Math.max(...linhas.map((l) => l.total));
  return linhas.map((l) => ({ ...l, melhor: l.total === max }));
}

const Simulator = () => {
  const [valorInput, setValorInput] = useState('100.000');
  const [dias, setDias] = useState('360');
  const [cdi, setCdi] = useState('10,5');
  const [lciPct, setLciPct] = useState('90');

  const resultado = useMemo(() => {
    const capitalCents = unmaskToCents(valorInput);
    const d = Number(dias) || 0;
    const cdiAA = Number(cdi.replace(',', '.')) || 0;
    const lciPctCdi = Number(lciPct.replace(',', '.')) || 0;
    if (capitalCents <= 0 || d <= 0) return null;
    return simular({ capitalCents, dias: d, cdiAA, lciPctCdi });
  }, [valorInput, dias, cdi, lciPct]);

  return (
    <section id="simulador" className="section-padding bg-secondary">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="max-w-4xl mx-auto text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-foreground">
            Simulador de <span className="text-gradient">Renda Fixa</span>
          </h2>
          <p className="text-muted-foreground text-lg">
            Compare Poupança, CDB e LCI/LCA e veja onde seu dinheiro rende mais.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="max-w-5xl mx-auto"
        >
          <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-8">
            <div className="flex flex-col gap-2">
              <label className="text-sm font-medium text-left">Valor Inicial (R$)</label>
              <input type="text" inputMode="numeric" value={valorInput}
                onChange={(e) => setValorInput(maskThousands(e.target.value))}
                className="px-4 py-2 rounded-lg border bg-background" />
            </div>
            <div className="flex flex-col gap-2">
              <label className="text-sm font-medium text-left">Prazo (dias)</label>
              <input type="number" value={dias}
                onChange={(e) => setDias(e.target.value)}
                className="px-4 py-2 rounded-lg border bg-background" />
            </div>
            <div className="flex flex-col gap-2">
              <label className="text-sm font-medium text-left">CDI/Selic (% a.a.)</label>
              <input type="text" inputMode="decimal" value={cdi}
                onChange={(e) => setCdi(e.target.value)}
                className="px-4 py-2 rounded-lg border bg-background" />
            </div>
            <div className="flex flex-col gap-2">
              <label className="text-sm font-medium text-left">LCI/LCA (% do CDI)</label>
              <input type="text" inputMode="decimal" value={lciPct}
                onChange={(e) => setLciPct(e.target.value)}
                className="px-4 py-2 rounded-lg border bg-background" />
            </div>
          </div>

          {resultado && (
            <div className="overflow-x-auto rounded-xl border bg-card">
              <table className="w-full text-sm">
                <thead>
                  <tr className="border-b bg-muted/50">
                    <th className="px-4 py-3 text-left font-semibold">Investimento</th>
                    <th className="px-4 py-3 text-right font-semibold">Taxa no período</th>
                    <th className="px-4 py-3 text-right font-semibold">IR pago</th>
                    <th className="px-4 py-3 text-right font-semibold">Lucro líquido</th>
                    <th className="px-4 py-3 text-right font-semibold">Total líquido</th>
                  </tr>
                </thead>
                <tbody>
                  {resultado.map((l) => (
                    <tr key={l.nome} className={`border-b last:border-0 ${l.melhor ? 'bg-primary/5' : ''}`}>
                      <td className="px-4 py-3 text-left font-medium">
                        <div className="flex items-center gap-2">
                          {l.nome}
                          {l.melhor && (
                            <span className="text-xs px-2 py-0.5 rounded-full bg-primary text-primary-foreground">
                              Melhor
                            </span>
                          )}
                        </div>
                      </td>
                      <td className="px-4 py-3 text-right">{formatPct(l.taxaEf * 100)}</td>
                      <td className="px-4 py-3 text-right">{formatBRL(l.ir)}</td>
                      <td className="px-4 py-3 text-right">{formatBRL(l.lucro)}</td>
                      <td className="px-4 py-3 text-right font-semibold">{formatBRL(l.total)}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          )}

          <p className="text-xs text-muted-foreground mt-6 text-center max-w-3xl mx-auto">
            Simulação meramente ilustrativa, sem garantia de rentabilidade futura. Não constitui oferta ou recomendação de investimento. O ideal é que o investidor procure o consultor para definir a melhor estratégia de investimento.
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default Simulator;
