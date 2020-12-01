const PortraitBtn = document.getElementById("Portrait");
const LondonBtn = document.getElementById("London");
const OlympicsBtn = document.getElementById("Olympics");
const INEOSBtn = document.getElementById("INEOS");
const image = document.getElementById("img1");
const heading = document.querySelector("h2"); 

function London(){
   image.src = "images/Kipchogeportrait.jpg";
   heading.innerText = "London Marathon";
   heading.style.backgroundColor = "green"
   image.style.borderColor = "green";
   LondonBtn.style.backgroundColor = "red";
   PortraitBtn.style.backgroundColor = "white";
   INEOSBtn.style.backgroundColor = "white";
   OlympicsBtn.style.backgroundColor = "white";
 }
 LondonBtn.onclick = London;

 function Portrait(){
image.src = "images/kipchoge.jpg";
heading.innerText = "Eliud Kipchoge";
heading.style.backgroundColor = "red"
image.style.borderColor = "red";
LondonBtn.style.backgroundColor = "white";
PortraitBtn.style.backgroundColor = "red";
INEOSBtn.style.backgroundColor = "white";
OlympicsBtn.style.backgroundColor = "white";
 }
 PortraitBtn.onclick = Portrait;

 function INEOS(){
image.src = "images/kiprunning.JPG";
heading.innerText = "INEOS 1:59 Project";
heading.style.backgroundColor = "yellow"
image.style.borderColor = "yellow";
LondonBtn.style.backgroundColor = "white";
PortraitBtn.style.backgroundColor = "white";
INEOSBtn.style.backgroundColor = "red";
OlympicsBtn.style.backgroundColor = "white";
 }
 INEOSBtn.onclick = INEOS;

 function Olympics(){
   image.src = "images/olympics.jpg";
   heading.innerText = " 2016 Olympics";
   heading.style.backgroundColor = "blue"
   image.style.borderColor = "blue";
   LondonBtn.style.backgroundColor = "white";
   PortraitBtn.style.backgroundColor = "white";
   INEOSBtn.style.backgroundColor = "white";
   OlympicsBtn.style.backgroundColor = "red";
 }
 OlympicsBtn.onclick = Olympics;