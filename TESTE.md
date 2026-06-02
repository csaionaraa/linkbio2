# 🧪 Guia de Teste - Roleta Premiada

## Teste Local (Sem Google Sheets)

Se ainda não tiver configurado o Google Sheets, você pode testar localmente clicando em `/roleta`.

### Passos para Testar:

1. **Acesse a página**
   - URL: `http://localhost:5173/roleta` (ou a porta que seu Vite usa)

2. **Teste a seção Hero**
   - [ ] Título "ROLETA PREMIADA GIRE E GANHE!" visível
   - [ ] Subtítulo visível
   - [ ] Botão "CLIQUE E RODE AGORA" visível com glow roxo
   - [ ] Ao passar mouse no botão, ele brilha mais

3. **Teste o Scroll de Texto**
   - [ ] Texto "GIRO PREMIADO •" aparece rolando infinitamente
   - [ ] Cor roxa
   - [ ] Bordas roxas no container
   - [ ] Fundo preto

4. **Teste a Seção de Prêmios**
   - [ ] Título "PRÊMIOS EXCLUSIVOS" visível
   - [ ] 3 cards lado a lado (desktop) ou empilhados (mobile)
   - [ ] Ícones flutuam para cima e para baixo
   - [ ] Ao passar mouse, cards levantam e brilham

5. **Teste a Roleta**
   - [ ] Roleta aparece (círculo com cores Ouro, Prata, Bronze)
   - [ ] Triângulo roxo no topo (pointer)
   - [ ] Botão "CLIQUE E RODE AGORA" abaixo da roleta

6. **Teste o Formulário**
   - [ ] Clique no botão "CLIQUE E RODE AGORA" (hero ou roleta)
   - [ ] Modal abre com animação pop-in
   - [ ] Fundo fica escuro e desfocado (blur)
   - [ ] 4 campos: Nome, Sobrenome, Email, Telefone
   - [ ] Botão "LIBERAR ROLETA" roxo
   - [ ] Botão X no canto superior direito

7. **Teste a Validação do Formulário**
   - [ ] Deixe um campo em branco e clique em "LIBERAR ROLETA"
   - [ ] Deve aparecer alerta: "Por favor, preencha todos os campos!"
   - [ ] Preencha todos os campos corretamente

8. **Teste a Duplicação de Email**
   - [ ] Preencha o formulário com um email (ex: teste@email.com)
   - [ ] Clique em "LIBERAR ROLETA"
   - [ ] Roleta gira e mostra resultado (Prata ou Bronze)
   - [ ] Aguarde 3 segundos e redirecion para /
   - [ ] Volte a `/roleta`
   - [ ] Tente se registrar com o **mesmo email** novamente
   - [ ] Deve aparecer alerta: "Este email já foi registrado!"

9. **Teste a Rotação da Roleta**
   - [ ] Use um novo email
   - [ ] Preencha o formulário
   - [ ] Clique em "LIBERAR ROLETA"
   - [ ] Roleta gira por ~4 segundos
   - [ ] Mostra resultado: "Você ganhou: [Prata ou Bronze]"
   - [ ] **Nunca deve aparecer Ouro** ✓

10. **Teste o Redirecionamento**
    - [ ] Após ver o resultado, aguarde 3 segundos
    - [ ] Página redireciona automaticamente para `/` (Home)

11. **Teste Responsivo (F12 - Device Toolbar)**
    - [ ] Desktop (1200px+): 3 cards lado a lado
    - [ ] Tablet (768px): 2 cards + 1
    - [ ] Mobile (480px): Cards empilhados, roleta menor

---

## Teste com Google Sheets

Após configurar o Google Sheets e adicionar a URL em `Roleta.jsx`:

### 1. **Verificar Dados**
   - [ ] Preencha e submit o formulário
   - [ ] Abra sua planilha Google Sheets
   - [ ] Clique em "Roleta Premiada" (sheet)
   - [ ] Verifique se os dados aparecem na linha 2+:
     ```
     | João | Silva | joao@email.com | (11) 98765 | Prata | 02/06/2026 15:30 |
     ```

### 2. **Verificar Campos**
   - [ ] Coluna A: Nome (correto?)
   - [ ] Coluna B: Sobrenome (correto?)
   - [ ] Coluna C: Email (correto?)
   - [ ] Coluna D: Telefone (correto?)
   - [ ] Coluna E: Prêmio (Prata ou Bronze, nunca Ouro?)
   - [ ] Coluna F: Data (formato correto?)

