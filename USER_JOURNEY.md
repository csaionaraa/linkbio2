# 📱 User Journey - Roleta Premiada

## Fluxo Completo do Usuário

```
┌────────────────────────────────────────┐
│    USUÁRIO ACESSA /roleta              │
└────────────────────────────────────────┘
              ↓
┌────────────────────────────────────────┐
│    TELA 1: HOME (Hero Section)         │
│                                        │
│  ROLETA PREMIADA GIRE E GANHE!         │
│  (Título com shimmer)                  │
│                                        │
│  Gire a roleta exclusiva...            │
│  (Subtítulo)                           │
│                                        │
│  ┌──────────────────────────┐          │
│  │ CLIQUE E RODE AGORA → │  │          │
│  │ 100% GRATUITO          │          │
│  └──────────────────────────┘          │
│                                        │
│  [Clica aqui] ←─────────────┐          │
└────────────────────────────────────────┘
              │
              │ CLICK
              ↓
┌────────────────────────────────────────┐
│    TELA 2: SCROLL TEXT SECTION          │
│                                        │
│  ┌──────────────────────────────────┐  │
│  │ GIRO PREMIADO • GIRO PREMIADO •  │  │
│  │ (Em scroll contínuo)             │  │
│  └──────────────────────────────────┘  │
│  (Bordas roxas)                        │
│                                        │
└────────────────────────────────────────┘
         (User scrolls down)
              ↓
┌────────────────────────────────────────┐
│   TELA 3: PRÊMIOS EXCLUSIVOS           │
│                                        │
│  PRÊMIOS EXCLUSIVOS                    │
│  Confira os prêmios que pode ganhar    │
│                                        │
│  ┌──────────┐ ┌──────────┐ ┌────────┐ │
│  │    🏅   │ │    💎    │ │   🎁   │ │
│  │ Prêmios │ │ Créditos │ │Surpres │ │
│  └──────────┘ └──────────┘ └────────┘ │
│  (Ao hover: levantam e brilham)       │
│                                        │
└────────────────────────────────────────┘
         (User scrolls down)
              ↓
┌────────────────────────────────────────┐
│    TELA 4: SEÇÃO ROLETA                │
│                                        │
│  GIRE A ROLETA                         │
│  Clique no botão e descubra!           │
│                                        │
│        △  (Pointer)                    │
│       ╱ ╲                              │
│      ╱   ╲                             │
│     │  O  │                            │
│     │ P R │  O = Ouro                  │
│     │  R  │  P = Prata                 │
│      ╲   ╱  R = Bronze                 │
│       ╲ ╱                              │
│        ╲                               │
│                                        │
│  ┌──────────────────────┐              │
│  │ CLIQUE E RODE AGORA  │ ← [Click]   │
│  └──────────────────────┘              │
│                                        │
└────────────────────────────────────────┘
              │
              │ CLICK
              ↓
┌────────────────────────────────────────┐
│   TELA 5: MODAL - FORMULÁRIO           │
│   ┌────────────────────────────────┐   │
│   │ Libere sua Roleta         [✕]  │   │
│   ├────────────────────────────────┤   │
│   │                                │   │
│   │  ┌──────────────────────────┐  │   │
│   │  │ Nome                     │  │   │
│   │  └──────────────────────────┘  │   │
│   │                                │   │
│   │  ┌──────────────────────────┐  │   │
│   │  │ Sobrenome                │  │   │
│   │  └──────────────────────────┘  │   │
│   │                                │   │
│   │  ┌──────────────────────────┐  │   │
│   │  │ Email                    │  │   │
│   │  └──────────────────────────┘  │   │
│   │                                │   │
│   │  ┌──────────────────────────┐  │   │
│   │  │ Telefone                 │  │   │
│   │  └──────────────────────────┘  │   │
│   │                                │   │
│   │  ┌──────────────────────────┐  │   │
│   │  │  LIBERAR ROLETA   ← [Click] │   │
│   │  └──────────────────────────┘  │   │
│   │                                │   │
│   └────────────────────────────────┘   │
│   (Fundo escuro com blur)              │
│                                        │
│   [Validações Aqui]                    │
│   ✗ Campo vazio? → Alerta              │
│   ✗ Email duplicado? → Alerta          │
│   ✓ Tudo OK? → Próximo passo           │
│                                        │
└────────────────────────────────────────┘
              │
              │ Submit OK
              ↓
         (Modal fecha)
              ↓
┌────────────────────────────────────────┐
│   TELA 6: ROLETA GIRANDO (4 seg)       │
│                                        │
│        △ Pointer                       │
│       ╱ ╲                              │
│      ╱   ╲ ↺ GIRANDO                   │
│     │  O~~  │ (Animação)               │
│     │ R~~  │                           │
│     │  ~~P │                           │
│      ╲   ╱                             │
│       ╲ ╱                              │
│                                        │
│  ⏱️  Aguarde... (4 segundos)           │
│                                        │
└────────────────────────────────────────┘
              ↓
         (4 segundos passam)
              ↓
┌────────────────────────────────────────┐
│   TELA 7: RESULTADO (3 seg visível)    │
│                                        │
│        △ Pointer                       │
│       ╱ ╲                              │
│      ╱   ╲                             │
│     │ O   │ ← Pointer aponta AQUI     │
│     │P[R] │                           │
│     │  R  │   PRATA ou BRONZE         │
│      ╲   ╱                             │
│       ╲ ╱                              │
│                                        │
│   ┌────────────────────────────────┐  │
│   │ Parabéns! 🎉                   │  │
│   │ Você ganhou: PRATA              │  │
│   │ Redirecionando em breve...      │  │
│   └────────────────────────────────┘  │
│                                        │
│  ⏱️  Aguarde 3 segundos...             │
│                                        │
│  📊 Dados sendo salvos em:             │
│     ✓ localStorage (navegador)        │
│     ✓ Google Sheets (nuvem)           │
│                                        │
└────────────────────────────────────────┘
              ↓
         (3 segundos passam)
              ↓
┌────────────────────────────────────────┐
│   TELA 8: REDIRECIONAMENTO             │
│   (Volta para home - /)                │
│                                        │
│   Você está agora na página HOME       │
│   (Seu usuário não pode mais           │
│    registrar com este email)           │
│                                        │
└────────────────────────────────────────┘
```

