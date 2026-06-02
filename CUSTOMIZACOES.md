# 🎨 Customizações Avançadas - Roleta Premiada

## Customizações Rápidas

### 1. Alterar Cores Roxas para Azuis

**Arquivo:** `src/Roleta.css`

Encontre as cores no topo:
```css
:root {
  --primary-purple: #8b2e8e;    /* Roxo → Azul */
  --border-purple: #b041b0;     /* Roxo → Azul */
}
```

Substitua por azuis:
```css
:root {
  --primary-purple: #0066ff;    /* Azul vibrante */
  --border-purple: #0052cc;     /* Azul escuro */
}
```

---

### 2. Alterar Textos da Página

**Arquivo:** `src/Roleta.jsx`

```javascript
// Linha ~45 - Título Hero
<h1 className="hero-title">SUA ROLETA AQUI!</h1>

// Linha ~48 - Subtítulo Hero
<p className="hero-subtitle">
  Seu subtítulo customizado aqui!
</p>

// Linha ~53 - Texto do Botão
<span className="btn-text">MEU BOTÃO →</span>
<span className="btn-subtitle">GRATUITO</span>

// Linha ~62-69 - Texto do Scroll
<span>MEU TEXTO • </span>
<span>MEU TEXTO • </span>

// Linha ~73 - Título seção prêmios
<h2 className="section-title">MEUS PRÊMIOS</h2>

// Linha ~75 - Subtítulo prêmios
<p className="section-subtitle">
  Meu subtítulo aqui
</p>

// Linha ~84-101 - Customizar cards (ícones e textos)
<div className="premio-card">
  <div className="premio-icon">🏆</div>  {/* Novo ícone */}
  <h3>Novo Título</h3>
  <p>Nova descrição</p>
</div>
```

---

### 3. Adicionar Mais Prêmios (4 ou 5)

**Arquivo:** `src/Roleta.jsx` - Linha ~8

```javascript
// Exemplo com 4 prêmios
const PRIZES = [
  { name: 'Ouro', color: '#FFD700', percentage: 0 },
  { name: 'Prata', color: '#C0C0C0', percentage: 33 },
  { name: 'Bronze', color: '#CD7F32', percentage: 33 },
  { name: 'Bônus', color: '#FF6B00', percentage: 34 }  // Novo
];
```

**Nota:** Os percentuais devem somar 100.
**Exemplo com 5 segmentos:**
```javascript
const PRIZES = [
  { name: 'Ouro', color: '#FFD700', percentage: 0 },
  { name: 'Prata', color: '#C0C0C0', percentage: 25 },
  { name: 'Bronze', color: '#CD7F32', percentage: 25 },
  { name: 'Crédito', color: '#00FF00', percentage: 25 },
  { name: 'Bônus', color: '#FF00FF', percentage: 25 }
];
```

---

### 4. Mudar o Tempo de Rotação

**Arquivo:** `src/Roleta.jsx` - Linhas ~129-134

```javascript
// Aumentar para 6 segundos (6000 ms):
setTimeout(() => {
  setPrizeWon(prize);
  setSubmitted(true);
  sendToGoogleSheets(formData, prize.name);

  setTimeout(() => {
    navigate('/');
  }, 3000);  // ← Tempo antes de redirecionar
}, 6000);    // ← MUDOU DE 4000 PARA 6000
```

Você também precisa mudar a animação em `Roleta.css`:
```css
.wheel {
  transition: transform 6s cubic-bezier(0.25, 0.46, 0.45, 0.94);
  /* ↑ Mudou de 4s para 6s */
}
```

---

### 5. Mudar o Redirecionamento (Ir para outra página)

**Arquivo:** `src/Roleta.jsx` - Linha ~132

Atualmente: `navigate('/')` (volta para home)

Opções:
```javascript
navigate('/');              // Home
navigate('/acesso');        // Página Acesso
navigate('/entradas');      // Página Entradas
navigate('/gratuito');      // Página Gratuito
navigate('https://seusite.com');  // Link externo
```

---

### 6. Mudar Imagens de Fundo

**Arquivo:** `src/Roleta.css` - Linha ~30

Para adicionar uma imagem de fundo:
```css
.roleta-hero {
  background: url('/imgs/sua-imagem.jpg') center/cover;
  background-attachment: fixed;
}
```

Para gradient customizado:
```css
.roleta-hero {
  background: linear-gradient(135deg, #00FFFF 0%, #FF00FF 100%);
}
```

---

## Customizações Avançadas

### 7. Validação de Email mais Robusta

**Arquivo:** `src/Roleta.jsx` - Linha ~46

Adicionar validação de formato de email:
```javascript
const handleFormSubmit = (e) => {
  e.preventDefault();

  // Validação de email
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailRegex.test(formData.email)) {
    alert('Por favor, digite um email válido!');
    return;
  }

  // ... resto do código
};
```

---

### 8. Integração com WhatsApp (após ganhar)

**Arquivo:** `src/Roleta.jsx` - Linha ~132

