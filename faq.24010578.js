!function(){var e="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},n={},o={},t=e.parcelRequired7c6;null==t&&((t=function(e){if(e in n)return n[e].exports;if(e in o){var t=o[e];delete o[e];var c={id:e,exports:{}};return n[e]=c,t.call(c.exports,c,c.exports),c.exports}var r=new Error("Cannot find module '"+e+"'");throw r.code="MODULE_NOT_FOUND",r}).register=function(e,n){o[e]=n},e.parcelRequired7c6=t),t("6bPr4"),t("lEcfz");var c=document.querySelectorAll(".toggle-question-btn"),r=document.querySelectorAll(".accordion");function i(e){var n=e.querySelector(".icon--plus"),o=e.querySelector(".icon--minus");n.style.display="block",o.style.display="none"}function l(e){var n=e.querySelector(".icon--plus"),o=e.querySelector(".icon--minus");n.style.display="none"===n.style.display?"block":"none",o.style.display="none"===o.style.display?"block":"none"}function a(e){var n=e.querySelector(".accordion__content");e.classList.remove("accordion__active"),n.style.maxHeight=null}c.forEach((function(e){e.addEventListener("click",(function(n){c.forEach(i),n.target===e&&l(e)}))})),r.forEach((function(e){e.querySelector(".accordion__intro").addEventListener("click",(function(){!function(e){var n=e.querySelector(".toggle-question-btn");o=e,o.querySelector(".accordion__content").style.maxHeight?a(o):(r.forEach((function(e){a(e)})),function(e){var n=e.querySelector(".accordion__content");e.classList.add("accordion__active"),n.style.maxHeight=n.scrollHeight+"px"}(o)),c.forEach(i),l(n);var o}(e)}))})),t("ianEp"),t("eza0P")}();
//# sourceMappingURL=faq.24010578.js.map
