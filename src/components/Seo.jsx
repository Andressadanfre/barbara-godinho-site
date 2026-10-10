import { Helmet } from 'react-helmet-async';

const SITE_URL = 'https://www.barbaragodinhoinvest.com.br';
const OG_IMAGE = `${SITE_URL}/og-image.jpg`; // criar depois (1200x630)
const CNPI = '9901';

const schema = {
  '@context': 'https://schema.org',
  '@graph': [
    {
      '@type': 'Person',
      '@id': `${SITE_URL}/#barbara`,
      name: 'Bárbara Godinho',
      jobTitle: 'Consultora de Valores Mobiliários, certificada CNPI',
      url: SITE_URL,
      knowsAbout: [
        'Renda Fixa', 'Planejamento de Investimentos',
        'Educação Financeira', 'Análise de Investimentos',
      ],
      hasCredential: [
        {
          '@type': 'EducationalOccupationalCredential',
          credentialCategory: 'Certificação Profissional',
          identifier: CNPI,
          name: 'CNPI ' + CNPI + ' — Certificado Nacional do Profissional de Investimento',
          recognizedBy: { '@type': 'Organization', name: 'APIMEC Brasil' },
        },
        {
          '@type': 'EducationalOccupationalCredential',
          credentialCategory: 'Registro Profissional',
          name: 'Consultora de Valores Mobiliários — Resolução CVM nº 19/2021',
          recognizedBy: { '@type': 'GovernmentOrganization', name: 'Comissão de Valores Mobiliários (CVM)' },
        },
      ],
      sameAs: ['https://www.linkedin.com/in/barbaragodinhoinvestimentos/'],
    },
    {
      '@type': 'FinancialService',
      '@id': `${SITE_URL}/#service`,
      name: 'Bárbara Godinho Invest',
      url: SITE_URL,
      description:
        'Consultoria de investimentos independente para pessoa física em todo o Brasil. Consultora de valores mobiliários registrada na CVM e certificada CNPI (nº 9901 – APIMEC). Montagem e acompanhamento de carteira com análise fundamentalista e estratégia personalizada.',
      areaServed: { '@type': 'Country', name: 'Brasil' },
      provider: { '@id': `${SITE_URL}/#barbara` },
      sameAs: [
        'https://www.instagram.com/barbaragodinhoinvest',
        'https://substack.com/@barbaragodinhoinvest',
        'https://share.google/d8azRzrmCPbPlfscj',
      ],
      knowsAbout: ['Renda Fixa', 'Análise de Investimentos', 'Educação Financeira'],
    },
  ],
};

export default function Seo() {
  const title = 'Bárbara Godinho — Consultoria de Investimentos Independente | Consultora CVM e Certificada CNPI';
  const description =
    'Consultoria de investimentos independente para pessoa física, com consultora registrada na CVM e certificada CNPI. Carteira montada pelo seu objetivo e perfil. Atendimento online em todo o Brasil.';

  return (
    <Helmet>
      <title>{title}</title>
      <meta name="description" content={description} />
      <link rel="canonical" href={SITE_URL} />

      {/* Open Graph */}
      <meta property="og:type" content="website" />
      <meta property="og:url" content={SITE_URL} />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={OG_IMAGE} />
      <meta property="og:locale" content="pt_BR" />
      <meta property="og:site_name" content="Bárbara Godinho Invest" />

      {/* Twitter */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={OG_IMAGE} />

      <script type="application/ld+json">{JSON.stringify(schema)}</script>
    </Helmet>
  );
}
