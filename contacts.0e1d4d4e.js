!function(){function e(e){return e&&e.__esModule?e.default:e}function t(e,t,n,r){Object.defineProperty(e,t,{get:n,set:r,enumerable:!0,configurable:!0})}var n="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},r={},o={},i=n.parcelRequired7c6;null==i&&((i=function(e){if(e in r)return r[e].exports;if(e in o){var t=o[e];delete o[e];var n={id:e,exports:{}};return r[e]=n,t.call(n.exports,n,n.exports),n.exports}var i=new Error("Cannot find module '"+e+"'");throw i.code="MODULE_NOT_FOUND",i}).register=function(e,t){o[e]=t},n.parcelRequired7c6=i),i.register("6bPr4",(function(n,r){t(n.exports,"appendElement",(function(){return v})),t(n.exports,"getClosestIcon",(function(){return g})),t(n.exports,"handleInputBlur",(function(){return h})),t(n.exports,"setShedulerVisibilityOptions",(function(){return q})),t(n.exports,"toggleClosestVisibility",(function(){return S}));var o=i("8nrFW"),c=i("f8kn7"),a=i("aeLMV"),u=i("9gsAr"),l={home:["/cleaning/","/cleaning/index.html"],office:["/cleaning/office.html"],afterRepair:["/cleaning/after-repair.html"],calcOrder:["/calc-order.html"],contacts:["/cleaning/contacts.html"],successOr404:["/cleaning/success-order.html","/cleaning/404.html"]},s={home:function(){f([".nav__link",".nav--aside-menu .nav__link"]),d("index.html#order-cleaning-block")},office:function(){f([".nav__list .nav__item:nth-child(2) .nav__link",".nav--aside-menu  .nav__list .nav__item:nth-child(2) .nav__link"]),d("office.html#office-calc-block"),p("calc(100% / 3)"),document.querySelectorAll(".element--office-page").forEach((function(e){return e.classList.remove("isHidden")})),document.querySelector(".element--calculator-page").classList.add("isHidden")},afterRepair:function(){var e,t;e=document.querySelector(".data-order .data-order__title"),document.querySelector(".buildings").style.display="none",e.style.display="none",t=".add-services-list__item:nth-child(n+3)",document.querySelectorAll(t).forEach((function(e){return e.classList.add("isHidden")})),d("after-repair.html#office-calc-block")},calcOrder:function(){document.querySelector(".footer").classList.add("footer--calc-order"),p("calc(100% / 2)"),document.querySelectorAll(".block").forEach((function(e){return e.classList.add("block--white")})),document.querySelectorAll(".element--office-page").forEach((function(e){return e.classList.add("isHidden")})),document.querySelector(".element--calculator-page").classList.remove("isHidden")},contacts:function(){document.querySelector(".connection").classList.remove("no-padding-top"),document.querySelector(".connection--second-block").classList.add("block-with-image"),m()},successOr404:function(){m(),window.addEventListener("beforeunload",(function(){(0,c.resetLocalStorage)("userOrderDataObj")}))}};function d(t){var n=document.querySelectorAll(".dynamic-link");e(o)(n).forEach((function(e){return e.href=t}))}function f(e){e.forEach((function(e){var t=document.querySelector(e);console.log("currentNavLink: ",t),t&&t.classList.add("nav__link--current")}))}function m(){document.querySelector("main").classList.add("section--dark-background")}function y(e){e.classList.toggle("isActive")}function p(e){document.querySelectorAll(".buildings__element").forEach((function(t){return t.style.flexBasis=e}))}function v(e,t){e.appendChild(t)}function g(e,t){return e.parentElement.previousElementSibling.querySelector(".".concat(t))}function b(e){e.classList.toggle("isHidden")}function h(e,t){e.addEventListener("blur",(function(n){var r=t(n.target.value);e.value=r}))}function q(e,t,n){b(e),b(t),y(n)}function S(e,t,n){var r=e.querySelector(".work-shedule"),o=e.querySelector(".".concat(t));r.classList.contains("isHidden")||(b(r),b(o),y(g(o,n)))}document.addEventListener("DOMContentLoaded",(function(){var e=window.location.pathname,t=document.querySelector("body");(0,u.getThemeTogglerElements)().themeToggler.addEventListener("click",(function(){(0,a.setTheme)(t.classList.contains("active-dark-theme")?a.THEMES.LIGHT:a.THEMES.DARK)})),(0,a.applyTheme)();var n=Object.keys(s).find((function(t){return l[t].includes(e)}));n&&s[n]()}))})),i.register("8nrFW",(function(e,t){"use strict";Object.defineProperty(e.exports,"__esModule",{value:!0}),e.exports.default=function(e){return n.default(e)||r.default(e)||c.default(e)||o.default()};var n=a(i("kMC0W")),r=a(i("7AJDX")),o=a(i("8CtQK")),c=a(i("auk6i"));function a(e){return e&&e.__esModule?e:{default:e}}})),i.register("kMC0W",(function(e,t){"use strict";Object.defineProperty(e.exports,"__esModule",{value:!0}),e.exports.default=function(e){if(Array.isArray(e))return r.default(e)};var n,r=(n=i("8NIkP"))&&n.__esModule?n:{default:n}})),i.register("8NIkP",(function(e,t){"use strict";Object.defineProperty(e.exports,"__esModule",{value:!0}),e.exports.default=function(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}})),i.register("7AJDX",(function(e,t){"use strict";Object.defineProperty(e.exports,"__esModule",{value:!0}),e.exports.default=function(e){if("undefined"!=typeof Symbol&&null!=e[Symbol.iterator]||null!=e["@@iterator"])return Array.from(e)}})),i.register("8CtQK",(function(e,t){"use strict";Object.defineProperty(e.exports,"__esModule",{value:!0}),e.exports.default=function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}})),i.register("auk6i",(function(e,t){"use strict";Object.defineProperty(e.exports,"__esModule",{value:!0}),e.exports.default=function(e,t){if(!e)return;if("string"==typeof e)return r.default(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);"Object"===n&&e.constructor&&(n=e.constructor.name);if("Map"===n||"Set"===n)return Array.from(n);if("Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return r.default(e,t)};var n,r=(n=i("8NIkP"))&&n.__esModule?n:{default:n}})),i.register("f8kn7",(function(e,n){function r(e,t){var n=JSON.stringify(t);localStorage.setItem(e,n)}function o(e){var t=localStorage.getItem(e);return JSON.parse(t)}function i(e){localStorage.removeItem(e)}t(e.exports,"storeDataInLocalStorage",(function(){return r})),t(e.exports,"getDataFromStorage",(function(){return o})),t(e.exports,"resetLocalStorage",(function(){return i}))})),i.register("aeLMV",(function(e,n){t(e.exports,"THEMES",(function(){return c})),t(e.exports,"setTheme",(function(){return u})),t(e.exports,"applyTheme",(function(){return l}));var r=i("9gsAr"),o=i("f8kn7"),c={LIGHT:"light",DARK:"dark"},a=(0,o.getDataFromStorage)("theme")||c.LIGHT;function u(e){a=e,(0,o.storeDataInLocalStorage)("theme",e),l()}function l(){var e=(0,r.getThemeTogglerElements)(),t=e.themeToggler,n=e.themeCircle,o=e.sunRays,i=e.sunIcon,u=e.moonIcon,l=document.querySelector("body");a===c.DARK?(l.classList.add("active-dark-theme"),t.classList.add("theme-toggler-wrap--dark"),t.classList.remove("theme-toggler-wrap--light"),n.classList.add("theme__circle--dark"),n.classList.remove("theme__circle--light"),i.classList.add("circle__sun--hidden"),u.classList.remove("circle__moon--hidden"),o.forEach((function(e){return e.classList.add("circle__ray--hidden")}))):(l.classList.remove("active-dark-theme"),t.classList.remove("theme-toggler-wrap--dark"),t.classList.add("theme-toggler-wrap--light"),n.classList.remove("theme__circle--dark"),n.classList.add("theme__circle--light"),i.classList.remove("circle__sun--hidden"),u.classList.add("circle__moon--hidden"),o.forEach((function(e){return e.classList.remove("circle__ray--hidden")})))}})),i.register("9gsAr",(function(e,n){t(e.exports,"getTimePickerElements",(function(){return o})),t(e.exports,"getClosestDateInput",(function(){return c})),t(e.exports,"getClosestCalendarBlock",(function(){return a})),t(e.exports,"getCalendarElements",(function(){return u})),t(e.exports,"getClosestTimeInput",(function(){return l})),t(e.exports,"getClosestTimePickerBlock",(function(){return s})),t(e.exports,"getThemeTogglerElements",(function(){return d}));var r=i("6bPr4");function o(e){return{clockIcon:(0,r.getClosestIcon)(e,"icon--clock"),sheduleEl:e.parentElement.querySelector(".work-shedule"),hourTablo:e.querySelector(".tablo--hours"),minuteTablo:e.querySelector(".tablo--minutes"),hourPicker:e.querySelector(".time-picker__hours"),minutePicker:e.querySelector(".time-picker__minutes"),confirmTimeBtn:e.querySelector(".time-picker__btn"),timeInput:e.parentElement.previousElementSibling.querySelector('[name="userTime"]')}}function c(e){return e.closest("li").previousElementSibling.querySelector('[name="userDate"]')}function a(e){return e.closest("li").previousElementSibling.querySelector(".shedule-wrap")}function u(e){var t=(0,r.getClosestIcon)(e,"icon--calendar"),n=e.parentElement.previousElementSibling.querySelector('[name="userDate"]');return e.parentElement.previousElementSibling.querySelector(".icon--calendar"),{calendarIcon:t,dateInput:n,sheduleEl:e.parentElement.querySelector(".work-shedule"),calendarBody:e.querySelector(".calendar__body"),calendarHeadMonthAndYear:e.querySelector(".calendar__monthYear"),prevMonthBtn:e.querySelector(".calendar__prevMonth-btn"),nextMonthBtn:e.querySelector(".calendar__nextMonth-btn")}}function l(e){return e.closest("li").nextElementSibling.querySelector('[name="userTime"]')}function s(e){return e.closest("li").nextElementSibling.querySelector(".shedule-wrap")}function d(){return{themeToggler:document.querySelector(".theme-toggler-wrap"),themeCircle:document.querySelector(".theme__circle"),sunRays:document.querySelectorAll(".circle__ray"),sunIcon:document.querySelector(".circle__sun"),moonIcon:document.querySelector(".circle__moon")}}})),i.register("lEcfz",(function(e,t){var n,r,o,c,a=i("gnsaF");n=document.querySelector(".aside-menu"),r=document.querySelector(".open-menu-btn"),o=document.querySelector(".close-menu-btn"),c=function(){var e="true"===r.getAttribute("aria-expanded")||!1;r.setAttribute("aria-expanded",!e),n.classList.toggle("is-open"),(e?a.enableBodyScroll:a.disableBodyScroll)(document.body)},r.addEventListener("click",c),o.addEventListener("click",c),window.matchMedia("(min-width: 768px)").addEventListener("change",(function(e){e.matches&&(n.classList.remove("is-open"),r.setAttribute("aria-expanded",!1),(0,a.enableBodyScroll)(document.body))}))})),i.register("gnsaF",(function(e,n){t(e.exports,"disableBodyScroll",(function(){return v})),t(e.exports,"enableBodyScroll",(function(){return g}));var r=!1;if("undefined"!=typeof window){var o={get passive(){r=!0}};window.addEventListener("testPassive",null,o),window.removeEventListener("testPassive",null,o)}var i="undefined"!=typeof window&&window.navigator&&window.navigator.platform&&(/iP(ad|hone|od)/.test(window.navigator.platform)||"MacIntel"===window.navigator.platform&&window.navigator.maxTouchPoints>1),c=[],a=!1,u=-1,l=void 0,s=void 0,d=void 0,f=function(e){return c.some((function(t){return!(!t.options.allowTouchMove||!t.options.allowTouchMove(e))}))},m=function(e){var t=e||window.event;return!!f(t.target)||(t.touches.length>1||(t.preventDefault&&t.preventDefault(),!1))},y=function(){void 0!==d&&(document.body.style.paddingRight=d,d=void 0),void 0!==l&&(document.body.style.overflow=l,l=void 0)},p=function(){if(void 0!==s){var e=-parseInt(document.body.style.top,10),t=-parseInt(document.body.style.left,10);document.body.style.position=s.position,document.body.style.top=s.top,document.body.style.left=s.left,window.scrollTo(t,e),s=void 0}},v=function(e,t){if(e){if(!c.some((function(t){return t.targetElement===e}))){var n={targetElement:e,options:t||{}};c=[].concat(function(e){if(Array.isArray(e)){for(var t=0,n=Array(e.length);t<e.length;t++)n[t]=e[t];return n}return Array.from(e)}(c),[n]),i?window.requestAnimationFrame((function(){if(void 0===s){s={position:document.body.style.position,top:document.body.style.top,left:document.body.style.left};var e=window,t=e.scrollY,n=e.scrollX,r=e.innerHeight;document.body.style.position="fixed",document.body.style.top=-t,document.body.style.left=-n,setTimeout((function(){return window.requestAnimationFrame((function(){var e=r-window.innerHeight;e&&t>=r&&(document.body.style.top=-(t+e))}))}),300)}})):function(e){if(void 0===d){var t=!!e&&!0===e.reserveScrollBarGap,n=window.innerWidth-document.documentElement.clientWidth;if(t&&n>0){var r=parseInt(window.getComputedStyle(document.body).getPropertyValue("padding-right"),10);d=document.body.style.paddingRight,document.body.style.paddingRight=r+n+"px"}}void 0===l&&(l=document.body.style.overflow,document.body.style.overflow="hidden")}(t),i&&(e.ontouchstart=function(e){1===e.targetTouches.length&&(u=e.targetTouches[0].clientY)},e.ontouchmove=function(t){1===t.targetTouches.length&&function(e,t){var n=e.targetTouches[0].clientY-u;!f(e.target)&&(t&&0===t.scrollTop&&n>0||function(e){return!!e&&e.scrollHeight-e.scrollTop<=e.clientHeight}(t)&&n<0?m(e):e.stopPropagation())}(t,e)},a||(document.addEventListener("touchmove",m,r?{passive:!1}:void 0),a=!0))}}else console.error("disableBodyScroll unsuccessful - targetElement must be provided when calling disableBodyScroll on IOS devices.")},g=function(e){e?(c=c.filter((function(t){return t.targetElement!==e})),i&&(e.ontouchstart=null,e.ontouchmove=null,a&&0===c.length&&(document.removeEventListener("touchmove",m,r?{passive:!1}:void 0),a=!1)),i?p():y()):console.error("enableBodyScroll unsuccessful - targetElement must be provided when calling enableBodyScroll on IOS devices.")}})),i.register("kv7rp",(function(e,t){var n=document.querySelector(".scroll-to-top-btn");window.addEventListener("scroll",(function(){window.scrollY>=50?n.style.display="flex":n.style.display="none"}),{passive:!0}),n.addEventListener("click",(function(){window.scrollTo({top:0,behavior:"smooth"})}))})),i.register("40cey",(function(e,t){var n=i("ianEp"),r={name:"location",openModalBtn:document.querySelector("[data-location-modal-open]"),closeModalBtn:document.querySelector("[data-location-modal-close]"),modal:document.querySelector("[data-location-modal]"),backdrop:document.querySelector(".backdrop--location")};(0,n.initializeModal)(r)})),i.register("ianEp",(function(e,n){t(e.exports,"initializeModal",(function(){return o})),t(e.exports,"toggleModal",(function(){return c}));var r=i("2u430");r=i("2u430");function o(e){var t,n,r;null===(t=e.openModalBtn)||void 0===t||t.addEventListener("click",(function(){return c(e)})),null===(n=e.closeModalBtn)||void 0===n||n.addEventListener("click",(function(t){t.stopPropagation(),c(e)})),null===(r=e.backdrop)||void 0===r||r.addEventListener("click",(function(t){t.target===e.backdrop&&c(e)}))}function c(e){var t;document.body.classList.toggle("".concat(e.name,"-modal-open")),null===(t=e.modal)||void 0===t||t.classList.toggle("backdrop--hidden"),"subscription"===e.name&&(0,r.resetErrors)(null===r.subscForm||void 0===r.subscForm?void 0:r.subscForm.elements)}})),i.register("2u430",(function(n,r){t(n.exports,"subscForm",(function(){return s})),t(n.exports,"setPropertyInOrderObj",(function(){return b})),t(n.exports,"resetErrors",(function(){return h}));var o=i("8nrFW"),c=i("1FpXB"),a=i("ianEp"),u=i("f8kn7"),l=i("j9tYZ"),s=document.querySelector(".subscr__form"),d=document.querySelectorAll(".payment__btn"),f=document.querySelector(".form__payment-error-text"),m=document.querySelector(".form__policy-error-text"),y=document.querySelectorAll(".form__input"),p=document.querySelector(".calc-btn");null==s||s.addEventListener("submit",S),null==p||p.addEventListener("click",(function(e){e.preventDefault(),S(e)})),d.forEach((function(t){t.addEventListener("click",(function(t){!function(t){var n=t.target.closest("button");if(b(n),n.classList.contains("active"))return;e(o)(d).forEach((function(e){e===n?e.classList.add("active"):e.classList.remove("active")}))}(t),!f.classList.contains("isHidden")&&q()}))})),y.forEach((function(e){e.addEventListener("focus",(function(){e.classList.remove("error")}))}));var v=["userName","userSurname","userTel","userEmail","userLocation","userDate","userTime"],g={userPaymentType:"",userBuildingType:"",userTakeKeyAddress:"",userGiveKeyAddress:"",userSquare:{quantity:"",cost:""},userServices:{}};function b(e){var t,n=e.getAttribute("data-type"),r=null!==(t=e.getAttribute("data-id"))&&void 0!==t?t:"";g[n]=r}function h(t){e(o)(t).forEach((function(e){e.classList.remove("error")}))}function q(){f.classList.toggle("isHidden")}function S(t){t.preventDefault();var n="BUTTON"===t.currentTarget.tagName,r=n?s.elements:t.currentTarget.elements,i=function(e,t){return t.filter((function(t){return""===e[t].value.trim()})).map((function(t){return e[t]}))}(r,v);h(r),function(e){e.forEach((function(e){e.classList.add("error")}))}(i);var f=e(o)(d).some((function(e){return e.classList.contains("active")})),y=document.querySelector('[name="studio-policy-check"]').checked,p=i.length>0;if(f||q(),y||m.classList.toggle("isHidden"),f&&!p&&y){var S,_,E,L,k,w=n?s:t.target;n&&(L=document.querySelector('[data-type="userTakeKeyAddress"]'),k=document.querySelector('[data-type="userGiveKeyAddress"]'),b(L),b(k),S=g,_=l.userServicesOrderInfoObj.square.quantity,E=l.userServicesOrderInfoObj.square.price,S.userSquare={quantity:"".concat(_),cost:(0,l.calculateServiceCost)(_,E)},function(e){var t=(0,l.filterObjectByQuantity)(l.userServicesOrderInfoObj);e.userServices=Object.keys(t).filter((function(e){return"square"!==e})).map((function(e){var n=t[e],r=n.name,o=n.quantity,i=n.price;return{name:r,quantity:o,cost:(0,l.calculateServiceCost)(o,i)}}))}(g)),function(e){new FormData(e).forEach((function(e,t){t.startsWith("user")&&(g[t]=e)}))}(w),(0,u.storeDataInLocalStorage)("userOrderDataObj",g),function(t){e(o)(t).forEach((function(e){"text"===e.type||"email"===e.type||"tel"===e.type||"TEXTAREA"===e.tagName?e.value="":"checkbox"===e.type&&(e.checked=!0)}))}(r),e(o)(d).forEach((function(e){e.classList.remove("active")})),n||(0,a.toggleModal)(c.refsSubscr),window.location.href=window.location.href="https://marynashavlak.github.io/cleaning/success-order.html"}}})),i.register("1FpXB",(function(e,n){t(e.exports,"refsSubscr",(function(){return o}));var r=i("ianEp"),o={name:"subscription",openModalBtn:document.querySelector("[data-subscription-modal-open]"),closeModalBtn:document.querySelector("[data-subscription-modal-close]"),modal:document.querySelector("[data-subscription-modal]"),backdrop:document.querySelector(".backdrop--subscr")};(0,r.initializeModal)(o)})),i.register("j9tYZ",(function(n,r){t(n.exports,"userServicesOrderInfoObj",(function(){return h})),t(n.exports,"calculateServiceCost",(function(){return L})),t(n.exports,"filterObjectByQuantity",(function(){return k}));var o=i("dDDEV"),c=i("8nrFW"),a=i("2u430"),u=document.querySelectorAll(".buildings__element"),l=document.querySelector(".control-quantity-btn--plus"),s=document.querySelector(".control-quantity-btn--minus"),d=document.querySelectorAll(".service-element .checkbox"),f=document.querySelector(".table__data"),m=document.querySelector("#take-keys-btn"),y=document.querySelector("#give-keys-btn"),p=document.querySelector(".keys-address-block"),v=document.querySelector(".keys-address-block__take-item"),g=document.querySelector(".keys-address-block__give-item");null==l||l.addEventListener("click",_),null==s||s.addEventListener("click",_),null==m||m.addEventListener("click",M),null==y||y.addEventListener("click",M),u.forEach((function(t){t.addEventListener("click",(function(t){(0,a.setPropertyInOrderObj)(t.target),function(t){var n=t.target;if(n.classList.contains("buildings__element--current"))return;e(c)(u).forEach((function(e){if(e===n){e.id;e.classList.add("buildings__element--current")}else e.classList.remove("buildings__element--current")}))}(t)}))})),d.forEach((function(t){t.addEventListener("change",(function(t){!function(t){var n=t.currentTarget,r=n.closest("label"),o=r.nextElementSibling,i=n.checked;(function(e,t){e.classList.toggle("isHidden",!t)})(o,i),function(e){var t=e.querySelector(".control-quantity-btn--plus"),n=e.querySelector(".control-quantity-btn--minus");t.addEventListener("click",S),n.addEventListener("click",S)}(o);var a=function(e){var t=e.querySelector(".service-element__text").textContent,n=e.querySelector(".service-element__accent").getAttribute("data-value"),r=e.getAttribute("data-id"),o=document.createElement("li");o.id=r,o.className="table__item table__block";var i=T("item__name","".concat(t)),c=T("","x"),a=T("name-wrapper"),u=T("quantity-wrapper"),l=T("item__quantity service-quantity",b[r].quantity);A(u,[c,l]),A(a,[i,u]);var s=T("service-value","".concat(n,"zł"));return s.setAttribute("data-service",r),A(o,[a,s]),o}(r),u=r.getAttribute("data-id");(function(t,n){var r=n.id,o=function(t){var n=f.querySelectorAll("li");return e(c)(n).find((function(e){return e.id===t}))}(r);t&&!o?(!function(e){f.insertAdjacentElement("beforeend",e)}(n),w(r)):!t&&o&&(w(r,0),function(e){f.removeChild(e)}(o))})(i,a),E(u),x(h)}(t)}))}));var b={square:{name:"Площа",quantity:1,price:2},windowsStandard:{name:"Миття вікон (стандартні)",quantity:1,price:35},windowsLarge:{name:"Миття вікон (до підлоги)",quantity:1,price:40},microWave:{name:"Мікрохвильовка",quantity:1,price:15},refrigerator:{name:"Холодильник",quantity:1,price:40},plate:{name:"Плита",quantity:1,price:35},officeChair:{name:"Хімчистка офісних стільців",quantity:1,price:20},sofaDry2x:{name:"Хімчистка дивану 2х",quantity:1,price:109.99},sofaDry3x:{name:"Хімчистка дивану 3х",quantity:1,price:129.99},sofaDry4x:{name:"Хімчистка дивану 4х",quantity:1,price:149.99}},h={square:{name:"Площа",quantity:1,price:2},windowsStandard:{name:"Миття вікон (стандартні)",quantity:0,price:35},windowsLarge:{name:"Миття вікон (до підлоги)",quantity:0,price:40},microWave:{name:"Мікрохвильовка",quantity:0,price:15},refrigerator:{name:"Холодильник",quantity:0,price:40},plate:{name:"Плита",quantity:0,price:35},officeChair:{name:"Хімчистка офісних стільців",quantity:0,price:20},sofaDry2x:{name:"Хімчистка дивану 2х",quantity:0,price:109.99},sofaDry3x:{name:"Хімчистка дивану 3х",quantity:0,price:129.99},sofaDry4x:{name:"Хімчистка дивану 4х",quantity:0,price:149.99}};function q(t){var n=O(t),r=function(e){return e.currentTarget.getAttribute("data-type")}(t);!function(e,t){if("plus"===t)b[e].quantity+=1;else if("minus"===t){if(1===b[e].quantity)return;b[e].quantity-=1}}(n,r),function(t){var n=document.querySelectorAll(".service-element"),r=e(c)(n).find((function(e){return e.getAttribute("data-id")===t})),o=null==r?void 0:r.nextElementSibling.querySelector('[data-name="'.concat(t,'"]')),i=document.querySelector(".wrap--square").querySelector('[data-name="'.concat(t,'"]'));o&&(o.textContent=b[t].quantity),i&&(i.textContent=b[t].quantity,document.querySelector(".square-value-total").textContent=b[t].quantity)}(n),function(e){var t,n,r=null===(t=document.querySelector('[data-name="'.concat(e,'"]')).parentNode)||void 0===t||null===(n=t.parentNode)||void 0===n?void 0:n.querySelector(".control-quantity-btn--minus .icon--minus");1===b[e].quantity?r.style.fill="rgba(\t77, 18, 153, 0.3)":r.style.fill="#4D1299"}(n)}function S(e){var t=O(e);q(e),E(t),x(h)}function _(e){var t;q(e),t=document.querySelector('[data-service="square"]'),h.square.quantity=b.square.quantity,t.textContent="".concat(h.square.quantity*h.square.price,"zł"),x(h)}function E(e){var t=document.querySelector('[data-service="'.concat(e,'"]')),n=document.querySelector("#".concat(e," .service-quantity")),r=b[e].price;if(t&&n){var o=w(e),i=L(o,r);t.textContent=i,n.textContent=o}else w(e,0)}function L(e,t){var n=(e*t).toFixed(2);return"".concat(n,"zł")}function k(t){return Object.keys(t).filter((function(e){return t[e].quantity>0})).reduce((function(n,r){return n[r]=e(o)({},t[r]),delete n[r].square,n}),{})}function w(e,t){var n=void 0!==t?t:b[e].quantity;return h[e].quantity=n,n}function x(e){var t,n=(t=e,Object.keys(t).reduce((function(e,n){var r=t[n];return e+r.quantity*r.price}),0).toFixed(2));document.querySelector(".total-order-value").textContent="".concat(n,"zł")}function T(e,t){var n=document.createElement("span");return e&&(n.className=e),t&&(n.textContent=t),n}function A(e,t){t.forEach((function(t){e.appendChild(t)}))}function O(e){var t,n,r,o,i,c=null===(r=null===(n=null===(t=e.currentTarget)||void 0===t?void 0:t.closest(".wrap--service"))||void 0===n?void 0:n.parentNode.querySelector("label"))||void 0===r?void 0:r.getAttribute("data-id"),a=null===(i=null===(o=e.currentTarget)||void 0===o?void 0:o.closest(".wrap--square"))||void 0===i?void 0:i.getAttribute("data-id");return c||a}function M(e){var t,n,r=e.currentTarget;r.classList.toggle("active"),function(e){"take-keys-btn"===e?v.classList.toggle("isHidden"):g.classList.toggle("isHidden")}(r.id),t=v.classList.contains("isHidden"),n=g.classList.contains("isHidden"),t&&n?p.classList.add("isHidden"):p.classList.remove("isHidden")}})),i.register("dDDEV",(function(e,t){"use strict";Object.defineProperty(e.exports,"__esModule",{value:!0}),e.exports.default=function(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{},o=Object.keys(n);"function"==typeof Object.getOwnPropertySymbols&&(o=o.concat(Object.getOwnPropertySymbols(n).filter((function(e){return Object.getOwnPropertyDescriptor(n,e).enumerable})))),o.forEach((function(t){r.default(e,t,n[t])}))}return e};var n,r=(n=i("hKHmD"))&&n.__esModule?n:{default:n}})),i.register("hKHmD",(function(e,t){"use strict";Object.defineProperty(e.exports,"__esModule",{value:!0}),e.exports.default=function(e,t,n){t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n;return e}}))}();
//# sourceMappingURL=contacts.0e1d4d4e.js.map
