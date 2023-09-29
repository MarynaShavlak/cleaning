!function(){function e(e){return e&&e.__esModule?e.default:e}function t(e,t,n,r){Object.defineProperty(e,t,{get:n,set:r,enumerable:!0,configurable:!0})}var n="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},r={},a={},o=n.parcelRequired7c6;null==o&&((o=function(e){if(e in r)return r[e].exports;if(e in a){var t=a[e];delete a[e];var n={id:e,exports:{}};return r[e]=n,t.call(n.exports,n,n.exports),n.exports}var o=new Error("Cannot find module '"+e+"'");throw o.code="MODULE_NOT_FOUND",o}).register=function(e,t){a[e]=t},n.parcelRequired7c6=o),o.register("cYklY",(function(e,t){var n=o("6bPr4"),r=o("5e53d"),a=o("f8kn7");document.querySelectorAll(".calendar").forEach((function(e){var t=e.parentElement.previousElementSibling.querySelector('[name="userDate"]'),o=e.parentElement.previousElementSibling.querySelector(".icon--calendar"),i=e.parentElement.querySelector(".work-shedule");!function(e,t,o,i,c,u,l){var s=e.querySelector(".calendar__body"),d=e.querySelector(".calendar__monthYear"),f=e.querySelector(".calendar__prevMonth-btn"),m=e.querySelector(".calendar__nextMonth-btn");function v(e,t){e.textContent=t}function g(e,t){var n=t.day,r=t.month,a=t.year;e.dataset.date="".concat(n,"/").concat(r<9?"0":"").concat(r+1,"/").concat(a)}function p(e,t){var n=t.monthType,r=t.isCellSelectedDay;t.isDisabledDate&&e.classList.add("disabled-day"),"current-month"===n&&r&&e.classList.add("order-day"),e.classList.add(n)}function y(e,t){t||e.addEventListener("click",E)}function h(e){var t=e.day,n=e.month,r=e.year,a=e.isDisabledDate,o=e.monthType,i=e.isCellSelectedDay,c=document.createElement("td"),u={monthType:o,isCellSelectedDay:i,isDisabledDate:a};return v(c,t),g(c,{day:t,month:n,year:r}),y(c,a),p(c,u),c}function D(e,t){var n,a=(0,r.getCurrentYearAndMonth)(u),o=a.year,i=a.month,l=new Date;if("previous-month"===t){var s=(0,r.formatDateInfo)(e,i,o),d=s.formattedDay,f=s.formattedMonth,m=s.formattedYear;n=new Date(m,f-1,d)}else if("current-month"===t){var v=(0,r.formatDateInfo)(e).formattedDay;n=new Date(o,i,v)}else if("next-month"===t){var g=(0,r.formatDateInfo)(e,i,o).formattedDay;n=new Date(11===i?o+1:o,11===i?0:i+1,g)}var p=(0,r.isDateBeforeToday)(n,l),y=S(n,c,e);return h({day:String(n.getDate()).padStart(2,"0"),month:n.getMonth(),year:n.getFullYear(),isDisabledDate:p,monthType:t,isCellSelectedDay:y})}function S(e,t,n){var r=e.getFullYear()===t.getFullYear(),a=e.getMonth()===t.getMonth(),o=n===t.getDate();return r&&a&&o}function b(e){var t=u.toLocaleDateString("uk-UA",{month:"long"}),n=t.charAt(0).toUpperCase()+t.slice(1);d.textContent="".concat(n," ").concat(e)}function L(e){k();var t=(0,r.getCurrentYearAndMonth)(e),a=t.year,o=t.month;b(a);for(var i=(0,r.getMonthBoundaryDates)(a,o),c=i.firstDayOfMonth,u=i.lastDayOfMonthObj,l=(0,r.calculateStartDay)(c),d=(0,r.getLastDayOfPrevMonth)(a,o),f=1,m=q(),v=l-1;v>=1;v--){var g=D(d-v+1,"previous-month");(0,n.appendElement)(m,g)}for(;f<=u.getDate();){var p=D(f,"current-month");(0,n.appendElement)(m,p),7===m.children.length&&((0,n.appendElement)(s,m),m=q()),f++}if(m.children.length>0){for(var y=1;m.children.length<7;y++){var h=D(y,"next-month");(0,n.appendElement)(m,h)}(0,n.appendElement)(s,m)}}function E(e){var i=(0,r.convertDateFormat)(e.target.dataset.date),u=(new Date).toLocaleDateString("en-US",{year:"numeric",month:"2-digit",day:"2-digit"}),s=new Date(i);if(c=s,s-new Date(u)>=0){var d=(0,r.reverseConvertDateFormat)(i);l=d,A(t).value="",(0,a.resetLocalStorage)("selectedTimeObj"),x(),(0,n.toggleIconActiveStyle)(o),w(),M()}}function x(){t.value="".concat(l)}function k(){s.innerHTML=""}function _(e){u.setMonth(u.getMonth()+e),L(u)}function w(){e.classList.toggle("isHidden")}function M(){i.classList.toggle("isHidden")}function q(){return document.createElement("tr")}function A(e){return e.closest("li").nextElementSibling.querySelector('[name="userTime"]')}t.addEventListener("click",(function(){w(),M(),(0,n.toggleIconActiveStyle)(o),u=new Date(c);var t=!e.classList.contains("isHidden");L(c),t&&x()})),t.addEventListener("blur",(function(e){var n=(0,r.extractDate)(e.target.value);t.value=n})),o.addEventListener("click",(function(t){w(),M(),u=new Date(c),L(c),(0,n.toggleIconActiveStyle)(t.target),!e.classList.contains("isHidden")&&x()})),null==f||f.addEventListener("click",(function(){_(-1)})),null==m||m.addEventListener("click",(function(){_(1)})),L(c)}(e,t,o,i,new Date,new Date,(0,r.getCurrentDateAsString)())}))})),o.register("5e53d",(function(n,r){t(n.exports,"getCurrentDateAsString",(function(){return i})),t(n.exports,"extractDate",(function(){return c})),t(n.exports,"isDateBeforeToday",(function(){return u})),t(n.exports,"convertDateFormat",(function(){return l})),t(n.exports,"reverseConvertDateFormat",(function(){return s})),t(n.exports,"calculateStartDay",(function(){return d})),t(n.exports,"getLastDayOfPrevMonth",(function(){return f})),t(n.exports,"getCurrentYearAndMonth",(function(){return m})),t(n.exports,"getMonthBoundaryDates",(function(){return v})),t(n.exports,"formatDateInfo",(function(){return g})),t(n.exports,"parseDateStringToDate",(function(){return p})),t(n.exports,"getDayNameFromDate",(function(){return y}));var a=o("1t1Wn");function i(){var e=new Date,t=e.getDate().toString().padStart(2,"0"),n=(e.getMonth()+1).toString().padStart(2,"0"),r=e.getFullYear();return"".concat(t,"/").concat(n,"/").concat(r)}function c(e){var t=e.trim().match(/\d{2}\/\d{2}\/\d{4}/);return t?t[0]:null}function u(e,t){return e<t}function l(t){var n=t.split("/"),r=e(a)(n,3),o=r[0],i=r[1],c=r[2];return"".concat(i,"/").concat(o,"/").concat(c)}function s(t){var n=t.split("/"),r=e(a)(n,3),o=r[0],i=r[1],c=r[2];return"".concat(i,"/").concat(o,"/").concat(c)}function d(e){var t=e.getDay();return 0===t&&(t=7),t}function f(e,t){return new Date(e,t,0).getDate()}function m(e){var t=e.getFullYear();return{month:e.getMonth(),year:t}}function v(e,t){return{firstDayOfMonth:new Date(e,t,1),lastDayOfMonthObj:new Date(e,t+1,0)}}function g(e,t,n){return{formattedDay:e<10?"0".concat(e):e,formattedMonth:0===t?12:t,formattedYear:0===t?n-1:n}}function p(e){var t=e.split("/"),n=parseInt(t[0],10),r=parseInt(t[1],10)-1,a=parseInt(t[2],10);return new Date(a,r,n)}function y(e){return e.toLocaleDateString("uk-UA",{weekday:"short"})}})),o.register("1t1Wn",(function(e,t){"use strict";Object.defineProperty(e.exports,"__esModule",{value:!0}),e.exports.default=function(e,t){return n.default(e)||r.default(e,t)||i.default(e,t)||a.default()};var n=c(o("8slrw")),r=c(o("7AJDX")),a=c(o("ifqQW")),i=c(o("auk6i"));function c(e){return e&&e.__esModule?e:{default:e}}})),o.register("8slrw",(function(e,t){"use strict";Object.defineProperty(e.exports,"__esModule",{value:!0}),e.exports.default=function(e){if(Array.isArray(e))return e}})),o.register("ifqQW",(function(e,t){"use strict";Object.defineProperty(e.exports,"__esModule",{value:!0}),e.exports.default=function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}})),o.register("6Zya5",(function(t,n){var r=o("8nrFW"),a=o("6bPr4"),i=o("5e53d"),c=o("f8kn7"),u=[{day:"пн",min:"07",max:"21"},{day:"вт",min:"07",max:"21"},{day:"ср",min:"07",max:"21"},{day:"чт",min:"07",max:"21"},{day:"пт",min:"07",max:"21"},{day:"сб",min:"10",max:"19"},{day:"нд",min:"10",max:"19"}];document.querySelectorAll(".time-picker-wrap").forEach((function(t){!function(t){var n=E(t),o=n.clockIcon,l=n.sheduleEl,s=n.hourTablo,d=n.minuteTablo,f=n.hourPicker,m=n.minutePicker,v=n.timePickerBtn,g=n.timeInput,p=(0,c.getDataFromStorage)("selectedTimeObj")||{hours:"15",minutes:"00"};function y(){p=(0,c.getDataFromStorage)("selectedTimeObj")||{hours:"15",minutes:"00"},console.log("IN HANDLER selectedTimeObj : ",p);var e=L(g).value;if(e){b(t);var n=h(e,u),r=n.minHour,i=n.maxHour,l=p.hours,s=p.minutes;S(t,r,i),(0,a.toggleIconActiveStyle)(o),A(l,s),I(),_(),!t.classList.contains("isHidden")&&x()}else D(g)}function h(e,t){var n=(0,i.parseDateStringToDate)(e),r=(0,i.getDayNameFromDate)(n),a=t.find((function(e){return e.day===r}));return{minHour:parseInt(a.min),maxHour:parseInt(a.max)}}function D(e){e.value="Оберіть спочатку дату для прибирання"}function S(t,n,a){e(r)(t.querySelectorAll(".hours")).filter((function(e){var t=parseInt(e.getAttribute("data-id"));return t<=n||t>=a})).forEach((function(e){e.classList.contains("disabled")||(e.classList.remove("active"),e.classList.add("disabled"))}))}function b(t){e(r)(t.querySelectorAll(".hours")).forEach((function(e){e.classList.remove("disabled")}))}function L(e){return e.closest("li").previousElementSibling.querySelector('[name="userDate"]')}function E(e){return{clockIcon:e.parentElement.previousElementSibling.querySelector(".icon--clock"),sheduleEl:e.parentElement.querySelector(".work-shedule"),hourTablo:e.querySelector(".tablo--hours"),minuteTablo:e.querySelector(".tablo--minutes"),hourPicker:e.querySelector(".time-picker__hours"),minutePicker:e.querySelector(".time-picker__minutes"),timePickerBtn:e.querySelector(".time-picker__btn"),timeInput:e.parentElement.previousElementSibling.querySelector('[name="userTime"]')}}function x(){g.value="".concat(p.hours," : ").concat(p.minutes)}function k(e,n){var r=e.target;if(!r.classList.contains("disabled")&&w(r)){var a=F(n);M(r,t.querySelectorAll(".".concat(a)));var o=t.querySelector(n),i=r.dataset.id;q(o,i),O(n,i)}}function _(){l.classList.toggle("isHidden")}function w(e){return e.classList.contains("number")&&!e.classList.contains("active")}function M(t,n){e(r)(n).map((function(e){return e===t?H(e):C(e)}))}function q(e,t){e.innerHTML=t}function A(e,n){var r=t.querySelector(".time-picker__hours"),a=t.querySelector(".time-picker__minutes");q(r,e),q(a,n)}function T(e,t){!e.classList.contains("isHidden")||(e.classList.remove("isHidden"),t.classList.add("isHidden"))}function I(){t.classList.toggle("isHidden")}function O(e,t){var n=F(e);p[n]=t,(0,c.storeDataInLocalStorage)("selectedTimeObj",p),x()}function H(e){e.classList.add("active")}function C(e){e.classList.remove("active")}function F(e){return e.split("__")[1]}function P(e){var t=e.trim().match(/\d{2}\s*:\s*\d{2}/);return t?t[0]:null}(0,c.storeDataInLocalStorage)("selectedTimeObj",p),g.addEventListener("click",y),o.addEventListener("click",y),g.addEventListener("blur",(function(e){var t=P(e.target.value);g.value=t})),s.addEventListener("click",(function(e){return k(e,".time-picker__hours")})),d.addEventListener("click",(function(e){return k(e,".time-picker__minutes")})),m.addEventListener("click",(function(){return T(d,s)})),f.addEventListener("click",(function(){return T(s,d)})),v.addEventListener("click",(function(){I(),_(),b(t),(0,a.toggleIconActiveStyle)(o)}))}(t)}))})),o.register("lXOyw",(function(e,t){var n=document.querySelector(".backdrop--subscr"),r=document.querySelectorAll(".form__input--location");function a(e){var t=e.target;n&&(""!==t.value.trim()&&document.activeElement===t?n.style.overflow="hidden":n.style.overflow="auto")}window.initMap||(window.initMap=function(){r.forEach((function(e){var t=new google.maps.places.Autocomplete(e);t.addListener("place_changed",(function(){t.getPlace();e.setAttribute("data-id",e.value)}))}))}),r.forEach((function(e){e.addEventListener("input",a),e.addEventListener("focus",a),e.addEventListener("blur",a),a({target:e})}))}))}();
//# sourceMappingURL=calc-order.37e9b5f7.js.map
