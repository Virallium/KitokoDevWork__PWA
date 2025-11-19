
window.addEventListener("load", () => {
  if ("serviceWorker" in navigator) {
  // register the SW from the site root so pages under /html/ also work
  navigator.serviceWorker.register("/sw.js")
      .then((registration) => {
        console.log("Service Worker enregistré ✅", registration);
      })
      .catch((error) => {
        console.log("Erreur d'enregistrement ❌", error);
      });
  }
});