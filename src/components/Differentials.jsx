import React from 'react';
import { motion } from 'framer-motion';
import { Shield, Brain, Target, BarChartHorizontalBig, HeartHandshake as Handshake } from 'lucide-react';

const Differentials = () => {
  const differentials = [
    {
      icon: Shield,
      title: "Certificação CNPI reconhecida pelo mercado",
      description: "Credencial oficial que garante conhecimento técnico e ético nas análises de investimentos."
    },
    {
      icon: Brain,
      title: "Alta capacidade técnica com linguagem clara",
      description: "Transformo análises complexas em informações compreensíveis e acionáveis."
    },
    {
      icon: Target,
      title: "Análises personalizadas e orientadas a objetivos",
      description: "Cada relatório é desenvolvido considerando suas metas específicas e perfil de risco."
    },
    {
      icon: BarChartHorizontalBig,
      title: "Metodologia baseada em análise quantitativa avançada",
      description: "Utilizo modelos financeiros robustos para decisões baseadas em dados sólidos."
    },
    {
      icon: Handshake,
      title: "Independência total e ausência de conflito de interesse",
      description: "Trabalho exclusivamente com honorário consultivo, sem comissões ou vínculos com produtos financeiros."
    }
  ];

  return (
    <section id="differentials" className="section-padding gradient-bg">
      <div className="container mx-auto px-4">
        <motion.div
          className="text-center mb-12 md:mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-4 md:mb-6">
            Por que me
            <span className="text-blue-200 block">contratar?</span>
          </h2>
          <p className="text-lg sm:text-xl text-blue-100 max-w-3xl mx-auto">
            Combinação única de expertise técnica, certificação profissional e independência.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {differentials.map((differential, index) => (
            <motion.div
              key={index}
              className="glass-effect rounded-2xl p-6 sm:p-8 text-white hover-lift flex flex-col"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <div className="w-14 h-14 sm:w-16 sm:h-16 bg-white/20 rounded-xl flex items-center justify-center mb-4 sm:mb-6 shrink-0">
                <differential.icon className="w-7 h-7 sm:w-8 sm:h-8 text-white" />
              </div>
              
              <div className="flex flex-col flex-grow">
                <h3 className="text-lg sm:text-xl font-bold mb-3 sm:mb-4 leading-tight">
                  {differential.title}
                </h3>
                
                <p className="text-sm sm:text-base text-blue-100 leading-relaxed flex-grow">
                  {differential.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Stats Section */}
        <motion.div
          className="grid grid-cols-1 sm:grid-cols-2 gap-6 md:gap-8 mt-16 md:mt-20 text-center"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <div className="text-white p-4">
            <div className="text-3xl sm:text-4xl md:text-5xl font-bold text-blue-200 mb-2">100%</div>
            <div className="text-base sm:text-lg">Independência</div>
          </div>
          <div className="text-white p-4">
            <div className="text-3xl sm:text-4xl md:text-5xl font-bold text-blue-200 mb-2">CNPI</div>
            <div className="text-base sm:text-lg">Certificação Oficial</div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Differentials;