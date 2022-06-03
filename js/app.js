const navToggleIcon = document.querySelector(".nav__toggle-icon");
const menu = document.querySelector(".menu");

function openNavMenu (){
    navToggleIcon.classList.toggle("nav__toggle-icon--open");
    menu.classList.toggle("menu--open")
};

navToggleIcon.addEventListener("click", openNavMenu);
menu.addEventListener("click", openMenu)