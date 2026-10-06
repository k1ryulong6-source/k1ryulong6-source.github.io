// Application resources only. IndexedDB/media are never removed or uploaded.
const CACHE = "canta-shell-5a5338f2a19390252723";
const SHELL = ["/assets/index-CXQw6bF3.css","/assets/index-D8UMhvlb.js","/assets/ort-wasm-simd-threaded.jsep-B0T3yYHD.wasm","/assets/ort-wasm-simd-threaded.jsep-B0TxsgQ-.mjs","/assets/pitch-worker-BZpecNhf.js","/assets/worker-Cy1qCvPy.js","/favicon.svg","/icon-192.png","/icon-512.png","/icon-maskable-512.png","/index.html","/licenses/README.txt","/licenses/RMVPE-Apache-2.0.txt","/licenses/RVC-MIT.txt","/licenses/Whisper-MIT.txt","/manifest.webmanifest"];
self.addEventListener('install', event => {
  event.waitUntil(caches.open(CACHE).then(cache => cache.addAll(SHELL)));
});
self.addEventListener('message', event => {
  if (event.data?.type === 'CANTA_ACTIVATE_UPDATE') self.skipWaiting();
});
self.addEventListener('activate', event => {
  event.waitUntil((async () => {
    // Keep one previous shell for another tab finishing its current operation.
    const previous = (await caches.keys()).filter(key => key.startsWith('canta-shell-') && key !== CACHE);
    await Promise.all(previous.slice(0, -1).map(key => caches.delete(key)));
    await self.clients.claim();
  })());
});
self.addEventListener('fetch', event => {
  const request = event.request;
  const url = new URL(request.url);
  if (request.method !== 'GET' || url.origin !== self.location.origin) return;
  if (request.mode === 'navigate') {
    event.respondWith(caches.open(CACHE).then(cache => cache.match('/index.html')).then(hit => hit || fetch(request)));
  } else if (!url.search && SHELL.includes(url.pathname)) {
    event.respondWith(caches.open(CACHE).then(cache => cache.match(request)).then(hit => hit || fetch(request)));
  }
});
