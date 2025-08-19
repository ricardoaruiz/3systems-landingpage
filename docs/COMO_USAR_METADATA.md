# 📖 Como Usar o arquivo metadata.ts

## 🎯 **O que é e para que serve?**

O arquivo `src/lib/metadata.ts` é um **utilitário centralizador** que:
- ✅ Evita repetição de código
- ✅ Garante consistência nos metadados
- ✅ Facilita manutenção (mudança em 1 lugar afeta tudo)
- ✅ Permite customização por página
- ✅ Centraliza configurações de SEO

## 📍 **Onde está sendo usado atualmente:**

### 1. `src/app/layout.tsx` (Página Principal)
```tsx
import { generateMetadata } from '@/lib/metadata';

// Usa valores padrão do utilitário
export const metadata: Metadata = generateMetadata({
  // Sem parâmetros = usa todos os padrões
});
```

### 2. Componente de Dados Estruturados
```tsx
// src/components/structured-data/structured-data.tsx
import { generateJsonLd } from '@/lib/metadata';

const jsonLd = generateJsonLd(); // Usa a função do utilitário
```

## 🚀 **Como usar em diferentes cenários:**

### **Cenário 1: Página Principal (Atual)**
```tsx
// src/app/layout.tsx
export const metadata = generateMetadata({
  // Usa todos os padrões definidos no utilitário
});
```

### **Cenário 2: Página Específica com Customizações**
```tsx
// src/app/servicos/page.tsx
import { generateMetadata } from '@/lib/metadata';

export const metadata = generateMetadata({
  title: 'Nossos Serviços - Cristallo',
  description: 'Conheça todos os serviços da Cristallo para transformar seu negócio.',
  url: '/servicos',
  image: '/images/servicos-banner.webp',
  keywords: ['serviços empresariais', 'consultoria', 'assessoria'],
});
```

### **Cenário 3: Página de Blog/Artigo**
```tsx
// src/app/blog/[slug]/page.tsx
import { generateMetadata } from '@/lib/metadata';

interface Props {
  params: { slug: string };
}

export async function generateMetadata({ params }: Props) {
  // Buscar dados do artigo (ex: de um CMS)
  const post = await getPostBySlug(params.slug);
  
  return generateMetadata({
    title: `${post.title} - Blog Cristallo`,
    description: post.excerpt,
    url: `/blog/${params.slug}`,
    image: post.featuredImage,
    keywords: post.tags,
  });
}
```

### **Cenário 4: Página de Contato**
```tsx
// src/app/contato/page.tsx
export const metadata = generateMetadata({
  title: 'Entre em Contato - Cristallo',
  description: 'Entre em contato conosco para uma consultoria gratuita e transforme seu negócio.',
  url: '/contato',
  keywords: ['contato', 'consultoria gratuita', 'orçamento'],
});
```

## 🔧 **Estrutura do Utilitário**

### **Função Principal: `generateMetadata`**
```tsx
generateMetadata({
  title?: string,        // Título da página
  description?: string,  // Descrição para SEO
  image?: string,        // Caminho da imagem Open Graph
  url?: string,          // URL específica da página
  keywords?: string[],   // Palavras-chave para SEO
})
```

### **Configuração Global: `siteConfig`**
```tsx
export const siteConfig = {
  name: 'Nome do Site',
  description: 'Descrição padrão',
  url: 'URL base',
  ogImage: 'Imagem padrão',
  links: {
    // Links das redes sociais
  }
}
```

### **Dados Estruturados: `generateJsonLd`**
```tsx
// Gera JSON-LD para Schema.org
const structuredData = generateJsonLd();
```

## 🎯 **Vantagens de usar o utilitário:**

### ✅ **Antes (sem utilitário):**
```tsx
// Cada página precisava repetir toda a configuração
export const metadata: Metadata = {
  title: 'Página X - Cristallo',
  description: 'Descrição longa...',
  metadataBase: new URL('https://cristallo.com.br'),
  openGraph: {
    type: 'website',
    locale: 'pt_BR',
    url: 'https://cristallo.com.br/pagina-x',
    siteName: 'Cristallo Soluções Empresariais',
    title: 'Página X - Cristallo',
    description: 'Descrição longa...',
    images: [
      {
        url: 'https://cristallo.com.br/images/imagem.jpg',
        width: 1200,
        height: 630,
        alt: 'Página X - Cristallo',
      },
    ],
  },
  twitter: {
    // ... mais 20 linhas de código
  },
  // ... mais configurações
};
```

### ✅ **Agora (com utilitário):**
```tsx
// Apenas o que é específico da página
export const metadata = generateMetadata({
  title: 'Página X - Cristallo',
  description: 'Descrição específica da página X',
  url: '/pagina-x',
});
```

## 🔄 **Como atualizar configurações globais:**

### **Para mudar URL do site:**
```tsx
// src/lib/metadata.ts - linha 24
const baseUrl = 'https://seu-novo-dominio.com.br';
```

### **Para mudar imagem padrão:**
```tsx
// src/lib/metadata.ts - linha 14
image = '/images/nova-imagem-padrao.webp',
```

### **Para adicionar mais redes sociais:**
```tsx
// src/lib/metadata.ts - siteConfig
links: {
  twitter: 'https://twitter.com/cristallo',
  linkedin: 'https://linkedin.com/company/cristallo',
  instagram: 'https://instagram.com/cristallo',
  facebook: 'https://facebook.com/cristallo',
},
```

## 🎨 **Exemplos Práticos por Tipo de Página:**

### **Landing Page (Atual)**
```tsx
// Usa todos os padrões
export const metadata = generateMetadata({});
```

### **Página de Serviço Específico**
```tsx
export const metadata = generateMetadata({
  title: 'Terceirização Financeira - Cristallo',
  description: 'Delegue o financeiro e foque no que realmente importa: o crescimento.',
  url: '/terceirizacao-financeira',
  image: '/images/financeiro-hero.webp',
  keywords: ['terceirização', 'financeiro', 'contabilidade'],
});
```

### **Página Sobre**
```tsx
export const metadata = generateMetadata({
  title: 'Sobre a Cristallo - Nossa História',
  description: 'Conheça a história da Cristallo e como ajudamos empresas a crescer.',
  url: '/sobre',
  image: '/images/equipe-cristallo.webp',
});
```

### **Página de Depoimentos**
```tsx
export const metadata = generateMetadata({
  title: 'Depoimentos de Clientes - Cristallo',
  description: 'Veja o que nossos clientes falam sobre nossos serviços e resultados.',
  url: '/depoimentos',
  keywords: ['depoimentos', 'clientes', 'casos de sucesso'],
});
```

## 🔍 **Para verificar se está funcionando:**

1. **Execute os testes que criamos:**
   ```bash
   ./scripts/test-og-complete.sh
   ```

2. **Verifique no navegador:**
   - Inspecione elemento
   - Procure por tags `<meta property="og:`
   - Procure por tags `<meta name="twitter:`

3. **Teste com ferramentas online:**
   - Facebook Debugger
   - Twitter Card Validator
   - LinkedIn Post Inspector

## 💡 **Resumo:**

O arquivo `metadata.ts` é seu **centro de controle de SEO**:
- **1 lugar** para configurar tudo
- **Reutilização** em múltiplas páginas
- **Customização** específica por página
- **Manutenção** simplificada
- **Consistência** garantida

**Agora você tem controle total sobre o SEO de qualquer página do seu site! 🚀**
