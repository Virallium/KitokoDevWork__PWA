const CACHE_NAME = 'kitoko-cache-v1';
const ASSETS_TO_CACHE = [
  '/',
  '/index.html',
  '/styles/style.css',
  '/js/index.js',
  // ajoute ici les fichiers importants
];

self.addEventListener('install', (event) => {
  event.waitUntil(
    caches.open(CACHE_NAME).then(cache => cache.addAll(ASSETS_TO_CACHE))
  );
  self.skipWaiting();
});

self.addEventListener('activate', (event) => {
  event.waitUntil(
    caches.keys().then(keys =>
      Promise.all(keys.map(k => { if (k !== CACHE_NAME) return caches.delete(k); }))
    )
  );
  self.clients.claim();
});

self.addEventListener('fetch', (event) => {
  // simple stratégie cache-first
  event.respondWith(
    caches.match(event.request).then(cached => {
      if (cached) return cached;
      return fetch(event.request).then(res => {
        // optionnel : mettre dans le cache les réponses GET
        if (event.request.method === 'GET' && res && res.status === 200) {
          const resClone = res.clone();
          caches.open(CACHE_NAME).then(cache => cache.put(event.request, resClone));
        }
        return res;
      }).catch(() => {
        // fallback si nécessaire (page offline)
        if (event.request.mode === 'navigate') {
          return caches.match('/index.html');
        }
      });
    })
  );
});
