let password1 = document.getElementById("password1");
let password2 = document.getElementById("password2");

function hidePassword1(){
    if (password1.type === "text"){
        password1.type = "password"
    }
}
function hidePassword2(){
    if (password2.type === "text"){
        password2.type = "password"
    }
}