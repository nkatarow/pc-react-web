"use strict";var precacheConfig=[["/index.html","21a3f37818f1710c3bd6a55c236cfd5d"],["/static/css/main.b10e65f2.css","0cecc3565831d85a3b8d19a6df4c7692"],["/static/js/main.628189fa.js","a0961023bff48529e5abdb407edeeef9"],["/static/media/25-percent-compressions.de64844f.svg","de64844fdcf28cbec6a2008643e2aaf1"],["/static/media/35AF9E_0_0.1884b6b0.eot","1884b6b0093b285fd97fb4f508db25ad"],["/static/media/35AF9E_0_0.8f8374cc.woff","8f8374cc9d113a73de948318c2abc3a1"],["/static/media/35AF9E_0_0.958e4dae.woff2","958e4dae1cc156d0a10970becd425e68"],["/static/media/35AF9E_0_0.e9f61caa.ttf","e9f61caa68c11220042f9a8361a60395"],["/static/media/35AF9E_1_0.3464547d.woff","3464547db38d7772f0fd383e62867cf3"],["/static/media/35AF9E_1_0.379ba2a4.ttf","379ba2a4d4d2cae518bdc68628759165"],["/static/media/35AF9E_1_0.8b2f1be2.woff2","8b2f1be27634b1bce72ccd63bd3686d8"],["/static/media/35AF9E_1_0.8e6ebcb6.eot","8e6ebcb641dc0f84ba303e0f4b9562a4"],["/static/media/35AF9E_2_0.3f8506b1.ttf","3f8506b1b02fde37d419be91cc7e35c9"],["/static/media/35AF9E_2_0.9e8cefac.eot","9e8cefac12bd491c8b6f53f2db71b8ac"],["/static/media/35AF9E_2_0.cc533f86.woff","cc533f866d20fe5b4adc78c058f3632a"],["/static/media/35AF9E_2_0.d8456868.woff2","d84568687443e71fcbc41894a86ec720"],["/static/media/35AF9E_3_0.8767982a.woff","8767982a3b2474786b09e5cf6e405648"],["/static/media/35AF9E_3_0.a4fbf075.woff2","a4fbf075ba4af8708503cfe808858a22"],["/static/media/35AF9E_3_0.aebd77f4.eot","aebd77f452f8453da24601261cb61cb2"],["/static/media/35AF9E_3_0.b76f8d4b.ttf","b76f8d4b6fa1890abace1f63fdc05bab"],["/static/media/35AF9E_4_0.25c594b8.eot","25c594b83acef383385eef3851447bff"],["/static/media/35AF9E_4_0.882bce19.woff","882bce19bf0bc14160a371a7cf820c2f"],["/static/media/35AF9E_4_0.a4a4bd75.ttf","a4a4bd754c09b3a3068d932d8059b4ba"],["/static/media/35AF9E_4_0.f36e1079.woff2","f36e1079b6caf5fe34e6bf69d6c3c059"],["/static/media/35AF9E_5_0.3a6e72f8.ttf","3a6e72f88dc1e186571756640f710ecc"],["/static/media/35AF9E_5_0.7f2ce840.woff2","7f2ce84012dc462b719a70efe87114d6"],["/static/media/35AF9E_5_0.80d28cc5.eot","80d28cc51eff4a8819152fe0af1b375a"],["/static/media/35AF9E_5_0.c84e9fc2.woff","c84e9fc23d4cf30f7767e700f231696d"],["/static/media/CloseButton.26cb2874.svg","26cb2874f2d2a3a487cd3aa3c97754fb"],["/static/media/Home-Accordion-HealthEMS-Composite.a535c71c.jpg","a535c71c5dc9114d4ba3899556f13513"],["/static/media/Home-Accordion-HomeSolutions.d631bff0.jpg","d631bff0d364fc09ee7535f57d05c98b"],["/static/media/Home-Solutions-Blockquote-desktop.74ec2eed.jpg","74ec2eed0cd288f4cefc4386b28c564b"],["/static/media/Home-Solutions-Blockquote-mobile.b84553d8.jpg","b84553d8c79130c65d17ca45c6fa2b0f"],["/static/media/Home-Solutions-Hero-desktop.8a53f22d.jpg","8a53f22d230a22c8e9934eda6deaa1b9"],["/static/media/Home-Solutions-Hero-mobile.5329ab25.jpg","5329ab25afb967c5d2dccf28f15b5083"],["/static/media/Lifenet-manage-equipment.341d066f.jpg","341d066f0d3b6bd1cfa8e9f477ba2603"],["/static/media/StrykerDataSolutionsVideoStill.e6c2491f.jpg","e6c2491f7398931a53bebb4a9e90098c"],["/static/media/bg-compression-desktop.df4bfea1.jpg","df4bfea125b4b61b43f016b5b3a35156"],["/static/media/bg-compression-mobile.77d6061a.jpg","77d6061a3e7380dc9de17e1546969042"],["/static/media/bg-hero-desktop.8ab02509.jpg","8ab025090ed474434d3a8042d7098c30"],["/static/media/bg-hero-mobile.faa20a51.jpg","faa20a51858b8256c0d2bf4dbfbf11ff"],["/static/media/chevron-down.16df426e.svg","16df426ec79fcf828102a8f0481a80a0"],["/static/media/chevron.657324ac.svg","657324acb324cd4ee35f697009204bc4"],["/static/media/code-stat-CPR.4c84c0ca.jpg","4c84c0ca3c93e12651d70750571a6ee2"],["/static/media/code-stat-hero-desktop.d4e949d9.jpg","d4e949d90a08a69708fa176e8f1d218d"],["/static/media/code-stat-hero-mobile.fbf7dfd9.jpg","fbf7dfd963f15eab1a6deca8fc4fe5a9"],["/static/media/codestat-hero-desktop.33a1b076.jpg","33a1b076e73efb3e6d054e3b4e2fff92"],["/static/media/codestat-hero-mobile.e7a6bc4d.jpg","e7a6bc4dabd85c945d184b180d34e56a"],["/static/media/codestat-hero-preload.dddf9928.jpg","dddf99286f72cb9f4395ad53c7d8b013"],["/static/media/codestat-icon.b846c1dc.svg","b846c1dcd0c4204b777e908cfb6a34b3"],["/static/media/codestat-landscape.dd8255cc.jpg","dd8255cc93d8a1ccf14aba7239af168a"],["/static/media/codestat.271e68b8.jpg","271e68b833e5a587354deeb9e5d08571"],["/static/media/connectx.2188267a.jpg","2188267a66fe46d6c5cc15dd229465b4"],["/static/media/connectx.2f538b06.svg","2f538b060c2d7a31c09cfb6282770ae0"],["/static/media/custom-analytics.2d3af59a.jpg","2d3af59adf63f3f844a146bcdf71bd41"],["/static/media/customize-solution.b9ba271b.svg","b9ba271b1c6e5939eaaafdb9603f02aa"],["/static/media/data-handling.5f43735e.jpg","5f43735ead9be24b6f68dd2f08dd3d0d"],["/static/media/data-reports.c2ddd184.svg","c2ddd184d5d7dcc57334848eb3dbb190"],["/static/media/decisions-collaboration.85ece8fd.jpg","85ece8fd12dee7d265ac5d24f3808f5b"],["/static/media/desktop-healthems-hero.15608a3e.jpg","15608a3e81f9b94a16da98f40b761e68"],["/static/media/desktop-healthems-preload.2909515f.jpg","2909515fe884217e1f156b00d38299e4"],["/static/media/docs-icon.24689e58.svg","24689e58888e98ad0d8e71162a6c5283"],["/static/media/flexible-data-icon.c1feff03.svg","c1feff0370190c669dad3b34a92f99a2"],["/static/media/health-ems-hero-desktop.15608a3e.jpg","15608a3e81f9b94a16da98f40b761e68"],["/static/media/health-ems-hero-mobile.f5a06b11.jpg","f5a06b117837e86659675db42d6abba4"],["/static/media/health-ems-quotebackground-sacramento-mobile.074d3ca3.jpg","074d3ca314e35b346fba355e25902496"],["/static/media/health-ems-quotebackground-sacramento.1374384c.jpg","1374384c0c3e32a70e6d684d3516eb98"],["/static/media/healthems-fire.e1320f7a.jpg","e1320f7a69d73fad0b9af18d1ffe84af"],["/static/media/healthems-icon.95ca3931.svg","95ca3931e5feddbe4ec0d23caf6d4b51"],["/static/media/healthems-landscape.a2be970c.jpg","a2be970cb1748030500a4a6da73ac15c"],["/static/media/healthems-manager.a69e60a8.jpg","a69e60a8e97e776b4eb265f7843c4f06"],["/static/media/healthems-revnet.a8b10f94.jpg","a8b10f942fc5c99497670221e74f8fe4"],["/static/media/healthems.7be756c9.jpg","7be756c96a99bd5b88bebeb04e3ff62f"],["/static/media/homesolutions-hero-desktop.9def172e.jpg","9def172ef6fc7702f5576ee2f6d8ab38"],["/static/media/homesolutions-hero-mobile.248b771e.jpg","248b771e2353ecfe8c3b222fba2029af"],["/static/media/homesolutions-hero-preload.9fac1dcd.jpg","9fac1dcd6d14b08fbc0e6a2ffdddcbcf"],["/static/media/homesolutions-icon.0037fce1.svg","0037fce163bcfafe7d199ba6187b8e32"],["/static/media/homesolutions-mobile.988a1103.jpg","988a11033196b731c16175427d767daf"],["/static/media/homesolutions-revnet.a14cb537.jpg","a14cb5375c1a79d8f5dd958a29631602"],["/static/media/homesolutions.4cd89908.jpg","4cd899088203679721332ffe59f8ae3e"],["/static/media/hp-hero-desktop.4dc20a06.jpg","4dc20a069bbb9b1f6625eb79e1f36580"],["/static/media/hp-hero-mobile.261b1a6f.jpg","261b1a6f3abaa630b957f84bd0d1572d"],["/static/media/hp-hero-preload.9fea6fcc.jpg","9fea6fccadfba5c9fd4c316d4488b917"],["/static/media/hp-intro-bg-desktop_revised.b766b944.png","b766b94422fdcc32725808be86581c91"],["/static/media/hp-intro-bg-mobile_revised.8d8fc54c.png","8d8fc54c4776339075275b74386d7c70"],["/static/media/icon-adapter.3f3f6309.svg","3f3f6309680c83d5bcc349f2b126f283"],["/static/media/icon-alert.824517e8.svg","824517e8a69461dc74c32a3ceee65742"],["/static/media/icon-asset.131b0e69.svg","131b0e69e43dccf55e03481afbbd6c90"],["/static/media/icon-bettercare.13298082.svg","132980828e31898826c822d1596841b5"],["/static/media/icon-connect.f4d9adaf.svg","f4d9adafcb37d809b45f3083a962b51c"],["/static/media/icon-consult.9aede88c.svg","9aede88cf6a3e8cbe43fae1f226c3a45"],["/static/media/icon-dashboard.c1dd2643.svg","c1dd2643abf47e82d8d24d355ad72790"],["/static/media/icon-data.fd403254.svg","fd403254ce855f214f5e7938c00260b3"],["/static/media/icon-export.0a64cee3.svg","0a64cee32c26dc2593cd501cf78006d3"],["/static/media/icon-fastereasier.53666633.svg","53666633c5c63f46073578cdace1b812"],["/static/media/icon-onepush.5476b6ee.svg","5476b6ee84e0a5767c475ae787f93bd7"],["/static/media/icon-revenue.870be74a.svg","870be74a37312f38e02470dca38efbc9"],["/static/media/icon-touchscreen.fc6eeae4.svg","fc6eeae4f32312261f95ae2c62a0a575"],["/static/media/icon-trainefficiently.7dbb3a7a.svg","7dbb3a7aad00a7e385c2f49776608662"],["/static/media/improvement.c2e14214.jpg","c2e1421421fa014a82e957863df03f5b"],["/static/media/learn-efficiently.8af6f66b.svg","8af6f66bb6566f1afa60d7db43f17f35"],["/static/media/life-net-hero-desktop.ebf7f1c2.jpg","ebf7f1c286a82b544816f3fc3f65c2ab"],["/static/media/life-net-hero-mobile.b328ba7b.jpg","b328ba7ba9ea1f64c21166b42bc3fb4d"],["/static/media/lifenet-hero-desktop.6ef0668b.jpg","6ef0668b57a20a3f55c76a0602775e8c"],["/static/media/lifenet-hero-mobile.2f4e7507.jpg","2f4e75079ef5393e8a78a537d89ebb50"],["/static/media/lifenet-hero-preload.0e6da343.jpg","0e6da3432aff0bdfc80d096eee4c79b2"],["/static/media/lifenet-hero-preload.3525ddb4.jpg","3525ddb44d2aee0a163cf704e20e4edd"],["/static/media/lifenet-icon.3668ea2f.svg","3668ea2f4202a629d631e43eecd35ed1"],["/static/media/lifenet.8a7daf55.jpg","8a7daf55a94312a1f62f2ee89118b725"],["/static/media/manager.76120a9a.jpg","76120a9a194d73100fae8c6f60b3a843"],["/static/media/mobile-healthems-hero.f5a06b11.jpg","f5a06b117837e86659675db42d6abba4"],["/static/media/mobiletouch.f0af0c59.jpg","f0af0c59917527aaa17ec10f2c8dbe1f"],["/static/media/not-found.9702e44f.svg","9702e44fa880762ca26a6c10042c396f"],["/static/media/operational-effectiveness-icon.837b8258.svg","837b82582e0d784be4dcd48d8b20f12a"],["/static/media/patient-privacy.33f1ccc5.jpg","33f1ccc50617b9251e6aba00968dc504"],["/static/media/proservices-confidence.856bc4b9.jpg","856bc4b99499510300ee923a265f6113"],["/static/media/proservices-get-help.7d3f3c3c.jpg","7d3f3c3cdc910549b967aa1a433f40bc"],["/static/media/proservices-hero-desktop.03d562fa.jpg","03d562fa0a2e628232d407ba70aeff23"],["/static/media/proservices-hero-mobile.085ebf52.jpg","085ebf52bcaed403ccec551fa3091ded"],["/static/media/proservices-hero-preload.5eb0b196.jpg","5eb0b19678de101c12a3e0057e386116"],["/static/media/proservices-smooth-interaction.b1e3e14f.jpg","b1e3e14f0fd5b84af2bb75434bdebddc"],["/static/media/proven-system.c23bbc39.jpg","c23bbc397dec4d6ec6141cbba9fd1691"],["/static/media/quote-bg-desktop.2c399023.jpg","2c39902355a8bcae89de80252bd9f2c6"],["/static/media/quote-bg-desktop.3d6a4a78.jpg","3d6a4a78da67dde2efbee0e3b95bbae1"],["/static/media/quote-bg-mobile.5bb2b93c.jpg","5bb2b93cfddec659b259e89b352711b3"],["/static/media/quote-bg-mobile.a66e8b78.jpg","a66e8b78ce8095132a45b85c39556d0a"],["/static/media/reliable-icon.4d2486fe.svg","4d2486fe88653d7b45beeb86789eb12c"],["/static/media/resuscitation.4530a1a6.jpg","4530a1a66e93f6664517843a47dda864"],["/static/media/service-support.3ea0758c.svg","3ea0758cb4f980cca1234fd1788569cb"],["/static/media/software-implementation.8e093364.svg","8e0933648d2296c8f2fb683fb0379369"],["/static/media/stemi-stroke.79398a10.jpg","79398a102a36caa2572e7f1069b5393d"],["/static/media/streamline-reporting.f89bfc6d.jpg","f89bfc6d66758bd8988b93708cb3359a"],["/static/media/stryker-logo.b6e21a2f.svg","b6e21a2f81001c4638c69b6ef5d5cc4b"],["/static/media/stryker-logo.ea3313c1.svg","ea3313c1129f0b7e19ee1cfffcb1ed99"]],cacheName="sw-precache-v3-sw-precache-webpack-plugin-"+(self.registration?self.registration.scope:""),ignoreUrlParametersMatching=[/^utm_/],addDirectoryIndex=function(e,a){var c=new URL(e);return"/"===c.pathname.slice(-1)&&(c.pathname+=a),c.toString()},cleanResponse=function(e){return e.redirected?("body"in e?Promise.resolve(e.body):e.blob()).then(function(a){return new Response(a,{headers:e.headers,status:e.status,statusText:e.statusText})}):Promise.resolve(e)},createCacheKey=function(e,a,c,t){var d=new URL(e);return t&&d.pathname.match(t)||(d.search+=(d.search?"&":"")+encodeURIComponent(a)+"="+encodeURIComponent(c)),d.toString()},isPathWhitelisted=function(e,a){if(0===e.length)return!0;var c=new URL(a).pathname;return e.some(function(e){return c.match(e)})},stripIgnoredUrlParameters=function(e,a){var c=new URL(e);return c.hash="",c.search=c.search.slice(1).split("&").map(function(e){return e.split("=")}).filter(function(e){return a.every(function(a){return!a.test(e[0])})}).map(function(e){return e.join("=")}).join("&"),c.toString()},hashParamName="_sw-precache",urlsToCacheKeys=new Map(precacheConfig.map(function(e){var a=e[0],c=e[1],t=new URL(a,self.location),d=createCacheKey(t,hashParamName,c,/\.\w{8}\./);return[t.toString(),d]}));function setOfCachedUrls(e){return e.keys().then(function(e){return e.map(function(e){return e.url})}).then(function(e){return new Set(e)})}self.addEventListener("install",function(e){e.waitUntil(caches.open(cacheName).then(function(e){return setOfCachedUrls(e).then(function(a){return Promise.all(Array.from(urlsToCacheKeys.values()).map(function(c){if(!a.has(c)){var t=new Request(c,{credentials:"same-origin"});return fetch(t).then(function(a){if(!a.ok)throw new Error("Request for "+c+" returned a response with status "+a.status);return cleanResponse(a).then(function(a){return e.put(c,a)})})}}))})}).then(function(){return self.skipWaiting()}))}),self.addEventListener("activate",function(e){var a=new Set(urlsToCacheKeys.values());e.waitUntil(caches.open(cacheName).then(function(e){return e.keys().then(function(c){return Promise.all(c.map(function(c){if(!a.has(c.url))return e.delete(c)}))})}).then(function(){return self.clients.claim()}))}),self.addEventListener("fetch",function(e){if("GET"===e.request.method){var a,c=stripIgnoredUrlParameters(e.request.url,ignoreUrlParametersMatching),t="index.html";(a=urlsToCacheKeys.has(c))||(c=addDirectoryIndex(c,t),a=urlsToCacheKeys.has(c));var d="/index.html";!a&&"navigate"===e.request.mode&&isPathWhitelisted(["^(?!\\/__).*"],e.request.url)&&(c=new URL(d,self.location).toString(),a=urlsToCacheKeys.has(c)),a&&e.respondWith(caches.open(cacheName).then(function(e){return e.match(urlsToCacheKeys.get(c)).then(function(e){if(e)return e;throw Error("The cached response that was expected is missing.")})}).catch(function(a){return console.warn('Couldn\'t serve response for "%s" from cache: %O',e.request.url,a),fetch(e.request)}))}});