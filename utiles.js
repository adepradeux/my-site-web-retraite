//return true si après 2001 (euro uniquement, plus de francs)
function DateEstOkPourEuro(date) {
    if (date > 2001 ) {
        return true;
    }
    else {
        return false;
    }
}

function SetValueForAllTextInArray(array, value) {
    let long = array.length;
    for (let i = 0; i <= long - 1; i++) {
        array[i].innerText = value;
    }
}

//fonction pour calculer l'âge x ans et y mois à la date indiquée
function CalculAgeSelonDate (DDN, dateDep) {
    //on récupère la date de naissance et la saisie de l'utilisateur de la date de départ
    let jourDDN = DDN.getDate();
    let moisDDN = DDN.getMonth() + 1; //les mois des dates en JS commencent à 0
    let moisDateDep = dateDep.getMonth() + 1;
    let ageRes = dateDep.getFullYear() - DDN.getFullYear() - 1; //age l'année précédent la date de départ
    let moisRes = 0;
    let tabRes = new Array;
    
    //on définit le mois suivant celui la date de naissance ou le meme si né le 1er jour du moi
    if (jourDDN != 1) {
        moisDDN = moisDDN + 1;
    }
    
    if (moisDDN <= moisDateDep) {
        ageRes = ageRes + 1;
        moisRes = (12 - (moisDDN - moisDateDep)) % 12;
        
    }
    else {
        moisRes = (12 - (moisDDN - moisDateDep))
    }
    tabRes[0] = ageRes;
    tabRes[1] = moisRes;
    return tabRes;
}

// fonction pour calculer la date 01/MM/AAAA selon l'âge en année et mois
function CalculDateSelonAge (DDN, ageAnnee, ageMois) {
    let dateAge = new Date;
    let anneeDDN = DDN.getFullYear();
    let moisDDN = DDN.getMonth() + 1;
    let jourDDN = DDN.getDate();
    dateAge.setDate(1);
    dateAge.setFullYear(anneeDDN + ageAnnee);
    dateAge.setMonth(moisDDN - 1); //les mois des dates en JS commencent à 0
    
    //si né le premier jour du mois : le mois de l'âge légal est identique au mois de naissance donc rien à calculer. Si jour naissance différent de 1, on rajoute +1mois
    if (jourDDN != 1) {
        
        dateAge = dateAddMonth (dateAge, 1);
    }
    
    //on rajoute ensuite les x mois en plus (par ex 62 ans et x mois)
    dateAge = dateAddMonth(dateAge,ageMois);
    return dateAge;
}

//fonction pour ajouter un certain nombre de mois à une date -> renvoie une date postérieure à la date initiale après avoir ajouté les mois
function dateAddMonth (dateInit,monthsToAdd) {
    let dateFinale = new Date;
    monthsToAdd = parseInt(monthsToAdd);
    dateFinale.setDate(1);
    let moisDate = dateInit.getMonth() + 1;
    let mod = (moisDate + monthsToAdd) % 12;
    if ((moisDate + monthsToAdd) <= 12) {
        dateFinale.setMonth(moisDate + monthsToAdd - 1);
        dateFinale.setFullYear(dateInit.getFullYear());
    }
    else {
        dateFinale.setMonth(mod - 1);
        dateFinale.setFullYear(dateInit.getFullYear() + 1);
    }   
    return dateFinale;
}

//renvoie l'age légal sous le forme [annee, mois] (ex :62 ans et 3 mois)
function AgeLegal (DDN) {
    let anneeDDN = DDN.getFullYear();
    let moisDDN = DDN.getMonth() + 1;
    let longTab = tabFinalAgeTrim.length;
    let k = 0;
    
    //on cherche l'indice de la ligne correspondant à l'année de naissance
    for (let i = 1; i < longTab; i++) {
        let anneeTab = parseInt(tabFinalAgeTrim[i][0]);
        if (anneeTab == anneeDDN) {
            k = i;
        }
    }
    // on récupère l'année et le mois de l'age légal
    let ageAnnee = parseInt(tabFinalAgeTrim[k][1]);
    let ageMois = 0;
    //cas particulier de la génération 1961 selon le mois de naissance
    if (anneeDDN == 1961) {
        if (moisDDN < 9) {
            ageMois = 0;
        }
        else {
            ageMois = 3;
        }
    }
    else {
        ageMois = tabFinalAgeTrim[k][2];
    }
    result = new Array(ageAnnee,ageMois);
    return result
}

