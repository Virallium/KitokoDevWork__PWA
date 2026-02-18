/* ── Preloader removal (must wait for full page load) ── */
window.addEventListener("load", () => {
    const preloader = document.querySelector(".preloader");
    if (preloader) {
        setTimeout(() => {
            preloader.classList.add('remove');
            preloader.addEventListener('transitionend', () => {
                preloader.style.display = 'none';
            }, { once: true });
        }, 600);
    }
});

/* ── Mobile nav toggle ── */
/* Runs immediately: components.js (defer, loaded before) has already injected the header */
(function () {
    const closedbtn = document.querySelector("#close");
    const rgba = document.querySelector(".rgbafornavphone");
    const ul = document.querySelector("nav ul");
    const bar = document.querySelector("#bar");

    if (bar && ul && rgba) {
        bar.addEventListener("click", () => {
            ul.classList.add("displaybar");
            ul.classList.remove("close");
            rgba.classList.add("rgbafornavphoneVisible");
        });
        rgba.addEventListener("click", () => {
            ul.classList.remove("displaybar");
            ul.classList.add("close");
            rgba.classList.remove("rgbafornavphoneVisible");
        });
    }
    if (closedbtn && ul && rgba) {
        closedbtn.addEventListener("click", () => {
            ul.classList.remove("displaybar");
            ul.classList.add("close");
            rgba.classList.remove("rgbafornavphoneVisible");
        });
    }

    /* ── Catalogue dialog (only on catalogue page) ── */
    const btnCommander = document.querySelectorAll(".btnCommander");
    const dialog = document.querySelector("dialog");
    const closeDialog = document.querySelector("#closecmdBtn");
    if (btnCommander.length && dialog && closeDialog) {
        btnCommander.forEach(btn => {
            btn.addEventListener("click", () => {
                dialog.showModal();
                dialog.classList.add("dialogOpen");
                dialog.classList.remove("removeDialog");
            });
        });
        closeDialog.addEventListener("click", () => {
            dialog.close();
            dialog.classList.add("removeDialog");
            dialog.classList.remove("dialogopen");
        });
    }
})();

/* ── Scroll animation observer ── */
const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
        if (entry.isIntersecting) {
            entry.target.classList.add("see");
            entry.target.classList.remove("notsee");
        } else {
            entry.target.classList.add("notsee");
            entry.target.classList.remove("see");
        }
    });
});
window.__scrollObserver = observer;

document.querySelectorAll(".scrollAnimation").forEach(box => observer.observe(box));

/* Re-observe dynamically injected elements (called from components.js) */
if (typeof window.__reobserveScroll === 'function') {
    window.__reobserveScroll();
}






