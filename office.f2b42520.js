!function(){var n="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},i={},o={},e=n.parcelRequireabe7;null==e&&((e=function(n){if(n in i)return i[n].exports;if(n in o){var e=o[n];delete o[n];var t={id:n,exports:{}};return i[n]=t,e.call(t.exports,t,t.exports),t.exports}var c=new Error("Cannot find module '"+n+"'");throw c.code="MODULE_NOT_FOUND",c}).register=function(n,i){o[n]=i},n.parcelRequireabe7=e),e("8Axx7"),e("01Swx"),e("cpc1b");var t=document.querySelector(".scroll-to-top-btn");window.addEventListener("scroll",(function(){window.scrollY>=50?t.style.display="flex":t.style.display="none"}),{passive:!0}),t.addEventListener("click",(function(){window.scrollTo({top:0,behavior:"smooth"})})),$((function(){var n=$(".toggle-question-btn"),i=$(".accordion");function o(n){var i=n.find(".icon--plus"),o=n.find(".icon--minus");i.removeClass("isHidden"),o.addClass("isHidden")}function e(n){var i=n.find(".icon--plus"),o=n.find(".icon--minus");i.toggleClass("isHidden"),o.toggleClass("isHidden")}function t(n){var i=n.find(".accordion__content");n.removeClass("accordion__active"),i.css("max-height","")}n.on("click",(function(){var i=$(this);$(event.target).is(i)&&e(i),n.each((function(){o($(this))}))})),i.each((function(){$(this).find(".accordion__intro").on("click",(function(){var c,s;c=$(this).closest(".accordion"),s=c.find(".toggle-question-btn"),n.each((function(){o($(this))})),function(n){"0px"!==n.find(".accordion__content").css("max-height")?t(n):(i.each((function(){t($(this))})),function(n){var i=n.find(".accordion__content");n.addClass("accordion__active"),i.css("max-height",i[0].scrollHeight+"px")}(n))}(c),e(s)}))}))})),e("l1uiN"),e("837ni"),e("lhbyQ"),e("9ovrx"),e("adY40"),e("dsyzI"),e("7anda"),e("aatir")}();
//# sourceMappingURL=office.f2b42520.js.map
