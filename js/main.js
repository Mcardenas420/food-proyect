'use strict'
// Barra Fija
window.addEventListener('scroll', function() {
    const header = document.querySelector('header');
    header.classList.toggle("sticky", window.scrollY > 0);
});

//Responsive Menu
function toggleMenu() {
    const menuToggle = document.querySelector(".menuToggle");
    const nav = document.querySelector(".nav");
    menuToggle.classList.toggle('active');
    nav.classList.toggle('active');
}