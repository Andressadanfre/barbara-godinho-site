import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Mail, Phone, MapPin, Send } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Label } from '@/components/ui/label';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { useToast } from '@/components/ui/use-toast';
import { supabase } from '@/lib/supabaseClient';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    needType: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { toast } = useToast();

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSelectChange = (value) => {
    setFormData(prev => ({
      ...prev,
      needType: value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      const { data, error } = await supabase
        .from('contact_submissions')
        .insert([
          { 
            name: formData.name, 
            email: formData.email, 
            need_type: formData.needType, 
            message: formData.message 
          }
        ]);

      if (error) {
        throw error;
      }
      
      toast({
        title: "Mensagem enviada com sucesso!",
        description: "Entrarei em contato em breve para discutir sua necessidade.",
      });

      setFormData({
        name: '',
        email: '',
        needType: '',
        message: ''
      });
    } catch (error) {
      console.error('Error submitting to Supabase:', error);
      toast({
        title: "Erro ao enviar mensagem",
        description: "Houve um problema ao salvar sua mensagem. Tente novamente ou entre em contato diretamente.",
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  const contactInfo = [
    {
      icon: Mail,
      title: "Email",
      value: "barbara.godinhop@gmail.com",
      link: "mailto:barbara.godinhop@gmail.com"
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

        <div className="grid lg:grid-cols-2 gap-16">
          <motion.div
            className="bg-white rounded-2xl p-8 shadow-xl"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <form onSubmit={handleSubmit} className="space-y-6">
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
                <Label htmlFor="needType" className="text-slate-700 font-medium">
                  Tipo de necessidade
                </Label>
                <Select value={formData.needType} onValueChange={handleSelectChange}>
                  <SelectTrigger className="mt-2">
                    <SelectValue placeholder="Selecione o tipo de serviço" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="valuation">Valuation de empresa</SelectItem>
                    <SelectItem value="portfolio">Planejamento de portfólio</SelectItem>
                    <SelectItem value="analysis">Análise de investimento</SelectItem>
                    <SelectItem value="modeling">Modelagem financeira</SelectItem>
                    <SelectItem value="consulting">Consultoria geral</SelectItem>
                    <SelectItem value="other">Outro</SelectItem>
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
            </form>
          </motion.div>

          <motion.div
            className="space-y-8"
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <div className="bg-white rounded-2xl p-8 shadow-xl">
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
                    <div className="w-12 h-12 gradient-bg rounded-lg flex items-center justify-center">
                      <info.icon className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <div className="text-sm text-slate-600 font-medium">
                        {info.title}
                      </div>
                      {info.link ? (
                        <a 
                          href={info.link}
                          className="text-slate-800 hover:text-blue-600 transition-colors"
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

            <div className="bg-gradient-to-r from-blue-600 to-blue-800 rounded-2xl p-8 text-white">
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
    </section>
  );
};

export default Contact;