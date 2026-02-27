# Checklist Rápido de Deployment - HostGator
## Tao Centro de Biomedicina

---

## 🚀 RESUMO EXECUTIVO

Este é um guia rápido para subir o site na HostGator. Para instruções detalhadas, consulte `HOSTGATOR_DEPLOYMENT_GUIDE.md`.

---

## 📋 CHECKLIST DE DEPLOYMENT

### FASE 1: PREPARAÇÃO (1-2 horas)

- [ ] **Fazer build do projeto**
  ```bash
  cd /home/ubuntu/tao-biomedicina-site
  npm run build
  ```
  
- [ ] **Verificar arquivos gerados**
  ```bash
  ls -la dist/
  ```
  
- [ ] **Confirmar que existem:**
  - [ ] index.html
  - [ ] assets/ (pasta)
  - [ ] robots.txt
  - [ ] sitemap.xml
  - [ ] schema.json

### FASE 2: REGISTRAR DOMÍNIO (24-48 horas)

- [ ] **Acessar HostGator**
  - URL: https://www.hostgator.com.br/registro-de-dominio/
  
- [ ] **Procurar domínio**
  - Domínio: taocentrodebiomedicina.com.br
  - Verificar disponibilidade
  
- [ ] **Registrar domínio**
  - Período: 1 ano (R$ 9,99 com desconto)
  - Renovação automática: SIM
  - Completar compra
  
- [ ] **Confirmar registro**
  - Aguardar email de confirmação
  - Tempo: 24-48 horas

### FASE 3: CONTRATAR HOSPEDAGEM (Imediato)

- [ ] **Escolher plano**
  - Plano: Turbo Plus
  - Preço: R$ 19,99/mês (1º ano)
  - Espaço: 150 GB
  
- [ ] **Contratar hospedagem**
  - URL: https://www.hostgator.com.br/hospedagem-de-site
  - Usar mesma conta do domínio
  - Completar compra
  
- [ ] **Confirmar contratação**
  - Tempo: Imediato (alguns minutos)

### FASE 4: FAZER UPLOAD (1-2 horas)

- [ ] **Acessar cPanel HostGator**
  - URL: https://www.hostgator.com.br
  - Clicar em "Acessar Painel"
  - Login com email e senha
  
- [ ] **Abrir Gerenciador de Arquivos**
  - Procurar por "File Manager"
  - Navegar até `public_html`
  
- [ ] **Fazer upload dos arquivos**
  - Opção A: Drag-and-drop dos arquivos de `dist/`
  - Opção B: Fazer upload de ZIP e descompactar
  
- [ ] **Verificar upload**
  - Confirmar que `index.html` está em `public_html`
  - Confirmar que pasta `assets/` existe

### FASE 5: CONFIGURAR SSL (15 minutos)

- [ ] **Ativar SSL no cPanel**
  - Procurar por "SSL/TLS"
  - Clicar em "Manage SSL sites"
  - Selecionar: taocentrodebiomedicina.com.br
  - Clicar em "Install" (AutoSSL)
  
- [ ] **Forçar HTTPS**
  - Via Gerenciador de Arquivos
  - Criar arquivo `.htaccess` em `public_html`
  - Adicionar código de redirecionamento
  
- [ ] **Testar SSL**
  - Acessar: https://taocentrodebiomedicina.com.br
  - Verificar cadeado verde

### FASE 6: TESTAR SITE (30 minutos)

- [ ] **Acessar site**
  - URL: https://taocentrodebiomedicina.com.br
  
- [ ] **Verificações visuais**
  - [ ] Site carrega corretamente
  - [ ] Todas as imagens aparecem
  - [ ] Cores e layout corretos
  - [ ] Menu funciona
  - [ ] Botões funcionam
  
- [ ] **Verificações funcionais**
  - [ ] Links internos funcionam
  - [ ] WhatsApp link funciona
  - [ ] Telefone link funciona
  - [ ] Carrossel funciona
  - [ ] Scroll funciona
  
- [ ] **Verificações técnicas**
  - [ ] HTTPS ativo (cadeado verde)
  - [ ] Sem erros no console (F12)
  - [ ] Responsive em mobile
  - [ ] Performance aceitável

### FASE 7: CONFIGURAR GOOGLE SEARCH CONSOLE (30 minutos)

- [ ] **Adicionar propriedade**
  - URL: https://search.google.com/search-console
  - Adicionar: https://taocentrodebiomedicina.com.br
  
- [ ] **Verificar propriedade**
  - Método: DNS (recomendado)
  - Adicionar registro TXT no cPanel
  - Aguardar propagação
  - Clicar "Verificar"
  
