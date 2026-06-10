import React from 'react';
import { motion } from 'framer-motion';
import { BookOpen, ArrowRight } from 'lucide-react';

const SUBSTACK_URL = 'https://substack.com/@barbaragodinhoinvest';

const SubstackBanner = () => {
  return (
    <section id="artigos" className="section-padding gradient-bg">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="max-w-5xl mx-auto flex flex-col md:flex-row md:items-center md:justify-between gap-8"
        >
          <div className="md:max-w-xl">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/10 mb-5">
              <BookOpen className="w-4 h-4 text-white" />
              <span className="text-sm font-medium text-white/90">Substack</span>
            </div>
            <h2 className="text-3xl md:text-4xl font-bold mb-3 text-white">
              Para entender mais sobre o mercado financeiro, leia meus artigos no Substack.
            </h2>
            <p className="text-lg text-white/80">
              Análises, estratégias e educação financeira para você investir
              com mais segurança e clareza.
            </p>
          </div>

          <div className="shrink-0">
            <a
              href={SUBSTACK_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-8 py-4 rounded-lg bg-white text-primary font-semibold hover:bg-white/90 transition-colors whitespace-nowrap"
            >
              Ler artigos
              <ArrowRight className="w-5 h-5" />
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default SubstackBanner;
