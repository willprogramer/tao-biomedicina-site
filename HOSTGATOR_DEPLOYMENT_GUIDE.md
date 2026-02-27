# Guia Completo de Deploy na HostGator
## Tao Centro de Biomedicina - taocentrodebiomedicina.com.br

---

## 📋 CHECKLIST PRÉ-DEPLOYMENT

### ✅ Verificações Finais
- [ ] Projeto testado e funcionando localmente
- [ ] Todas as imagens otimizadas
- [ ] Links internos verificados
- [ ] Meta tags configuradas
- [ ] Schema markup validado
- [ ] Sitemap.xml criado
- [ ] Robots.txt configurado
- [ ] SSL certificate pronto

---

## 🚀 PASSO 1: REGISTRAR DOMÍNIO NA HOSTGATOR

### 1.1 Acessar HostGator
1. Ir para: https://www.hostgator.com.br/registro-de-dominio/
2. Procurar por: **taocentrodebiomedicina.com.br**
3. Verificar disponibilidade
4. Adicionar ao carrinho

### 1.2 Escolher Período de Registro
```
Recomendado: 1 ano (R$ 9,99 com desconto)
Preço regular: R$ 39,99/ano
Renovação automática: Ativar
```

### 1.3 Completar Compra
1. Criar conta HostGator (se não tiver)
2. Preencher dados pessoais
3. Escolher método de pagamento
4. Confirmar compra
5. Aguardar confirmação por email

**Tempo de ativação**: 24-48 horas

---

## 🖥️ PASSO 2: CONTRATAR HOSPEDAGEM NA HOSTGATOR

### 2.1 Escolher Plano de Hospedagem
```
Recomendado: Turbo Plus
- Preço 1º ano: R$ 19,99/mês (R$ 239,88/ano)
- Preço regular: R$ 59,99/mês
- Espaço: 150 GB
- Tráfego: Ilimitado
- Emails: Ilimitados
- Domínios: Múltiplos
```

### 2.2 Acessar Hospedagem
1. Ir para: https://www.hostgator.com.br/hospedagem-de-site
2. Selecionar plano "Turbo Plus"
3. Adicionar ao carrinho
4. Completar compra (pode usar mesma conta do domínio)

**Tempo de ativação**: Imediato (alguns minutos)

---

## 📦 PASSO 3: PREPARAR PROJETO PARA UPLOAD

### 3.1 Fazer Build do Projeto
```bash
cd /home/ubuntu/tao-biomedicina-site
npm run build
```

**Resultado esperado**: Pasta `dist/` com todos os arquivos

### 3.2 Verificar Arquivos Gerados
```bash
ls -la dist/
```

**Arquivos esperados**:
- ✅ index.html
- ✅ assets/ (CSS, JS, imagens)
- ✅ robots.txt
- ✅ sitemap.xml
- ✅ schema.json

### 3.3 Comprimir Arquivos (Opcional)
```bash
cd dist/
zip -r tao-biomedicina.zip .
```

---

## 🔑 PASSO 4: ACESSAR PAINEL HOSTGATOR

### 4.1 Login no cPanel
1. Acessar: https://www.hostgator.com.br
2. Clicar em "Acessar Painel"
3. Fazer login com email e senha
4. Selecionar hospedagem contratada

### 4.2 Localizar Gerenciador de Arquivos
1. No painel cPanel, procurar por "Gerenciador de Arquivos"
2. Ou acessar: File Manager
3. Navegar até pasta `public_html`

**Importante**: Todos os arquivos do site devem estar em `public_html/`

---

## 📤 PASSO 5: FAZER UPLOAD DOS ARQUIVOS

### Opção A: Upload via Gerenciador de Arquivos (Mais Fácil)

1. **Acessar Gerenciador de Arquivos**
   - Clicar em "Gerenciador de Arquivos"
   - Navegar até `public_html`
   - Clicar em "Carregar"

