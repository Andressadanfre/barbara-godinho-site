import React from 'react';
import { motion } from 'framer-motion';
import { Mail, Phone, MapPin, Linkedin, Instagram } from 'lucide-react';
import Logo from '@/components/Logo';
const Footer = () => {
  const currentYear = new Date().getFullYear();
  const quickLinks = [{
    label: 'Início',
    id: 'home'
  }, {
    label: 'Sobre',
    id: 'about'
  }, {
    label: 'Serviços',
    id: 'services'
  }, {
    label: 'Diferenciais',
    id: 'differentials'
  }, {
    label: 'Contato',
    id: 'contact'
  }];
  const services = ['Planejamento de Portfólio', 'Relatórios Personalizados', 'Análises Macroeconômicas'];
  const scrollToSection = sectionId => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({
        behavior: 'smooth'
      });
    }
  };
  return <footer className="bg-slate-900 text-white">
      <div className="container mx-auto px-4 py-12 md:py-16">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 mb-8 md:mb-12">
          <motion.div className="space-y-4 sm:col-span-2 lg:col-span-1" initial={{
          opacity: 0,
          y: 30
        }} whileInView={{
          opacity: 1,
          y: 0
        }} transition={{
          duration: 0.6
        }} viewport={{
          once: true
        }}>
            <Logo className="text-white" />
            <p className="text-sm text-slate-300 leading-relaxed">
              Consultora de valores mobiliários registrada na CVM e certificada
              CNPI, especialista em análise fundamentalista e
              planejamento de investimentos, com MBA pela USP/ESALQ.
            </p>
            <div className="flex space-x-3 pt-2">
              <a href="https://www.linkedin.com/in/barbaragodinhoinvestimentos/" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn de Bárbara Godinho" className="w-9 h-9 bg-slate-800 rounded-lg flex items-center justify-center hover:bg-blue-600 transition-colors">
                <Linkedin className="w-4 h-4" />
              </a>
              <a href="https://www.instagram.com/barbaragodinhoinvest/" target="_blank" rel="noopener noreferrer" aria-label="Instagram de Bárbara Godinho" className="w-9 h-9 bg-slate-800 rounded-lg flex items-center justify-center hover:bg-pink-600 transition-colors">
                <Instagram className="w-4 h-4" />
              </a>
            </div>
          </motion.div>

          <motion.div initial={{
          opacity: 0,
          y: 30
        }} whileInView={{
          opacity: 1,
          y: 0
        }} transition={{
          duration: 0.6,
          delay: 0.1
        }} viewport={{
          once: true
        }}>
            <h3 className="text-lg font-semibold mb-4">Navegação</h3>
            <ul className="space-y-2">
              {quickLinks.map((link, index) => <li key={index}>
                  <button onClick={() => scrollToSection(link.id)} className="text-sm text-slate-300 hover:text-white transition-colors">
                    {link.label}
                  </button>
                </li>)}
            </ul>
          </motion.div>

          <motion.div initial={{
          opacity: 0,
          y: 30
        }} whileInView={{
          opacity: 1,
          y: 0
        }} transition={{
          duration: 0.6,
          delay: 0.2
        }} viewport={{
          once: true
        }}>
            <h3 className="text-lg font-semibold mb-4">Serviços</h3>
            <ul className="space-y-2">
              {services.map((service, index) => <li key={index} className="text-sm text-slate-300">
                  {service}
                </li>)}
            </ul>
          </motion.div>

          <motion.div initial={{
          opacity: 0,
          y: 30
        }} whileInView={{
          opacity: 1,
          y: 0
        }} transition={{
          duration: 0.6,
          delay: 0.3
        }} viewport={{
          once: true
        }}>
            <h3 className="text-lg font-semibold mb-4">Contato</h3>
            <div className="space-y-3">
              <div className="flex items-center space-x-2">
                <Mail className="w-4 h-4 text-blue-400 shrink-0" />
                <a href="mailto:contato@barbaragodinhoinvest.com.br" className="text-sm text-slate-300 hover:text-white transition-colors break-words">
                  contato@barbaragodinhoinvest.com.br
                </a>
              </div>
              <div className="flex items-center space-x-2">
                <Phone className="w-4 h-4 text-blue-400 shrink-0" />
                <a href="tel:+5534998606264" className="text-sm text-slate-300 hover:text-white transition-colors">
                  +55 (34) 99860-6264
                </a>
              </div>
              <div className="flex items-center space-x-2">
                <MapPin className="w-4 h-4 text-blue-400 shrink-0" />
                <span className="text-sm text-slate-300">Uberlândia-MG</span>
              </div>
            </div>
          </motion.div>
        </div>

        <motion.div
          id="aviso-legal"
          className="border-t border-slate-800 pt-6 pb-4 mt-0"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.35 }}
          viewport={{ once: true }}
        >
          <p className="text-xs text-slate-500 leading-relaxed text-center sm:text-left">
            <strong className="text-slate-400">Aviso Legal:</strong> Bárbara Godinho Pereira é Consultora de
            Valores Mobiliários registrada na CVM (Resolução CVM nº 19/2021) e
            profissional certificada CNPI (nº 9901 – APIMEC).
            Os conteúdos deste site têm caráter informativo e educacional e não constituem oferta,
            recomendação individual ou promessa de rentabilidade. A consultoria é prestada de forma
            individualizada, mediante contratação e avaliação do perfil do cliente. Investimentos
            envolvem riscos, inclusive de perda do capital investido, e rentabilidade passada não
            garante resultados futuros. Contato: contato@barbaragodinhoinvest.com.br.
          </p>
        </motion.div>

        <motion.div className="border-t border-slate-800 mt-8 pt-6 flex flex-col sm:flex-row justify-between items-center text-center sm:text-left" initial={{
        opacity: 0
      }} whileInView={{
        opacity: 1
      }} transition={{
        duration: 0.6,
        delay: 0.4
      }} viewport={{
        once: true
      }}>
          <p className="text-xs text-slate-400 mb-2 sm:mb-0">
            © {currentYear} Bárbara Godinho. Todos os direitos reservados.
          </p>
          <div className="flex space-x-4">
            <a
              href="https://wa.me/5534992339555?text=Ol%C3%A1%20Andressa!%20Vi%20o%20site%20da%20B%C3%A1rbara%20Godinho."
              target="_blank"
              rel="noopener noreferrer"
              className="text-xs text-slate-400 hover:text-white transition-colors"
            >
              Site desenvolvido por Andressa Dantas
            </a>
            <button
              onClick={() => scrollToSection('aviso-legal')}
              className="text-xs text-slate-400 hover:text-white cursor-pointer transition-colors"
            >
              Aviso Legal
            </button>
          </div>
        </motion.div>
      </div>
    </footer>;
};
export default Footer;