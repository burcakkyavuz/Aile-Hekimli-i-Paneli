self.addEventListener("install", e => {
  e.waitUntil(
    caches.open("ahp-cache-v1").then(cache => cache.addAll([
      "./",
      "./index.html",
      "./manifest.json",
      "./icon-192.svg",
      "./icon-512.svg"
    ]))
  );
});
self.addEventListener("fetch", e => {
  e.respondWith(
    caches.match(e.request).then(res => res || fetch(e.request))
  );
});