//renvoie le nombre de trim requis pour le taux plein
function TrimRequis (DDN) {
    let anneeDDN = DDN.getFullYear();
    let moisDDN = DDN.getMonth() + 1;
    let longTab = tabFinalAgeTrim.length;
    let k = 0;
    
    //on cherche l'indice de la ligne correspondant à l'année de naissance
    for (let i = 1; i < longTab; i++) {
        let anneeTab = parseInt(tabFinalAgeTrim[i][0]);
        if (anneeTab == anneeDDN) {
            k = i;
        }
    }
    // on récupère lle nombre de trim requis pour le taux plein
    let trimRequis = parseInt(tabFinalAgeTrim[k][3]);
    
    //cas particulier de la génération 1961 selon le mois de naissance
    if (anneeDDN == 1961) {
        if (moisDDN < 9) {
            trimRequis = trimRequis;
        }
        else {
            trimRequis = trimRequis + 1;
        }
    }
    return trimRequis;
}

//renvoie le nombre de trim cumulés à la date de départ 
function TrimDep (dateDep, nbTrim, anneeTrim) {
    console.log("verif dateDateInput trimDep", dateDep);
    let anneeDep = dateDep.getFullYear();
    let moisDep = dateDep.getMonth() + 1;
    let trimAjout = 0;
    let trimDerniereAnnee = Math.trunc((moisDep - 1) / 3);

    //on somme le nombre de trimestres à ajouter depuis l'année suivant l'année saisie pour la fin des trim (à fin xxxx) jusqu'à la l'année de la date de départ
    for (let comptAnnee = anneeTrim + 1 ; comptAnnee <= anneeDep; comptAnnee++) {
        if (comptAnnee != anneeDep) {
            trimAjout = trimAjout + 4;
        }
        else {
            trimAjout = trimAjout + trimDerniereAnnee;
        }
    }
    //total des trim validés à la date de depart et nb trimestres manquants à la date de départ + calcul decote
    let nbTrimDep = nbTrim + trimAjout;
    return nbTrimDep;
}

//renvoie la date du taux plein par les trimestres jj/mm/aaaa selon le nombre de trimestres cumulé à la fin de anneeTrim (ex : 70 trim cumulé à fin anneeTrim = 2023)
function TauxPleinTrim (nbTrim, nbTrimEnfant, anneeTrim, trimRequis) {
    let dateCumulTrim = new Date(anneeTrim, 12, 31);
    let nbTrimManquant = trimRequis - (nbTrim + nbTrimEnfant);
    let dateTauxPleinTrim = new Date;
    dateTauxPleinTrim.setFullYear(anneeTrim + 1 + Math.trunc(nbTrimManquant / 4));
    dateTauxPleinTrim.setMonth((nbTrimManquant % 4) * 3);
    dateTauxPleinTrim.setDate(1);
    return dateTauxPleinTrim
}

//renvoie la date du taux plein automatique par l'âge sous la forme jj/mm/aaaa et l'age sous la forme xx ans et xx mois
function TauxPleinAge (DDN) {
    let anneeDDN = DDN.getFullYear();
    let moisDDN = DDN.getMonth() + 1;
    let longTab = tabFinalAgeTrim.length;
    let k = 0;
    
    //on cherche l'indice de la ligne correspondant à l'année de naissance
    for (let i = 1; i < longTab; i++) {
        let anneeTab = parseInt(tabFinalAgeTrim[i][0]);
        if (anneeTab == anneeDDN) {
            k = i;
        }
    }
    
    let anneeTxPleinAge = parseInt(tabFinalAgeTrim[k][4]);
    let moisTxPleinAge = parseInt(tabFinalAgeTrim[k][5]);
    let dateTauxPleinAge = CalculDateSelonAge (DDN, anneeTxPleinAge, moisTxPleinAge) 
    let result = {};
    result.annee = anneeTxPleinAge;
    result.mois = moisTxPleinAge;
    result.date = dateTauxPleinAge; 
    
    return result;
}