2. **Fazer Upload dos Arquivos**
   - Selecionar todos os arquivos da pasta `dist/`
   - Ou fazer upload do arquivo ZIP e descompactar
   - Aguardar conclusão

3. **Verificar Upload**
   - Confirmar que todos os arquivos estão em `public_html`
   - Verificar se `index.html` está no diretório raiz

### Opção B: Upload via FTP (Mais Rápido)

1. **Obter Credenciais FTP**
   - No cPanel, procurar por "Contas FTP"
   - Criar nova conta FTP
   - Anotar: Usuário, Senha, Host

2. **Usar Cliente FTP**
   - Baixar FileZilla: https://filezilla-project.org/
   - Abrir FileZilla
   - Ir em: File → Site Manager
   - Criar novo site:
     ```
     Host: ftp.taocentrodebiomedicina.com.br (ou IP fornecido)
     Protocolo: FTP
     Usuário: [credencial FTP]
     Senha: [credencial FTP]
     Porta: 21
     ```
   - Conectar
   - Navegar até `public_html`
   - Fazer drag-and-drop dos arquivos

3. **Verificar Upload**
   - Confirmar transferência de todos os arquivos
   - Verificar permissões (755 para pastas, 644 para arquivos)

---

## 🔗 PASSO 6: CONFIGURAR DOMÍNIO

### 6.1 Apontar Domínio para Hospedagem

**Se registrou domínio na HostGator:**
1. Domínio já está apontado automaticamente
2. Pode pular para próxima seção

**Se registrou domínio em outro lugar:**
1. Ir para registrador do domínio
2. Procurar por "Gerenciar DNS" ou "Nameservers"
3. Alterar nameservers para:
   ```
   ns1.hostgator.com.br
   ns2.hostgator.com.br
   ns3.hostgator.com.br
   ```
4. Salvar alterações
5. Aguardar propagação (até 48 horas)

### 6.2 Verificar Apontamento
```bash
nslookup taocentrodebiomedicina.com.br
```

**Resultado esperado**: IP da HostGator

---

## 🔒 PASSO 7: CONFIGURAR SSL (HTTPS)

### 7.1 Ativar SSL no cPanel
1. No painel cPanel, procurar por "SSL/TLS"
2. Clicar em "Manage SSL sites"
3. Selecionar domínio: taocentrodebiomedicina.com.br
4. Clicar em "Install" (AutoSSL)
5. Aguardar instalação (alguns minutos)

### 7.2 Forçar HTTPS
1. No cPanel, procurar por ".htaccess"
2. Ou via Gerenciador de Arquivos:
   - Navegar até `public_html`
   - Criar arquivo `.htaccess`
   - Adicionar código:
   ```apache
   <IfModule mod_rewrite.c>
   RewriteEngine On
   RewriteCond %{HTTPS} off
   RewriteRule ^(.*)$ https://%{HTTP_HOST}%{REQUEST_URI} [L,R=301]
   </IfModule>
   ```
   - Salvar arquivo

### 7.3 Testar SSL
1. Acessar: https://taocentrodebiomedicina.com.br
2. Verificar se tem cadeado verde
3. Testar em: https://www.sslshopper.com/ssl-checker.html

---

## ⚙️ PASSO 8: CONFIGURAR VARIÁVEIS DE AMBIENTE

### 8.1 Criar Arquivo .env (Se Necessário)
1. Via Gerenciador de Arquivos ou FTP
2. Criar arquivo `.env` em `public_html`
3. Adicionar variáveis necessárias:
   ```
   VITE_APP_TITLE=Tao Centro de Biomedicina
   VITE_APP_ID=tao-biomedicina
   ```

**Nota**: Para site estático, geralmente não é necessário

---

## 🧪 PASSO 9: TESTAR SITE AO VIVO

### 9.1 Acessar Site
1. Abrir navegador
2. Ir para: https://taocentrodebiomedicina.com.br
3. Aguardar carregamento (pode levar alguns segundos na primeira vez)

