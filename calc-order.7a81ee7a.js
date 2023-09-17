function _arrayLikeToArray(e,t){(null==t||t>e.length)&&(t=e.length);for(var r=0,n=new Array(t);r<t;r++)n[r]=e[r];return n}function _arrayWithoutHoles(e){if(Array.isArray(e))return _arrayLikeToArray(e)}function _iterableToArray(e){if("undefined"!=typeof Symbol&&null!=e[Symbol.iterator]||null!=e["@@iterator"])return Array.from(e)}function _nonIterableSpread(){throw new TypeError("Invalid attempt to spread non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}function _toConsumableArray(e){return _arrayWithoutHoles(e)||_iterableToArray(e)||_unsupportedIterableToArray(e)||_nonIterableSpread()}function _unsupportedIterableToArray(e,t){if(e){if("string"==typeof e)return _arrayLikeToArray(e,t);var r=Object.prototype.toString.call(e).slice(8,-1);return"Object"===r&&e.constructor&&(r=e.constructor.name),"Map"===r||"Set"===r?Array.from(r):"Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)?_arrayLikeToArray(e,t):void 0}}function updateDynamicLinks(e){_toConsumableArray(document.querySelectorAll(".dynamic-link")).forEach((function(t){return t.href=e}))}function hideSelectedItems(e){document.querySelectorAll(e).forEach((function(e){return e.classList.add("isHidden")}))}function addWhiteBackground(e){document.querySelectorAll(e).forEach((function(e){return e.classList.add("block--white")}))}function setCurrentNavLink(e){var t=document.querySelector(e);t&&t.classList.add("nav__link--current")}function modifyContactPage(){document.querySelector(".connection").classList.remove("section--no-padding-top"),document.querySelector(".connection--second-block").classList.add("block-with-image"),document.querySelector("main").classList.add("section--dark-background")}document.addEventListener("DOMContentLoaded",(function(){var e=window.location.pathname;"/"===e||"/index.html"===e?(setCurrentNavLink(".nav__link"),updateDynamicLinks("index.html#order-cleaning-block")):"/office.html"===e?(setCurrentNavLink(".nav__list .nav__item:nth-child(2) .nav__link"),updateDynamicLinks("office.html#office-calc-block")):"/after-repair.html"===e?hideSelectedItems(".add-services-list__item:nth-child(n+3)"):"/calc-order.html"===e?addWhiteBackground(".block"):"/contacts.html"===e&&modifyContactPage()}));
//# sourceMappingURL=calc-order.7a81ee7a.js.map
