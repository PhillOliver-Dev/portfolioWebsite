"use strict";
var precacheConfig = [
    ["/index.html", "57144cb5c61cbae958d036f7bd008397"],
    ["/static/css/main.0d1375b9.css", "3f30e03225c49f263adc4141bdbc2e69"],
    ["/static/js/main.a9255ee7.js", "2254e524624bbc56713668ea1950463c"],
    ["/static/media/github.813e5b9d.svg", "813e5b9d8def33262e7bc5c1395b5928"]
  ],
  cacheName =
    "sw-precache-v3-sw-precache-webpack-plugin-" +
    (self.registration ? self.registration.scope : ""),
  ignoreUrlParametersMatching = [/^utm_/],
  addDirectoryIndex = function(e, t) {
    var n = new URL(e);
    return "/" === n.pathname.slice(-1) && (n.pathname += t), n.toString();
  },
  cleanResponse = function(e) {
    return e.redirected
      ? ("body" in e ? Promise.resolve(e.body) : e.blob()).then(function(t) {
          return new Response(t, {
            headers: e.headers,
            status: e.status,
            statusText: e.statusText
          });
        })
      : Promise.resolve(e);
  },
  createCacheKey = function(e, t, n, r) {
    var a = new URL(e);
    return (
      (r && a.pathname.match(r)) ||
        (a.search +=
          (a.search ? "&" : "") +
          encodeURIComponent(t) +
          "=" +
          encodeURIComponent(n)),
      a.toString()
    );
  },
  isPathWhitelisted = function(e, t) {
    if (0 === e.length) return !0;
    var n = new URL(t).pathname;
    return e.some(function(e) {
      return n.match(e);
    });
  },
  stripIgnoredUrlParameters = function(e, t) {
    var n = new URL(e);
    return (
      (n.hash = ""),
      (n.search = n.search
        .slice(1)
        .split("&")
        .map(function(e) {
          return e.split("=");
        })
        .filter(function(e) {
          return t.every(function(t) {
            return !t.test(e[0]);
          });
        })
        .map(function(e) {
          return e.join("=");
        })
        .join("&")),
      n.toString()
    );
  },
  hashParamName = "_sw-precache",
  urlsToCacheKeys = new Map(
    precacheConfig.map(function(e) {
      var t = e[0],
        n = e[1],
        r = new URL(t, self.location),
        a = createCacheKey(r, hashParamName, n, /\.\w{8}\./);
      return [r.toString(), a];
    })
  );
function setOfCachedUrls(e) {
  return e
    .keys()
    .then(function(e) {
      return e.map(function(e) {
        return e.url;
      });
    })
    .then(function(e) {
      return new Set(e);
    });
}
self.addEventListener("install", function(e) {
  e.waitUntil(
    caches
      .open(cacheName)
      .then(function(e) {
        return setOfCachedUrls(e).then(function(t) {
          return Promise.all(
            Array.from(urlsToCacheKeys.values()).map(function(n) {
              if (!t.has(n)) {
                var r = new Request(n, { credentials: "same-origin" });
                return fetch(r).then(function(t) {
                  if (!t.ok)
                    throw new Error(
                      "Request for " +
                        n +
                        " returned a response with status " +
                        t.status
                    );
                  return cleanResponse(t).then(function(t) {
                    return e.put(n, t);
                  });
                });
              }
            })
          );
        });
      })
      .then(function() {
        return self.skipWaiting();
      })
  );
}),
  self.addEventListener("activate", function(e) {
    var t = new Set(urlsToCacheKeys.values());
    e.waitUntil(
      caches
        .open(cacheName)
        .then(function(e) {
          return e.keys().then(function(n) {
            return Promise.all(
              n.map(function(n) {
                if (!t.has(n.url)) return e.delete(n);
              })
            );
          });
        })
        .then(function() {
          return self.clients.claim();
        })
    );
  }),
  self.addEventListener("fetch", function(e) {
    if ("GET" === e.request.method) {
      var t,
        n = stripIgnoredUrlParameters(
          e.request.url,
          ignoreUrlParametersMatching
        ),
        r = "index.html";
      (t = urlsToCacheKeys.has(n)) ||
        ((n = addDirectoryIndex(n, r)), (t = urlsToCacheKeys.has(n)));
      var a = "/index.html";
      !t &&
        "navigate" === e.request.mode &&
        isPathWhitelisted(["^(?!\\/__).*"], e.request.url) &&
        ((n = new URL(a, self.location).toString()),
        (t = urlsToCacheKeys.has(n))),
        t &&
          e.respondWith(
            caches
              .open(cacheName)
              .then(function(e) {
                return e.match(urlsToCacheKeys.get(n)).then(function(e) {
                  if (e) return e;
                  throw Error(
                    "The cached response that was expected is missing."
                  );
                });
              })
              .catch(function(t) {
                return (
                  console.warn(
                    'Couldn\'t serve response for "%s" from cache: %O',
                    e.request.url,
                    t
                  ),
                  fetch(e.request)
                );
              })
          );
    }
  });
