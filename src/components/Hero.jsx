import React from 'react';
import { Button } from '@/components/ui/button';

const Hero = () => {
  const scrollToContact = () => {
    const element = document.getElementById('contact');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="home" className="min-h-screen gradient-bg relative overflow-hidden flex items-end">
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-10 left-5 sm:top-20 sm:left-10 w-24 h-24 sm:w-32 sm:h-32 border border-white/30 rounded-full"></div>
        <div className="absolute top-20 right-5 sm:top-40 sm:right-20 w-16 h-16 sm:w-24 sm:h-24 border border-white/20 rounded-full"></div>
        <div className="absolute bottom-20 left-1/4 w-12 h-12 sm:w-16 sm:h-16 border border-white/25 rounded-full"></div>
      </div>

      <div className="container mx-auto px-4 pt-24 sm:pt-32 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="text-white text-center lg:text-left lg:pb-20">
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold leading-tight mb-6">
              Consultoria de Investimentos{' '}
              <span className="block text-blue-200">Online para Pessoa Física</span>
            </h1>

            <div className="text-xl sm:text-2xl mb-4 text-blue-100">
              Bárbara Godinho • Consultora CVM e Analista CNPI • Atendimento Online
            </div>

            <p className="text-lg sm:text-xl mb-8 text-blue-100 leading-relaxed">
              Ajudo investidores a construir patrimônio com método.
            </p>

            <p className="text-base sm:text-lg mb-10 text-blue-50 leading-relaxed max-w-2xl mx-auto lg:mx-0">
              Além de consultora, sou empresária: tenho duas lojas físicas em Uberlândia e um
              e-commerce. Sei o que é tomar decisão com o próprio dinheiro em jogo. Sou
              independente: não recebo comissão de nenhum produto. Monto e acompanho sua
              carteira pelo seu objetivo e perfil, com análise fundamentalista.
            </p>

            <div>
              <Button
                size="lg"
                onClick={scrollToContact}
                className="bg-white text-blue-900 hover:bg-blue-50 text-base sm:text-lg px-6 py-3 sm:px-8 sm:py-4 rounded-lg font-semibold shadow-xl hover:shadow-2xl transition-all duration-300 hover:scale-105"
              >
                Agendar primeira conversa
              </Button>
              <p className="mt-3 text-sm text-blue-100/80">
                Sem custo · Para patrimônio a partir de R$ 300 mil
              </p>
            </div>
          </div>

          <div className="relative mt-10 lg:mt-0 flex justify-center lg:justify-end lg:self-end">
            <div
              aria-hidden="true"
              className="absolute left-1/2 top-[6%] -translate-x-1/2 w-[85%] aspect-square rounded-full bg-sky-300/30 blur-3xl"
            />
            <img
              className="relative w-full max-w-[300px] sm:max-w-sm lg:max-w-md h-auto drop-shadow-[0_24px_40px_rgba(2,6,23,0.45)]"
              src="/images/barbara-hero-1000.webp"
              srcSet="/images/barbara-hero-600.webp 600w, /images/barbara-hero-1000.webp 1000w"
              sizes="(min-width: 1024px) 448px, 300px"
              alt="Bárbara Godinho, consultora de investimentos"
              width="1000"
              height="1529"
              fetchpriority="high"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;