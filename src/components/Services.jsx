import React from 'react';
import { motion } from 'framer-motion';
import { Calculator, TrendingUp, PieChart, FileText, Globe } from 'lucide-react';
import { Button } from '@/components/ui/button';

const Services = () => {
  const services = [
    {
      icon: Calculator,
      title: "Valuation de Empresas",
      description: "DCF, múltiplos e análise comparativa para determinar o valor justo de empresas",
      features: ["Fluxo de Caixa Descontado", "Análise por Múltiplos", "Comparação Setorial"]
    },
    {
      icon: TrendingUp,
      title: "Projeções Financeiras",
      description: "Estudos de viabilidade e modelagem financeira para tomada de decisão",
      features: ["Cenários Otimista/Pessimista", "Análise de Sensibilidade", "ROI e Payback"]
    },
    {
      icon: PieChart,
      title: "Planejamento de Portfólio",
      description: "Estratégias personalizadas de alocação e rebalanceamento de investimentos",
      features: ["Diversificação Estratégica", "Gestão de Risco", "Rebalanceamento Periódico"]
    },
    {
      icon: FileText,
      title: "Relatórios Personalizados",
      description: "Análises detalhadas e relatórios sob medida para investidores e gestores",
      features: ["Análise Fundamentalista", "Recomendações Claras", "Acompanhamento Periódico"]
    },
    {
      icon: Globe,
      title: "Análises Macroeconômicas",
      description: "Estudos setoriais e análise do cenário macroeconômico brasileiro e global",
      features: ["Cenário Macro", "Análise Setorial", "Tendências de Mercado"]
    }
  ];

  const scrollToContact = () => {
    const element = document.getElementById('contact');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="services" className="section-padding bg-white">
      <div className="container mx-auto px-4">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl md:text-5xl font-bold text-slate-800 mb-6">
            Análises sob medida para
            <span className="text-gradient block">decisões inteligentes</span>
          </h2>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto">
            Serviços especializados em análise financeira, valuation e estratégia de investimentos
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {services.map((service, index) => (
            <motion.div
              key={index}
              className="bg-slate-50 rounded-2xl p-8 hover-lift"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <div className="w-16 h-16 gradient-bg rounded-xl flex items-center justify-center mb-6">
                <service.icon className="w-8 h-8 text-white" />
              </div>
              
              <h3 className="text-2xl font-bold text-slate-800 mb-4">
                {service.title}
              </h3>
              
              <p className="text-slate-600 mb-6 leading-relaxed">
                {service.description}
              </p>
              
              <ul className="space-y-2">
                {service.features.map((feature, featureIndex) => (
                  <li key={featureIndex} className="flex items-center text-slate-700">
                    <div className="w-2 h-2 bg-blue-600 rounded-full mr-3"></div>
                    {feature}
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>

        <motion.div
          className="text-center"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <Button 
            size="lg"
            onClick={scrollToContact}
            className="gradient-bg hover:opacity-90 transition-opacity text-lg px-8 py-4"
          >
            Agendar uma reunião
          </Button>
        </motion.div>
      </div>
    </section>
  );
};

export default Services;