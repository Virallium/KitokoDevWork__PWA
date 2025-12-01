import { data } from "./data.js";
import { generateHTML } from "./function.js";

const productContainer = document.querySelector(".container");
const input = document.querySelector("input");

//Fonction pour Soumettre le formulaire de contact
async function submitForm(event) {
  event.preventDefault(); // Empêche le rechargement de la page
  const form = document.getElementById("contactForm");
  const formData = new FormData(form);
  const entries = Object.fromEntries(formData.entries());
  try {
    const response = await fetch("https://apicontactkdevwork.onrender.com/api/add", {
      method: 'POST',
      headers: { 
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(entries)
    });                    
    if (!response.ok) {
      console.log('erreur');
      throw new Error('Erreur réponse serveur');
    }else{         
      //Callback à implémenté plus tard 
      
      console.log('success');
      //Boite de dialogue de succès
      showAlertInformation('Succès', 'Votre message a été envoyé avec succès !');
      form.reset(); // Réinitialise le formulaire après soumission
    }
  } catch (error) {
    console.error('Erreur:', error);
    //Callback à implémenté plus tard
    
    //Boite de dialogue d'erreur
    showAlertError('Erreur', 'Une erreur est survenue lors de l\'envoi de votre message. Veuillez réessayer plus tard.');
  }
}
if (window.location.pathname.endsWith("apropos.html") ) {
  const form = document.getElementById("contactForm");
  console.log(form)
  form.addEventListener("submit", event => submitForm(event));
}
//Fonction qui crée les boites de dialogues de confirmation
function showAlertInformation(title,text) {
    return Swal.fire({
        title: title,
        text: text,
        icon: 'success',
        confirmButtonText: 'OK'
    });
}
function showAlertError(title,text) {
    return Swal.fire({
        title: title,
        text: text,
        icon: 'error',
        confirmButtonText: 'OK'
    });
}

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