Após a roleta girar, redirecionar para WhatsApp:
```javascript
setTimeout(() => {
  const mensagem = `Olá! Ganhei ${prize.name} na Roleta Premiada!`;
  const whatsappURL = `https://wa.me/5511XXXXXXXXX?text=${encodeURIComponent(mensagem)}`;
  window.open(whatsappURL, '_blank');
  
  // Depois redireciona
  setTimeout(() => {
    navigate('/');
  }, 2000);
}, 3000);
```

---

### 9. Adicionar Sons (Buzz ao Girar)

1. **Coloque um arquivo de áudio** em `public/sounds/spin.mp3`

2. **Adicione ao Roleta.jsx:**
```javascript
const spinWheel = () => {
  if (isSpinning) return;

  // Tocar som
  const audio = new Audio('/sounds/spin.mp3');
  audio.play();

  // ... resto do código
};
```

---

### 10. Customizar Modal (Fundo e Animação)

**Arquivo:** `src/Roleta.css` - Linha ~280

```css
.modal-content {
  /* Mudar cor de fundo */
  background: linear-gradient(135deg, #1a1a2e 0%, #16213e 100%);
  
  /* Adicionar shadow maior */
  box-shadow: 0 0 60px rgba(139, 46, 142, 0.7);
}
```

---

### 11. Adicionar Validação Telefone

**Arquivo:** `src/Roleta.jsx` - Linha ~46

```javascript
const handleFormSubmit = (e) => {
  e.preventDefault();

  // Validar telefone (11 dígitos)
  const phoneRegex = /^\(\d{2}\)\s\d{4,5}-\d{4}$/;
  if (!phoneRegex.test(formData.telefone)) {
    alert('Telefone deve estar no formato: (11) 98765-4321');
    return;
  }

  // ... resto do código
};
```

---

### 12. Adicionar Máscara de Entrada (Telefone)

**Arquivo:** `src/Roleta.jsx` - Dentro de `handleInputChange`:

```javascript
const handleInputChange = (e) => {
  let { name, value } = e.target;
  
  // Máscara para telefone
  if (name === 'telefone') {
    value = value.replace(/\D/g, '');  // Remove não-números
    if (value.length > 0) {
      value = `(${value.slice(0, 2)}) ${value.slice(2, 7)}-${value.slice(7, 11)}`;
    }
  }
  
  setFormData(prev => ({ ...prev, [name]: value }));
};
```

---

### 13. Adicionar Contagem Regressiva

Altere a mensagem de redirecionamento:

```javascript
{submitted && prizeWon && (
  <div className="prize-result">
    <h3>Parabéns! 🎉</h3>
    <p>Você ganhou: <strong>{prizeWon.name}</strong></p>
    <p className="redirect-msg">Redirecionando em <span id="countdown">3</span>...</p>
  </div>
)}
```

E adicione o código em `spinWheel()`:
```javascript
setTimeout(() => {
  let count = 3;
  const countdown = setInterval(() => {
    const el = document.getElementById('countdown');
    if (el) el.textContent = count;
    count--;
    if (count < 0) {
      clearInterval(countdown);
      navigate('/');
    }
  }, 1000);
}, 4000);
```

---

### 14. Adicionar Logging de Eventos

**Arquivo:** `src/Roleta.jsx`

```javascript
const spinWheel = () => {
  console.log('🎡 Roleta começou a girar');
  
  // ... código existente
  
  setTimeout(() => {
    console.log(`🏆 Prêmio ganho: ${prize.name}`);
    console.log('📊 Dados enviados para Google Sheets');
    
    setTimeout(() => {
      console.log('🔄 Redirecionando...');
      navigate('/');
    }, 3000);
  }, 4000);
};
```

---

### 15. Adicionar Animação de Confete (ao Ganhar)

1. **Instale a biblioteca:**
```bash
npm install canvas-confetti
```

2. **Importe no arquivo:**
```javascript
import confetti from 'canvas-confetti';
```

3. **Adicione a animação:**
```javascript
setTimeout(() => {
  confetti({
    particleCount: 100,
    spread: 70,
    origin: { y: 0.6 }
  });
  
  setPrizeWon(prize);
  setSubmitted(true);
  // ... resto
}, 4000);
```

---

## Exemplo Completo: Customização Total

Aqui está um exemplo de como seria `Roleta.jsx` totalmente customizado:

```javascript
// Prêmios customizados
const PRIZES = [
  { name: 'iPhone 15', color: '#000000', percentage: 0 },
  { name: 'R$ 100', color: '#FFD700', percentage: 50 },
  { name: 'Fone', color: '#FFFFFF', percentage: 50 }
];

// Customizar tudo
<h1>MEGA PRÊMIOS!</h1>
<p>Gire e ganhe iPhones, dinheiro e muito mais!</p>
<button onClick={() => {
  // Customizar ação do botão
}}>
  GIRE AGORA
</button>

// Cores customizadas
--primary-color: #ff6b00;    // Laranja
--secondary-color: #ff8c00;  // Laranja mais claro

// Enviar para outro Apps Script
const GOOGLE_SHEETS_URL = 'https://seu-script-customizado/usercopy';
```

---

## Reset para Padrão

Se fizer muitas mudanças e quiser voltar:

1. Delete `src/Roleta.jsx` e `src/Roleta.css`
2. Recrie os arquivos com o código original
3. Mantenha a URL do Google Sheets que você já configurou

---

## Dicas de Design

1. **Cores Complementares:**
   - Roxo (primário) + Verde = Moderno
   - Azul (primário) + Laranja = Energético
   - Preto (primário) + Dourado = Luxuoso

2. **Tipografia:**
   - Títulos: Arial Black ou Ubuntu Bold
   - Texto: Arial ou Helvetica
   - Buttons: Monospace para tech-feel

3. **Espaçamento:**
   - Mobile: 20px entre seções
   - Desktop: 80px entre seções
   - Nunca menos de 15px

4. **Performance:**
   - Comprima imagens com TinyPNG
   - Lazy load imagens grandes
   - Minify CSS/JS antes de deploy

---

Aproveite a customização! 🚀
