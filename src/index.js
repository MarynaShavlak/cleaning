document.addEventListener('DOMContentLoaded', function () {
  const currentPage = window.location.pathname;
  console.log('currentPage: ', currentPage);
  const buttonToHide = document.querySelector('.modal-btn');
  console.log('buttonToHide: ', buttonToHide);
  if (currentPage === '/' || currentPage === '/index.html') {
    document.querySelector('.nav__link ').classList.add('nav__link--current');
  } else if (currentPage === '/office.html') {
    document
      .querySelector('.nav__list .nav__item:nth-child(2) .nav__link')
      .classList.add('nav__link--current');
    buttonToHide.style.display = 'none';
  }
});