---

## Estados da Roleta

### 1. Estado Padrão (Espera)
```
       △
      ╱ ╲
     ╱   ╲
    │ O   │
    │P   R│
    │ R   │
     ╲   ╱
      ╲ ╱
      
Cores bem distribuídas
```

### 2. Estado Girando (4 segundos)
```
        △
       ╱ ╲
      ╱~~~╲
     │~~O~~│
     │P~~~R│
     │~~R~~│
      ╲~~~╱
       ╲ ╱
       
Animação CSS: rotate(1800deg + extra)
```

### 3. Estado Ganhou
```
        △ ← Aponta para Prêmio
       ╱ ╲
      ╱   ╲
     │ O   │
     │P[R] │ ← AQUI (50%)
     │ R   │
      ╲   ╱
       ╲ ╱
       
Ou

     │[P]  │ ← AQUI (50%)
     │ O   │
     │ R   │
```

---

## Armazenamento de Dados

### No Navegador (localStorage)
```javascript
{
  "registeredEmails": [
    "joao@email.com",
    "maria@email.com",
    "pedro@email.com"
  ]
}
```

### Na Nuvem (Google Sheets)
```
┌───────┬────────┬──────────────┬────────────┬────────┬─────────────────┐
│ Nome  │Sobrenome│    Email     │  Telefone  │ Prêmio │      Data       │
├───────┼────────┼──────────────┼────────────┼────────┼─────────────────┤
│ João  │ Silva  │joao@email.com│(11)98765   │ Prata  │02/06 15:30:45   │
├───────┼────────┼──────────────┼────────────┼────────┼─────────────────┤
│ Maria │Santos  │maria@email.c │(21)99876   │ Bronze │02/06 15:35:12   │
├───────┼────────┼──────────────┼────────────┼────────┼─────────────────┤
│ Pedro │Oliveira│pedro@email.c │(31)97654   │ Prata  │02/06 15:42:33   │
└───────┴────────┴──────────────┴────────────┴────────┴─────────────────┘
```

