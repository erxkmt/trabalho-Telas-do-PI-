// Exibe uma mensagem ao clicar no botão "Saiba Mais"
function mostrarMensagem() {
    alert("Bem-vindo à SUPRAcompany! Explore nossos produtos e aproveite nossas ofertas.");
}

// Simulação de navegação entre páginas
document.addEventListener("DOMContentLoaded", function () {
    let links = document.querySelectorAll("nav ul li a");

    links.forEach(link => {
        link.addEventListener("click", function (event) {
            event.preventDefault();
            let destino = this.getAttribute("href");
            window.location.href = destino;
        });
    });
});
