import React from 'react';
import { ShieldCheck, Award, GraduationCap, Ban } from 'lucide-react';
import { Button } from '@/components/ui/button';

const CREDENTIALS = [
  { icon: ShieldCheck, label: 'Registro na CVM' },
  { icon: Award, label: 'Certificada CNPI' },
  { icon: GraduationCap, label: 'MBA USP/ESALQ' },
  { icon: Ban, label: 'Sem comissão de produtos' },
];

const MARQUEE_ITEMS = [...CREDENTIALS, ...CREDENTIALS, ...CREDENTIALS];

const Hero = () => {
  const scrollToContact = () => {
    const element = document.getElementById('contact');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="home" className="gradient-bg relative overflow-hidden flex flex-col">
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-10 left-5 sm:top-20 sm:left-10 w-24 h-24 sm:w-32 sm:h-32 border border-white/30 rounded-full"></div>
        <div className="absolute top-20 right-5 sm:top-40 sm:right-20 w-16 h-16 sm:w-24 sm:h-24 border border-white/20 rounded-full"></div>
        <div className="absolute bottom-20 left-1/4 w-12 h-12 sm:w-16 sm:h-16 border border-white/25 rounded-full"></div>
      </div>

      <div className="container mx-auto px-4 pt-24 sm:pt-28 relative z-10">
        <div className="grid lg:grid-cols-[1.05fr_0.95fr] gap-10 items-center">
          <div className="text-white text-center lg:text-left lg:pb-16">
            <p className="inline-flex items-center gap-2 rounded-full border border-white/25 bg-white/5 px-3.5 py-1.5 text-xs sm:text-sm font-medium text-blue-100 mb-5 sm:mb-6">
              <span aria-hidden="true" className="h-2 w-2 rounded-full bg-sky-300" />
              Consultoria em todo o Brasil
            </p>

            <h1 className="text-3xl sm:text-4xl lg:text-[2.875rem] font-bold leading-[1.1] tracking-tight mb-4 sm:mb-5">
              Consultoria de investimentos{' '}
              <span className="block text-blue-200">online para pessoa física</span>
            </h1>

            <p className="text-base sm:text-lg text-blue-100 leading-relaxed max-w-lg mx-auto lg:mx-0 mb-7 sm:mb-8">
              Independente: não recebo comissão de produtos. Carteira montada pelo seu objetivo e perfil.
            </p>

            <div>
              <Button
                size="lg"
                onClick={scrollToContact}
                className="bg-white text-blue-900 hover:bg-blue-50 text-base sm:text-lg px-6 py-3 sm:px-8 sm:py-4 rounded-lg font-semibold shadow-xl hover:shadow-2xl transition-all duration-300 hover:scale-105"
              >
                Agendar conversa
              </Button>
              <p className="mt-3 text-sm text-blue-100/80">
                Sem custo · Para patrimônio a partir de R$ 300 mil
              </p>
            </div>
          </div>

          <div className="relative mt-4 lg:mt-0 flex justify-center lg:self-end">
            <div
              aria-hidden="true"
              className="absolute left-1/2 top-0 -translate-x-1/2 w-[80%] aspect-square rounded-full bg-sky-300/30 blur-3xl"
            />
            <img
              className="relative w-full max-w-[340px] sm:max-w-[420px] lg:max-w-[520px] h-auto drop-shadow-[0_24px_40px_rgba(2,6,23,0.45)]"
              src="/images/barbara-hero-busto-991.webp"
              srcSet="/images/barbara-hero-busto-600.webp 600w, /images/barbara-hero-busto-800.webp 800w, /images/barbara-hero-busto-991.webp 991w"
              sizes="(min-width: 1024px) 520px, 340px"
              alt="Bárbara Godinho, consultora de investimentos"
              width="991"
              height="1069"
              fetchpriority="high"
            />
          </div>
        </div>
      </div>

      <div className="relative z-10 border-t border-white/10 bg-slate-950/30 overflow-hidden">
        <div className="flex w-max animate-marquee hover:[animation-play-state:paused]">
          {[0, 1].map((copy) => (
            <ul
              key={copy}
              aria-hidden={copy === 1}
              className="flex shrink-0 items-center gap-12 sm:gap-16 py-4 sm:py-5 pr-12 sm:pr-16"
            >
              {MARQUEE_ITEMS.map(({ icon: Icon, label }, index) => (
                <li
                  key={`${copy}-${index}`}
                  className="flex items-center gap-2.5 whitespace-nowrap text-xs sm:text-sm font-medium text-blue-50"
                >
                  <Icon className="h-[18px] w-[18px] shrink-0" strokeWidth={1.6} aria-hidden="true" />
                  {label}
                </li>
              ))}
            </ul>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Hero;