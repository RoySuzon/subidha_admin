'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {"flutter_bootstrap.js": "a3f4e1c2cea891d5fb7c6601c458d3bd",
"version.json": "ef481e43885557242d7c659623dc9b27",
"index.html": "7d8bca0827edc2ac32b5f4997c59fa06",
"/": "7d8bca0827edc2ac32b5f4997c59fa06",
"main.dart.js": "b78aa2c629f71db1a4561505394efa1d",
"flutter.js": "f393d3c16b631f36852323de8e583132",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"manifest.json": "33087d495ea9e29b111afb4a972b3c26",
".git/config": "3c2549e039f28d8226d23835895a8634",
".git/objects/68/dc59c3de8f4cfb3b7280c96188522c7297eafc": "4643131532bd21681468718600b3fdcf",
".git/objects/68/4ebd569fbeb890b1d8d3ce73cfdf3bb4d78022": "5426d825b86be5392670df2e71e30aa0",
".git/objects/3b/b0860a0981211a1ab11fced3e6dad7e9bc1834": "7a45402238decbda5a1817c517e1f276",
".git/objects/9e/7043137f9d4549b65562888fd32b7a7753a08a": "af73e192b0b66489c3b942f29cf297d2",
".git/objects/32/aa3cae58a7432051fc105cc91fca4d95d1d011": "a5ab4a345a37d6f24f2325aa56fbd1ef",
".git/objects/60/555be0d3a9a854ee51bc453d13ad3d016b6974": "88b9b74017bcf3e68062f381061d0ea5",
".git/objects/9d/c5932bbd68934b5664e5b308a0282fd9ec44cd": "999a1905a00054d822da343cf337c5c8",
".git/objects/a4/b99b10f77a5e92cbc2aedba11aae880160ac7f": "486a562fcad31ea278e1c04c79d8e54f",
".git/objects/b2/65ed4d1aeed8cefebd1168b81a6ffb368b0cdb": "f450b28b7beb7b280e8be09be0526946",
".git/objects/d0/23371979cf1e985205df19078051c10de0a82d": "6dd3aa7909b7bea70e523e4a9c9861cc",
".git/objects/da/fd65422747502c19b5c74b4230282644d2169c": "4f6d7d5a9dcde6a00e4fa30f4bc76179",
".git/objects/d6/9c56691fbdb0b7efa65097c7cc1edac12a6d3e": "5a9f3522bf38ba5dd54f15a0f75cb0d7",
".git/objects/ab/3b94f37751b9ef184d47939143338be0c7aa93": "c02df2dfd6bc72845e9fa3299b20bf6d",
".git/objects/e2/e7074a9be64b847f0f9887425694bbade7a073": "54a6d2604347306a8beb7cbe8f7ad955",
".git/objects/eb/9b4d76e525556d5d89141648c724331630325d": "01d8a507be49f15714be4d17b6947e52",
".git/objects/c7/7663172ca915a99a594ca17d06f527db05657d": "26e88664696468ae8d5ce0608760da7a",
".git/objects/c0/c5082ab4908402c88d2716cf7ec0561003d322": "c204ae1b2bf170c64de3b9b4a5831884",
".git/objects/f2/04823a42f2d890f945f70d88b8e2d921c6ae26": "aa30b45014e5ab878c26ecce9ea89743",
".git/objects/cf/9c891fa7e00133a4e9c93c9aa8f0ff97b192ba": "b25123bf9c66491224ee2b185139fc27",
".git/objects/c6/897d6802711e55599efa0f1502418071a1ebaa": "780ecdad3a7c36f2d221dabf45a62945",
".git/objects/18/096fdc30d3f423464cf7a91c4ae648ca385c10": "353db2dba7e931f6af682a0c2fb1c1d6",
".git/objects/8a/aa46ac1ae21512746f852a42ba87e4165dfdd1": "b25b26893b8f92a4f583677ba27f0a7f",
".git/objects/19/bcd4b0cc9a1870e834d567fcdd55e13e0f0c2b": "fe9c6e18d55b486a818fde73b4a4e152",
".git/objects/26/4e04419714296a77fe5252a2110eb2192a5847": "8c36362f83bcbd61873ba61d7cc7f941",
".git/objects/26/8bec9ab2c1cff76896048ceede2ae8c57e33ca": "0d1da5b44ebcc766aa3d338d755e484b",
".git/objects/72/7c3cb721dd33abd674a8f166628de3f7617646": "f9e1694120b51f1cd6c02d79fc667ab7",
".git/objects/44/a8b8e41b111fcf913a963e318b98e7f6976886": "7dc6862ccf9cf08361bcdcaa506b8cab",
".git/objects/88/75b4040365ba6428fe9e5b621a2cd8aae6c142": "0bc19006a42d012c63c8b1207e68a80c",
".git/objects/88/cfd48dff1169879ba46840804b412fe02fefd6": "e35fdc55764d9ed14315f6ff50093ab3",
".git/objects/88/69e7f80a447ad8e5619eec45b55430aff15957": "1bf4a366ad2e1455adde942972c8fa85",
".git/objects/6b/e909fbf40b23748412f0ea89bf0fae827ed976": "cedd036902896227217e1fe4c1f5af01",
".git/objects/6e/4945965a332e741e3ccc94fa1cf6e21b6300db": "b5449288cc898593d06e3d1e5039ea55",
".git/objects/36/6e6fb17eace85bfb898d7222141c958f0b4a4a": "682cc3d2bcf88a520986182e6d19aa58",
".git/objects/96/d67924f7bc6067836f174460996ac2e89d00e8": "dd39f2dc12296ddad112092865844b94",
".git/objects/3a/7525f2996a1138fe67d2a0904bf5d214bfd22c": "3ae74c50121a252af7b735f48bed9193",
".git/objects/98/57c9b3b0448c92818efc5fda0f206b21914168": "8601fe5ad3c9535b9cb71142f3ee4c08",
".git/objects/30/6942dc5bda024438722d4da845f397d2b10e14": "79d0ca2706eaa2c3b4da470e9db526a2",
".git/objects/08/32d0db2def1613c1c45aa4fe9156a1c6b7d589": "6ba60eff6a71de7a55ea52c6181fc6b8",
".git/objects/6d/f2b253603094de7f39886aae03181c686e375b": "dae8dffe1b57334304dbe76d315d71ee",
".git/objects/06/5a156ad876ae75d08bca0aabc8c1e01f285abb": "9a2741a9017f3e943ec0b7f327c2c020",
".git/objects/06/9cc9a87b446044c89b2ce1e0fb2be1bcfd0dca": "81d8716a695d3051fe46293687193b49",
".git/objects/97/b6eee463de5e4fcf79c6570e4173f50eca81d5": "b58977ec52e0607f13c5710fd432ef21",
".git/objects/90/268395c1f5f1f3e7548f44c82064b4190ae274": "885d0228e6aa85236d620d7e2b9feafb",
".git/objects/90/bcfcf0a77ab618a826db0fd8b0942963b653af": "541ccecb00d45c9fdc9852f95fcdad75",
".git/objects/d4/3532a2348cc9c26053ddb5802f0e5d4b8abc05": "9dbf5b01e391c548c8343be8d1d4b04e",
".git/objects/d4/98e1dcf4d8ab6e26b336fd818c326472ffe5b3": "40d8f4726106cd3af88d2a60cf331638",
".git/objects/b8/91e55759ad900ae874a26619d198bda7072c3e": "7499e1e7cd2f1c78f437cb626799b239",
".git/objects/b1/5ad935a6a00c2433c7fadad53602c1d0324365": "05f6258e74434f94977ac333a3891eeb",
".git/objects/b7/49bfef07473333cf1dd31e9eed89862a5d52aa": "b0c549c0aed479932cf26d094f76630e",
".git/objects/a6/6c414a12b2065cbd617e9aeed3d2733d4fc4a9": "bca23c5d69b681e3ce7d0cfc5f42d74a",
".git/objects/b9/2a0d854da9a8f73216c4a0ef07a0f0a44e4373": "9de9f2c6fa0aea6ee34b79162e9fc361",
".git/objects/b9/f3492df2246ac74a35c1cf49ec8590c46f0c37": "d195fa730e637a6b54bdfa9e1c2c8a36",
".git/objects/c4/cbb3d2d5475e95e368d4892e87cc9aaf487fd6": "7ef9b86a16f2bcdde2beeef29bc95d4b",
".git/objects/e1/a1413eb432aa08a116a8419cac7dfafb099979": "fc9c1aace1129d8faffb3d58dd50db6a",
".git/objects/cd/aa71686d347ef43194a41b6eb363ce8b630a0e": "5301ceaa3e3a52a408a2581d1345107b",
".git/objects/2d/0471ef9f12c9641643e7de6ebf25c440812b41": "733ddcf1f8467729f0dab00912add93d",
".git/objects/1b/f662e80d9b344de1921cacf5594e7cb186dd81": "b1cb8999ff2f6fd71df4417bebff996f",
".git/objects/70/7b8d3d431d02bd95edc97a000c20bf0212ccd7": "f9902fe0f60399ef4c7141909b8e0388",
".git/objects/84/0516208d35dcb4298847ab835e2ef84ada92fa": "a1eb710863406c04c5e7b061f2e96af9",
".git/objects/24/d72436a3c9e032b1ccef0555df2918007f43b2": "11050a1ad4c715ff32df5747694515cd",
".git/objects/76/22107318040d5ee5c73c6212c4d4c2c4d33560": "8a2c2e4d3ea54af323bb9dfc0b98b8a3",
".git/objects/2e/5d657b528b02a54e0ae65354b3ac5d78dbde8d": "b8d6f15ef784ef37473a3264834abc7d",
".git/objects/2b/c0a019a9a157a62de0ff115b84885bd4e559f4": "3d4ddc616314df019faf4c35e0564271",
".git/HEAD": "4cf2d64e44205fe628ddd534e1151b58",
".git/info/exclude": "036208b4a1ab4a235d75c181e685e5a3",
".git/logs/HEAD": "fa9440f66345dc2551fdcebd02220dff",
".git/logs/refs/heads/master": "fa9440f66345dc2551fdcebd02220dff",
".git/logs/refs/remotes/origin/master": "b980a436594f177cd826496ce3f5586f",
".git/description": "a0a7c3fff21f2aea3cfa1d0316dd816c",
".git/hooks/commit-msg.sample": "579a3c1e12a1e74a98169175fb913012",
".git/hooks/pre-rebase.sample": "56e45f2bcbc8226d2b4200f7c46371bf",
".git/hooks/sendemail-validate.sample": "4d67df3a8d5c98cb8565c07e42be0b04",
".git/hooks/pre-commit.sample": "5029bfab85b1c39281aa9697379ea444",
".git/hooks/applypatch-msg.sample": "ce562e08d8098926a3862fc6e7905199",
".git/hooks/fsmonitor-watchman.sample": "a0b2633a2c8e97501610bd3f73da66fc",
".git/hooks/pre-receive.sample": "2ad18ec82c20af7b5926ed9cea6aeedd",
".git/hooks/prepare-commit-msg.sample": "2b5c047bdb474555e1787db32b2d2fc5",
".git/hooks/post-update.sample": "2b7ea5cee3c49ff53d41e00785eb974c",
".git/hooks/pre-merge-commit.sample": "39cb268e2a85d436b9eb6f47614c3cbc",
".git/hooks/pre-applypatch.sample": "054f9ffb8bfe04a599751cc757226dda",
".git/hooks/pre-push.sample": "2c642152299a94e05ea26eae11993b13",
".git/hooks/update.sample": "647ae13c682f7827c22f5fc08a03674e",
".git/hooks/push-to-checkout.sample": "c7ab00c7784efeadad3ae9b228d4b4db",
".git/refs/heads/master": "c5533f68d779f5776c016a5dcaf8e335",
".git/refs/remotes/origin/master": "c5533f68d779f5776c016a5dcaf8e335",
".git/index": "a1d788928025501408a128aab85f0d61",
".git/COMMIT_EDITMSG": "69ab078cbfe945e2d78cbcde0e1ce2d4",
".git/FETCH_HEAD": "1438f6ad8d0d3868bc866f00fd8bd1b5",
"assets/AssetManifest.json": "01fec4f79b24e486ef154924a2c6ed5d",
"assets/NOTICES": "411317c7d1254ec20adef100c33e783b",
"assets/FontManifest.json": "0d648fbcad51ea4cd00cb983ddbccc17",
"assets/AssetManifest.bin.json": "56b56dd58d6be860398bef41c21cd11d",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "ec5ea012f06ad259f31c42f4cfcec85c",
"assets/packages/font_awesome_flutter/lib/fonts/fa-solid-900.ttf": "085dfb09dda7aaeceda0ec0562113ec1",
"assets/packages/font_awesome_flutter/lib/fonts/fa-regular-400.ttf": "f3307f62ddff94d2cd8b103daf8d1b0f",
"assets/packages/font_awesome_flutter/lib/fonts/fa-brands-400.ttf": "17ee8e30dde24e349e70ffcdc0073fb0",
"assets/packages/syncfusion_flutter_pdfviewer/assets/squiggly.png": "c9602bfd4aa99590ca66ce212099885f",
"assets/packages/syncfusion_flutter_pdfviewer/assets/strikethrough.png": "cb39da11cd936bd01d1c5a911e429799",
"assets/packages/syncfusion_flutter_pdfviewer/assets/highlight.png": "7384946432b51b56b0990dca1a735169",
"assets/packages/syncfusion_flutter_pdfviewer/assets/underline.png": "c94a4441e753e4744e2857f0c4359bf0",
"assets/packages/syncfusion_flutter_pdfviewer/assets/fonts/RobotoMono-Regular.ttf": "5b04fdfec4c8c36e8ca574e40b7148bb",
"assets/packages/fluttertoast/assets/toastify.js": "56e2c9cedd97f10e7e5f1cebd85d53e3",
"assets/packages/fluttertoast/assets/toastify.css": "a85675050054f179444bc5ad70ffc635",
"assets/shaders/ink_sparkle.frag": "ecc85a2e95f5e9f53123dcaf8cb9b6ce",
"assets/AssetManifest.bin": "a3e12a798067d9c63a657105ec67bdc1",
"assets/fonts/MaterialIcons-Regular.otf": "de10d34a3014c58df79bbcdc2be15562",
"canvaskit/skwasm.js": "694fda5704053957c2594de355805228",
"canvaskit/skwasm.js.symbols": "262f4827a1317abb59d71d6c587a93e2",
"canvaskit/canvaskit.js.symbols": "48c83a2ce573d9692e8d970e288d75f7",
"canvaskit/skwasm.wasm": "9f0c0c02b82a910d12ce0543ec130e60",
"canvaskit/chromium/canvaskit.js.symbols": "a012ed99ccba193cf96bb2643003f6fc",
"canvaskit/chromium/canvaskit.js": "671c6b4f8fcc199dcc551c7bb125f239",
"canvaskit/chromium/canvaskit.wasm": "b1ac05b29c127d86df4bcfbf50dd902a",
"canvaskit/canvaskit.js": "66177750aff65a66cb07bb44b8c6422b",
"canvaskit/canvaskit.wasm": "1f237a213d7370cf95f443d896176460",
"canvaskit/skwasm.worker.js": "89990e8c92bcb123999aa81f7e203b1c"};
// The application shell files that are downloaded before a service worker can
// start.
const CORE = ["main.dart.js",
"index.html",
"flutter_bootstrap.js",
"assets/AssetManifest.bin.json",
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
