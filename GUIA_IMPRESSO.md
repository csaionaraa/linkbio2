# 🖨️ GUIA IMPRESSO - Roleta Premiada

*Print este arquivo para referência rápida*

---

## 🎯 COMECE AQUI - 3 PASSOS (16 MINUTOS)

```
┌──────────────────────────────────────────────────────┐
│  PASSO 1: CRIAR GOOGLE SHEETS                        │
├──────────────────────────────────────────────────────┤
│                                                      │
│ 1. Abra https://sheets.google.com                   │
│ 2. Clique "Criar nova planilha"                     │
│ 3. Nome: "Roleta Premiada"                          │
│ 4. Adicione colunas (linha 1):                       │
│    A1: Nome                                          │
│    B1: Sobrenome                                     │
│    C1: Email                                         │
│    D1: Telefone                                      │
│    E1: Prêmio                                        │
│    F1: Data                                          │
│                                                      │
│ ⏱️  Tempo: 3 minutos                                 │
└──────────────────────────────────────────────────────┘

┌──────────────────────────────────────────────────────┐
│  PASSO 2: CRIAR GOOGLE APPS SCRIPT                   │
├──────────────────────────────────────────────────────┤
│                                                      │
│ 1. Na sua planilha:                                 │
│    Extensões → Apps Script                          │
│ 2. Apague tudo (Ctrl+A, Delete)                     │
│ 3. Copie o código do arquivo: APPS_SCRIPT.gs        │
│ 4. Cole tudo no Apps Script                         │
│ 5. Clique Salvar (Ctrl+S)                           │
│ 6. Nome do projeto: "Roleta Premiada API"           │
│                                                      │
│ ⏱️  Tempo: 5 minutos                                 │
└──────────────────────────────────────────────────────┘

┌──────────────────────────────────────────────────────┐
│  PASSO 3: IMPLANTAR GOOGLE APPS SCRIPT              │
├──────────────────────────────────────────────────────┤
│                                                      │
│ 1. Clique em "Implantar" (botão azul)              │
│ 2. Clique "Nova implantação"                        │
│ 3. Escolha tipo: "Aplicação Web"                    │
│ 4. Configure:                                       │
│    Executar como: [Sua conta Google]                │
│    Quem tem acesso: "Qualquer pessoa"              │
│ 5. Clique "Implantar"                               │
│ 6. Copie a URL fornecida                            │
│    (Pareça: https://script.google.com/macros/...)   │
│                                                      │
│ ⏱️  Tempo: 5 minutos                                 │
└──────────────────────────────────────────────────────┘

┌──────────────────────────────────────────────────────┐
│  PASSO 4: ADICIONAR URL NO CÓDIGO                   │
├──────────────────────────────────────────────────────┤
│                                                      │
│ 1. Abra: src/Roleta.jsx                            │
│ 2. Vá para linha 10                                 │
│ 3. Procure por:                                     │
│    const GOOGLE_SHEETS_URL = '...'                  │
│ 4. Substitua YOUR_SCRIPT_ID pela URL copiada       │
│ 5. Salve (Ctrl+S)                                  │
│                                                      │
│ ⏱️  Tempo: 1 minuto                                  │
└──────────────────────────────────────────────────────┘

┌──────────────────────────────────────────────────────┐
│  PASSO 5: TESTAR                                    │
├──────────────────────────────────────────────────────┤
│                                                      │
│ 1. Acesse: http://localhost:5173/roleta             │
│ 2. Clique no botão "CLIQUE E RODE AGORA"            │
│ 3. Preencha o formulário                            │
│ 4. Clique "LIBERAR ROLETA"                          │
│ 5. Veja a roleta girar                              │
│ 6. Verifique o resultado                            │
│ 7. Abra Google Sheets e veja os dados!              │
│                                                      │
│ ⏱️  Tempo: 2 minutos                                 │
└──────────────────────────────────────────────────────┘

TOTAL: 16 MINUTOS ✅
```

---

## 🔧 TROUBLESHOOTING RÁPIDO

### "Dados não aparecem no Google Sheets"
**Solução:**
1. Verifique a URL em `Roleta.jsx` linha 10
2. Certifique-se de que é a URL COMPLETA
3. Verifique em Google Apps Script → Execuções
4. Procure por erros em vermelho

### "Erro ao preencher o formulário"
**Solução:**
1. Abra F12 (console)
2. Procure por erros em vermelho
3. Verifique se todos os campos estão preenchidos
4. Email já foi registrado?

