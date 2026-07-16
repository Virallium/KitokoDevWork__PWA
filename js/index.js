import { data, projets } from "./data.js";
import { generateHTML, generateProjects } from "./function.js";

const productContainer = document.querySelector(".container");
const input = document.querySelector("input");

// Fonction pour afficher les services*/
const AfficherService = (services) => {
  productContainer.innerHTML = ""; // <-- Vide le container avant d’afficher*/
     if (services.length === 0) {
       productContainer.innerHTML = `<p>Aucun service trouvé 😢</p>
           <p class="cart-shop">🛒</p>
         `;
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

// Affiche tous les produits au chargement*/
if (document.querySelector('.container')) {
  AfficherService(data);
}

// Filtrage*/
if (input) {
  input.addEventListener("keyup", (e) => {
    const value = e.target.value.toLowerCase();
    const filtre = data.filter(p =>
      p.nom.toLowerCase().includes(value)
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
