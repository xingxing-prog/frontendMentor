(()=>{"use strict";var e={426:(e,n,r)=>{r.d(n,{Z:()=>v});var t=r(81),a=r.n(t),o=r(645),i=r.n(o),c=r(667),s=r.n(c),l=new URL(r(338),r.b),p=new URL(r(876),r.b),d=new URL(r(435),r.b),u=new URL(r(929),r.b),f=i()(a()),m=s()(l),h=s()(p),b=s()(d),g=s()(u);f.push([e.id,'\r\n@font-face{\r\n    font-family: "Ubuntu";\r\n    src:\r\n        url('+m+"),\r\n        url("+h+');\r\n    font-weight:700;\r\n    font-style:normal;\r\n}\r\n\r\n@font-face{\r\n    font-family: "Ubuntu";\r\n    src:\r\n        url('+h+');\r\n    font-weight:500;\r\n    font-style:normal;\r\n}\r\n\r\n@font-face{\r\n    font-family: "Ubuntu";\r\n    src:url('+b+');\r\n    font-weight:400;\r\n    font-style:normal; \r\n}\r\n\r\nhtml, body{\r\n    height:100%;\r\n}\r\n\r\nbody{\r\n    background-color: #fff;\r\n    padding:2rem;\r\n    display:flex;\r\n    align-items:center;\r\n    justify-content:center;\r\n    -webkit-align-items:center;\r\n    font-family:"Ubuntu";\r\n    font-weight:600px;\r\n    background-color:hsl(217, 100%, 97%);\r\n    \r\n    \r\n}\r\n\r\n*{\r\n    padding:0;\r\n    margin:0;\r\n}\r\n\r\n.main{\r\n    display:flex;\r\n    gap:2rem;\r\n    align-items:center;\r\n    justify-content:center;\r\n    background-color:#fff;\r\n    padding:0.5rem;\r\n    height:auto;\r\n    min-height:568px;\r\n    max-height:100vh;\r\n       \r\n}\r\n\r\n.sidebar{\r\n    background-image:url('+g+');\r\n    background-repeat:no-repeat;\r\n    color:white;\r\n    width:274px;\r\n    height:568px;\r\n    padding:0.5rem;\r\n    background-position:center;\r\n\r\n}\r\n\r\n.item{\r\n\r\n    padding:30px;\r\n    display:flex;\r\n    gap:1rem;\r\n\r\n}\r\n\r\n.number{\r\n    border-radius:50%;\r\n    width: 10px;\r\n    line-height:10px;\r\n    border: 2px solid #fff;\r\n    text-align:center;\r\n    padding:10px;\r\n    \r\n \r\n    \r\n}\r\n\r\n.step{\r\n    text-transform: uppercase;\r\n    font-size:14px;\r\n    opacity:0.6;\r\n    font-weight:400;\r\n}\r\n\r\n.content{\r\n    text-transform: uppercase;\r\n    font-size:15px;\r\n}\r\n\r\n/* to create toggle switch*/\r\n\r\n.toggleSwitch{\r\n    display:flex;\r\n    align-items:center;\r\n    gap:0.5rem;\r\n    text-transform: capitalize;\r\n    margin-top:1.5rem;\r\n}\r\n\r\n.inputCheck{\r\n    height:0;\r\n    width:0;\r\n    visibility: hidden;\r\n}\r\n\r\n.labelInput{\r\n    cursor:pointer;\r\n    text-indent:-9999px;\r\n    width:48px;\r\n    height:24px;\r\n    background:hsl(213, 96%, 18%);\r\n    display:block;\r\n    border-radius:24px;\r\n    position:relative;\r\n\r\n}\r\n\r\n.left{\r\n    color:hsl(231, 11%, 63%);\r\n}\r\n\r\n.labelInput::after{\r\n    content:"";\r\n    position:absolute;\r\n    top:3px;\r\n    left:4px;\r\n    width:18px;\r\n    height:18px;\r\n    background:#fff;\r\n    border-radius:18px;\r\n    transition:0.3s;\r\n}\r\n\r\n.inputCheck:checked + .labelInput{\r\n    background:hsl(213, 96%, 18%);\r\n}\r\n\r\n.inputCheck:checked + .labelInput::after{\r\n    left:calc(100% - 4px);\r\n    transform: translateX(-100%);\r\n}\r\n\r\n.labelInput:active::after{\r\n    width:130px;\r\n}\r\n\r\n\r\n\r\n/* to create toggle switch*/\r\n\r\n/*personal file*/\r\n.personal{\r\n    font-family:"Ubuntu";\r\n    font-size:36px;\r\n    font-weight:bold;\r\n}\r\n\r\n\r\n/*personal file*/',""]);const v=f},645:e=>{e.exports=function(e){var n=[];return n.toString=function(){return this.map((function(n){var r="",t=void 0!==n[5];return n[4]&&(r+="@supports (".concat(n[4],") {")),n[2]&&(r+="@media ".concat(n[2]," {")),t&&(r+="@layer".concat(n[5].length>0?" ".concat(n[5]):""," {")),r+=e(n),t&&(r+="}"),n[2]&&(r+="}"),n[4]&&(r+="}"),r})).join("")},n.i=function(e,r,t,a,o){"string"==typeof e&&(e=[[null,e,void 0]]);var i={};if(t)for(var c=0;c<this.length;c++){var s=this[c][0];null!=s&&(i[s]=!0)}for(var l=0;l<e.length;l++){var p=[].concat(e[l]);t&&i[p[0]]||(void 0!==o&&(void 0===p[5]||(p[1]="@layer".concat(p[5].length>0?" ".concat(p[5]):""," {").concat(p[1],"}")),p[5]=o),r&&(p[2]?(p[1]="@media ".concat(p[2]," {").concat(p[1],"}"),p[2]=r):p[2]=r),a&&(p[4]?(p[1]="@supports (".concat(p[4],") {").concat(p[1],"}"),p[4]=a):p[4]="".concat(a)),n.push(p))}},n}},667:e=>{e.exports=function(e,n){return n||(n={}),e?(e=String(e.__esModule?e.default:e),/^['"].*['"]$/.test(e)&&(e=e.slice(1,-1)),n.hash&&(e+=n.hash),/["'() \t\n]|(%20)/.test(e)||n.needQuotes?'"'.concat(e.replace(/"/g,'\\"').replace(/\n/g,"\\n"),'"'):e):e}},81:e=>{e.exports=function(e){return e[1]}},379:e=>{var n=[];function r(e){for(var r=-1,t=0;t<n.length;t++)if(n[t].identifier===e){r=t;break}return r}function t(e,t){for(var o={},i=[],c=0;c<e.length;c++){var s=e[c],l=t.base?s[0]+t.base:s[0],p=o[l]||0,d="".concat(l," ").concat(p);o[l]=p+1;var u=r(d),f={css:s[1],media:s[2],sourceMap:s[3],supports:s[4],layer:s[5]};if(-1!==u)n[u].references++,n[u].updater(f);else{var m=a(f,t);t.byIndex=c,n.splice(c,0,{identifier:d,updater:m,references:1})}i.push(d)}return i}function a(e,n){var r=n.domAPI(n);return r.update(e),function(n){if(n){if(n.css===e.css&&n.media===e.media&&n.sourceMap===e.sourceMap&&n.supports===e.supports&&n.layer===e.layer)return;r.update(e=n)}else r.remove()}}e.exports=function(e,a){var o=t(e=e||[],a=a||{});return function(e){e=e||[];for(var i=0;i<o.length;i++){var c=r(o[i]);n[c].references--}for(var s=t(e,a),l=0;l<o.length;l++){var p=r(o[l]);0===n[p].references&&(n[p].updater(),n.splice(p,1))}o=s}}},569:e=>{var n={};e.exports=function(e,r){var t=function(e){if(void 0===n[e]){var r=document.querySelector(e);if(window.HTMLIFrameElement&&r instanceof window.HTMLIFrameElement)try{r=r.contentDocument.head}catch(e){r=null}n[e]=r}return n[e]}(e);if(!t)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");t.appendChild(r)}},216:e=>{e.exports=function(e){var n=document.createElement("style");return e.setAttributes(n,e.attributes),e.insert(n,e.options),n}},565:(e,n,r)=>{e.exports=function(e){var n=r.nc;n&&e.setAttribute("nonce",n)}},795:e=>{e.exports=function(e){var n=e.insertStyleElement(e);return{update:function(r){!function(e,n,r){var t="";r.supports&&(t+="@supports (".concat(r.supports,") {")),r.media&&(t+="@media ".concat(r.media," {"));var a=void 0!==r.layer;a&&(t+="@layer".concat(r.layer.length>0?" ".concat(r.layer):""," {")),t+=r.css,a&&(t+="}"),r.media&&(t+="}"),r.supports&&(t+="}");var o=r.sourceMap;o&&"undefined"!=typeof btoa&&(t+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(o))))," */")),n.styleTagTransform(t,e,n.options)}(n,e,r)},remove:function(){!function(e){if(null===e.parentNode)return!1;e.parentNode.removeChild(e)}(n)}}}},589:e=>{e.exports=function(e,n){if(n.styleSheet)n.styleSheet.cssText=e;else{for(;n.firstChild;)n.removeChild(n.firstChild);n.appendChild(document.createTextNode(e))}}},338:(e,n,r)=>{e.exports=r.p+"images/fec2d0f1431a6114a6ce.ttf"},876:(e,n,r)=>{e.exports=r.p+"images/e37c5546eb1a6efc4818.ttf"},435:(e,n,r)=>{e.exports=r.p+"images/1cbb1b79a23478cc89ad.ttf"},929:(e,n,r)=>{e.exports=r.p+"images/6918153f38678372ceb1.svg"}},n={};function r(t){var a=n[t];if(void 0!==a)return a.exports;var o=n[t]={id:t,exports:{}};return e[t](o,o.exports,r),o.exports}r.m=e,r.n=e=>{var n=e&&e.__esModule?()=>e.default:()=>e;return r.d(n,{a:n}),n},r.d=(e,n)=>{for(var t in n)r.o(n,t)&&!r.o(e,t)&&Object.defineProperty(e,t,{enumerable:!0,get:n[t]})},r.g=function(){if("object"==typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"==typeof window)return window}}(),r.o=(e,n)=>Object.prototype.hasOwnProperty.call(e,n),(()=>{var e;r.g.importScripts&&(e=r.g.location+"");var n=r.g.document;if(!e&&n&&(n.currentScript&&(e=n.currentScript.src),!e)){var t=n.getElementsByTagName("script");t.length&&(e=t[t.length-1].src)}if(!e)throw new Error("Automatic publicPath is not supported in this browser");e=e.replace(/#.*$/,"").replace(/\?.*$/,"").replace(/\/[^\/]+$/,"/"),r.p=e})(),r.b=document.baseURI||self.location.href,r.nc=void 0,(()=>{var e=r(379),n=r.n(e),t=r(795),a=r.n(t),o=r(569),i=r.n(o),c=r(565),s=r.n(c),l=r(216),p=r.n(l),d=r(589),u=r.n(d),f=r(426),m={};m.styleTagTransform=u(),m.setAttributes=s(),m.insert=i().bind(null,"head"),m.domAPI=a(),m.insertStyleElement=p(),n()(f.Z,m),f.Z&&f.Z.locals&&f.Z.locals,r(929);r.p,r.p,r.p,r.p,document.querySelector(".mainContent").appendChild(function(){const e=document.createElement("div");return e.appendChild((()=>{const e=document.createElement("div"),n=document.createElement("h3");n.setAttribute("class","personal"),n.textContent="Personal info",e.appendChild(n);const r=document.createElement("div");r.setAttribute("class","sub"),r.textContent="Please provide your name, email address, and phone number.",e.appendChild(r),e.appendChild(document.createElement("br"));const t=document.createElement("form");t.setAttribute("class","formContact"),t.id="contact";const a=document.createElement("label");a.htmlFor="name",a.innerHTML="Name",t.appendChild(a),t.appendChild(document.createElement("br"));const o=document.createElement("input");o.id="name",o.setAttribute("type","text"),o.setAttribute("name","name"),o.placeholder="e.g. Stephen King",o.setAttribute("required",""),t.appendChild(o),t.appendChild(document.createElement("br"));const i=document.createElement("label");i.htmlFor="email",i.innerHTML="Email Address",t.appendChild(i),t.appendChild(document.createElement("br"));const c=document.createElement("input");c.setAttribute("type","email"),c.setAttribute("name","email"),c.placeholder="e.g. stephenking@lorem.com",c.setAttribute("required",""),t.appendChild(c),t.appendChild(document.createElement("br"));const s=document.createElement("label");s.htmlFor="phone",s.innerHTML="Phone Number",t.appendChild(s),t.appendChild(document.createElement("br"));const l=document.createElement("input");l.setAttribute("type","tel"),l.setAttribute("name","phone"),l.placeholder="e.g. +1 234 567 890",l.setAttribute("required",""),t.appendChild(l),t.appendChild(document.createElement("br"));const p=document.createElement("button");return p.setAttribute("class","next"),p.innerHTML="Next Step",p.setAttribute("type","submit"),t.appendChild(p),e.appendChild(t),e})()),e}())})()})();