function buscar() {
    // Obter o valor do input
    var searchTerm = document.getElementById("buscaInput").value.toLowerCase();

    // Obter todos os elementos box-artigo
    var boxes = document.querySelectorAll("#artigos .conteudo-artigos .box-artigo");

    // Iterar sobre cada box
    boxes.forEach(function (box) {
        // Obter o conteúdo do título em minúsculas
        var title = box.querySelector(".title-box").textContent.toLowerCase();

        // Obter o conteúdo do texto em minúsculas
        var text = box.querySelector(".text-box").textContent.toLowerCase();

        // Verificar se o título ou texto contém o termo de busca
        if (title.includes(searchTerm) || text.includes(searchTerm)) {
            // Se sim, exibir a box
            box.style.display = "flex";
        } else {
            // Se não, ocultar a box
            box.style.display = "none";
        }
    });
}
