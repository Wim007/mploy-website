function toggleMenu() {
  const menu = document.getElementById('mobileMenu');
  if (menu) menu.classList.toggle('open');
}

document.addEventListener('DOMContentLoaded', function () {
  // Sluit mobiel menu bij klik buiten nav
  document.addEventListener('click', function (e) {
    const menu = document.getElementById('mobileMenu');
    const nav  = document.querySelector('.nav');
    if (menu && nav && !nav.contains(e.target)) {
      menu.classList.remove('open');
    }
  });

  // Actieve navlink markeren op basis van huidige pagina
  const pad = window.location.pathname.split('/').pop() || 'index.html';
  document.querySelectorAll('.nav__links a, .footer__nav a').forEach(function (a) {
    if (a.getAttribute('href') === pad) {
      a.classList.add('actief');
    }
  });

  // Fade-in animatie voor secties
  if ('IntersectionObserver' in window) {
    const secties = document.querySelectorAll('.sectie, .keuze__kaart, .stap, .belofte');
    const observer = new IntersectionObserver(function (entries) {
      entries.forEach(function (entry) {
        if (entry.isIntersecting) {
          entry.target.classList.add('zichtbaar');
          observer.unobserve(entry.target);
        }
      });
    }, { threshold: 0.12 });

    secties.forEach(function (el) {
      el.classList.add('verborgen');
      observer.observe(el);
    });
  }
});
