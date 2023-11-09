const dropdowns = document.querySelectorAll('.dropdown');

dropdowns.forEach((dropdown) => {
    const dropdownMenu = dropdown.querySelector('.dropdown-menu');

    dropdown.addEventListener('mouseover', () => {
        dropdownMenu.style.display = 'block';
    });

    dropdown.addEventListener('mouseout', () => {
        dropdownMenu.style.display = 'none';
    });
});
