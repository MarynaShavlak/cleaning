!function(){function e(e){return e&&e.__esModule?e.default:e}function t(e,t,n,o){Object.defineProperty(e,t,{get:n,set:o,enumerable:!0,configurable:!0})}var n="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},o={},r={},i=n.parcelRequired7c6;null==i&&((i=function(e){if(e in o)return o[e].exports;if(e in r){var t=r[e];delete r[e];var n={id:e,exports:{}};return o[e]=n,t.call(n.exports,n,n.exports),n.exports}var i=new Error("Cannot find module '"+e+"'");throw i.code="MODULE_NOT_FOUND",i}).register=function(e,t){r[e]=t},n.parcelRequired7c6=i),i.register("6bPr4",(function(n,o){t(n.exports,"toggleIconActiveStyle",(function(){return a})),t(n.exports,"appendElement",(function(){return f}));var r=i("8nrFW"),l=["/","/index.html","/office.html","/success-order.html","/after-repair.html","/calc-order.html","/services.html","/contacts.html","/faq.html"];function c(t){var n=document.querySelectorAll(".dynamic-link");e(r)(n).forEach((function(e){return e.href=t}))}function d(e){var t=document.querySelector(e);t&&t.classList.add("nav__link--current")}function u(){document.querySelector("main").classList.add("section--dark-background")}function a(e){e.classList.toggle("isActive")}function s(e,t){document.querySelectorAll(e).forEach((function(e){return e.style.flexBasis=t}))}function f(e,t){e.appendChild(t)}document.addEventListener("DOMContentLoaded",(function(){var e,t=window.location.pathname;l.includes(t)||"/error.html"===t||l.includes("/error.html")||(window.location.href="/error.html"),"/"===t||"/index.html"===t?(d(".nav__link"),c("index.html#order-cleaning-block")):"/office.html"===t?(d(".nav__list .nav__item:nth-child(2) .nav__link"),c("office.html#office-calc-block"),s(".buildings__element","calc(100% / 3)"),document.querySelectorAll(".element--office-page").forEach((function(e){return e.classList.remove("isHidden")})),document.querySelector(".element--repair-page").classList.add("isHidden")):"/after-repair.html"===t?(s(".buildings__element","calc(100% / 2)"),e=".add-services-list__item:nth-child(n+3)",document.querySelectorAll(e).forEach((function(e){return e.classList.add("isHidden")})),document.querySelectorAll(".element--office-page").forEach((function(e){return e.classList.add("isHidden")})),document.querySelector(".element--repair-page").classList.remove("isHidden"),c("after-repair.html#office-calc-block")):"/calc-order.html"===t?function(e){document.querySelectorAll(e).forEach((function(e){return e.classList.add("block--white")}))}(".block"):"/contacts.html"===t?(document.querySelector(".connection").classList.remove("no-padding-top"),document.querySelector(".connection--second-block").classList.add("block-with-image"),u()):"/success-order.html"!==t&&"/error.html"!==t||u()}))})),i.register("8nrFW",(function(e,t){"use strict";Object.defineProperty(e.exports,"__esModule",{value:!0}),e.exports.default=function(e){return n.default(e)||o.default(e)||l.default(e)||r.default()};var n=c(i("kMC0W")),o=c(i("7AJDX")),r=c(i("8CtQK")),l=c(i("auk6i"));function c(e){return e&&e.__esModule?e:{default:e}}})),i.register("kMC0W",(function(e,t){"use strict";Object.defineProperty(e.exports,"__esModule",{value:!0}),e.exports.default=function(e){if(Array.isArray(e))return o.default(e)};var n,o=(n=i("8NIkP"))&&n.__esModule?n:{default:n}})),i.register("8NIkP",(function(e,t){"use strict";Object.defineProperty(e.exports,"__esModule",{value:!0}),e.exports.default=function(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,o=new Array(t);n<t;n++)o[n]=e[n];return o}})),i.register("7AJDX",(function(e,t){"use strict";Object.defineProperty(e.exports,"__esModule",{value:!0}),e.exports.default=function(e){if("undefined"!=typeof Symbol&&null!=e[Symbol.iterator]||null!=e["@@iterator"])return Array.from(e)}})),i.register("8CtQK",(function(e,t){"use strict";Object.defineProperty(e.exports,"__esModule",{value:!0}),e.exports.default=function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}})),i.register("auk6i",(function(e,t){"use strict";Object.defineProperty(e.exports,"__esModule",{value:!0}),e.exports.default=function(e,t){if(!e)return;if("string"==typeof e)return o.default(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);"Object"===n&&e.constructor&&(n=e.constructor.name);if("Map"===n||"Set"===n)return Array.from(n);if("Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return o.default(e,t)};var n,o=(n=i("8NIkP"))&&n.__esModule?n:{default:n}})),i.register("lEcfz",(function(e,t){var n,o,r,l,c=i("gnsaF");n=document.querySelector(".aside-menu"),o=document.querySelector(".open-menu-btn"),r=document.querySelector(".close-menu-btn"),l=function(){var e="true"===o.getAttribute("aria-expanded")||!1;o.setAttribute("aria-expanded",!e),n.classList.toggle("is-open"),(e?c.enableBodyScroll:c.disableBodyScroll)(document.body)},o.addEventListener("click",l),r.addEventListener("click",l),window.matchMedia("(min-width: 768px)").addEventListener("change",(function(e){e.matches&&(n.classList.remove("is-open"),o.setAttribute("aria-expanded",!1),(0,c.enableBodyScroll)(document.body))}))})),i.register("gnsaF",(function(e,n){t(e.exports,"disableBodyScroll",(function(){return y})),t(e.exports,"enableBodyScroll",(function(){return h}));var o=!1;if("undefined"!=typeof window){var r={get passive(){o=!0}};window.addEventListener("testPassive",null,r),window.removeEventListener("testPassive",null,r)}var i="undefined"!=typeof window&&window.navigator&&window.navigator.platform&&(/iP(ad|hone|od)/.test(window.navigator.platform)||"MacIntel"===window.navigator.platform&&window.navigator.maxTouchPoints>1),l=[],c=!1,d=-1,u=void 0,a=void 0,s=void 0,f=function(e){return l.some((function(t){return!(!t.options.allowTouchMove||!t.options.allowTouchMove(e))}))},m=function(e){var t=e||window.event;return!!f(t.target)||(t.touches.length>1||(t.preventDefault&&t.preventDefault(),!1))},p=function(){void 0!==s&&(document.body.style.paddingRight=s,s=void 0),void 0!==u&&(document.body.style.overflow=u,u=void 0)},v=function(){if(void 0!==a){var e=-parseInt(document.body.style.top,10),t=-parseInt(document.body.style.left,10);document.body.style.position=a.position,document.body.style.top=a.top,document.body.style.left=a.left,window.scrollTo(t,e),a=void 0}},y=function(e,t){if(e){if(!l.some((function(t){return t.targetElement===e}))){var n={targetElement:e,options:t||{}};l=[].concat(function(e){if(Array.isArray(e)){for(var t=0,n=Array(e.length);t<e.length;t++)n[t]=e[t];return n}return Array.from(e)}(l),[n]),i?window.requestAnimationFrame((function(){if(void 0===a){a={position:document.body.style.position,top:document.body.style.top,left:document.body.style.left};var e=window,t=e.scrollY,n=e.scrollX,o=e.innerHeight;document.body.style.position="fixed",document.body.style.top=-t,document.body.style.left=-n,setTimeout((function(){return window.requestAnimationFrame((function(){var e=o-window.innerHeight;e&&t>=o&&(document.body.style.top=-(t+e))}))}),300)}})):function(e){if(void 0===s){var t=!!e&&!0===e.reserveScrollBarGap,n=window.innerWidth-document.documentElement.clientWidth;if(t&&n>0){var o=parseInt(window.getComputedStyle(document.body).getPropertyValue("padding-right"),10);s=document.body.style.paddingRight,document.body.style.paddingRight=o+n+"px"}}void 0===u&&(u=document.body.style.overflow,document.body.style.overflow="hidden")}(t),i&&(e.ontouchstart=function(e){1===e.targetTouches.length&&(d=e.targetTouches[0].clientY)},e.ontouchmove=function(t){1===t.targetTouches.length&&function(e,t){var n=e.targetTouches[0].clientY-d;!f(e.target)&&(t&&0===t.scrollTop&&n>0||function(e){return!!e&&e.scrollHeight-e.scrollTop<=e.clientHeight}(t)&&n<0?m(e):e.stopPropagation())}(t,e)},c||(document.addEventListener("touchmove",m,o?{passive:!1}:void 0),c=!0))}}else console.error("disableBodyScroll unsuccessful - targetElement must be provided when calling disableBodyScroll on IOS devices.")},h=function(e){e?(l=l.filter((function(t){return t.targetElement!==e})),i&&(e.ontouchstart=null,e.ontouchmove=null,c&&0===l.length&&(document.removeEventListener("touchmove",m,o?{passive:!1}:void 0),c=!1)),i?v():p()):console.error("enableBodyScroll unsuccessful - targetElement must be provided when calling enableBodyScroll on IOS devices.")}}))}();
//# sourceMappingURL=contacts.af1090df.js.map
