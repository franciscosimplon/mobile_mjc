const pwd = document.getElementById("password");
const user = document.querySelector('#username');
const mail = document.querySelector('#mail');
const cpwd = document.querySelector('#cpassword');
console.log(pwd)
console.log(cpwd)
console.log(mail)
console.log(user)
/* fonction permettant d'afficher une alert si le champs utilisateur ou mot de passe n'est pas rempli */

function valider(){
    if(pwd.value != "" & user.value != "" & mail.value != "" & cpwd.value != ""){
        return window.location.href = "./confirmation.html";
    }else{
        alert('Veuillez completez tous les champs SVP');
        return false
    }
}