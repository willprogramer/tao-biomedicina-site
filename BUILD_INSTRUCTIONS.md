# Instruções de Build e Exportação
## Tao Centro de Biomedicina

---

## 📦 PREPARAR PROJETO PARA HOSTGATOR

### Passo 1: Fazer Build do Projeto

```bash
# Navegar até o diretório do projeto
cd /home/ubuntu/tao-biomedicina-site

# Fazer build para produção
npm run build
```

**Resultado esperado**: Pasta `dist/` criada com todos os arquivos otimizados

### Passo 2: Verificar Arquivos Gerados

```bash
# Listar arquivos da pasta dist
ls -la dist/

# Verificar tamanho total
du -sh dist/
```

**Arquivos esperados**:
- `index.html` - Página principal
- `assets/` - Pasta com CSS, JS e imagens
- `robots.txt` - Arquivo de rastreamento
- `sitemap.xml` - Mapa do site
- `schema.json` - Dados estruturados

### Passo 3: Comprimir Arquivos (Opcional)

Se preferir fazer upload de um único arquivo ZIP:

```bash
# Entrar na pasta dist
cd dist/

# Criar arquivo ZIP
zip -r ../tao-biomedicina.zip .

# Voltar ao diretório anterior
cd ..

# Verificar tamanho do ZIP
ls -lh tao-biomedicina.zip
```

---

## 📤 OPÇÕES DE UPLOAD

### Opção A: Upload Individual (Recomendado)

1. **Abrir Gerenciador de Arquivos HostGator**
   - Acessar cPanel
   - Procurar por "File Manager"
   - Navegar até `public_html`

2. **Fazer Upload dos Arquivos**
   - Selecionar todos os arquivos de `dist/`
   - Fazer drag-and-drop ou clicar "Upload"
   - Aguardar conclusão

3. **Verificar Upload**
   - Confirmar que `index.html` está em `public_html`
   - Confirmar que pasta `assets/` existe

### Opção B: Upload via ZIP (Mais Rápido)

1. **Fazer Upload do ZIP**
   - Fazer upload de `tao-biomedicina.zip` para `public_html`

2. **Descompactar no HostGator**
   - Clicar com botão direito no ZIP
   - Selecionar "Extract"
   - Aguardar conclusão

3. **Remover Arquivo ZIP**
   - Deletar `tao-biomedicina.zip` (opcional)

### Opção C: Upload via FTP (Mais Técnico)

1. **Baixar FileZilla**
   - https://filezilla-project.org/

2. **Configurar Conexão FTP**
   - Abrir FileZilla
   - File → Site Manager
   - Criar novo site:
     - Host: ftp.taocentrodebiomedicina.com.br
     - Protocolo: FTP
     - Usuário: [credencial FTP]
     - Senha: [credencial FTP]
     - Porta: 21

3. **Conectar e Fazer Upload**
   - Clicar "Connect"
   - Navegar até `public_html`
   - Fazer drag-and-drop dos arquivos de `dist/`

---

## 🔧 CONFIGURAÇÕES IMPORTANTES

### Arquivo .htaccess (Forçar HTTPS)

Se não existir, criar arquivo `.htaccess` em `public_html`:

```apache
<IfModule mod_rewrite.c>
RewriteEngine On
RewriteCond %{HTTPS} off
RewriteRule ^(.*)$ https://%{HTTP_HOST}%{REQUEST_URI} [L,R=301]
</IfModule>
```

### Permissões de Arquivo

**Pastas**: 755
**Arquivos**: 644

No Gerenciador de Arquivos HostGator:
1. Clicar com botão direito na pasta/arquivo
2. Selecionar "Permissions"
3. Definir permissões corretas

---

## 🧪 TESTAR ANTES DE FAZER UPLOAD

### Testar Localmente

```bash
# Instalar servidor local (se não tiver)
npm install -g http-server

# Servir pasta dist localmente
cd dist/
http-server

# Acessar em: http://localhost:8080
```

### Verificações

- [ ] Site carrega corretamente
- [ ] Todas as imagens aparecem
- [ ] CSS está aplicado
- [ ] Links funcionam
- [ ] Menu funciona
- [ ] Botões funcionam

---

## 📊 TAMANHO DOS ARQUIVOS

**Tamanho esperado da pasta `dist/`**: 2-5 MB

Se estiver muito grande (>10 MB):
- Verificar se há imagens não otimizadas
- Comprimir imagens antes do build
- Remover arquivos desnecessários

---

## 🚀 PRÓXIMOS PASSOS

1. ✅ Fazer build do projeto
2. ✅ Verificar arquivos gerados
3. ✅ Fazer upload para HostGator
4. ✅ Configurar SSL
5. ✅ Testar site ao vivo

---

## 🆘 PROBLEMAS COMUNS

### Build falha
```
Solução:
1. Verificar se todas as dependências estão instaladas
2. Executar: npm install
3. Tentar build novamente
```

### Arquivos muito grandes
```
Solução:
1. Comprimir imagens
2. Remover arquivos desnecessários
3. Verificar se há duplicatas
```

### Upload lento
```
Solução:
1. Usar arquivo ZIP (mais rápido)
2. Fazer upload em horário de menor tráfego
3. Usar FTP em vez de web interface
```

---

**Pronto para fazer upload! 🚀**
