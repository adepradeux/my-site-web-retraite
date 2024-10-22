
let conteneurMenu = document.getElementById("conteneur-menu");
let tabRegime = document.getElementsByClassName("bloc-regime");
let tabCalculette = document.getElementsByClassName("calculette");
let menuHistorique = document.getElementById("menu-historique");
let tabHistorique = document.getElementsByClassName ("titre-table");

//saisie-resultat calculette age
let saisieDDN = document.getElementById("saisie-DDN-age");
let saisieDateDep = document.getElementById("saisie-date-depart");
let saisieDateDepAutre = document.getElementById("saisie-date-depart-libre");
let saisieDateDepTxPlein = document.getElementById("saisie-date-depart-tx-plein");
let saisieNbTrim = document.getElementById("saisie-nb-trim");
let saisieAnneeFinTrim = document.getElementById("saisie-annee-fin-trim");
let choixDateLegale = document.getElementById("choix-date-legale");
let choixDateAutre = document.getElementById("choix-date-autre");
let choixDateTxPlein = document.getElementById("choix-date-tx-plein");
let choixFemme = document.getElementById("femme");
let choixHomme = document.getElementById("homme");
let saisieNbEnfant = document.getElementById("saisie-nb-enfant");
let saisieTrimEnfant = document.getElementById("saisie-trim-enfant");
let conteneurResAgeLegal = document.getElementById("conteneur-droite-age-legal");
let conteneurResAge = document.getElementById("conteneur-droite-calculatrice-age");
let conteneurMino = document.getElementById("conteneur-minoration");
let conteneurMajo = document.getElementById("conteneur-majoration");
let resultatAgeLegal = document.getElementById("resultat-age-legal");
let resultatDateLegal = document.getElementById("resultat-date-legal");
let resultatAgeAuto = document.getElementById("resultat-age-auto");
let resultatTrimLegal = document.getElementById("resultat-trim-legal");
let resultatDate = document.getElementById("resultat-date-input");
let resultatAge = document.getElementById("resultat-age-input");
let resultatTrimTotal = document.getElementById("resultat-trim-total");
let resultatTrimEnfant = document.getElementById("nb-enfant-res");
let resultatTrimManquant = document.getElementById("resultat-trim-manquant");
let resultatMinoRG = document.getElementById("resultat-mino-RG");
let resultatMinoCNAVPL = document.getElementById("resultat-mino-cnavpl");
let resultatMinoArrco = document.getElementById("resultat-mino-arrco");
let resultatMajoRG = document.getElementById("resultat-majo-RG");
let resultatMajoCNAVPL = document.getElementById("resultat-majo-cnavpl");

//saisie-resultat calculette trim
let saisieAnneeTrim = document.getElementById("saisie-annee-trim");
let saisieSalaire = document.getElementById("saisie-salaire");
let euros = document.getElementById("euros");
let francs = document.getElementById("francs");
let resultatTrim = document.getElementById("resultat-trim");
let resultatValeurTrim = document.getElementById("resultat-valeur-trim");
let monnaieSymboleInput = document.getElementById("monnaie-symbole-saisie");
let monnaieSymboleResult = document.getElementById("monnaie-symbole-resultat");

//saisie-resultat calculette arrco
let toggleArrco = document.getElementById("toggle-arrco");
let choixArrco = document.getElementById("choix-toggle-agirc-arrco");
let choixIrcantec = document.getElementById("choix-toggle-ircantec");
let saisieAnneeArrco = document.getElementById("saisie-annee-arrco");
let saisieSalaireArrco = document.getElementById("saisie-salaire-arrco");
let eurosArrco = document.getElementById("euros-arrco");
let francsArrco = document.getElementById("francs-arrco");
let cadre = document.getElementById("cadre");
let nonCadre = document.getElementById("non-cadre");
let saisieNbMois = document.getElementById("saisie-nb-mois");
let titreRes = document.getElementById("titre-resultat");
let resultatAgircArrco = document.getElementById("resultat-agirc-arrco");
let resultatArrco = document.getElementById("points-ARRCO");
let resultatAgircTB = document.getElementById("points-AGIRCTB");
let resultatAgircTC = document.getElementById("points-AGIRCTC");
let blocResultat2Arrco = document.getElementById("conteneur-resultat-ARRCO");
let monnaieSymboleInputArrco = document.getElementById("monnaie-symbole-saisie-arrco");

//saisie-resultat calculette cnavpl
let saisieAnneeCnavpl = document.getElementById("saisie-annee-cnavpl");
let saisieSalaireCnavpl = document.getElementById("saisie-salaire-cnavpl");
let eurosCnavpl = document.getElementById("euros-cnavpl");
let francsCnavpl = document.getElementById("francs-cnavpl");
let resultatCnavpl = document.getElementById("resultat-cnavpl");
let monnaieSymboleInputCnavpl = document.getElementById("monnaie-symbole-saisie-cnavpl");

//saisie-resultat calculette SAM
let saisieDateRetraiteSam = document.getElementById("saisie-date-retraite-sam");
let saisieAnneeSam = document.getElementById("saisie-annee-sam");
let saisieSalaireSam = document.getElementById("saisie-salaire-sam");
let saisieTrimSam = document.getElementById("saisie-trim-sam");
let btnSuivant = document.getElementById("bouton-salaire-sam");
let btnReinit = document.getElementById("bouton-reinitialiser");
let resultatSam = document.getElementById("resultat-sam");
let conteneurTabSam = document.getElementById("conteneur-table-calcul-sam");

window.addEventListener("scroll", actionMenu);   //mise en surbrillance le titre du menu relatif à la partie en cours de visualisation