### 3. **Testar Múltiplos Registros**
   - [ ] Faça 5+ registros com emails diferentes
   - [ ] Todos os dados devem aparecer na planilha
   - [ ] Prêmios: ~50% Prata, ~50% Bronze

### 4. **Teste de Probabilidade** (Opcional)
   - [ ] Se fizer 20+ registros:
     - Contagem: Quantos Prata? Quantos Bronze?
     - Esperado: ~10 Prata, ~10 Bronze
     - Tolerância: ±3 (8-12 cada)

### 5. **Teste de Erro** (Simular erro no Apps Script)
   - [ ] Vá em Google Apps Script
   - [ ] Comente a linha de append: `// sheet.appendRow(...)`
   - [ ] Tente registrar novamente
   - [ ] Abra console (F12)
   - [ ] Você deve ver um erro no console (network error ou similar)
   - [ ] Descomente a linha depois

---

## Checklist de Testes - Desktop

```
SEÇÃO HERO
[x] Hero carrega com fade animation
[x] Título brilha com shimmer
[x] Subtítulo visível
[x] Botão funciona
[x] Ao hover, botão brilha mais

SCROLL TEXT
[x] Texto rola infinitamente
[x] Cor roxa
[x] Fundo preto com bordas roxas

PRÊMIOS
[x] Título e subtítulo visíveis
[x] 3 cards lado a lado
[x] Ícones flutuam
[x] Hover levanta os cards
[x] Borda roxa aparece no hover

ROLETA
[x] Roleta exibe 3 cores (Ouro, Prata, Bronze)
[x] Pointer no topo (triângulo roxo)
[x] Botão "CLIQUE E RODE AGORA"

MODAL
[x] Abre com animação
[x] 4 inputs: Nome, Sobrenome, Email, Tel
[x] Fundo blur
[x] Botão X fecha modal
[x] Click fora fecha modal

FORMULÁRIO
[x] Validação de campos vazios
[x] Validação de email duplicado
[x] Ao submit, roleta gira
[x] Resultado mostra Prata ou Bronze

REDIRECIONAMENTO
[x] Após 3 segundos, volta para /
[x] Dados salvos no localStorage
[x] Dados enviados para Google Sheets
```

## Checklist de Testes - Mobile

```
SEÇÃO HERO
[x] Texto menor mas legível
[x] Botão toca corretamente

SCROLL TEXT
[x] Rola normalmente em tela pequena
[x] Visível em mobile

PRÊMIOS
[x] Cards empilhados (1 por linha)
[x] Touch hover funciona
[x] Responsivo ao tamanho

ROLETA
[x] Roleta é menor (~200px)
[x] Ainda giratória corretamente
[x] Resultado visível

MODAL
[x] Modal abre corretamente
[x] Inputs legíveis
[x] Teclado não cobre campos
[x] Botão submit acessível

GERAL
[x] Nenhuma barra horizontal de scroll
[x] Todos os elementos visíveis
[x] Toques funcionam normalmente
```

---

## Debugging

### Se a Roleta não Girar:
1. Abra **F12 → Console**
2. Procure por erros em vermelho
3. Verifique se `isSpinning` está `false`
4. Verifique se o formulário foi validado

### Se Dados não Aparecem no Google Sheets:
1. Verifique a URL em `Roleta.jsx` linha 10
2. Vá em Google Apps Script → Execuções
3. Procure por erros na execução
4. Teste a função `testDoPost()` manualmente
5. Verifique as permissões do script (deve ser "Qualquer pessoa")

### Se Email não fica Bloqueado:
1. Abra **F12 → Storage → LocalStorage**
2. Procure por chave `registeredEmails`
3. Deve conter um array com emails: `["teste@email.com"]`
4. Se vazio, localStorage foi limpo

### Se Modal não Fecha:
1. Verifique se o formulário foi enviado corretamente
2. Clique no botão X para fechar manualmente
3. Ou clique fora do modal
4. Se não funcionar, verifique o console para erros

---

## Teste de Performance

### Lighthouse (F12 → Lighthouse)
- [ ] Performance: >90
- [ ] Accessibility: >90
- [ ] Best Practices: >90

### Velocidade de Carregamento
- [ ] Página carrega em <2 segundos (com Wi-Fi normal)
- [ ] Scroll é suave (60fps)
- [ ] Animações são fluídas

---

## Teste em Diferentes Navegadores

- [ ] Chrome/Edge (desktop)
- [ ] Firefox (desktop)
- [ ] Safari (iPhone)
- [ ] Chrome Mobile (Android)

---

Está tudo pronto para testar! 🚀
