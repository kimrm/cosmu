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

const contactForm = document.querySelector("#contactForm");
if (contactForm) {
    contactForm.onsubmit = function() {
        const modalHeading = document.querySelector("#modalHeading");
        const modalContent = document.querySelector("#modalContent");
    
        const contactName = document.querySelector("#contactName");
    
        modalHeading.textContent = "Thank you, " + contactName.value + "!";
        modalContent.textContent = "We appreciate you reaching out and will reply to you shortly.";
        document.querySelector("#backdrop").classList.toggle("backdrop");
        document.querySelector("#contactModal").classList.toggle("open");
        
        return false;
    };
}

const closeModal = document.querySelector("#closeModal");
if (closeModal) {
    closeModal.onclick = function() {
        document.querySelector("#backdrop").classList.toggle("backdrop");
        document.querySelector("#contactModal").classList.toggle("open");
        const contactName = document.querySelector("#contactName");
        const contactEmail = document.querySelector("#contactEmail");    
        const contactMessage = document.querySelector("#contactMessage");
        contactName.value = "";
        contactEmail.value = "";
        contactMessage.value = "";
    
        return false;
    };
}

