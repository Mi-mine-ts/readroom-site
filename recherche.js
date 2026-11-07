console.log("recherche.js est chargé!")
const rechercheLivres = document.querySelector("#recherche-livre");
const cartesLivres = document.querySelectorAll(".carte-livre >a");

rechercheLivres.addEventListener("input", function() {
    const recherche = rechercheLivres.value.toLowerCase().trim();
    cartesLivres.forEach(function (carte) {
        const texte = carte.textContent.toLowerCase();
        if (texte.includes(recherche)) {
            carte.style.display = "";
        } else {
            carte.style.display = "none";
        }
    });
});