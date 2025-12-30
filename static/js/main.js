/*
    Main JavaScript file
*/

/* Function to toggle the mobile menu */
function navbarToggle() {
    const btn = document.getElementById('mobile-menu-button');
    const menu = document.getElementById('mobile-menu');
    if (btn && menu) {
        btn.addEventListener('click', () => {
            const isHidden = menu.classList.toggle('hidden');
            // Mejora de accesibilidad: actualizar el estado del aria-expanded
            btn.setAttribute('aria-expanded', !isHidden);
        });
    }
}

document.addEventListener('DOMContentLoaded', () => {
    navbarToggle();
});