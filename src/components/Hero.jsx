import React from 'react';
import { motion } from 'framer-motion';
import { TrendingUp, BarChart3, Target, Award as AwardIcon } from 'lucide-react';
import { Button } from '@/components/ui/button';

const Hero = () => {
  const scrollToContact = () => {
    const element = document.getElementById('contact');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="home" className="min-h-screen gradient-bg relative overflow-hidden flex items-center">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-10 left-5 sm:top-20 sm:left-10 w-24 h-24 sm:w-32 sm:h-32 border border-white/30 rounded-full"></div>
        <div className="absolute top-20 right-5 sm:top-40 sm:right-20 w-16 h-16 sm:w-24 sm:h-24 border border-white/20 rounded-full"></div>
        <div className="absolute bottom-20 left-1/4 w-12 h-12 sm:w-16 sm:h-16 border border-white/25 rounded-full"></div>
      </div>

      <div className="container mx-auto px-4 pt-24 pb-16 sm:pt-32 sm:pb-20 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <motion.div
            className="text-white text-center lg:text-left"
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <motion.h1 
              className="text-4xl sm:text-5xl md:text-6xl font-bold leading-tight mb-6"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              Consultoria de Investimentos
              <span className="block text-blue-200">Online para Pessoa Física</span>
            </motion.h1>

            <motion.div
              className="text-xl sm:text-2xl mb-4 text-blue-100"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              Bárbara Godinho • Analista CNPI Credenciada CVM • Atendimento Online
            </motion.div>

            <motion.p
              className="text-lg sm:text-xl mb-8 text-blue-100 leading-relaxed"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
            >
              Especialista em Valuation, Modelagem e Estratégia de Investimentos para Decisões Inteligentes
            </motion.p>

            <motion.p
              className="text-base sm:text-lg mb-10 text-blue-50 leading-relaxed max-w-2xl mx-auto lg:mx-0"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.8 }}
            >
              Analista CNPI credenciada pela CVM, especializada em consultoria de investimentos 
              para pessoa física. Ajudo você a montar e acompanhar sua carteira com base em 
              análise fundamentalista, valuation e estratégia personalizada — tudo online, 
              em qualquer lugar do Brasil.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 1 }}
            >
              <Button 
                size="lg"
                onClick={scrollToContact}
                className="bg-white text-blue-900 hover:bg-blue-50 text-base sm:text-lg px-6 py-3 sm:px-8 sm:py-4 rounded-lg font-semibold shadow-xl hover:shadow-2xl transition-all duration-300 hover:scale-105"
              >
                Solicitar uma análise
              </Button>
            </motion.div>
          </motion.div>

          {/* Visual Elements */}
          <motion.div
            className="relative mt-12 lg:mt-0"
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            <div className="relative">
              <img  
                className="w-full h-auto rounded-2xl shadow-2xl max-w-md mx-auto lg:max-w-full"
                alt="Análise financeira profissional com gráficos e dados"
               src="https://images.unsplash.com/photo-1620266757065-5814239881fd" />
              
              {/* Floating Cards */}
              <motion.div
                className="absolute -top-2 -left-2 sm:-top-3 sm:-left-3 md:-top-4 md:-left-4 transform -rotate-3 glass-effect rounded-lg sm:rounded-xl p-2 sm:p-3 text-white shadow-md"
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6, delay: 1.2 }}
              >
                <TrendingUp className="w-5 h-5 sm:w-6 sm:h-6 md:w-8 md:h-8 mb-1 text-green-400" />
                <div className="text-[10px] sm:text-xs font-semibold">Valuation</div>
              </motion.div>

              <motion.div
                className="absolute -bottom-2 -right-2 sm:-bottom-3 sm:-right-3 md:-bottom-4 md:-right-4 transform rotate-3 glass-effect rounded-lg sm:rounded-xl p-2 sm:p-3 text-white shadow-md"
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6, delay: 1.4 }}
              >
                <BarChart3 className="w-5 h-5 sm:w-6 sm:h-6 md:w-8 md:h-8 mb-1 text-blue-400" />
                <div className="text-[10px] sm:text-xs font-semibold">Modelagem</div>
              </motion.div>

              <motion.div
                className="absolute top-1/3 -right-2 sm:top-1/4 sm:-right-3 md:top-1/3 md:-right-5 transform rotate-2 glass-effect rounded-lg sm:rounded-xl p-2 sm:p-3 text-white shadow-md"
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6, delay: 1.6 }}
              >
                <Target className="w-5 h-5 sm:w-6 sm:h-6 md:w-8 md:h-8 mb-1 text-purple-400" />
                <div className="text-[10px] sm:text-xs font-semibold">Estratégia</div>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Hero;