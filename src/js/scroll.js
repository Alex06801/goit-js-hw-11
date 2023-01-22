export { onScroll, onTopButton };

const scrollBtn = document.querySelector('.scroll-btn');

window.addEventListener('scroll', onScroll);
scrollBtn.addEventListener('click', onTopButton);

function onScroll() {
  const scrolled = window.pageYOffset;
  const coords = document.documentElement.clientHeight;

  if (scrolled < coords) {
    scrollBtn.classList.add('is-hidden');
  }

  if (scrolled > coords) {
    scrollBtn.classList.remove('is-hidden');
  }
}

function onTopButton() {
  if (window.pageYOffset > 0) {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }
}
