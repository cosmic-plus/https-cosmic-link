!function(e){var t={};function n(r){if(t[r])return t[r].exports;var o=t[r]={i:r,l:!1,exports:{}};return e[r].call(o.exports,o,o.exports,n),o.l=!0,o.exports}n.m=e,n.c=t,n.d=function(e,t,r){n.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:r})},n.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.t=function(e,t){if(1&t&&(e=n(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var r=Object.create(null);if(n.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var o in e)n.d(r,o,function(t){return e[t]}.bind(null,o));return r},n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="",n(n.s=0)}([function(e,t,n){"use strict";var r=location.protocol+"//"+location.host+"/",o="0.1.27:cache",c=["/","index.html","main.css","main.js","bower-js-stellar-sdk/stellar-sdk.min.js"];self.addEventListener("install",function(e){console.log("Installing service worker..."),e.waitUntil(caches.open(o).then(function(e){return e.addAll(c)}).then(self.skipWaiting()).then(console.log("Service worker installed")).catch(console.error))}),self.addEventListener("activate",function(e){console.log("Activating service worker..."),e.waitUntil(caches.keys().then(function(e){return Promise.all(e.filter(function(e){return!e.startsWith("0.1.27")}).map(function(e){return caches.delete(e)}))}).then(console.log("Service worker activated")).catch(console.error))}),self.addEventListener("fetch",function(e){if("GET"===e.request.method){var t=e.request,n=e.request.url.replace(r,"").replace(/\?.*$/,"");if(n&&"index.html"!==n){if(-1===c.indexOf(n))return}else t=new Request(r+n);console.log("Fetching resource: "+n+"..."),e.respondWith(caches.match(t).then(function(e){var n=fetch(t).then(function(e){var n=e.clone();return caches.open(o).then(function(e){return e.put(t,n)}).catch(console.error),e}).catch(console.error);return e||n}))}})}]);
//# sourceMappingURL=worker.js.map