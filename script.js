// Menu móvel, borda da barra ao rolar e ano do rodapé
(function () {
  var toggle = document.querySelector('.menu-toggle');
  var nav = document.getElementById('menu');
  var topbar = document.querySelector('.topbar');

  function closeMenu() {
    nav.classList.remove('is-open');
    toggle.setAttribute('aria-expanded', 'false');
    onScroll();
  }

  if (toggle && nav) {
    toggle.addEventListener('click', function () {
      var open = nav.classList.toggle('is-open');
      toggle.setAttribute('aria-expanded', String(open));
      onScroll();
    });
    nav.addEventListener('click', function (e) {
      if (e.target.closest('a')) closeMenu();
    });
    document.addEventListener('keydown', function (e) {
      if (e.key === 'Escape' && nav.classList.contains('is-open')) {
        closeMenu();
        toggle.focus();
      }
    });
  }

  function onScroll() {
    var menuOpen = nav && nav.classList.contains('is-open');
    topbar.classList.toggle('is-scrolled', window.scrollY > 40 || menuOpen);
  }
  window.addEventListener('scroll', onScroll, { passive: true });
  onScroll();

  var ano = document.getElementById('ano');
  if (ano) ano.textContent = new Date().getFullYear();
})();