//évènement sur la calculette Age
saisieDDN.addEventListener("input", fonctionsSaisieAge);
saisieDDN.addEventListener("click", fonctionsSaisieAge);
saisieNbTrim.addEventListener("input", fonctionsSaisieAge);
saisieNbTrim.addEventListener("click", fonctionsSaisieAge);
saisieAnneeFinTrim.addEventListener("input", fonctionsSaisieAge);
saisieAnneeFinTrim.addEventListener("click", fonctionsSaisieAge);
choixFemme.addEventListener("click", ChoixEnfant);
choixHomme.addEventListener("click", ChoixEnfant);
saisieNbEnfant.addEventListener("click", ChoixEnfant);
saisieNbEnfant.addEventListener("input", ChoixEnfant);
saisieDateDepAutre.addEventListener("input",fonctionsSaisieAge);

//évènement sur la calculette Trimestre
saisieAnneeTrim.addEventListener("input" , calculTrim);
saisieSalaire.addEventListener("input" , calculTrim);
saisieAnneeTrim.addEventListener("click" , calculTrim);
saisieSalaire.addEventListener("click" , calculTrim);
euros.addEventListener("input" , calculTrim);
francs.addEventListener("input" , calculTrim);


//évènement sur la calculette Arrco
toggleArrco.addEventListener("click", calculPointsArrco);
saisieAnneeArrco.addEventListener("input" , calculPointsArrco);
saisieSalaireArrco.addEventListener("input" , calculPointsArrco);
saisieAnneeArrco.addEventListener("click" , calculPointsArrco);
saisieSalaireArrco.addEventListener("click" , calculPointsArrco);
saisieNbMois.addEventListener("click" , calculPointsArrco);
saisieNbMois.addEventListener("input" , calculPointsArrco);
eurosArrco.addEventListener("input" , calculPointsArrco);
francsArrco.addEventListener("input" , calculPointsArrco);
cadre.addEventListener("input", calculPointsArrco);
nonCadre.addEventListener("input", calculPointsArrco);

//évènement sur la calculette Cnavpl
saisieAnneeCnavpl.addEventListener("input" , calculPointsCnavpl);
saisieSalaireCnavpl.addEventListener("input" , calculPointsCnavpl);
saisieAnneeCnavpl.addEventListener("click" , calculPointsCnavpl);
saisieSalaireCnavpl.addEventListener("click" , calculPointsCnavpl);
eurosCnavpl.addEventListener("input" , calculPointsCnavpl);
francsCnavpl.addEventListener("input" , calculPointsCnavpl);

//évènement sur la calculette SAM
btnSuivant.addEventListener("click" , fonctionsSaisieSam );
btnReinit.addEventListener("click", reinitSam);
saisieSalaireSam.addEventListener("input", calculNbTrimSam);


let long = tabRegime.length;
let longTabCal = tabCalculette.length;
let longTabHist = tabHistorique.length;
//tableau pour affichage des tables de la partie Historique
let tabFinal = new Array;
let tabFinalPoints = new Array;
let tabFinalAge = new Array;
let tabFinalSam = new Array;
let tabFinalDecote = new Array;
let tabFinalTxAppelArrco = new Array;
let tabFinalRevalo = new Array;
let tabFinalAgeTrim = new Array;


//tableau de salaires pour la calculette SAM
let tabSalairesSam = new Array;
tabSalairesSam [0] = ["Année", "Salaire €", "Salaire revalorisé"];



//creation d'un lien dans le menu pour chaque bloc régime
for (let i = 0; i <= long - 1; i++) {
    let nomLien = tabRegime[i].id;
    let idLien = "lien-";
    let hrefLien = '#';
    idLien = idLien.concat('', nomLien);
    hrefLien = hrefLien.concat('', nomLien);
   
    let newLien = document.createElement("a");
    newLien.innerText = nomLien;
    newLien.href = hrefLien;
    newLien.className = "regime";
    newLien.id = idLien;
    conteneurMenu.appendChild(newLien);
}

//Importation des données des fichiers .csv pour les calculettes et les tableaux historique de données
fetch("./Parametres/Param_trim.csv")   // fetch permet d'accéder à des ressources sur le réseau : dans ce cas accès au fichier.csv du dossier - fetch renvoie une promise
   .then(response => response.text())
   .then((response) => {
       ExtractData (response, tabFinal)
   })
 
fetch("./Parametres/Param_points.csv")   // penser à initialiser un array
    .then(response => response.text())
    .then((response) => {
        ExtractData (response, tabFinalPoints)
    })   

fetch("./Parametres/Param_age_trim.csv")   // penser à initialiser un array
.then(response => response.text())
.then((response) => {
    ExtractData (response, tabFinalAgeTrim)
}) 

fetch("./Parametres/Param_historique_age.csv")   
   .then(response => response.text())
   .then((response) => {
       ExtractData (response, tabFinalAge);
       GenerateTable (tabFinalAge,"age")
   })

fetch("./Parametres/Param_historique_sam.csv")   
    .then(response => response.text())
    .then((response) => {
        ExtractData (response, tabFinalSam);
        GenerateTable (tabFinalSam,"sam")
    })

fetch("./Parametres/Param_historique_decote.csv")   
.then(response => response.text())
.then((response) => {
    ExtractData (response, tabFinalDecote);
    GenerateTable (tabFinalDecote,"decote")
})    

fetch("./Parametres/Param_historique_tx-appel-arrco.csv")   
.then(response => response.text())
.then((response) => {
    ExtractData (response, tabFinalTxAppelArrco);
    GenerateTable (tabFinalTxAppelArrco,"tx-appel-arrco")
})  

fetch("./Parametres/Param_historique_revalo.csv")   
.then(response => response.text())
.then((response) => {
    ExtractData (response, tabFinalRevalo);
    GenerateTable (tabFinalRevalo,"revalo")
})  

ChangerMonnaieInput([monnaieSymboleInput, monnaieSymboleResult], francs, euros, saisieAnneeTrim);   //calculette trimestres -> changer la devise affichée si checkbox francs ou euros cochés
ChangerMonnaieInput([monnaieSymboleInputArrco], francsArrco, eurosArrco, saisieAnneeArrco);         //calculette arrco
ChangerMonnaieInput([monnaieSymboleInputCnavpl], francsCnavpl, eurosCnavpl, saisieAnneeCnavpl);     //calculette cnavpl

