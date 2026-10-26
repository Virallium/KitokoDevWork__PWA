import { data, projets } from "./data.js";
import { generateHTML, generateProjects } from "./function.js";

const productContainer = document.querySelector(".container");
const input = document.querySelector("input");

// Fonction pour afficher les services*/
const AfficherService = (services) => {
  productContainer.innerHTML = ""; // <-- Vide le container avant d’afficher*/
  if (services.length === 0) {
    productContainer.innerHTML = `
      <div class="empty-services" role="status">
        <span class="empty-services__icon" aria-hidden="true">
          <i class="fa-solid fa-cart-shopping"></i>
        </span>
        <p class="empty-services__eyebrow">Recherche terminée</p>
        <h2>Aucun service trouvé <span aria-hidden="true">😢</span></h2>
        <p class="empty-services__message">Nous n’avons trouvé aucun résultat pour cette recherche. Essayez un autre mot-clé.</p>
        <button class="empty-services__reset" type="button">Effacer la recherche</button>
      </div>
    `;
    productContainer.querySelector(".empty-services__reset").addEventListener("click", () => {
      input.value = "";
      AfficherService(data);
      input.focus();
    });
    return;
  }

  services.forEach(service => {
    const eachservice = document.createElement("div");
    eachservice.innerHTML = generateHTML(service);
    productContainer.appendChild(eachservice);
  });
};

// Affiche tous les produits au chargement*/
if (document.querySelector('.container')) {
  AfficherService(data);
}

// Filtrage*/
if (input && productContainer) {
  input.addEventListener("input", () => {
    const value = input.value.trim().toLocaleLowerCase();
    const filtre = data.filter(service =>
      service.nom.toLocaleLowerCase().includes(value)
    );
    AfficherService(filtre);
  });
}

 
//Affichage des projets
 const AfficherProjets = (projects) => {
    const projectContainer = document.querySelector(".projectContainer")
    projectContainer.innerHTML = ""
    projects.forEach(project => {
        const eachproject = document.createElement("div")
        eachproject.classList.add('pj')
        eachproject.innerHTML = generateProjects(project)
        projectContainer.appendChild(eachproject)
    })
 }
if (document.querySelector('.projectContainer')) {
  AfficherProjets(projets)
}
