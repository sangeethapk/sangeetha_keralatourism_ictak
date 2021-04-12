
let validEmail,validPass,validPh,validPassRe;
function validateSignUp() {
  if(validEmail&&validPass&&validPh&validPassRe)
      return true;
  else
        return false;
}
//Email Validation start
document.getElementById("email").addEventListener("focusout", validateEmail());
function validateEmail() {

    let emailValue = document.getElementById("email").value;
    let regexp = /^([\w.-]+)@([\w-]+)\.([a-z]{2,3})(\.[a-z]{2,3})?$/;


    document.getElementById("emailErrorlbl").innerText = ""
    document.getElementById("phlblError").innerText = "";

    if (regexp.test(emailValue)) {

        validEmail = true;
    }
    else {
        document.getElementById("emailErrorlbl").innerText = "Enter valid email id.";
        document.getElementById("emailErrorlbl").style.color = "red";
        document.getElementById("emailErrorlbl").style.fontWeight = "bold";
        validEmail = false;
    }

}
//email validation end
//Phone number validation
document.getElementById("email").addEventListener("focus", validatePhoneNumber());
function validatePhoneNumber() {
    let phoneNumber = document.getElementById("phone").value;
    let regexp = /^([0-9]{3})([-. ])?([0-9]{3})([-. ])?([0-9]{4})$/;
    document.getElementById("pswlbl").innerText = "";

    if (regexp.test(phoneNumber)) {


        validPh = true;
        document.getElementById("phlblError").innerText = "";

    }
    else {
        //alert(regexp.test(phoneNumber));

        let msg = ": Invalid Phone number";
        document.getElementById("phlblError").innerText = msg;
        validPh = false;
    }

}
//end phone number



document.getElementById("psw").addEventListener("focusout", validatePassword());
function validatePassword() {
    let password = document.getElementById("psw").value;
    
    document.getElementById("pswlbl").innerText="";

    let regexp2 = /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\$%\^&\*])(?=.{8,})/;
    let regexp1 = /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.{8,})/;


    if (regexp1.test(password)) {
        //if password contains one capital,one small letter,one digit and its between 8 or more  characters length
        if (password.length <10) {
            let msg = " GOOD";
            let msglbl = document.getElementById("pswlbl");

            msglbl.innerText = msg;
            msglbl.style.color = "orange";
            msglbl.style.fontWeight = "bold";
            //alert(regexp.test(password));
        }
        //if password contains one capital,one small letter,one digit and its between more than 8 character characters length and contain special character
        else if (regexp2.test(password)) {


            let msg = " STRONG";
            let msglbl = document.getElementById("pswlbl");

            msglbl.innerText = msg;
            msglbl.style.color = "green";
            msglbl.style.fontWeight = "bold";


        }
        validPass = true;
        
    }
    else {

        // alert(regexp.test(password));


        let msg = " WEAK...Try another password";
        let msglbl = document.getElementById("pswlbl");

        msglbl.innerText = msg;
        msglbl.style.color = "red";
        msglbl.style.fontWeight = "bold";
        validPass = false;
    }


}//end password check
document.getElementById("psw-repeat").addEventListener("focusout", checkEquality());
function checkEquality() {
    document.getElementById("pswRepeatlbl").innerText = "";

    let psw, pswRepeat;
    psw = document.getElementById("psw").value;
    pswRepeat = document.getElementById("psw-repeat").value;

    if (psw == pswRepeat) {
        validPassRe = true;
        document.getElementById("register").disable = false;

    }
    else {
        //alert("not equal");
        document.getElementById("register").disable = true;

        document.getElementById("pswRepeatlbl").innerText = "Password not Same";
        document.getElementById("pswRepeatlbl").style.color = "red";
        document.getElementById("pswRepeatlbl").fontWeight = "bold";

        validPassRe = false;
    }


}


// for toggler button
document.getElementById("togglebtn").addEventListener("click",funToggle);
function funToggle() {

    //alert("toggle");


    var temp = document.getElementById("psw");
            if (temp.type === "password") {
                temp.type = "text";
            }
            else {
                temp.type = "password";
            }
    // const togglePassword = document.querySelector('#togglePassword');
    // const password = document.querySelector('#psw');    
    // // toggle the type attribute
    // const type = password.getAttribute('type') === 'password' ? 'text' : 'password';
    // password.setAttribute('type', type);
    // // toggle the eye slash icon
    // this.classList.toggle('fa-eye-slash');
}


