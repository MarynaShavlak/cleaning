!function(){function e(e){return e&&e.__esModule?e.default:e}var o="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},t={},n={},r=o.parcelRequired7c6;null==r&&((r=function(e){if(e in t)return t[e].exports;if(e in n){var o=n[e];delete n[e];var r={id:e,exports:{}};return t[e]=r,o.call(r.exports,r,r.exports),r.exports}var c=new Error("Cannot find module '"+e+"'");throw c.code="MODULE_NOT_FOUND",c}).register=function(e,o){n[e]=o},o.parcelRequired7c6=r),r("6bPr4"),r("lEcfz");var c=document.querySelectorAll(".plus-btn--toolkit"),l=document.querySelectorAll(".rooms__item"),s=document.querySelector(".schema--kitchen"),i=document.querySelector(".schema--room"),a=document.querySelector(".schema--bath");function u(e){e.closest(".toolkit__wrapper").querySelector(":first-child").classList.toggle("is-shown")}c.forEach((function(e){e.addEventListener("mouseenter",(function(){u(e)})),e.addEventListener("mouseleave",(function(){u(e)}))})),l.forEach((function(e){e.addEventListener("click",(function(e){!function(e){var o=e.target;if(o.classList.contains("rooms__item--current"))return;l.forEach((function(e){e===o?(!function(e){s.style.display="room-1"===e?"block":"none",i.style.display="room-2"===e?"block":"none",a.style.display="room-3"===e?"block":"none"}(e.id),e.classList.add("rooms__item--current")):e.classList.remove("rooms__item--current")}))}(e)}))})),document.querySelectorAll(".toggle-question-btn").forEach((function(e){e.addEventListener("click",(function(){var o;(o=e).closest(".questions__item").querySelectorAll(".questions__text").forEach((function(e){var o,t;o=e,t="none"===window.getComputedStyle(o).display,o.style.display=t?"block":"none"})),function(e){var o=e.querySelector(".icon--plus"),t=e.querySelector(".icon--minus");"none"===o.style.display?(o.style.display="block",t.style.display="none"):(o.style.display="none",t.style.display="block")}(o)}))}));var d=r("8nrFW"),m=document.querySelector(".subscr__form"),f=document.querySelectorAll(".payment__btn");function p(e){e.openModalBtn.addEventListener("click",(function(){return y(e)})),e.closeModalBtn.addEventListener("click",(function(o){o.stopPropagation(),y(e)})),e.backdrop.addEventListener("click",(function(o){o.target===e.backdrop&&y(e)}))}function y(o){var t;document.body.classList.toggle("".concat(o.name,"-modal-open")),o.modal.classList.toggle("backdrop--hidden"),"subscription"===o.name&&(t=null==m?void 0:m.elements,e(d)(t).forEach((function(e){e.classList.remove("error")})))}null==m||m.addEventListener("submit",(function(o){o.preventDefault();var t=e(d)(f).some((function(e){return e.classList.contains("active")}));console.log("isPaymentTypeChosen: ",t),0===elementsWithErrors.length&&(console.log("form submit"),o.currentTarget.submit(),window.location.href="success-order.html")})),f.forEach((function(o){o.addEventListener("click",(function(o){!function(o){var t=o.target.closest("button");if(t.classList.contains("active"))return;e(d)(f).forEach((function(e){e===t?e.classList.add("active"):e.classList.remove("active")}))}(o)}))})),p({name:"support",openModalBtn:document.querySelector("[data-support-modal-open]"),closeModalBtn:document.querySelector("[data-support-modal-close]"),modal:document.querySelector("[data-support-modal]"),backdrop:document.querySelector(".backdrop--support")}),p({name:"subscription",openModalBtn:document.querySelector("[data-subscription-modal-open]"),closeModalBtn:document.querySelector("[data-subscription-modal-close]"),modal:document.querySelector("[data-subscription-modal]"),backdrop:document.querySelector(".backdrop--subscr")}),r("cYklY"),r("6Zya5"),r("lXOyw")}();
//# sourceMappingURL=index.09c6e426.js.map
