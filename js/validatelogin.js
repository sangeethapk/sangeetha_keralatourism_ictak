let valid;
function loginvalidate() {

   // validateEmail();
//validatePassword();
     return valid;
 }
//Email Validation start
//document.getElementById("emaillogin").addEventListener("focus",validateEmail());

function validateEmail() {
    

    document.getElementById("email").addEventListener("focusout", validateEmail());
function validateEmail() {

    let emailValue = document.getElementById("email").value;
    let regexp = /^([\w.-]+)@([\w-]+)\.([a-z]{2,3})(\.[a-z]{2,3})?$/;;


    document.getElementById("emailErrorlbl").innerText = "";
    document.getElementById("pswlbl").innerText="";
     
    if (regexp.test(emailValue)) {

        valid = true;
    }
    else {
        document.getElementById("emailErrorlbl").innerText = "Enter valid email id.";
        document.getElementById("emailErrorlbl").style.color = "red";
        document.getElementById("emailErrorlbl").style.fontWeight = "bold";
        valid = false;
    }

}
}
function validatePassword() {

document.getElementById("psw").addEventListener("focusout", validatePassword());
function validatePassword() {
    let password = document.getElementById("psw").value;
    let pswlbl = document.getElementById("pswlbl");

    
    let regexp = /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.{8,})/;

    document.getElementById("pswlbl").innerText = "";
    if (regexp.test(password)) {
        
        document.getElementById("pswlbl").innerText = "";
        valid = true;
    }
    else {

     //alert(regexp.test(password));


        let msg = "Pasword not valid";
        let msglbl = document.getElementById("pswlbl");

        msglbl.innerText = msg;
        msglbl.style.color = "red";
        msglbl.style.fontWeight = "bold";
        valid = false;
    }


}//end password check
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
    
}

