let ouvrages = [];

window.onload = function() {
    let formulaire = document.getElementById("formulaire");

    formulaire.addEventListener("submit", function (e) {
        let erreurs = [];
        if(erreurs.length === 0) {
            e.preventDefault(); // The browser will not make the HTTP POST request
            let reference = document.getElementById("reference").value;
            let titre = document.getElementById("titre").value;
            let auteur = document.getElementById("auteur").value;
            let editeur = document.getElementById("editeur").value;
            let edition = document.getElementById("edition").value;
            let annneEdition = document.getElementById("anneeEdition").value;
            let isbn = document.getElementById("isbn").value;
            let nbExemplaires = document.getElementById("nbExemplaires").value;
            let disponibilite = document.getElementById("disponibilite").value;
            let excluPret = document.getElementById("excluPret").value;
            let commentaire = document.getElementById("commentaires").value;

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
            afficher();
        }
    });
};

document.getElementById("annulation").onclick = function () {
    document.getElementById("formulaire").reset();
};

function afficher() {
    if(ouvrages.length !== 0) {
        let zoneTexte = document.getElementById("resume");
        let texte = "";
        let oeuvre = ouvrages[ouvrages.length-1];
        for (let carac in oeuvre) {
            texte += carac + " : " + oeuvre[carac] + '\n';
        }
        zoneTexte.innerText = texte;
    }
}