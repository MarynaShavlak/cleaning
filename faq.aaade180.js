var toggleAnswerBtnList=document.querySelectorAll(".toggle-question-btn");function onToggleAnswerBtnClick(e){e.closest(".questions__item").querySelectorAll(".questions__text").forEach((function(e){toggleAnswerToQuestion(e)})),toggleBtnIcon(e)}function toggleAnswerToQuestion(e){var n="none"===window.getComputedStyle(e).display;e.style.display=n?"block":"none"}function toggleBtnIcon(e){var n=e.querySelector(".icon--plus"),t=e.querySelector(".icon--minus");"none"===n.style.display?(n.style.display="block",t.style.display="none"):(n.style.display="none",t.style.display="block")}toggleAnswerBtnList.forEach((function(e){e.addEventListener("click",(function(){onToggleAnswerBtnClick(e)}))}));
//# sourceMappingURL=faq.aaade180.js.map
