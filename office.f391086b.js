const e=document.querySelectorAll(".buildings__element"),t=document.querySelector(".control-quantity-btn--plus"),n=document.querySelector(".control-quantity-btn--minus"),r=document.querySelectorAll(".square-value"),c=document.querySelectorAll(".service-element"),i=document.querySelectorAll(".service-element .checkbox"),o=document.querySelector(".table__data");t.addEventListener("click",l),n.addEventListener("click",l),e.forEach((t=>{t.addEventListener("click",(t=>{!function(t){const n=t.target;if(n.classList.contains("buildings__element--current"))return;e.forEach((e=>{if(e===n){e.id;e.classList.add("buildings__element--current")}else e.classList.remove("buildings__element--current")}))}(t)}))})),i.forEach((e=>{e.addEventListener("change",(e=>{!function(e){const t=e.currentTarget,n=t.closest("label"),r=n.nextElementSibling,c=t.checked;(function(e,t){e.classList.toggle("isHidden",!t)})(r,c),function(e){const t=e.querySelector(".control-quantity-btn--plus"),n=e.querySelector(".control-quantity-btn--minus");t.addEventListener("click",s),n.addEventListener("click",s)}(r);const i=function(e){const t=e.querySelector(".service-element__text").textContent,n=e.querySelector(".service-element__accent").getAttribute("data-value"),r=e.getAttribute("data-id"),c=document.createElement("li");c.id=r,c.className="table__item table__block";const i=d("item__name",`${t}`),o=document.createTextNode("  x"),l=d("item__quantity service-quantity",u[r]);l.setAttribute("data-service",r),l.textContent=u[r],m(i,[o,l]);const a=d("service-value",`${n}zł`);return m(c,[i,a]),c}(n);!function(e,t){console.log("item: ",t);const n=t.id,r=[...o.querySelectorAll("li")].find((e=>e.id===n));e&&!r?o.insertAdjacentElement("beforeend",t):!e&&r&&o.removeChild(r)}(c,i)}(e)}))}));const u={square:1,windowsStandard:1,windowsLarge:1,microWave:1,refrigerator:1,plate:1,officeChair:1,sofaDry2x:1,sofaDry3x:1,sofaDry4x:1};function l(e){!function(e){if("plus"===e)u.square+=1;else if("minus"===e){if(1===u.square)return;u.square-=1}}(a(e)),r.forEach((e=>{e.textContent=u.square})),document.querySelector("#squareValue").textContent=""+2*u.square}function a(e){return e.currentTarget.getAttribute("data-type")}function s(e){const t=function(e){return e.currentTarget.closest(".wrap--service").parentNode.querySelector("label").getAttribute("data-id")}(e);!function(e,t){if("plus"===t)u[e]+=1;else if("minus"===t){if(1===u[e])return;u[e]-=1}}(t,a(e)),function(e){const t=[...c].find((t=>t.getAttribute("data-id")===e)).nextElementSibling.querySelector(`[data-name="${e}"]`),n=document.querySelector(`[data-service="${e}"]`);t.textContent=u[e],n.textContent=u[e]}(t)}function d(e,t){const n=document.createElement("span");return n.className=e,n.textContent=t,n}function m(e,t){t.forEach((t=>{e.appendChild(t)}))}
//# sourceMappingURL=office.f391086b.js.map
