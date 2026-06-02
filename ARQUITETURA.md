# 🏗️ Arquitetura Técnica - Roleta Premiada

## Diagrama da Arquitetura

```
┌─────────────────────────────────────────────────────────────────┐
│                      NAVEGADOR DO USUÁRIO                       │
│                                                                 │
│  ┌───────────────────────────────────────────────────────────┐ │
│  │                   ROLETA PREMIADA PAGE                   │ │
│  │                     (/roleta route)                      │ │
│  │                                                           │ │
│  │  ┌──────────────┐     ┌──────────────┐  ┌──────────────┐│ │
│  │  │ Hero Section │────▶│   Formulário │─▶│ Roleta Gira  ││ │
│  │  │              │     │   (Modal)    │  │  (4 segundos)││ │
│  │  └──────────────┘     └──────────────┘  └──────────────┘│ │
│  │         │                   │                    │         │ │
│  │         ▼                   ▼                    ▼         │ │
│  │  Validação           Validação               Resultado     │ │
│  │  - Aparência        - Campos vazios          - Prata       │ │
│  │  - Animações        - Email único            - Bronze      │ │
│  │                                              - Redirect    │ │
│  │  ┌──────────────────────────────────────────────────────┐ │ │
│  │  │          LocalStorage (Navegador)                   │ │ │
│  │  │  {                                                   │ │ │
│  │  │    "registeredEmails": [                             │ │ │
│  │  │      "joao@email.com",                               │ │ │
│  │  │      "maria@email.com"                               │ │ │
│  │  │    ]                                                 │ │ │
│  │  │  }                                                   │ │ │
│  │  └──────────────────────────────────────────────────────┘ │ │
│  └───────────────────────────────────────────────────────────┘ │
│                            │                                    │
└─────────────────────────────┼────────────────────────────────────┘
                              │
                      Fetch API (POST)
                              │
                              ▼
           ┌─────────────────────────────────────┐
           │    GOOGLE APPS SCRIPT ENDPOINT      │
           │                                     │
           │  doPost(e) {                        │
           │    - Parse JSON                     │
           │    - Validate Data                  │
           │    - Append to Sheet                │
           │  }                                  │
           └─────────────────────────────────────┘
                              │
                              │
                              ▼
           ┌─────────────────────────────────────┐
           │       GOOGLE SHEETS SPREADSHEET     │
           │                                     │
           │  Roleta Premiada (Sheet)            │
           │  ┌──────┬────────┬──────┬─────────┐│
           │  │ Nome │ Email  │Premio│ Data    ││
           │  ├──────┼────────┼──────┼─────────┤│
           │  │João  │joao@.. │Prata │02/06 15│
           │  │Maria │maria@..│Bronze│02/06 16│
           │  │Pedro │pedro@..│Prata │02/06 17│
           │  └──────┴────────┴──────┴─────────┘│
           │                                     │
           └─────────────────────────────────────┘
```

---

## Fluxo de Dados

### 1. Input do Usuário
```
Usuário preenche formulário
    ↓
{
  "nome": "João",
  "sobrenome": "Silva",
  "email": "joao@email.com",
  "telefone": "(11) 98765-4321"
}
```

### 2. Validação Local
```
✓ Todos os campos preenchidos?
✓ Email não está em localStorage?
↓
OK → Continuar
ERRO → Mostrar alerta
```

### 3. LocalStorage
```
localStorage.setItem('registeredEmails', JSON.stringify([...]))
```

### 4. Girar Roleta
```
selectPrize() {
  random = Math.random() * 100
  if (random < 50) return PRATA
  else return BRONZE
}
```

### 5. Enviar para Google Sheets
```
fetch(GOOGLE_SHEETS_URL, {
  method: 'POST',
  body: JSON.stringify(data)
})
```

### 6. Resultado
```
Mostrar prêmio ganho por 3 segundos
Redirecionar para /
```

---

## Estrutura do Componente React

```
Roleta.jsx
├── Imports
│   ├── useState (gerenciar estado)
│   ├── useRef (referência DOM)
│   ├── useEffect (efeitos)
│   └── useNavigate (rotas)
│
├── Constantes
│   ├── GOOGLE_SHEETS_URL
│   └── PRIZES
│
├── Estado (useState)
│   ├── showModal (boolean)
│   ├── formData (object)
│   ├── isSpinning (boolean)
│   ├── prizeWon (object)
│   ├── wheelRotation (number)
│   └── submitted (boolean)
│
├── Funções Utilitárias
│   ├── isEmailRegistered()
│   ├── registerEmail()
│   ├── sendToGoogleSheets()
│   └── selectPrize()
│
├── Funções de Negócio
│   ├── spinWheel()
│   ├── handleFormSubmit()
│   └── handleInputChange()
│
├── Handlers de UI
│   ├── openModal()
│   └── closeModal()
│
└── Render (JSX)
    ├── Hero Section
    ├── Scrolling Text
    ├── Prêmios Section
    ├── Wheel Section
    └── Modal (Condicional)
```

