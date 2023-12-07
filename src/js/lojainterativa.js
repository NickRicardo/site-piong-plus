// Dados fictícios dos produtos
const produtos = [
    { nome: 'Avental Cirúrgico Proteção Total Impermeável', categoria: 'categoria1', imagem: '../img/produtos/categorias/aventaisMacacao/avental1.png', especificacoes: 'Usado como EPI em proteção do usuário em diversos procedimentos' },

    { nome: 'Avental Emergency Plus | LC Impermeável', categoria: 'categoria1', imagem: '../img/produtos/categorias/aventaisMacacao/aventalEmergency.png', especificacoes: 'Usado como EPI em proteção do usuário em diversos procedimentos' },

    { nome: 'Calça e Blusa | Pijama SSMMS', categoria: 'categoria2', imagem: '../img/produtos/categorias/calcaBlusa/calcaeblusa1.png', especificacoes: 'Usada em procedimentos de consulta médica, exames, emergência,  visita a pacientes etc.' },

    { nome: 'CAMISOLA AZUL | SSMMS', categoria: 'categoria3', imagem: '../img/produtos/categorias/camisolaBatas/camisola1.png', especificacoes: 'Usada em procedimentos de consulta médica, exames,  emergência,  visita a pacientes etc' },

    { nome: 'CAMPO CIRÚRGICO | SSMMS ', categoria: 'categoria4', imagem: '../img/produtos/categorias/campoCirurgico/campoCirurgico1.png', especificacoes: 'Indicado para procedimentos onde seja necessária   a  manutenção  da   técnica asséptica  e  o  isolamento  da área á ser tratada' },

    { nome: 'CAMPO CIRÚRGICO COM FENESTRA | SSMMS', categoria: 'categoria5', imagem: '../img/produtos/categorias/campoCirurgico/campoCirurgico2.png', especificacoes: 'Indicado para procedimentos onde seja necessária   amanutenção   da    técnica asséptica  e  o  isolamento  da  área  ser tratada.' },

    { nome: 'CAMPO CIR. OFTÁLMICO | SSMMS ', categoria: 'categoria5', imagem: '../img/produtos/categorias/campoOftalmico/campoOftalmico.png', especificacoes: 'Indicado para procedimentos onde seja necessária   a  manutenção  da   técnica asséptica  e  o  isolamentoda área á ser tratada.' },

    { nome: 'COBERTURA IMPERMEÁVEL PARA MESA MAYO | LC 50g', categoria: 'categoria6', imagem: '../img/produtos/categorias/coberturaMesa/cobertura1.png', especificacoes: 'Indicado  para cobertura  da mesa de instrumentos com impermeabilidade e reforço absorvente.' },

    { nome: 'COBERTURA IMPERMEÁVEL PLÁTICO PBD', categoria: 'categoria6', imagem: '../img/produtos/categorias/coberturaMesa/cobertura2.png', especificacoes: 'Indicado  para cobertura  da mesa de instrumentos com impermeabilidade e reforço absorvente.' },

    { nome: 'INVÓLUCRO/WRAP', categoria: 'categoria7', imagem: '../img/produtos/categorias/involucroWrap/involucro1.png', especificacoes: 'Indicado como invólucro para proteger instrumentais cirúrgicos e materiais no processo de esterilização a vapor, óxido de etileno  ou  plasma  de  peróxido de hidrogênio' },

    { nome: 'ORTOPEDIA E TRAUMATOLOGIA', categoria: 'categoria8', imagem: '../img/produtos/categorias/kitCirurgico/kitCirurgico1.png', especificacoes: 'Kit Cirúrgico Ortopédico Ombro CÓD. 49.82.69 ANVISA: 803.420.60.005' },

    { nome: 'CIRUGIAS GERAIS / UNIVERSAIS', categoria: 'categoria8', imagem: '../img/produtos/categorias/kitCirurgico/kitCirurgico.png', especificacoes: 'Kit Cirúrgico Ortopédico Ombro CÓD. 49.82.69 ANVISA: 803.420.60.005' },

    { nome: 'CIRUGIAS GERAIS / UNIVERSAIS', categoria: 'categoria8', imagem: '../img/produtos/categorias/kitCirurgico/kitCirurgico2.png', especificacoes: 'Kit Cirúrgico Ortopédico Ombro CÓD. 49.82.69 ANVISA: 803.420.60.005' },

    { nome: 'CIRUGIAS GERAIS / UNIVERSAIS', categoria: 'categoria8', imagem: '../img/produtos/categorias/kitCirurgico/kitCirurgico3.png', especificacoes: 'Kit Cirúrgico Ortopédico Ombro CÓD. 49.82.69 ANVISA: 803.420.60.005' },

    { nome: 'CIRUGIAS GERAIS / UNIVERSAIS', categoria: 'categoria9', imagem: '../img/produtos/categorias/kitOdonto/kitCirurgico4.png', especificacoes: 'Kit Cirúrgico Ortopédico Ombro CÓD. 49.82.69 ANVISA: 803.420.60.005' },

    { nome: 'CIRUGIAS GERAIS / UNIVERSAIS', categoria: 'categoria8', imagem: '../img/produtos/categorias/kitCirurgico/kitCirurgico2.png', especificacoes: 'Kit Cirúrgico Ortopédico Ombro CÓD. 49.82.69 ANVISA: 803.420.60.005' },

    { nome: 'CIRUGIAS GERAIS / UNIVERSAIS', categoria: 'categoria8', imagem: '../img/produtos/categorias/kitCirurgico/kitCirurgico3.png', especificacoes: 'Kit Cirúrgico Ortopédico Ombro CÓD. 49.82.69 ANVISA: 803.420.60.005' }
];

