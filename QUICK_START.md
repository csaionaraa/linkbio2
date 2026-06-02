# 🎯 Quick Start - Roleta Premiada

## ⚡ Em 5 Minutos

### 1️⃣ Acessar a Página
```
http://localhost:5173/roleta
```

### 2️⃣ Configurar Google Sheets (2 min)

**A. Criar Planilha:**
- Acesse https://sheets.google.com
- Nova planilha: "Roleta Premiada"
- Colunas: Nome | Sobrenome | Email | Telefone | Prêmio | Data

**B. Criar Apps Script:**
- Extensões → Apps Script
- Copie o código do arquivo `APPS_SCRIPT.gs`
- Salve (Ctrl+S)

**C. Implantar:**
- Clique "Implantar"
- Tipo: "Aplicação Web"
- Acesso: "Qualquer pessoa"
- **Copie a URL** fornecida

### 3️⃣ Colar a URL (1 min)
- Abra: `src/Roleta.jsx`
- Linha 10: Substitua `YOUR_SCRIPT_ID` pela URL copiada
- Salve (Ctrl+S)

### 4️⃣ Pronto! 🎉
- Acesse `/roleta` novamente
- Teste o formulário
- Verifique dados na planilha Google

---

## 📁 Arquivos Criados

```
src/
  ├── Roleta.jsx          ← Componente principal
  └── Roleta.css          ← Estilos e animações

Na raiz:
  ├── ROLETA_LEIA_PRIMEIRO.md    ← COMECE AQUI
  ├── ROLETA_SETUP.md            ← Setup Google Sheets
  ├── TESTE.md                    ← Casos de teste
  ├── CUSTOMIZACOES.md            ← Customizações avançadas
  ├── VISUAL_GUIDE.md             ← Estrutura visual
  └── APPS_SCRIPT.gs              ← Código para Google Apps Script
```

---

## 🎮 Funcionalidades

✅ Hero section com texto brilhante (shimmer)
✅ Texto em scroll infinito (GIRO PREMIADO)
✅ 3 cards de prêmios com animação de shine
✅ Roleta giratória com 3 prêmios
✅ Modal de formulário popup
✅ Validação: Sem campos vazios
✅ Validação: Um email = um cadastro
✅ Distribuição: 50% Prata, 50% Bronze, 0% Ouro
✅ Google Sheets integrado
✅ Responsivo (Mobile, Tablet, Desktop)
✅ Animações suaves

---

## 🔧 Customizações Mais Comuns

### Mudar Cores
`src/Roleta.css` linhas 4-5:
```css
--primary-purple: #seu-roxo;
--border-purple: #seu-roxo-claro;
```

### Mudar Textos
`src/Roleta.jsx` linhas 45-79:
```javascript
<h1>SEU TÍTULO</h1>
<p>SEU SUBTÍTULO</p>
```

### Mudar Prêmios
`src/Roleta.jsx` linha 8:
```javascript
const PRIZES = [
  { name: 'Seu Prêmio', color: '#COR', percentage: 0 },
  // ...
];
```

### Mudar Redirecionamento
`src/Roleta.jsx` linha 132:
```javascript
navigate('/sua-pagina');  // Em vez de '/'
```

---

## 📊 Probabilidades

Cada vez que o usuário gira:

| Prêmio | Chance |
|--------|--------|
| Ouro   | 0%     |
| Prata  | 50%    |
| Bronze | 50%    |

---

## 📋 Checklist de Setup

- [ ] Criei uma planilha Google Sheets
- [ ] Criei um Apps Script
- [ ] Implantei o Apps Script
- [ ] Copiei a URL do Apps Script
- [ ] Colei a URL em `src/Roleta.jsx` linha 10
- [ ] Testei em `/roleta`
- [ ] Preenchi o formulário
- [ ] Vi o resultado na roleta
- [ ] Verifiquei os dados na planilha Google

---

## 🆘 Problema? Aqui está a Solução

| Problema | Solução |
|----------|---------|
| Dados não aparecem na planilha | Verificar URL em `Roleta.jsx` |
| Email duplicado não funciona | Limpar localStorage (F12) |
| Modal não abre | Verificar console para erros (F12) |
| Roleta não gira | Preencher todos os campos |
| Cores estranhas | Verificar `Roleta.css` |
| Texto fora do lugar no mobile | Zoom browser em 100% |

---

## 🚀 Próximos Passos

1. **Testar Completamente**
   - Leia `TESTE.md`

2. **Customizar Aparência**
   - Leia `CUSTOMIZACOES.md`

3. **Entender o Design**
   - Leia `VISUAL_GUIDE.md`

4. **Deploy para Produção**
   - Configure seu servidor/hosting
   - Mantenha o Google Sheets ativo
   - Teste tudo novamente

---

## 💡 Dicas

- **Mude cores regularmente** para manter fresco
- **Teste no mobile** com `F12 → Device Toolbar`
- **Monitore Google Sheets** para ver conversões
- **Ofereça prêmios reais** para engagement
- **Publique a página** no seu site ou redes sociais

---

## 📞 Documentação Completa

Leia os arquivos nesta ordem:

1. **ROLETA_LEIA_PRIMEIRO.md** ← COMECE AQUI
2. **TESTE.md** ← Como testar
3. **CUSTOMIZACOES.md** ← Como mudar
4. **VISUAL_GUIDE.md** ← Como funciona visualmente

---

## 🎉 Pronto!

Sua roleta está funcionando. Agora é com você! 

Bom sucesso! 🚀

---

**Última atualização:** 02/06/2026
**Versão:** 1.0
**Status:** ✅ Pronta para produção