//retoune le nombre de trimetres entiers entre 2 dates, en négatif si date2 est avant date1
function DateDiffTrim(date1, date2) {
    let nbJours = 0;
    let nbTrim = 0;
    if (date1.getTime() < date2.getTime()) {
        nbJours=(Math.floor(((date2.getTime()) - (date1.getTime())) / 1000 / 60 / 60 / 24));
    }
    else  {
        nbJours=(Math.floor(((date1.getTime()) - (date2.getTime())) / 1000 / 60 / 60 / 24));
    }
    
    nbTrim = Math.ceil((nbJours) / 365 * 4);
      console.log("nb jours ", nbJours);
    return nbTrim
}

//calcul du nombre de trimestres civils entiers entre 2 dates pour calcul de la surcote (Date1 : date age legal Date2 : date depart)
function DiffTrimCivil (date1, date2) {
    let anneeDate1 = date1.getFullYear();
    let moisDate1 = date1.getMonth() + 1;
    let dateDebutSurcote = new Date;
        
        
    if (moisDate1 == 2 || moisDate1 == 5 || moisDate1 == 8 || moisDate1 == 11) {
        dateDebutSurcote = dateAddMonth(date1, 2);  //on ajoute 2 mois pour nouvelle date au 1er jour du trim civil suivant
    }
    else {
        if (moisDate1 == 3 || moisDate1 == 6 || moisDate1 == 9 || moisDate1 == 12) {
            dateDebutSurcote = dateAddMonth(date1, 1);  //on ajoute 1 mois pour nouvelle date au 1er jour du trim civil suivant
        }
        else {
            dateDebutSurcote = date1;
        }
    }

    console.log("date 1 mois ", moisDate1, "date debut surcote ", dateDebutSurcote);
    let diffAnnee = date2.getFullYear() - dateDebutSurcote.getFullYear();
    let diffMois = date2.getMonth() - dateDebutSurcote.getMonth();
    result = Math.trunc((diffAnnee * 12 + diffMois) / 3);
    return result
}

//retourne le nombre de trimestres entre 2 ages, arrondi au sup pour calcul decote
function AgeDiffTrim (anneeAge1, moisAge1, anneeAge2, moisAge2) {
    let diffAnnee = anneeAge2 - anneeAge1;
    let diffMois = moisAge2 - moisAge1;
    let nbDiffMois = diffAnnee * 12 + diffMois;
    let result = Math.ceil(nbDiffMois / 3);
    return result
}


//calcul decote
function Decote (nbTrimManquant) {
    let decote = {};
    let decoteRG =  Math.min(25, 1.25 * nbTrimManquant);    
    let decoteArrco = 0;
    if (nbTrimManquant <= 12) {
        decoteArrco = nbTrimManquant; //1% de decote par trim manquant jusqu'au 12eme trim
    }
    else {
        decoteArrco = Math.min(22, 12 + (nbTrimManquant - 12) * 1.25);
    }

    let decoteCNAVPL = Math.min(25, 1.25 * nbTrimManquant); 

    decote.RG = decoteRG;
    decote.Arrco = decoteArrco;
    decote.CNAVPL = decoteCNAVPL;
    return decote
}

//calcul surcote
function Surcote (nbTrimSurcote) {
    let surcote = {};
    let surcoteRG =  1.25 * nbTrimSurcote; 
    let surcoteCNAVPL = 1.25 * nbTrimSurcote;   
    
    surcote.RG = surcoteRG;
    surcote.CNAVPL = surcoteCNAVPL;
    
    return surcote
}

