!function(){var e="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},o={},n={},t=e.parcelRequireabe7;null==t&&((t=function(e){if(e in o)return o[e].exports;if(e in n){var t=n[e];delete n[e];var i={id:e,exports:{}};return o[e]=i,t.call(i.exports,i,i.exports),i.exports}var r=new Error("Cannot find module '"+e+"'");throw r.code="MODULE_NOT_FOUND",r}).register=function(e,o){n[e]=o},e.parcelRequireabe7=t),t("8Axx7"),t("01Swx"),t("cpc1b");var i=document.querySelector(".scroll-to-top-btn");window.addEventListener("scroll",(function(){window.scrollY>=50?i.style.display="flex":i.style.display="none"}),{passive:!0}),i.addEventListener("click",(function(){window.scrollTo({top:0,behavior:"smooth"})}));var r=document.querySelectorAll(".toggle-question-btn"),c=document.querySelectorAll(".accordion");function l(e){var o=e.querySelector(".icon--plus"),n=e.querySelector(".icon--minus");o.classList.remove("isHidden"),n.classList.add("isHidden")}function a(e){var o=e.querySelector(".icon--plus"),n=e.querySelector(".icon--minus");o.classList.toggle("isHidden"),n.classList.toggle("isHidden")}function s(e){var o=e.querySelector(".accordion__content");e.classList.remove("accordion__active"),o.style.maxHeight=null}r.forEach((function(e){e.addEventListener("click",(function(o){o.target===e&&a(e),r.forEach(l)}))})),c.forEach((function(e){e.querySelector(".accordion__intro").addEventListener("click",(function(){!function(e){var o=e.querySelector(".toggle-question-btn");r.forEach(l),n=e,n.querySelector(".accordion__content").style.maxHeight?s(n):(c.forEach((function(e){s(e)})),function(e){var o=e.querySelector(".accordion__content");e.classList.add("accordion__active"),o.style.maxHeight=o.scrollHeight+"px"}(n)),a(o);var n}(e)}))})),t("l1uiN"),t("837ni"),t("aatir")}();
//# sourceMappingURL=faq.1e778e43.js.map
