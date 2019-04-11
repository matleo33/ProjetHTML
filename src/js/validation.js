/*document.addEventListener("DOMContentLoaded", function(event) {

    let taSoeur = document.getElementById("isbn");

    console.log(taSoeur);

    if (taSoeur !== null) {
        console.log("DEFINED")
    } else {
        console.log("UNDEFINED")
    }

    taSoeur.onchange = function () {
        let isbn = document.getElementById("isbn");

        isbn.addEventListener("keyup", function (event) {
            if (isbn.validity.typeMismatch) {
                isbn.setCustomValidity("I expect an e-mail, darling!");
            } else {
                isbn.setCustomValidity("BLC");
            }
        });
    };

});*/

document.getElementById("isbn").onChange = function () {
    console.log("in");
    let isbn = document.getElementById("isbn");

    isbn.addEventListener("", function (event) {
        if (isbn.validity.typeMismatch) {
            isbn.setCustomValidity("I expect an e-mail, darling!");
        } else {
            isbn.setCustomValidity("BLC");
        }
    });
};