ChoixDateInput(() => resultatDateLegal.innerText, choixDateLegale, saisieDateDep) ;  //pour choix date - si checkbox choixDateLegale cochée, la date légale est écrite dans l'input saisieDateDep
ChoixDateInput(() => CalculTauxPlein().toLocaleDateString(), choixDateTxPlein, saisieDateDepTxPlein) ;  //pour choix date - si checkbox choixDateTxPlein cochée, la date taux plein est écrite dans l'input saisieDateDepTxPlein
ChoixDateInput(() => resultatDateLegal.innerText, choixDateAutre, saisieDateDepAutre) ; //pour choix date - si checkbox choixDateAutre cochée

//VerifDateInput(saisieDateDepAutre) ;

CreaMenuHist();

// fonction pour la creation d'un lien dans le menu pour chaque table historique
function CreaMenuHist () {
    for (let i = 0; i <= longTabHist - 1; i++) {
        let nomLien = tabHistorique[i].id;
        let idLien = "lien-";
        let hrefLien = '#';
        idLien = idLien.concat('', nomLien);
        hrefLien = hrefLien.concat('', nomLien);

        let newLien = document.createElement("a");
        newLien.innerText = tabHistorique[i].innerHTML.trim();
        newLien.style.fontSize = "22px";
        newLien.href = hrefLien;
        newLien.className = "regime";
        newLien.id = idLien;
        menuHistorique.appendChild(newLien);
    }
}
    
function ExtractData (text, tabFinal) {
    let nbRows = text.split('\n').length;  /*nombre de ligne du texte*/
    let tabInit = text.split('\n');        /*tableau avec autant de ligne que de retour à la ligne*/
    
    for (let i = 0; i < nbRows; i++) {
      tabFinal[i] = tabInit[i].split(';'); 
    }
  }

//fonction pour générer un tableau à partir de la table extraite du csv (il faut d'abord créer dans le html la div conteneur et la div avec le titre)
function GenerateTable (tabFinal, nomTable) {
    //on construit les noms des div en fonction du nom de la table pour les retrouver dans le html
    let nomTbl = "table-";
    let nomDivConteneur = "conteneur-";
    nomTbl = nomTbl.concat('', nomTable);
    nomDivConteneur = nomDivConteneur.concat('', nomTbl);
    let tbl = document.createElement(nomTbl);
    tbl.className ="table-historique";
    let tblBody = document.createElement("tbody");
    let divTable = document.getElementById(nomDivConteneur);
    
    let nbRows = tabFinal.length - 1;
  
    var row = document.createElement("tr"); // creates a table row
    
    //calcul nb colonnes
    let nbCol = 0;
    let ind = 0;
    if (tabFinal[0][0] != undefined) {
        while (tabFinal[0][ind] != undefined) {
            nbCol = nbCol + 1;
            ind = ind + 1;
        }
    }

    // creating all cells of the head (th)
    for (var j = 0; j < nbCol; j++) {
        var cell = document.createElement("th");
        const element = tabFinal[0][j];                 // text to insert to the cell
        var cellText = document.createTextNode(element);
        cell.appendChild(cellText);                     // add the text to the cell
        row.appendChild(cell);                          // add the cell to the row
    }
    row.className = "table-head";
    tblBody.appendChild(row);                 // add the row to tblBody
    
    // creating all cells of other rows (tr)
    for (var i = 1; i <= nbRows; i++) {
        var row = document.createElement("tr");   // creates a table row
        
        for (var j = 0; j < nbCol; j++) {  //create cells on the row (5 colonnes)
        var cell = document.createElement("td");
        const element = tabFinal[i][j];
        var cellText = document.createTextNode(element);
        cell.appendChild(cellText);
        row.appendChild(cell);
        }
        row.className = "table-ligne";
        tblBody.appendChild(row); 
    }

    tbl.appendChild(tblBody);  // put the <tbody> in the <table>
    divTable.appendChild(tbl);  // put the <table> in the div extract-table

}

function fonctionsSaisieAge () {
    // Appeler fonctiond de vérification des input ici

    let result = verifInput([
        [saisieNbEnfant, (val) => EstEntier(val, 0, 10000)],
        [saisieNbTrim, (val) => EstEntier(val, 0, 1000)],
        [saisieAnneeFinTrim, (val) => EstEntier(val, 0, 10000)],
        [saisieTrimEnfant, (val) => EstEntier(val, 0, 10000)],
    ]);

    if (result == VIDE) {
        // TODO
        console.log("VIDE!")
    }
    else if (result == INCORRECT) {
        // TODO
        console.log("INCORRECT!")
    }
    else {        
        CalculAgeDepart();
        // CalculTrimDep(); // TEST
    }

    CalculAgeLegal();
}

function fonctionsSaisieSam () {
    let dateDep = new Date(saisieDateRetraiteSam.value);
    let anneeMax = dateDep.getFullYear() - 1;
    console.log("test annee dep ", anneeMax);
    let dateMin = new Date(2021,0,1);
    let dateMax = new Date(3000,11,31);
    let result = verifInput([
        [saisieAnneeSam, (val) => EstEntier(val, 0, anneeMax)],
        [saisieSalaireSam, (val) => EstEntier(val, 0, 100000)],
        [saisieTrimSam, (val) => EstEntier(val, 0, 10000)],
        [saisieDateRetraiteSam, (val) => EstDateValide(new Date(val), dateMin, dateMax)],
    ]);

    if (result == VIDE) {
        // TODO
        console.log("VIDE!")
    }
    else if (result == INCORRECT) {
        // TODO
        console.log("INCORRECT!")
    }
    else {        
        calculSAM ();
        // CalculTrimDep(); // TEST
    }
}

