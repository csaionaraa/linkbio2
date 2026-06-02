# Configuração da Integração com Google Sheets - Roleta Premiada

## Passo a Passo para Configurar Google Sheets

### 1. Criar uma Planilha Google
1. Acesse [Google Sheets](https://sheets.google.com)
2. Crie uma nova planilha chamada "Roleta Premiada"
3. Crie as seguintes colunas:
   - A1: `Nome`
   - B1: `Sobrenome`
   - C1: `Email`
   - D1: `Telefone`
   - E1: `Prêmio`
   - F1: `Data`

### 2. Criar um Google Apps Script
1. Na planilha, vá para **Extensões → Apps Script**
2. Copie e cole o código abaixo:

```javascript
function doPost(e) {
  try {
    const data = JSON.parse(e.postData.contents);
    const sheet = SpreadsheetApp.getActiveSheet();
    
    sheet.appendRow([
      data.nome,
      data.sobrenome,
      data.email,
      data.telefone,
      data.premio,
      data.data
    ]);
    
    return ContentService
      .createTextOutput(JSON.stringify({ success: true }))
      .setMimeType(ContentService.MimeType.JSON);
  } catch (error) {
    return ContentService
      .createTextOutput(JSON.stringify({ success: false, error: error.toString() }))
      .setMimeType(ContentService.MimeType.JSON);
  }
}
```

3. Salve o projeto
4. Clique em **Implantar → Nova implantação**
5. Escolha o tipo: **Aplicação Web**
6. Configure:
   - Executar como: Sua conta Google
   - Quem tem acesso: "Qualquer pessoa"
7. Clique em **Implantar**
8. Copie a URL fornecida

### 3. Adicionar a URL ao Código
No arquivo `src/Roleta.jsx`, linha 10, substitua:

```javascript
const GOOGLE_SHEETS_URL = 'https://script.google.com/macros/d/YOUR_SCRIPT_ID/usercopy';
```

Por sua URL completa obtida no passo anterior:

```javascript
const GOOGLE_SHEETS_URL = 'https://script.google.com/macros/d/XXXXXXXXXXXX/usercopy';
```

## Funcionamento da Roleta

### Probabilidades
- **Ouro**: 0% (nunca cai)
- **Prata**: 50%
- **Bronze**: 50%

### Validações
- O usuário só pode se cadastrar uma vez por email
- Todos os campos são obrigatórios
- Os dados são salvos no localStorage (local) e enviados para o Google Sheets

### Fluxo
1. Usuário clica em "CLIQUE E RODE AGORA"
2. Abre modal com formulário
3. Preenche Nome, Sobrenome, Email e Telefone
4. Clica em "LIBERAR ROLETA"
5. Roleta gira por 4 segundos
6. Mostra resultado (Prata ou Bronze)
7. Aguarda 3 segundos
8. Redireciona para página inicial

## Customização

### Alterar Prêmios
Edite o array `PRIZES` na linha 8 do `Roleta.jsx`:

```javascript
const PRIZES = [
  { name: 'Ouro', color: '#FFD700', percentage: 0 },
  { name: 'Prata', color: '#C0C0C0', percentage: 50 },
  { name: 'Bronze', color: '#CD7F32', percentage: 50 }
];
```

### Alterar Cores
As cores estão definidas no arquivo `Roleta.css` como variáveis:
- `--primary-purple`: #8b2e8e
- `--border-purple`: #b041b0

### Tempo de Rotação
Para ajustar o tempo de rotação, edite na linha 85 (em milissegundos):
```javascript
}, 4000); // 4 segundos
```

## Troubleshooting

### Erro ao enviar para Google Sheets
- Verifique se a URL está correta no código
- Certifique-se de que o Apps Script foi implantado como "Qualquer pessoa"
- Verifique se as colunas na planilha match com o código

### Email já registrado mas o usuário quer se registrar novamente
- Clear localStorage no navegador (F12 → Storage → Clear Site Data)
- Ou mude o email do usuário

### Roleta não gira
- Verifique se o botão está habilitado (isSpinning === false)
- Certifique-se de que os dados do formulário estão completos

## Suporte
Para mais informações sobre Google Apps Script: https://developers.google.com/apps-script
