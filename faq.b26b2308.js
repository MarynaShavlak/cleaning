!function(){var e="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},o={},n={},c=e.parcelRequired7c6;null==c&&((c=function(e){if(e in o)return o[e].exports;if(e in n){var c=n[e];delete n[e];var t={id:e,exports:{}};return o[e]=t,c.call(t.exports,t,t.exports),t.exports}var r=new Error("Cannot find module '"+e+"'");throw r.code="MODULE_NOT_FOUND",r}).register=function(e,o){n[e]=o},e.parcelRequired7c6=c),c("6bPr4"),c("lEcfz"),c("aeLMV"),c("kv7rp");var t=document.querySelectorAll(".toggle-question-btn"),r=document.querySelectorAll(".accordion");function i(e){var o=e.querySelector(".icon--plus");console.log("plusIcon: ",o);var n=e.querySelector(".icon--minus");console.log("minusIcon: ",n),o.classList.toggle("isHidden"),n.classList.toggle("isHidden"),console.log("ПІСЛЯ ТОГЛ plusIcon: ",o),console.log(" ПІСЛЯ ТОГЛ minusIcon: ",n)}function l(e){var o=e.querySelector(".accordion__content");e.classList.remove("accordion__active"),o.style.maxHeight=null}t.forEach((function(e){e.addEventListener("click",(function(o){o.target===e&&i(e)}))})),r.forEach((function(e){e.querySelector(".accordion__intro").addEventListener("click",(function(){!function(e){var o=e.querySelector(".toggle-question-btn");console.log("btn : ",o),n=e,n.querySelector(".accordion__content").style.maxHeight?l(n):(r.forEach((function(e){l(e)})),function(e){var o=e.querySelector(".accordion__content");e.classList.add("accordion__active"),o.style.maxHeight=o.scrollHeight+"px"}(n)),i(o);var n}(e)}))})),c("ianEp"),c("eza0P"),c("40cey")}();
//# sourceMappingURL=faq.b26b2308.js.map
