import { data } from "./data.js";
import { generateHTML } from "./function.js";

const productContainer = document.querySelector(".container");
const input = document.querySelector("input");

// Fonction pour afficher les services
const AfficherService = (services) => {
    productContainer.innerHTML = ""; // <-- Vide le container avant d’afficher
    if (services.length === 0) {
        productContainer.innerHTML = "<p>Aucun service trouvé 😢</p>";
        return;
    }
    else{
            services.forEach(service => {
            const eachservice = document.createElement("div");
            eachservice.innerHTML = generateHTML(service);
            productContainer.appendChild(eachservice);
        });
    }


};

// Affiche tous les produits au chargement
AfficherService(data);

// Filtrage
input.addEventListener("keyup", (e) => {
  const value = e.target.value.toLowerCase();
  const filtre = data.filter(p =>
    p.nom.toLowerCase().includes(value)
  );
  AfficherService(filtre);
});
