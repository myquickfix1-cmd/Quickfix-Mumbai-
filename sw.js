const CACHE_NAME = 'quickfix-v1';
const ASSETS = [
  '/',
  '/index.html',
  '/manifest.json'
];

// 1. Install Event: Files ko cache mein save karne ke liye
self.addEventListener('install', (e) => {
  e.waitUntil(
    caches.open(CACHE_NAME).then((cache) => {
      return cache.addAll(ASSETS);
    })
  );
});

// 2. Fetch Event: Website ko offline chalane ke liye
self.addEventListener('fetch', (e) => {
  e.respondWith(
    caches.match(e.request).then((res) => {
      return res || fetch(e.request);
    })
  );
});

// 3. Push Event: Notification dikhane ke liye
self.addEventListener('push', (event) => {
  const data = event.data ? event.data.text() : 'Naya Update!';
  
  const options = {
    body: data,
    icon: 'favicon.ico', // Yahan aap apna icon path dal sakte hain
    badge: 'favicon.ico'
  };

  event.waitUntil(
    self.registration.showNotification('QuickFix Mumbai', options)
  );
});
