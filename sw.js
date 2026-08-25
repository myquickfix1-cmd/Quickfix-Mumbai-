// Quickfix Mumbai — Basic Service Worker
// Ye file PWA install ke liye zaroori hai (browser isko dhoondhta hai).
// Abhi ke liye simple caching karta hai taaki site thoda tez khule aur
// install prompt browsers ko dikhe.

// OneSignal push notifications (technician "new lead" alerts even when the
// app is closed) share this SAME service worker — OneSignal's own worker file
// is pulled in here instead of registering a second one, since a page can
// only have one active service worker per scope. Safe to leave this line in
// even before the OneSignal account is set up — it just does nothing until
// then.
importScripts('https://cdn.onesignal.com/sdks/web/v16/tools/OneSignalSDKWorker.js');

const CACHE_NAME = 'quickfix-cache-v1';
const urlsToCache = [
  '/index.html',
  '/manifest.json',
  '/icon-192.png',
  '/icon-512.png'
];

// Install: cache basic files
self.addEventListener('install', (event) => {
  event.waitUntil(
    caches.open(CACHE_NAME).then((cache) => {
      return cache.addAll(urlsToCache).catch(() => {
        // agar koi file cache na ho paaye, install fail na ho
      });
    })
  );
  self.skipWaiting();
});

// Activate: purane cache versions clean karo
self.addEventListener('activate', (event) => {
  event.waitUntil(
    caches.keys().then((cacheNames) => {
      return Promise.all(
        cacheNames
          .filter((name) => name !== CACHE_NAME)
          .map((name) => caches.delete(name))
      );
    })
  );
  self.clients.claim();
});

// Fetch: pehle network try karo, fail ho to cache se de do
self.addEventListener('fetch', (event) => {
  event.respondWith(
    fetch(event.request).catch(() => caches.match(event.request))
  );
});
