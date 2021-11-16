const mobileBtn = document.querySelector(".main-nav__mobile-btn");
const mainNav = document.querySelector(".main-nav");
const mainNavBar = document.querySelector(".main-nav ul");
const mainNavTriangle = document.querySelector(".main-nav__triangle")

const mediaQuerySmall = window.matchMedia('(min-width: 730px)');

mobileBtn.addEventListener("click", handleMobile);

function handleMobile() {
    mainNav.classList.toggle("nav-mobile");
    mainNavTriangle.classList.toggle("nav-mobile");
}

mediaQuerySmall.addEventListener("change", handleSmallMQ)

function handleSmallMQ() {
    if (mediaQuerySmall.matches) {
        mainNav.classList.remove("nav-mobile");
        mainNavTriangle.classList.remove("nav-mobile");
    }   
}

