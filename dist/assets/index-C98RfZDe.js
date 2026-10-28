var e=(e,t,n)=>()=>{if(n)throw n[0];try{return e&&(t=e(e=0)),t}catch(e){throw n=[e],e}},t=(e,t)=>()=>(t||(e((t={exports:{}}).exports,t),e=null),t.exports);(function(){let e=document.createElement(`link`).relList;if(e&&e.supports&&e.supports(`modulepreload`))return;for(let e of document.querySelectorAll(`link[rel="modulepreload"]`))n(e);new MutationObserver(e=>{for(let t of e)if(t.type===`childList`)for(let e of t.addedNodes)e.tagName===`LINK`&&e.rel===`modulepreload`&&n(e)}).observe(document,{childList:!0,subtree:!0});function t(e){let t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),t.credentials=e.crossOrigin===`use-credentials`?`include`:e.crossOrigin===`anonymous`?`omit`:`same-origin`,t}function n(e){if(e.ep)return;e.ep=!0;let n=t(e);fetch(e.href,n)}})();var n,r,i=e((()=>{n=[{iconentreprise:`https://cocoricoweb.com/wp-content/uploads/2018/04/carte-visite-logo-site-vitrine-04-16-258.jpg`,nom:`Site vitrine`,prix:`$120`,disponibilite:`disponible`,description:`Présentez votre activité avec un site professionnel, clair et responsive.`,concerne:`pour PME, ASBL, Eglise, Agence, hôtel, institution, Autre`,li:`Design sur mesure, hébergement 1 an, domaine offert 1 an, SSL, support 2 semaines, responsive, pages et contenus`,duree:`3jours`},{iconentreprise:`https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSewPm2yujAbsj7YEAkPDqi2B3h8H5CoTv8zw&s`,nom:`Site(institutionnel)`,prix:`$180`,disponibilite:`disponible`,description:`Valorisez votre image avec un site structuré, moderne et adapté aux organisations.`,concerne:`pour Entreprise, ONG, etc.`,li:`Design sur mesure, hébergement 1 an, domaine offert 1 an, SSL, support 2 semaines, responsive, pages, formulaire de contact`,duree:`7jours`},{iconentreprise:`https://i.ytimg.com/vi/Wbc2db82jLQ/maxresdefault.jpg`,prix:`$250`,nom:`Site(E-commerce)`,disponibilite:`disponible`,description:`Vendez en ligne avec une boutique responsive, sécurisée et facile à gérer.`,concerne:`Restaurants, boutiques, etc.`,li:`Design sur mesure, hébergement 1 an, domaine offert 1 an, SSL, support 2 semaines, responsive, boutique, SEO, gestion de stock`,duree:`2 semaines`},{iconentreprise:`/photos/pwa-main-image-latest.png`,prix:`$250`,nom:`PWA`,disponibilite:`A venir`,description:`Une application web installable et hors ligne, idéale pour une expérience mobile fluide et professionnelle.`,concerne:`Pour entreprises qui veulent une présence mobile professionnelle : restaurants, magasins, services de livraison, agences, startups, écoles, etc.`,li:`Design sur mesure, hébergement 1 an, domaine offert 1 an, SSL, support 2 semaines, responsive, PWA installable, hors ligne, smartphone`,duree:`2 à 3 semaines`},{iconentreprise:`https://www.kiwili.com/wp-content/uploads/2018/05/Logiciel-de-gestion-en-ligne-1.jpg`,prix:`$270`,nom:`Logiciel(gestion)`,disponibilite:`A venir`,description:`Automatisez la gestion des clients, stocks, commandes et factures avec un tableau de bord web intuitif.`,concerne:`Pour PME, restaurants, boutiques, agences, associations et toutes structures souhaitant automatiser leur gestion quotidienne.`,li:`Design sur mesure, hébergement 1 an, domaine offert 1 an, SSL, support 2 semaines, responsive, clients, stocks, commandes, factures, reporting, sécurité`,duree:`3 à 6 semaines`},{iconentreprise:`/photos/vignette_IA_0.jpg`,prix:`$350`,nom:`Intégration IA`,disponibilite:`A venir`,description:`Intégrez l'intelligence artificielle pour automatiser les tâches, améliorer l'expérience utilisateur et optimiser les performances de votre site ou application.`,concerne:`Pour entreprises, startups, développeurs et toute structure souhaitant exploiter l'IA pour améliorer ses services et produits.`,li:`Design sur mesure, hébergement 1 an, domaine offert 1 an, SSL, support 2 semaines, responsive, intégration d'IA pour automatisation, personnalisation et optimisation`,duree:`3 à 4 semaines`}],r=[{photo:`./photos/img_4.png`,alt:`Site internet pour la gestion d'un departement le Céncale`,type_site:`Site éclésiastique`,lien:`https://appli-gestion-departement-1.onrender.com`},{photo:`./photos/img_7.png`,alt:`Maquette AGORA WANGA`,type_site:`Site de presentation Agora Wanga`,lien:`https://agora-wanga.onrender.com/Apropos/`},{photo:`./photos/elixir.png`,alt:`Maquette application web pour l'entreprise Elixir data`,type_site:`Site d'information`,lien:`https://elixir-group-1.onrender.com/`},{photo:`https://www.greenpropertyrdc.com/`,alt:`Application de location des maisons GreenProperty`,type_site:`Application de gestion GreenProperty`,lien:`https://www.greenpropertyrdc.com/`},{photo:``,alt:`Site informatif de vision jeunes`,type_site:`Site vitrine Vision jeune`,lien:`https://vision-jeunes.railway.app`}]}));function a(e){return`
        <div class="contentsHTML scrollAnimation" data-aos="fade-up">
            <div class="iconentreprise">
               <img src="${e.iconentreprise}" alt="images"/> 
            </div>
            <div class="txt_top">
                <p class="servicesNom">${e.nom}</p>
                <p class="prix">${e.prix}</p>
                <p class="servicesDisponible">${e.disponibilite}</p>
            </div>
            <div class="txt_center">
                <p class="description">${e.description}</p>
                <p>${e.concerne}</p>
            </div>
            <p class="li">${e.li}</p>
            <p class="duree">${e.duree}</p>
        </div>
    `}function o(e){return`
        <div class="pj scrollAnimation" data-aos="zoom-in">
            <img src="${e.photo}" alt="${e.alt}" width="250px">
            <h2>${e.type_site}</h2>
            <div class="pjbox">
                <p>Découvrez quelques-uns de nos projets récents qui illustrent notre savoir-faire en matière de création de sites web professionnels et performants.</p>
                <div class="hoverBox">
                    <a href="${e.lien}" target="_blank">Consulter</a>
                </div>
            </div>
        </div>
    `}var s=e((()=>{}));t((()=>{i(),s();var e=document.querySelector(`.container`),t=document.querySelector(`input`),c=r=>{if(e.innerHTML=``,r.length===0){e.innerHTML=`
      <div class="empty-services" role="status">
        <span class="empty-services__icon" aria-hidden="true">
          <i class="fa-solid fa-cart-shopping"></i>
        </span>
        <p class="empty-services__eyebrow">Recherche terminée</p>
        <h2>Aucun service trouvé <span aria-hidden="true">😢</span></h2>
        <p class="empty-services__message">Nous n’avons trouvé aucun résultat pour cette recherche. Essayez un autre mot-clé.</p>
        <button class="empty-services__reset" type="button">Effacer la recherche</button>
      </div>
    `,e.querySelector(`.empty-services__reset`).addEventListener(`click`,()=>{t.value=``,c(n),t.focus()});return}r.forEach(t=>{let n=document.createElement(`div`);n.innerHTML=a(t),e.appendChild(n)}),document.body.classList.contains(`aos-enabled`)&&window.AOS.refreshHard()};document.querySelector(`.container`)&&c(n),t&&e&&t.addEventListener(`input`,()=>{let e=t.value.trim().toLocaleLowerCase();c(n.filter(t=>t.nom.toLocaleLowerCase().includes(e)))}),document.querySelector(`.projectContainer`)&&(e=>{let t=document.querySelector(`.projectContainer`);t.innerHTML=``,e.forEach(e=>{let n=document.createElement(`div`);n.classList.add(`pj`),n.innerHTML=o(e),t.appendChild(n)}),document.body.classList.contains(`aos-enabled`)&&window.AOS.refreshHard()})(r)}))();