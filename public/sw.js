const CACHE_NAME = 'molife-v1'
const urlsToCache = [
  '/',
  '/book-appointment',
  '/contact',
  '/about-us',
  '/manifest.json',
  '/images/logo.jpg',
  '/images/image1.jpg'
]

self.addEventListener('install', (event) => {
  event.waitUntil(
    caches.open(CACHE_NAME)
      .then((cache) => cache.addAll(urlsToCache))
  )
})

self.addEventListener('fetch', (event) => {
  event.respondWith(
    caches.match(event.request)
      .then((response) => {
        // Return cached version or fetch from network
        return response || fetch(event.request)
      })
  )
})