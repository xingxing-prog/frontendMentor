(()=>{"use strict";var n={426:(n,r,e)=>{e.d(r,{Z:()=>x});var t=e(81),o=e.n(t),i=e(645),a=e.n(i),c=e(667),s=e.n(c),l=new URL(e(338),e.b),p=new URL(e(876),e.b),d=new URL(e(435),e.b),u=new URL(e(929),e.b),m=a()(o()),f=s()(l),h=s()(p),g=s()(d),b=s()(u);m.push([n.id,'\r\n@font-face{\r\n    font-family: "Ubuntu";\r\n    src:\r\n        url('+f+"),\r\n        url("+h+');\r\n    font-weight:700;\r\n    font-style:normal;\r\n}\r\n\r\n@font-face{\r\n    font-family: "Ubuntu";\r\n    src:\r\n        url('+h+');\r\n    font-weight:500;\r\n    font-style:normal;\r\n}\r\n\r\n@font-face{\r\n    font-family: "Ubuntu";\r\n    src:url('+g+');\r\n    font-weight:400;\r\n    font-style:normal; \r\n}\r\n\r\nhtml, body{\r\n    height:100%;\r\n}\r\n\r\nbody{\r\n    background-color: #fff;\r\n    padding:2rem;\r\n    display:flex;\r\n    align-items:center;\r\n    justify-content:center;\r\n    -webkit-align-items:center;\r\n    font-family:"Ubuntu";\r\n    font-weight:600px;\r\n    background-color:hsl(217, 100%, 97%);\r\n    \r\n    \r\n}\r\n\r\n*{\r\n    padding:0;\r\n    margin:0;\r\n}\r\n\r\n.main{\r\n    display:flex;\r\n    gap:6rem;\r\n    align-items:center;\r\n    justify-content:center;\r\n    background-color:#fff;\r\n    padding:0.5rem;\r\n    height:auto;\r\n    min-height:568px;\r\n    max-height:100vh;\r\n    border-radius:0.8rem;\r\n       \r\n}\r\n\r\n.sidebar{\r\n    background-image:url('+b+');\r\n    background-repeat:no-repeat;\r\n    color:white;\r\n    width:274px;\r\n    height:568px;\r\n    padding:0.5rem;\r\n    background-position:center;\r\n\r\n}\r\n\r\n.item{\r\n\r\n    /*padding:20px;*/\r\n    display:flex;\r\n    gap:1rem;\r\n    margin:2.5rem 2rem;\r\n\r\n}\r\n\r\n.number{\r\n    border-radius:50%;\r\n    width: 10px;\r\n    line-height:10px;\r\n    border: 2px solid #fff;\r\n    text-align:center;\r\n    padding:10px;\r\n    \r\n \r\n    \r\n}\r\n\r\n.step{\r\n    text-transform: uppercase;\r\n    font-size:14px;\r\n    opacity:0.6;\r\n    font-weight:400;\r\n}\r\n\r\n.content{\r\n    text-transform: uppercase;\r\n    font-size:15px;\r\n    font-weight:500;\r\n    color:#fff;\r\n}\r\n\r\n/* to create toggle switch*/\r\n\r\n.toggleSwitch{\r\n    display:flex;\r\n    align-items:center;\r\n    gap:0.5rem;\r\n    text-transform: capitalize;\r\n}\r\n\r\n.inputCheck{\r\n    height:0;\r\n    width:0;\r\n    visibility: hidden;\r\n}\r\n\r\n.labelInput{\r\n    cursor:pointer;\r\n    text-indent:-9999px;\r\n    width:48px;\r\n    height:24px;\r\n    background:hsl(213, 96%, 18%);\r\n    display:block;\r\n    border-radius:24px;\r\n    position:relative;\r\n\r\n}\r\n\r\n.left{\r\n    color:hsl(213, 96%, 18%);\r\n    font-weight:500;   \r\n}\r\n\r\n.right{\r\n    color:hsl(231, 11%, 63%);\r\n    font-weight:500;   \r\n}\r\n\r\n.inputCheck:checked ~ .right{\r\n    color:hsl(213, 96%, 18%);\r\n}\r\n\r\n.inputCheck:checked ~ .left{\r\n    color:hsl(231, 11%, 63%);\r\n}\r\n\r\n\r\n.labelInput::after{\r\n    content:"";\r\n    position:absolute;\r\n    top:3px;\r\n    left:4px;\r\n    width:18px;\r\n    height:18px;\r\n    background:#fff;\r\n    border-radius:18px;\r\n    transition:0.3s;\r\n}\r\n\r\n.inputCheck:checked + .labelInput{\r\n    background:hsl(213, 96%, 18%);\r\n\r\n}\r\n\r\n\r\n\r\n.inputCheck:checked + .labelInput::after{\r\n    left:calc(100% - 4px);\r\n    transform: translateX(-100%);\r\n}\r\n\r\n.labelInput:active::after{\r\n    width:130px;\r\n}\r\n\r\n\r\n\r\n/* to create toggle switch*/\r\n\r\n/*personal file*/\r\n.personal{\r\n    font-family:"Ubuntu";\r\n    font-size:36px;\r\n    font-weight:bold;\r\n    margin-bottom:0.8rem;\r\n}\r\n\r\n.sub{\r\n    font-size:16px;\r\n    color:hsl(231, 11%, 63%);\r\n    font-weight:400;\r\n    \r\n}\r\n\r\n.formContact{\r\n    font-family:inherit;\r\n    font-size:16px;\r\n    margin-top:1.6rem;\r\n}\r\n\r\n.label{ \r\n    margin-bottom:1rem;\r\n}\r\n\r\n\r\n.email{\r\n    height:2rem;\r\n    width:26rem;\r\n    border:1px solid hsl(229, 24%, 87%);\r\n    border-radius:0.5rem;\r\n    padding:0.4rem 1rem;\r\n    margin-top:0.5rem;\r\n    color:hsl(213, 96%, 18%);\r\n    font-family:inherit;\r\n    font-weight:700;\r\n    font-size:16px;\r\n   \r\n}\r\n\r\n.email:active{\r\n    outline:1px solid hsl(243, 100%, 62%);\r\n    font-weight:700;\r\n    font-size:16px;\r\n    color:hsl(213, 96%, 18%);\r\n}\r\n\r\n.email:hover{\r\n    cursor:pointer;\r\n}\r\n\r\n.info{\r\n    margin-right:6rem;\r\n}\r\n\r\n.nameContent{\r\n    margin-bottom:1.5rem;\r\n}\r\n\r\n.next{\r\n    margin-top:4rem;\r\n    float:right;\r\n    color:#fff;\r\n    font-family:inherit;\r\n    padding:0.8rem 1.2rem;\r\n    background:hsl(213, 96%, 18%);\r\n    font-weight:400;\r\n    font-size:16px;\r\n    border-radius:0.5rem;\r\n}\r\n\r\n.next:hover{\r\n    cursor:pointer;\r\n}\r\n\r\n/*personal file*/\r\n\r\n\r\n/*selectPlan */\r\n.h3{\r\n    font-family:"Ubuntu";\r\n    font-size:36px;\r\n    font-weight:bold;\r\n    margin-bottom:0.8rem;\r\n}\r\n\r\n.plans{\r\n    display:flex;\r\n    gap:1rem;\r\n    margin-top:3rem;\r\n}\r\n\r\n.plans:hover{\r\n    cursor:pointer;\r\n}\r\n\r\n.plan{\r\n    border:1px solid hsl(229, 24%, 87%);\r\n    width:6.8rem;\r\n    padding:1rem;\r\n    border-radius:0.5rem;\r\n}\r\n\r\n.planName{\r\n    font-family:inherit;\r\n    font-size:16px;\r\n    font-weight:700;\r\n    color:hsl(213, 96%, 18%);\r\n    margin-top:2.5rem;\r\n}\r\n\r\n.price{\r\n    color:hsl(231, 11%, 63%);\r\n    margin-top:0.5rem;\r\n}\r\n\r\n.toggle{\r\n    padding:1rem;\r\n    margin:2rem auto;\r\n    background-color:hsl(231, 100%, 99%);\r\n    display:flex;\r\n    align-items:center;\r\n    justify-content:center;\r\n\r\n}\r\n\r\n.buttons{\r\n    display:flex;\r\n    justify-content:space-between;\r\n    margin-top:7rem;\r\n}\r\n\r\n.goBack{\r\n    font-family:inherit;\r\n    padding:0.8rem 1.2rem;\r\n    font-weight:400;\r\n    font-size:16px;\r\n}\r\n\r\n.goBack{\r\n    cursor:pointer;\r\n    font-weight:500;\r\n    color: hsl(213, 96%, 18%);\r\n}\r\n\r\n.nextButton{\r\n   \r\n    color:#fff;\r\n    font-family:inherit;\r\n    padding:0.8rem 1.2rem;\r\n    background:hsl(213, 96%, 18%);\r\n    font-weight:400;\r\n    font-size:16px;\r\n    border-radius:0.5rem;\r\n}\r\n\r\n.nextButton:hover{\r\n    cursor:pointer;\r\n}\r\n\r\n\r\n/*selectPlan */\r\n\r\n/*add-ons*/\r\n.type{\r\n    display:flex;\r\n    align-items:center;\r\n    justify-content:space-between;\r\n    flex-wrap:wrap;\r\n    border:1px solid hsl(229, 24%, 87%);\r\n    gap:1rem;\r\n    padding:1rem;\r\n    border-radius:1rem;\r\n    width:25rem;\r\n}\r\n\r\n.formPickOn{\r\n    margin-top:3rem;\r\n    display:flex;\r\n    flex-direction:column;\r\n    gap:1rem;\r\n    \r\n}\r\n\r\n.onlineContent { \r\n\r\n    font-family:inherit;\r\n    font-size:16px;\r\n    font-weight:700;\r\n    color:hsl(213, 96%, 18%);\r\n    padding:4px;\r\n\r\n}\r\n\r\n.price{\r\n    float:right;\r\n}\r\n\r\n/*add-ons*/',""]);const x=m},645:n=>{n.exports=function(n){var r=[];return r.toString=function(){return this.map((function(r){var e="",t=void 0!==r[5];return r[4]&&(e+="@supports (".concat(r[4],") {")),r[2]&&(e+="@media ".concat(r[2]," {")),t&&(e+="@layer".concat(r[5].length>0?" ".concat(r[5]):""," {")),e+=n(r),t&&(e+="}"),r[2]&&(e+="}"),r[4]&&(e+="}"),e})).join("")},r.i=function(n,e,t,o,i){"string"==typeof n&&(n=[[null,n,void 0]]);var a={};if(t)for(var c=0;c<this.length;c++){var s=this[c][0];null!=s&&(a[s]=!0)}for(var l=0;l<n.length;l++){var p=[].concat(n[l]);t&&a[p[0]]||(void 0!==i&&(void 0===p[5]||(p[1]="@layer".concat(p[5].length>0?" ".concat(p[5]):""," {").concat(p[1],"}")),p[5]=i),e&&(p[2]?(p[1]="@media ".concat(p[2]," {").concat(p[1],"}"),p[2]=e):p[2]=e),o&&(p[4]?(p[1]="@supports (".concat(p[4],") {").concat(p[1],"}"),p[4]=o):p[4]="".concat(o)),r.push(p))}},r}},667:n=>{n.exports=function(n,r){return r||(r={}),n?(n=String(n.__esModule?n.default:n),/^['"].*['"]$/.test(n)&&(n=n.slice(1,-1)),r.hash&&(n+=r.hash),/["'() \t\n]|(%20)/.test(n)||r.needQuotes?'"'.concat(n.replace(/"/g,'\\"').replace(/\n/g,"\\n"),'"'):n):n}},81:n=>{n.exports=function(n){return n[1]}},379:n=>{var r=[];function e(n){for(var e=-1,t=0;t<r.length;t++)if(r[t].identifier===n){e=t;break}return e}function t(n,t){for(var i={},a=[],c=0;c<n.length;c++){var s=n[c],l=t.base?s[0]+t.base:s[0],p=i[l]||0,d="".concat(l," ").concat(p);i[l]=p+1;var u=e(d),m={css:s[1],media:s[2],sourceMap:s[3],supports:s[4],layer:s[5]};if(-1!==u)r[u].references++,r[u].updater(m);else{var f=o(m,t);t.byIndex=c,r.splice(c,0,{identifier:d,updater:f,references:1})}a.push(d)}return a}function o(n,r){var e=r.domAPI(r);return e.update(n),function(r){if(r){if(r.css===n.css&&r.media===n.media&&r.sourceMap===n.sourceMap&&r.supports===n.supports&&r.layer===n.layer)return;e.update(n=r)}else e.remove()}}n.exports=function(n,o){var i=t(n=n||[],o=o||{});return function(n){n=n||[];for(var a=0;a<i.length;a++){var c=e(i[a]);r[c].references--}for(var s=t(n,o),l=0;l<i.length;l++){var p=e(i[l]);0===r[p].references&&(r[p].updater(),r.splice(p,1))}i=s}}},569:n=>{var r={};n.exports=function(n,e){var t=function(n){if(void 0===r[n]){var e=document.querySelector(n);if(window.HTMLIFrameElement&&e instanceof window.HTMLIFrameElement)try{e=e.contentDocument.head}catch(n){e=null}r[n]=e}return r[n]}(n);if(!t)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");t.appendChild(e)}},216:n=>{n.exports=function(n){var r=document.createElement("style");return n.setAttributes(r,n.attributes),n.insert(r,n.options),r}},565:(n,r,e)=>{n.exports=function(n){var r=e.nc;r&&n.setAttribute("nonce",r)}},795:n=>{n.exports=function(n){var r=n.insertStyleElement(n);return{update:function(e){!function(n,r,e){var t="";e.supports&&(t+="@supports (".concat(e.supports,") {")),e.media&&(t+="@media ".concat(e.media," {"));var o=void 0!==e.layer;o&&(t+="@layer".concat(e.layer.length>0?" ".concat(e.layer):""," {")),t+=e.css,o&&(t+="}"),e.media&&(t+="}"),e.supports&&(t+="}");var i=e.sourceMap;i&&"undefined"!=typeof btoa&&(t+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(i))))," */")),r.styleTagTransform(t,n,r.options)}(r,n,e)},remove:function(){!function(n){if(null===n.parentNode)return!1;n.parentNode.removeChild(n)}(r)}}}},589:n=>{n.exports=function(n,r){if(r.styleSheet)r.styleSheet.cssText=n;else{for(;r.firstChild;)r.removeChild(r.firstChild);r.appendChild(document.createTextNode(n))}}},338:(n,r,e)=>{n.exports=e.p+"images/fec2d0f1431a6114a6ce.ttf"},876:(n,r,e)=>{n.exports=e.p+"images/e37c5546eb1a6efc4818.ttf"},435:(n,r,e)=>{n.exports=e.p+"images/1cbb1b79a23478cc89ad.ttf"},929:(n,r,e)=>{n.exports=e.p+"images/6918153f38678372ceb1.svg"}},r={};function e(t){var o=r[t];if(void 0!==o)return o.exports;var i=r[t]={id:t,exports:{}};return n[t](i,i.exports,e),i.exports}e.m=n,e.n=n=>{var r=n&&n.__esModule?()=>n.default:()=>n;return e.d(r,{a:r}),r},e.d=(n,r)=>{for(var t in r)e.o(r,t)&&!e.o(n,t)&&Object.defineProperty(n,t,{enumerable:!0,get:r[t]})},e.g=function(){if("object"==typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(n){if("object"==typeof window)return window}}(),e.o=(n,r)=>Object.prototype.hasOwnProperty.call(n,r),(()=>{var n;e.g.importScripts&&(n=e.g.location+"");var r=e.g.document;if(!n&&r&&(r.currentScript&&(n=r.currentScript.src),!n)){var t=r.getElementsByTagName("script");t.length&&(n=t[t.length-1].src)}if(!n)throw new Error("Automatic publicPath is not supported in this browser");n=n.replace(/#.*$/,"").replace(/\?.*$/,"").replace(/\/[^\/]+$/,"/"),e.p=n})(),e.b=document.baseURI||self.location.href,e.nc=void 0,(()=>{var n=e(379),r=e.n(n),t=e(795),o=e.n(t),i=e(569),a=e.n(i),c=e(565),s=e.n(c),l=e(216),p=e.n(l),d=e(589),u=e.n(d),m=e(426),f={};f.styleTagTransform=u(),f.setAttributes=s(),f.insert=a().bind(null,"head"),f.domAPI=o(),f.insertStyleElement=p(),r()(m.Z,f),m.Z&&m.Z.locals&&m.Z.locals,e(929),e.p,e.p,e.p;e.p,document.querySelector(".mainContent").appendChild(function(){const n=document.createElement("div");return n.appendChild((()=>{const n=document.createElement("div");n.setAttribute("class","info");const r=document.createElement("h3");r.setAttribute("class","h3"),r.innerHTML="Pick add-ons",n.appendChild(r);const e=document.createElement("div");e.setAttribute("class","sub"),e.textContent="Add-ons help enhance your gaming experience.",n.appendChild(e);const t=document.createElement("form");t.setAttribute("class","formPickOn"),t.id="pickOns";const o=document.createElement("div");o.setAttribute("class","type");const i=document.createElement("input");i.type="checkbox",i.setAttribute("class","checkbox"),o.appendChild(i);const a=document.createElement("div"),c=document.createElement("p");c.setAttribute("class","onlineContent"),c.textContent="Online service",a.appendChild(c);const s=document.createElement("span");s.setAttribute("class","subSmall"),s.textContent="Access to multiplayer games",a.appendChild(s),o.appendChild(a);const l=document.createElement("p");l.innerHTML="$1/mo",l.setAttribute("class","price"),o.appendChild(l),t.appendChild(o);const p=document.createElement("div");p.setAttribute("class","type");const d=document.createElement("input");d.type="checkbox",d.setAttribute("class","checkbox"),p.appendChild(d);const u=document.createElement("div"),m=document.createElement("p");m.setAttribute("class","onlineContent"),m.textContent="Larger storage",u.appendChild(m);const f=document.createElement("p");f.setAttribute("class","subSmall"),f.textContent="Extra 1TB of cloud save",u.appendChild(f),p.appendChild(u);const h=document.createElement("p");h.innerHTML="$2/mo",h.setAttribute("class","price"),p.appendChild(h),t.appendChild(p);const g=document.createElement("div");g.setAttribute("class","type");const b=document.createElement("input");b.type="checkbox",b.setAttribute("class","checkbox"),g.appendChild(b);const x=document.createElement("div"),y=document.createElement("p");y.setAttribute("class","onlineContent"),y.textContent="Customizable profile",x.appendChild(y);const v=document.createElement("p");v.setAttribute("class","subSmall"),v.textContent="Custom theme on your profile",x.appendChild(v),g.appendChild(x);const w=document.createElement("p");w.innerHTML="$2/mo",w.setAttribute("class","price"),g.appendChild(w),t.appendChild(g),n.appendChild(t);const C=document.createElement("div");C.setAttribute("class","buttons");const k=document.createElement("div");k.innerHTML="Go Back",k.setAttribute("class","goBack"),C.appendChild(k);const E=document.createElement("button");return E.setAttribute("class","nextButton"),E.innerHTML="Next Step",E.setAttribute("type","submit"),C.appendChild(E),n.appendChild(C),n})()),n}())})()})();