// Mobile menu toggle — shared by all Chu Bakery pages
(function () {
  var header = document.getElementById('siteHeader');
  var toggle = document.getElementById('menuToggle');
  if (!header || !toggle) return;

  toggle.addEventListener('click', function () {
    var open = header.classList.toggle('nav-open');
    toggle.setAttribute('aria-expanded', open ? 'true' : 'false');
    toggle.innerHTML = open ? '<i class="bi bi-x-lg"></i>' : '<i class="bi bi-list"></i>';
  });

  // Close the menu when a link is tapped or Escape is pressed
  var nav = document.getElementById('mobileNav');
  if (nav) {
    nav.addEventListener('click', function (e) {
      if (e.target.closest('a')) {
        header.classList.remove('nav-open');
        toggle.setAttribute('aria-expanded', 'false');
        toggle.innerHTML = '<i class="bi bi-list"></i>';
      }
    });
  }
  document.addEventListener('keydown', function (e) {
    if (e.key === 'Escape' && header.classList.contains('nav-open')) {
      header.classList.remove('nav-open');
      toggle.setAttribute('aria-expanded', 'false');
      toggle.innerHTML = '<i class="bi bi-list"></i>';
    }
  });
})();
