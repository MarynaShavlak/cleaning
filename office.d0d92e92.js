!function(){var e="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},o={},n={},t=e.parcelRequired7c6;null==t&&((t=function(e){if(e in o)return o[e].exports;if(e in n){var t=n[e];delete n[e];var c={id:e,exports:{}};return o[e]=c,t.call(c.exports,c,c.exports),c.exports}var r=new Error("Cannot find module '"+e+"'");throw r.code="MODULE_NOT_FOUND",r}).register=function(e,o){n[e]=o},e.parcelRequired7c6=t),t("6bPr4"),t("lEcfz"),t("aeLMV"),t("kv7rp");var c=document.querySelectorAll(".toggle-question-btn"),r=document.querySelectorAll(".accordion");function i(e){var o=e.querySelector(".icon--plus"),n=e.querySelector(".icon--minus");o.classList.remove("isHidden"),n.classList.add("isHidden")}function l(e){var o=e.querySelector(".icon--plus"),n=e.querySelector(".icon--minus");o.classList.toggle("isHidden"),n.classList.toggle("isHidden")}function a(e){var o=e.querySelector(".accordion__content");e.classList.remove("accordion__active"),o.style.maxHeight=null}c.forEach((function(e){e.addEventListener("click",(function(o){o.target===e&&l(e),c.forEach(i)}))})),r.forEach((function(e){e.querySelector(".accordion__intro").addEventListener("click",(function(){!function(e){var o=e.querySelector(".toggle-question-btn");c.forEach(i),n=e,n.querySelector(".accordion__content").style.maxHeight?a(n):(r.forEach((function(e){a(e)})),function(e){var o=e.querySelector(".accordion__content");e.classList.add("accordion__active"),o.style.maxHeight=o.scrollHeight+"px"}(n)),l(o);var n}(e)}))})),t("ianEp"),t("eza0P"),t("cYklY"),t("6Zya5"),t("lXOyw"),t("j9tYZ"),t("2u430"),t("40cey")}();
//# sourceMappingURL=office.d0d92e92.js.map
