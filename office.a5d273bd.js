document.addEventListener("DOMContentLoaded",(function(){var n=window.location.pathname;console.log("currentPage: ",n);var e=document.querySelector(".modal-btn");console.log("buttonToHide: ",e),"/"===n||"/index.html"===n?document.querySelector(".nav__link ").classList.add("nav__link--current"):"/office.html"===n&&(document.querySelector(".nav__list .nav__item:nth-child(2) .nav__link").classList.add("nav__link--current"),e.style.display="none")}));
//# sourceMappingURL=office.a5d273bd.js.map