const VIDE = 0;
const INCORRECT = 1;
const OK = 2;
function verifInput(inputList) {

    let resultat = OK;

    for ([input, predicate] of inputList) {
        input.style.outline = "none";

        if (input.value.trim() == "") {
            resultat = VIDE;
        }
        else {
            let isOk = predicate(input.value.trim());

            if (!isOk) {
                if (resultat != VIDE) {
                    resultat = INCORRECT;
                    input.style.outline = "1px solid #FF0000";
                }
            }
        }
    }

    return resultat;
}

//calcul des parametres de l'age legal de la calculette Age 
function CalculAgeLegal () {
    
    let DDN = new Date(saisieDDN.value);
    //on recupère l'age legal avec fonction qui retourne array(annee, mois) et le nombre de trim requis pour taux plein
    let ageAnnee = AgeLegal(DDN)[0];
    let ageMois = AgeLegal(DDN)[1];
    let trimRequis = TrimRequis(DDN);

    // on calcule la date de l'age légal
    let dateAgeLegal = new Date;
    dateAgeLegal = CalculDateSelonAge(DDN, ageAnnee, ageMois);

    // on récupère l'age taux plein auto
    let anneeTxPleinAge = TauxPleinAge(DDN).annee;
    let moisTxPleinAge = TauxPleinAge(DDN).mois;

    let dateNull = new Date(1900,0,1);
    dateNull = dateNull.toLocaleDateString();
    if(trimRequis != trimRequis) {    //si le résultat est NaN (il ne peut pas être égal à lui meme)
        resultatAgeLegal.innerText = "0";
        resultatTrimLegal.innerText = 0;
        resultatDateLegal.innerText = dateNull;
    }
    else {
        resultatDateLegal.innerText = dateAgeLegal.toLocaleDateString();  //affichage date age légale
        resultatTrimLegal.innerText = trimRequis;  //affichage trim requis
        //affichage age legal x ans et x mois
        if (ageMois == 0) {
            resultatAgeLegal.innerText = ageAnnee + " ans";
        }
        else {
            resultatAgeLegal.innerText = ageAnnee + " ans et " + ageMois + " mois";
        }
        //affichage age auto x ans et x mois
        if (moisTxPleinAge == 0) {
            resultatAgeAuto.innerText = anneeTxPleinAge + " ans";
        }
        else {
            resultatAgeAuto.innerText = anneeTxPleinAge + " ans et " + moisTxPleinAge + " mois";
        }
    }
    if (DDN.getFullYear() < 1000 || DDN.getFullYear() != DDN.getFullYear()) {
        conteneurResAgeLegal.style.visibility = "hidden";
    }
    else {
        conteneurResAgeLegal.style.visibility = "visible";
    }
}


//fonction pour afficher age et date de départ choisie + cumul trim + trim manquant + decote
function CalculAgeDepart () {
    let DDN = new Date(saisieDDN.value);
   
    //on récupère la date de départ renseignée par l'utilisateur qui coche soit au plus tot (choixDateLegale), soit taux plein (choixDateTxPlein), soit autre
    let dateDepInput = saisieDateDep;
    if (choixDateLegale.checked == true) {
        dateDepInput = saisieDateDep;
    }
    if (choixDateTxPlein.checked == true) {
        dateDepInput = saisieDateDepTxPlein;
    }
    if (choixDateAutre.checked == true) {
        dateDepInput = saisieDateDepAutre;
    }
    let dateDep = new Date(dateDepInput.value);
        
    let dateOk = DateOk(dateDep)    //verif si date sup ou = à age legal

    let ageRes = CalculAgeSelonDate(DDN, dateDep)[0];
    let moisRes = CalculAgeSelonDate(DDN, dateDep)[1];

    let tabResTrim = CalculTrimDep (dateDep); //retourne les résultatsnbTrimCumul, nbTrimManquant, decoteRG, decoteArrco

    let nbTrimCumul = tabResTrim.nbTrimCumul;
    let nbTrimManquant = tabResTrim.nbTrimManquant;
    let decoteRG = tabResTrim.decoteRG;
    let decoteArrco = tabResTrim.decoteArrco;
    let decoteCNAVPL = tabResTrim.decoteCNAVPL;
    let surcoteRG = tabResTrim.surcoteRG;
    let surcoteCNAVPL = tabResTrim.surcoteCNAVPL;

    let dateNull = new Date(1900,0,1);
    dateNull = dateNull.toLocaleDateString();
    if (ageRes != ageRes || !dateOk) {    //si le résultat est NaN (il ne peut pas être égal à lui meme)
        dateDepInput.style.border= "1px solid #FF0000";
        resultatTrimTotal.innerText = "0";
        resultatTrimManquant.innerText = "0";
        resultatMinoRG.innerText = "0";
        resultatMinoArrco.innerText = "0";
        resultatAge.innerText = "0";
        resultatDate.innerText = dateNull;
        conteneurMino.style.display = "none";
        conteneurMajo.style.display = "none";
             
    }
    else {
        dateDepInput.style.border = "1px solid #0cbe89";
        //affichage trimestres
        resultatTrimTotal.innerText = nbTrimCumul;
        resultatTrimManquant.innerText = nbTrimManquant;
        resultatTrimEnfant.innerText = saisieTrimEnfant.value;
        //affichage minoration ou majoration
        if (decoteRG == 0 && surcoteRG == 0) {
            conteneurMino.style.display = "none";
            conteneurMajo.style.display = "none";
        }
        else {
            if (nbTrimManquant > 0) {
                conteneurMino.style.display = "block";
                conteneurMajo.style.display = "none";
                resultatMinoRG.innerText = "-" + decoteRG + "%";
                resultatMinoArrco.innerText = "-" + decoteArrco + "%";
                resultatMinoCNAVPL.innerText = "-" + decoteCNAVPL + "%";
            }
            else {
                conteneurMajo.style.display = "block";
                conteneurMino.style.display = "none";
                resultatMajoRG.innerText = "+" + surcoteRG + "%";
                resultatMajoCNAVPL.innerText = "+" + surcoteCNAVPL + "%";
            }
        }

        //affichage date et age
        resultatDate.innerText = dateDep.toLocaleDateString();
        if (moisRes == 0) {
            resultatAge.innerText = ageRes + " ans";
        }
        else {
            resultatAge.innerText = ageRes + " ans et " + moisRes + " mois";
        }
    }
    
}

