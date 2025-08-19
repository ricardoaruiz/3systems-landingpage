# 🧪 Guia de Testes Open Graph Local

## Métodos de Teste

### 1. 🚀 Teste com ngrok (Recomendado)

**Passo a passo:**

1. **Inicie sua aplicação:**
   ```bash
   npm run dev
   ```

2. **Em outro terminal, inicie o ngrok:**
   ```bash
   ngrok http 3000
   ```

3. **Copie a URL pública gerada** (ex: `https://abc123.ngrok.io`)

4. **Teste nas ferramentas online:**
   - **Facebook Debugger**: https://developers.facebook.com/tools/debug/
   - **Twitter Card Validator**: https://cards-dev.twitter.com/validator
   - **LinkedIn Post Inspector**: https://www.linkedin.com/post-inspector/
   - **WhatsApp**: Envie a URL para você mesmo

### 2. 🔍 Teste Local com curl

```bash
# Verificar se os metadados estão sendo gerados
curl -s http://localhost:3000 | grep -E "(og:|twitter:|meta name)"

# Verificar título
curl -s http://localhost:3000 | grep -i "title"

# Verificar se as imagens existem
curl -I http://localhost:3000/images/logo.svg
```

### 3. 🌐 Teste com DevTools

1. Abra `http://localhost:3000` no navegador
2. Pressione `F12` para abrir DevTools
3. Vá para a aba **Elements**
4. Procure por tags que começam com:
   - `<meta property="og:`
   - `<meta name="twitter:`
   - `<script type="application/ld+json">`

## 📱 Testando no WhatsApp

### Método 1: Com ngrok
1. Use ngrok para expor localhost
2. Envie a URL pública para você mesmo no WhatsApp
3. Observe se aparece o preview

### Método 2: Deploy temporário
1. Faça deploy no Vercel/Netlify
2. Use a URL de preview

## 🛠️ Script de Teste Automatizado

Execute o script criado:
```bash
./scripts/test-og.sh
```

## ✅ Checklist de Verificação

### Metadados Básicos
- [ ] `<title>` está correto
- [ ] `<meta name="description">` está presente
- [ ] `<meta name="keywords">` está presente

### Open Graph
- [ ] `og:title` está presente
- [ ] `og:description` está presente
- [ ] `og:image` está presente e acessível
- [ ] `og:url` está correto
- [ ] `og:type` é "website"
- [ ] `og:locale` é "pt_BR"

### Twitter Cards
- [ ] `twitter:card` é "summary_large_image"
- [ ] `twitter:title` está presente
- [ ] `twitter:description` está presente
- [ ] `twitter:image` está presente

### Imagens
- [ ] Logo existe em `public/images/logo.svg`
- [ ] Imagens são acessíveis via HTTP
- [ ] Tamanho ideal: 1200x630px

### Dados Estruturados
- [ ] JSON-LD está presente no HTML
- [ ] Schema.org Organization está configurado
- [ ] Dados de contato estão corretos

## 🐛 Problemas Comuns

### Imagem não aparece
- **Causa**: Caminho da imagem incorreto
- **Solução**: Verifique se o arquivo existe em `public/images/`

### Preview não atualiza
- **Causa**: Cache das redes sociais
- **Solução**: Use os debuggers para forçar atualização

### Metadados não aparecem
- **Causa**: Renderização do lado cliente
- **Solução**: Verifique se está usando App Router corretamente

## 📊 Ferramentas de Análise

### Validadores Online
- **Facebook**: https://developers.facebook.com/tools/debug/
- **Twitter**: https://cards-dev.twitter.com/validator
- **LinkedIn**: https://www.linkedin.com/post-inspector/
- **Google Rich Results**: https://search.google.com/test/rich-results

### Extensões do Navegador
- **SEO Meta in 1 Click** (Chrome/Firefox)
- **Open Graph Preview** (Chrome)
- **Social Media Preview** (Chrome)

## 🎯 Exemplo de Teste Completo

```bash
# 1. Inicie a aplicação
npm run dev

# 2. Em outro terminal, teste localmente
curl -s http://localhost:3000 | grep -E "og:title|og:description|og:image"

# 3. Inicie ngrok
ngrok http 3000

# 4. Teste na ferramenta do Facebook
# Cole a URL do ngrok em: https://developers.facebook.com/tools/debug/

# 5. Teste no WhatsApp
# Envie a URL do ngrok para você mesmo
```

## 💡 Dicas Importantes

1. **Cache**: Redes sociais fazem cache dos metadados. Use os debuggers para forçar atualização.

2. **Imagens**: Certifique-se de que as imagens são acessíveis publicamente.

3. **HTTPS**: Algumas redes sociais só funcionam com HTTPS (ngrok fornece HTTPS automaticamente).

4. **Tamanho das Imagens**: 1200x630px é o tamanho ideal para a maioria das redes.

5. **Teste em Incógnito**: Para evitar cache do navegador.

## 🔄 Processo de Debug

1. **Verifique o HTML**: Os metadados estão sendo gerados?
2. **Teste as URLs**: As imagens são acessíveis?
3. **Use Validadores**: O que dizem as ferramentas oficiais?
4. **Teste Real**: Como aparece no WhatsApp/Facebook?
5. **Itere**: Ajuste e teste novamente.
