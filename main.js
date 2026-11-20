document.addEventListener("DOMContentLoaded", () => {
    console.log("Portafolio de Elon Musk cargado correctamente.");

    const tituloPrincipal = document.getElementById("titulo-interactivo");
    if (tituloPrincipal) {
        tituloPrincipal.addEventListener("click", () => {
            tituloPrincipal.classList.toggle("text-info");
            tituloPrincipal.classList.toggle("fw-bold");
        });
    }
});
// U5 - Repositorio en GitHub
