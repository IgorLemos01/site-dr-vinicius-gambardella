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

  // Vídeo do YouTube: carrega o player só quando a pessoa clica
  document.querySelectorAll('.video__frame[data-video-id]').forEach(function (frame) {
    var btn = frame.querySelector('.video__play');
    if (!btn) return;
    btn.addEventListener('click', function () {
      var id = frame.getAttribute('data-video-id');
      var iframe = document.createElement('iframe');
      iframe.src = 'https://www.youtube-nocookie.com/embed/' + id + '?autoplay=1&rel=0&modestbranding=1';
      iframe.title = 'Vídeo do Dr. Vinícius Gambardella no YouTube';
      iframe.allow = 'accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share';
      iframe.allowFullscreen = true;
      iframe.referrerPolicy = 'strict-origin-when-cross-origin';
      frame.replaceChildren(iframe);
      iframe.focus();
    });
  });

  var ano = document.getElementById('ano');
  if (ano) ano.textContent = new Date().getFullYear();
})();
