!function(e){function t(t){for(var r,o,a=t[0],i=t[1],c=0,s=[];c<a.length;c++)o=a[c],Object.prototype.hasOwnProperty.call(n,o)&&n[o]&&s.push(n[o][0]),n[o]=0;for(r in i)Object.prototype.hasOwnProperty.call(i,r)&&(e[r]=i[r]);for(u&&u(t);s.length;)s.shift()()}var r={},n={3:0};function o(t){if(r[t])return r[t].exports;var n=r[t]={i:t,l:!1,exports:{}};return e[t].call(n.exports,n,n.exports,o),n.l=!0,n.exports}o.e=function(e){var t=[],r=n[e];if(0!==r)if(r)t.push(r[2]);else{var a=new Promise((function(t,o){r=n[e]=[t,o]}));t.push(r[2]=a);var i,c=document.createElement("script");c.charset="utf-8",c.timeout=120,o.nc&&c.setAttribute("nonce",o.nc),c.src=function(e){return o.p+""+({0:"vendors~app~ledger",1:"vendors~app~trezor",2:"app",4:"ledger",5:"vendors~app",6:"vendors~ledger",7:"vendors~trezor"}[e]||e)+".js"}(e);var u=new Error;i=function(t){c.onerror=c.onload=null,clearTimeout(s);var r=n[e];if(0!==r){if(r){var o=t&&("load"===t.type?"missing":t.type),a=t&&t.target&&t.target.src;u.message="Loading chunk "+e+" failed.\n("+o+": "+a+")",u.name="ChunkLoadError",u.type=o,u.request=a,r[1](u)}n[e]=void 0}};var s=setTimeout((function(){i({type:"timeout",target:c})}),12e4);c.onerror=c.onload=i,document.head.appendChild(c)}return Promise.all(t)},o.m=e,o.c=r,o.d=function(e,t,r){o.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:r})},o.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},o.t=function(e,t){if(1&t&&(e=o(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var r=Object.create(null);if(o.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var n in e)o.d(r,n,function(t){return e[t]}.bind(null,n));return r},o.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return o.d(t,"a",t),t},o.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},o.p="",o.oe=function(e){throw console.error(e),e};var a=window.webpackJsonp=window.webpackJsonp||[],i=a.push.bind(a);a.push=t,a=a.slice();for(var c=0;c<a.length;c++)t(a[c]);var u=i;o(o.s=13)}([function(e,t,r){e.exports=r(4)},function(e,t){function r(e,t,r,n,o,a,i){try{var c=e[a](i),u=c.value}catch(e){return void r(e)}c.done?t(u):Promise.resolve(u).then(n,o)}e.exports=function(e){return function(){var t=this,n=arguments;return new Promise((function(o,a){var i=e.apply(t,n);function c(e){r(i,o,a,c,u,"next",e)}function u(e){r(i,o,a,c,u,"throw",e)}c(void 0)}))}}},function(e,t){e.exports=function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}},function(e,t){function r(e,t){for(var r=0;r<t.length;r++){var n=t[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}e.exports=function(e,t,n){return t&&r(e.prototype,t),n&&r(e,n),e}},function(e,t,r){var n=function(e){"use strict";var t=Object.prototype,r=t.hasOwnProperty,n="function"==typeof Symbol?Symbol:{},o=n.iterator||"@@iterator",a=n.asyncIterator||"@@asyncIterator",i=n.toStringTag||"@@toStringTag";function c(e,t,r){return Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}),e[t]}try{c({},"")}catch(e){c=function(e,t,r){return e[t]=r}}function u(e,t,r,n){var o=t&&t.prototype instanceof f?t:f,a=Object.create(o.prototype),i=new E(n||[]);return a._invoke=function(e,t,r){var n="suspendedStart";return function(o,a){if("executing"===n)throw new Error("Generator is already running");if("completed"===n){if("throw"===o)throw a;return T()}for(r.method=o,r.arg=a;;){var i=r.delegate;if(i){var c=b(i,r);if(c){if(c===l)continue;return c}}if("next"===r.method)r.sent=r._sent=r.arg;else if("throw"===r.method){if("suspendedStart"===n)throw n="completed",r.arg;r.dispatchException(r.arg)}else"return"===r.method&&r.abrupt("return",r.arg);n="executing";var u=s(e,t,r);if("normal"===u.type){if(n=r.done?"completed":"suspendedYield",u.arg===l)continue;return{value:u.arg,done:r.done}}"throw"===u.type&&(n="completed",r.method="throw",r.arg=u.arg)}}}(e,r,i),a}function s(e,t,r){try{return{type:"normal",arg:e.call(t,r)}}catch(e){return{type:"throw",arg:e}}}e.wrap=u;var l={};function f(){}function p(){}function h(){}var d={};d[o]=function(){return this};var v=Object.getPrototypeOf,y=v&&v(v(L([])));y&&y!==t&&r.call(y,o)&&(d=y);var w=h.prototype=f.prototype=Object.create(d);function m(e){["next","throw","return"].forEach((function(t){c(e,t,(function(e){return this._invoke(t,e)}))}))}function g(e,t){var n;this._invoke=function(o,a){function i(){return new t((function(n,i){!function n(o,a,i,c){var u=s(e[o],e,a);if("throw"!==u.type){var l=u.arg,f=l.value;return f&&"object"==typeof f&&r.call(f,"__await")?t.resolve(f.__await).then((function(e){n("next",e,i,c)}),(function(e){n("throw",e,i,c)})):t.resolve(f).then((function(e){l.value=e,i(l)}),(function(e){return n("throw",e,i,c)}))}c(u.arg)}(o,a,n,i)}))}return n=n?n.then(i,i):i()}}function b(e,t){var r=e.iterator[t.method];if(void 0===r){if(t.delegate=null,"throw"===t.method){if(e.iterator.return&&(t.method="return",t.arg=void 0,b(e,t),"throw"===t.method))return l;t.method="throw",t.arg=new TypeError("The iterator does not provide a 'throw' method")}return l}var n=s(r,e.iterator,t.arg);if("throw"===n.type)return t.method="throw",t.arg=n.arg,t.delegate=null,l;var o=n.arg;return o?o.done?(t[e.resultName]=o.value,t.next=e.nextLoc,"return"!==t.method&&(t.method="next",t.arg=void 0),t.delegate=null,l):o:(t.method="throw",t.arg=new TypeError("iterator result is not an object"),t.delegate=null,l)}function x(e){var t={tryLoc:e[0]};1 in e&&(t.catchLoc=e[1]),2 in e&&(t.finallyLoc=e[2],t.afterLoc=e[3]),this.tryEntries.push(t)}function k(e){var t=e.completion||{};t.type="normal",delete t.arg,e.completion=t}function E(e){this.tryEntries=[{tryLoc:"root"}],e.forEach(x,this),this.reset(!0)}function L(e){if(e){var t=e[o];if(t)return t.call(e);if("function"==typeof e.next)return e;if(!isNaN(e.length)){var n=-1,a=function t(){for(;++n<e.length;)if(r.call(e,n))return t.value=e[n],t.done=!1,t;return t.value=void 0,t.done=!0,t};return a.next=a}}return{next:T}}function T(){return{value:void 0,done:!0}}return p.prototype=w.constructor=h,h.constructor=p,p.displayName=c(h,i,"GeneratorFunction"),e.isGeneratorFunction=function(e){var t="function"==typeof e&&e.constructor;return!!t&&(t===p||"GeneratorFunction"===(t.displayName||t.name))},e.mark=function(e){return Object.setPrototypeOf?Object.setPrototypeOf(e,h):(e.__proto__=h,c(e,i,"GeneratorFunction")),e.prototype=Object.create(w),e},e.awrap=function(e){return{__await:e}},m(g.prototype),g.prototype[a]=function(){return this},e.AsyncIterator=g,e.async=function(t,r,n,o,a){void 0===a&&(a=Promise);var i=new g(u(t,r,n,o),a);return e.isGeneratorFunction(r)?i:i.next().then((function(e){return e.done?e.value:i.next()}))},m(w),c(w,i,"Generator"),w[o]=function(){return this},w.toString=function(){return"[object Generator]"},e.keys=function(e){var t=[];for(var r in e)t.push(r);return t.reverse(),function r(){for(;t.length;){var n=t.pop();if(n in e)return r.value=n,r.done=!1,r}return r.done=!0,r}},e.values=L,E.prototype={constructor:E,reset:function(e){if(this.prev=0,this.next=0,this.sent=this._sent=void 0,this.done=!1,this.delegate=null,this.method="next",this.arg=void 0,this.tryEntries.forEach(k),!e)for(var t in this)"t"===t.charAt(0)&&r.call(this,t)&&!isNaN(+t.slice(1))&&(this[t]=void 0)},stop:function(){this.done=!0;var e=this.tryEntries[0].completion;if("throw"===e.type)throw e.arg;return this.rval},dispatchException:function(e){if(this.done)throw e;var t=this;function n(r,n){return i.type="throw",i.arg=e,t.next=r,n&&(t.method="next",t.arg=void 0),!!n}for(var o=this.tryEntries.length-1;o>=0;--o){var a=this.tryEntries[o],i=a.completion;if("root"===a.tryLoc)return n("end");if(a.tryLoc<=this.prev){var c=r.call(a,"catchLoc"),u=r.call(a,"finallyLoc");if(c&&u){if(this.prev<a.catchLoc)return n(a.catchLoc,!0);if(this.prev<a.finallyLoc)return n(a.finallyLoc)}else if(c){if(this.prev<a.catchLoc)return n(a.catchLoc,!0)}else{if(!u)throw new Error("try statement without catch or finally");if(this.prev<a.finallyLoc)return n(a.finallyLoc)}}}},abrupt:function(e,t){for(var n=this.tryEntries.length-1;n>=0;--n){var o=this.tryEntries[n];if(o.tryLoc<=this.prev&&r.call(o,"finallyLoc")&&this.prev<o.finallyLoc){var a=o;break}}a&&("break"===e||"continue"===e)&&a.tryLoc<=t&&t<=a.finallyLoc&&(a=null);var i=a?a.completion:{};return i.type=e,i.arg=t,a?(this.method="next",this.next=a.finallyLoc,l):this.complete(i)},complete:function(e,t){if("throw"===e.type)throw e.arg;return"break"===e.type||"continue"===e.type?this.next=e.arg:"return"===e.type?(this.rval=this.arg=e.arg,this.method="return",this.next="end"):"normal"===e.type&&t&&(this.next=t),l},finish:function(e){for(var t=this.tryEntries.length-1;t>=0;--t){var r=this.tryEntries[t];if(r.finallyLoc===e)return this.complete(r.completion,r.afterLoc),k(r),l}},catch:function(e){for(var t=this.tryEntries.length-1;t>=0;--t){var r=this.tryEntries[t];if(r.tryLoc===e){var n=r.completion;if("throw"===n.type){var o=n.arg;k(r)}return o}}throw new Error("illegal catch attempt")},delegateYield:function(e,t,r){return this.delegate={iterator:L(e),resultName:t,nextLoc:r},"next"===this.method&&(this.arg=void 0),l}},e}(e.exports);try{regeneratorRuntime=n}catch(e){Function("r","regeneratorRuntime = r")(n)}},function(e,t,r){"use strict";var n=t,o=r(7),a=r(6),i=o.window?o.window.document:void 0;o.isNode&&console.error("@cosmic-plus/domutils is a browser-only module"),n.addStyles=function(e){var t=n.create("style",{type:"text/css"},e);n.append(i.head,t)},n.append=function(e){for(var t=arguments.length,r=new Array(t>1?t-1:0),o=1;o<t;o++)r[o-1]=arguments[o];r.forEach((function(t){return e.appendChild(n.convert(t))}))},n.addClass=function(e,t){-1===e.className.split(" ").indexOf(t)&&(e.className+=" ".concat(t))},n.appendClass=function(e,t){return a.deprecated("2019-07-16","html.appendClass()","html.addClass()"),n.addClass(e,t)},n.clear=function(){for(var e=arguments.length,t=new Array(e),r=0;r<e;r++)t[r]=arguments[r];t.forEach((function(e){return e.innerHTML=""}))},n.convert=function(e){return e instanceof Element||e instanceof HTMLDocument||e instanceof Text?e:null==e?i.createTextNode(""):e.domNode||i.createTextNode(e)},n.copyContent=function(e){if(e.selectionStart===e.selectionEnd){if(e.select)e.select();else{if(!window.getSelection)return;var t=i.createRange();t.selectNode(e),window.getSelection().removeAllRanges(),window.getSelection().addRange(t)}return i.execCommand("copy")}},n.copyString=function(e){var t=n.create("textarea",{},e);n.append(i.body,t),n.copyContent(t),n.destroy(t)},n.create=function(e,t){var r=i.createElement(e);if("string"==typeof t)switch(t.substr(0,1)){case"#":r.id=t.substr(1);break;case".":r.className=t.substr(1);break;default:throw new Error("Unhandled attribute")}else Object.assign(r,t);for(var o=arguments.length,a=new Array(o>2?o-2:0),c=2;c<o;c++)a[c-2]=arguments[c];return a.length>0&&n.append.apply(n,[r].concat(a)),r},n.destroy=function(e){try{e.parentNode&&e.parentNode.removeChild(e),e.innerHTML=""}catch(e){console.error(e)}},n.grab=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:i;return t.querySelector(e)},n.hide=function(){for(var e=arguments.length,t=new Array(e),r=0;r<e;r++)t[r]=arguments[r];t.forEach((function(e){return e.hidden=!0}))},n.replace=function(e,t){var r=n.convert(t);return e.parentNode.replaceChild(r,e),r},n.rewrite=function(e){n.clear(e);for(var t=arguments.length,r=new Array(t>1?t-1:0),o=1;o<t;o++)r[o-1]=arguments[o];n.append.apply(n,[e].concat(r))},n.show=function(){for(var e=arguments.length,t=new Array(e),r=0;r<e;r++)t[r]=arguments[r];t.forEach((function(e){return e.hidden=!1}))}},function(e,t,r){"use strict";var n=t;n.delay=function(e){var t,r=!0;return function(){return r&&(r=!1,t=new Promise((function(t){return t(e())}))),t}},n.timeout=function(e){return new Promise((function(t){return setTimeout(t,e)}))},n.capitalize=function(e){return e.substr(0,1).toUpperCase()+e.slice(1)},n.shorter=function(e){return e.length>50?e.substr(0,5)+"..."+e.substr(-5):e},n.setHiddenProperty=function(e,t,r){Object.defineProperty(e,t,{value:r,enumerable:!1,configurable:!0})},n.deprecated=function(e,t,r){console.error("Warning: ".concat(t," is deprecated and will be removed after ").concat(e,". Please use ").concat(r," instead."))},n.useExtra=function(e){return e[o]||n.setHiddenProperty(e,o,{}),e[o]};var o="@cosmic-plus";n.isUtf8=function(e){return!e.match(/[\0-\x1F\x7F-\x9F\xAD\uD7FC-\uF8FF]/)},n.isBase64=function(e){return!!e.match(/^[0-9a-zA-Z+/]*=*$/)},n.day=function(e){return(e?new Date(e):new Date).toISOString().replace(/T.*/,"")},n.copy=function(){return console.error("misc.copy() have been moved to html.copyString()")}},function(module,exports,__webpack_require__){(function(process,global){var env=exports;if(env.isBrowser="undefined"!=typeof window&&void 0!==window.document,env.isNode=void 0!==process&&process.versions&&process.versions.node,env.isEmbedded=env.isBrowser&&window.self!==window.top,env.window=env.isBrowser&&window,env.global=env.isNode&&global,env.nodeRequire=function(){},env.isNode){var stealth_require=eval("require");env.nodeRequire=function(e){return stealth_require(e)}}}).call(this,__webpack_require__(11),__webpack_require__(8))},function(e,t){var r;r=function(){return this}();try{r=r||new Function("return this")()}catch(e){"object"==typeof window&&(r=window)}e.exports=r},function(e,t,r){},function(e,t,r){var n=r(0),o=r(1),a=r(2),i=r(3),c=t,u=r(5),s=r(14),l=r(15);c.array=[],c.nodes=[],c.byId={};var f=function(){"use strict";function e(t){a(this,e),Object.assign(this,t,l[t.protocol]),this.name=t.name.replace(/ \(.*\)/,""),this.fullName=t.name,!this.buttonText&&this.redirection&&(this.buttonText="Go to "+this.name)}var t;return i(e,[{key:"handle",value:(t=o(n.mark((function e(t){return n.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",this.handler(this,t));case 1:case"end":return e.stop()}}),e,this)}))),function(e){return t.apply(this,arguments)})},{key:"node",get:function(){return u.create("option",{value:this.name},this.fullName)}}]),e}();for(var p in s){var h=new f(s[p]);t.array.push(h),t.nodes.push(h.node),t[h.name]=h,t.byId[p]=h}},function(e,t){var r,n,o=e.exports={};function a(){throw new Error("setTimeout has not been defined")}function i(){throw new Error("clearTimeout has not been defined")}function c(e){if(r===setTimeout)return setTimeout(e,0);if((r===a||!r)&&setTimeout)return r=setTimeout,setTimeout(e,0);try{return r(e,0)}catch(t){try{return r.call(null,e,0)}catch(t){return r.call(this,e,0)}}}!function(){try{r="function"==typeof setTimeout?setTimeout:a}catch(e){r=a}try{n="function"==typeof clearTimeout?clearTimeout:i}catch(e){n=i}}();var u,s=[],l=!1,f=-1;function p(){l&&u&&(l=!1,u.length?s=u.concat(s):f=-1,s.length&&h())}function h(){if(!l){var e=c(p);l=!0;for(var t=s.length;t;){for(u=s,s=[];++f<t;)u&&u[f].run();f=-1,t=s.length}u=null,l=!1,function(e){if(n===clearTimeout)return clearTimeout(e);if((n===i||!n)&&clearTimeout)return n=clearTimeout,clearTimeout(e);try{n(e)}catch(t){try{return n.call(null,e)}catch(t){return n.call(this,e)}}}(e)}}function d(e,t){this.fun=e,this.array=t}function v(){}o.nextTick=function(e){var t=new Array(arguments.length-1);if(arguments.length>1)for(var r=1;r<arguments.length;r++)t[r-1]=arguments[r];s.push(new d(e,t)),1!==s.length||l||c(h)},d.prototype.run=function(){this.fun.apply(null,this.array)},o.title="browser",o.browser=!0,o.env={},o.argv=[],o.version="",o.versions={},o.on=v,o.addListener=v,o.once=v,o.off=v,o.removeListener=v,o.removeAllListeners=v,o.emit=v,o.prependListener=v,o.prependOnceListener=v,o.listeners=function(e){return[]},o.binding=function(e){throw new Error("process.binding is not supported")},o.cwd=function(){return"/"},o.chdir=function(e){throw new Error("process.chdir is not supported")},o.umask=function(){return 0}},function(e,t,r){"use strict";NodeList.prototype.forEach||(NodeList.prototype.forEach=Array.prototype.forEach),Array.prototype.find||Object.defineProperty(Array.prototype,"find",{value:function(e){if(null==this)throw new TypeError('"this" is null or not defined');var t=Object(this),r=t.length>>>0;if("function"!=typeof e)throw new TypeError("predicate must be a function");for(var n=arguments[1],o=0;o<r;){var a=t[o];if(e.call(n,a,o,t))return a;o++}},configurable:!0,writable:!0}),"function"!=typeof Object.assign&&Object.defineProperty(Object,"assign",{value:function(e,t){if(null==e)throw new TypeError("Cannot convert undefined or null to object");for(var r=Object(e),n=1;n<arguments.length;n++){var o=arguments[n];if(null!=o)for(var a in o)Object.prototype.hasOwnProperty.call(o,a)&&(r[a]=o[a])}return r},writable:!0,configurable:!0});var n=Function.bind.call(Function.call,Array.prototype.reduce),o=Function.bind.call(Function.call,Object.prototype.propertyIsEnumerable),a=Function.bind.call(Function.call,Array.prototype.concat),i=Object.getOwnPropertyNames;Object.values||(Object.values=function(e){return n(i(e),(function(t,r){return a(t,"string"==typeof r&&o(e,r)?[e[r]]:[])}),[])}),Object.entries||(Object.entries=function(e){return n(i(e),(function(t,r){return a(t,"string"==typeof r&&o(e,r)?[[r,e[r]]]:[])}),[])})},function(e,t,r){"use strict";r(12);var n,o,a=r(10),i=r(9);o=location.pathname.replace(/.*\//,""),i.contextIsWidget=!!o.match(/^widget(.html)?$/),i.query=location.search.length>1&&location.search,i.authenticator=a[localStorage.authenticator]||a["Stellar Authenticator"],i.redirect=!i.contextIsWidget&&"true"===localStorage.redirect,i.qrCode="true"===localStorage.QR,i.query&&i.redirect&&"cosmiclink"===i.authenticator.protocol?(n=i.authenticator.url+location.search,location.replace(n)):function(e){var t=navigator.serviceWorker;if(t&&(t.register("worker.js"),t.addEventListener("controllerchange",(function(){return location.reload()}))),"index.html"===e){var n=location.pathname.replace(/index.html$/,""),o="".concat(n).concat(location.search).concat(location.hash);history.replaceState({},"",o)}window.onload=function(){return Promise.all([r.e(1),r.e(0),r.e(5),r.e(2)]).then(r.t.bind(null,19,7))}}(o)},function(e,t,r){"use strict";var n=t;n.LedgerWallet={name:"Ledger Wallet",protocol:"ledgerwallet",needSource:!0,needNetwork:!0},n.TrezorWallet={name:"Trezor Wallet",protocol:"trezorwallet",needSource:!0,needNetwork:!0},n.StellarAuthenticator={name:"Stellar Authenticator",protocol:"cosmiclink",url:"https://stellar-authenticator.org/"},n.Lobstr={name:"Lobstr Web (partial support)",protocol:"sep0007",url:"https://lobstr.co/?tx=",target:"new"},n.StellarTerm={name:"StellarTerm (partial support)",protocol:"sep0007",url:"https://stellarterm.com/?tx=",target:"new"},n.Sep7Wallet={name:"Sep-0007 Wallet",protocol:"sep0007",url:"web+stellar:",target:"external",needSource:!0,needNetwork:!0},n.StellarLaboratory={name:"Stellar Laboratory",protocol:"stellarlab",url:"https://stellar.org/laboratory/#txsigner",target:"new",needSource:!0,needNetwork:!0},n.CopyPasteXdr={name:"Copy/Paste XDR",protocol:"copy",needSource:!0,needNetwork:!0}},function(e,t,r){var n,o,a,i,c,u,s,l,f,p,h,d=r(0),v=r(1),y=t,w={redirection:!0,textarea:!1,qrCode:!0};function m(){return Promise.all([r.e(0),r.e(6),r.e(4)]).then(r.t.bind(null,20,7)).then((function(e){return e.default}))}function g(){return Promise.all([r.e(1),r.e(7)]).then(r.t.bind(null,21,7)).then((function(e){return e.register("https://cosmic.link","mister.ticot@cosmic.plus"),e.default}))}for(var b in y.cosmiclink={handler:function(e,t){return e.url+t.query}},y.ledgerwallet={buttonText:"Sign with Ledger Wallet",qrCode:!1,getAccountId:(i=v(d.mark((function e(){var t;return d.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,m();case 2:return t=e.sent,e.next=5,t.connect();case 5:return e.abrupt("return",t.publicKey);case 6:case"end":return e.stop()}}),e)}))),function(){return i.apply(this,arguments)}),handler:(a=v(d.mark((function e(t,r){var n;return d.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,r.lock();case 2:return e.next=4,m();case 4:return n=e.sent,e.abrupt("return",v(d.mark((function e(){return d.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",n.sign(r.transaction));case 1:case"end":return e.stop()}}),e)}))));case 6:case"end":return e.stop()}}),e)}))),function(e,t){return a.apply(this,arguments)}),refresh:(o=v(d.mark((function e(t){return d.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,m();case 2:e.sent.onDisconnect=function(){return t()};case 4:case"end":return e.stop()}}),e)}))),function(e){return o.apply(this,arguments)}),onExit:(n=v(d.mark((function e(){return d.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,m();case 2:e.sent.disconnect();case 4:case"end":return e.stop()}}),e)}))),function(){return n.apply(this,arguments)})},y.trezorwallet={buttonText:"Sign with Trezor Wallet",qrCode:!1,getAccountId:(l=v(d.mark((function e(){var t;return d.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,g();case 2:return t=e.sent,e.next=5,t.connect();case 5:return e.abrupt("return",t.publicKey);case 6:case"end":return e.stop()}}),e)}))),function(){return l.apply(this,arguments)}),handler:(s=v(d.mark((function e(t,r){var n;return d.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,r.lock();case 2:return e.next=4,g();case 4:return n=e.sent,e.abrupt("return",v(d.mark((function e(){return d.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",n.sign(r.transaction));case 1:case"end":return e.stop()}}),e)}))));case 6:case"end":return e.stop()}}),e)}))),function(e,t){return s.apply(this,arguments)}),refresh:(u=v(d.mark((function e(t){return d.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,g();case 2:e.sent.onDisconnect=function(){return t()};case 4:case"end":return e.stop()}}),e)}))),function(e){return u.apply(this,arguments)}),onExit:(c=v(d.mark((function e(){return d.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,g();case 2:e.sent.disconnect();case 4:case"end":return e.stop()}}),e)}))),function(){return c.apply(this,arguments)})},y.sep0007={handler:(f=v(d.mark((function e(t,r){var n,o;return d.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,r.lock();case 2:if(n=r.sep7,"web+stellar:"===t.url){e.next=9;break}return o=encodeURIComponent(n),e.abrupt("return","".concat(t.url).concat(o));case 9:return e.abrupt("return",n);case 10:case"end":return e.stop()}}),e)}))),function(e,t){return f.apply(this,arguments)})},y.stellarlab={handler:(p=v(d.mark((function e(t,r){var n,o,a,i;return d.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,r.lock();case 2:return n=encodeURIComponent(r.xdr),o="?xdr=".concat(n),"public"===r.network||"test"===r.network?o+="&network=".concat(r.network):(a=encodeURIComponent(r.network),i=encodeURIComponent(r.horizon),o+="&network=custom&horizonURL=".concat(i,"&networkPassphrase=").concat(a)),e.abrupt("return",t.url+o);case 6:case"end":return e.stop()}}),e)}))),function(e,t){return p.apply(this,arguments)})},y.copy={redirection:!1,textarea:!0,handler:(h=v(d.mark((function e(t,r){return d.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,r.lock();case 2:return e.abrupt("return",r.xdr);case 3:case"end":return e.stop()}}),e)}))),function(e,t){return h.apply(this,arguments)})},y)y[b]=Object.assign({},w,y[b]);y.defaults=w}]);
//# sourceMappingURL=index.js.map