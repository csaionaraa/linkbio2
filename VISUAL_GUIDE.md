# 🎨 Guia Visual da Página Roleta Premiada

## Estrutura da Página

```
┌─────────────────────────────────────────────────────┐
│            SEÇÃO HERO (Gradiente Roxo)              │
│                                                     │
│  ROLETA PREMIADA GIRE E GANHE!                      │
│  (Texto com animação shimmer)                       │
│                                                     │
│  Gire a roleta exclusiva do Japa...                 │
│  (Subtítulo)                                        │
│                                                     │
│  ┌─────────────────────────────┐                    │
│  │ CLIQUE E RODE AGORA →       │ (Botão com glow)  │
│  │ 100% GRATUITO               │                    │
│  └─────────────────────────────┘                    │
│                                                     │
└─────────────────────────────────────────────────────┘

┌─────────────────────────────────────────────────────┐
│  ░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░  │
│  ░ GIRO PREMIADO • GIRO PREMIADO • ...        ░  │
│  ░ (Texto roxo em scroll infinito)             ░  │
│  ░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░  │
│  (Bordas roxas, fundo preto)                      │
└─────────────────────────────────────────────────────┘

┌─────────────────────────────────────────────────────┐
│        PRÊMIOS EXCLUSIVOS (Fundo cinza)             │
│                                                     │
│  ┌──────────────┐ ┌──────────────┐ ┌────────────┐  │
│  │      🏅     │ │      💎      │ │     🎁    │  │
│  │ Prêmios     │ │ Créditos     │ │ Surpresas │  │
│  │ Variados    │ │ Bônus        │ │ Especiais │  │
│  │ (card com   │ │ (com shine   │ │ (float    │  │
│  │ shine)      │ │ animação)    │ │ anim)     │  │
│  └──────────────┘ └──────────────┘ └────────────┘  │
│  (Cards com hover effect)                          │
│                                                     │
└─────────────────────────────────────────────────────┘

┌─────────────────────────────────────────────────────┐
│          GIRE A ROLETA (Fundo escuro)               │
│                                                     │
│         △ (Pointer - triangulo roxo)                │
│        ╱ ╲                                          │
│       ╱   ╲                                         │
│      │ ◯ O │ (Roleta com 3 segmentos)              │
│      │ B R │ O = Ouro (nunca cai)                 │
│      │ R S │ S = Prata (50%)                      │
│       ╲   ╱ R = Bronze (50%)                      │
│        ╲ ╱                                         │
│         ╲ (Com bordas roxas e glow)                │
│                                                     │
│      CLIQUE E RODE AGORA                           │
│      (Botão roxo)                                  │
│                                                     │
│  ┌─────────────────────────────┐                    │
│  │ Parabéns! 🎉                │ (Ao ganhar)       │
│  │ Você ganhou: PRATA          │                   │
│  │ Redirecionando em breve...  │                   │
│  └─────────────────────────────┘                    │
│                                                     │
└─────────────────────────────────────────────────────┘
```

## Modal do Formulário

```
      ┌─────────────────────────────────┐
      │ ╱╲ Libere sua Roleta         ✕  │ (Modal com pop-in anim)
      ├─────────────────────────────────┤
      │                                 │
      │ ┌─────────────────────────────┐ │
      │ │ Nome                        │ │ (Com focus glow)
      │ └─────────────────────────────┘ │
      │                                 │
      │ ┌─────────────────────────────┐ │
      │ │ Sobrenome                   │ │
      │ └─────────────────────────────┘ │
      │                                 │
      │ ┌─────────────────────────────┐ │
      │ │ Email                       │ │
      │ └─────────────────────────────┘ │
      │                                 │
      │ ┌─────────────────────────────┐ │
      │ │ Telefone                    │ │
      │ └─────────────────────────────┘ │
      │                                 │
      │  ┌─────────────────────────────┐ │
      │  │  LIBERAR ROLETA             │ │ (Botão gradient)
      │  └─────────────────────────────┘ │
      │                                 │
      └─────────────────────────────────┘
   (Fundo preto translúcido com blur)
```

## Animações Implementadas

### 1. **Shimmer Title** (Seção Hero)
```
┌─────────────────────────────────┐
│ ▓▓▓ ROLETA PREMIADA ▓▓▓         │
│ (Gradiente roxo se movendo)     │
└─────────────────────────────────┘
Efeito: Brilho passando pelo texto (3s contínuo)
```