//fonction pour calculer le nombre de trimestres cumulés à la date de départ indiquée et calcul du nombre de trimestres manquants pour le taux plein
function CalculTrimDep (dateDep) {
    let DDN = new Date(saisieDDN.value);
    let trimRequis = resultatTrimLegal.innerText;
    //let dateDep = new Date(saisieDateDep.value);
    let nbTrim = parseInt(saisieNbTrim.value);
    let nbTrimEnfant = parseInt(saisieTrimEnfant.value);
    let anneeTrim = parseInt(saisieAnneeFinTrim.value);
   
    //calcul trim manquants
        //trim manquants par rapport à la durée d'assurance requise
    nbTrimCumul = TrimDep(dateDep, nbTrim, anneeTrim) + nbTrimEnfant;
    let trimManquantDuree = trimRequis - nbTrimCumul;  
    
        //Age à la date de départ en retraite en annee  et mois (ex xx ans et xx mois)
    let anneeAgeDep = CalculAgeSelonDate(DDN, dateDep)[0];
    let moisAgeDep = CalculAgeSelonDate(DDN, dateDep)[1];
        //Age au taux plein auto en annee  et mois (ex xx ans et xx mois)
    let anneeAgeAuto = TauxPleinAge(DDN).annee;
    let moisAgeAuto = TauxPleinAge(DDN).mois;
        //trim manquants par rapport à l'age du taux plein auto
    let trimManquantAge = AgeDiffTrim(anneeAgeDep, moisAgeDep, anneeAgeAuto, moisAgeAuto);
    
    let nbTrimManquant = Math.min(20, Math.max(0,Math.min(trimManquantDuree, trimManquantAge)));
    
    //calcul decote
    let decoteRG = Decote(nbTrimManquant).RG;
    let decoteArrco = Decote(nbTrimManquant).Arrco;
    let decoteCNAVPL = Decote(nbTrimManquant).CNAVPL;

    //calcul surcote
    let dateAgeLegal = CalculDateSelonAge(DDN, AgeLegal(DDN)[0], AgeLegal(DDN)[1]);
    let nbTrimSurcoteMax = DiffTrimCivil (dateAgeLegal, dateDep);
    let nbTrimSurcote = Math.min(nbTrimSurcoteMax, Math.max(0, nbTrimCumul - trimRequis));
    let surcoteRG = Surcote(nbTrimSurcote).RG;
    let surcoteCNAVPL = Surcote(nbTrimSurcote).CNAVPL;

    //let tabRes = new Array(nbTrimCumul, nbTrimManquant, decoteRG, decoteArrco);
    let tabRes = {};
    tabRes.nbTrimCumul = nbTrimCumul;
    tabRes.nbTrimManquant = nbTrimManquant;
    tabRes.decoteRG = decoteRG;
    tabRes.decoteArrco = decoteArrco;
    tabRes.decoteCNAVPL = decoteCNAVPL;
    tabRes.surcoteRG = surcoteRG;
    tabRes.surcoteCNAVPL = surcoteCNAVPL;

    return tabRes
}

function CalculTauxPlein() {
    //calcul de la date du taux plein
    let DDN = new Date(saisieDDN.value);
    let nbTrim = parseInt(saisieNbTrim.value);
    let anneeTrim = parseInt(saisieAnneeFinTrim.value);
    let nbTrimEnfant = parseInt(saisieTrimEnfant.value);
    let trimRequis = resultatTrimLegal.innerText;

    let DateTxPleinTrim = TauxPleinTrim(nbTrim, nbTrimEnfant, anneeTrim, trimRequis);
    let DateTxPleinAge = TauxPleinAge(DDN).date;
    let ageLegal = AgeLegal(DDN);
    let dateAgeLegal = CalculDateSelonAge (DDN, ageLegal[0], ageLegal[1]);
    let dateTxPlein = new Date;
    if (DateTxPleinAge < DateTxPleinTrim) {
        dateTxPlein = DateTxPleinAge;
    }
    else {
        dateTxPlein = DateTxPleinTrim;
    }
    if (dateTxPlein < dateAgeLegal) {
        dateTxPlein = dateAgeLegal;
    }
    
    return dateTxPlein;
}


function ChoixDateInput(getDateToWrite, checkbox, inputSaisie) {
    checkbox.addEventListener("click", () => SaisieAutoDate (getDateToWrite, checkbox, inputSaisie));
}

function SaisieAutoDate (getDateToWrite, checkbox, inputSaisie) {
    if (saisieNbTrim.value != "") {
        conteneurResAge.style.visibility = "visible";
    }
    else {
        conteneurResAge.style.visibility = "hidden";
    }
   
    
    if (checkbox == choixDateAutre) {
        if (checkbox.checked == true) {
            inputSaisie.style.visibility = "visible";
            inputSaisie.disabled = false;
            fonctionsSaisieAge();
        }
        else {
            inputSaisie.style.visibility = "hidden";
            inputSaisie.disabled = false;
            fonctionsSaisieAge();
            inputSaisie.style.color = "#ccc";
        }
    }
    else {

        if (checkbox.checked == true) {
            let year = getDateToWrite().substring(6,10);
            let month = getDateToWrite().substring(3,5);
            let day = getDateToWrite().substring(0,2);
            let dateAuto = year + "-" + month + "-" + day;
            inputSaisie.style.visibility = "visible";
            inputSaisie.value = dateAuto; 
            inputSaisie.disabled = true;
            inputSaisie.style.color = "#4a4453";
            fonctionsSaisieAge();
        }
        else {
            inputSaisie.style.visibility = "hidden";
            inputSaisie.disabled = false;
            fonctionsSaisieAge();
            inputSaisie.style.color = "#ccc";
        }
    }
    
}


