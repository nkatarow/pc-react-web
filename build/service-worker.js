"use strict";var precacheConfig=[["/index.html","64f31308aeead96389ec0369337f7ccc"],["/static/css/main.5620e984.css","8390e57940f9bc62370ea0d6ffee978c"],["/static/js/main.cbb4d2f3.js","b92c91824f343afdd41103ace04f1814"],["/static/media/35AF9E_0_0.1884b6b0.eot","1884b6b0093b285fd97fb4f508db25ad"],["/static/media/35AF9E_0_0.8f8374cc.woff","8f8374cc9d113a73de948318c2abc3a1"],["/static/media/35AF9E_0_0.958e4dae.woff2","958e4dae1cc156d0a10970becd425e68"],["/static/media/35AF9E_0_0.e9f61caa.ttf","e9f61caa68c11220042f9a8361a60395"],["/static/media/35AF9E_1_0.3464547d.woff","3464547db38d7772f0fd383e62867cf3"],["/static/media/35AF9E_1_0.379ba2a4.ttf","379ba2a4d4d2cae518bdc68628759165"],["/static/media/35AF9E_1_0.8b2f1be2.woff2","8b2f1be27634b1bce72ccd63bd3686d8"],["/static/media/35AF9E_1_0.8e6ebcb6.eot","8e6ebcb641dc0f84ba303e0f4b9562a4"],["/static/media/35AF9E_2_0.3f8506b1.ttf","3f8506b1b02fde37d419be91cc7e35c9"],["/static/media/35AF9E_2_0.9e8cefac.eot","9e8cefac12bd491c8b6f53f2db71b8ac"],["/static/media/35AF9E_2_0.cc533f86.woff","cc533f866d20fe5b4adc78c058f3632a"],["/static/media/35AF9E_2_0.d8456868.woff2","d84568687443e71fcbc41894a86ec720"],["/static/media/35AF9E_3_0.8767982a.woff","8767982a3b2474786b09e5cf6e405648"],["/static/media/35AF9E_3_0.a4fbf075.woff2","a4fbf075ba4af8708503cfe808858a22"],["/static/media/35AF9E_3_0.aebd77f4.eot","aebd77f452f8453da24601261cb61cb2"],["/static/media/35AF9E_3_0.b76f8d4b.ttf","b76f8d4b6fa1890abace1f63fdc05bab"],["/static/media/35AF9E_4_0.25c594b8.eot","25c594b83acef383385eef3851447bff"],["/static/media/35AF9E_4_0.882bce19.woff","882bce19bf0bc14160a371a7cf820c2f"],["/static/media/35AF9E_4_0.a4a4bd75.ttf","a4a4bd754c09b3a3068d932d8059b4ba"],["/static/media/35AF9E_4_0.f36e1079.woff2","f36e1079b6caf5fe34e6bf69d6c3c059"],["/static/media/35AF9E_5_0.3a6e72f8.ttf","3a6e72f88dc1e186571756640f710ecc"],["/static/media/35AF9E_5_0.7f2ce840.woff2","7f2ce84012dc462b719a70efe87114d6"],["/static/media/35AF9E_5_0.80d28cc5.eot","80d28cc51eff4a8819152fe0af1b375a"],["/static/media/35AF9E_5_0.c84e9fc2.woff","c84e9fc23d4cf30f7767e700f231696d"],["/static/media/stryker-logo.ea3313c1.svg","ea3313c1129f0b7e19ee1cfffcb1ed99"]],cacheName="sw-precache-v3-sw-precache-webpack-plugin-"+(self.registration?self.registration.scope:""),ignoreUrlParametersMatching=[/^utm_/],addDirectoryIndex=function(e,t){var a=new URL(e);return"/"===a.pathname.slice(-1)&&(a.pathname+=t),a.toString()},cleanResponse=function(e){return e.redirected?("body"in e?Promise.resolve(e.body):e.blob()).then(function(t){return new Response(t,{headers:e.headers,status:e.status,statusText:e.statusText})}):Promise.resolve(e)},createCacheKey=function(e,t,a,c){var n=new URL(e);return c&&n.pathname.match(c)||(n.search+=(n.search?"&":"")+encodeURIComponent(t)+"="+encodeURIComponent(a)),n.toString()},isPathWhitelisted=function(e,t){if(0===e.length)return!0;var a=new URL(t).pathname;return e.some(function(e){return a.match(e)})},stripIgnoredUrlParameters=function(e,t){var a=new URL(e);return a.hash="",a.search=a.search.slice(1).split("&").map(function(e){return e.split("=")}).filter(function(e){return t.every(function(t){return!t.test(e[0])})}).map(function(e){return e.join("=")}).join("&"),a.toString()},hashParamName="_sw-precache",urlsToCacheKeys=new Map(precacheConfig.map(function(e){var t=e[0],a=e[1],c=new URL(t,self.location),n=createCacheKey(c,hashParamName,a,/\.\w{8}\./);return[c.toString(),n]}));function setOfCachedUrls(e){return e.keys().then(function(e){return e.map(function(e){return e.url})}).then(function(e){return new Set(e)})}self.addEventListener("install",function(e){e.waitUntil(caches.open(cacheName).then(function(e){return setOfCachedUrls(e).then(function(t){return Promise.all(Array.from(urlsToCacheKeys.values()).map(function(a){if(!t.has(a)){var c=new Request(a,{credentials:"same-origin"});return fetch(c).then(function(t){if(!t.ok)throw new Error("Request for "+a+" returned a response with status "+t.status);return cleanResponse(t).then(function(t){return e.put(a,t)})})}}))})}).then(function(){return self.skipWaiting()}))}),self.addEventListener("activate",function(e){var t=new Set(urlsToCacheKeys.values());e.waitUntil(caches.open(cacheName).then(function(e){return e.keys().then(function(a){return Promise.all(a.map(function(a){if(!t.has(a.url))return e.delete(a)}))})}).then(function(){return self.clients.claim()}))}),self.addEventListener("fetch",function(e){if("GET"===e.request.method){var t,a=stripIgnoredUrlParameters(e.request.url,ignoreUrlParametersMatching),c="index.html";(t=urlsToCacheKeys.has(a))||(a=addDirectoryIndex(a,c),t=urlsToCacheKeys.has(a));var n="/index.html";!t&&"navigate"===e.request.mode&&isPathWhitelisted(["^(?!\\/__).*"],e.request.url)&&(a=new URL(n,self.location).toString(),t=urlsToCacheKeys.has(a)),t&&e.respondWith(caches.open(cacheName).then(function(e){return e.match(urlsToCacheKeys.get(a)).then(function(e){if(e)return e;throw Error("The cached response that was expected is missing.")})}).catch(function(t){return console.warn('Couldn\'t serve response for "%s" from cache: %O',e.request.url,t),fetch(e.request)}))}});