// Lista para armazenar as categorias selecionadas
let categoriasSelecionadas = [];

// Função para exibir produtos com base nas categorias selecionadas
function filtrarProdutos() {
    categoriasSelecionadas = [];

    // Itera sobre as caixas de seleção e adiciona as categorias selecionadas à lista
    document.querySelectorAll('#categorias input[type="checkbox"]:checked').forEach(checkbox => {
        categoriasSelecionadas.push(checkbox.id);
    });

    // Filtra produtos com base nas categorias selecionadas
    const produtosFiltrados = categoriasSelecionadas.length === 0 ? produtos : produtos.filter(produto => categoriasSelecionadas.includes(produto.categoria));

    // Exibe os produtos filtrados
    exibirProdutos(produtosFiltrados);
}

// Função para exibir produtos na página
function exibirProdutos(produtosParaExibir) {
    const produtosContainer = document.getElementById('produto');
    produtosContainer.innerHTML = '';

    produtosParaExibir.forEach(produto => {
        const produtoHTML = `
            <div class="produto" onclick="exibirDetalhes('${produto.nome}')">
                <img src="${produto.imagem}" alt="${produto.nome}">
                <h3>${produto.nome}</h3>
                <h5>${produto.especificacoes}</h5>
            </div>
        `;
        produtosContainer.innerHTML += produtoHTML;
    });
}

function exibirDetalhes(indiceProduto) {
    const produtoSelecionado = produtos[indiceProduto];
    window.location.href = `../html/produtos/aventaisMacacoes.html?produto=${encodeURIComponent(produtoSelecionado.nome)}`;
}

function exibirProdutos(produtosParaExibir) {
    const produtosContainer = document.getElementById('produto');
    produtosContainer.innerHTML = '';

    produtosParaExibir.forEach((produto, indice) => {
        const produtoHTML = `
            <div class="produto" onclick="exibirDetalhes(${indice})">
                <img src="${produto.imagem}" alt="${produto.nome}">
                <h3>${produto.nome}</h3>
                <h5>${produto.especificacoes}</h5>
            </div>
        `;
        produtosContainer.innerHTML += produtoHTML;
    });
}


// Chamada inicial para exibir todos os produtos
filtrarProdutos();

// Função para filtrar produtos com base na barra de pesquisa
function filtrarPorBusca() {
    const termoBusca = document.getElementById('search').value.toLowerCase();
    const produtosFiltrados = produtos.filter(produto =>
        produto.nome.toLowerCase().includes(termoBusca) || produto.especificacoes.toLowerCase().includes(termoBusca)
    );
    exibirProdutos(produtosFiltrados);
}
