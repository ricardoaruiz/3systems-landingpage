# Open Graph e SEO - Guia de Configuração

## Configuração Implementada

A configuração de Open Graph foi implementada para melhorar o SEO e a aparência da página quando compartilhada em redes sociais.

### Arquivos Modificados/Criados:

1. **`src/app/layout.tsx`** - Configuração principal dos metadados
2. **`src/lib/metadata.ts`** - Utilitários para geração de metadados
3. **`src/components/structured-data/`** - Componente para dados estruturados (JSON-LD)

## Principais Features Implementadas:

### 1. Open Graph Tags
- `og:title` - Título da página
- `og:description` - Descrição da página
- `og:image` - Imagem de preview (usando logo.svg)
- `og:url` - URL canônica
- `og:type` - Tipo de conteúdo (website)
- `og:locale` - Idioma (pt_BR)
- `og:site_name` - Nome do site

### 2. Twitter Cards
- `twitter:card` - Formato large image
- `twitter:title` - Título para Twitter
- `twitter:description` - Descrição para Twitter
- `twitter:image` - Imagem para Twitter
- `twitter:site` - Handle do Twitter (configurar quando disponível)

### 3. Dados Estruturados (JSON-LD)
- Schema.org Organization
- Informações de contato
- Logo e URLs oficiais
- Configuração para redes sociais

### 4. SEO Básico
- Meta description otimizada
- Keywords relevantes
- Canonical URLs
- Robots meta tags
- Configuração para Google Bot

## Como Personalizar:

### 1. URLs e Domínio
Substitua `https://cristallo.com.br` pela URL real do seu site nos seguintes arquivos:
- `src/app/layout.tsx` (linha do metadataBase)
- `src/lib/metadata.ts` (baseUrl e outras referências)

### 2. Redes Sociais
Adicione os handles reais das redes sociais:
- Twitter: `@cristallo`
- LinkedIn: Link da página da empresa
- Instagram: Link do perfil

### 3. Imagens Open Graph
As imagens configuradas são:
- **Primária**: `/images/logo.svg` (1200x630px recomendado)

**Recomendações para imagens Open Graph:**
- Tamanho ideal: 1200x630px
- Formato: PNG, JPG ou WebP
- Peso máximo: 1MB
- Texto legível mesmo em tamanhos pequenos

### 4. Para Páginas Específicas
Use o utilitário `generateMetadata` em páginas individuais:

```tsx
import { generateMetadata } from '@/lib/metadata';

export const metadata = generateMetadata({
  title: 'Título Específico da Página',
  description: 'Descrição específica desta página',
  image: '/images/imagem-especifica.webp',
  url: '/pagina-especifica',
  keywords: ['palavra1', 'palavra2', 'palavra3'],
});
```

## Verificação e Testes:

### 1. Facebook Debugger
- URL: https://developers.facebook.com/tools/debug/
- Cole a URL do seu site para verificar como aparecerá no Facebook

### 2. Twitter Card Validator
- URL: https://cards-dev.twitter.com/validator
- Teste como os cards aparecerão no Twitter

### 3. LinkedIn Post Inspector
- URL: https://www.linkedin.com/post-inspector/
- Verifique como os links aparecerão no LinkedIn

### 4. Google Rich Results Test
- URL: https://search.google.com/test/rich-results
- Teste os dados estruturados (JSON-LD)

## Próximos Passos Recomendados:

1. **Google Analytics**: Adicionar tracking
2. **Google Search Console**: Configurar verificação
3. **Sitemap**: Gerar sitemap.xml
4. **Robots.txt**: Configurar arquivo robots.txt
5. **Favicon**: Adicionar favicons de diferentes tamanhos
6. **Web App Manifest**: Para PWA (se aplicável)

## Checklist de Configuração:

- [ ] Substituir URLs de exemplo pela URL real
- [ ] Adicionar handles reais das redes sociais
- [ ] Criar/otimizar imagem Open Graph (1200x630px)
- [ ] Testar com Facebook Debugger
- [ ] Testar com Twitter Card Validator
- [ ] Configurar Google Search Console
- [ ] Adicionar Google Analytics
- [ ] Verificar dados estruturados no Google

## Estrutura de Metadados por Página:

```
Página Principal (layout.tsx):
├── Open Graph completo
├── Twitter Cards
├── Dados estruturados
└── SEO básico

Páginas específicas:
├── Herdam configuração base
├── Podem sobrescrever títulos/descrições
└── Podem ter imagens específicas
```