### 9.2 Verificações Importantes
- [ ] Site carrega corretamente
- [ ] Todas as imagens aparecem
- [ ] Links internos funcionam
- [ ] CSS está aplicado corretamente
- [ ] Menu de navegação funciona
- [ ] Botões e CTAs funcionam
- [ ] Formulários funcionam (se houver)
- [ ] WhatsApp link funciona
- [ ] Telefone link funciona
- [ ] HTTPS está ativo (cadeado verde)

### 9.3 Testar Performance
1. Acessar: https://pagespeed.web.dev
2. Inserir: taocentrodebiomedicina.com.br
3. Verificar Core Web Vitals
4. Anotar score (meta: 90+)

### 9.4 Testar SEO
1. Acessar: https://search.google.com/search-console
2. Adicionar propriedade: taocentrodebiomedicina.com.br
3. Verificar erros de rastreamento
4. Enviar sitemap.xml

---

## 📊 PASSO 10: CONFIGURAR GOOGLE SEARCH CONSOLE

### 10.1 Adicionar Propriedade
1. Acessar: https://search.google.com/search-console
2. Clicar em "Adicionar propriedade"
3. Inserir: https://taocentrodebiomedicina.com.br
4. Escolher método de verificação (DNS recomendado)

### 10.2 Verificar Propriedade
1. Copiar registro DNS fornecido
2. Ir para painel HostGator
3. Procurar por "Gerenciador de Zonas DNS" ou "DNS Zone Editor"
4. Adicionar registro TXT
5. Salvar e aguardar propagação
6. Voltar ao GSC e clicar "Verificar"

### 10.3 Enviar Sitemap
1. No GSC, ir para "Sitemaps"
2. Clicar em "Adicionar novo sitemap"
3. Inserir: https://taocentrodebiomedicina.com.br/sitemap.xml
4. Clicar em "Enviar"

### 10.4 Enviar URL para Indexação
1. No GSC, ir para "Inspeção de URL"
2. Inserir: https://taocentrodebiomedicina.com.br
3. Clicar em "Solicitar indexação"
4. Aguardar resposta do Google

---

## 📈 PASSO 11: CONFIGURAR GOOGLE ANALYTICS 4

### 11.1 Criar Propriedade GA4
1. Acessar: https://analytics.google.com
2. Clicar em "Criar propriedade"
3. Nome: "Tao Centro de Biomedicina"
4. Timezone: America/Sao_Paulo
5. Moeda: BRL

### 11.2 Adicionar Stream Web
1. Clicar em "Adicionar stream"
2. Selecionar "Web"
3. URL: https://taocentrodebiomedicina.com.br
4. Nome: "Tao Biomedicina"
5. Criar stream

### 11.3 Copiar Tag de Rastreamento
1. Copiar ID de medição (G-XXXXXXXX)
2. Adicionar ao `index.html`:
   ```html
   <!-- Google Analytics -->
   <script async src="https://www.googletagmanager.com/gtag/js?id=G-XXXXXXXX"></script>
   <script>
     window.dataLayer = window.dataLayer || [];
     function gtag(){dataLayer.push(arguments);}
     gtag('js', new Date());
     gtag('config', 'G-XXXXXXXX');
   </script>
   ```

### 11.4 Fazer Upload da Alteração
1. Atualizar arquivo `index.html` na HostGator
2. Limpar cache do navegador
3. Aguardar 24-48 horas para dados aparecerem

---

## 🔧 PASSO 12: CONFIGURAÇÕES FINAIS

### 12.1 Configurar Email
1. No cPanel, procurar por "Contas de Email"
2. Criar email: contato@taocentrodebiomedicina.com.br
3. Configurar cliente de email (Thunderbird, Outlook, etc.)

### 12.2 Configurar Backups
1. No cPanel, procurar por "Backup"
2. Ativar backups automáticos
3. Frequência: Diária
4. Retenção: 30 dias

### 12.3 Monitorar Uptime
1. Usar serviço como: https://www.uptimerobot.com
2. Adicionar URL: https://taocentrodebiomedicina.com.br
3. Receber alertas se site cair

