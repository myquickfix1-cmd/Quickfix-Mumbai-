const CACHE_NAME = 'quickfix-v3'; // Cache version v3 active

// Install Event: PWA assets ko cache me store karna
self.addEventListener('install', (e) => {
  e.waitUntil(
    caches.open(CACHE_NAME).then((cache) => {
      return cache.addAll([
        '/',
        '/index.html',
        '/manifest.json',
        '/script.js' // Agar alag se style.css nahi hai, toh use yahan se hata diya hai
      ]);
    }).then(() => self.skipWaiting()) 
  );
});

// Activate Event: Purane cache version ko delete karna
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

// Fetch Event: Network-first approach (Offline dynamic support)
self.addEventListener('fetch', (e) => {
  e.respondWith(
    fetch(e.request)
      .then((res) => {
        const resClone = res.clone();
        caches.open(CACHE_NAME).then((cache) => {
          cache.put(e.request, resClone);
        });
        return res;
      })
      .catch(() => caches.match(e.request)) 
  );
});

// =========================================================================
// FIXED: BACKGROUND PUSH NOTIFICATIONS & CLICK ACTIONS
// =========================================================================

// Background me Push Notification receive karne ka handler
self.addEventListener('push', (e) => {
  let data = { title: '🚀 Quickfix Alert', body: 'Naya booking notification aaya hai!' };
  
  if (e.data) {
    try {
      data = e.data.json();
    } catch (err) {
      data = { title: '🚀 Quickfix Lead', body: e.data.text() };
    }
  }

  const options = {
    body: data.body,
    // FIXED: .json file ki jagah aapka real PNG icon path lagaya hai
    icon: 'https://cdn-icons-png.flaticon.com/512/2928/2928929.png', 
    badge: 'https://cdn-icons-png.flaticon.com/512/2928/2928929.png',
    vibrate: [200, 100, 200, 100, 200], // Phone vibration pattern
    requireInteraction: true, // Jab tak owner click na kare screen se na hate
    data: {
      url: '/admin.html' // Notification click karne par admin dashboard khule
    }
  };

  e.waitUntil(
    self.registration.showNotification(data.title, options)
  );
});

// Notification click hone par Admin panel open karne ka logic
self.addEventListener('notificationclick', (e) => {
  e.notification.close(); // Notification ko clear karo

  e.waitUntil(
    clients.matchAll({ type: 'window', includeUncontrolled: true }).then((windowClients) => {
      // Agar admin dashboard pehle se open hai toh use focus karo
      for (let i = 0; i < windowClients.length; i++) {
        const client = windowClients[i];
        if (client.url.includes('/admin.html') && 'focus' in client) {
          return client.focus();
        }
      }
      // Agar open nahi hai, toh naya tab/window open karo
      if (clients.openWindow) {
        return clients.openWindow('/admin.html');
      }
    })
  );
});