---

## Stack Tecnológico

```
┌──────────────────────────────────────────────────────┐
│                    FRONTEND                          │
├──────────────────────────────────────────────────────┤
│ Framework: React 19.2.6                              │
│ Router: React Router 7.15.1                          │
│ Build: Vite 8.0.12                                   │
│ Language: JavaScript (ES6+)                          │
│ Styling: CSS3 (animations, gradients)                │
│ Storage: LocalStorage API                            │
│ HTTP: Fetch API                                      │
└──────────────────────────────────────────────────────┘
                        ↓ (API Call)
┌──────────────────────────────────────────────────────┐
│                    BACKEND                           │
├──────────────────────────────────────────────────────┤
│ Service: Google Apps Script                          │
│ Language: JavaScript (Google Apps Script)            │
│ Database: Google Sheets                              │
│ Storage: Cloud (Google Drive)                        │
└──────────────────────────────────────────────────────┘
```

---

## Fluxo de Requisição HTTP

### Request (Frontend → Google Apps Script)

```
POST /macros/d/{SCRIPT_ID}/usercopy HTTP/1.1
Host: script.google.com
Content-Type: application/json

{
  "nome": "João",
  "sobrenome": "Silva",
  "email": "joao@email.com",
  "telefone": "(11) 98765-4321",
  "premio": "Prata",
  "data": "02/06/2026 15:30:45"
}
```

### Response (Google Apps Script → Frontend)

```
HTTP/1.1 200 OK
Content-Type: application/json

{
  "success": true,
  "message": "Dados salvos com sucesso!"
}
```

---

## Fluxo de Autenticação

```
Sem autenticação requerida!

Google Apps Script configurado como:
├─ Executar como: Sua conta Google
└─ Acesso: Qualquer pessoa (sem login)

Resultado:
✅ Usuários não precisam fazer login
✅ URL pública (qualquer um pode acessar)
✅ Sem necessidade de tokens
```

---

## Fluxo de Validação de Email

```
┌─────────────────────────────────────────┐
│   Usuário submete email                 │
└─────────────────────────────────────────┘
                   │
                   ▼
        ┌──────────────────────┐
        │ isEmailRegistered()  │
        │                      │
        │ Verifica localStorage│
        │ JSON.parse(...)      │
        └──────────────────────┘
                   │
         ┌─────────┴─────────┐
         │                   │
      Existe?            Não existe?
         │                   │
         ▼                   ▼
      ERRO                 OK
      Alerta            registerEmail()
      Retorna           localStorage.set()
                        Continua...
```

---

## Probabilidades Implementadas

```
const selectPrize = () => {
  const random = Math.random() * 100;  // 0-100
  
  if (random < 50) {
    return PRIZES[1];  // Prata
  } else {
    return PRIZES[2];  // Bronze
  }
  
  // Ouro: Nunca retorna (0%)
}

Distribuição:
random: 0────────────────50────────────────────100
        └─── Prata 50% ───┘└── Bronze 50% ──────┘
```

---

## Ciclo de Vida da Página

```
1. MONTAGEM (Component Mount)
   └─ Router renderiza <Roleta />
   └─ Estado inicial criado
   └─ useRef wheel criado

2. RENDERIZAÇÃO INICIAL
   └─ Hero Section renderiza
   └─ Scroll Text inicia animation
   └─ Cards renderizam
   └─ Wheel renderiza

3. INTERAÇÃO DO USUÁRIO
   └─ Click no botão → openModal()
   └─ Modal abre (showModal = true)
   └─ Usuário preenche formulário

4. SUBMISSÃO DO FORMULÁRIO
   └─ handleFormSubmit()
   └─ Validações
   └─ registerEmail()
   └─ Modal fecha
   └─ spinWheel() inicia

5. ROTAÇÃO DA ROLETA
   └─ setIsSpinning(true)
   └─ selectPrize() escolhe
   └─ setWheelRotation(degrees)
   └─ CSS animation (4s)

6. RESULTADO
   └─ Aguarda 4 segundos
   └─ setPrizeWon()
   └─ setSubmitted(true)
   └─ Mostra resultado

7. ENVIO DE DADOS
   └─ sendToGoogleSheets()
   └─ fetch(POST)
   └─ Aguarda resposta

8. REDIRECIONAMENTO
   └─ Aguarda 3 segundos
   └─ navigate('/')
   └─ Volta para home

9. DESMONTAGEM (Component Unmount)
   └─ Componente é removido do DOM
```

---

## Arquitetura de Pastas

