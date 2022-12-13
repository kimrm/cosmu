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
    console.log(colorScheme);
		if (colorScheme === "dark") {
			document.querySelector("#logo").src = "../images/logo-darkmode.png";
		} else {
			document.querySelector("#logo").src = "../images/logo_500px.png";
		}
}


  
  //check this: intersection observer
  //https://stackoverflow.com/questions/66003295/how-to-trigger-animation-when-element-is-in-view


// document.addEventListener('scroll', (e) => {
    
//     if (window.scrollY > 100 && !scrollToggled) {
//         var header = document.querySelector(".header");
//         var subheader = document.querySelector(".subheader");
//         if (!header.classList.contains("header-small")) {
//             header.classList.add("header-small");
//         }           
//         if (subheader && !subheader.classList.contains("header-small")) {
//             subheader.classList.add("header-small");
//         }           
//         scrollToggled = true;
//     }
//     if (window.scrollY < 100 && scrollToggled) {
//         var header = document.querySelector(".header");
//         var subheader = document.querySelector(".subheader");
//         header.classList.remove("header-small");   
//         if (subheader) {
//             subheader.classList.remove("header-small");        
//         }
//         scrollToggled = false;
//     }
    
//   });

//window.matchMedia("(prefers-color-scheme: dark)").onchange = modeChange;