//fonction pour ajouter une ligne au tableau tabSalairesSam avec les input annee salaire et trim
function RemplirTabSalaires (dateDep, annee, salaire, nbTrim) {
    let longTabSam = tabSalairesSam.length;
    let longTabRevalo = tabFinalRevalo.length;
    let anneeDep = dateDep.getFullYear();
    let moisDep = dateDep.getMonth()+ 1;
    let salaireRevalo = 0;
    let k = 0;  //indice de la ligne de tabFinalRevalo
    let indCol = 0;

    //calcul salaire revalorisé

    //si 0 trim validé -> le salaire n'est pas pris en compte dans le SAM donc on le met à 0
    if (nbTrim == 0) {
        salaireRevalo = 0;
    }
    else {
        //on cherche l'indice de la ligne correspondant à l'année saisie dans la table des coeff de revalo tabFinalRevalo
             //si annee du salaire est sup à la dernière année du tableau -> on prend le coeff de l'année de la dernière ligne
        if (annee > parseInt(tabFinalRevalo[longTabRevalo - 1][0]) ) {
            k = longTabRevalo - 1;
        }
        else {
            for (let i = 1; i < longTabRevalo; i++) {
            let anneeTab = parseInt(tabFinalRevalo[i][0]);
                if (anneeTab == annee) {
                    k = i;
                }
            }
        }
        
        //si l'année de dateDep est = ou sup à l'année actuelle -> coeff de la dernière colonne, sinon autre colonne (on n'a les données que depuis 2021 = colonne 1)
        let dateToday = new Date;
        let anneeToday = dateToday.getFullYear();
        let coeffRevalo = 1;
    
        if (parseInt(anneeDep) >= parseInt(anneeToday)) {
            //on cherche le coeff de revalo de la dernière colonne (taux de l'année actuelle)
            while ( parseFloat(tabFinalRevalo[k][indCol]) ==  parseFloat(tabFinalRevalo[k][indCol]) && indCol < 10) {
                indCol = indCol + 1
            }
            coeffRevalo = parseFloat(tabFinalRevalo[k][indCol - 1].replace(/ /g,''));
        }
        else {
            if (anneeDep <= 2021) {                // TODO si annee inf à 2021 -> voir si message pour erreur
                indCol = 1 + (anneeDep - 2021);
            }
            else {
                if (anneeDep == 2022) {
                    if (moisDep <= 6) {
                        indCol = 2;
                    }
                    else {
                        indCol = 3;
                    }
                }
                else {
                    indCol = 3 + (anneeDep - 2022);
                }
            }
            coeffRevalo = parseFloat(tabFinalRevalo[k][indCol].replace(/ /g,''));
        }
        salaireRevalo = Math.round(parseFloat(salaire) * coeffRevalo * 100) / 100;
    }

    //on cherche si l'annee saisie est déjà dans le tableau de salaires
    let indAnnee = 0;
    for (let i = 1; i < longTabSam; i++) {
        let anneeTab = parseInt(tabSalairesSam[i][0]);
            if (anneeTab == annee) {
                indAnnee = i;
            }
        }
    if (indAnnee == 0) {    //si année pas encore dans le tableau, on enregistre les valeurs en dernière ligne
        tabSalairesSam[longTabSam] = [annee, salaire, salaireRevalo];
    } 
    else {                  // si année déjà dans le tableau, on écrase les anciennes valeurs
        tabSalairesSam[indAnnee] = [annee, salaire, salaireRevalo];
    }   
    
    return tabSalairesSam;
}

function TriFusion (tab) {
    let tabG = new Array;
    let tabD = new Array;
    let indMiddle = Math.trunc(tab.length/2);
    let tabFinal = new Array;
    if (tab.length > 1) {
        //création des 2 tableaux à partir du tab initial coupé en 2
        for (i = 0; i<= indMiddle - 1; i++) {
            tabG[i] = tab[i];
        }
        for (i = 0; i < tab.length - indMiddle; i++) {
            tabD[i] = tab[indMiddle + i]; 
        } 
        console.log("tab G" , tabG);
        console.log("tab D" , tabD);
        tabG = TriFusion(tabG);
        tabD = TriFusion(tabD);
        tabFinal = Fusion(tabG, tabD);
    }
    else {
        tabFinal = tab;
    }
    console.log("tab Final " , tabFinal);
    return tabFinal;

}

function Fusion(tabG, tabD) {  //avec tabG et tabD déjà triés
    let indG = 0;
    let indD = 0;
    let i = 0;
    let longG = tabG.length;
    let longD = tabD.length;
    let tabFinal = new Array;
    while ((indG < longG) && (indD < longD)) {
        if (tabG[indG] < tabD[indD]) {
            tabFinal[i] = tabG[indG];
            indG = indG + 1;
        }
        else {
            tabFinal[i] = tabD[indD];
            indD = indD + 1;
        }
        i = i + 1;
    }
    i = 1 + 1;
    if (indG < longG) {
        while (indG < longG) {
            let long = tabFinal.length;
            tabFinal[long] = tabG[indG];
            indG = indG + 1;
        }
    }
    if (indD < longD) {
        while (indD < longD) {
            let long = tabFinal.length;
            tabFinal[long] = tabD[indD];
            indD = indD + 1;
        }
    }
    return tabFinal;
}