```
linkbio2/
│
├─ src/
│  ├─ Roleta.jsx                ← Componente principal
│  ├─ Roleta.css                ← Estilos e animações
│  ├─ router.jsx                ← Rotas (importa Roleta)
│  ├─ App.jsx                   ← Página inicial
│  ├─ main.jsx                  ← Entrada
│  └─ [outros componentes]
│
├─ public/
│  ├─ imgs/                     ← Imagens
│  ├─ buttons/                  ← Botões
│  └─ logos/
│
├─ Documentação (8 arquivos .md)
│  ├─ QUICK_START.md
│  ├─ ROLETA_LEIA_PRIMEIRO.md
│  ├─ TESTE.md
│  ├─ CUSTOMIZACOES.md
│  └─ ...
│
├─ Configuração
│  ├─ package.json              ← Dependências
│  ├─ vite.config.js            ← Build config
│  ├─ eslint.config.js          ← Linter
│  └─ index.html                ← HTML raiz
│
└─ Deploy
   ├─ Dockerfile                ← Docker
   ├─ docker-compose.yml        ← Docker Compose
   └─ nginx.conf                ← Nginx config
```

---

## Dependências do Projeto

```json
{
  "dependencies": {
    "react": "^19.2.6",              ← Framework UI
    "react-dom": "^19.2.6",          ← Renderização DOM
    "react-router-dom": "^7.15.1"   ← Roteamento
  },
  "devDependencies": {
    "vite": "^8.0.12",               ← Build tool
    "@vitejs/plugin-react": "^6.0.1",
    "eslint": "^10.3.0"              ← Linter
  }
}
```

**Observação:** Nenhuma dependência adicional necessária! O projeto é minimalista.

---

## Performance & Otimizações

```
┌─────────────────────────────────────────────────┐
│           ESTRATÉGIAS DE OTIMIZAÇÃO              │
├─────────────────────────────────────────────────┤
│                                                 │
│ 1. CSS Animations (não JavaScript)              │
│    └─ Melhor performance (GPU acelerado)       │
│                                                 │
│ 2. Lazy Loading                                 │
│    └─ Scroll ativo apenas quando visível        │
│                                                 │
│ 3. LocalStorage                                 │
│    └─ Cache local (sem requisições extras)     │
│                                                 │
│ 4. Fetch API                                    │
│    └─ Nativa (sem bibliotecas)                  │
│                                                 │
│ 5. Sem Dependências Pesadas                     │
│    └─ Apenas React + React Router               │
│                                                 │
│ 6. CSS Variables                                │
│    └─ Customização rápida (sem recompile)      │
│                                                 │
└─────────────────────────────────────────────────┘
```

---

## Segurança

```
┌──────────────────────────────────────────┐
│        CONSIDERAÇÕES DE SEGURANÇA         │
├──────────────────────────────────────────┤
│                                          │
│ ✅ LocalStorage:                         │
│    └─ Apenas dados do usuário             │
│    └─ Sem senhas ou tokens               │
│                                          │
│ ✅ Google Sheets:                        │
│    └─ Dados públicos (sem info sensível) │
│    └─ Apps Script com CORS habilitado    │
│    └─ No-cors mode (seguro)              │
│                                          │
│ ✅ Frontend:                             │
│    └─ Sem chaves de API expostas         │
│    └─ Validação de email local           │
│                                          │
│ ⚠️  Considerações:                       │
│    └─ Apps Script aberto ao público      │
│    └─ Email armazenado em localStorage   │
│    └─ Dados públicos na planilha        │
│                                          │
└──────────────────────────────────────────┘
```

---

## Escalabilidade

```
Capacidade Atual:
├─ Usuários simultâneos: Ilimitado (frontend)
├─ Dados por mês: Ilimitado (Google Sheets)
├─ Requisições/seg: ~10 (Google Apps Script free tier)
└─ Armazenamento: 1TB (Google Drive)

Limitações Google Apps Script (Free):
├─ Time quota: 6 min/dia
├─ Execuções: 10 min/dia
├─ Scripts: 3 simples por dia
└─ Execuções falhadas: Não contam

Recomendações para Escalar:
├─ Usar Google Cloud (pago) para volume alto
├─ Adicionar banco de dados (Firebase, MySQL)
├─ Implementar rate limiting
└─ Monitorar Google Sheets → Analytics
```

---

## Monitoramento & Observabilidade

```
┌──────────────────────────────────────────┐
│    COMO MONITORAR A ROLETA                │
├──────────────────────────────────────────┤
│                                          │
│ 1. Google Sheets (Dados)                 │
│    └─ Visualize as respostas em tempo real│
│    └─ Gráficos de prêmios ganhos         │
│                                          │
│ 2. Console (F12)                         │
│    └─ Erros JavaScript                   │
│    └─ Logs de execução                   │
│                                          │
│ 3. Apps Script Execuções                 │
│    └─ Veja falhas de requisições          │
│    └─ Tempo de execução                  │
│                                          │
│ 4. Network Tab (F12)                     │
│    └─ Verifique requisições HTTP         │
│    └─ Tempo de resposta                  │
│                                          │
└──────────────────────────────────────────┘
```

---

Pronto! Você tem a arquitetura completa mapeada! 🏗️