function DateOk (dateSaisie) {
    let DDN = new Date(saisieDDN.value);
    let dateAgeLegal = new Date;
    ageAnnee = AgeLegal(DDN)[0];
    ageMois = AgeLegal(DDN)[1];
    dateAgeLegal = CalculDateSelonAge(DDN, ageAnnee, ageMois);
    if (dateAgeLegal.toLocaleDateString() == dateSaisie.toLocaleDateString()) {
        return true;
    }
    else {
        if (dateSaisie>= dateAgeLegal) {
            return true;
        }
        else {
            return false;
        }
    }

}

//fonction pour entrer automatiquement date de l'age légal si coche "au plus tot"
function SaisieAutoDateLegale () {
    if (choixDateLegale.checked == true) {
        let dateAgeLegal = resultatDateLegal.innerText;
        let year = dateAgeLegal.substring(6,10);
        let month = dateAgeLegal.substring(3,5);
        let day = dateAgeLegal.substring(0,2);
        let dateAuto = year + "-" + month + "-" + day;
        saisieDateDep.style.visibility = "visible";
        saisieDateDep.value = dateAuto;
        saisieDateDep.disabled = true;
        saisieDateDep.style.color = "#4a4453";
        fonctionsSaisieAge();
    }
    else {
        saisieDateDep.style.visibility = "hidden";
        saisieDateDep.disabled = false;
        fonctionsSaisieAge();
        saisieDateDep.style.color = "#ccc";
    }
}

function ChoixEnfant () {
    if (choixFemme.checked == true) {
        let nbEnfants = saisieNbEnfant.value;
        saisieTrimEnfant.value = 8 * nbEnfants;
    }
    else {
        saisieTrimEnfant.value = 0;
    }
    //resultatTrimEnfant.innerText = saisieTrimEnfant.value;
    fonctionsSaisieAge();
}

//calcul des trimestres en fonction des inputs de la calculette trim et affichage des résulats
function calculTrim() {
    let annee = parseInt(saisieAnneeTrim.value);
    let salaire = parseInt(saisieSalaire.value);
    let estEuros = true;
    let montantTrim = 0;
    let nbTrim = 0;

    let resultat = {};
   
    if (francs.checked == true) {
        //montantTrim = montantTrimFrancs;  
        estEuros = false;
        resultat = CalculNbTrim (annee, salaire, estEuros); 
    }
    else {
        //montantTrim = montantTrimEuros;
        estEuros = true;
        resultat = CalculNbTrim (annee, salaire, estEuros);
    }

    nbTrim = resultat.Trim;
    montantTrim = resultat.MontantTrim;
    
    if(nbTrim != nbTrim) {    //si le résultat est NaN (il ne peut pas être égal à lui meme)
        resultatTrim.innerText = 0;
        resultatValeurTrim.innerText = 0;
    }
    else {
        resultatTrim.innerText = nbTrim;
        resultatValeurTrim.innerText = montantTrim;
    }
   
}

