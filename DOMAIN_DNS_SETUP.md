# Configuração de Domínio e DNS
## Tao Centro de Biomedicina - taocentrodebiomedicina.com.br

---

## 🌐 CENÁRIOS DE CONFIGURAÇÃO

### Cenário 1: Domínio Registrado na HostGator

Se você registrou o domínio diretamente na HostGator, ele já está apontado automaticamente para a hospedagem.

**Ação necessária**: Nenhuma (já está configurado)

---

### Cenário 2: Domínio Registrado em Outro Lugar

Se você registrou o domínio em outro provedor (Registro.br, Locaweb, etc.), é necessário apontar para HostGator.

---

## 🔧 PASSO 1: OBTER NAMESERVERS DA HOSTGATOR

### Via cPanel

1. **Acessar cPanel HostGator**
   - URL: https://www.hostgator.com.br
   - Clicar em "Acessar Painel"
   - Login com email e senha

2. **Procurar por Nameservers**
   - No cPanel, procurar por "Nameservers" ou "DNS"
   - Você verá algo como:
     ```
     ns1.hostgator.com.br
     ns2.hostgator.com.br
     ns3.hostgator.com.br
     ```

3. **Anotar os Nameservers**
   - Copiar os 3 nameservers
   - Guardar em local seguro

---

## 🔗 PASSO 2: ATUALIZAR NAMESERVERS NO REGISTRADOR

### Se Registrou em Registro.br

1. **Acessar Registro.br**
   - URL: https://registro.br

2. **Login com Credenciais**
   - Email e senha cadastrados

3. **Procurar por "Meus Domínios"**
   - Clicar em "Meus Domínios"
   - Procurar por "taocentrodebiomedicina.com.br"

4. **Editar Nameservers**
   - Clicar em "Editar"
   - Procurar por "Servidores de Nomes"
   - Remover nameservers antigos
   - Adicionar nameservers da HostGator:
     ```
     ns1.hostgator.com.br
     ns2.hostgator.com.br
     ns3.hostgator.com.br
     ```

5. **Salvar Alterações**
   - Clicar em "Salvar"
   - Aguardar propagação (até 48 horas)

### Se Registrou em Locaweb

1. **Acessar Locaweb**
   - URL: https://www.locaweb.com.br

2. **Login com Credenciais**
   - Email e senha cadastrados

3. **Procurar por "Meus Domínios"**
   - Clicar em "Meus Domínios"
   - Procurar por "taocentrodebiomedicina.com.br"

4. **Editar Nameservers**
   - Clicar em "Editar"
   - Procurar por "Servidores de Nomes"
   - Remover nameservers antigos
   - Adicionar nameservers da HostGator:
     ```
     ns1.hostgator.com.br
     ns2.hostgator.com.br
     ns3.hostgator.com.br
     ```

5. **Salvar Alterações**
   - Clicar em "Salvar"
   - Aguardar propagação (até 48 horas)

### Se Registrou em HostGator

**Nenhuma ação necessária** - Domínio já está apontado automaticamente

---

## ⏱️ PROPAGAÇÃO DE DNS

Após atualizar os nameservers, é necessário aguardar a propagação:

**Tempo esperado**: 24-48 horas

**Como verificar se propagou:**

```bash
# Verificar nameservers atuais
nslookup taocentrodebiomedicina.com.br

# Resultado esperado:
# Server: ns1.hostgator.com.br
# Server: ns2.hostgator.com.br
# Server: ns3.hostgator.com.br
```

**Ou usar ferramenta online:**
- https://www.whatsmydns.net/
- Inserir: taocentrodebiomedicina.com.br
- Verificar se todos os servidores mostram IP da HostGator

---

## 🔒 PASSO 3: CONFIGURAR SSL (HTTPS)

### Via cPanel HostGator

1. **Acessar cPanel**
   - URL: https://www.hostgator.com.br
   - Clicar em "Acessar Painel"

2. **Procurar por SSL/TLS**
   - No cPanel, procurar por "SSL/TLS"
   - Clicar em "Manage SSL sites"

3. **Instalar SSL**
   - Selecionar domínio: taocentrodebiomedicina.com.br
   - Clicar em "Install" (AutoSSL)
   - Aguardar instalação (alguns minutos)

4. **Verificar SSL**
   - Acessar: https://taocentrodebiomedicina.com.br
   - Verificar se tem cadeado verde

### Forçar HTTPS

Para garantir que todos acessem via HTTPS, criar arquivo `.htaccess`:

1. **Via Gerenciador de Arquivos**
   - Acessar cPanel
   - Procurar por "File Manager"
   - Navegar até `public_html`
   - Criar novo arquivo: `.htaccess`

2. **Adicionar Código**
   ```apache
   <IfModule mod_rewrite.c>
   RewriteEngine On
   RewriteCond %{HTTPS} off
   RewriteRule ^(.*)$ https://%{HTTP_HOST}%{REQUEST_URI} [L,R=301]
   </IfModule>
   ```

