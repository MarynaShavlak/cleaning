var e="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},t={},n={},o=e.parcelRequired7c6;null==o&&((o=function(e){if(e in t)return t[e].exports;if(e in n){var o=n[e];delete n[e];var r={id:e,exports:{}};return t[e]=r,o.call(r.exports,r,r.exports),r.exports}var i=new Error("Cannot find module '"+e+"'");throw i.code="MODULE_NOT_FOUND",i}).register=function(e,t){n[e]=t},e.parcelRequired7c6=o),o("cKJBV"),o("9nuA4");document.querySelectorAll(".toggle-question-btn").forEach((e=>{e.addEventListener("click",(()=>{!function(e){const t=e.closest(".questions__item");t.querySelectorAll(".questions__text").forEach((e=>{!function(e){const t="none"===window.getComputedStyle(e).display;e.style.display=t?"block":"none"}(e)})),function(e){const t=e.querySelector(".icon--plus"),n=e.querySelector(".icon--minus");"none"===t.style.display?(t.style.display="block",n.style.display="none"):(t.style.display="none",n.style.display="block")}(e)}(e)}))}));const r={name:"subscription",openModalBtn:document.querySelector("[data-subscription-modal-open]"),closeModalBtn:document.querySelector("[data-subscription-modal-close]"),modal:document.querySelector("[data-subscription-modal]"),backdrop:document.querySelector(".backdrop--subscr")};m(r);const i=document.querySelector(".subscr__form"),c=document.querySelectorAll(".payment__btn"),a=document.querySelector(".form__error-text"),s=document.querySelectorAll(".form__input");null==i||i.addEventListener("submit",(function(e){e.preventDefault();const t=e.currentTarget.elements,n=function(e,t){return t.filter((t=>""===e[t].value.trim())).map((t=>e[t]))}(t,u);d(t),function(e){console.log("elementsWithErrors: ",e),e.forEach((e=>{e.classList.add("error")}))}(n);const o=[...c].some((e=>e.classList.contains("active"))),i=n.length>0;o||y();if(!o||i)return;a=e.target,new FormData(a).forEach(((e,t)=>{t.startsWith("user")&&(l[t]=e)})),console.log("userOrderData: ",l),q(r);var a})),c.forEach((e=>{e.addEventListener("click",(e=>{!function(e){const t=e.target.closest("button");if(function(e){const t=e.getAttribute("data-id");l.userTypePayment=t}(t),t.classList.contains("active"))return;[...c].forEach((e=>{e===t?e.classList.add("active"):e.classList.remove("active")}))}(e);!a.classList.contains("isHidden")&&y()}))})),s.forEach((e=>{e.addEventListener("focus",(()=>{e.classList.remove("error")}))}));const u=["userName","userSurname","userTel","userEmail","userLocation","userDate","userTime"],l={userTypePayment:""};function d(e){[...e].forEach((e=>{e.classList.remove("error")}))}function y(){a.classList.toggle("isHidden")}function m(e){e.openModalBtn.addEventListener("click",(()=>q(e))),e.closeModalBtn.addEventListener("click",(t=>{t.stopPropagation(),q(e)})),e.backdrop.addEventListener("click",(t=>{t.target===e.backdrop&&q(e)}))}function q(e){document.body.classList.toggle(`${e.name}-modal-open`),e.modal.classList.toggle("backdrop--hidden"),"subscription"===e.name&&d(null==i?void 0:i.elements)}m({name:"support",openModalBtn:document.querySelector("[data-support-modal-open]"),closeModalBtn:document.querySelector("[data-support-modal-close]"),modal:document.querySelector("[data-support-modal]"),backdrop:document.querySelector(".backdrop--support")}),o("hxcYJ"),o("psiqy"),o("eXy63");const p=document.querySelectorAll(".buildings__element"),f=document.querySelector(".control-quantity-btn--plus"),v=document.querySelector(".control-quantity-btn--minus"),b=(document.querySelectorAll(".square-value"),document.querySelectorAll(".service-element .checkbox")),g=document.querySelector(".table__data"),S=document.querySelector("#take-keys-btn"),L=document.querySelector("#give-keys-btn"),_=document.querySelector(".keys-address-block"),k=document.querySelector(".keys-address-block__take-item"),E=document.querySelector(".keys-address-block__give-item");f.addEventListener("click",C),v.addEventListener("click",C),S.addEventListener("click",M),L.addEventListener("click",M),p.forEach((e=>{e.addEventListener("click",(e=>{!function(e){const t=e.target;if(t.classList.contains("buildings__element--current"))return;[...p].forEach((e=>{if(e===t){e.id;e.classList.add("buildings__element--current")}else e.classList.remove("buildings__element--current")}))}(e)}))})),b.forEach((e=>{e.addEventListener("change",(e=>{!function(e){const t=e.currentTarget,n=t.closest("label"),o=n.nextElementSibling,r=t.checked;(function(e,t){e.classList.toggle("isHidden",!t)})(o,r),function(e){const t=e.querySelector(".control-quantity-btn--plus"),n=e.querySelector(".control-quantity-btn--minus");t.addEventListener("click",A),n.addEventListener("click",A)}(o);const i=function(e){const t=e.querySelector(".service-element__text").textContent,n=e.querySelector(".service-element__accent").getAttribute("data-value"),o=e.getAttribute("data-id"),r=document.createElement("li");r.id=o,r.className="table__item table__block";const i=H("item__name",`${t}`),c=H("","x"),a=H("name-wrapper"),s=H("quantity-wrapper"),u=H("item__quantity service-quantity",x[o].quantity);N(s,[c,u]),N(a,[i,s]);const l=H("service-value",`${n}zł`);return l.setAttribute("data-service",o),N(r,[a,l]),r}(n),c=n.getAttribute("data-id");(function(e,t){const n=t.id,o=function(e){return[...g.querySelectorAll("li")].find((t=>t.id===e))}(n);e&&!o?(!function(e){g.insertAdjacentElement("beforeend",e)}(t),T(n)):!e&&o&&(T(n,0),function(e){g.removeChild(e)}(o))})(r,i),D(c),$()}(e)}))}));const x={square:{quantity:1,price:2},windowsStandard:{quantity:1,price:35},windowsLarge:{quantity:1,price:40},microWave:{quantity:1,price:15},refrigerator:{quantity:1,price:40},plate:{quantity:1,price:35},officeChair:{quantity:1,price:20},sofaDry2x:{quantity:1,price:109.99},sofaDry3x:{quantity:1,price:129.99},sofaDry4x:{quantity:1,price:149.99}},h={square:{quantity:1,price:2},windowsStandard:{quantity:0,price:35},windowsLarge:{quantity:0,price:40},microWave:{quantity:0,price:15},refrigerator:{quantity:0,price:40},plate:{quantity:0,price:35},officeChair:{quantity:0,price:20},sofaDry2x:{quantity:0,price:109.99},sofaDry3x:{quantity:0,price:129.99},sofaDry4x:{quantity:0,price:149.99}};function w(e){const t=B(e),n=function(e){return e.currentTarget.getAttribute("data-type")}(e);!function(e,t){if("plus"===t)x[e].quantity+=1;else if("minus"===t){if(1===x[e].quantity)return;x[e].quantity-=1}}(t,n),function(e){const t=[...document.querySelectorAll(".service-element")].find((t=>t.getAttribute("data-id")===e)),n=null==t?void 0:t.nextElementSibling.querySelector(`[data-name="${e}"]`),o=document.querySelector(".wrap--square").querySelector(`[data-name="${e}"]`);n&&(n.textContent=x[e].quantity),o&&(o.textContent=x[e].quantity,document.querySelector(".square-value-total").textContent=x[e].quantity)}(t),function(e){var t,n;const o=null===(t=document.querySelector(`[data-name="${e}"]`).parentNode)||void 0===t||null===(n=t.parentNode)||void 0===n?void 0:n.querySelector(".control-quantity-btn--minus .icon--minus");1===x[e].quantity?o.style.fill="rgba(\t77, 18, 153, 0.3)":o.style.fill="#4D1299"}(t)}function A(e){const t=B(e);w(e),D(t),$()}function C(e){w(e),function(){const e=document.querySelector('[data-service="square"]');h.square.quantity=x.square.quantity,e.textContent=h.square.quantity*h.square.price+"zł"}(),$()}function D(e){const t=document.querySelector(`[data-service="${e}"]`),n=document.querySelector(`#${e} .service-quantity`),o=x[e].price;if(t&&n){const r=T(e),i=(r*o).toFixed(2);t.textContent=`${i}zł`,n.textContent=r}else T(e,0)}function T(e,t){const n=void 0!==t?t:x[e].quantity;return h[e].quantity=n,n}function $(){const e=Object.keys(h).reduce(((e,t)=>{const n=h[t];return e+n.quantity*n.price}),0).toFixed(2);document.querySelector(".total-order-value").textContent=`${e}zł`}function H(e,t){const n=document.createElement("span");return e&&(n.className=e),t&&(n.textContent=t),n}function N(e,t){t.forEach((t=>{e.appendChild(t)}))}function B(e){var t,n,o,r,i;const c=null===(o=null===(n=null===(t=e.currentTarget)||void 0===t?void 0:t.closest(".wrap--service"))||void 0===n?void 0:n.parentNode.querySelector("label"))||void 0===o?void 0:o.getAttribute("data-id"),a=null===(i=null===(r=e.currentTarget)||void 0===r?void 0:r.closest(".wrap--square"))||void 0===i?void 0:i.getAttribute("data-id");return c||a}function M(e){const t=e.currentTarget;t.classList.toggle("active");!function(e){"take-keys-btn"===e?k.classList.toggle("isHidden"):E.classList.toggle("isHidden")}(t.id),function(){const e=k.classList.contains("isHidden"),t=E.classList.contains("isHidden");e&&t?_.classList.add("isHidden"):_.classList.remove("isHidden")}()}
//# sourceMappingURL=office.bfdb62f3.js.map
