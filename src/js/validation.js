let oeuvres = [];

window.onload = function() {
    let myForm = document.getElementById('formulaire');

    myForm.addEventListener('submit', function (e) {
        let errors = [];
        if(errors.length === 0) {
            e.preventDefault(); // The browser will not make the HTTP POST request
            let reference = document.getElementById("reference").value;
            let titre = document.getElementById("titre").value;
            let auteurs = document.getElementById("auteurs").value;
            let editeurs = document.getElementById("editeurs").value;
            let edition = document.getElementById("edition").value;
            let annneEdition = document.getElementById("anneeEdition").value;
            let isbn = document.getElementById("isbn").value;
            let nbExemplaires = document.getElementById("nbExemplaires").value;
            let disponibilite = document.getElementById("disponibilite").value;
            let excluPret = document.getElementById("excluPret").value;
            let commentaire = document.getElementById("commentaires").value;

            let oeuvre = {Reference:reference, Titre:titre, Auteur:auteurs, Editeurs:editeurs, Edition:edition, AnnneEdition:annneEdition,
                ISBN:isbn, NbExemplaires:nbExemplaires, Disponibilite:disponibilite, ExcluPret:excluPret, Commentaire:commentaire};
            oeuvres.push(oeuvre);
        }
    });
};
