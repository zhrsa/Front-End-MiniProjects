const sliderImages = [
    "./images/image1.jpg",
    "./images/image2.jpg",
    "./images/image3.jpg",
    "./images/image4.jpg",
];
const sliderDom = document.getElementById("slider");
  
let currentImage = 0;
  
function renderImages() {
    sliderImages.forEach((image) => {
      sliderDom.innerHTML += "<img src='" + image + "' />";
    });
}
  
function clearImages() {
    const images = document.getElementsByTagName("img");
    for (let i = 0; i < images.length; i++) {
      images[i].style.opacity = 0;
    }
}
  
function showImage(image) {
    clearImages();
    document.getElementsByTagName("img")[image].style.opacity = 1;
}
  
function init() {
    renderImages();
    showImage(currentImage);
}
  
const prevbtn = document.getElementById("prevButton");
const nextbtn = document.getElementById("nextButton");
  
function nextImage() {
    if (currentImage >= sliderImages.length - 1) {
      currentImage = 0;
    } else {
      currentImage++;
    }
    showImage(currentImage);
}
  
function prevImage() {
    if (currentImage <= 0) {
      currentImage = sliderImages.length - 1;
    } else {
      currentImage--;
    }
    showImage(currentImage);
}
  
nextbtn.addEventListener("click", nextImage);
prevbtn.addEventListener("click", prevImage);
  
init();
  