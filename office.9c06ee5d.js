!function(){function e(e){return e&&e.__esModule?e.default:e}var t="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},n={},r={},i=t.parcelRequired7c6;null==i&&((i=function(e){if(e in n)return n[e].exports;if(e in r){var t=r[e];delete r[e];var i={id:e,exports:{}};return n[e]=i,t.call(i.exports,i,i.exports),i.exports}var a=new Error("Cannot find module '"+e+"'");throw a.code="MODULE_NOT_FOUND",a}).register=function(e,t){r[e]=t},t.parcelRequired7c6=i),i("6bPr4"),i("lEcfz"),document.querySelectorAll(".toggle-question-btn").forEach((function(e){e.addEventListener("click",(function(){var t;(t=e).closest(".questions__item").querySelectorAll(".questions__text").forEach((function(e){var t,n;t=e,n="none"===window.getComputedStyle(t).display,t.style.display=n?"block":"none"})),function(e){var t=e.querySelector(".icon--plus"),n=e.querySelector(".icon--minus");"none"===t.style.display?(t.style.display="block",n.style.display="none"):(t.style.display="none",n.style.display="block")}(t)}))})),i("ianEp");var a=i("ianEp"),o={name:"support",openModalBtn:document.querySelector("[data-support-modal-open]"),closeModalBtn:document.querySelector("[data-support-modal-close]"),modal:document.querySelector("[data-support-modal]"),backdrop:document.querySelector(".backdrop--support")};(0,a.initializeModal)(o),i("cYklY"),i("6Zya5"),i("lXOyw");var c=i("8nrFW"),u=document.querySelectorAll(".buildings__element"),l=document.querySelector(".control-quantity-btn--plus"),d=document.querySelector(".control-quantity-btn--minus"),s=(document.querySelectorAll(".square-value"),document.querySelectorAll(".service-element .checkbox")),y=document.querySelector(".table__data"),q=document.querySelector("#take-keys-btn"),f=document.querySelector("#give-keys-btn"),v=document.querySelector(".keys-address-block"),p=document.querySelector(".keys-address-block__take-item"),m=document.querySelector(".keys-address-block__give-item");l.addEventListener("click",k),d.addEventListener("click",k),q.addEventListener("click",C),f.addEventListener("click",C),u.forEach((function(t){t.addEventListener("click",(function(t){!function(t){var n=t.target;if(n.classList.contains("buildings__element--current"))return;e(c)(u).forEach((function(e){if(e===n){e.id;e.classList.add("buildings__element--current")}else e.classList.remove("buildings__element--current")}))}(t)}))})),s.forEach((function(t){t.addEventListener("change",(function(t){!function(t){var n=t.currentTarget,r=n.closest("label"),i=r.nextElementSibling,a=n.checked;(function(e,t){e.classList.toggle("isHidden",!t)})(i,a),function(e){var t=e.querySelector(".control-quantity-btn--plus"),n=e.querySelector(".control-quantity-btn--minus");t.addEventListener("click",_),n.addEventListener("click",_)}(i);var o=function(e){var t=e.querySelector(".service-element__text").textContent,n=e.querySelector(".service-element__accent").getAttribute("data-value"),r=e.getAttribute("data-id"),i=document.createElement("li");i.id=r,i.className="table__item table__block";var a=w("item__name","".concat(t)),o=w("","x"),c=w("name-wrapper"),u=w("quantity-wrapper"),l=w("item__quantity service-quantity",b[r].quantity);h(u,[o,l]),h(c,[a,u]);var d=w("service-value","".concat(n,"zł"));return d.setAttribute("data-service",r),h(i,[c,d]),i}(r),u=r.getAttribute("data-id");(function(t,n){var r=n.id,i=function(t){var n=y.querySelectorAll("li");return e(c)(n).find((function(e){return e.id===t}))}(r);t&&!i?(!function(e){y.insertAdjacentElement("beforeend",e)}(n),E(r)):!t&&i&&(E(r,0),function(e){y.removeChild(e)}(i))})(a,o),x(u),L()}(t)}))}));var b={square:{quantity:1,price:2},windowsStandard:{quantity:1,price:35},windowsLarge:{quantity:1,price:40},microWave:{quantity:1,price:15},refrigerator:{quantity:1,price:40},plate:{quantity:1,price:35},officeChair:{quantity:1,price:20},sofaDry2x:{quantity:1,price:109.99},sofaDry3x:{quantity:1,price:129.99},sofaDry4x:{quantity:1,price:149.99}},g={square:{quantity:1,price:2},windowsStandard:{quantity:0,price:35},windowsLarge:{quantity:0,price:40},microWave:{quantity:0,price:15},refrigerator:{quantity:0,price:40},plate:{quantity:0,price:35},officeChair:{quantity:0,price:20},sofaDry2x:{quantity:0,price:109.99},sofaDry3x:{quantity:0,price:129.99},sofaDry4x:{quantity:0,price:149.99}};function S(t){var n=A(t),r=function(e){return e.currentTarget.getAttribute("data-type")}(t);!function(e,t){if("plus"===t)b[e].quantity+=1;else if("minus"===t){if(1===b[e].quantity)return;b[e].quantity-=1}}(n,r),function(t){var n=document.querySelectorAll(".service-element"),r=e(c)(n).find((function(e){return e.getAttribute("data-id")===t})),i=null==r?void 0:r.nextElementSibling.querySelector('[data-name="'.concat(t,'"]')),a=document.querySelector(".wrap--square").querySelector('[data-name="'.concat(t,'"]'));i&&(i.textContent=b[t].quantity),a&&(a.textContent=b[t].quantity,document.querySelector(".square-value-total").textContent=b[t].quantity)}(n),function(e){var t,n,r=null===(t=document.querySelector('[data-name="'.concat(e,'"]')).parentNode)||void 0===t||null===(n=t.parentNode)||void 0===n?void 0:n.querySelector(".control-quantity-btn--minus .icon--minus");1===b[e].quantity?r.style.fill="rgba(\t77, 18, 153, 0.3)":r.style.fill="#4D1299"}(n)}function _(e){var t=A(e);S(e),x(t),L()}function k(e){var t;S(e),t=document.querySelector('[data-service="square"]'),g.square.quantity=b.square.quantity,t.textContent="".concat(g.square.quantity*g.square.price,"zł"),L()}function x(e){var t=document.querySelector('[data-service="'.concat(e,'"]')),n=document.querySelector("#".concat(e," .service-quantity")),r=b[e].price;if(t&&n){var i=E(e),a=(i*r).toFixed(2);t.textContent="".concat(a,"zł"),n.textContent=i}else E(e,0)}function E(e,t){var n=void 0!==t?t:b[e].quantity;return g[e].quantity=n,n}function L(){var e=Object.keys(g).reduce((function(e,t){var n=g[t];return e+n.quantity*n.price}),0).toFixed(2);document.querySelector(".total-order-value").textContent="".concat(e,"zł")}function w(e,t){var n=document.createElement("span");return e&&(n.className=e),t&&(n.textContent=t),n}function h(e,t){t.forEach((function(t){e.appendChild(t)}))}function A(e){var t,n,r,i,a,o=null===(r=null===(n=null===(t=e.currentTarget)||void 0===t?void 0:t.closest(".wrap--service"))||void 0===n?void 0:n.parentNode.querySelector("label"))||void 0===r?void 0:r.getAttribute("data-id"),c=null===(a=null===(i=e.currentTarget)||void 0===i?void 0:i.closest(".wrap--square"))||void 0===a?void 0:a.getAttribute("data-id");return o||c}function C(e){var t,n,r=e.currentTarget;r.classList.toggle("active"),function(e){"take-keys-btn"===e?p.classList.toggle("isHidden"):m.classList.toggle("isHidden")}(r.id),t=p.classList.contains("isHidden"),n=m.classList.contains("isHidden"),t&&n?v.classList.add("isHidden"):v.classList.remove("isHidden")}i("2u430")}();
//# sourceMappingURL=office.9c06ee5d.js.map