- [ ] **Enviar sitemap**
  - Ir para "Sitemaps"
  - Adicionar: https://taocentrodebiomedicina.com.br/sitemap.xml
  
- [ ] **Solicitar indexação**
  - Ir para "Inspeção de URL"
  - Inserir: https://taocentrodebiomedicina.com.br
  - Clicar "Solicitar indexação"

### FASE 8: CONFIGURAR GOOGLE ANALYTICS (15 minutos)

- [ ] **Criar propriedade GA4**
  - URL: https://analytics.google.com
  - Nome: "Tao Centro de Biomedicina"
  - Timezone: America/Sao_Paulo
  - Moeda: BRL
  
- [ ] **Adicionar stream web**
  - URL: https://taocentrodebiomedicina.com.br
  - Nome: "Tao Biomedicina"
  
- [ ] **Copiar tag de rastreamento**
  - ID de medição: G-XXXXXXXX
  - Adicionar ao `index.html`
  - Fazer upload da alteração

### FASE 9: CONFIGURAÇÕES FINAIS (1 hora)

- [ ] **Criar email corporativo**
  - Email: contato@taocentrodebiomedicina.com.br
  - No cPanel: Contas de Email
  
- [ ] **Ativar backups**
  - No cPanel: Backup
  - Frequência: Diária
  - Retenção: 30 dias
  
- [ ] **Ativar compressão**
  - No cPanel: Optimize Website
  - Ativar Gzip Compression
  
- [ ] **Configurar cache**
  - No cPanel: Caching
  - Ativar Browser Caching
  - Tempo: 1 mês para assets

### FASE 10: VALIDAÇÃO FINAL (30 minutos)

- [ ] **Testar performance**
  - URL: https://pagespeed.web.dev
  - Inserir: taocentrodebiomedicina.com.br
  - Meta: 90+ score
  
- [ ] **Verificar indexação**
  - No Google Search Console
  - Verificar erros de rastreamento
  - Confirmar sitemap enviado
  
- [ ] **Testar em diferentes dispositivos**
  - [ ] Desktop
  - [ ] Tablet
  - [ ] Mobile
  
- [ ] **Testar em diferentes navegadores**
  - [ ] Chrome
  - [ ] Firefox
  - [ ] Safari
  - [ ] Edge

---

## ⏱️ TEMPO TOTAL ESTIMADO

| Fase | Tempo |
|------|-------|
| Preparação | 1-2 horas |
| Registrar domínio | 24-48 horas (automático) |
| Contratar hospedagem | Imediato |
| Fazer upload | 1-2 horas |
| Configurar SSL | 15 minutos |
| Testar site | 30 minutos |
| Configurar GSC | 30 minutos |
| Configurar GA4 | 15 minutos |
| Configurações finais | 1 hora |
| Validação final | 30 minutos |
| **TOTAL** | **~30-40 horas** |

**Nota**: Tempo pode variar conforme experiência. Propagação de DNS pode levar até 48 horas.

---

## 💰 CUSTOS

| Item | Preço | Período |
|------|-------|---------|
| Domínio .com.br | R$ 9,99 | 1º ano (depois R$ 39,99) |
| Hospedagem Turbo Plus | R$ 19,99/mês | 1º ano (depois R$ 59,99) |
| **TOTAL 1º ANO** | **R$ 249,87** | **12 meses** |
| **TOTAL DEPOIS** | **R$ 779,87** | **12 meses** |

---

## 🔗 LINKS IMPORTANTES

| Recurso | URL |
|---------|-----|
| HostGator Brasil | https://www.hostgator.com.br |
| Registrar Domínio | https://www.hostgator.com.br/registro-de-dominio/ |
| Hospedagem | https://www.hostgator.com.br/hospedagem-de-site |
| Acessar Painel | https://www.hostgator.com.br |
| Google Search Console | https://search.google.com/search-console |
| Google Analytics | https://analytics.google.com |
| PageSpeed Insights | https://pagespeed.web.dev |
| SSL Checker | https://www.sslshopper.com/ssl-checker.html |

---

## 🆘 SUPORTE

**Chat 24/7**: https://www.hostgator.com.br/suporte
**Email**: suporte@hostgator.com.br
**Telefone**: 0800 941 6000

---

## ✅ PRONTO PARA COMEÇAR?

1. ✅ Projeto testado e funcionando
2. ✅ Build criado com sucesso
3. ✅ Documentação preparada
4. ✅ Checklist em mãos

**Comece pela FASE 1 e siga o checklist passo a passo!**

---

**Sucesso! 🚀**
