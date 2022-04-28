window.onscroll = function() {
    const navbar = document.querySelector("header");
    const navbarHeight = navbar.offsetTop;

    if (window.pageYOffset > navbarHeight) {
        navbar.classList.add("navbar-fixed");
    } else {
        navbar.classList.remove("navbar-fixed");
    }
}


const hambuger = document.querySelector('#hambuger');
const menuNavbar = document.querySelector('#nav-bar');

hambuger.addEventListener('click', function () {
    hambuger.classList.toggle('hambuger-active');
    menuNavbar.classList.toggle('hidden');
})