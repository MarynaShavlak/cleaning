const t=document.querySelectorAll(".buildings__element"),e=document.querySelector(".control-quantity-btn--plus"),n=document.querySelector(".control-quantity-btn--minus"),i=(document.querySelectorAll(".square-value"),document.querySelectorAll(".service-element .checkbox")),r=document.querySelector(".table__data"),c=document.querySelector("#take-keys-btn"),o=document.querySelector("#give-keys-btn"),u=document.querySelector(".keys-address-block"),a=document.querySelector(".keys-address-block__take-item"),s=document.querySelector(".keys-address-block__give-item");e.addEventListener("click",m),n.addEventListener("click",m),c.addEventListener("click",_),o.addEventListener("click",_),t.forEach((e=>{e.addEventListener("click",(e=>{!function(e){const n=e.target;if(n.classList.contains("buildings__element--current"))return;t.forEach((t=>{if(t===n){t.id;t.classList.add("buildings__element--current")}else t.classList.remove("buildings__element--current")}))}(e)}))})),i.forEach((t=>{t.addEventListener("change",(t=>{!function(t){const e=t.currentTarget,n=e.closest("label"),i=n.nextElementSibling,c=e.checked;(function(t,e){t.classList.toggle("isHidden",!e)})(i,c),function(t){const e=t.querySelector(".control-quantity-btn--plus"),n=t.querySelector(".control-quantity-btn--minus");e.addEventListener("click",q),n.addEventListener("click",q)}(i);const o=function(t){const e=t.querySelector(".service-element__text").textContent,n=t.querySelector(".service-element__accent").getAttribute("data-value"),i=t.getAttribute("data-id"),r=document.createElement("li");r.id=i,r.className="table__item table__block";const c=b("item__name",`${e}`),o=document.createTextNode("  x"),u=b("item__quantity service-quantity",l[i].quantity);u.textContent=l[i].quantity,g(c,[o,u]);const a=b("service-value",`${n}zł`);return a.setAttribute("data-service",i),g(r,[c,a]),r}(n),u=n.getAttribute("data-id");(function(t,e){const n=e.id,i=function(t){return[...r.querySelectorAll("li")].find((e=>e.id===t))}(n);t&&!i?(!function(t){r.insertAdjacentElement("beforeend",t)}(e),v(n)):!t&&i&&(v(n,0),function(t){r.removeChild(t)}(i))})(c,o),f(u),p()}(t)}))}));const l={square:{quantity:1,price:2},windowsStandard:{quantity:1,price:35},windowsLarge:{quantity:1,price:40},microWave:{quantity:1,price:15},refrigerator:{quantity:1,price:40},plate:{quantity:1,price:35},officeChair:{quantity:1,price:20},sofaDry2x:{quantity:1,price:109.99},sofaDry3x:{quantity:1,price:129.99},sofaDry4x:{quantity:1,price:149.99}},d={square:{quantity:1,price:2},windowsStandard:{quantity:0,price:35},windowsLarge:{quantity:0,price:40},microWave:{quantity:0,price:15},refrigerator:{quantity:0,price:40},plate:{quantity:0,price:35},officeChair:{quantity:0,price:20},sofaDry2x:{quantity:0,price:109.99},sofaDry3x:{quantity:0,price:129.99},sofaDry4x:{quantity:0,price:149.99}};function y(t){const e=S(t),n=function(t){return t.currentTarget.getAttribute("data-type")}(t);!function(t,e){if("plus"===e)l[t].quantity+=1;else if("minus"===e){if(1===l[t].quantity)return;l[t].quantity-=1}}(e,n),function(t){const e=[...document.querySelectorAll(".service-element")].find((e=>e.getAttribute("data-id")===t)),n=null==e?void 0:e.nextElementSibling.querySelector(`[data-name="${t}"]`),i=document.querySelector(".wrap--square").querySelector(`[data-name="${t}"]`);n&&(n.textContent=l[t].quantity),i&&(i.textContent=l[t].quantity,document.querySelector(".square-value-total").textContent=l[t].quantity)}(e),function(t){var e,n;const i=null===(e=document.querySelector(`[data-name="${t}"]`).parentNode)||void 0===e||null===(n=e.parentNode)||void 0===n?void 0:n.querySelector(".control-quantity-btn--minus .icon--minus");1===l[t].quantity?i.style.fill="rgba(\t77, 18, 153, 0.3)":i.style.fill="#4D1299"}(e)}function q(t){const e=S(t);y(t),f(e),p()}function m(t){y(t),function(){const t=document.querySelector('[data-service="square"]');d.square.quantity=l.square.quantity,t.textContent=d.square.quantity*d.square.price+"zł"}(),p()}function f(t){const e=document.querySelector(`[data-service="${t}"]`),n=document.querySelector(`#${t} .service-quantity`),i=l[t].price;if(e&&n){const r=v(t);e.textContent=r*i+"zł",n.textContent=r}else v(t,0)}function v(t,e){const n=void 0!==e?e:l[t].quantity;return d[t].quantity=n,n}function p(){const t=Object.keys(d).reduce(((t,e)=>{const n=d[e];return t+n.quantity*n.price}),0);document.querySelector(".total-order-value").textContent=`${t}zł`}function b(t,e){const n=document.createElement("span");return n.className=t,n.textContent=e,n}function g(t,e){e.forEach((e=>{t.appendChild(e)}))}function S(t){var e,n,i,r,c;const o=null===(i=null===(n=null===(e=t.currentTarget)||void 0===e?void 0:e.closest(".wrap--service"))||void 0===n?void 0:n.parentNode.querySelector("label"))||void 0===i?void 0:i.getAttribute("data-id"),u=null===(c=null===(r=t.currentTarget)||void 0===r?void 0:r.closest(".wrap--square"))||void 0===c?void 0:c.getAttribute("data-id");return o||u}function _(t){const e=t.currentTarget;e.classList.toggle("active");!function(t){"take-keys-btn"===t?a.classList.toggle("isHidden"):s.classList.toggle("isHidden")}(e.id),function(){const t=a.classList.contains("isHidden"),e=s.classList.contains("isHidden");t&&e?u.classList.add("isHidden"):u.classList.remove("isHidden")}()}
//# sourceMappingURL=office.d5cee413.js.map