# Bárbara Godinho Investimentos — Site Institucional

Site institucional para consultoria de investimentos de pessoa física, desenvolvido para uma cliente real: analista de investimentos credenciada CNPI (EM-9901/APIMEC) e CVM. Projeto de portfólio técnico — cobre front-end, SEO técnico, arquitetura de tracking e compliance regulatório real (CVM Resolução 19/2021), não um template genérico.

**🔗 Site em produção:** [barbaragodinhoinvest.com.br](https://www.barbaragodinhoinvest.com.br)

---

## Stack

| Camada | Tecnologia |
|---|---|
| Build | Vite 4 |
| UI | React 18 + Tailwind CSS v3 + shadcn/ui (Radix) |
| Animação | Framer Motion |
| Formulários | React Hook Form + Zod |
| Dados | TanStack Query + Supabase |
| SEO | react-helmet-async (meta tags + JSON-LD dinâmico) |
| Deploy | Vercel, deploy automático via GitHub em push para `main` |

---

## Origem e evolução

O projeto nasceu como um export do Hostinger Horizons (builder no-code) com o layout e conteúdo inicial da cliente. A partir daí, assumi a manutenção e evolução técnica completa: SEO técnico (schema JSON-LD, sitemap, robots.txt, correção de encoding), arquitetura de tracking (GTM + GA4 + Consent Mode v2), compliance regulatório CVM, correção de bugs estruturais de UI e documentação de decisões técnicas ao longo do processo.

---

## Destaques técnicos

Este projeto não é só "montar um site" — envolveu decisões de arquitetura e resolução de problemas reais:

**Rastreamento desacoplado do código.** Em vez de instalar cada ferramenta de marketing (GA4, futuros Ads/Pixel) diretamente no HTML, o projeto usa um único container GTM como camada de entrada. Adicionar ou trocar uma tag de tracking não exige deploy — só uma publicação de versão no painel do GTM. Também resolveu a verificação do Google Search Console sem precisar de acesso ao DNS do cliente, usando o GTM já instalado como método de verificação.

**Compliance regulatório como restrição de engenharia.** A cliente é analista credenciada pela CVM — todo o site (copy, schema JSON-LD, tracking) precisa respeitar a Resolução CVM nº 19/2021: nenhuma promessa de rentabilidade, identificação obrigatória da credencial CNPI visível, métricas de histórico profissional posicionadas como atuação prévia (não resultado individual do cliente). Isso moldou desde o texto até os campos do schema `FinancialService` (sem `aggregateRating`, sem claim de retorno).

**LGPD com Consent Mode real.** Banner de cookies próprio (não plugin de terceiro) integrado ao `dataLayer` do GTM via Google Consent Mode v2 — o disparo do GA4 respeita a escolha do usuário, não só exibe o banner.

**Debugging estrutural, não pontual.** Um bug de espaçamento (texto colado a um elemento `<span>` adjacente) apareceu em produção. Em vez de corrigir só a ocorrência reportada, a investigação mapeou o padrão raiz — JSX não insere espaço automático entre texto solto e um elemento irmão em linha separada — e varreu todo o código-fonte, encontrando e corrigindo o mesmo padrão em 5 componentes diferentes antes que virasse bug recorrente.

---

## Rodando localmente

```bash
npm install
npm run dev       # http://localhost:3000
```

Outros scripts:

```bash
npm run build      # build de produção
npm run preview    # preview do build
npm run lint        # eslint
```

---

## Deploy

Hospedado na Vercel com integração direta ao GitHub — todo push para `main` gera um novo deploy automaticamente. Domínio gerenciado via DNS na Hostinger, apontando para a Vercel.

---

## Autoria

Desenvolvido por [Andressa Danfre](https://github.com/Andressadanfre).