---

## Mensagens de Erro

### 1. Campos Vazios
```
┌─────────────────────────────────────┐
│ ⚠️  Alert                           │
├─────────────────────────────────────┤
│ Por favor, preencha todos os campos!│
└─────────────────────────────────────┘
```

### 2. Email Duplicado
```
┌─────────────────────────────────────┐
│ ⚠️  Alert                           │
├─────────────────────────────────────┤
│ Este email já foi registrado!        │
│ Cada pessoa pode cadastrar 1x        │
└─────────────────────────────────────┘
```

---

## Animações Timeline

```
Tempo (ms)  Evento
──────────  ──────────────────────────────
0           Modal abre (pop-in 0.4s)
300         Modal totalmente aberto
400         Usuário preenche formulário
2000        Clica em "LIBERAR ROLETA"
2100        Modal começa a fechar
2300        Modal fechado
2400        Roleta começa a girar
4400        Roleta para de girar
4400        Resultado aparece (slideIn 0.5s)
7400        Resultado visível por 3s
7400        Redirecionamento inicia
7500        Página volta para /
```

---

## Responsividade - Diferentes Tamanhos

### Desktop (1920px)
```
┌──────────────────────────────────────────┐
│ HERO (Full width, 100vh)                 │
├──────────────────────────────────────────┤
│ SCROLL (Full width)                      │
├──────────────────────────────────────────┤
│ PRÊMIOS: [Card] [Card] [Card] (lado lado)│
├──────────────────────────────────────────┤
│ ROLETA: 300px (centralizado)             │
└──────────────────────────────────────────┘
```

### Tablet (768px)
```
┌──────────────────────────┐
│ HERO (100%, 80vh)        │
├──────────────────────────┤
│ SCROLL (100%)            │
├──────────────────────────┤
│ PRÊMIOS:                 │
│ [Card]   [Card]          │
│ [Card]                   │
├──────────────────────────┤
│ ROLETA: 250px            │
└──────────────────────────┘
```

### Mobile (375px)
```
┌─────────────────┐
│ HERO (auto)     │
├─────────────────┤
│ SCROLL (100%)   │
├─────────────────┤
│ PRÊMIOS:        │
│ [Full Card]     │
│ [Full Card]     │
│ [Full Card]     │
├─────────────────┤
│ ROLETA: 200px   │
└─────────────────┘
```

---

## Interações Possíveis

### ✅ Funcionam
- Click no botão Hero
- Click no botão da Roleta
- Preenchimento do formulário
- Click no botão "LIBERAR ROLETA"
- Click no X do modal
- Click fora do modal (fecha)
- Hover nos cards (efeito visual)
- Touch no mobile (tudo funciona)

### ❌ Não Funcionam
- Click no botão enquanto gira (desabilitado)
- Registrar 2x com mesmo email (validação)
- Enviar formulário vazio (validação)
- Clicar fora do modal durante spin (bloqueado)

---

## Checklist Visual

Ao navegar pela página, você verá:

- [ ] Título roxo com brilho
- [ ] Subtítulo branco
- [ ] Botão roxo com glow
- [ ] Texto rolando infinitamente
- [ ] 3 cards empilhados ou lado a lado
- [ ] Ícones flutuando nos cards
- [ ] Roleta com 3 cores
- [ ] Pointer triangular no topo
- [ ] Botão para girar
- [ ] Modal popup ao clicar
- [ ] Formulário com 4 campos
- [ ] Roleta girando (animação suave)
- [ ] Resultado sendo mostrado
- [ ] Redirecionamento automático

---

## Probabilidades em Ação

Se você fizer **100 giros**, esperará:

```
Ouro:   0 vezes  (0%)
Prata:  ~50 vezes (50%)
Bronze: ~50 vezes (50%)

Variação normal: ±5
```

Se fizer **10 giros**:
```
Esperado: 5 Prata, 5 Bronze
Variação: 3-7 Prata, 3-7 Bronze
```

---

Pronto! Você tem a jornada completa mapeada. 🎯
