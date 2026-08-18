import React from 'react';
import { motion } from 'framer-motion';
import { GraduationCap, Award, ShieldCheck } from 'lucide-react';
const About = () => {
  const achievements = [{
    icon: Award,
    title: "Certificação CNPI",
    description: "Analista de Investimentos Certificada"
  }, {
    icon: ShieldCheck,
    title: "Consultora CVM",
    description: "Credenciada ao órgão regulador brasileiro"
  }, {
    icon: GraduationCap,
    title: "MBA USP/ESALQ",
    description: "Finanças e Controladoria"
  }];
  return <section id="about" className="section-padding bg-slate-50">
      <div className="container mx-auto px-4">
        <motion.div className="text-center mb-12 md:mb-16" initial={{
        opacity: 0,
        y: 30
      }} whileInView={{
        opacity: 1,
        y: 0
      }} transition={{
        duration: 0.8
      }} viewport={{
        once: true
      }}>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-slate-800 mb-4 md:mb-6">
            Analista de Investimentos CNPI{' '}
            <span className="text-gradient block">Credenciada CVM • Atendimento Online</span>
          </h2>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 md:gap-16 items-center">
          {/* Content */}
          <motion.div initial={{
          opacity: 0,
          x: -50
        }} whileInView={{
          opacity: 1,
          x: 0
        }} transition={{
          duration: 0.8
        }} viewport={{
          once: true
        }}>
            <div className="space-y-6 text-base sm:text-lg text-slate-700 leading-relaxed">
              <p>
                Sou <strong>Analista de Investimentos CNPI</strong> e <strong>Consultora credenciada pela CVM</strong>, com MBA pela USP/ESALQ. 
                Ofereço consultoria de investimentos online para pessoa física em todo o Brasil — desde a montagem da carteira até o acompanhamento contínuo, com base em análise fundamentalista e valuation.
              </p>
              
              <p>
                Minha missão é traduzir dados complexos em decisões claras e acionáveis. 
                Cada cliente recebe uma estratégia personalizada, construída com rigor técnico 
                e linguagem acessível — para você investir com mais segurança e menos ruído.
              </p>
            </div>
          </motion.div>

          {/* Image */}
          <motion.div className="relative" initial={{
          opacity: 0,
          x: 50
        }} whileInView={{
          opacity: 1,
          x: 0
        }} transition={{
          duration: 0.8
        }} viewport={{
          once: true
        }}>
            <img className="w-full h-auto rounded-2xl shadow-xl" alt="Bárbara Godinho trabalhando com análises financeiras" src="https://horizons-cdn.hostinger.com/b85b7c79-24d3-4b32-bac2-6eb1970106d9/ia-site-hduRr.png" />
          </motion.div>
        </div>

        {/* Achievements Grid */}
        <motion.div className="grid grid-cols-1 sm:grid-cols-3 gap-6 md:gap-8 mt-16 md:mt-20" initial={{
        opacity: 0,
        y: 50
      }} whileInView={{
        opacity: 1,
        y: 0
      }} transition={{
        duration: 0.8,
        delay: 0.2
      }} viewport={{
        once: true
      }}>
          {achievements.map((achievement, index) => <motion.div key={index} className="text-center p-6 bg-white rounded-xl shadow-lg hover-lift" initial={{
          opacity: 0,
          y: 30
        }} whileInView={{
          opacity: 1,
          y: 0
        }} transition={{
          duration: 0.6,
          delay: index * 0.1
        }} viewport={{
          once: true
        }}>
              <div className="w-14 h-14 sm:w-16 sm:h-16 gradient-bg rounded-full flex items-center justify-center mx-auto mb-4">
                <achievement.icon className="w-7 h-7 sm:w-8 sm:h-8 text-white" />
              </div>
              <h3 className="text-lg sm:text-xl font-semibold text-slate-800 mb-2">
                {achievement.title}
              </h3>
              <p className="text-sm sm:text-base text-slate-600">
                {achievement.description}
              </p>
            </motion.div>)}
        </motion.div>
      </div>
    </section>;
};
export default About;