function TriQuickSort (tab)  {
    let tabG = new Array;
    let tabD = new Array;
    let tabFinal = new Array;
    let longTab = tab.lenght;
    let pivot = tab[longTab - 1];
    let sep = 0; //indice de la separation entre les plus petits que le pivot et les plus grands
    
    if (longTab > 2) {
        for (i = 0; i < longTab - 1; i++) {
            if (tab[i] <= pivot) {
                if (i = sep) {   //si le nombre plus petit est juste après la séparation, il faut juste avancer la séparation
                    sep = sep + 1;
                }
                else {
                    let echange = tab[i];
                    tab [i] = tab [i - 1];
                    tab [i - 1] = echange;
                    sep = sep + 1; 
                }
            }
        }
        
        //tab avec les éléments de la partie gauche de la séparation
        for (i = 0; i < sep; i++) {
            tabG[i] = tab [i];
        }
        tabG[sep] = pivot;
    
        //tab avec les éléments de la partie droite de la séparation
        for (i = 0; i < longTab - 1 - tabG.length; i++) {
            tabD[i] = tab [sep + i];
        }

        tabG = TriQuickSort (tabG);
        tabD = TriQuickSort (tabD);
        tabFinal = Coller (tabG, tabD);

    }
    else {
        if (tab[0] > pivot) {
            let echange = tab[0];
            tab [0] = tab [1];
            tab [1] = echange; 
        }
        tabFinal = tab;
    }
}

function Coller (tabG, tabD) {
    let tabFinal = new Array;
    let longTabFinal = tabG.lenght + tabD.lenght;
    let k = 0;
    for (i = 0; i < longTabFinal; i++) {
        if (i < tabG.length) {
            tabFinal[i] = tabG [i];
        }
        else {
            tabFinal[i] = tabD [k];
            k = k + 1;
        }
    }
    return tabFinal;
}

//calcul du sam d'après valeurs du tableau
function SAM (tabSalairesSam) {
    let nbValNonNul = 0;
    let sommeSalaires = 0;
    let long = tabSalairesSam.length;
    
    for (let i = 1; i < long; i++) {    //la ligne 0 contient les en-têtes de colonne
        if (tabSalairesSam[i][2] != 0) {
            sommeSalaires = sommeSalaires + tabSalairesSam[i][2];
            nbValNonNul = nbValNonNul + 1;
        }
    }
    let result = 0;
    if (nbValNonNul == 0) {
        result = 0;
    }
    else {
        result = Math.round(sommeSalaires / nbValNonNul) ;
    }
    return result;
}


function EstEntier(val, min, max) {
    return Number.isInteger(+val) && val >= min && val <= max;
}

function EstDateValide(date, dateMin, dateMax) {
    
    if (date.toLocaleDateString() == dateMin.toLocaleDateString()) {
        return true;
    }
    else {
        if (date >= dateMin && date < dateMax) {
            return true;
        }
        else {
            return false;
        }
    }
}

function CalculNbTrim (annee, salaire, estEuros) {
    let longtab = tabFinal.length;
    let k = 0;
    let montantTrim = 0;
    let nbTrim = 0;
    let resultat = {};
    
    //on cherche l'indice de la ligne correspondant à l'année saisie
    for (let i = 1; i < longtab; i++) {
        let anneeTab = parseInt(tabFinal[i][0]);
        if (anneeTab == annee) {
            k = i;
        }
    }
    
    if (!estEuros) {
        montantTrim = parseFloat(tabFinal[k][3].replace(/ /g,''));  
    }
    else {
        montantTrim = parseFloat(tabFinal[k][1].replace(/ /g,''));  //on enlève les espaces dans la chaine avec replace et on convertit en float avec parse float
    }
    
    nbTrim = Math.min(4, Math.trunc(salaire / montantTrim)) ; 
    resultat.Trim = nbTrim;
    resultat.MontantTrim = montantTrim;
    return resultat;
}