---

## 📝 PASSO 13: REDIRECIONAR DOMÍNIO ANTIGO (Se Houver)

### 13.1 Configurar Redirecionamento
1. Se tinha site antigo em outro domínio
2. Configurar redirecionamento 301:
   ```apache
   Redirect 301 / https://taocentrodebiomedicina.com.br/
   ```

### 13.2 Atualizar Links Externos
1. Atualizar links em:
   - Google Business Profile
   - Redes sociais
   - Diretórios
   - Parceiros

---

## 🎯 PASSO 14: OTIMIZAÇÕES PÓS-DEPLOY

### 14.1 Ativar Gzip Compression
1. No cPanel, procurar por "Optimize Website"
2. Ativar "Gzip Compression"
3. Ativar "Optimize Images"

### 14.2 Configurar Cache
1. No cPanel, procurar por "Caching"
2. Ativar "Browser Caching"
3. Definir tempo: 1 mês para assets

### 14.3 Monitorar Performance
1. Executar teste em: https://pagespeed.web.dev
2. Implementar recomendações
3. Reavaliar após 1 semana

---

## ✅ CHECKLIST FINAL

### Antes de Considerar Pronto
- [ ] Domínio registrado e ativo
- [ ] Hospedagem contratada
- [ ] Arquivos fazem upload
- [ ] Site carrega corretamente
- [ ] HTTPS ativo (cadeado verde)
- [ ] Todas as imagens aparecem
- [ ] Links funcionam
- [ ] Menu funciona
- [ ] Botões funcionam
- [ ] Google Search Console configurado
- [ ] Sitemap enviado
- [ ] Google Analytics ativo
- [ ] Email funcionando
- [ ] Backups configurados
- [ ] Performance otimizada (90+ score)

---

## 🆘 TROUBLESHOOTING

### Site não carrega
```
1. Verificar se index.html está em public_html
2. Verificar permissões (755 para pastas, 644 para arquivos)
3. Limpar cache do navegador (Ctrl+Shift+Del)
4. Aguardar propagação de DNS (até 48 horas)
```

### Imagens não aparecem
```
1. Verificar caminhos das imagens (devem ser relativos)
2. Verificar se pasta /assets foi feita upload
3. Verificar permissões dos arquivos (644)
4. Testar em navegador diferente
```

### CSS não está aplicado
```
1. Verificar se pasta /assets foi feita upload
2. Verificar caminhos dos arquivos CSS
3. Limpar cache do navegador
4. Verificar console do navegador (F12) para erros
```

### SSL não funciona
```
1. Aguardar 24-48 horas para ativação
2. Verificar se domínio está correto
3. Forçar HTTPS via .htaccess
4. Testar em: https://www.sslshopper.com/ssl-checker.html
```

### Google não indexa
```
1. Verificar GSC para erros de rastreamento
2. Enviar sitemap.xml
3. Solicitar indexação de URLs
4. Aguardar 1-2 semanas
5. Verificar robots.txt (não deve bloquear)
```

---

## 📞 SUPORTE HOSTGATOR

**Chat 24/7**: https://www.hostgator.com.br/suporte
**Email**: suporte@hostgator.com.br
**Telefone**: 0800 941 6000

---

## 📅 CRONOGRAMA SUGERIDO

```
Dia 1: Registrar domínio + contratar hospedagem
Dia 2: Fazer upload dos arquivos
Dia 3: Configurar SSL + DNS
Dia 4: Testar site ao vivo
Dia 5: Configurar Google Search Console
Dia 6: Configurar Google Analytics
Dia 7: Otimizações finais
```

---

## 🎉 PRONTO!

Seu site estará ao vivo em **taocentrodebiomedicina.com.br** com:
- ✅ Domínio próprio
- ✅ SSL/HTTPS
- ✅ Performance otimizada
- ✅ SEO configurado
- ✅ Analytics ativo
- ✅ Backups automáticos

**Sucesso! 🚀**
