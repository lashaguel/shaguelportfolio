const menuToggle = document.querySelector('.menu-toggle');
const navWrapper = document.querySelector('.nav-links-wrapper');
const navLinks = document.querySelectorAll('.nav-links a');

if (menuToggle && navWrapper) {
    menuToggle.addEventListener('click', () => {
        const expanded = menuToggle.getAttribute('aria-expanded') === 'true';
        menuToggle.setAttribute('aria-expanded', String(!expanded));
        navWrapper.classList.toggle('open');
    });
}

navLinks.forEach(link => {
    link.addEventListener('click', () => {
        if (navWrapper.classList.contains('open')) {
            navWrapper.classList.remove('open');
            menuToggle.setAttribute('aria-expanded', 'false');
        }
    });
});
