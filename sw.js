const CACHE_NAME = 'quickfix-v3'; // <--- dhyan se ise v3 kar dijiye

// Install Event: Choti abcडी mein self
self.addEventListener('install', (e) => {
  e.waitUntil(
    caches.open(CACHE_NAME).then((cache) => {
      return cache.addAll([
        '/',
        '/index.html',
        '/manifest.json',
        '/style.css',   // <--- Yeh dono nayi files bhi add kar di hain
        '/script.js'    // <--- Taaki offline bhi app makkhan chale
      ]);
    }).then(() => self.skipWaiting()) // Naye version ko turant chalu karo
  );
});

// Activate Event: Purane kachre (v2) ko saaf karne ke liye
self.addEventListener('activate', (e) => {
  e.waitUntil(
    caches.keys().then((keys) => {
      return Promise.all(
        keys.map((key) => {
          if (key !== CACHE_NAME) {
            return caches.delete(key);
          }
        })
      );
    }).then(() => self.clients.claim())
  );
});

// Fetch Event: Pehle net se naya uthao, nahi toh cache dikhao (Makkhan Logic)
self.addEventListener('fetch', (e) => {
  e.respondWith(
    fetch(e.request)
      .then((res) => {
        // Agar net chal raha hai, toh nayi file ko cache mein update karo
        const resClone = res.clone();
        caches.open(CACHE_NAME).then((cache) => {
          cache.put(e.request, resClone);
        });
        return res;
      })
      .catch(() => caches.match(e.request)) // Agar net nahi hai, toh purana dikhao
  );
});
