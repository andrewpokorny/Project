const slides = [
    "images/me.JPG",
    "images/mayorscup.jpg",
    "images/akeem.jpg",
    "images/babsontrack.jpg",
    "images/bicic.jpg",
    "images/brooklynboros.jpg",
    "images/citychamps.jpg",
    "images/cityxc.jpg",
    "images/mayorscup2.jpg",
    "images/stmichaels.jpg",
];
let i = 0;
function slideShow(){
 let image1 = document.getElementById("slide");
 
 if (i === slides.length){
     i = 0;
 }
 image1.src = slides[i];
 i++;
 setTimeout(slideShow, 2000);
}
document.querySelector("body").onload = slideShow; 