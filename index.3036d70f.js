var o="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},n={},e={},s=o.parcelRequireabe7;null==s&&((s=function(o){if(o in n)return n[o].exports;if(o in e){var s=e[o];delete e[o];var t={id:o,exports:{}};return n[o]=t,s.call(t.exports,t,t.exports),t.exports}var c=new Error("Cannot find module '"+o+"'");throw c.code="MODULE_NOT_FOUND",c}).register=function(o,n){e[o]=n},o.parcelRequireabe7=s),s("3SKuk"),s("f8GYc"),s("8F0ol");const t=document.querySelector(".scroll-to-top-btn");window.addEventListener("scroll",(function(){window.scrollY>=50?t.style.display="flex":t.style.display="none"}),{passive:!0}),t.addEventListener("click",(function(){window.scrollTo({top:0,behavior:"smooth"})})),$((function(){const o=document.querySelectorAll(".plus-btn--toolkit"),n=$(".rooms__item"),e=$(".schema--kitchen"),s=$(".schema--room"),t=$(".schema--bath"),c=$(".rooms__schema");function i(o){o.closest(".toolkit__wrapper").querySelector(":first-child").classList.toggle("is-shown")}o.forEach((o=>{o.addEventListener("mouseenter",(()=>{i(o)})),o.addEventListener("mouseleave",(()=>{i(o)}))})),n.on("click",(function(o){!function(o){const i=$(o.target);if(i.hasClass("rooms__item--current"))return;n.each((function(){if($(this).is(i)){!function(o){const n=["rooms__schema--current","rooms__schema--next","rooms__schema--prev"];c.each((function(){const o=$(this);n.forEach((function(n){o.removeClass(n)}))})),"room-1"===o?(e.addClass("rooms__schema--current"),s.addClass("rooms__schema--next"),t.addClass("rooms__schema--prev")):"room-2"===o?(e.addClass("rooms__schema--prev"),s.addClass("rooms__schema--current"),t.addClass("rooms__schema--next")):"room-3"===o&&(e.addClass("rooms__schema--next"),s.addClass("rooms__schema--prev"),t.addClass("rooms__schema--current"))}(i.attr("id")),i.addClass("rooms__item--current")}else $(this).removeClass("rooms__item--current")}))}(o)}))})),$((function(){const o=$(".toggle-question-btn"),n=$(".accordion");function e(o){const n=o.find(".icon--plus"),e=o.find(".icon--minus");n.removeClass("isHidden"),e.addClass("isHidden")}function s(o){const n=o.find(".icon--plus"),e=o.find(".icon--minus");n.toggleClass("isHidden"),e.toggleClass("isHidden")}function t(o){const n=o.find(".accordion__content");o.removeClass("accordion__active"),n.css("max-height","")}o.on("click",(function(){const n=$(this);$(event.target).is(n)&&s(n),o.each((function(){e($(this))}))})),n.each((function(){$(this).find(".accordion__intro").on("click",(function(){!function(c){const i=c.find(".toggle-question-btn");o.each((function(){e($(this))})),function(o){"0px"!==o.find(".accordion__content").css("max-height")?t(o):(n.each((function(){t($(this))})),function(o){const n=o.find(".accordion__content");o.addClass("accordion__active"),n.css("max-height",n[0].scrollHeight+"px")}(o))}(c),s(i)}($(this).closest(".accordion"))}))}))})),s("8purw"),s("iFcwN"),s("9bYoD"),s("bUgNw"),s("cniqe"),s("3gcae"),s("jzGLn");
//# sourceMappingURL=index.3036d70f.js.map
