!function(){function e(e,t,n,r){Object.defineProperty(e,t,{get:n,set:r,enumerable:!0,configurable:!0})}function t(e){return e&&e.__esModule?e.default:e}var n="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},r={},o={},c=n.parcelRequired7c6;null==c&&((c=function(e){if(e in r)return r[e].exports;if(e in o){var t=o[e];delete o[e];var n={id:e,exports:{}};return r[e]=n,t.call(n.exports,n,n.exports),n.exports}var c=new Error("Cannot find module '"+e+"'");throw c.code="MODULE_NOT_FOUND",c}).register=function(e,t){o[e]=t},n.parcelRequired7c6=c),c.register("ianEp",(function(t,n){e(t.exports,"initializeModal",(function(){return o})),e(t.exports,"toggleModal",(function(){return i}));var r=c("2u430");r=c("2u430");function o(e){var t,n,r;null===(t=e.openModalBtn)||void 0===t||t.addEventListener("click",(function(){return i(e)})),null===(n=e.closeModalBtn)||void 0===n||n.addEventListener("click",(function(t){t.stopPropagation(),i(e)})),null===(r=e.backdrop)||void 0===r||r.addEventListener("click",(function(t){t.target===e.backdrop&&i(e)}))}function i(e){var t;document.body.classList.toggle("".concat(e.name,"-modal-open")),null===(t=e.modal)||void 0===t||t.classList.toggle("backdrop--hidden"),"subscription"===e.name&&(0,r.resetErrors)(null===r.subscForm||void 0===r.subscForm?void 0:r.subscForm.elements)}})),c.register("2u430",(function(n,r){e(n.exports,"subscForm",(function(){return a})),e(n.exports,"resetErrors",(function(){return g}));var o=c("8nrFW"),i=c("1FpXB"),u=c("ianEp"),a=document.querySelector(".subscr__form");console.log("subscForm : ",a);var s=document.querySelectorAll(".payment__btn"),l=document.querySelector(".form__payment-error-text"),d=document.querySelector(".form__policy-error-text"),f=document.querySelectorAll(".form__input"),m=document.querySelector(".calc-btn");null==a||a.addEventListener("submit",y),null==m||m.addEventListener("click",(function(e){e.preventDefault(),y(e)})),s.forEach((function(e){e.addEventListener("click",(function(e){!function(e){var n=e.target.closest("button");if(function(e){var t=e.getAttribute("data-id");v.userTypePayment=t}(n),n.classList.contains("active"))return;t(o)(s).forEach((function(e){e===n?e.classList.add("active"):e.classList.remove("active")}))}(e),!l.classList.contains("isHidden")&&b()}))})),f.forEach((function(e){e.addEventListener("focus",(function(){e.classList.remove("error")}))}));var p=["userName","userSurname","userTel","userEmail","userLocation","userDate","userTime"],v={userTypePayment:""};function g(e){t(o)(e).forEach((function(e){e.classList.remove("error")}))}function b(){l.classList.toggle("isHidden")}function y(e){e.preventDefault();var n="BUTTON"===e.currentTarget.tagName?a.elements:e.currentTarget.elements;console.log("e.currentTarget: ",e.currentTarget);var r=function(e,t){return console.log("fieldNames: ",t),console.log("elements: ",e),t.filter((function(t){return""===e[t].value.trim()})).map((function(t){return e[t]}))}(n,p);g(n),function(e){e.forEach((function(e){e.classList.add("error")}))}(r);var c,l=t(o)(s).some((function(e){return e.classList.contains("active")})),f=document.querySelector('[name="studio-policy-check"]').checked,m=r.length>0;(l||b(),f||d.classList.toggle("isHidden"),l&&!m&&f)&&(c=e.target,new FormData(c).forEach((function(e,t){t.startsWith("user")&&(v[t]=e)})),console.log("userOrderData: ",v),function(e){t(o)(e).forEach((function(e){"text"===e.type||"email"===e.type||"tel"===e.type||"TEXTAREA"===e.tagName?e.value="":"checkbox"===e.type&&(e.checked=!0)}))}(n),t(o)(s).forEach((function(e){e.classList.remove("active")})),(0,u.toggleModal)(i.refsSubscr))}})),c.register("1FpXB",(function(t,n){e(t.exports,"refsSubscr",(function(){return o}));var r=c("ianEp"),o={name:"subscription",openModalBtn:document.querySelector("[data-subscription-modal-open]"),closeModalBtn:document.querySelector("[data-subscription-modal-close]"),modal:document.querySelector("[data-subscription-modal]"),backdrop:document.querySelector(".backdrop--subscr")};(0,r.initializeModal)(o)}))}();
//# sourceMappingURL=faq.7a3ea98f.js.map
