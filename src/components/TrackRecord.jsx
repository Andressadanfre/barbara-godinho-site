import React from 'react';
import { motion } from 'framer-motion';
import { Layers, PieChart, Activity, RefreshCw, LifeBuoy } from 'lucide-react';

const activities = [
  { icon: Layers, label: 'Estruturação de portfólio' },
  { icon: PieChart, label: 'Análise de carteiras' },
  { icon: Activity, label: 'Acompanhamento de alocações' },
  { icon: RefreshCw, label: 'Reuniões de rebalanceamento' },
  { icon: LifeBuoy, label: 'Apoio na execução das alocações' },
];

const TrackRecord = () => (
  <section className="section-padding gradient-bg relative overflow-hidden">
    <div className="absolute inset-0 opacity-5">
      <div className="absolute top-10 right-10 w-64 h-64 border border-white/20 rounded-full" />
      <div className="absolute bottom-10 left-10 w-40 h-40 border border-white/15 rounded-full" />
    </div>

    <div className="container mx-auto px-4 relative z-10">
      <motion.div
        className="text-center mb-12"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
      >
        <span className="text-xs font-semibold tracking-widest text-blue-300 uppercase mb-3 block">
          Experiência
        </span>
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-4">
          Experiência construída{' '}
          <span className="block text-blue-200">na prática</span>
        </h2>
        <p className="text-slate-300 text-base sm:text-lg max-w-2xl mx-auto">
          Minha atuação no mercado financeiro começou na análise de investimentos e evoluiu
          para o acompanhamento direto de investidores e suas carteiras. Orientei centenas de
          investidores em diferentes momentos e estruturas patrimoniais.
        </p>
      </motion.div>

      <p className="text-center text-sm font-semibold text-blue-200 mb-6">Meu trabalho engloba:</p>

      <div className="flex flex-wrap justify-center gap-4">
        {activities.map((item, i) => (
          <motion.div
            key={item.label}
            className="w-full sm:w-[calc(50%-0.5rem)] lg:w-[calc(20%-0.8rem)] flex flex-col items-center text-center p-6 bg-white/5 rounded-2xl border border-white/10 backdrop-blur-sm"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: i * 0.08 }}
            viewport={{ once: true }}
          >
            <div className="w-12 h-12 rounded-full bg-white/10 flex items-center justify-center mb-4">
              <item.icon className="w-6 h-6 text-blue-300" strokeWidth={1.5} />
            </div>
            <p className="text-sm text-white font-medium leading-snug">{item.label}</p>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

export default TrackRecord;
