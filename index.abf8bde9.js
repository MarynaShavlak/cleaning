var e="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},o={},t={},n=e.parcelRequired7c6;null==n&&((n=function(e){if(e in o)return o[e].exports;if(e in t){var n=t[e];delete t[e];var c={id:e,exports:{}};return o[e]=c,n.call(c.exports,c,c.exports),c.exports}var r=new Error("Cannot find module '"+e+"'");throw r.code="MODULE_NOT_FOUND",r}).register=function(e,o){t[e]=o},e.parcelRequired7c6=n),n("cKJBV"),n("9nuA4");const c=document.querySelectorAll(".plus-btn--toolkit"),r=document.querySelectorAll(".rooms__item"),l=document.querySelector(".schema--kitchen"),s=document.querySelector(".schema--room"),i=document.querySelector(".schema--bath");function a(e){e.closest(".toolkit__wrapper").querySelector(":first-child").classList.toggle("is-shown")}c.forEach((e=>{e.addEventListener("mouseenter",(()=>{a(e)})),e.addEventListener("mouseleave",(()=>{a(e)}))})),r.forEach((e=>{e.addEventListener("click",(e=>{!function(e){const o=e.target;if(o.classList.contains("rooms__item--current"))return;r.forEach((e=>{if(e===o){!function(e){l.style.display="room-1"===e?"block":"none",s.style.display="room-2"===e?"block":"none",i.style.display="room-3"===e?"block":"none"}(e.id),e.classList.add("rooms__item--current")}else e.classList.remove("rooms__item--current")}))}(e)}))}));const u=document.querySelectorAll(".toggle-question-btn"),d=document.querySelectorAll(".accordion");function y(e){const o=e.querySelector(".icon--plus"),t=e.querySelector(".icon--minus");"none"===o.style.display?(o.style.display="block",t.style.display="none"):(o.style.display="none",t.style.display="block")}function m(e){const o=e.querySelector(".accordion__content");e.classList.remove("accordion__active"),o.style.maxHeight=null}u.forEach((e=>{e.addEventListener("click",(()=>{!function(e){console.log("btn: ",e);e.closest(".questions__item");y(e)}(e)}))})),d.forEach((e=>{e.querySelector(".accordion__intro").addEventListener("click",(()=>{const o=e.querySelector(".toggle-question-btn");var t;(t=e).querySelector(".accordion__content").style.maxHeight?(t.querySelector(".toggle-question-btn"),m(t)):(d.forEach((e=>{e.querySelector(".toggle-question-btn"),m(e)})),function(e){const o=e.querySelector(".accordion__content");e.classList.add("accordion__active"),o.style.maxHeight=o.scrollHeight+"px"}(t)),y(o)}))})),n("gWa4t"),n("jdLBi"),n("2in5s"),n("hxcYJ"),n("psiqy"),n("eXy63");
//# sourceMappingURL=index.abf8bde9.js.map