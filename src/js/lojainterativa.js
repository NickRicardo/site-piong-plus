// Dados fictícios dos produtos
const produtos = [
    { nome: 'Avental Cirúrgico Proteção Total Impermeável', categoria: 'categoria1', imagem: '../img/produtos/categorias/aventaisMacacao/avental1.png', especificacoes: 'Usado como EPI em proteção do usuário em diversos procedimentos' },

    { nome: 'Calça e Blusa | Pijama SSMMS', categoria: 'categoria2', imagem: '../img/produtos/categorias/calcaBlusa/calcaeblusa1.png', especificacoes: 'Usada em procedimentos de consulta médica, exames, emergência,  visita a pacientes etc.'},

    { nome: 'CAMISOLA AZUL | SSMMS', categoria: 'categoria3', imagem: '../img/produtos/categorias/camisolaBatas/camisola1.png', especificacoes: 'Usada em procedimentos de consulta médica, exames,  emergência,  visita a pacientes etc' },

    { nome: 'CAMPO CIRÚRGICO | SSMMS ', categoria: 'categoria4', imagem: '../img/produtos/categorias/campoCirurgico/campoCirurgico1.png', especificacoes: 'Indicado para procedimentos onde seja necessária   a  manutenção  da   técnica asséptica  e  o  isolamento  da área á ser tratada' },

    { nome: 'CAMPO CIRÚRGICO COM FENESTRA | SSMMS', categoria: 'categoria5', imagem: '../img/produtos/categorias/campoCirurgico/campoCirurgico2.png', especificacoes: 'Indicado para procedimentos onde seja necessária   amanutenção   da    técnica asséptica  e  o  isolamento  da  área  ser tratada.' },

    { nome: 'CAMPO CIR. OFTÁLMICO | SSMMS ', categoria: 'categoria5', imagem: '../img/produtos/categorias/campoOftalmico/campoOftalmico.png', especificacoes: 'Indicado para procedimentos onde seja necessária   a  manutenção  da   técnica asséptica  e  o  isolamentoda área á ser tratada.'},

    { nome: 'COBERTURA IMPERMEÁVEL PARA MESA MAYO | LC 50g', categoria: 'categoria6', imagem: '../img/produtos/categorias/coberturaMesa/cobertura1.png', especificacoes: 'Indicado  para cobertura  da mesa de instrumentos com impermeabilidade e reforço absorvente.' },

    { nome: 'COBERTURA IMPERMEÁVEL PLÁTICO PBD', categoria: 'categoria6', imagem: '../img/produtos/categorias/coberturaMesa/cobertura2.png', especificacoes: 'Indicado  para cobertura  da mesa de instrumentos com impermeabilidade e reforço absorvente.' },

    { nome: 'INVÓLUCRO/WRAP', categoria: 'categoria7', imagem: '../img/produtos/categorias/involucroWrap/involucro1.png', especificacoes: 'Indicado como invólucro para proteger instrumentais cirúrgicos e materiais no processo de esterilização a vapor, óxido de etileno  ou  plasma  de  peróxido de hidrogênio'},

    { nome: 'ORTOPEDIA E TRAUMATOLOGIA', categoria: 'categoria8', imagem: '../img/produtos/categorias/kitCirurgico/kitCirurgico1.png', especificacoes: 'Kit Cirúrgico Ortopédico Ombro CÓD. 49.82.69 ANVISA: 803.420.60.005' },

    { nome: 'CIRUGIAS GERAIS / UNIVERSAIS', categoria: 'categoria8', imagem: '../img/produtos/categorias/kitCirurgico/kitCirurgico.png', especificacoes: 'Kit Cirúrgico Ortopédico Ombro CÓD. 49.82.69 ANVISA: 803.420.60.005' },
    
    { nome: 'CIRUGIAS GERAIS / UNIVERSAIS', categoria: 'categoria8', imagem: '../img/produtos/categorias/kitCirurgico/kitCirurgico2.png', especificacoes: 'Kit Cirúrgico Ortopédico Ombro CÓD. 49.82.69 ANVISA: 803.420.60.005' },

    { nome: 'CIRUGIAS GERAIS / UNIVERSAIS', categoria: 'categoria8', imagem: '../img/produtos/categorias/kitCirurgico/kitCirurgico3.png', especificacoes: 'Kit Cirúrgico Ortopédico Ombro CÓD. 49.82.69 ANVISA: 803.420.60.005' },

    { nome: 'CIRUGIAS GERAIS / UNIVERSAIS', categoria: 'categoria9', imagem: '../img/produtos/categorias/kitOdonto/kitCirurgico4.png', especificacoes: 'Kit Cirúrgico Ortopédico Ombro CÓD. 49.82.69 ANVISA: 803.420.60.005' }



    // Adicione mais produtos conforme necessário
];

// Função para exibir produtos com base na categoria selecionada
function filtrarProdutos(categoriaSelecionada) {
    const produtosFiltrados = produtos.filter(produto => produto.categoria === categoriaSelecionada || categoriaSelecionada === 'todos');
    
    exibirProdutos(produtosFiltrados);
}

// Função para exibir produtos na página
function exibirProdutos(produtosParaExibir) {
    const produtosContainer = document.getElementById('produto');
    produtosContainer.innerHTML = '';

    produtosParaExibir.forEach(produto => {
        const produtoHTML = `
            <div class="produto">
                <img src="${produto.imagem}" alt="${produto.nome}">
                <h3>${produto.nome}</h3>
                <button onclick="exibirDetalhes('${produto.nome}')">Saiba mais</button>
            </div>
        `;
        produtosContainer.innerHTML += produtoHTML;
    });
}

// Função para redirecionar para a página de detalhes do produto
function exibirDetalhes(nomeProduto) {
    window.location.href = `product.html?produto=${encodeURIComponent(nomeProduto)}`;
}
