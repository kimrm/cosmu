const menuButton = document.querySelector("#menu_button");
menuButton.addEventListener("click", toggleMenu, false);

const menuIcon = document.querySelector("#menu_icon");
const menu = document.querySelector("#slidein_menu");

let scrollToggled = false;

let timeout = false, // holder for timeout id
    delay = 100; // delay after event is "complete" to run callback

function toggleMenu() {        
    menuIcon.classList.toggle("fa-xmark");    
    menu.classList.toggle("slidein-menu__open");
}

function collapseMenu() {
    if (window.innerWidth > 800) {
        menuIcon.classList.remove("fa-xmark");
        //nav.classList.remove("menu__open");        
    }
}

function reportWindowSize() {
    clearTimeout(timeout);
    timeout = setTimeout(collapseMenu, delay);
}

window.onresize = reportWindowSize;




