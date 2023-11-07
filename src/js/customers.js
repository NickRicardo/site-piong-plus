document.addEventListener('DOMContentLoaded', function () {
    const customerBoxes = document.querySelectorAll('.customer-box');
    let currentIndex = 0;

    // Função para mostrar a avaliação do cliente atual
    function showCustomerReview(index) {
        customerBoxes.forEach((box, i) => {
            if (i === index) {
                box.style.display = 'block';
            } else {
                box.style.display = 'none';
            }
        });
    }

    // Inicializa o slider com a primeira avaliação de cliente
    showCustomerReview(currentIndex);

    // Event listeners para os botões de slide anterior e próximo
    const prevSlideButton = document.querySelector('.prev-slide');
    const nextSlideButton = document.querySelector('.next-slide');

    prevSlideButton.addEventListener('click', () => {
        currentIndex = (currentIndex - 1 + customerBoxes.length) % customerBoxes.length;
        showCustomerReview(currentIndex);
    });

    nextSlideButton.addEventListener('click', () => {
        currentIndex = (currentIndex + 1) % customerBoxes.length;
        showCustomerReview(currentIndex);
    });
});

