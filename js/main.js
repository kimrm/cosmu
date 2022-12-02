const menuButton = document.querySelector("#menu_button");
menuButton.addEventListener("click", toggleMenu, false);

const menuIcon = document.querySelector("#menu_icon");
const nav = document.getElementById("nav");
const backdrop = document.getElementById("backdrop");

let timeout = false, // holder for timeout id
    delay = 100; // delay after event is "complete" to run callback

function toggleMenu() {        
    menuIcon.classList.toggle("fa-xmark");
    nav.classList.toggle("menu__open");
    backdrop.classList.toggle("backdrop__show");
}

function collapseMenu() {
    if (window.innerWidth > 800) {
        menuIcon.classList.remove("fa-xmark");
        nav.classList.remove("menu__open");
        backdrop.classList.remove("backdrop__show");        
    }
}

function reportWindowSize() {
    clearTimeout(timeout);
    timeout = setTimeout(collapseMenu, delay);
}

window.onresize = reportWindowSize;


/* Watch for dark/light mode change 
source: https://www.section.io/engineering-education/watch-for-system-dark-mode-using-js-css/
*/
function modeChange(e) {
    const colorScheme = e.matches ? "dark" : "light";

		if (colorScheme === "dark") {
			document.querySelector("#logo").src = "../images/logo-darkmode.png";
		} else {
			document.querySelector("#logo").src = "../images/logo_500px.png";
		}
}

window.matchMedia("(prefers-color-scheme: dark)").onchange = modeChange;

