const navToggleIcon = document.querySelector(".nav__toggle-icon");
const menu = document.querySelector(".menu");
const showCover = document.querySelector(".cover");

function openNavMenu (){
    navToggleIcon.classList.toggle("nav__toggle-icon--open");
    menu.classList.toggle("menu--open")
    showCover.classList.toggle("cover--show")
};

navToggleIcon.addEventListener("click", openNavMenu);
menu.addEventListener("click", openMenu)