### 2. **Scroll Infinito** (Container GIRO PREMIADO)
```
GIRO PREMIADO • GIRO PREMIADO • ... →
(Texto saindo pela esquerda, entrando pela direita)
Efeito: 15s loop contínuo
```

### 3. **Shine Cards** (Prêmios Exclusivos)
```
┌──────────────┐
│              │ (Luz passando de cima para baixo)
│    🏅        │
│              │
└──────────────┘
Efeito: Ao passar o mouse, card levanta (translateY -10px)
```

### 4. **Float Icon** (Ícones dos Cards)
```
    🏅
   🏅
  🏅  (Ícone flutuando para cima e para baixo)
```

### 5. **Spin Wheel** (Roleta Giratória)
```
Initial:   ╱ ╲
          ╱   ╲
         │ O   │
          ╲   ╱
           ╲ ╱

After Spin: (gira 1800+ graus)
          ╱ ╲
         ╱   ╲
        │ R   │ ← Prêmio apontado para cima
         ╲   ╱
          ╲ ╱

Efeito: 4 segundos com cubic-bezier suave
```

### 6. **Pop-in Modal**
```
Scale: 0.8 → 1.0
Rotation: rotateY(20deg) → rotateY(0deg)
Duração: 0.4s
```

### 7. **Glow Effects**
```
Botão: box-shadow 0 0 30px rgba(176, 65, 176, 0.5)
Ao hover: 0 0 40px rgba(176, 65, 176, 0.7)
```

## Responsividade

### Desktop (1200px+)
```
┌────────────────────────────────────────────┐
│                  HERO                      │
├────────────────────────────────────────────┤
│              SCROLL TEXT                   │
├────────────────────────────────────────────┤
│ PRÊMIOS: [Card] [Card] [Card]              │
├────────────────────────────────────────────┤
│              [ROLETA]                      │
└────────────────────────────────────────────┘
```

### Tablet (768px - 1199px)
```
┌────────────────────────────┐
│        HERO (menor)        │
├────────────────────────────┤
│    SCROLL TEXT (menor)     │
├────────────────────────────┤
│ PRÊMIOS:                   │
│ [Card]   [Card]            │
│ [Card]                     │
├────────────────────────────┤
│      [ROLETA (250px)]      │
└────────────────────────────┘
```

### Mobile (até 480px)
```
┌──────────────────┐
│  HERO (stack)    │
├──────────────────┤
│   SCROLL (menor) │
├──────────────────┤
│ PRÊMIOS:         │
│ [Card - full]    │
│ [Card - full]    │
│ [Card - full]    │
├──────────────────┤
│ [ROLETA 200px]   │
└──────────────────┘
```

## Cores da Interface

```
Roxo Principal:     #8b2e8e (--primary-purple)
Roxo Borda:         #b041b0 (--border-purple)
Fundo Escuro:       #0a0a0a (--dark-bg)
Cinza Escuro:       #1a1a1a (--dark-gray)
Cinza Claro:        #2a2a2a (--light-gray)
Texto Principal:    #ffffff
Texto Secundário:   #a0a0a0

Prêmios:
├─ Ouro:   #FFD700 (0%)
├─ Prata:  #C0C0C0 (50%)
└─ Bronze: #CD7F32 (50%)
```

## Estados dos Botões

### Botão Hero / Spin
```
Normal:   Background roxo + Border roxo + Glow
Hover:    Mais brilhante + Scale(1.05) + Glow maior
Active:   Scale(0.98)
Disabled: Opacity 0.7
```

### Botão Formulário
```
Normal:   Gradient roxo + Border
Hover:    TranslateY(-2px) + Glow maior
Active:   Scale(0.98)
Disabled: Opacity 0.7
```

## Sequência Completa de Uso

```
1. Página carrega
   └─ Hero aparece com fadeInUp
   └─ Scroll text começa

2. Usuário clica "CLIQUE E RODE AGORA"
   └─ Modal abre com pop-in animation
   └─ Fundo fica escuro com blur

3. Usuário preenche formulário
   └─ Inputs focam com glow roxo
   └─ Validação de campos

4. Clica "LIBERAR ROLETA"
   └─ Modal fecha
   └─ Roleta gira por 4 segundos
   └─ Pointer aponta para prêmio

5. Resultado é mostrado
   └─ Card com slideIn animation
   └─ Aguarda 3 segundos

6. Redireciona para /
   └─ localStorage salva o email
   └─ Google Sheets recebe os dados
```

---

Essa é a estrutura visual completa! Qualquer dúvida, consulte os comentários no código. 🎨
