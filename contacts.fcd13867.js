function e(e,t,n,o){Object.defineProperty(e,t,{get:n,set:o,enumerable:!0,configurable:!0})}var t="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},n={},o={},i=t.parcelRequired7c6;null==i&&((i=function(e){if(e in n)return n[e].exports;if(e in o){var t=o[e];delete o[e];var i={id:e,exports:{}};return n[e]=i,t.call(i.exports,i,i.exports),i.exports}var r=new Error("Cannot find module '"+e+"'");throw r.code="MODULE_NOT_FOUND",r}).register=function(e,t){o[e]=t},t.parcelRequired7c6=i),i.register("cKJBV",(function(t,n){e(t.exports,"toggleIconActiveStyle",(function(){return d})),e(t.exports,"appendElement",(function(){return s}));var o=i("1PyR0");function r(e){[...document.querySelectorAll(".dynamic-link")].forEach((t=>t.href=e))}function c(e){const t=document.querySelector(e);t&&t.classList.add("nav__link--current")}function l(){document.querySelector("main").classList.add("section--dark-background")}function d(e){e.classList.toggle("isActive")}function a(e,t){document.querySelectorAll(e).forEach((e=>e.style.flexBasis=t))}function s(e,t){e.appendChild(t)}document.addEventListener("DOMContentLoaded",(function(){const e=window.location.pathname;var t;"cleaning/"===e||"cleaning/index.html"===e?(c(".nav__link"),r("index.html#order-cleaning-block")):"cleaning/office.html"===e?(c(".nav__list .nav__item:nth-child(2) .nav__link"),r("office.html#office-calc-block"),a(".buildings__element","calc(100% cleaning/ 3)"),function(){console.log("BuildingsToggleMenu");document.querySelectorAll(".element--office-page").forEach((e=>e.classList.remove("isHidden")));document.querySelector(".element--calculator-page").classList.add("isHidden")}()):"cleaning/after-repair.html"===e?(!function(){const e=document.querySelector(".data-order .data-order__title");document.querySelector(".buildings").style.display="none",e.style.display="none"}(),t=".add-services-list__item:nth-child(n+3)",document.querySelectorAll(t).forEach((e=>e.classList.add("isHidden"))),r("after-repair.html#office-calc-block")):"cleaning/calc-order.html"===e?(a(".buildings__element","calc(100% cleaning/ 2)"),function(){document.querySelectorAll(".element--office-page").forEach((e=>e.classList.add("isHidden")));document.querySelector(".element--calculator-page").classList.remove("isHidden")}(),function(e){document.querySelectorAll(e).forEach((e=>e.classList.add("block--white")))}(".block")):"cleaning/contacts.html"===e?(!function(){document.querySelector(".connection").classList.remove("no-padding-top");document.querySelector(".connection--second-block").classList.add("block-with-image")}(),l()):"cleaning/success-order.html"!==e&&"cleaning/error.html"!==e||(l(),window.addEventListener("beforeunload",(function(){(0,o.resetLocalStorage)("userOrderDataObj")})))}))})),i.register("1PyR0",(function(t,n){function o(e,t){const n=JSON.stringify(t);localStorage.setItem(e,n)}function i(e){const t=localStorage.getItem(e);return JSON.parse(t)}function r(e){localStorage.removeItem(e)}e(t.exports,"storeDataInLocalStorage",(function(){return o})),e(t.exports,"getDataFromStorage",(function(){return i})),e(t.exports,"resetLocalStorage",(function(){return r}))})),i.register("9nuA4",(function(e,t){var n=i("jQ7WT");(()=>{const e=document.querySelector(".aside-menu"),t=document.querySelector(".open-menu-btn"),o=document.querySelector(".close-menu-btn"),i=()=>{const o="true"===t.getAttribute("aria-expanded")||!1;t.setAttribute("aria-expanded",!o),e.classList.toggle("is-open");(o?n.enableBodyScroll:n.disableBodyScroll)(document.body)};t.addEventListener("click",i),o.addEventListener("click",i),window.matchMedia("(min-width: 768px)").addEventListener("change",(o=>{o.matches&&(e.classList.remove("is-open"),t.setAttribute("aria-expanded",!1),(0,n.enableBodyScroll)(document.body))}))})()})),i.register("jQ7WT",(function(t,n){e(t.exports,"disableBodyScroll",(function(){return p})),e(t.exports,"enableBodyScroll",(function(){return v}));var o=!1;if("undefined"!=typeof window){var i={get passive(){o=!0}};window.addEventListener("testPassive",null,i),window.removeEventListener("testPassive",null,i)}var r="undefined"!=typeof window&&window.navigator&&window.navigator.platform&&(/iP(ad|hone|od)/.test(window.navigator.platform)||"MacIntel"===window.navigator.platform&&window.navigator.maxTouchPoints>1),c=[],l=!1,d=-1,a=void 0,s=void 0,u=void 0,f=function(e){return c.some((function(t){return!(!t.options.allowTouchMove||!t.options.allowTouchMove(e))}))},m=function(e){var t=e||window.event;return!!f(t.target)||(t.touches.length>1||(t.preventDefault&&t.preventDefault(),!1))},g=function(){void 0!==u&&(document.body.style.paddingRight=u,u=void 0),void 0!==a&&(document.body.style.overflow=a,a=void 0)},y=function(){if(void 0!==s){var e=-parseInt(document.body.style.top,10),t=-parseInt(document.body.style.left,10);document.body.style.position=s.position,document.body.style.top=s.top,document.body.style.left=s.left,window.scrollTo(t,e),s=void 0}},p=function(e,t){if(e){if(!c.some((function(t){return t.targetElement===e}))){var n={targetElement:e,options:t||{}};c=[].concat(function(e){if(Array.isArray(e)){for(var t=0,n=Array(e.length);t<e.length;t++)n[t]=e[t];return n}return Array.from(e)}(c),[n]),r?window.requestAnimationFrame((function(){if(void 0===s){s={position:document.body.style.position,top:document.body.style.top,left:document.body.style.left};var e=window,t=e.scrollY,n=e.scrollX,o=e.innerHeight;document.body.style.position="fixed",document.body.style.top=-t,document.body.style.left=-n,setTimeout((function(){return window.requestAnimationFrame((function(){var e=o-window.innerHeight;e&&t>=o&&(document.body.style.top=-(t+e))}))}),300)}})):function(e){if(void 0===u){var t=!!e&&!0===e.reserveScrollBarGap,n=window.innerWidth-document.documentElement.clientWidth;if(t&&n>0){var o=parseInt(window.getComputedStyle(document.body).getPropertyValue("padding-right"),10);u=document.body.style.paddingRight,document.body.style.paddingRight=o+n+"px"}}void 0===a&&(a=document.body.style.overflow,document.body.style.overflow="hidden")}(t),r&&(e.ontouchstart=function(e){1===e.targetTouches.length&&(d=e.targetTouches[0].clientY)},e.ontouchmove=function(t){1===t.targetTouches.length&&function(e,t){var n=e.targetTouches[0].clientY-d;!f(e.target)&&(t&&0===t.scrollTop&&n>0||function(e){return!!e&&e.scrollHeight-e.scrollTop<=e.clientHeight}(t)&&n<0?m(e):e.stopPropagation())}(t,e)},l||(document.addEventListener("touchmove",m,o?{passive:!1}:void 0),l=!0))}}else console.error("disableBodyScroll unsuccessful - targetElement must be provided when calling disableBodyScroll on IOS devices.")},v=function(e){e?(c=c.filter((function(t){return t.targetElement!==e})),r&&(e.ontouchstart=null,e.ontouchmove=null,l&&0===c.length&&(document.removeEventListener("touchmove",m,o?{passive:!1}:void 0),l=!1)),r?y():g()):console.error("enableBodyScroll unsuccessful - targetElement must be provided when calling enableBodyScroll on IOS devices.")}}));
//# sourceMappingURL=contacts.fcd13867.js.map
