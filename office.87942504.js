const e=document.querySelectorAll(".buildings__element"),t=document.querySelector(".control-quantity-btn--plus"),n=document.querySelector(".control-quantity-btn--minus"),r=document.querySelectorAll(".square-value"),c=document.querySelectorAll(".service-element"),i=document.querySelectorAll(".service-element .checkbox"),l=document.querySelector(".table__data");t.addEventListener("click",o),n.addEventListener("click",o),e.forEach((t=>{t.addEventListener("click",(t=>{!function(t){const n=t.target;if(n.classList.contains("buildings__element--current"))return;e.forEach((e=>{if(e===n){e.id;e.classList.add("buildings__element--current")}else e.classList.remove("buildings__element--current")}))}(t)}))})),i.forEach((e=>{e.addEventListener("change",(e=>{!function(e){const t=e.currentTarget,n=t.closest("label"),r=n.nextElementSibling;r.classList.toggle("isHidden",!t.checked);const c=r.querySelector(".control-quantity-btn--plus"),i=r.querySelector(".control-quantity-btn--minus");c.addEventListener("click",s),i.addEventListener("click",s);const a=function(e){const t=e.querySelector(".service-element__text").textContent,n=e.querySelector(".service-element__accent").getAttribute("data-value"),r=e.getAttribute("data-id"),c=document.createElement("li");c.className="table__item table__block";const i=document.createElement("span");i.className="item__name",i.textContent=`${t}`;const l=document.createTextNode("  x"),a=document.createElement("span");a.className="item__quantity service-quantity",a.textContent="1",i.appendChild(l),i.appendChild(a);const o=document.createElement("span");return o.className="service-value",o.textContent=`${n}zł`,c.appendChild(i),c.appendChild(o),c.id=r,c}(n);!function(e,t){const n=t.id,r=[...l.querySelectorAll("li")].find((e=>e.id===n));e&&!r?l.insertAdjacentElement("beforeend",t):!e&&r&&l.removeChild(r)}(t.checked,a)}(e)}))}));const a={square:1,windowsStandard:1,windowsLarge:1,microWave:1,refrigerator:1,plate:1,officeChair:1,sofaDry2x:1,sofaDry3x:1,sofaDry4x:1};function o(e){!function(e){if("plus"===e)a.square+=1;else if("minus"===e){if(1===a.square)return;a.square-=1}}(u(e)),r.forEach((e=>{e.textContent=a.square})),document.querySelector("#squareValue").textContent=""+2*a.square,function(){const e=document.querySelector(".control-quantity-btn--minus .icon--minus");1===square?e.style.fill="rgba(\t77, 18, 153, 0.3)":e.style.fill="#4D1299"}()}function u(e){return e.currentTarget.getAttribute("data-type")}function s(e){const t=function(e){return e.currentTarget.closest(".wrap--service").parentNode.querySelector("label").getAttribute("data-id")}(e);!function(e,t){if("plus"===t)a[e]+=1;else if("minus"===t){if(1===a[e])return;a[e]-=1}}(t,u(e)),function(e){[...c].find((t=>t.getAttribute("data-id")===e)).nextElementSibling.querySelector(`[data-name="${e}"]`).textContent=a[e]}(t)}
//# sourceMappingURL=office.87942504.js.map
