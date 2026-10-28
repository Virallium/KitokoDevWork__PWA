/**
 * components.js — Shared header, footer & breadcrumbs for KitokoDevWork
 * Loaded with defer, runs after DOM is parsed.
 */
(function () {
  'use strict';

  const WHATSAPP = 'https://wa.me/243853514069';

  const pages = {
    index:              { label: 'Accueil',            path: '/' },
    apropos:            { label: 'À propos',           path: '/html/apropos.html' },
    catalogue:          { label: 'Catalogue',          path: '/html/catalogue.html' },
    services:           { label: 'Services',           path: '/html/services.html' },
    portfolio:          { label: 'Portfolio – Miradi', path: '/html/portfolio.html' },
    portfolioEustache:  { label: 'Portfolio – Eustache', path: '/html/portfolioEustache.html' }
  };
  function getCurrentPage() {
    const path = window.location.pathname;
    for (const [key, page] of Object.entries(pages)) {
      if (path === page.path || path === page.path + '.html' || (key === 'index' && (path === '/' || path === '/index' || path === '/index.html'))) {
        return key;
      }
    }
    return 'index';
  }

  /* ─── HEADER ─── */
  function renderHeader() {
    const target = document.getElementById('shared-header');
    if (!target) return;

    const current = getCurrentPage();

    const navLinks = [
      { key: 'index',     label: 'ACCUEIL', icon:'' },
      { key: 'apropos',   label: 'APROPOS', icon:'' },
      { key: 'catalogue', label: 'CATALOGUE', icon:'' },
      { key: 'services',  label: 'SERVICES',  icon:'' }
    ];

    const linksHTML = navLinks.map(link => {
      const isActive = link.key === current || 
        (current === 'portfolioEustache' && link.key === 'apropos');/*Ajout des icons après */
      return `<li><a href="${pages[link.key].path}"${isActive ? ` class="Active"` : ''}${link.key === 'index' ? ' id="accueil"' : ''} data-text="${link.icon}">${link.label}</a></li>`;
    }).join('\n            ');

    target.innerHTML = `
    <div class="header appear">
      <div class="first-header">
        <div class="infos">
          <div class="info">
            <span><i class="fa-solid fa-phone"></i> 0853514069</span>
          </div>
          <div class="info">
            <span><i class="fa-solid fa-envelope"></i> kitokodevwork@gmail.com</span>
          </div>
          <div class="info">
            <span><i class="fa-solid fa-location-dot"></i> RDC, Kinshasa</span>
          </div>
        </div>
        <div class="rx" aria-label="Réseaux sociaux">
          <a href="https://www.facebook.com/kitokodevwork" target="_blank" rel="noopener noreferrer" aria-label="Facebook"><i class="fa-brands fa-facebook"></i></a>
          <a href="${WHATSAPP}" target="_blank" rel="noopener noreferrer" aria-label="WhatsApp"><i class="fa-brands fa-whatsapp"></i></a>
          <a href="https://www.instagram.com/kitokodevwork?igsh=NHhuMzlidDB5MThl" target="_blank" rel="noopener noreferrer" aria-label="Instagram"><i class="fa-brands fa-instagram"></i></a>
          <a href="https://www.tiktok.com/@kitokodevwork?is_from_webapp=1&sender_device=pc" target="_blank" rel="noopener noreferrer" aria-label="TikTok"><i class="fa-brands fa-tiktok"></i></a>
        </div>
      </div>
      <header>
        <div id="logo"><a href="/"><img src="/photos/KitokoDevWork_logo.webp" alt="Logo KitokoDevWork" width="200"></a></div>
        <nav aria-label="Navigation principale">
          <ul>
              <li class="btnclose-li">
                <button id="close" class="btnclose" type="button" aria-label="Fermer le menu">
                  <i class="fa-solid fa-xmark" aria-hidden="true"></i>
                </button>
              </li>
              ${linksHTML}
              <li class="links_a"><a href="${WHATSAPP}" class="technicSupport" target="_blank" rel="noopener">
                <span><i class="fa-solid fa-headset"></i></span>
                <p>Support</p>
              </a></li>
          </ul>
          <button class="menu" id="bar" type="button" aria-label="Ouvrir le menu" aria-expanded="false" aria-controls="primary-navigation">
            <i class="fa-solid fa-bars" aria-hidden="true"></i>
          </button>
        </nav>
      </header>
    </div>`;

    const header = target.querySelector('.header');
    const menuButton = target.querySelector('#bar');
    const menuIcon = menuButton?.querySelector('i');
    const closeButton = target.querySelector('#close');
    const navigation = target.querySelector('nav ul');

    if (!header || !menuButton || !menuIcon || !closeButton || !navigation) return;
    navigation.id = 'primary-navigation';

    const setMenuOpen = (isOpen) => {
      header.classList.toggle('menu-open', isOpen);
      menuButton.setAttribute('aria-expanded', String(isOpen));
      menuButton.setAttribute('aria-label', isOpen ? 'Fermer le menu' : 'Ouvrir le menu');
      menuIcon.classList.toggle('fa-bars', !isOpen);
      menuIcon.classList.toggle('fa-xmark', isOpen);
    };

    menuButton.addEventListener('click', () => {
      setMenuOpen(!header.classList.contains('menu-open'));
    });
    closeButton.addEventListener('click', () => setMenuOpen(false));
    navigation.addEventListener('click', (event) => {
      if (event.target instanceof Element && event.target.closest('a')) {
        setMenuOpen(false);
      }
    });
    document.addEventListener('keydown', (event) => {
      if (event.key === 'Escape') setMenuOpen(false);
    });
    document.addEventListener('click', (event) => {
      if (event.target instanceof Node && !header.contains(event.target)) {
        setMenuOpen(false);
      }
    });
  }

  /* ─── BREADCRUMBS ─── */
  function renderBreadcrumbs() {
    const current = getCurrentPage();
    if (current === 'index') return;

    const target = document.getElementById('shared-breadcrumbs');
    if (!target) return;

    const crumbs = [{ label: 'Accueil', href: '/' }];

    if (current === 'portfolioEustache') {
      crumbs.push({ label: 'À propos', href: '/html/apropos' });
    }
    if (current === 'portfolio') {
      crumbs.push({ label: 'À propos', href: '/html/apropos' });
    }

    crumbs.push({ label: pages[current].label, href: null });

    const items = crumbs.map((c, i) => {
      const pos = i + 1;
      if (c.href) {
        return `<li itemprop="itemListElement" itemscope itemtype="https://schema.org/ListItem">
          <a itemprop="item" href="${c.href}"><span itemprop="name">${c.label}</span></a>
          <meta itemprop="position" content="${pos}">
        </li>`;
      }
      return `<li itemprop="itemListElement" itemscope itemtype="https://schema.org/ListItem" aria-current="page">
          <span itemprop="name">${c.label}</span>
          <meta itemprop="position" content="${pos}">
        </li>`;
    }).join('');

    target.innerHTML = `
    <nav class="breadcrumbs" aria-label="Fil d'Ariane">
      <ol itemscope itemtype="https://schema.org/BreadcrumbList">
        ${items}
      </ol>
    </nav>`;
  }

  /* ─── FOOTER ─── */
  function renderFooter() {
    const target = document.getElementById('shared-footer');
    if (!target) return;

    target.innerHTML = `
    <footer class="footer" data-aos="fade-up">
      <div class="section__container footer__container">
        <div class='first'>
          <div class="footer__logo scrollAnimation">
            <img src="/photos/KitokoDevWork_logo.webp" alt="Logo KitokoDevWork" width="200" loading="lazy">
          </div>
          <div class="footer__content">
            <p class="scrollAnimation">
              Bienvenue chez KitokoDev Work, où créativité et expertise digitale se rencontrent.
              Notre mission est de concevoir des sites web uniques et performants, en combinant design,
              innovation et expérience utilisateur pour aider votre entreprise à se démarquer en ligne.
            </p>
            <div class="footer_links_box">
              <ul class="footer__links">
                <li class="scrollAnimation">
                  <span><i class="fa-solid fa-location-dot"></i></span> RDC, Kinshasa
                </li>
                <li class="scrollAnimation">
                  <span><i class="fa-solid fa-envelope"></i></span>
                  <a href="mailto:kitokodevwork@gmail.com">KitokoDevWork@gmail.com</a>
                </li>

              </ul>
              <div class="footer__socials scrollAnimation">
                <a href="https://www.facebook.com/kitokodevwork" target="_blank" rel="noopener"><i class="fa-brands fa-facebook-f"></i></a>
                <a href="${WHATSAPP}" target="_blank" rel="noopener"><i class="fa-brands fa-whatsapp"></i></a>
                <a href="https://www.instagram.com/kitokodevwork?igsh=NHhuMzlidDB5MThl" target="_blank" rel="noopener"><i class="fa-brands fa-instagram"></i></a>
                <a href="https://www.tiktok.com/@kitokodevwork?is_from_webapp=1&sender_device=pc" target="_blank" rel="noopener"><i class="fa-brands fa-tiktok"></i></a>
              </div>
            </div>
          </div>
        </div>
        <div class='rapid_links'>
          <h3>Liens rapides</h3>
          <links>
            <a href='/'>Accueil</a>
            <a href='../html/apropos.html'>Apropos</a>
            <a href='../html/catalogue.html'>Catalogue</a>
            <a href='../html/services.html'>Services</a>
          </links>
        </div>
        <div class='politiques'>
          <h3>Politiques</h3>
          <div class='text'>
            <a href=''>Mentions légales</a>
            <a href=''>Politiques de confidentialité</a>
            <a href=''>Conditions générales</a>
            <a href=''>Politiques de protection des données</a>
          </div>
        </div>
      </div>
      <div class="footer__bar">Copyright &copy; 2024-2026 KitokoDevWork. All rights reserved.</div>
    </footer>`;
  }

  /* ─── OFFLINE BANNER ─── */
  function initOfflineBanner() {
    const banner = document.getElementById('offline-banner');
    if (!banner) return;

    function update() {
      banner.hidden = navigator.onLine;
    }
    window.addEventListener('online', update);
    window.addEventListener('offline', update);
    update();
  }

  function initCatalogueDialog() {
    const dialog = document.getElementById('dialog');
    const closeButton = document.getElementById('closecmdBtn');
    if (!(dialog instanceof HTMLDialogElement) || !closeButton) return;

    document.querySelectorAll('a[href="#dialog"]').forEach((trigger) => {
      trigger.addEventListener('click', (event) => {
        event.preventDefault();
        dialog.showModal();
      });
    });

    closeButton.addEventListener('click', () => dialog.close());
    dialog.addEventListener('click', (event) => {
      if (event.target === dialog) dialog.close();
    });
  }

  function initScrollAnimations() {
    if (!window.AOS || window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;

    document.body.classList.add('aos-enabled');
    window.AOS.init({
      once: true,
      duration: 700,
      easing: 'ease-out-cubic',
      offset: 70
    });
  }

  /* ─── INIT ─── */
  renderHeader();
  renderBreadcrumbs();
  renderFooter();
  initOfflineBanner();
  initCatalogueDialog();
  initScrollAnimations();
})();
