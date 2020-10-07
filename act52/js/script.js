var username= document.forms["form"]["Uname"];


var unameform = document.getElementById("uname-id")
var male = document.getElementById("male")
var female = document.getElementById("female")
var check = document.getElementById('checker')

var unameerror = document.getElementById("uname_error");
var gendergender = document.getElementById("gender-select")
var check2 = document.getElementById("checker")



function validateEmail(){
  var email = document.forms["form"]["Email"];
  var emform = document.getElementById("email-id")
  var emer = document.getElementById("error-email")
  var pattern = /^[^ ]+@[^ ]+\.[a-z]{2,3}$/;

  if (email.value.match(pattern)) {

    emer.style.display="block";
    emer.style.color="#44d62c"
    emer.innerHTML = "Valid Email Address"
    
  }
  if (email.value==""){
    emer.style.display="none";
  }
  else{

    emer.style.display="block";
    emer.innerHTML = "Invalid Email Address"
  }
  
}
function validatePassword(){
var pwrd = document.forms["form"]["Password"]
var pwid = document.getElementById("password-id")
var paswor = document.getElementById("password-error")
 var weak = /[a-z]/;
 var med =  /\d+/;
 var strong = /.[!,@,#,$,%,^,&,*,?,_,~,-,(,)]/;

 
 if ( pwrd.value.length <=3
   && pwrd.value.match(weak)
   || pwrd.value.match(med)
   || pwrd.value.match(strong)) {
   
    pwid.classList.add("weak");
    pwid.classList.remove("med");
    pwid.classList.remove("strong");
    paswor.style.display="block";
    paswor.style.color="orangered"
    paswor.innerHTML="Password weak"
    

 }

 if ( pwrd.value.length >=6
  && pwrd.value.match(weak)
  && pwrd.value.match(med)
  || pwrd.value.match(strong)) {

    pwid.classList.add("med");
    pwid.classList.remove("weak");
    pwid.classList.remove("strong");
   paswor.style.display="block";
   paswor.style.color="orange";
   paswor.innerHTML="Password moderate"
   
  }

  if ( pwrd.value.length >=8
    && pwrd.value.match(weak)
    && pwrd.value.match(med)
    && pwrd.value.match(strong)) {
  
      pwid.classList.add("strong");
      pwid.classList.remove("weak");
      pwid.classList.remove("med");
     paswor.style.display="block";
     paswor.style.color="#44d62c";
     paswor.innerHTML="Password strong"
     
    }
}


function validateForm(){
  if (lastname.value=="") {
    lnerror.style.display="block";
    username.classList.add("invalid")
    return false;
  }
  if (female.checked==false && male.checked==false) {
    gendergender.style.display="block"
    return false;
  }
  if(check.checked==false){
    checker.style.display="block"
    return false;
  }
  alert('Sucess') 
}


