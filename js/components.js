/**
 * components.js — Shared header, footer & breadcrumbs for KitokoDevWork
 * Loaded with defer, runs after DOM is parsed.
 */
(function () {
  'use strict';

  const WHATSAPP = 'https://wa.me/243853514069';
  const path = window.location.pathname;

  const pages = {
    index:              { label: 'Accueil',            path: '/' },
    apropos:            { label: 'À propos',           path: '/html/apropos.html' },
    catalogue:          { label: 'Catalogue',          path: '/html/catalogue.html' },
    services:           { label: 'Services',           path: '/html/services.html' },
    portfolio:          { label: 'Portfolio – Miradi', path: '/html/portfolio.html' },
    portfolioEustache:  { label: 'Portfolio – Eustache', path: '/html/portfolioEustache.html' }
  };
  function getCurrentPage() {
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
      { key: 'index',     label: 'ACCUEIL' },
      { key: 'apropos',   label: 'APROPOS' },
      { key: 'catalogue', label: 'CATALOGUE' },
      { key: 'services',  label: 'SERVICES' }
    ];

    const linksHTML = navLinks.map(link => {
      const isActive = link.key === current || 
        (current === 'portfolioEustache' && link.key === 'apropos');
      return `<li><a href="${pages[link.key].path}"${isActive ? ' class="Active"' : ''}${link.key === 'index' ? ' id="accueil"' : ''}>${link.label}</a></li>`;
    }).join('\n            ');

    target.innerHTML = `
    <div class="rgbafornavphone"></div>
    <header class="header appear">
      <div id="logo"><a href="/"><img src="/photos/KitokoDevWork_logo.webp" alt="Logo KitokoDevWork" width="200"></a></div>
      <nav>
        <ul>
            <li class="btnclose-li" aria-hidden="true">
              <button id="close" class="btnclose" type="button" aria-label="Fermer le menu">
                <i class="fa-solid fa-xmark"></i>
              </button>
            </li>
            ${linksHTML}
            <li><a href="${WHATSAPP}" class="technicSupport" target="_blank" rel="noopener">
              <span><i class="fa-solid fa-headset"></i></span>
              <p>Support</p>
            </a></li>
        </ul>
        <div class="menu">
          <i class="fa-solid fa-bars" id="bar"></i>
        </div>
      </nav>
    </header>`;
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
    <footer class="footer">
      <div class="section__container footer__container">
        <div class="footer__logo scrollAnimation">
          <img src="/photos/KitokoDevWork_logo.webp" alt="Logo KitokoDevWork" width="200" loading="lazy">
        </div>
        <div class="footer__content">
          <p class="scrollAnimation">
            Bienvenue chez KitokoDev Work, où créativité et expertise digitale se rencontrent.
            Notre mission est de concevoir des sites web uniques et performants, en combinant design,
            innovation et expérience utilisateur pour aider votre entreprise à se démarquer en ligne.
          </p>
          <div>
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

  /* ─── INIT ─── */
  renderHeader();
  renderBreadcrumbs();
  renderFooter();
  initOfflineBanner();

  // Re-observe scroll animations on dynamically injected elements
  window.__reobserveScroll = function () {
    if (window.__scrollObserver) {
      document.querySelectorAll('.scrollAnimation').forEach(function (el) {
        window.__scrollObserver.observe(el);
      });
    }
  };
  // Will be called from style.js after observer is set up
})();
