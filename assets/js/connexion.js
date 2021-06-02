const pwd = document.getElementById("password");
const user = document.querySelector('#username');
const img1 = document.createElement("img");
const but = document.querySelector("#eye");


img1.src = "../assets/images/Logo/visibility_off-black-18dp.svg";
but.appendChild(img1);
img1.className = "imgEye";

/* Fonction permettant de changer l'image de l'oeil en visible ou invisible */

function changeImage(){
    if(img1.getAttribute("src")== "../assets/images/Logo/visibility_off-black-18dp.svg"){
        img1.src = "../assets/images/Logo/visibility-black-18dp.svg"
        img1.className = "imgEye";
    }else{
        img1.src = "../assets/images/Logo/visibility_off-black-18dp.svg";  
        img1.className = "imgEye";
    }
}

/* Fonction permettant d'afficher ou de masquer le mot de passe */

but.addEventListener("click", function(e){
    if(pwd.getAttribute("type")=="password"){
        pwd.setAttribute("type","text");
    } else {
        pwd.setAttribute("type","password");;
    }
});

/* fonction permettant d'afficher une alert si le champs utilisateur ou mot de passe n'est pas rempli */

function valider(){
    if(pwd.value != "" & user.value != ""){
        return true;
    }else{
        alert('Veuillez completez tous les champs SVP');
        return false
    }
}


