// Adicionando o evento de envio do formulário
document.getElementById('resumeForm').addEventListener('submit', function (event) {
    // Obtendo o valor do CPF
    var cpfInput = document.getElementById('cpf');
    var cpf = cpfInput.value;

    // Verificando se o CPF já foi utilizado
    if (localStorage.getItem(cpf)) {
        alert('Você já enviou um currículo com este CPF. Não é permitido enviar mais de um currículo.');
        event.preventDefault(); // Impede o envio do formulário
        return;
    }

    // Salvando o CPF no localStorage
    localStorage.setItem(cpf, 'enviado');
});

// Função para exibir o nome do arquivo
function displayFileName() {
    var fileInput = document.getElementById('resume');
    var fileNameInfo = document.getElementById('file-name-info');
    var fileNameDisplay = document.getElementById('file-name');

    if (fileInput.files.length > 0) {
        fileNameDisplay.textContent = fileInput.files[0].name;
        fileNameInfo.style.display = 'block';
    } else {
        fileNameInfo.style.display = 'none';
    }
}
