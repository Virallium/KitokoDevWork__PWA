export function generateHTML(services){
    return`
        <div class="contentsHTML scrollAnimation">
            <div class="iconentreprise">
               <img src="${services.iconentreprise}" alt="images"/> 
            </div>
            <div class="txt_top">
                <p class="servicesNom">${services.nom}</p>
                <p class="prix">${services.prix}</p>
                <p class="servicesDisponible">${services.disponibilite}</p>
            </div>
            <div class="txt_center">
                <p class="description">${services.description}</p>
                <p>${services.concerne}</p>
            </div>
            <p class="li">${services.li}</p>
            <p class="duree">${services.duree}</p>
        </div>
    `
}
