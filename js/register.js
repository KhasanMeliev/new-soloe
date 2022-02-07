function submit() {
  var email = document.getElementById("email").value;
  var name1 = document.getElementById("name").value;
  var pass = document.getElementById("password").value;
  if (email == "" || email == null || email < 5) {
    document.getElementById("output").innerHTML =
    "email isn't blank or you forgot @ symbol or less than 5";
    return false;
  } 
  else if (name1 == "" || name1 == null || name1 < 3) {
    document.getElementById("output").innerHTML =
      "name isn't blank or less than 3";
    document.getElementById("email").style.border = "2px solid blue";
    return false;
  } 
  else if (pass == "" || pass == null || pass < 6) {
    document.getElementById("output").innerHTML =
      "password isn't blank or less than 6";
    document.getElementById("name").style.border = "2px solid blue";
    return false;
  } else {
    document.getElementById("output").innerHTML =
      "you are succesfully logged in";
    document.getElementById("email").style.border = "2px solid blue";
    document.getElementById("name").style.border = "2px solid blue";
    document.getElementById("password").style.border = "2px solid blue";
    document.getElementById("output").style.color = "blue";
    document.getElementById("readyProfile").style.display='block'
    return true;
  }
}
function Readyprofile(){
  document.querySelector(".login_register").style.display='none'
}