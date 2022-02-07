function submit() {
  var email = document.getElementById("email").value;
  var pass = document.getElementById("password").value;
  if (email == '' || email == null || email < 5) {
      document.getElementById("output").innerHTML = "email isn't blank or you forgot @ symbol or less than 5";  
    return false;
  }
  else if(pass == '' || pass == null || pass < 6){
      document.getElementById("output").innerHTML = "password isn't blank or less than 6";
      document.getElementById("email").style.border='2px solid blue'
      return false;
  }
  else{
      document.getElementById("output").innerHTML="this email isn't registred"
      document.getElementById("password").style.border='2px solid blue'
      return true;
  }
}
