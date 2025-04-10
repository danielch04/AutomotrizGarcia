
$(window).scroll(function() {
    var scrollTopButton = $('#scrollTopBtn');
    if ($(this).scrollTop() > 50) {
        scrollTopButton.fadeIn();
    } else {
        scrollTopButton.fadeOut();
    }
});

$('#scrollTopBtn').click(function() {
    $('html, body').animate({ scrollTop: 0 }, '600');
    return false;
});

  document.addEventListener("DOMContentLoaded", function () {
    const navLinks = document.querySelectorAll('#navbarNav .nav-link');
    const navbarCollapse = document.getElementById('navbarNav');

    navLinks.forEach(function (link) {
      link.addEventListener('click', function () {
        // Solo se colapsa si está visible (en pantallas pequeñas)
        if (window.getComputedStyle(navbarCollapse).display !== "none") {
          new bootstrap.Collapse(navbarCollapse, {
            toggle: true
          }).hide();
        }
      });
    });
  });
