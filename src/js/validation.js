let ouvrages = [];
let indexModifie = null;

window.onload = function() {
    let formulaire = document.getElementById("formulaire");

    formulaire.addEventListener("submit", function (e) {
        let erreurs = [];
        if(erreurs.length === 0) {
            if(indexModifie !== null) {
                ouvrages.splice(indexModifie, 1);
                indexModifie = null;
            }
            e.preventDefault(); // The browser will not make the HTTP POST request
            let reference = document.getElementById("Reference").value;
            let titre = document.getElementById("Titre").value;
            let auteur = document.getElementById("Auteur").value;
            let editeur = document.getElementById("Editeur").value;
            let edition = document.getElementById("Edition").value;
            let annneEdition = document.getElementById("AnneeEdition").value;
            let isbn = document.getElementById("ISBN").value;
            let nbExemplaires = document.getElementById("NbExemplaires").value;
            let disponibilite = document.getElementById("Disponibilite").value;
            let excluPret = document.getElementById("ExcluPret").value;
            let commentaire = document.getElementById("Commentaire").value;

            let oeuvre = [];
            oeuvre["Reference"] = reference;
            oeuvre["Titre"] = titre;
            oeuvre["Auteur"] = auteur;
            oeuvre["Editeur"] = editeur;
            oeuvre["Edition"] = edition;
            oeuvre["AnneeEdition"] = annneEdition;
            oeuvre["ISBN"] = isbn;
            oeuvre["NbExemplaires"] = nbExemplaires;
            oeuvre["Disponibilite"] = disponibilite;
            oeuvre["ExcluPret"] = excluPret;
            oeuvre["Commentaire"] = commentaire;

            ouvrages.push(oeuvre);
            formulaire.reset();
            afficherTextArea();
            afficherSelect();
            let tmp = document.createElement("tr");

            let tdRef = document.createElement("td");
            tdRef.innerText=oeuvre["Reference"];
            tmp.appendChild(tdRef);

            let tdTitre = document.createElement("td");
            tdTitre.innerText=oeuvre["Titre"];
            tmp.appendChild(tdTitre);

            let tdAuteur = document.createElement("td");
            tdAuteur.innerText=oeuvre["Auteur"];
            tmp.appendChild(tdAuteur);

            let tdEditeur = document.createElement("td");
            tdEditeur.innerText=oeuvre["Editeur"];
            tmp.appendChild(tdEditeur);

            let tdEdition = document.createElement("td");
            tdEdition.innerText=oeuvre["Edition"];
            tmp.appendChild(tdEdition);

            let tdAnnee = document.createElement("td");
            tdAnnee.innerText=oeuvre["AnneeEdition"];
            tmp.appendChild(tdAnnee);

            let tdISBN = document.createElement("td");
            tdISBN.innerText=oeuvre["ISBN"];
            tmp.appendChild(tdISBN);

            let tdNb = document.createElement("td");
            tdNb.innerText = oeuvre["NbExemplaires"];
            tmp.appendChild(tdNb);

            let tdDispo = document.createElement("td");
            console.log(oeuvre['Disponibilite']);
            if (oeuvre["Disponibilite"] === true) {
                tdDispo.innerText="Oui";
            } else {
                tdDispo.innerText="Non";
            }
            tmp.appendChild(tdDispo);

            let tdExclu = document.createElement("td");
            if (oeuvre["ExcluPret"] === true) {
                tdExclu.innerText="Oui";
            } else {
                tdExclu.innerText="Non";
            }
            tmp.appendChild(tdExclu);

            let tdComm = document.createElement("td");
            tdComm.innerText = oeuvre["Commentaire"];
            tmp.appendChild(tdComm);

            document.getElementById("tabOeuvres").appendChild(tmp);
        }
    });
};

document.getElementById("annulation").onclick = function () {
    document.getElementById("formulaire").reset();
    document.getElementById("resume").innerText = "";
    indexModifie = null;
};

function afficherValeurs () {
    let select = document.getElementById("select").value;
    let index = trouverIndex(select);
    indexModifie = index;
    for (let carac in ouvrages[index]) {
        document.getElementById(carac).value = ouvrages[index][carac];
    }
    //trouver la ligne correspondante
    //les afficher
    //après validation changer les valeurs
}

function afficherTextArea() {
    if(ouvrages.length !== 0) {
        let zoneTexte = document.getElementById("resume");
        let texte = "Saisie d'un ouvrage effectuée !\n";
        let oeuvre = ouvrages[ouvrages.length-1];
        for (let carac in oeuvre) {
            texte += carac + " : " + oeuvre[carac] + "\n";
        }
        zoneTexte.innerText = texte;
        zoneTexte.value.replace(/n/g,'<br>');
    }
}

function afficherSelect() {
    let selectDOM = document.getElementById("tdSelect");
    let inputDOM = document.getElementById("tdInput");

    if(document.getElementById("select") !== null) {
        selectDOM.removeChild(document.getElementById("select"));
        inputDOM.removeChild(document.getElementById("modifier"));
    }

    let select = document.createElement("select");
    select.id = "select";
    ouvrages.forEach(function (oeuvre) {
        let option = document.createElement("option");
        option.innerText = oeuvre["Reference"];
        option.value = oeuvre["Reference"];
        select.appendChild(option);
    });
    selectDOM.appendChild(select);

    let inputModif = document.createElement("input");
    inputModif.type = "button";
    inputModif.value = "Modifier";
    inputModif.id = "modifier";
    inputModif.addEventListener("click", afficherValeurs);

    inputDOM.appendChild(inputModif);
}

function trouverIndex(valeurATrouver) {
    let index = 0;
    let iteration = 0;
    ouvrages.forEach(function (oeuvre) {
        if(valeurATrouver === oeuvre["Reference"]) {
            iteration = index;
        }
        index++;
    });
    return iteration;
}









