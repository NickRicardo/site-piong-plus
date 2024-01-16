function toggleCategoriasDropdown() {
    var dropdownContent = document.getElementById("categorias-dropdown-content");

    // Inverta a visibilidade do dropdown
    dropdownContent.style.display = (dropdownContent.style.display === "block") ? "none" : "block";

    // Adicione um evento de clique para os itens da lista dentro do dropdown
    document.querySelectorAll('#categorias-dropdown-content li').forEach(function(li) {
        li.addEventListener('click', function(event) {
            // Evite a propagação do clique para que o dropdown não seja fechado
            event.stopPropagation();

            // Marque/desmarque o checkbox associado ao item clicado
            var checkbox = li.querySelector('input[type="checkbox"]');
            checkbox.checked = !checkbox.checked;

            // Filtra os produtos ao marcar/desmarcar um checkbox
            filtrarProdutos();
        });
    });

    // Adicione um evento de clique fora do dropdown para fechá-lo
    document.addEventListener('click', function(event) {
        if (!event.target.matches('#categorias-dropdown-btn') && !dropdownContent.contains(event.target)) {
            dropdownContent.style.display = 'none';
        }
    });
}
