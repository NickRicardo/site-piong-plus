document.addEventListener("DOMContentLoaded", function() {
    const cookieBanner = document.getElementById("cookie-banner");

    // Verifica se o usuário já aceitou os cookies
    const cookiesAccepted = localStorage.getItem("cookies-accepted");

    if (!cookiesAccepted) {
        // Mostra o banner de cookies se ainda não foi aceito
        cookieBanner.style.display = "block";
    }

    // Adiciona evento de clique ao botão de aceitar cookies
    document.getElementById("accept-cookies").addEventListener("click", function() {
        // Esconde o banner de cookies
        cookieBanner.style.display = "none";
        // Armazena a preferência de consentimento do usuário localmente
        localStorage.setItem("cookies-accepted", true);
    });
});
