"use strict";

function validSimu() {
    
    const salaire = 1300.0;    
    const anciennete1 = 5;
    const anciennete2 = 10;    
    const nbVenteXS = 50;
    const nbVenteMulti20 = 20;
    const nbVenteMulti50= 50;
    const nbVenteMulti51 = 51;
    const commissionS20 = 0.02;
    const commissionXS = 0.06;
    const commissionMulti20 = 0.04;
    const commissionMult50 = 0.06;
    const commissionMulti51 = 0.1;
    const prixS20 = 140.0;
    const prixXS = 350.0;
    const prixMulti = 180.0;

    var numericUpDown = document.querySelectorAll(".input-change");

    for (var i = 0; i < numericUpDown.length; i++) {
        numericUpDown[i].addEventListener("keyup", function () {

            var S20Vendus = parseInt(window.document.querySelector("#S20").value);
            var XSpiritVendus = parseInt(window.document.querySelector("#XSpirit").value);
            var MultitecVendus = parseInt(window.document.querySelector("#Multitec").value);
            var ancienneteNb = parseInt(window.document.querySelector("#anciennete").value);

            var total = salaire + commissionXS(XSpiritVendus) +
                    commissionS20(S20Vendus) + commissionMulti(MultitecVendus) + anciennete(ancienneteNb, salaire);

            console.log(total);
            document.getElementById("total").value = total;

        }, false);
    }

    function anciennete(nbAnnee, salaire) {
            if (nbAnnee <= anciennete1)
            {
                return 0.0;
            }
            else if (nbAnnee > anciennete1 && nbAnnee <= anciennete2)
            {
                return salaire * 0.03;
            }
            else
                return salaire * 0.06;

    }
    
    function commissionXS(nb) {
        if (nb < nbVenteXS)
            return 0;
        else {
            return prixXS * commissionXS * nb;
        }
    }
    
    function commissionMulti(nb) {
        if (nb <= nbVenteMulti20) {
            return nb * prixMulti * commissionMulti20;
        }
        else if (nb <= nbVenteMulti50)
        {
            return ((nbVenteMulti20 * prixMulti * commissionMulti20) + ((nb - nbVenteMulti20) * prixMulti * commissionMult50));
        }
        else
        {
            return (nbVenteMulti20 * prixMulti * commissionMulti20) + ((commissionMult50-nbVenteMulti20) * prixMulti * commissionMult50) + ((nb - nbVenteMulti50) * prixMulti * commissionMulti51);
        }
    }

    function commissionS20(nb) {
        return nb * prixS20 * commissionS20;
    }

} false;

window.addEventListener("load", function () {
    window.document.querySelector("#btn_envoyer").addEventListener("click", validSimu);
});
