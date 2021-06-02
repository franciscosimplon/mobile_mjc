function editOpenClose(n, t) {
    // Je récupère un élément HTML dans la liste initiale
    let el = document.getElementsByTagName("div")[n];
    // Afficher les résultats dans la console
    console.log(el, t);
    // Test sur la valeur display de l'élément HTML récupéré
    if (el.style.display == 'flex') {
        // Identification de la balise de texte si utile
        if (t) {
            let tmp = document.getElementById(t);
            console.log(tmp);
            // Changement de la valeur du dit texte
            // Si valeur il y a
            if (document.getElementsByClassName("editContent")[n].value == "") {
                tmp.textContent = document.getElementById(t).textContent;
                // Si valeur null
            } else {
                tmp.textContent = document.getElementsByClassName("editContent")[n].value;
            }
        }
        el.style.display = 'none';
    } else {
        el.style.display = 'flex';
    }
}


function newActi() {
    /* statut de onclick */
    let setOnclick = 8;
    let onclickStatut = ("editOpenClose(" + setOnclick)
    /* section */
    let detectSection = document.getElementById("addActi");

    /* article */
    let createArticle = document.createElement("article");

    /* p */
    let createP = document.createElement("p");
    createP.id = "activites";

    /* i */
    let createI = document.createElement("i");
    createI.classList = "material-icons";
    createI.setAttribute("onclick", onclickStatut + ")");

    /* div */
    let createDiv = document.createElement("div");
    createDiv.classList = "bgColorLightPink edit";

    /* input left */
    let createInputLeft = document.createElement("input");
    Object.assign(createInputLeft, {
        type: "text",
        classList: "bgColorLightPink textEdit editContent",
        placeholder: "Entrez info",
    })

    /* input right */
    let createInputRight = document.createElement("input");
    Object.assign(createInputRight, {
        type: "button",
        classList: "bgColorLightPink textEdit",
        placeholder: "OK ",
        onclick: onclickStatut
    })

    console.log(detectSection);
    console.log(createArticle);
    console.log(createP);
    console.log(createI);
    console.log(createDiv);
    console.log(createInputLeft);
    console.log(createInputRight);
}