### "Email duplicado não funciona"
**Solução:**
1. Abra F12 → Storage → Local Storage
2. Procure por "registeredEmails"
3. Se estiver lá, o localStorage está funcionando
4. Para limpar: `localStorage.clear()` no console

### "Cores estranhas/não aparecem"
**Solução:**
1. Limpe o cache: Ctrl+Shift+R (hard refresh)
2. Verifique `Roleta.css`
3. Verifique se o arquivo foi salvo corretamente

---

## 🎨 CUSTOMIZAÇÕES RÁPIDAS (2 MINUTOS CADA)

### Mudar Cor Roxa para Outra
```javascript
// Arquivo: Roleta.css (linhas 4-5)

--primary-purple: #SEU-COR-AQUI;
--border-purple: #SEU-COR-CLARO-AQUI;

// Exemplos:
// Azul: #0066ff
// Verde: #00CC00
// Vermelho: #FF0000
```

### Mudar Títulos
```javascript
// Arquivo: Roleta.jsx

// Linha 45
<h1>SEU TÍTULO AQUI</h1>

// Linha 48
<p>SEU SUBTÍTULO AQUI</p>
```

### Mudar Textos dos Botões
```javascript
// Arquivo: Roleta.jsx (linha 53-54)

<span className="btn-text">MEU BOTÃO →</span>
<span className="btn-subtitle">MEU SUBTÍTULO</span>
```

### Mudar Prêmios
```javascript
// Arquivo: Roleta.jsx (linha 8)

const PRIZES = [
  { name: 'Seu Prêmio 1', color: '#COR1', percentage: 0 },
  { name: 'Seu Prêmio 2', color: '#COR2', percentage: 50 },
  { name: 'Seu Prêmio 3', color: '#COR3', percentage: 50 }
];
```

---

## 📋 CHECKLIST FINAL

```
SETUP
☐ Google Sheets criada
☐ Apps Script copiado
☐ Apps Script implantado
☐ URL copiada da implantação
☐ URL colada em Roleta.jsx linha 10

TESTE
☐ Página /roleta abre
☐ Botão abre modal
☐ Formulário valida
☐ Roleta gira
☐ Resultado mostra
☐ Dados aparecem no Google Sheets

VERIFICAÇÃO
☐ Teste em desktop (1920px)
☐ Teste em tablet (768px)
☐ Teste em mobile (375px)
☐ Teste com F12 aberto (console limpo)
☐ Teste com múltiplos emails

PRONTO PARA PRODUÇÃO
☐ Cores customizadas
☐ Textos customizados
☐ Prêmios reais adicionados
☐ Google Sheets funcionando
☐ Todas funcionalidades testadas
```

---

## 📞 RÁPIDA REFERÊNCIA

**Arquivo de Componente:** `src/Roleta.jsx`
**Arquivo de Estilos:** `src/Roleta.css`
**Google Sheets URL:** Você configurou
**Google Apps Script:** Você implantou

**Porta Desenvolvimento:** localhost:5173
**Rota:** /roleta

---

## 🎯 PRÓXIMAS AÇÕES (Ordem de Importância)

```
1. ⭐ HOJE: Setup Google Sheets + testar (16 min)
2. HOJE: Customizar cores (2 min)
3. HOJE: Customizar textos (2 min)
4. ESSA SEMANA: Adicionar prêmios reais (5 min)
5. ESSA SEMANA: Monitorar Google Sheets
6. PRÓXIMAS SEMANAS: Deploy produção
```

---

## 💡 DICAS PROFISSIONAIS

1. **Aumente a oferta de prêmios**
   → 50% chance gera interesse
   → Faça prêmios reais e valiosos

2. **Monitore os dados**
   → Google Sheets atualiza em tempo real
   → Veja qual prêmio é mais ganho

3. **Teste em mobile**
   → F12 → Device Toolbar
   → Confirme que funciona tudo

4. **Customize para sua marca**
   → Mudanças de cores (2 min)
   → Mudanças de textos (2 min)

5. **Promova a roleta**
   → Link: seu-site.com/roleta
   → QR code para mobile
   → Redes sociais

---

## ✨ PRONTO!

Você tem tudo que precisa. Boa sorte! 🚀

---

**Status:** ✅ Pronto para Produção
**Data:** 02/06/2026
**Versão:** 1.0

Para dúvidas, consulte: **INDEX.md**
