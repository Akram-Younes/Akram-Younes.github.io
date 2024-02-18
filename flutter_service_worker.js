'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {"assets/AssetManifest.bin": "8e1b287676c593752c5d59981cfed21e",
"assets/AssetManifest.bin.json": "125daa8ec7a7ab1133926f4b2b4793b4",
"assets/AssetManifest.json": "37702bbed9c7b6d37bd872102af9d088",
"assets/assets/gifs/baby.gif": "17fa24b1949aa2e5fbc3305044ae542f",
"assets/assets/gifs/baby.png": "fe046fe85bdee97184be3b1e47772b78",
"assets/assets/gifs/cadeaux.gif": "68017a41f2fd3ded3b9bdf431863ceb8",
"assets/assets/gifs/cadeaux.png": "eaaec8387b74517b2441e7bd8921e28e",
"assets/assets/gifs/informatique.gif": "4b126d258266b57f8c8e096c45f7f06a",
"assets/assets/gifs/informatique.png": "069415b43ba3d464ca9417eaa4ecbf90",
"assets/assets/gifs/maison.gif": "3a4b3c1b031cbacfda71ad9c11b92399",
"assets/assets/gifs/maison.png": "fa021fd28abfd97ffe625876534d58c8",
"assets/assets/gifs/makeup.gif": "7092c274082265407569240337638f4c",
"assets/assets/gifs/makeup.png": "be75d125e452cb42acab884b165983d0",
"assets/assets/icons/baby.jpg": "72b9f37ea25b7f070d6e6c8897e2a045",
"assets/assets/icons/baby.png": "4ac38b6ccb5616b2d084892109008cf5",
"assets/assets/icons/gift.jpg": "3c5b11f95dede5fbd3b1fa72f072a2aa",
"assets/assets/icons/health.png": "da69121d7968c210856f279e7cadf68d",
"assets/assets/icons/home_tools.png": "ebd97a819ad58cd0dc6de8b56400d6dd",
"assets/assets/icons/informatiqe.jpg": "3394480e083e03f52bc6d6e9687faf73",
"assets/assets/icons/instagram.png": "ab41d0a2814671f1f8be6edb332bd9b1",
"assets/assets/icons/logo.png": "53bc17892390b1fee72d87fd8777bce5",
"assets/assets/icons/nfacebook.png": "914536254717c3ea37b4c5b4add8cc72",
"assets/assets/icons/nwhatsapp.png": "0e492ce5f4fdffcfe27d5eda8f01f6a5",
"assets/assets/icons/telegram.png": "4a4f582c92461061f3c0e139e3d1a71a",
"assets/FontManifest.json": "dc3d03800ccca4601324923c0b1d6d57",
"assets/fonts/MaterialIcons-Regular.otf": "be2866ef7cda264d072a2299757307f0",
"assets/NOTICES": "84ab3435b25e7269e0102b5f321d4e47",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "89ed8f4e49bcdfc0b5bfc9b24591e347",
"assets/shaders/ink_sparkle.frag": "4096b5150bac93c41cbc9b45276bd90f",
"canvaskit/canvaskit.js": "eb8797020acdbdf96a12fb0405582c1b",
"canvaskit/canvaskit.wasm": "73584c1a3367e3eaf757647a8f5c5989",
"canvaskit/chromium/canvaskit.js": "0ae8bbcc58155679458a0f7a00f66873",
"canvaskit/chromium/canvaskit.wasm": "143af6ff368f9cd21c863bfa4274c406",
"canvaskit/skwasm.js": "87063acf45c5e1ab9565dcf06b0c18b8",
"canvaskit/skwasm.wasm": "2fc47c0a0c3c7af8542b601634fe9674",
"canvaskit/skwasm.worker.js": "bfb704a6c714a75da9ef320991e88b03",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"flutter.js": "59a12ab9d00ae8f8096fffc417b6e84f",
"icons/android-icon-144x144.png": "2c983163f8fcb40d60ee08a43c62e87c",
"icons/android-icon-192x192.png": "42f7f3132c9e30d631d061c318df19cf",
"icons/android-icon-36x36.png": "3cf2318d7f831a61441300067bd86997",
"icons/android-icon-48x48.png": "094391a5503c0cfe73102545eebee4c7",
"icons/android-icon-72x72.png": "c51196bce0adecbeacf7e5475a2c28d4",
"icons/android-icon-96x96.png": "e6e0ee0527701beb9ef76ec69721ba69",
"icons/apple-icon-114x114.png": "017b8584aa7918cd28d1dbd8c1f99b3a",
"icons/apple-icon-120x120.png": "24249b9bcb3309b099119c80f8f7cfa4",
"icons/apple-icon-144x144.png": "2c983163f8fcb40d60ee08a43c62e87c",
"icons/apple-icon-152x152.png": "febefae5c6a5bbadf2a56b09e274fc6b",
"icons/apple-icon-180x180.png": "b06f8930dd881a523eacc67d0bb5dc75",
"icons/apple-icon-57x57.png": "042b9e012456402ed6fd8260a5899969",
"icons/apple-icon-60x60.png": "a9cfb5331068223941e01e96b9394f13",
"icons/apple-icon-72x72.png": "c51196bce0adecbeacf7e5475a2c28d4",
"icons/apple-icon-76x76.png": "7aa41f9372f3755989121602ec57953c",
"icons/apple-icon-precomposed.png": "16039c00eb93eb7746ae6edfcfe4e384",
"icons/apple-icon.png": "16039c00eb93eb7746ae6edfcfe4e384",
"icons/browserconfig.xml": "653d077300a12f09a69caeea7a8947f8",
"icons/favicon-16x16.png": "09369f208da0dede152c0da8d92f4c47",
"icons/favicon-32x32.png": "2c2dd3e8091455c9912b26812be1d83d",
"icons/favicon-96x96.png": "e6e0ee0527701beb9ef76ec69721ba69",
"icons/favicon.ico": "51a70b5d756cbfb28d2b4656fdfe0c63",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"icons/manifest.json": "b58fcfa7628c9205cb11a1b2c3e8f99a",
"icons/ms-icon-144x144.png": "2c983163f8fcb40d60ee08a43c62e87c",
"icons/ms-icon-150x150.png": "73fc4792867a000be43ac6a8165cfe81",
"icons/ms-icon-310x310.png": "50b6f469b729cfc4a715d729fb23f3e3",
"icons/ms-icon-70x70.png": "a33d325266de481975108c6c95ba9bc6",
"index.html": "3b6adc0c9d2e067c53d000a794e4eb70",
"/": "3b6adc0c9d2e067c53d000a794e4eb70",
"main.dart.js": "de8e9ade0eee77379d18d16dde5f9ee8",
"manifest.json": "3599a2e2f6add424add6e0953fa644b4",
"version.json": "54b4a53e8939524c299328579f4114ef"};
// The application shell files that are downloaded before a service worker can
// start.
const CORE = ["main.dart.js",
"index.html",
"assets/AssetManifest.json",
"assets/FontManifest.json"];

