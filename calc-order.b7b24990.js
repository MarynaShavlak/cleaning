var t="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},e={},n={},o=t.parcelRequired7c6;null==o&&((o=function(t){if(t in e)return e[t].exports;if(t in n){var o=n[t];delete n[t];var c={id:t,exports:{}};return e[t]=c,o.call(c.exports,c,c.exports),c.exports}var r=new Error("Cannot find module '"+t+"'");throw r.code="MODULE_NOT_FOUND",r}).register=function(t,e){n[t]=e},t.parcelRequired7c6=o),o.register("hxcYJ",(function(t,e){var n=o("cKJBV");const c=document.querySelector(".calendar"),r=document.querySelector(".icon--calendar"),i=document.querySelector(".calendar__body"),a=document.querySelector(".calendar__monthYear"),u=document.querySelector(".calendar__prevMonth-btn"),l=document.querySelector(".calendar__nextMonth-btn"),s=document.querySelector('[name="userDate"]');let d=new Date,f=new Date,m=function(){const t=new Date,e=t.getDate().toString().padStart(2,"0"),n=(t.getMonth()+1).toString().padStart(2,"0"),o=t.getFullYear();return`${e}/${n}/${o}`}();function g(t){const e=t.getFullYear();return{month:t.getMonth(),year:e}}function y(t,e,n){return{formattedDay:t<10?`0${t}`:t,formattedMonth:0===e?12:e,formattedYear:0===e?n-1:n}}function h(t,e,n,o){t.classList.add(n),e&&t.classList.add("disabled-day"),"current-month"===n&&o&&t.classList.add("order-day")}function p(t,e,n,o,c){const r=document.createElement("td");return function(t,e){t.textContent=e}(r,t),function(t,e,n,o){t.dataset.date=`${e}/${n<9?"0":""}${n+1}/${o}`}(r,t,e,n),h(r,o,c),function(t,e){e||t.addEventListener("click",E)}(r,o),r}function v(t){const{year:e,month:n}=g(f),{formattedDay:o,formattedMonth:c,formattedYear:r}=y(t,n,e),i=new Date;return p(o,c-1,r,q(new Date(r,c-1,t),i),"previous-month")}function D(t){const{formattedDay:e}=y(t),{year:n,month:o}=g(f),c=new Date,r=new Date(n,o,t),i=q(r,c),a=p(e,o,n,i,"current-month"),u=r.getFullYear()===d.getFullYear(),l=r.getMonth()===d.getMonth(),s=t===d.getDate();return h(a,i,"current-month",u&&l&&s),a}function L(t){const{year:e,month:n}=g(f),{formattedDay:o}=y(t,n,e),c=11===n?1:n+2,r=11===n?e+1:e,i=new Date,a=new Date(r,c-1,t),u=q(a,i),l=a.getFullYear()===d.getFullYear()&&a.getMonth()===d.getMonth()&&t===d.getDate(),s=p(o,c-1,r,u,"next-month");return h(s,u,"next-month",l),s}function S(){return document.createElement("tr")}function w(t,e){t.appendChild(e)}function _(t){i.innerHTML="";const{year:e,month:n}=g(t);!function(t){const e=f.toLocaleDateString("uk-UA",{month:"long"}),n=e.charAt(0).toUpperCase()+e.slice(1);a.textContent=`${n} ${t}`}(e);const{firstDayOfMonth:o,lastDayOfMonthObj:c}=function(t,e){return{firstDayOfMonth:new Date(t,e,1),lastDayOfMonthObj:new Date(t,e+1,0)}}(e,n),r=function(t){let e=t.getDay();return 0===e&&(e=7),e}(o),u=function(t,e){return new Date(t,e,0).getDate()}(e,n);let l=1,s=S();for(let t=r-1;t>=1;t--){w(s,v(u-t+1))}for(;l<=c.getDate();){w(s,D(l));7===s.children.length&&(w(i,s),s=S()),l++}if(s.children.length>0){for(let t=1;s.children.length<7;t++){w(s,L(t))}w(i,s)}}function q(t,e){return t<e}function E(t){const e=function(t){const e=t.split("/"),[n,o,c]=e;return`${o}/${n}/${c}`}(t.target.dataset.date),o=(new Date).toLocaleDateString("en-US",{year:"numeric",month:"2-digit",day:"2-digit"}),c=new Date(e);d=c;if(c-new Date(o)>=0){const t=function(t){const e=t.split("/"),[n,o,c]=e;return`${o}/${n}/${c}`}(e);m=t,k(),(0,n.toggleIconActiveStyle)(r),$()}}function k(){s.value=`${m}`}function M(t){f.setMonth(f.getMonth()+t),_(f)}function $(){c.classList.toggle("isHidden")}s.addEventListener("click",(()=>{$(),(0,n.toggleIconActiveStyle)(r),f=new Date(d);const t=!c.classList.contains("isHidden");_(d),t&&k()})),r.addEventListener("click",(t=>{$(),f=new Date(d),_(d),(0,n.toggleIconActiveStyle)(t.target);!c.classList.contains("isHidden")&&k()})),null==u||u.addEventListener("click",(()=>{M(-1)})),null==l||l.addEventListener("click",(()=>{M(1)})),_(d)})),o.register("psiqy",(function(t,e){var n=o("cKJBV");const c={hours:"20",minutes:"00"},r=document.querySelector(".time-picker-wrap"),i=document.querySelector(".icon--clock"),a=document.querySelector(".tablo--hours"),u=document.querySelector(".tablo--minutes"),l=document.querySelector(".time-picker__hours"),s=document.querySelector(".time-picker__minutes"),d=document.querySelector(".time-picker__btn"),f=document.querySelector('[name="userTime"]');function m(){f.value=`${c.hours} : ${c.minutes}`}function g(t,e){const n=t.target;if(!function(t){return t.classList.contains("number")&&!t.classList.contains("active")}(n))return;const o=p(e);!function(t,e){[...e].map((e=>e===t?function(t){t.classList.add("active")}(e):function(t){t.classList.remove("active")}(e)))}(n,document.querySelectorAll(`.${o}`));const r=document.querySelector(e),i=n.dataset.id;!function(t,e){t.innerHTML=e}(r,i),function(t,e){const n=p(t);c[n]=e,m()}(e,i)}function y(t,e){!t.classList.contains("isHidden")||(t.classList.remove("isHidden"),e.classList.add("isHidden"))}function h(){r.classList.toggle("isHidden")}function p(t){return t.split("__")[1]}f.addEventListener("click",(()=>{(0,n.toggleIconActiveStyle)(i),h();!r.classList.contains("isHidden")&&m()})),a.addEventListener("click",(t=>g(t,".time-picker__hours"))),u.addEventListener("click",(t=>g(t,".time-picker__minutes"))),s.addEventListener("click",(()=>y(u,a))),l.addEventListener("click",(()=>y(a,u))),i.addEventListener("click",(t=>{h(),(0,n.toggleIconActiveStyle)(t.target)})),d.addEventListener("click",(()=>{h(),(0,n.toggleIconActiveStyle)(i)}))})),o.register("eXy63",(function(t,e){const n=document.querySelector(".backdrop--subscr"),o=document.querySelectorAll(".form__input--location");function c(t){const e=t.target;n&&(""!==e.value.trim()&&document.activeElement===e?n.style.overflow="hidden":n.style.overflow="auto")}window.initMap||(window.initMap=function(){o.forEach((function(t){const e=new google.maps.places.Autocomplete(t);e.addListener("place_changed",(()=>{e.getPlace()}))}))}),o.forEach((function(t){t.addEventListener("input",c),t.addEventListener("focus",c),t.addEventListener("blur",c),c({target:t})}))}));
//# sourceMappingURL=calc-order.b7b24990.js.map