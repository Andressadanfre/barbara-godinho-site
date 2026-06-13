import React, { useEffect, useRef, useState } from 'react';
import { motion } from 'framer-motion';
import { TrendingUp, Users, BarChart2 } from 'lucide-react';

const useCountUp = (target, duration = 2000, start = false) => {
  const [value, setValue] = useState(0);
  useEffect(() => {
    if (!start) return;
    let startTime = null;
    const step = (timestamp) => {
      if (!startTime) startTime = timestamp;
      const progress = Math.min((timestamp - startTime) / duration, 1);
      const eased = 1 - Math.pow(1 - progress, 3);
      setValue(Math.floor(eased * target));
      if (progress < 1) requestAnimationFrame(step);
    };
    requestAnimationFrame(step);
  }, [start, target, duration]);
  return value;
};

const metrics = [
  {
    icon: BarChart2,
    value: 120,
    suffix: 'M+',
    prefix: 'R$',
    label: 'em patrimônio acompanhado',
    color: 'text-blue-400',
  },
  {
    icon: Users,
    value: 116,
    suffix: '%',
    prefix: '+',
    label: 'de crescimento em contratos em 4 meses',
    color: 'text-emerald-400',
  },
  {
    icon: TrendingUp,
    value: 1.1,
    suffix: 'M',
    prefix: 'R$',
    label: 'de patrimônio médio por cliente',
    color: 'text-purple-400',
    isDecimal: true,
  },
];

const Metric = ({ metric, animate }) => {
  const intValue = metric.isDecimal ? 1 : metric.value;
  const count = useCountUp(intValue, 1800, animate);

  return (
    <motion.div
      className="flex flex-col items-center text-center p-6 bg-white/5 rounded-2xl border border-white/10 backdrop-blur-sm"
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      viewport={{ once: true }}
    >
      <div className="w-12 h-12 rounded-full bg-white/10 flex items-center justify-center mb-4">
        <metric.icon className={`w-6 h-6 ${metric.color}`} />
      </div>
      <div className="text-3xl sm:text-4xl font-bold text-white mb-2 font-mono tracking-tight">
        {metric.prefix}
        {metric.isDecimal ? '1.1' : count.toLocaleString('pt-BR')}
        {metric.suffix}
      </div>
      <p className="text-sm text-slate-300 leading-relaxed">{metric.label}</p>
    </motion.div>
  );
};

const TrackRecord = () => {
  const ref = useRef(null);
  const [animate, setAnimate] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) setAnimate(true); },
      { threshold: 0.3 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section ref={ref} className="section-padding gradient-bg relative overflow-hidden">
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
            Histórico Profissional
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-4">
            Resultados que
            <span className="block text-blue-200">falam por si</span>
          </h2>
          <p className="text-slate-300 text-base sm:text-lg max-w-xl mx-auto">
            Números construídos ao longo da atuação como analista em consultoria de investimentos,
            antes de iniciar a operação independente.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 mb-10">
          {metrics.map((metric, i) => (
            <Metric key={i} metric={metric} animate={animate} />
          ))}
        </div>

        <motion.p
          className="text-center text-xs text-slate-300 max-w-2xl mx-auto leading-relaxed"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          viewport={{ once: true }}
        >
          Dados relativos à atuação profissional em consultoria de investimentos. Volume de patrimônio sob gestão referente ao último ano. As informações apresentadas possuem caráter exclusivamente referencial, em conformidade com a Resolução CVM nº 19/2021.
        </motion.p>
      </div>
    </section>
  );
};

export default TrackRecord;
