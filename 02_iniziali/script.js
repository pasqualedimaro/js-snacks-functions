/* Scrivi una funzione che accetti un array di nomi e restituisca nuovo un array con le iniziali di ogni parola dell'array fornito */

const names = ["Anna", "Luca", "Marco", "Adele", "Giovanni", "Alessandra"];


// Dichiara la funzione qui.

// funzione tradizionale

function ottieniIniziali(nomi) {
    const iniziali = [];
    for (let i = 0; i < nomi.length; i++) {
        iniziali.push(nomi[i][0]);
    }
    return iniziali;
}

// funzione con arrow
const ottieniInizialiArrow = (nomi) => {
    const iniziali = [];
    for (let i = 0; i < nomi.length; i++) {
        iniziali.push(nomi[i][0]);
    }
    return iniziali;
}


// Invoca la funzione qui e stampa il risultato in console

// stamp tradizionale
console.log("Funzione tradizionale:", ottieniIniziali(names));

// stamp arrow
console.log("Arrow function:", ottieniInizialiArrow(names));

//Risultato atteso: ["A", "L", "M", "A", "G", "A"]