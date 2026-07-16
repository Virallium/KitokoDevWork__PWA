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

export function generateProjects(projects){
    return `
        <div class="pj scrollAnimation">
            <img src="${projects.photo}" alt="${projects.alt}" width="250px">
            <h2>${projects.type_site}</h2>
            <div class="pjbox">
                <p>Découvrez quelques-uns de nos projets récents qui illustrent notre savoir-faire en matière de création de sites web professionnels et performants.</p>
                <div class="hoverBox">
                    <a href="${projects.lien}" target="_blank">Consulter</a>
                </div>
            </div>
        </div>
    `
}
