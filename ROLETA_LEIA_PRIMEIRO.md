# 🎡 Roleta Premiada - Documentação Completa

## 📋 O que foi criado

Página completa de **Roleta Premiada** com:
- ✅ Hero section responsivo com gradiente roxo
- ✅ Texto em scroll contínuo (GIRO PREMIADO)
- ✅ Seção de prêmios exclusivos com 3 cards com animação
- ✅ Roleta visual giratória
- ✅ Modal de formulário com validação
- ✅ Integração com Google Sheets
- ✅ Responsivo para mobile e desktop

---

## 🚀 Como Usar

### 1. **Acessar a página**
A página está disponível em: `/roleta`

### 2. **Configurar Google Sheets** (IMPORTANTE)

#### Passo 1: Criar a Planilha
1. Acesse [Google Sheets](https://sheets.google.com)
2. Crie uma **nova planilha** chamada "Roleta Premiada"
3. Adicione as colunas na primeira linha:
   ```
   A1: Nome
   B1: Sobrenome
   C1: Email
   D1: Telefone
   E1: Prêmio
   F1: Data
   ```

#### Passo 2: Criar o Apps Script
1. Abra sua planilha Google Sheets
2. Vá para **Extensões → Apps Script**
3. Apague o código padrão e copie o código do arquivo `APPS_SCRIPT.gs` (presente na raiz do projeto)
4. Clique em **Salvar** (Ctrl+S)
5. Dê um nome ao projeto: "Roleta Premiada API"

#### Passo 3: Implantar o Script
1. Clique em **Implantar** (botão azul)
2. Clique em **Nova implantação**
3. Escolha o tipo: **Aplicação Web**
4. Configure assim:
   - **Executar como**: Sua conta Google
   - **Quem tem acesso**: "Qualquer pessoa"
5. Clique em **Implantar**
6. **Copie a URL** fornecida (algo como: `https://script.google.com/macros/s/XXXXXXX/usercopy`)

#### Passo 4: Adicionar URL ao Código
1. Abra o arquivo `src/Roleta.jsx`
2. Na linha 10, encontre:
   ```javascript
   const GOOGLE_SHEETS_URL = 'https://script.google.com/macros/d/YOUR_SCRIPT_ID/usercopy';
   ```
3. Substitua `YOUR_SCRIPT_ID` pela URL **completa** que você copiou
4. **Salve o arquivo**

---

## 🎮 Como Funciona

### Fluxo do Usuário:
1. Usuário acessa `/roleta`
2. Clica no botão "CLIQUE E RODE AGORA" (hero section)
3. Abre um **modal** com formulário
4. Preenche: Nome, Sobrenome, Email, Telefone
5. Clica em "LIBERAR ROLETA"
6. Se for o **primeiro cadastro** com esse email:
   - Modal fecha
   - **Roleta gira** por 4 segundos
   - Mostra resultado (Prata ou Bronze)
7. Aguarda **3 segundos**
8. **Redireciona** para página inicial (`/`)
9. Dados são salvos no **Google Sheets**

### Validações:
- ✅ Campos obrigatórios
- ✅ Email única (não pode registrar 2x com o mesmo email)
- ✅ Dados salvos localmente e na nuvem

---

## 🎲 Configuração da Roleta

### Prêmios e Probabilidades
O arquivo `Roleta.jsx` já vem com:
- **Ouro**: 0% (nunca cai)
- **Prata**: 50%
- **Bronze**: 50%

Para **alterar os prêmios**, edite a linha 8:
```javascript
const PRIZES = [
  { name: 'Ouro', color: '#FFD700', percentage: 0 },
  { name: 'Prata', color: '#C0C0C0', percentage: 50 },
  { name: 'Bronze', color: '#CD7F32', percentage: 50 }
];
```

### Exemplo com 3 prêmios diferentes:
```javascript
const PRIZES = [
  { name: 'iPhone', color: '#000000', percentage: 10 },
  { name: 'AirPods', color: '#FFFFFF', percentage: 30 },
  { name: 'Bônus R$ 100', color: '#FFD700', percentage: 60 }
];
```

---

## 🎨 Cores Personalizadas

As cores estão no arquivo `Roleta.css` como variáveis:

```css
:root {
  --primary-purple: #8b2e8e;      /* Roxo principal */
  --border-purple: #b041b0;       /* Roxo das bordas */
  --dark-bg: #0a0a0a;             /* Fundo escuro */
  --dark-gray: #1a1a1a;           /* Cinza escuro */
  --light-gray: #2a2a2a;          /* Cinza claro */
}
```

---

## 📱 Responsivo

A página está **totalmente responsiva**:
- Desktop: 1200px+
- Tablet: 768px - 1199px
- Mobile: até 480px

As animações e tamanhos se ajustam automaticamente!

---

## ⏱️ Timing de Animações

- **Roleta gira**: 4 segundos
- **Resultado fica visível**: 3 segundos
- **Redirecionamento**: Automático

Para ajustar, edite no `Roleta.jsx`:
```javascript
setTimeout(() => {
  setPrizeWon(prize);
  setSubmitted(true);

  sendToGoogleSheets(formData, prize.name);

  setTimeout(() => {
    navigate('/');
  }, 3000);  // ← Tempo antes de redirecionar
}, 4000);    // ← Tempo de rotação
```

---

## 🔄 Armazenamento de Dados

### Localmente (Navegador)
- Emails registrados são salvos em `localStorage`
- Impede múltiplos cadastros do mesmo email

### Na Nuvem (Google Sheets)
- Todos os dados são enviados para a planilha
- Histórico completo de participações

---

## 🐛 Troubleshooting

### "Erro ao conectar Google Sheets"
- [ ] Verifique se a URL está correta em `Roleta.jsx`
- [ ] Certifique-se de que o Apps Script foi implantado como "Qualquer pessoa"
- [ ] Verifique a aba "Execuções" no Apps Script para ver erros

### "Email já registrado" mas quero testar de novo
```javascript
// Abra o console (F12) e execute:
localStorage.clear();
// Recarregue a página
```

### Roleta não gira
- Preencheu todos os campos do formulário?
- O formulário foi submetido corretamente?

### Dados não aparecem na planilha
- Verifique se o Apps Script tem as colunas certas (A-F)
- Verifique se a permissão está como "Qualquer pessoa"
- Teste a função `testDoPost()` no Apps Script

---

## 📊 Visualizar Dados no Google Sheets

Após alguns cadastros, sua planilha terá:

```
| Nome    | Sobrenome | Email              | Telefone      | Prêmio  | Data                  |
|---------|-----------|-------------------|---------------|---------|----------------------|
| João    | Silva     | joao@email.com    | (11) 98765    | Prata   | 02/06/2026 15:30:45  |
| Maria   | Santos    | maria@email.com   | (21) 99876    | Bronze  | 02/06/2026 15:35:12  |
```

---

## 🎯 Próximos Passos (Opcional)

### 1. Adicionar mais prêmios
Edite `PRIZES` e ajuste as porcentagens

### 2. Enviar email de confirmação
Adicione Google Gmail API ao Apps Script

### 3. Página de sucesso customizada
Crie uma nova página em vez de redirecionar para `/`

### 4. Analytics
Adicione Google Analytics para rastrear conversões

---

## ✅ Checklist Final

- [ ] Criar Planilha Google Sheets
- [ ] Copiar Apps Script para o Google Apps Script
- [ ] Implantar o script e copiar a URL
- [ ] Atualizar a URL em `src/Roleta.jsx` (linha 10)
- [ ] Testar a página em `/roleta`
- [ ] Preencher o formulário
- [ ] Verificar os dados na planilha
- [ ] Personalize cores e textos conforme necessário

---

## 📞 Suporte

Para dúvidas sobre:
- **React**: https://react.dev
- **Google Apps Script**: https://developers.google.com/apps-script
- **Google Sheets**: https://support.google.com/docs/

Pronto! Sua roleta premiada está funcionando! 🎉
