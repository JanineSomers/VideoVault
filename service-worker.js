const CACHE_NAME = "video-vault-v1";
const urlsToCache = [
  "./",
  "./index.html",
  "./upload.html",
  "./search.html",
  "./logo.png",
  "./icon-192x192.png",
  "./icon-512x512.png"
];

// Install event - cache files
self.addEventListener("install", event => {
  event.waitUntil(
    caches.open(CACHE_NAME).then(cache => {
      console.log("[Service Worker] Caching files...");
      return cache.addAll(urlsToCache);
    })
  );
});

// Activate event - clear old caches
self.addEventListener("activate", event => {
  event.waitUntil(
    caches.keys().then(cacheNames => {
      return Promise.all(
        cacheNames.map(cache => {
          if (cache !== CACHE_NAME) {
            console.log("[Service Worker] Deleting old cache:", cache);
            return caches.delete(cache);
          }
        })
      );
    })
  );
});

// Fetch event - serve from cache if available
self.addEventListener("fetch", event => {
  event.respondWith(
    caches.match(event.request).then(response => {
      if (response) {
        console.log("[Service Worker] Serving from cache:", event.request.url);
        return response;
      }
      console.log("[Service Worker] Fetching from network:", event.request.url);
      return fetch(event.request).catch(() => {
        // Optional: add offline fallback page here
      });
    })
  );
});
