!function(){var e="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},t={},l={},i=e.parcelRequireabe7;null==i&&((i=function(e){if(e in t)return t[e].exports;if(e in l){var i=l[e];delete l[e];var s={id:e,exports:{}};return t[e]=s,i.call(s.exports,s,s.exports),s.exports}var n=new Error("Cannot find module '"+e+"'");throw n.code="MODULE_NOT_FOUND",n}).register=function(e,t){l[e]=t},e.parcelRequireabe7=i),i("8Axx7");var s=document.querySelector(".block-wrapper.services-types__list");[{id:1,altText:"Прибирання кімнат",labelText:"Прибирання кімнат"},{id:2,altText:"Прибирання кухні",labelText:"Прибирання кухні"},{id:3,altText:"Прибирання санвузла",labelText:"Прибирання санвузла"},{id:4,altText:"Прибирання та виніс сміття",labelText:"Прибирання та виніс сміття"},{id:5,altText:"Миття вікон",labelText:"Миття вікон"},{id:6,altText:"Усунення водного нальоту",labelText:"Усунення водного нальоту"},{id:7,altText:"Хімчистка диванів",labelText:"Хімчистка диванів"},{id:8,altText:"Миття стін",labelText:"Миття стін"},{id:9,altText:"Миття підлоги",labelText:"Миття підлоги"},{id:10,altText:"Миття посуду",labelText:"Миття посуду"},{id:11,altText:"Усунення жиру та нагару",labelText:"Усунення жиру та нагару"},{id:12,altText:"Пилосос",labelText:"Пилосос"}].forEach((function(e){var t=document.createElement("li");t.className="buildings__item services-types__item";var l=e.id,i=new URL("../../images/services/".concat(l,"@1x.png"),"file:///src/scripts/modules/create-services-list.js");console.log("pngSrc: ",i);var n=new URL("../../images/services/".concat(l,"@1x.webp"),"file:///src/scripts/modules/create-services-list.js");t.innerHTML='\n    <div class="buildings__icon-wrap">\n      <picture class="services__image">\n        <source\n          srcset="'.concat(n," 1x, ").concat(new URL("../../images/services/".concat(l,"@2x.webp"),"file:///src/scripts/modules/create-services-list.js"),' 2x"\n          type="image/webp"\n        />\n        <source\n          srcset="').concat(i," 1x, ").concat(new URL("../../images/services/".concat(l,"@2x.png"),"file:///src/scripts/modules/create-services-list.js"),' 2x"\n          type="image/png"\n        />\n        <img\n          width="100"\n          height="100"\n          src="').concat(i,'"\n          alt="').concat(e.altText,'"\n        />\n      </picture>\n    </div>\n    <h3 class="block__title buildings__text services-types__text">').concat(e.labelText,"</h3>\n  "),s.appendChild(t)})),i("01Swx"),i("cpc1b");var n=document.querySelector(".scroll-to-top-btn");window.addEventListener("scroll",(function(){window.scrollY>=50?n.style.display="flex":n.style.display="none"}),{passive:!0}),n.addEventListener("click",(function(){window.scrollTo({top:0,behavior:"smooth"})})),i("l1uiN"),i("837ni"),i("aatir")}();
//# sourceMappingURL=services.d07efb40.js.map
