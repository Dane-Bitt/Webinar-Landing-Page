(()=>{"use strict";var e={426:(e,r,n)=>{n.d(r,{Z:()=>a});var t=n(645),o=n.n(t)()((function(e){return e[1]}));o.push([e.id," body {\r\n  font-family: sans-serif;\r\n  background: rgb(217, 239, 252);\r\n  padding: 20px;\r\n}\r\n\r\n#myWindow {\r\n  display: flex;\r\n  align-items: center;\r\n  justify-content: center;   \r\n  overflow: hidden;  \r\n  position: relative; \r\n  height: 800px;\r\n  width: 100%;\r\n  max-width: 1920px; \r\n  max-height: 100vh;  \r\n}\r\n\r\n#myContent {\r\n  \r\n  position: relative; \r\n  display: flex;\r\n  align-items: center;\r\n  cursor: zoom-in;\r\n} \r\n\r\n.container {\r\n  display: flex;\r\n  justify-content: center;\r\n  border: 5px solid rgb(206, 206, 206);\r\n  background: white; \r\n  padding-left: 30px;\r\n  padding-right: 30px; \r\n  border-radius: 7px;\r\n}\r\n\r\n.text-header {\r\n  text-align: center;\r\n  padding-bottom: 30px;\r\n  font-size: 30px;\r\n  color:blue;\r\n  font-weight: 600;\r\n}",""]);const a=o},645:e=>{e.exports=function(e){var r=[];return r.toString=function(){return this.map((function(r){var n=e(r);return r[2]?"@media ".concat(r[2]," {").concat(n,"}"):n})).join("")},r.i=function(e,n,t){"string"==typeof e&&(e=[[null,e,""]]);var o={};if(t)for(var a=0;a<this.length;a++){var i=this[a][0];null!=i&&(o[i]=!0)}for(var s=0;s<e.length;s++){var c=[].concat(e[s]);t&&o[c[0]]||(n&&(c[2]?c[2]="".concat(n," and ").concat(c[2]):c[2]=n),r.push(c))}},r}},91:e=>{e.exports=function(e,r){return r||(r={}),e?(e=String(e.__esModule?e.default:e),r.hash&&(e+=r.hash),r.maybeNeedQuotes&&/[\t\n\f\r "'=<>`]/.test(e)?'"'.concat(e,'"'):e):e}},379:e=>{var r=[];function n(e){for(var n=-1,t=0;t<r.length;t++)if(r[t].identifier===e){n=t;break}return n}function t(e,t){for(var a={},i=[],s=0;s<e.length;s++){var c=e[s],u=t.base?c[0]+t.base:c[0],d=a[u]||0,l="".concat(u," ").concat(d);a[u]=d+1;var p=n(l),f={css:c[1],media:c[2],sourceMap:c[3],supports:c[4],layer:c[5]};if(-1!==p)r[p].references++,r[p].updater(f);else{var h=o(f,t);t.byIndex=s,r.splice(s,0,{identifier:l,updater:h,references:1})}i.push(l)}return i}function o(e,r){var n=r.domAPI(r);return n.update(e),function(r){if(r){if(r.css===e.css&&r.media===e.media&&r.sourceMap===e.sourceMap&&r.supports===e.supports&&r.layer===e.layer)return;n.update(e=r)}else n.remove()}}e.exports=function(e,o){var a=t(e=e||[],o=o||{});return function(e){e=e||[];for(var i=0;i<a.length;i++){var s=n(a[i]);r[s].references--}for(var c=t(e,o),u=0;u<a.length;u++){var d=n(a[u]);0===r[d].references&&(r[d].updater(),r.splice(d,1))}a=c}}},569:e=>{var r={};e.exports=function(e,n){var t=function(e){if(void 0===r[e]){var n=document.querySelector(e);if(window.HTMLIFrameElement&&n instanceof window.HTMLIFrameElement)try{n=n.contentDocument.head}catch(e){n=null}r[e]=n}return r[e]}(e);if(!t)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");t.appendChild(n)}},216:e=>{e.exports=function(e){var r=document.createElement("style");return e.setAttributes(r,e.attributes),e.insert(r,e.options),r}},565:(e,r,n)=>{e.exports=function(e){var r=n.nc;r&&e.setAttribute("nonce",r)}},795:e=>{e.exports=function(e){var r=e.insertStyleElement(e);return{update:function(n){!function(e,r,n){var t="";n.supports&&(t+="@supports (".concat(n.supports,") {")),n.media&&(t+="@media ".concat(n.media," {"));var o=void 0!==n.layer;o&&(t+="@layer".concat(n.layer.length>0?" ".concat(n.layer):""," {")),t+=n.css,o&&(t+="}"),n.media&&(t+="}"),n.supports&&(t+="}");var a=n.sourceMap;a&&"undefined"!=typeof btoa&&(t+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(a))))," */")),r.styleTagTransform(t,e,r.options)}(r,e,n)},remove:function(){!function(e){if(null===e.parentNode)return!1;e.parentNode.removeChild(e)}(r)}}}},589:e=>{e.exports=function(e,r){if(r.styleSheet)r.styleSheet.cssText=e;else{for(;r.firstChild;)r.removeChild(r.firstChild);r.appendChild(document.createTextNode(e))}}},899:(e,r,n)=>{e.exports=n.p+"d1145494acca5d2306ae.svg"},594:(e,r,n)=>{e.exports=n.p+"4e682937110acdcffd82.js"}},r={};function n(t){var o=r[t];if(void 0!==o)return o.exports;var a=r[t]={id:t,exports:{}};return e[t](a,a.exports,n),a.exports}n.m=e,n.n=e=>{var r=e&&e.__esModule?()=>e.default:()=>e;return n.d(r,{a:r}),r},n.d=(e,r)=>{for(var t in r)n.o(r,t)&&!n.o(e,t)&&Object.defineProperty(e,t,{enumerable:!0,get:r[t]})},n.g=function(){if("object"==typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"==typeof window)return window}}(),n.o=(e,r)=>Object.prototype.hasOwnProperty.call(e,r),(()=>{var e;n.g.importScripts&&(e=n.g.location+"");var r=n.g.document;if(!e&&r&&(r.currentScript&&(e=r.currentScript.src),!e)){var t=r.getElementsByTagName("script");t.length&&(e=t[t.length-1].src)}if(!e)throw new Error("Automatic publicPath is not supported in this browser");e=e.replace(/#.*$/,"").replace(/\?.*$/,"").replace(/\/[^\/]+$/,"/"),n.p=e})(),n.b=document.baseURI||self.location.href,(()=>{var e=n(91),r=n.n(e),t=new URL(n(899),n.b),o=new URL(n(594),n.b);r()(t),r()(o);var a=n(379),i=n.n(a),s=n(795),c=n.n(s),u=n(569),d=n.n(u),l=n(565),p=n.n(l),f=n(216),h=n.n(f),m=n(589),v=n.n(m),g=n(426),y={};y.styleTagTransform=v(),y.setAttributes=p(),y.insert=d().bind(null,"head"),y.domAPI=c(),y.insertStyleElement=h(),i()(g.Z,y),g.Z&&g.Z.locals&&g.Z.locals;const b=WZoom.create("img");window.addEventListener("resize",(()=>{b.prepare()})),document.addEventListener("DOMContentLoaded",(function(){WZoom.create("#myContent",{maxScale:2})}));var x=document.querySelector("#myContent");x.onclick=function(){setTimeout((function(){var e=x.getBoundingClientRect().width/x.offsetWidth;e>.5&&(x.style.cursor="grab"),e<.5&&(x.style.cursor="zoom-in")}),600)}})()})();