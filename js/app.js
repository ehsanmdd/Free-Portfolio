const navToggleIcon = document.querySelector(".nav__toggle-icon");
const menu = document.querySelector(".menu");
const showCover = document.querySelector(".cover");
const resumeListItems = document.querySelectorAll(".resume-list__item")

function openNavMenu (){
    navToggleIcon.classList.toggle("nav__toggle-icon--open");
    menu.classList.toggle("menu--open")
    showCover.classList.toggle("cover--show")
};

navToggleIcon.addEventListener("click", openNavMenu);
menu.addEventListener("click", openNavMenu);


resumeListItems.forEach(resumeListItems =>{
    resumeListItems.addEventListener("click", function () {
        document.querySelector(".resume-list__item--active").classList.remove("resume-list__item--active")
        document.querySelector(".resume-content--show").classList.remove("resume-content--show")
        resumeListItems.classList.add("resume-list__item--active")
         let contentId = resumeListItems.getAttribute("data-content-id")
         document.querySelector(contentId).classList.add("resume-content--show")
    })
})