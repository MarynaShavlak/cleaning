function initializeModal(o){o.openModalBtn.addEventListener("click",(function(){return toggleModal(o)})),o.closeModalBtn.addEventListener("click",(function(t){t.stopPropagation(),toggleModal(o)})),o.backdrop.addEventListener("click",(function(t){t.target===o.backdrop&&toggleModal(o)}))}function toggleModal(o){document.body.classList.toggle("".concat(o.name,"-modal-open")),o.modal.classList.toggle("backdrop--hidden"),"subscription"===o.name&&resetErrors(subscForm.elements)}
//# sourceMappingURL=office.a8b9973a.js.map
