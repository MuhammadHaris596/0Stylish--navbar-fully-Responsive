// const menuToggle = document.getElementById('menuToggle');
// const navLinks = document.querySelector('.nav-links');

// menuToggle.addEventListener('click', () => {
//     navLinks.classList.toggle('active');
// });

const menuToggle = document.getElementById('menuToggle');
const navLinks = document.querySelector('.nav-links');
const navbar = document.querySelector('.navbar');

let lastScrollY = window.scrollY;

// Hamburger menu toggle
menuToggle.addEventListener('click', () => {
    navLinks.classList.toggle('active');
    menuToggle.classList.toggle('active');
});

// Scroll event listener
window.addEventListener('scroll', () => {
    const currentScrollY = window.scrollY;

    // Scroll down → Hide navbar
    if (currentScrollY > lastScrollY) {
        navbar.classList.add('hidden');
    } 
    // Scroll up → Show navbar
    else {
        navbar.classList.remove('hidden');
    }

    // Change background on scroll
    if (currentScrollY > 50) {
        navbar.classList.add('scrolled');
    } else {
        navbar.classList.remove('scrolled');
    }

    lastScrollY = currentScrollY;
});
