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