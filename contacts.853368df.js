const e=["/","/index.html","/office.html","/success-order.html","/after-repair.html","/calc-order.html","/services.html","/contacts.html","/faq.html"];function t(e){[...document.querySelectorAll(".dynamic-link")].forEach((t=>t.href=e))}function n(e){const t=document.querySelector(e);t&&t.classList.add("nav__link--current")}function o(){document.querySelector("main").classList.add("section--dark-background")}document.addEventListener("DOMContentLoaded",(function(){const c=window.location.pathname;var r;e.includes(c)||"/error.html"===c||e.includes("/error.html")||(window.location.href="/error.html"),"/"===c||"/index.html"===c?(n(".nav__link"),t("index.html#order-cleaning-block")):"/office.html"===c?(n(".nav__list .nav__item:nth-child(2) .nav__link"),t("office.html#office-calc-block")):"/after-repair.html"===c?(r=".add-services-list__item:nth-child(n+3)",document.querySelectorAll(r).forEach((e=>e.classList.add("isHidden")))):"/calc-order.html"===c?function(e){document.querySelectorAll(e).forEach((e=>e.classList.add("block--white")))}(".block"):"/contacts.html"===c?(!function(){document.querySelector(".connection").classList.remove("no-padding-top");document.querySelector(".connection--second-block").classList.add("block-with-image")}(),o()):"/success-order.html"!==c&&"/error.html"!==c||o()})),(()=>{const e=document.querySelector(".aside-menu"),t=document.querySelector(".open-menu-btn"),n=document.querySelector(".close-menu-btn"),o=()=>{const n="true"===t.getAttribute("aria-expanded")||!1;t.setAttribute("aria-expanded",!n),e.classList.toggle("is-open");bodyScrollLock[n?"enableBodyScroll":"disableBodyScroll"](document.body)};t.addEventListener("click",o),n.addEventListener("click",o),window.matchMedia("(min-width: 768px)").addEventListener("change",(n=>{n.matches&&(e.classList.remove("is-open"),t.setAttribute("aria-expanded",!1),bodyScrollLock.enableBodyScroll(document.body))}))})();const c=document.querySelector(".icon--calendar"),r=document.querySelector(".calendar__body"),a=document.querySelector(".calendar__monthYear"),i=document.querySelector(".calendar__prevMonth-btn"),l=document.querySelector(".calendar__nextMonth-btn");let u=new Date;function d(e){const t=e.getFullYear();return{month:e.getMonth(),year:t}}function s(e,t,n){return{formattedDay:e<10?`0${e}`:e,formattedMonth:0===t?12:t,formattedYear:0===t?n-1:n}}function m(e,t,n,o){e.classList.add(n),t&&e.classList.add("disabled-day"),"current-month"===n&&o&&e.classList.add("current-day")}function y(e,t,n,o,c){const r=document.createElement("td");return function(e,t){e.textContent=t}(r,e),function(e,t,n,o){e.dataset.date=`${t}/${n<9?"0":""}${n+1}/${o}`}(r,e,t,n),m(r,o,c),function(e,t){t||e.addEventListener("click",S)}(r,o),r}function f(e){const{year:t,month:n}=d(u),{formattedDay:o,formattedMonth:c,formattedYear:r}=s(e,n,t),a=new Date;return y(o,c-1,r,g(new Date(r,c-1,e),a),"previous-month")}function q(e){const{formattedDay:t}=s(e),{year:n,month:o}=d(u),c=new Date,r=g(new Date(n,o,e),c),a=y(t,o,n,r,"current-month");return m(a,r,"current-month",u.getFullYear()===c.getFullYear()&&u.getMonth()===c.getMonth()&&e===c.getDate()),a}function h(e){const{year:t,month:n}=d(u),{formattedDay:o}=s(e,n,t),c=11===n?1:n+2,r=11===n?t+1:t,a=new Date;return y(o,c-1,r,g(new Date(r,c-1,e),a),"next-month")}function p(){return document.createElement("tr")}function v(e,t){e.appendChild(t)}function b(){const{year:e,month:t}=d(u);!function(e){const t=u.toLocaleDateString("uk-UA",{month:"long"}),n=t.charAt(0).toUpperCase()+t.slice(1);a.textContent=`${n} ${e}`}(e),r.innerHTML="";const{firstDayOfMonth:n,lastDayOfMonthObj:o}=function(e,t){return{firstDayOfMonth:new Date(e,t,1),lastDayOfMonthObj:new Date(e,t+1,0)}}(e,t),c=function(e){let t=e.getDay();return 0===t&&(t=7),t}(n),i=function(e,t){return new Date(e,t,0).getDate()}(e,t);let l=1,s=p();for(let e=c-1;e>=1;e--){v(s,f(i-e+1))}for(;l<=o.getDate();){v(s,q(l));7===s.children.length&&(v(r,s),s=p()),l++}if(s.children.length>0){for(let e=1;s.children.length<7;e++){v(s,h(e))}v(r,s)}}function g(e,t){return e<t}function S(e){const t=function(e){const t=e.split("/"),[n,o,c]=t;return`${o}/${n}/${c}`}(e.target.dataset.date),n=(new Date).toLocaleDateString("en-US",{year:"numeric",month:"2-digit",day:"2-digit"});if(new Date(t)-new Date(n)>=0){const e=function(e){const t=e.split("/"),[n,o,c]=t;return`${o}/${n}/${c}`}(t);console.log("chosenDate : ",e),E.value=`${e}`,k()}}function L(e){u.setMonth(u.getMonth()+e),b()}function k(){document.querySelector(".calendar").classList.toggle("isHidden")}null==i||i.addEventListener("click",(()=>{L(-1)})),null==l||l.addEventListener("click",(()=>{L(1)})),c.addEventListener("click",(()=>{k()})),b();const _=document.querySelector(".subscr__form"),E=document.querySelector('[name="userDate"]');function D(e){Array.from(e).forEach((e=>{e.classList.remove("error")}))}E.addEventListener("focus",k),null==_||_.addEventListener("submit",(function(e){e.preventDefault();const t=e.currentTarget.elements,n=function(e,t){const n=[];return t.forEach((t=>{0===e[t].value.length&&n.push(e[t])})),n}(t,["modalUserName","modalUserSurname","modalUserTel","modalUserEmail","modalUserLocation","modalUserDate","modalUserTime"]);D(t),function(e){e.forEach((e=>{e.classList.add("error")}))}(n),0===n.length&&(e.currentTarget.submit(),window.location.href="success-order.html")}));const w=document.querySelectorAll(".buildings__element"),x=document.querySelector(".control-quantity-btn--plus"),A=document.querySelector(".control-quantity-btn--minus"),$=(document.querySelectorAll(".square-value"),document.querySelectorAll(".service-element .checkbox")),M=document.querySelector(".table__data"),C=document.querySelector("#take-keys-btn"),T=document.querySelector("#give-keys-btn"),H=document.querySelector(".keys-address-block"),U=document.querySelector(".keys-address-block__take-item"),B=document.querySelector(".keys-address-block__give-item");null==x||x.addEventListener("click",z),null==A||A.addEventListener("click",z),null==C||C.addEventListener("click",K),null==T||T.addEventListener("click",K),null==w||w.forEach((e=>{e.addEventListener("click",(e=>{!function(e){const t=e.target;if(t.classList.contains("buildings__element--current"))return;w.forEach((e=>{if(e===t){e.id;e.classList.add("buildings__element--current")}else e.classList.remove("buildings__element--current")}))}(e)}))})),$.forEach((e=>{e.addEventListener("change",(e=>{!function(e){const t=e.currentTarget,n=t.closest("label"),o=n.nextElementSibling,c=t.checked;(function(e,t){e.classList.toggle("isHidden",!t)})(o,c),function(e){const t=e.querySelector(".control-quantity-btn--plus"),n=e.querySelector(".control-quantity-btn--minus");t.addEventListener("click",j),n.addEventListener("click",j)}(o);const r=function(e){const t=e.querySelector(".service-element__text").textContent,n=e.querySelector(".service-element__accent").getAttribute("data-value"),o=e.getAttribute("data-id"),c=document.createElement("li");c.id=o,c.className="table__item table__block";const r=G("item__name",`${t}`),a=document.createTextNode("  x"),i=G("item__quantity service-quantity",O[o].quantity);i.textContent=O[o].quantity,I(r,[a,i]);const l=G("service-value",`${n}zł`);return l.setAttribute("data-service",o),I(c,[r,l]),c}(n),a=n.getAttribute("data-id");(function(e,t){const n=t.id,o=function(e){return[...M.querySelectorAll("li")].find((t=>t.id===e))}(n);e&&!o?(!function(e){M.insertAdjacentElement("beforeend",e)}(t),W(n)):!e&&o&&(W(n,0),function(e){M.removeChild(e)}(o))})(c,r),F(a),P()}(e)}))}));const O={square:{quantity:1,price:2},windowsStandard:{quantity:1,price:35},windowsLarge:{quantity:1,price:40},microWave:{quantity:1,price:15},refrigerator:{quantity:1,price:40},plate:{quantity:1,price:35},officeChair:{quantity:1,price:20},sofaDry2x:{quantity:1,price:109.99},sofaDry3x:{quantity:1,price:129.99},sofaDry4x:{quantity:1,price:149.99}},N={square:{quantity:1,price:2},windowsStandard:{quantity:0,price:35},windowsLarge:{quantity:0,price:40},microWave:{quantity:0,price:15},refrigerator:{quantity:0,price:40},plate:{quantity:0,price:35},officeChair:{quantity:0,price:20},sofaDry2x:{quantity:0,price:109.99},sofaDry3x:{quantity:0,price:129.99},sofaDry4x:{quantity:0,price:149.99}};function Y(e){const t=J(e),n=function(e){return e.currentTarget.getAttribute("data-type")}(e);!function(e,t){if("plus"===t)O[e].quantity+=1;else if("minus"===t){if(1===O[e].quantity)return;O[e].quantity-=1}}(t,n),function(e){const t=[...document.querySelectorAll(".service-element")].find((t=>t.getAttribute("data-id")===e)),n=null==t?void 0:t.nextElementSibling.querySelector(`[data-name="${e}"]`),o=document.querySelector(".wrap--square").querySelector(`[data-name="${e}"]`);n&&(n.textContent=O[e].quantity),o&&(o.textContent=O[e].quantity,document.querySelector(".square-value-total").textContent=O[e].quantity)}(t),function(e){var t,n;const o=null===(t=document.querySelector(`[data-name="${e}"]`).parentNode)||void 0===t||null===(n=t.parentNode)||void 0===n?void 0:n.querySelector(".control-quantity-btn--minus .icon--minus");1===O[e].quantity?o.style.fill="rgba(\t77, 18, 153, 0.3)":o.style.fill="#4D1299"}(t)}function j(e){const t=J(e);Y(e),F(t),P()}function z(e){Y(e),function(){const e=document.querySelector('[data-service="square"]');N.square.quantity=O.square.quantity,e.textContent=N.square.quantity*N.square.price+"zł"}(),P()}function F(e){const t=document.querySelector(`[data-service="${e}"]`),n=document.querySelector(`#${e} .service-quantity`),o=O[e].price;if(t&&n){const c=W(e);t.textContent=c*o+"zł",n.textContent=c}else W(e,0)}function W(e,t){const n=void 0!==t?t:O[e].quantity;return N[e].quantity=n,n}function P(){const e=Object.keys(N).reduce(((e,t)=>{const n=N[t];return e+n.quantity*n.price}),0);document.querySelector(".total-order-value").textContent=`${e}zł`}function G(e,t){const n=document.createElement("span");return n.className=e,n.textContent=t,n}function I(e,t){t.forEach((t=>{e.appendChild(t)}))}function J(e){var t,n,o,c,r;const a=null===(o=null===(n=null===(t=e.currentTarget)||void 0===t?void 0:t.closest(".wrap--service"))||void 0===n?void 0:n.parentNode.querySelector("label"))||void 0===o?void 0:o.getAttribute("data-id"),i=null===(r=null===(c=e.currentTarget)||void 0===c?void 0:c.closest(".wrap--square"))||void 0===r?void 0:r.getAttribute("data-id");return a||i}function K(e){const t=e.currentTarget;t.classList.toggle("active");!function(e){"take-keys-btn"===e?U.classList.toggle("isHidden"):B.classList.toggle("isHidden")}(t.id),function(){const e=U.classList.contains("isHidden"),t=B.classList.contains("isHidden");e&&t?H.classList.add("isHidden"):H.classList.remove("isHidden")}()}function Q(e){var t,n,o;null===(t=e.openModalBtn)||void 0===t||t.addEventListener("click",(()=>R(e))),null===(n=e.closeModalBtn)||void 0===n||n.addEventListener("click",(t=>{t.stopPropagation(),R(e)})),null===(o=e.backdrop)||void 0===o||o.addEventListener("click",(t=>{t.target===e.backdrop&&R(e)}))}function R(e){document.body.classList.toggle(`${e.name}-modal-open`),e.modal.classList.toggle("backdrop--hidden"),"subscription"===e.name&&D(_.elements)}Q({name:"subscription",openModalBtn:document.querySelector("[data-subscription-modal-open]"),closeModalBtn:document.querySelector("[data-subscription-modal-close]"),modal:document.querySelector("[data-subscription-modal]"),backdrop:document.querySelector(".backdrop--subscr")});Q({name:"support",openModalBtn:document.querySelector("[data-support-modal-open]"),closeModalBtn:document.querySelector("[data-support-modal-close]"),modal:document.querySelector("[data-support-modal]"),backdrop:document.querySelector(".backdrop--support")});const V=document.querySelector("#timepicker");document.querySelector(".icon--clock").addEventListener("click",(()=>{V.focus()}));
//# sourceMappingURL=contacts.853368df.js.map
