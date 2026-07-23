document.addEventListener('DOMContentLoaded', function () {
    const toggle = document.querySelector('.menu-toggle');
    const navbar = document.querySelector('.navbar');

    if (!toggle || !navbar) return;

    toggle.addEventListener('click', function () {
        toggle.classList.toggle('active');
        navbar.classList.toggle('active');
    });

    navbar.querySelectorAll('a').forEach(function (link) {
        link.addEventListener('click', function () {
            toggle.classList.remove('active');
            navbar.classList.remove('active');
        });
    });
});
