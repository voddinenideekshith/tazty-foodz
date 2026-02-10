const navToggle = document.querySelector('.nav-toggle');
const mainNav = document.querySelector('#main-nav');
const yearEl = document.querySelector('#year');

if (yearEl) {
  yearEl.textContent = String(new Date().getFullYear());
}

if (navToggle && mainNav) {
  navToggle.addEventListener('click', () => {
    const isOpen = mainNav.classList.toggle('open');
    navToggle.setAttribute('aria-expanded', String(isOpen));
  });

  mainNav.querySelectorAll('a').forEach((link) => {
    link.addEventListener('click', () => {
      mainNav.classList.remove('open');
      navToggle.setAttribute('aria-expanded', 'false');
    });
  });
}