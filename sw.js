self.addEventListener('install', event => {
  console.log('Service Worker installiert');
});

self.addEventListener('activate', event => {
  console.log('Service Worker aktiviert');
});

self.addEventListener('fetch', event => {
  // Einfach alles normal laden, wir brauchen hier keinen Cache
});