//calcul des points en fonction des inputs de la calculette Agirc-Arrco et affichage des résulats
function calculPointsArrco() {
    let annee = parseInt(saisieAnneeArrco.value);
    let salaire = parseInt(saisieSalaireArrco.value);
    let nbMois = parseInt(saisieNbMois.value);
    let longtab = tabFinalPoints.length;
    let k = 0;
    
    //on convertit le salaire en euros si le franc a été coché (ttes les données des paramètres sont en euros)
    if (francsArrco.checked == true) {
        salaire = salaire / 6.55957;
    }

    //si pas de saisie de l'input nombre de mois : on l'initialise à 12 (on suppose une année complète) 
    if (nbMois != nbMois) {     //si pas de saisie nbMois est NaN donc ne peut vérifier l'égalité
        nbMois = 12;
    }

    //on cherche l'indice de la ligne correspondant à l'année saisie
    for (let i = 1; i < longtab; i++) {
        let anneeTab = parseInt(tabFinalPoints[i][0]);
        if (anneeTab == annee) {
            k = i;
        }
    }
    
    //on recupere tous les paramètres utiles pour l'année saisie
    let pass = parseFloat(tabFinalPoints[k][1].replace(/ /g,'')); 
    let srArrco = parseFloat(tabFinalPoints[k][2]); 
    let srAgirc = parseFloat(tabFinalPoints[k][3].replace(/ /g,'')); 
    let srIrcantec = parseFloat(tabFinalPoints[k][4].replace(/ /g,''));
    let txIrcantecA = parseFloat(tabFinalPoints[k][9].replace(/ /g,''));
    let txIrcantecB = parseFloat(tabFinalPoints[k][10].replace(/ /g,''));
    let txT1 = parseFloat(tabFinalPoints[k][5].replace(/ /g,'')); 
    let txT2 = parseFloat(tabFinalPoints[k][6].replace(/ /g,'')); 
    let txTB = parseFloat(tabFinalPoints[k][7].replace(/ /g,'')); 
    let txTC = parseFloat(tabFinalPoints[k][8].replace(/ /g,'')); 
    let txConvAgircArrco = 0.347791548;   // taux de conversion des points agirc en agirc-arrco
    let nbArrco = 0;
    let nbAgircTB = 0;
    let nbAgircTC = 0;
    let nbAgircArrco = 0;
    let nbIrcantec = 0;
    let cotisT2 = 0;
    

    //on recalcule le pass au prorata du nombre de mois saisie
    pass = nbMois * pass / 12;

    //si ircantec coché
    if (toggleArrco.checked == true) {
        //modification style togle
        choixArrco.style.color = "#b3aa99";
        choixArrco.style.fontSize = "22px";
        choixArrco.style.fontWeight = "lighter";
        choixIrcantec.style.color = "#ccc ";
        choixIrcantec.style.fontSize = "24px";
        choixIrcantec.style.fontWeight = "bold";

        //modification style bloc input
        document.getElementById("conteneur-saisie-cadre").style.visibility = "hidden";
        
        //modification style bloc resultat  
        titreRes.innerText = "Points Ircantec";
        document.getElementById("contenu-info-res1").innerText = "Les cotisations sont calculées par tranche et les taux de cotisations diffèrent selon ces tranches.";
       
        blocResultat2Arrco.style.opacity = "0"; 

        //Calcul cotisation et points Ircantec
        let cotisIrcantec = Math.min(pass, salaire) * txIrcantecA + Math.max(0, Math.min(7*pass, salaire - pass)) * txIrcantecB;
        nbIrcantec = Math.round(100 * cotisIrcantec / srIrcantec) / 100;
        if(nbIrcantec != nbIrcantec) {    //si le résultat est NaN, il ne vérifie pas l'égalité 
            resultatAgircArrco.innerText = 0;
        }
        else {
            resultatAgircArrco.innerText = nbIrcantec;

        }

    }
    //si Agirc-Arrco coché
    else {
        //modification style toggle
        choixIrcantec.style.color = "#b3aa99";
        choixIrcantec.style.fontSize = "22px";
        choixIrcantec.style.fontWeight = "lighter";
        choixArrco.style.color = "#ccc ";
        choixArrco.style.fontSize = "24px";
        choixArrco.style.fontWeight = "bold";

        //modification style bloc input
        document.getElementById("conteneur-saisie-cadre").style.visibility = "visible";

        //modification style bloc resultat  
        titreRes.innerText = "Points Agirc-Arrco";
        document.getElementById("contenu-info-res1").innerText = "Depuis le 01/01/2019, les points ARRCO et les points AGIRC ont fusionné avec la création d'un nouveau régime Agirc-Arrco. Les points acquis avant cette date sont convertis en points Agirc-Arrco.";
        blocResultat2Arrco.style.opacity = "1"; 

        //Calcul cotisation T1 - salaire en euros (le calcul est le meme qque soit l'année et le statut)
        let cotisT1 = Math.min(pass, salaire) * txT1/100;
        
        //Calcul cotisation T2 et points
        if (annee < 2019) {
            blocResultat2Arrco.style.color = "#ccc";  //on rend visible la partie resultat avec point arrco, agircTB et agircTc
            //calcul cotisation NC - salaire en euros
            if (nonCadre.checked == true) {
                cotisT2 = Math.max(0, Math.min(2*pass, salaire - pass)) * txT2/100;
                nbArrco = Math.round(100 * ((cotisT1 + cotisT2) / srArrco)) / 100;
                nbAgircTB = 0;
                nbAgircTC = 0;
                nbAgircArrco = nbArrco;
            }
    
            //calcul cotisation C
            if (cadre.checked == true) {
                let cotisTB = Math.max(0, Math.min(3*pass, salaire - pass)) * txTB/100;
                let cotisTC = Math.max(0, Math.min(4*pass, salaire - 4 * pass)) * txTC/100;
                nbArrco = Math.round(100 * cotisT1 / srArrco) /100 ;  //round arrondit à l'entier le plus proche
                nbAgircTB = Math.round(100 * cotisTB / srAgirc) /100;
                nbAgircTC = Math.round(100 * cotisTC / srAgirc) /100;
                nbAgircArrco = Math.round(100 * (nbArrco + txConvAgircArrco * (nbAgircTB + nbAgircTC))) / 100;
    
            }
    
        }
        else {
            blocResultat2Arrco.style.color = "#929292";  //si année sup à 2019 : on met en gris la partie resultat avec point arrco, agircTB et agircTc
            cotisT2 = Math.max(0, Math.min(7*pass, salaire - pass)) * txT2/100;
            nbAgircArrco = Math.round(100 * (cotisT1 + cotisT2) / srArrco) / 100;
        }
        
        if(nbAgircArrco != nbAgircArrco) {    //si le résultat est NaN, il ne vérifie pas l'égalité 
            resultatAgircArrco.innerText = 0;
            resultatArrco.innerText = 0;
            resultatAgircTB.innerText = 0;
            resultatAgircTC.innerText = 0;
        }
        else {
            resultatAgircArrco.innerText = nbAgircArrco;
            resultatArrco.innerText = nbArrco;
            resultatAgircTB.innerText = nbAgircTB;
            resultatAgircTC.innerText = nbAgircTC;
        }
    }
}

//calcul des points en fonction des inputs de la calculette CNAVPL et affichage des résulats
function calculPointsCnavpl () {
    let annee = parseInt(saisieAnneeCnavpl.value);
    let salaire = parseInt(saisieSalaireCnavpl.value);
    let longtab = tabFinalPoints.length;
    let k = 0;
    
    //on convertit le salaire en euros si le franc a été coché (ttes les données des paramètres sont en euros)
    if (francsCnavpl.checked == true) {
        salaire = salaire / 6.55957;
    }

    //on cherche l'indice de la ligne correspondant à l'année saisie
    for (let i = 1; i < longtab; i++) {
        let anneeTab = parseInt(tabFinalPoints[i][0]);
        if (anneeTab == annee) {
            k = i;
        }
    }
    
    //on recupere tous les paramètres utiles pour l'année saisie + initialisation var res
    let pass = parseFloat(tabFinalPoints[k][1].replace(/ /g,'')); 
    let nbCnavpl = 0;

    if ((annee >= 1963) && (annee < 2004)) {
        resultatCnavpl.innerText = "400";
    }

    else {
        if ((annee >= 2004) && (annee < 2015)) {
            let assietteT1 = 0.85 * pass;
            let assietteT2 = 5 * pass - assietteT1;
            let pointsT1 = 450 * Math.min(assietteT1, salaire) / assietteT1;
            let pointsT2 = 100 * Math.min(Math.max(0, salaire - assietteT1), assietteT2) / assietteT2;
            nbCnavpl = Math.round(100 * pointsT1) / 100 + Math.round(100 * pointsT2) / 100;
        }
    
        if (annee >= 2015) {
            let assietteT1 = pass;
            let assietteT2 = 5 * pass;
            let pointsT1 = 525 * Math.min(assietteT1, salaire) / assietteT1;
            let pointsT2 = 25 * Math.min(assietteT2, salaire) / assietteT2;
            nbCnavpl = Math.round(100 * pointsT1) / 100 + Math.round(100 * pointsT2) / 100;
        }
    
        if(nbCnavpl != nbCnavpl) {    //si le résultat est NaN, il ne vérifie pas l'égalité 
            resultatCnavpl.innerText = 0;
        }
        else {
            resultatCnavpl.innerText = nbCnavpl;
        }
    }

}

