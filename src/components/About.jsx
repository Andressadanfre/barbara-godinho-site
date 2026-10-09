import React from 'react';
import { motion } from 'framer-motion';
const About = () => {
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
            Consultora CVM e Certificada CNPI{' '}
            <span className="text-gradient block">Atendimento online em todo o Brasil</span>
          </h2>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 md:gap-16 items-center">
          {/* Content */}
          <motion.div initial={{
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
            <div className="space-y-6 text-base sm:text-lg text-slate-700 leading-relaxed">
              <p>
                Sou <strong>Consultora de Valores Mobiliários registrada na CVM</strong>, <strong>certificada CNPI</strong> e com MBA pela USP/ESALQ.
                Ofereço consultoria de investimentos online para pessoa física em todo o Brasil — desde a montagem da carteira até o acompanhamento contínuo, com base em análise fundamentalista.
              </p>

              <p>
                Além de consultora, sou empresária: tenho duas lojas físicas em Uberlândia e um e-commerce.
                Sei o que é tomar decisão com o próprio dinheiro em jogo.
              </p>
              
              <p>
                Minha missão é traduzir dados complexos em decisões claras e acionáveis. 
                Cada cliente recebe uma estratégia personalizada, construída com rigor técnico 
                e linguagem acessível — para você investir com mais clareza e menos ruído.
              </p>
            </div>
          </motion.div>

          {/* Image */}
          <motion.div className="relative" initial={{
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
            <img className="w-full h-auto rounded-2xl shadow-xl" alt="Bárbara Godinho trabalhando com análises financeiras" src="https://horizons-cdn.hostinger.com/b85b7c79-24d3-4b32-bac2-6eb1970106d9/ia-site-hduRr.png" />
          </motion.div>
        </div>
      </div>
    </section>;
};
export default About;