const CACHE_NAME = 'invisible-layer-v3';
const ASSETS_TO_CACHE = [
  '/invisible-layer/assets/css/base.css',
  '/invisible-layer/assets/css/experiment.css',
  '/invisible-layer/assets/js/main.js',
  '/invisible-layer/assets/js/i18n.js',
  '/invisible-layer/manifest.json'
];

self.addEventListener('install', (event) => {
  event.waitUntil(
    caches.open(CACHE_NAME)
      .then((cache) => cache.addAll(ASSETS_TO_CACHE))
      .then(() => self.skipWaiting())
  );
});

self.addEventListener('activate', (event) => {
  event.waitUntil(
    caches.keys().then((cacheNames) => {
      return Promise.all(
        cacheNames.map((cacheName) => {
          if (cacheName !== CACHE_NAME) {
            return caches.delete(cacheName);
          }
        })
      );
    })
  );
  self.clients.claim();
});

self.addEventListener('fetch', (event) => {
  const url = new URL(event.request.url);

  // Never intercept HTML navigation requests — always get fresh HTML from network
  if (event.request.mode === 'navigate' || event.request.headers.get('accept')?.includes('text/html')) {
    return;
  }

  // Network-first for everything else: try network, fall back to cache
  event.respondWith(
    fetch(event.request)
      .then((response) => {
        if (!response || response.status !== 200 || response.type !== 'basic') {
          return response;
        }
        // Cache static assets (not versioned query params — those are always fresh)
        if (url.origin === self.location.origin && !url.search) {
          const responseToCache = response.clone();
          caches.open(CACHE_NAME).then((cache) => {
            cache.put(event.request, responseToCache);
          });
        }
        return response;
      })
      .catch(() => caches.match(event.request))
  );
});