function ChangerMonnaieInput(elementArray, checkboxF, checkboxE, inputDate) {
    checkboxE.addEventListener("change", () => ChangerMonnaieInput_GererChangement(elementArray, checkboxF, checkboxE, inputDate));
    checkboxF.addEventListener("change", () => ChangerMonnaieInput_GererChangement(elementArray, checkboxF, checkboxE, inputDate));
    inputDate.addEventListener("input", () => ChangerMonnaieInput_GererChangement(elementArray, checkboxF, checkboxE, inputDate));
}



function ChangerMonnaieInput_GererChangement(elementArray, checkboxF, checkboxE, inputDate) {
    if (DateEstOkPourEuro(inputDate.value) ) {
        checkboxE.checked = true;
        calculTrim();
        checkboxF.disabled = true;
    }
    else {
        checkboxF.disabled = false;
    }
    
    if (checkboxF.checked == true) {
        SetValueForAllTextInArray(elementArray, "F");   
    }
    else {
        SetValueForAllTextInArray(elementArray, "€");
    }

}

//calcul du SAM de la calculette SAM et affichage des résulats
function calculSAM () {
    let dateDep = new Date(saisieDateRetraiteSam.value);
    let annee = parseInt(saisieAnneeSam.value);
    let salaire = saisieSalaireSam.value;
    let nbTrim = saisieTrimSam.value;
    
    tabSalairesSam = RemplirTabSalaires (dateDep, annee, salaire, nbTrim);
    let sam = SAM (tabSalairesSam);  // on recalcule le sam à chaque saisie
    
    resultatSam.innerText = sam;
    saisieAnneeSam.value = annee + 1;
    saisieSalaireSam.value = "";
    saisieTrimSam.value = "";
    conteneurTabSam.innerText = "";
    GenerateTable (tabSalairesSam, "calcul-sam");
}

function reinitSam () {
    //vider la div avec le tableau affiché
    conteneurTabSam.innerText = "";
    //vider la table tabSalairesSam
    tabSalairesSam.splice(1);
    resultatSam.innerText = "";
    saisieAnneeSam.value = "";

    //TEST tri fusion - tri Quick sort
    let tab = [1, 8, 12, 4, 10];
    let tabTest = new Array;
    tabTest = TriFusion (tab, tabTest);
    console.log ("test tri fusion ", tabTest);
}

function calculNbTrimSam () {
    let annee = parseInt(saisieAnneeSam.value);
    let salaire = saisieSalaireSam.value;
    let estEuros = true;
    let nbTrim = CalculNbTrim(annee, salaire, estEuros).Trim;
    saisieTrimSam.value = nbTrim;
}


function actionMenu () {
    actionMenuPrinc();
    actionMenuCalculette();
    actionMenuHistorique();
}

function actionMenuPrinc () {
    
    for (let i = 0; i <= long - 1; i++) {
        let divRegime = tabRegime[i];
        let nomLien = tabRegime[i].id;
        let idLien = "lien-";
        idLien = idLien.concat('', nomLien);
        let divLien = document.getElementById(idLien);
    
        //si plus de la moitié du bloc régime est sur l'écran, on change la couleur du nom du régime dans le menu et on agrandit le bouton
        if ((divRegime.getBoundingClientRect().bottom >= window.innerHeight / 2) && (divRegime.getBoundingClientRect().top <= window.innerHeight / 2)) {
            divLien.style.color = "#ffeecb";
            divLien.style.scale = "1.07";    
        }
        
        else {
            divLien.style.color = "rgb(53, 46, 46)";
            divLien.style.scale = "1";           
        }        
    }
}   

function actionMenuCalculette () {   
    for (let i = 0; i <= longTabCal - 1; i++) {
        let divCalculette = tabCalculette[i];
        let nomLien = tabCalculette[i].id;
        let idLien = "lien-";
        idLien = idLien.concat('', nomLien);
        let divLien = document.getElementById(idLien);
    
        //si plus de la moitié du bloc régime est sur l'écran, on change la couleur du nom du régime dans le menu et on agrandit le bouton
        if ((divCalculette.getBoundingClientRect().bottom >= window.innerHeight / 4) && (divCalculette.getBoundingClientRect().top <= window.innerHeight / 4)) {
            divLien.style.color = "#ffeecb";
            divLien.style.scale = "1.07";    
        }
        
        else {
            divLien.style.color = "rgb(53, 46, 46)";
            divLien.style.scale = "1";           
        }        
    }
}   

function actionMenuHistorique () {   
    let tabConteneurHist = document.getElementsByClassName("conteneur-table-historique");
    let longTabCont = tabConteneurHist.length;
    for (let i = 0; i <= longTabCont - 1; i++) {
        let divHistorique = tabConteneurHist[i];
        let nomLien = tabHistorique[i].id;
        let idLien = "lien-";
        idLien = idLien.concat('', nomLien);
        let divLien = document.getElementById(idLien);
    
        //si plus de la moitié du bloc régime est sur l'écran, on change la couleur du nom du régime dans le menu et on agrandit le bouton
        if ((divHistorique.getBoundingClientRect().bottom >= window.innerHeight / 2) && (divHistorique.getBoundingClientRect().top <= window.innerHeight / 2)) {
            divLien.style.color = "#ffeecb";
            divLien.style.scale = "1.07";    
        }
        
        else {
            divLien.style.color = "rgb(53, 46, 46)";
            divLien.style.scale = "1";           
        }        
    }
}  