const pageNumber = document.getElementById("page-number");
const nextPageButton = document.getElementById("next-page");
const prevPageButton = document.getElementById("prev-page");

let currentPage = 1;

nextPageButton.addEventListener("click", () => {
    currentPage++;
    updatePageNumber();
    // Aqui você pode adicionar lógica para ir para a próxima página.
    // Por exemplo, redirecionar para a próxima URL.
});

prevPageButton.addEventListener("click", () => {
    if (currentPage > 1) {
        currentPage--;
        updatePageNumber();
        // Aqui você pode adicionar lógica para voltar para a página anterior.
        // Por exemplo, redirecionar para a página anterior.
    }
});

function updatePageNumber() {
    pageNumber.textContent = currentPage;
}

updatePageNumber();
