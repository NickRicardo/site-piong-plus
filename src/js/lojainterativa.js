// Dados fictícios dos produtos
const produtos = [
    //#region Macacoes e Aventais (Categoria1)
    {
        nome: 'Avental Cirúrgico Proteção Total Impermeável',
        categoria: 'categoria1',
        imagem: '../img/produtos/categorias/aventaisMacacao/aventalProtecao.png',
        especificacoes: 'Usado como EPI em proteção do usuário',
        paginaDetalhes: '../../../src/html/produtos/aventalProtecao.html'
    },

    {
        nome: 'Avental Emergency Plus | LC Impermeável',
        categoria: 'categoria1',
        imagem: '../img/produtos/categorias/aventaisMacacao/aventalEmergency.png',
        especificacoes: 'Usado como EPI em proteção do usuário em diversos procedimentos',
        paginaDetalhes: '../../../src/html/produtos/aventaisMacacoesEmergency.html'
    },

    {
        nome: 'Avental Cirúrgico | Standard SSMMS',
        categoria: 'categoria1',
        imagem: '../img/produtos/categorias/aventaisMacacao/aventalStandard.png',
        especificacoes: 'Usado como EPI em proteção do usuário em diversos procedimentos',
        paginaDetalhes: '../../../src/html/produtos/aventaisMacacoesStandard.html'
    },

    {
        nome: 'Avental Verde | N/Estéril TNT',
        categoria: 'categoria1',
        imagem: '../img/produtos/categorias/aventaisMacacao/avental2.png',
        especificacoes: 'Usado como EPI em proteção do usuário em diversos procedimentos',
        paginaDetalhes: '../../../src/html/produtos/aventaisMacacoesVerdeNEsteril.html'
    },

    {
        nome: 'Avental Amarelo | N/Estéril SSMMS',
        categoria: 'categoria1',
        imagem: '../img/produtos/categorias/aventaisMacacao/avental3.png',
        especificacoes: 'Usado como EPI em proteção do usuário em diversos procedimentos',
        paginaDetalhes: '../../../src/html/produtos/aventaisMacacoesAmareloNEsteril.html'
    },

    {
        nome: 'Avental De Proteção Branco | TNT',
        categoria: 'categoria1',
        imagem: '../img/produtos/categorias/aventaisMacacao/aventalTNT.png',
        especificacoes: 'Usado como EPI em proteção do usuário em diversos procedimentos',
        paginaDetalhes: '../../../src/html/produtos/aventaisMacacoesBrancoTnt.html'
    },

    {
        nome: 'Avental De Proteção Branco Com Tiras | TNT',
        categoria: 'categoria1',
        imagem: '../img/produtos/categorias/aventaisMacacao/aventalTntComTiras.png',
        especificacoes: 'Usado como EPI em proteção do usuário em diversos procedimentos',
        paginaDetalhes: '../../../src/html/produtos/aventaisMacacoesComTiras.html'
    },

    {
        nome: 'Macacão Tyclean C/ Ziper e Capuz N/Estéril',
        categoria: 'categoria1',
        imagem: '../img/produtos/categorias/aventaisMacacao/macacao1.png',
        especificacoes: 'Usado como EPI em proteção do usuário em diversos procedimentos',
        paginaDetalhes: '../../../src/html/produtos/aventaisMacacoesMacacaoTyclean.html'
    },
    //#endregion

    //#region Calça e Blusa (Categoria2)
    {
        nome: 'Calça e Blusa | Pijama SSMMS',
        categoria: 'categoria2',
        imagem: '../img/produtos/categorias/calcaBlusa/calcaeblusa1.png',
        especificacoes: 'Usada em procedimentos de consulta médica, exames, emergência,  visita a pacientes etc.',
        paginaDetalhes: '../../../src/html/produtos/calcaEBlusa.html'
    },

    //#endregion

    //#region Camisola Azul (Categoria3)
    {
        nome: 'CAMISOLA AZUL | SSMMS',
        categoria: 'categoria3',
        imagem: '../img/produtos/categorias/camisolaBatas/camisola1.png',
        especificacoes: 'Usada em procedimentos de consulta médica, exames,  emergência,  visita a pacientes etc',
        paginaDetalhes: '../../../src/html/produtos/camisola.html'
    },
    //#endregion

    //#region Campo Cirúrgico (Categoria4)
    {
        nome: 'CAMPO CIRÚRGICO | SSMMS ',
        categoria: 'categoria4',
        imagem: '../img/produtos/categorias/campoCirurgico/campoCirurgico1.png',
        especificacoes: 'Indicado para procedimentos onde seja necessária   a  manutenção  da   técnica asséptica  e  o  isolamento  da área á ser tratada',
        paginaDetalhes: '../../../src/html/produtos/campoCirurgico.html'

    },

    {
        nome: 'CAMPO CIRÚRGICO COM FENESTRA | SSMMS',
        categoria: 'categoria4',
        imagem: '../img/produtos/categorias/campoCirurgico/campoCirurgico2.png',
        especificacoes: 'Indicado para procedimentos onde seja necessária   amanutenção   da    técnica asséptica  e  o  isolamento  da  área  ser tratada.',
        paginaDetalhes: '../../../src/html/produtos/campoCirurgicoFenestra.html'
    },
    //#endregion

    //#region Campo Cirúrgico Oftálmico (Categoria5)
    {
        nome: 'Campo Cirúrgico Oftálmico | SSMMS',
        categoria: 'categoria5',
        imagem: '../img/produtos/categorias/campoOftalmico/campoOftalmico2.png',
        especificacoes: 'Indicado  para cobertura  da mesa de instrumentos com impermeabilidade e reforço absorvente.',
        paginaDetalhes: '../../../src/html/produtos/campoOftalmico.html'
    },
    //#endregion

    //#region Cobertura de Mesa (Categoria6)
    {
        nome: 'COBERTURA IMPERMEÁVEL PARA MESA AUXILIAR',
        categoria: 'categoria6',
        imagem: '../img/produtos/categorias/coberturaMesa/coberturaMesaAux.jpg',
        especificacoes: 'Indicado  para cobertura  da mesa de instrumentos com impermeabilidade e reforço absorvente.',
        paginaDetalhes: '../../../src/html/produtos/coberturaImpermeavelMesaAuxiliar.html'
    },

    {
        nome: 'COBERTURA IMPERMEÁVEL PARA MESA MAYO',
        categoria: 'categoria6',
        imagem: '../img/produtos/categorias/coberturaMesa/coberturaMesaMayo.png',
        especificacoes: 'Indicado  para cobertura  da mesa de instrumentos com impermeabilidade e reforço absorvente.',
        paginaDetalhes: '../../../src/html/produtos/coberturaImpermeavelMesaMayo.html'
    },

    {
        nome: 'COBERTURA IMPERMEÁVEL PLÁTICO PBD',
        categoria: 'categoria6',
        imagem: '../img/produtos/categorias/coberturaMesa/coberturaPEBD.png',
        especificacoes: 'Indicado  para cobertura  da mesa de instrumentos com impermeabilidade e reforço absorvente.',
        paginaDetalhes: '../../../src/html/produtoscoberturaImpermeavelComReforco.html'
    },
    //#endregion

    //#region Wrap (Categoria7)
    {
        nome: 'INVÓLUCRO | WRAP',
        categoria: 'categoria7',
        imagem: '../img/produtos/categorias/involucroWrap/involucro1.png',
        especificacoes: 'Indicado como invólucro para proteger instrumentais cirúrgicos e materiais no processo de esterilização a vapor, óxido de etileno  ou  plasma  de  peróxido de hidrogênio',
        paginaDetalhes: '../../../src/html/produtos/wrap.html'
    },
    //#endregion

    //#region Kit's Cirúrgicos (Categoria8)
    {
        nome: 'ORTOPEDIA E TRAUMATOLOGIA | Kit Cir. Ortopédico Ombro',
        categoria: 'categoria8',
        imagem: '../img/produtos/categorias/kitCirurgico/kit498269.png',
        especificacoes: 'Kit Cirúrgico Ortopédico Ombro CÓD. 49.82.69 ANVISA: 803.420.60.005',
        paginaDetalhes: '../../../src/html/produtos/kitOmbro.html'
    },

    {
        nome: 'ORTOPEDIA E TRAUMATOLOGIA | Kit Cir. Ortopédico Joelho',
        categoria: 'categoria8',
        imagem: '../img/produtos/categorias/kitCirurgico/kit488286.png',
        especificacoes: 'Kit Cirúrgico Ortopédico Joelho CÓD. 48.82.86 ANVISA: 803.420.60.005',
        paginaDetalhes: '../../../src/html/produtos/kitJoelho.html'
    },

    {
        nome: 'ORTOPEDIA E TRAUMATOLOGIA | Kit Cir. Ortopédico Quadril',
        categoria: 'categoria8',
        imagem: '../img/produtos/categorias/kitCirurgico/kit488360.png',
        especificacoes: 'Kit Cirúrgico Ortopédico Quadrl CÓD. 48.83.60 ANVISA: 803.420.60.005',
        paginaDetalhes: '../../../src/html/produtos/kitQuadril.html'
    },

    {
        nome: 'OBSTETRÍCIA / GINECOLOGIA / UROLOGIA | Kit Cir. Cesárea',
        categoria: 'categoria8',
        imagem: '../img/produtos/categorias/kitCirurgico/kit488478.png',
        especificacoes: 'Kit Cirúrgico Ortopédico Quadrl CÓD. 48.84.78 ANVISA: 803.420.60.005',
        paginaDetalhes: '../../../src/html/produtos/kitCesaria.html'
    },

    {
        nome: 'OBSTETRÍCIA / GINECOLOGIA / UROLOGIA | Kit Cir. Cesárea Humanizado',
        categoria: 'categoria8',
        imagem: '../img/produtos/categorias/kitCirurgico/kit488480.png',
        especificacoes: 'Kit Cirúrgico Ortopédico Quadrl CÓD. 48.84.78 ANVISA: 803.420.60.005',
        paginaDetalhes: '../../../src/html/produtos/kitHumanizada.html'
    },

    {
        nome: 'OBSTETRÍCIA / GINECOLOGIA / UROLOGIA | Kit Cir. Ginecológico',
        categoria: 'categoria8',
        imagem: '../img/produtos/categorias/kitCirurgico/kit468312.png',
        especificacoes: 'Kit Cirúrgico Ortopédico Quadrl CÓD. 46.83.12 ANVISA: 803.420.60.005',
        paginaDetalhes: '../../../src/html/produtos/kitGinecologico.html'
    },

    {
        nome: 'CARDIOLOGIA | Kit Cir. Hemodinâmica',
        categoria: 'categoria8',
        imagem: '../img/produtos/categorias/kitCirurgico/kit488276.png',
        especificacoes: 'Kit Cirúrgico Ortopédico Quadrl CÓD. 48.82.76 ANVISA: 803.420.60.005',
        paginaDetalhes: '../../../src/html/produtos/kitHemodinamica.html'
    },

    {
        nome: 'CIRUGIAS GERAIS/UNIVERSAIS | Kit Cir. Universal',
        categoria: 'categoria8',
        imagem: '../img/produtos/categorias/kitCirurgico/kit488265.png',
        especificacoes: 'Kit Cirúrgico Universal CÓD. 48.82.65 ANVISA: 803.420.60.005',
        paginaDetalhes: '../../../src/html/produtos/kitUniversal.html'
    },

    {
        nome: 'CIRUGIAS GERAIS/UNIVERSAIS | Kit Cir. Universal com Avental',
        categoria: 'categoria8',
        imagem: '../img/produtos/categorias/kitCirurgico/kit488268.png',
        especificacoes: 'Kit Cirúrgico Universal com Avental CÓD. 48.82.68 ANVISA: 803.420.60.005',
        paginaDetalhes: '../../../src/html/produtos/kitUniversalAvental.html'
    },
    //#endregion

    //#region Kit Odonto (Categoria9)
    {
        nome: 'Kit Cirúrgico Odonto Med | Produto Estéril',
        categoria: 'categoria9',
        imagem: '../img/produtos/categorias/kitOdonto/kitOdonto.png',
        especificacoes: 'Usada em procedimentos de consulta médica, exames, emergência,  visita a pacientes etc.',
        paginaDetalhes: '../../../src/html/produtos/kitOdonto.html'
    },
    //#endregion
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
function exibirDetalhes(nomeProduto) {
    const produtoSelecionado = produtos.find(produto => produto.nome === nomeProduto);

    if (produtoSelecionado && produtoSelecionado.paginaDetalhes) {
        window.location.href = `../html/produtos/${produtoSelecionado.paginaDetalhes}?produto=${encodeURIComponent(produtoSelecionado.nome)}`;
    } else {
        console.error("Produto não encontrado ou página de detalhes não especificada.");
    }
}

function exibirProdutos(produtosParaExibir) {
    const produtosContainer = document.getElementById('produto');
    produtosContainer.innerHTML = '';

    produtosParaExibir.forEach((produto, indice) => {
        const produtoHTML = `
        <div class="produto" onclick="exibirDetalhes('${produto.nome}')">
        <img class="produto-imagem" src="${produto.imagem}" alt="${produto.nome}">
        <div class="text-content">
        <h3>${produto.nome}</h3>
        <h5>${produto.especificacoes}</h5>
        </div>
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

