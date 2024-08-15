const $ = document.querySelector.bind(document);
const $$ = document.querySelectorAll.bind(document);

const menuOverlay = $(".menu-overlay");
const menuDrawer = $(".menu-drawer");
const menuIcon = $(".menu-mobile-icon");
const navList = $$(".nav-bar__list li a");

menuIcon.onclick = function () {
    menuOverlay.style.visibility = "visible";
    menuDrawer.style.transform = "translateX(0)";
    menuOverlay.style.opacity = 1;
};

menuOverlay.onclick = escMenu;

navList.forEach((item) => {
    item.onclick = escMenu;
});

function escMenu() {
    menuOverlay.style.visibility = "hidden";
    menuOverlay.style.opacity = 0;
    menuDrawer.style.transform = "translateX(-100%)";
}
