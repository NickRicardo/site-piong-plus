const hamburgerMenu = document.querySelector('.hamburger-menu');
const menuNav = document.querySelector('.menu-nav');

hamburgerMenu.addEventListener('click', () => {
    hamburgerMenu.classList.toggle('active');
    menuNav.classList.toggle('active');
});

// Adicione este código para fechar o menu quando um item de menu é clicado
const menuItems = document.querySelectorAll('.menu-nav ul li a');

menuItems.forEach((item) => {
    item.addEventListener('click', () => {
        hamburgerMenu.classList.remove('active');
        menuNav.classList.remove('active');
    });
});
