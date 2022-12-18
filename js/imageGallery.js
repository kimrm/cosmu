const libraryGallery = [
    "/library/lib1.jpg",
    "/library/lib2.jpg",
    "/library/lib3.jpg",
    "/library/lib4.jpg"
];

const restaurantGallery = [
    "/restaurant/restaurant1.jpg",
    "/restaurant/restaurant2.jpg",
    "/restaurant/restaurant3.jpg",
    "/restaurant/restaurant4.jpg"
];

const shopGallery = [
    "/shop/shop1.jpg",
    "/shop/shop2.jpg",
    "/shop/shop3.jpg",
    "/shop/shop4.jpg"
];

function createGallery(gallery) {    
    const imgView = document.querySelector("#imageView");
    const thumbnails = document.querySelector("#galleryList");
    thumbnails.innerHTML="";    
    gallery.forEach(element => {
        const img = document.createElement("img");
        img.src = "/images/gallery" + element;
        thumbnails.appendChild(img);
        img.addEventListener("click", element => {
            imgView.src = img.src;
        });
    });
}

function closeGallery() {
    const backdrop = document.querySelector("#backdrop");
    const gallery = document.querySelector("#imageGallery");
    gallery.classList.toggle("image-gallery__show");
    backdrop.classList.toggle("backdrop");
}

const showLibraryGallery = function() {
    const title = document.querySelector("galleryTitle");
    const backdrop = document.querySelector("#backdrop");
    const gallery = document.querySelector("#imageGallery");

    const imgView = document.querySelector("#imageView");

    const clickedImg = this.firstChild;
    
    imgView.src = clickedImg.dataset.image;
    
    gallery.classList.toggle("image-gallery__show");
    createGallery(libraryGallery);
    backdrop.classList.toggle("backdrop");
    galleryTitle.innerText = "Cosmu library";
}

const showRestaurantGallery = function() {
    const title = document.querySelector("galleryTitle");
    const backdrop = document.querySelector("#backdrop");
    const gallery = document.querySelector("#imageGallery");

    const imgView = document.querySelector("#imageView");
    
    const clickedImg = this.firstChild;

    imgView.src = clickedImg.dataset.image;
    
    gallery.classList.toggle("image-gallery__show");
    createGallery(restaurantGallery);
    backdrop.classList.toggle("backdrop");
    galleryTitle.innerText = "Cosmu restaurant";
}

const showShopGallery = function() {
    const title = document.querySelector("galleryTitle");
    const backdrop = document.querySelector("#backdrop");
    const gallery = document.querySelector("#imageGallery");

    const imgView = document.querySelector("#imageView");
    
    const clickedImg = this.firstChild;

    imgView.src = clickedImg.dataset.image;
    
    gallery.classList.toggle("image-gallery__show");
    createGallery(shopGallery);
    backdrop.classList.toggle("backdrop");
    galleryTitle.innerText = "Cosmu shop";
}

document.querySelector("#libraryGalleryLink1").onclick = showLibraryGallery;
document.querySelector("#libraryGalleryLink2").onclick = showLibraryGallery;
document.querySelector("#libraryGalleryLink3").onclick =  showLibraryGallery;
document.querySelector("#libraryGalleryLink4").onclick = showLibraryGallery;

document.querySelector("#restaurantGalleryLink1").onclick = showRestaurantGallery;
document.querySelector("#restaurantGalleryLink2").onclick = showRestaurantGallery;
document.querySelector("#restaurantGalleryLink3").onclick = showRestaurantGallery;
document.querySelector("#restaurantGalleryLink4").onclick = showRestaurantGallery;

document.querySelector("#shopGalleryLink1").onclick = showShopGallery;
document.querySelector("#shopGalleryLink2").onclick = showShopGallery;
document.querySelector("#shopGalleryLink3").onclick = showShopGallery;
document.querySelector("#shopGalleryLink4").onclick =  showShopGallery;

document.querySelector("#galleryClose").addEventListener("click", closeGallery);
document.querySelector("#backdrop").addEventListener("click", closeGallery);

