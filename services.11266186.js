!function(){function e(e){return e&&e.__esModule?e.default:e}var t="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},r={},n={},o=t.parcelRequired7c6;null==o&&((o=function(e){if(e in r)return r[e].exports;if(e in n){var t=n[e];delete n[e];var o={id:e,exports:{}};return r[e]=o,t.call(o.exports,o,o.exports),o.exports}var i=new Error("Cannot find module '"+e+"'");throw i.code="MODULE_NOT_FOUND",i}).register=function(e,t){n[e]=t},t.parcelRequired7c6=o),o.register("kMC0W",(function(e,t){"use strict";Object.defineProperty(e.exports,"__esModule",{value:!0}),e.exports.default=function(e){if(Array.isArray(e))return n.default(e)};var r,n=(r=o("8NIkP"))&&r.__esModule?r:{default:r}})),o.register("8NIkP",(function(e,t){"use strict";Object.defineProperty(e.exports,"__esModule",{value:!0}),e.exports.default=function(e,t){(null==t||t>e.length)&&(t=e.length);for(var r=0,n=new Array(t);r<t;r++)n[r]=e[r];return n}})),o.register("7AJDX",(function(e,t){"use strict";Object.defineProperty(e.exports,"__esModule",{value:!0}),e.exports.default=function(e){if("undefined"!=typeof Symbol&&null!=e[Symbol.iterator]||null!=e["@@iterator"])return Array.from(e)}})),o.register("8CtQK",(function(e,t){"use strict";Object.defineProperty(e.exports,"__esModule",{value:!0}),e.exports.default=function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}})),o.register("auk6i",(function(e,t){"use strict";Object.defineProperty(e.exports,"__esModule",{value:!0}),e.exports.default=function(e,t){if(!e)return;if("string"==typeof e)return n.default(e,t);var r=Object.prototype.toString.call(e).slice(8,-1);"Object"===r&&e.constructor&&(r=e.constructor.name);if("Map"===r||"Set"===r)return Array.from(r);if("Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r))return n.default(e,t)};var r,n=(r=o("8NIkP"))&&r.__esModule?r:{default:r}}));var i={};Object.defineProperty(i,"__esModule",{value:!0}),i.default=function(e){return l.default(e)||u.default(e)||d.default(e)||a.default()};var l=c(o("kMC0W")),u=c(o("7AJDX")),a=c(o("8CtQK")),d=c(o("auk6i"));function c(e){return e&&e.__esModule?e:{default:e}}function f(t){var r=document.querySelectorAll(".dynamic-link");e(i)(r).forEach((function(e){return e.href=t}))}function s(e){var t=document.querySelector(e);t&&t.classList.add("nav__link--current")}document.addEventListener("DOMContentLoaded",(function(){var e,t=window.location.pathname;"/"===t||"/index.html"===t?(s(".nav__link"),f("index.html#order-cleaning-block")):"/office.html"===t?(s(".nav__list .nav__item:nth-child(2) .nav__link"),f("office.html#office-calc-block")):"/after-repair.html"===t?(e=".add-services-list__item:nth-child(n+3)",document.querySelectorAll(e).forEach((function(e){return e.classList.add("isHidden")}))):"/calc-order.html"===t&&function(e){document.querySelectorAll(e).forEach((function(e){return e.classList.add("block--white")}))}(".block")}))}();
//# sourceMappingURL=services.11266186.js.map
