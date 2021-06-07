const serchEL = document.querySelector('.search');
const serchInputEL = serchEL.querySelector('input');

serchEL.addEventListener('click', function () {
  serchInputEL.focus();
});

serchInputEL.addEventListener('focus', function () {
  serchEL.classList.add('focused');
  serchInputEL.setAttribute('placeholder', '통합검색');
});

serchInputEL.addEventListener('blur', function () {
  serchEL.classList.remove('focused');
  serchInputEL.setAttribute('placeholder', '');
  serchInputEL.value = '';
});


const thisYear = document.querySelector('.this-year')
thisYear.textContent = new Date().getFullYear();