3. **Salvar Arquivo**
   - Clicar em "Save"

---

## 🧪 PASSO 4: TESTAR CONFIGURAÇÃO

### Verificar Domínio

```bash
# Verificar se domínio está apontando corretamente
nslookup taocentrodebiomedicina.com.br

# Verificar IP
dig taocentrodebiomedicina.com.br

# Verificar registros MX (email)
nslookup -type=MX taocentrodebiomedicina.com.br
```

### Testar no Navegador

1. **Acessar site**
   - URL: https://taocentrodebiomedicina.com.br

2. **Verificações**
   - [ ] Site carrega
   - [ ] Cadeado verde (HTTPS)
   - [ ] Sem mensagens de erro
   - [ ] Todas as imagens aparecem

### Testar SSL

1. **Acessar ferramenta de teste**
   - URL: https://www.sslshopper.com/ssl-checker.html

2. **Inserir domínio**
   - taocentrodebiomedicina.com.br

3. **Verificar resultado**
   - Status: "Certificate is valid"
   - Sem avisos ou erros

---

## 📧 PASSO 5: CONFIGURAR EMAIL (OPCIONAL)

### Criar Email Corporativo

1. **Acessar cPanel**
   - URL: https://www.hostgator.com.br
   - Clicar em "Acessar Painel"

2. **Procurar por "Email Accounts"**
   - No cPanel, procurar por "Email Accounts"
   - Clicar em "Create"

3. **Criar Email**
   - Email: contato@taocentrodebiomedicina.com.br
   - Senha: [criar senha forte]
   - Quota: 500 MB (ou mais)
   - Clicar em "Create Account"

4. **Configurar Cliente de Email**
   - Abrir Thunderbird, Outlook, Gmail, etc.
   - Configurar com:
     - Email: contato@taocentrodebiomedicina.com.br
     - Servidor IMAP: mail.taocentrodebiomedicina.com.br (porta 993)
     - Servidor SMTP: mail.taocentrodebiomedicina.com.br (porta 465)
     - Usuário: contato@taocentrodebiomedicina.com.br
     - Senha: [senha criada]

---

## 🔄 PASSO 6: CONFIGURAR REDIRECIONAMENTO (SE HOUVER DOMÍNIO ANTIGO)

Se tinha site em outro domínio, configurar redirecionamento:

1. **Via .htaccess**
   ```apache
   Redirect 301 / https://taocentrodebiomedicina.com.br/
   ```

2. **Via cPanel**
   - Procurar por "Redirects"
   - Adicionar redirecionamento 301
   - De: domínio antigo
   - Para: taocentrodebiomedicina.com.br

---

## ✅ CHECKLIST DE CONFIGURAÇÃO

- [ ] Nameservers atualizados no registrador
- [ ] Propagação de DNS concluída (24-48 horas)
- [ ] Domínio apontando para HostGator (verificado via nslookup)
- [ ] SSL instalado e ativo
- [ ] HTTPS funcionando (cadeado verde)
- [ ] Site acessível via https://taocentrodebiomedicina.com.br
- [ ] Email corporativo criado (opcional)
- [ ] Redirecionamento configurado (se houver domínio antigo)

---

## 🆘 TROUBLESHOOTING

### Domínio não carrega

**Problema**: Acessar domínio mostra erro 404 ou página em branco

**Soluções**:
1. Verificar se nameservers foram atualizados
2. Aguardar propagação de DNS (até 48 horas)
3. Limpar cache do navegador (Ctrl+Shift+Del)
4. Tentar em navegador diferente
5. Verificar se arquivos foram feitos upload em `public_html`

### SSL não funciona

**Problema**: Cadeado vermelho ou aviso de segurança

**Soluções**:
1. Aguardar 24 horas para ativação do SSL
2. Verificar se domínio está correto
3. Forçar HTTPS via .htaccess
4. Testar em: https://www.sslshopper.com/ssl-checker.html

### Email não funciona

**Problema**: Não consegue enviar/receber emails

**Soluções**:
1. Verificar credenciais (usuário e senha)
2. Verificar servidor (mail.taocentrodebiomedicina.com.br)
3. Verificar porta (993 para IMAP, 465 para SMTP)
4. Verificar se SSL está ativado
5. Contatar suporte HostGator

---

## 📞 SUPORTE

**HostGator Brasil**:
- Chat 24/7: https://www.hostgator.com.br/suporte
- Email: suporte@hostgator.com.br
- Telefone: 0800 941 6000

---

## 📚 REFERÊNCIAS

- **Nameservers HostGator**: https://www.hostgator.com.br/suporte
- **Propagação DNS**: https://www.whatsmydns.net/
- **SSL Checker**: https://www.sslshopper.com/ssl-checker.html
- **Verificar DNS**: https://mxtoolbox.com/

---

**Domínio configurado com sucesso! 🚀**
