import React, { useState, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Mail, Phone, MapPin, Send } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Label } from '@/components/ui/label';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { useToast } from '@/components/ui/use-toast';
import PoliticaPrivacidade from '@/components/PoliticaPrivacidade';
import { sendLead, getAttribution, formatWhatsapp } from '@/lib/leads';

const Contact = () => {
  const needTypeLabels = {
    portfolio: 'Montar ou reorganizar minha carteira',
    second_opinion: 'Segunda opinião sobre meus investimentos',
    retirement: 'Planejar a aposentadoria / renda futura',
    liquidity_event: 'Investir um valor recebido (venda, herança, bônus)',
    other: 'Outro',
  };
  const wealthRangeLabels = {
    abaixo_300k: 'Abaixo de R$ 300 mil',
    '300k_1m': 'De R$ 300 mil a R$ 1 milhão',
    '1m_3m': 'De R$ 1 milhão a R$ 3 milhões',
    acima_3m: 'Acima de R$ 3 milhões',
  };
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    whatsapp: '',
    wealthRange: '',
    needType: '',
    message: '',
    website: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [showPolicy, setShowPolicy] = useState(false);
  const [belowMinimumName, setBelowMinimumName] = useState('');
  const formCardRef = useRef(null);
  const { toast } = useToast();

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: name === 'whatsapp' ? formatWhatsapp(value) : value
    }));
  };

  const handleSelectChange = (field) => (value) => {
    setFormData(prev => ({
      ...prev,
      [field]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (formData.website) return;
    if (!formData.wealthRange) {
      toast({
        title: "Informe o patrimônio disponível",
        description: "Selecione uma faixa para continuar.",
      });
      return;
    }
    setIsSubmitting(true);

    const serviceType = formData.needType || 'nao_informado';
    const isQualified = formData.wealthRange !== 'abaixo_300k';

    sendLead({
      nome: formData.name,
      email: formData.email,
      whatsapp: formData.whatsapp,
      tipo_necessidade: serviceType,
      mensagem: formData.message,
      faixa_patrimonio: formData.wealthRange,
      website: formData.website,
      ...getAttribution(),
    });

    window.dataLayer = window.dataLayer || [];
    window.dataLayer.push({
      event: isQualified ? 'generate_lead' : 'lead_below_minimum',
      lead_channel: isQualified ? 'whatsapp' : 'form_only',
      lead_source: 'contact_form',
      service_type: serviceType,
      wealth_range: formData.wealthRange,
    });

    if (isQualified) {
      const needLabel = needTypeLabels[formData.needType] || formData.needType;
      const message =
        `Olá Bárbara! Meu nome é ${formData.name}.\n` +
        `Patrimônio disponível: ${wealthRangeLabels[formData.wealthRange]}\n` +
        `Tenho interesse em: ${needLabel}\n` +
        `${formData.message}\n\n` +
        `(E-mail para contato: ${formData.email})`;

      window.open(`https://wa.me/5534998606264?text=${encodeURIComponent(message)}`, '_blank');

      toast({
        title: "Redirecionando para o WhatsApp",
        description: "Complete o envio por lá para falar diretamente com a Bárbara.",
      });
    } else {
      setBelowMinimumName(formData.name.trim().split(' ')[0]);
      formCardRef.current?.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }

    setFormData({
      name: '',
      email: '',
      whatsapp: '',
      wealthRange: '',
      needType: '',
      message: '',
      website: ''
    });

    setIsSubmitting(false);
  };

  const contactInfo = [
    {
      icon: Mail,
      title: "Email",
      value: "contato@barbaragodinhoinvest.com.br",
      link: "mailto:contato@barbaragodinhoinvest.com.br"
    },
    {
      icon: Phone,
      title: "Telefone",
      value: "+55 (34) 99860-6264",
      link: "tel:+5534998606264"
    },
    {
      icon: MapPin,
      title: "Localização",
      value: "Uberlândia-MG",
      link: null
    }
  ];

  return (
    <section id="contact" className="section-padding bg-slate-50">
      <div className="container mx-auto px-4">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl md:text-5xl font-bold text-slate-800 mb-6">
            Vamos{' '}
            <span className="text-gradient block">conversar?</span>
          </h2>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto">
            Entre em contato para solicitar uma proposta ou tirar dúvidas sobre meu trabalho
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16">
          <motion.div
            ref={formCardRef}
            className="bg-white rounded-2xl p-6 sm:p-8 shadow-xl"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            {belowMinimumName ? (
              <div className="h-full flex flex-col items-center justify-center text-center py-8 space-y-4" role="status">
                <h3 className="text-2xl font-bold text-slate-800">
                  Obrigada pelo interesse, {belowMinimumName}.
                </h3>
                <p className="text-slate-600">
                  Meu atendimento é dedicado a patrimônios a partir de R$&nbsp;300 mil.
                  Esse recorte me permite acompanhar cada cliente de perto.
                </p>
                <Button type="button" variant="outline" onClick={() => setBelowMinimumName('')}>
                  Voltar
                </Button>
              </div>
            ) : (
            <form onSubmit={handleSubmit} className="space-y-6">
              <div aria-hidden="true" className="absolute -left-[9999px] h-px w-px overflow-hidden">
                <label htmlFor="website">Website</label>
                <input
                  id="website"
                  name="website"
                  type="text"
                  tabIndex={-1}
                  autoComplete="off"
                  value={formData.website}
                  onChange={handleInputChange}
                />
              </div>
              <p className="text-sm text-slate-600 bg-slate-50 rounded-lg px-4 py-3">
                Atendimento exclusivo para pessoas físicas, com patrimônio a partir de R$&nbsp;300 mil.
              </p>
              <div>
                <Label htmlFor="name" className="text-slate-700 font-medium">
                  Nome completo
                </Label>
                <Input
                  id="name"
                  name="name"
                  type="text"
                  value={formData.name}
                  onChange={handleInputChange}
                  required
                  className="mt-2"
                  placeholder="Seu nome completo"
                />
              </div>

              <div>
                <Label htmlFor="email" className="text-slate-700 font-medium">
                  E-mail
                </Label>
                <Input
                  id="email"
                  name="email"
                  type="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  required
                  className="mt-2"
                  placeholder="seu@email.com"
                />
              </div>

              <div>
                <Label htmlFor="whatsapp" className="text-slate-700 font-medium">
                  WhatsApp
                </Label>
                <Input
                  id="whatsapp"
                  name="whatsapp"
                  type="tel"
                  inputMode="numeric"
                  autoComplete="tel-national"
                  value={formData.whatsapp}
                  onChange={handleInputChange}
                  required
                  pattern="\(\d{2}\) \d{4,5}-\d{4}"
                  title="Informe DDD + número, ex.: (34) 99999-9999"
                  className="mt-2"
                  placeholder="(34) 99999-9999"
                />
              </div>

              <div>
                <Label htmlFor="wealthRange" className="text-slate-700 font-medium">
                  Patrimônio disponível para investir
                </Label>
                <Select value={formData.wealthRange} onValueChange={handleSelectChange('wealthRange')}>
                  <SelectTrigger id="wealthRange" className="mt-2">
                    <SelectValue placeholder="Selecione uma faixa" />
                  </SelectTrigger>
                  <SelectContent>
                    {Object.entries(wealthRangeLabels).map(([value, label]) => (
                      <SelectItem key={value} value={value}>{label}</SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>

              <div>
                <Label htmlFor="needType" className="text-slate-700 font-medium">
                  Tipo de necessidade
                </Label>
                <Select value={formData.needType} onValueChange={handleSelectChange('needType')}>
                  <SelectTrigger className="mt-2">
                    <SelectValue placeholder="Selecione o tipo de serviço" />
                  </SelectTrigger>
                  <SelectContent>
                    {Object.entries(needTypeLabels).map(([value, label]) => (
                      <SelectItem key={value} value={value}>{label}</SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>

              <div>
                <Label htmlFor="message" className="text-slate-700 font-medium">
                  Mensagem
                </Label>
                <Textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleInputChange}
                  required
                  className="mt-2 min-h-[120px]"
                  placeholder="Descreva sua necessidade e objetivos..."
                />
              </div>

              <Button
                type="submit"
                disabled={isSubmitting}
                className="w-full gradient-bg hover:opacity-90 transition-opacity text-lg py-3"
              >
                {isSubmitting ? (
                  "Enviando..."
                ) : (
                  <>
                    <Send className="w-5 h-5 mr-2" />
                    Enviar mensagem
                  </>
                )}
              </Button>

              <p className="text-xs text-slate-500 text-center">
                Ao enviar, você concorda com o armazenamento dos seus dados para retorno do contato, conforme a{' '}
                <button
                  type="button"
                  onClick={() => setShowPolicy(true)}
                  className="underline hover:text-slate-700"
                >
                  Política de Privacidade
                </button>.
              </p>
            </form>
            )}
          </motion.div>

          <motion.div
            className="space-y-8"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <div className="bg-white rounded-2xl p-6 sm:p-8 shadow-xl">
              <h3 className="text-2xl font-bold text-slate-800 mb-6">
                Informações de Contato
              </h3>
              
              <div className="space-y-6">
                {contactInfo.map((info, index) => (
                  <motion.div
                    key={index}
                    className="flex items-center space-x-4"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: index * 0.1 }}
                    viewport={{ once: true }}
                  >
                    <div className="w-12 h-12 shrink-0 gradient-bg rounded-lg flex items-center justify-center">
                      <info.icon className="w-6 h-6 text-white" />
                    </div>
                    <div className="min-w-0">
                      <div className="text-sm text-slate-600 font-medium">
                        {info.title}
                      </div>
                      {info.link ? (
                        <a 
                          href={info.link}
                          className="text-slate-800 hover:text-blue-600 transition-colors break-all"
                        >
                          {info.value}
                        </a>
                      ) : (
                        <div className="text-slate-800">{info.value}</div>
                      )}
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>

            <div className="bg-gradient-to-r from-blue-600 to-blue-800 rounded-2xl p-6 sm:p-8 text-white">
              <h3 className="text-2xl font-bold mb-4">
                Resposta Rápida
              </h3>
              <p className="text-blue-100">
                Respondo todas as mensagens em até 24 horas. 
                Para urgências, entre em contato diretamente por telefone.
              </p>
            </div>
          </motion.div>
        </div>
      </div>
      <AnimatePresence>
        {showPolicy && <PoliticaPrivacidade onClose={() => setShowPolicy(false)} />}
      </AnimatePresence>
    </section>
  );
};

export default Contact;