// During install, the TEMP cache is populated with the application shell files.
self.addEventListener("install", (event) => {
  self.skipWaiting();
  return event.waitUntil(
    caches.open(TEMP).then((cache) => {
      return cache.addAll(
        CORE.map((value) => new Request(value, {'cache': 'reload'})));
    })
  );
});
// During activate, the cache is populated with the temp files downloaded in
// install. If this service worker is upgrading from one with a saved
// MANIFEST, then use this to retain unchanged resource files.
self.addEventListener("activate", function(event) {
  return event.waitUntil(async function() {
    try {
      var contentCache = await caches.open(CACHE_NAME);
      var tempCache = await caches.open(TEMP);
      var manifestCache = await caches.open(MANIFEST);
      var manifest = await manifestCache.match('manifest');
      // When there is no prior manifest, clear the entire cache.
      if (!manifest) {
        await caches.delete(CACHE_NAME);
        contentCache = await caches.open(CACHE_NAME);
        for (var request of await tempCache.keys()) {
          var response = await tempCache.match(request);
          await contentCache.put(request, response);
        }
        await caches.delete(TEMP);
        // Save the manifest to make future upgrades efficient.
        await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
        // Claim client to enable caching on first launch
        self.clients.claim();
        return;
      }
      var oldManifest = await manifest.json();
      var origin = self.location.origin;
      for (var request of await contentCache.keys()) {
        var key = request.url.substring(origin.length + 1);
        if (key == "") {
          key = "/";
        }
        // If a resource from the old manifest is not in the new cache, or if
        // the MD5 sum has changed, delete it. Otherwise the resource is left
        // in the cache and can be reused by the new service worker.
        if (!RESOURCES[key] || RESOURCES[key] != oldManifest[key]) {
          await contentCache.delete(request);
        }
      }
      // Populate the cache with the app shell TEMP files, potentially overwriting
      // cache files preserved above.
      for (var request of await tempCache.keys()) {
        var response = await tempCache.match(request);
        await contentCache.put(request, response);
      }
      await caches.delete(TEMP);
      // Save the manifest to make future upgrades efficient.
      await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
      // Claim client to enable caching on first launch
      self.clients.claim();
      return;
    } catch (err) {
      // On an unhandled exception the state of the cache cannot be guaranteed.
      console.error('Failed to upgrade service worker: ' + err);
      await caches.delete(CACHE_NAME);
      await caches.delete(TEMP);
      await caches.delete(MANIFEST);
    }
  }());
});
// The fetch handler redirects requests for RESOURCE files to the service
// worker cache.
self.addEventListener("fetch", (event) => {
  if (event.request.method !== 'GET') {
    return;
  }
  var origin = self.location.origin;
  var key = event.request.url.substring(origin.length + 1);
  // Redirect URLs to the index.html
  if (key.indexOf('?v=') != -1) {
    key = key.split('?v=')[0];
  }
  if (event.request.url == origin || event.request.url.startsWith(origin + '/#') || key == '') {
    key = '/';
  }
  // If the URL is not the RESOURCE list then return to signal that the
  // browser should take over.
  if (!RESOURCES[key]) {
    return;
  }
  // If the URL is the index.html, perform an online-first request.
  if (key == '/') {
    return onlineFirst(event);
  }
  event.respondWith(caches.open(CACHE_NAME)
    .then((cache) =>  {
      return cache.match(event.request).then((response) => {
        // Either respond with the cached resource, or perform a fetch and
        // lazily populate the cache only if the resource was successfully fetched.
        return response || fetch(event.request).then((response) => {
          if (response && Boolean(response.ok)) {
            cache.put(event.request, response.clone());
          }
          return response;
        });
      })
    })
  );
});
self.addEventListener('message', (event) => {
  // SkipWaiting can be used to immediately activate a waiting service worker.
  // This will also require a page refresh triggered by the main worker.
  if (event.data === 'skipWaiting') {
    self.skipWaiting();
    return;
  }
  if (event.data === 'downloadOffline') {
    downloadOffline();
    return;
  }
});
// Download offline will check the RESOURCES for all files not in the cache
// and populate them.
async function downloadOffline() {
  var resources = [];
  var contentCache = await caches.open(CACHE_NAME);
  var currentContent = {};
  for (var request of await contentCache.keys()) {
    var key = request.url.substring(origin.length + 1);
    if (key == "") {
      key = "/";
    }
    currentContent[key] = true;
  }
  for (var resourceKey of Object.keys(RESOURCES)) {
    if (!currentContent[resourceKey]) {
      resources.push(resourceKey);
    }
  }
  return contentCache.addAll(resources);
}
// Attempt to download the resource online before falling back to
// the offline cache.
function onlineFirst(event) {
  return event.respondWith(
    fetch(event.request).then((response) => {
      return caches.open(CACHE_NAME).then((cache) => {
        cache.put(event.request, response.clone());
        return response;
      });
    }).catch((error) => {
      return caches.open(CACHE_NAME).then((cache) => {
        return cache.match(event.request).then((response) => {
          if (response != null) {
            return response;
          }
          throw error;
        });
      });
    })
  );
}
