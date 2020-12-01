const image = document.getElementById("first");
  function enlarge(){
  let w = image.width;
  image.width = w * 1.25;
}
image.onmouseover = enlarge;

function reduce(){
  let w = image.width;
  image.width = w / 1.25;
}
image.onmouseout = reduce;

function ChangePicture(){
  let image = document.getElementById("vapor");
  image.src = "images/nikezoom.JPG"; }

function ChangePictureBack() {
    let image = document.getElementById("vapor")
    image.src = "images/nike-zoomx-vaporfly-next-black-white-AO4568-001-6.jpg";}

document.getElementById("vapor").onmouseover = ChangePicture;
document.getElementById("vapor").onmouseout = ChangePictureBack;