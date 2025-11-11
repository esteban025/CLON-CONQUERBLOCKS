const btnMenu = document.querySelector('.btn-open-menu');
const $nav = document.querySelector('nav');
const $header = document.querySelector('.header-principal-page');

btnMenu.addEventListener('click', () => {
  $nav.classList.toggle('active');
  $header.classList.toggle('active');
  
});

// Close menu when clicking outside
document.addEventListener('click', (e) => {
  if (!$nav.contains(e.target) && !btnMenu.contains(e.target) && $nav.classList.contains('active')) {
    $nav.classList.remove('active');
    $header.classList.remove('active');
  }
});