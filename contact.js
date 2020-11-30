function inputs_check(){
    const name = document.getElementById("fullname").value;
    const email = document.getElementById("email").value;
    const comment = document.getElementById("comments").value;
}
document.getElementById("submit-button").onclick = inputs_check;


function validateForm() {
    let myForm = document.querySelector("#feedbackform");
    let name = myForm["fullname"].value;
    let email = myForm["email"].value;
    let comments = myForm["comments"].value;
    if (name == "") {
      alert("Please enter your fullname");
      return false;}
       else if (email == "") {
      alert("Please enter your email");
      return false;}
      else if (comments == "") {
      alert("Please enter a comment");
      return false;}
       else {
        return false; }
        }