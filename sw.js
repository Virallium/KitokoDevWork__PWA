const CACHE_NAME = 'kitoko-cache-v2';
const ASSETS_TO_CACHE = [
  '/',
  '/index.html',
  '/offline.html',
  '/styles/style.css',
  '/styles/media.css',
  '/js/components.js',
  '/js/style.js',
  '/js/serviceworker.js',
  '/photos/KitokoDevWork_logo.webp',
  '/photos/LogoAnimateKitokoDevWork.webp',
  '/manifest.json'
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
  // Navigation requests: network-first, offline fallback
  if (event.request.mode === 'navigate') {
    event.respondWith(
      fetch(event.request)
        .then(res => {
          const resClone = res.clone();
          caches.open(CACHE_NAME).then(cache => cache.put(event.request, resClone));
          return res;
        })
        .catch(() => caches.match(event.request)
          .then(cached => cached || caches.match('/offline.html'))
        )
    );
    return;
  }

  // Other requests: cache-first
  event.respondWith(
    caches.match(event.request).then(cached => {
      if (cached) return cached;
      return fetch(event.request).then(res => {
        if (event.request.method === 'GET' && res && res.status === 200) {
          const resClone = res.clone();
          caches.open(CACHE_NAME).then(cache => cache.put(event.request, resClone));
        }
        return res;
      });
    })
  );
});
