!function(){var e="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},o={},t={},n=e.parcelRequired7c6;null==n&&((n=function(e){if(e in o)return o[e].exports;if(e in t){var n=t[e];delete t[e];var c={id:e,exports:{}};return o[e]=c,n.call(c.exports,c,c.exports),c.exports}var r=new Error("Cannot find module '"+e+"'");throw r.code="MODULE_NOT_FOUND",r}).register=function(e,o){t[e]=o},e.parcelRequired7c6=n),n("6bPr4"),n("lEcfz");var c=document.querySelectorAll(".plus-btn--toolkit"),r=document.querySelectorAll(".rooms__item"),l=document.querySelector(".schema--kitchen"),i=document.querySelector(".schema--room"),s=document.querySelector(".schema--bath");function u(e){e.closest(".toolkit__wrapper").querySelector(":first-child").classList.toggle("is-shown")}c.forEach((function(e){e.addEventListener("mouseenter",(function(){u(e)})),e.addEventListener("mouseleave",(function(){u(e)}))})),r.forEach((function(e){e.addEventListener("click",(function(e){!function(e){var o=e.target;if(o.classList.contains("rooms__item--current"))return;r.forEach((function(e){e===o?(!function(e){l.style.display="room-1"===e?"block":"none",i.style.display="room-2"===e?"block":"none",s.style.display="room-3"===e?"block":"none"}(e.id),e.classList.add("rooms__item--current")):e.classList.remove("rooms__item--current")}))}(e)}))}));var a=document.querySelectorAll(".toggle-question-btn"),d=document.querySelectorAll(".accordion");function f(e){var o=e.querySelector(".icon--plus"),t=e.querySelector(".icon--minus");"none"===o.style.display?(o.style.display="block",t.style.display="none"):(o.style.display="none",t.style.display="block")}function y(e){var o=e.querySelector(".accordion__content");e.classList.remove("accordion__active"),o.style.maxHeight=null}a.forEach((function(e){e.addEventListener("click",(function(){!function(e){console.log("btn: ",e);e.closest(".questions__item");f(e)}(e)}))})),d.forEach((function(e){e.querySelector(".accordion__intro").addEventListener("click",(function(){var o,t=e.querySelector(".toggle-question-btn");(o=e).querySelector(".accordion__content").style.maxHeight?(o.querySelector(".toggle-question-btn"),y(o)):(d.forEach((function(e){e.querySelector(".toggle-question-btn"),y(e)})),function(e){var o=e.querySelector(".accordion__content");e.classList.add("accordion__active"),o.style.maxHeight=o.scrollHeight+"px"}(o)),f(t)}))})),n("ianEp"),n("eza0P"),n("1FpXB"),n("cYklY"),n("6Zya5"),n("lXOyw")}();
//# sourceMappingURL=index.f2136e12.js.map