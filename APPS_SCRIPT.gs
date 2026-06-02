// ===================================
// GOOGLE APPS SCRIPT - ROLETA PREMIADA
// ===================================
// Copie todo este código para Google Apps Script
// Extensões → Apps Script dentro da sua planilha Google Sheets

function doPost(e) {
  try {
    // Parsear os dados recebidos
    const data = JSON.parse(e.postData.contents);
    
    // Obter a planilha ativa
    const sheet = SpreadsheetApp.getActiveSheet();
    
    // Adicionar uma nova linha com os dados
    sheet.appendRow([
      data.nome,           // Coluna A
      data.sobrenome,      // Coluna B
      data.email,          // Coluna C
      data.telefone,       // Coluna D
      data.premio,         // Coluna E
      data.data            // Coluna F
    ]);
    
    // Retornar sucesso
    return ContentService
      .createTextOutput(JSON.stringify({ 
        success: true,
        message: "Dados salvos com sucesso!"
      }))
      .setMimeType(ContentService.MimeType.JSON);
      
  } catch (error) {
    // Retornar erro
    return ContentService
      .createTextOutput(JSON.stringify({ 
        success: false, 
        error: error.toString() 
      }))
      .setMimeType(ContentService.MimeType.JSON);
  }
}

// Função para testar o script (opcional)
function testDoPost() {
  const testData = {
    nome: "João",
    sobrenome: "Silva",
    email: "joao@example.com",
    telefone: "(11) 98765-4321",
    premio: "Prata",
    data: new Date().toLocaleString('pt-BR')
  };
  
  const sheet = SpreadsheetApp.getActiveSheet();
  sheet.appendRow([
    testData.nome,
    testData.sobrenome,
    testData.email,
    testData.telefone,
    testData.premio,
    testData.data
  ]);
  
  Logger.log("Dados de teste adicionados com sucesso!");
}
