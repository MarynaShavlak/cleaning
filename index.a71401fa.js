!function(){var e="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},o={},t={},n=e.parcelRequired7c6;null==n&&((n=function(e){if(e in o)return o[e].exports;if(e in t){var n=t[e];delete t[e];var c={id:e,exports:{}};return o[e]=c,n.call(c.exports,c,c.exports),c.exports}var r=new Error("Cannot find module '"+e+"'");throw r.code="MODULE_NOT_FOUND",r}).register=function(e,o){t[e]=o},e.parcelRequired7c6=n),n("6bPr4"),n("lEcfz"),n("aeLMV"),n("kv7rp");var c=document.querySelectorAll(".plus-btn--toolkit"),r=document.querySelectorAll(".rooms__item"),i=document.querySelector(".schema--kitchen"),l=document.querySelector(".schema--room"),s=document.querySelector(".schema--bath");function a(e){e.closest(".toolkit__wrapper").querySelector(":first-child").classList.toggle("is-shown")}c.forEach((function(e){e.addEventListener("mouseenter",(function(){a(e)})),e.addEventListener("mouseleave",(function(){a(e)}))})),r.forEach((function(e){e.addEventListener("click",(function(e){!function(e){var o=e.target;if(o.classList.contains("rooms__item--current"))return;r.forEach((function(e){e===o?(!function(e){i.style.display="room-1"===e?"block":"none",l.style.display="room-2"===e?"block":"none",s.style.display="room-3"===e?"block":"none"}(e.id),e.classList.add("rooms__item--current")):e.classList.remove("rooms__item--current")}))}(e)}))}));var u=document.querySelectorAll(".toggle-question-btn"),d=document.querySelectorAll(".accordion");function f(e){var o=e.querySelector(".icon--plus"),t=e.querySelector(".icon--minus");o.classList.remove("isHidden"),t.classList.add("isHidden")}function m(e){var o=e.querySelector(".icon--plus"),t=e.querySelector(".icon--minus");o.classList.toggle("isHidden"),t.classList.toggle("isHidden")}function y(e){var o=e.querySelector(".accordion__content");e.classList.remove("accordion__active"),o.style.maxHeight=null}u.forEach((function(e){e.addEventListener("click",(function(o){o.target===e&&m(e),u.forEach(f)}))})),d.forEach((function(e){e.querySelector(".accordion__intro").addEventListener("click",(function(){!function(e){var o=e.querySelector(".toggle-question-btn");u.forEach(f),t=e,t.querySelector(".accordion__content").style.maxHeight?y(t):(d.forEach((function(e){y(e)})),function(e){var o=e.querySelector(".accordion__content");e.classList.add("accordion__active"),o.style.maxHeight=o.scrollHeight+"px"}(t)),m(o);var t}(e)}))})),n("ianEp"),n("eza0P"),n("1FpXB"),n("cYklY"),n("6Zya5"),n("lXOyw"),n("40cey")}();
//# sourceMappingURL=index.a71401fa.js.map
